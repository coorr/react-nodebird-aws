import React,{useEffect} from 'react';
import Head from 'next/head'
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';
import NicknameEditForm from '../components/NicknameEditForm';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router'
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST, LOAD_USER_REQUEST } from '../reducers/user';
import { Card } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import wrapper from '../store/configureStore';
import { END } from 'redux-saga';

const About = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state)=> state.user);


  return (
      <AppLayout>
        <Head>
          <title>ZeroCho | NodeBird</title>
        </Head>
        { userInfo 
          ? (
            <Card
              actions={[
                <div key="twit">
                  짹짹
                  <br />
                  {userInfo.Posts}
                </div>,
                <div key="following">
                  팔로잉
                  <br />
                  {userInfo.Followings}
                </div>,
                <div key="follower">
                  팔로워
                  <br />
                  {userInfo.Followers}
                </div>
              ]}
            >
              <Card.Meta 
                avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
                title={userInfo.nickname}
                description="노드버드 매니아"
              />
            </Card>
          ) : null
        }
      </AppLayout>
  );
};

export const getStaticProps = wrapper.getStaticProps(async (context) => {
  context.store.dispatch({
    type: LOAD_USER_REQUEST,
    data: 8,
  })
  context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})

export default About;