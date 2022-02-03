import React from 'react';
import { Card, Avatar, Button } from 'antd';
import { useCallback } from 'react/cjs/react.development';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction, LOG_OUT_REQUEST } from '../reducers/user.js';
import Link from 'next/link'

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user)

  const onLogOut = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST
    });
  }, []);

  return (
    <Card
      actions={[
        <>
        <div key='twit'><Link href={`/user/${me.id}`}><a>찍찍<br />{me.Posts.length}</a></Link></div>
        <div key='followings'><Link href="/profile"><a>팔로잉<br />{me.Followings.length}</a></Link></div>
        <div key='followings'><Link href="/profile"><a>팔로워<br />{me.Followers.length}</a></Link></div>
        </>
      ]}
    >
      <Card.Meta 
        avatar={(
          <Link href={`/user/${me.id}`}>
            <a><Avatar>{me.nickname[0]}</Avatar></a>
          </Link>
        )}
        title={me.nickname}
      />
      <Button onClick={onLogOut} loading={logOutLoading} >로그아웃</Button>
    </Card>
  );
};

export default UserProfile;