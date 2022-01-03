import React from 'react';
import { Card, Avatar, Button } from 'antd';
import { useCallback } from 'react/cjs/react.development';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers';

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <>
        <div key='twit'>찍찍<br />0</div>
        <div key='followings'>팔로잉<br />0</div>
        <div key='followings'>팔로워0<br /></div>
        </>
      ]}
    >
      <Card.Meta 
        avatar={<Avatar>ZC</Avatar>}
        title="ZeroCho"
      />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;