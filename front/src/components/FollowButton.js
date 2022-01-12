import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';

const FollowButton = ({ post }) => {
  const dispatch = useDispatch();
  const { me, followLoading, unfollowLoading } = useSelector((state) => state.user);
  const isFollwing =  me?.Followings.find((v) => v.id === post.User.id);  // 내가 팔로잉 했는지/안했는지 확인
  const onClickButton = useCallback(() => {
    if(isFollwing) {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: post.User.id,
      })
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: post.User.id,
      })
    }
  }, [isFollwing])
  return (
    <Button loading={followLoading || unfollowLoading} onClick={onClickButton}>
      {isFollwing ? '언팔로우' : '팔로우'}
    </Button>
  );
};

FollowButton.propTypes = {
  post: PropTypes.object.isRequired
}

export default FollowButton;