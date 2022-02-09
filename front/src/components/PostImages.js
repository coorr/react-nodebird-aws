import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types'
import { PlusOutlined } from '@ant-design/icons/lib/icons';
import ImagesZoom from './ImagesZoom/index.js';
import { backUrl } from '../config/config'

const PostImages = ({images}) => {
  const [showImagesZoom, setShowImagesZoom] = useState('');

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  },[])
  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  },[]);

  if(images.length === 1) {
    return (
      <>
        <img role="presentation" src={`${images[0].src}`} alt={images[0].src} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    )
  }
  if(images.length === 2) {
    return (
      <>
        <div style={{displey:'flex'}}>
          <img role="presentation" style={{width:"40%"}} src={`${images[0].src}`} alt={images[0].src} onClick={onZoom} />
          <img role="presentation" style={{width:"40%"}} src={`${images[1].src}`} alt={images[1].src} onClick={onZoom} />
          {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </div>
      </>
    )
  }
  return (
    <div>
      <img role="presentation" style={{width:"50%"}} src={`${images[0].src}`} alt={images[0].src} onClick={onZoom} />
      <div
        role="presentation"
        style={{display: 'inline-block', width:'50%' , textAlign:'center' , verticalAlign:'middle'}}
        onClick={onZoom}      
      >
        <PlusOutlined />
        <br />
        {images.length - 1}
        개의 사진 더보기
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </div>
  );
};

PostImages.propTypes = {
  images : PropTypes.arrayOf(PropTypes.object),
}

export default PostImages;