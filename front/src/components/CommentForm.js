import { Button, Input,Form } from 'antd';
import React,{useCallback, useEffect} from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

const CommentForm = ({post}) => {
  const dispatch = useDispatch();
  const { addCommentDone,addCommentLoading } = useSelector((state) => state.post);

  const id = useSelector((state) => state.user.me?.id);
  const [commentText, onChangeCommentText, setCommentText] = useInput(''); 

  useEffect(() => {
    console.log(addCommentDone);
    if(addCommentDone) {
      setCommentText('');
    }
  },[addCommentDone])
  
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, postId : post.id, userId: id},
    })
  }, [commentText, id]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{position: 'relative', margin:0}}>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
        <Button 
          style={{zIndex:1, position:'absolute', right:0, bottom:-40}} 
          type='primary' 
          htmlType='submit' 
          loading={addCommentLoading}
          >삐약</Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.proTypes = {
  post: PropTypes.object.isRequired,
}

export default CommentForm;