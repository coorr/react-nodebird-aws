import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head';
import wrapper from '../store/configureStore';


const NodeBird = ({Component}) => {
  return (
    <>
    <Head>
      <meta charSet='utf-8' />
      <title>NodeBird</title>
    </Head>
    <div>공통 메뉴</div>
     <Component />
    </>
  )
}
NodeBird.protoTypes = {   // 점검할 때 좋다?
  Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);