import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const PostCardContent = ({postData}) => {   // 첫 번째 게시글 #해시태그 #익스프레스'.split(/#[^\s#]+/g)
  return (
    <div>
      {postData.split(/(#[^\s#]+)/g).map((v,i) => {
        if(v.match(/#[^\s#]+/)) {
          return <Link href={`/hashtag/${v.slice(1)}`} key={i}><a>{v}</a></Link>
        }
        return v;
      })}
    </div>
  );
};
// how to find 해쉬태그 앤 스플릿

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
}

export default PostCardContent;