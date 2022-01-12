import React, { useCallback, useState } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../reducers/user.js';
import useInput from '../hooks/useInput';

const ButtonWrapper = styled.div`
  margin-Top:10px;
`;

const FormWraaper = styled(Form)`
  padding:10px;
`

const LoginForm = () => { 
  const dispatch = useDispatch();
  const { logInLoading } = useSelector((state) => state.user);
  const [email,onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const ouSubmitForm = useCallback(() => {
    dispatch(loginRequestAction({email,password}));
  },[email,password]);

  return (
    <FormWraaper onFinish={ouSubmitForm}>
      <div>
        <label htmlFor='user-email'>이메일</label>
        <br />
        <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
      </div>
      <div>
        <label htmlFor='user-password'>비밀번호</label>
        <br />
        <Input name="user-password" value={password} onChange={onChangePassword} type="password" required />
      </div>
      <ButtonWrapper>
       <Button type="primary" htmlType='submit' loading={logInLoading}>로그인</Button>
       <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
    </FormWraaper>
  );
};



export default LoginForm;