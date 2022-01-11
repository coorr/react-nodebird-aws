import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Popover, List, Comment } from 'antd';
import React, { useState,useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import PostImages from './PostImages.js';
import CommentForm from './CommentForm.js';
import PostCardContent from './PostCardContent.js';
import { REMOVE_POST_REQUEST } from '../reducers/post.js';
import FollowButton from './FollowButton.js'

const PostCard = ({ post }) => {
  const dispatch = useDispatch();

  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const id = useSelector((state) => state.user.me?.id);
  const { removePostLoading } = useSelector((state) => state.post);

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  },[]);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  },[]);

  const onRemovePost = useCallback(() => {
    console.log(post.id);
    console.log(removePostLoading);
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id
    })
  },[]);

  return (
    <div style={{marginBottom:20}}>
      <Card
        cover={post.Images && <PostImages images={post.Images} /> }
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
          : <HeartOutlined key="heart"  onClick={onToggleLike} />,
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover key="more" content={(
            <Button.Group>
              { id && post.User.id !== id ? (  // DB가 있을 경우 === 바꿔야함
                <>
                <Button>수정</Button>
                <Button type="danger" onClick={onRemovePost} loading={removePostLoading}>삭제</Button>
                </>
              ) : <Button>신고</Button>}
            </Button.Group>
          )}>
            <EllipsisOutlined   />
          </Popover>,
        ]}
        extra={id && <FollowButton post={post} />}
      >
        <Card.Meta 
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          description={<PostCardContent postData={post.content} />}
          // description={post.content}
          title={post.User.nickname}
        />
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          <List 
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
    </div>
  );
};

PostCard.propTypes = {
  post : PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt : PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
}

export default PostCard;