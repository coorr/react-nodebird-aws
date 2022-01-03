import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import UserProfile from './UserProfile.js';
import LoginForm from './LoginForm.js';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;


const AppLayout = ({children}) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div>
      <div>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link href="/"><a>노드버드</a></Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/profile"><a>프로필</a></Link>
          </Menu.Item>
          <Menu.Item>
            <SearchInput />
          </Menu.Item>
          <Menu.Item>
            <Link href="/signup"><a>회원가입</a></Link>
          </Menu.Item>
        </Menu>
        <Row gutter={8}>
          <Col xs={24} md={6}>
            {isLoggedIn ? <UserProfile /> : <LoginForm />}
          </Col>
          <Col xs={24} md={12}>{children}</Col>
          <Col xs={24} md={6}><a href="https://coor.tistory.com/" target="_blank" rel="noreferrer noopener">Made by jin</a></Col>
        </Row>
      </div>
    </div>
  );
};

AppLayout.propTypes = {
  children : PropTypes.node.isRequired,  // react의 node && 화면에 그릴 수 모든 것들이 node
}


export default AppLayout;