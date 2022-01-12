import axios from 'axios';
import { all, fork, takeLatest, delay, put,call } from 'redux-saga/effects';
import { 
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, 
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, 
  FOLLOW_SUCCESS, FOLLOW_FAILURE, FOLLOW_REQUEST,
  UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, UNFOLLOW_REQUEST
} from '../reducers/user';

const API_URL = 'http://localhost:4001';

function logInAPI(data) {
  return axios.post("/api/login", data)
}

function logOutAPI(data) {
  return axios.post("/api/logOut", data)
}

function followAPI(data) {
  return axios.post("/api/followAPI", data)
}

function unfollowAPI(data) {
  return axios.post("/api/unfollowAPI", data)
}


function* logIn(action) {
  try {
    // const result =  yield call(logInAPI);
    yield delay(1000);
    yield put({       // action을 dispatch 하는 느낌의 put
      type: LOG_IN_SUCCESS, 
      data: action.data
    }) 
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      data : err.response.data
    })
  }  
}

function* logOut() {
  try {
    // const result =  yield call(logOutAPI);
    yield delay(1000);
    yield put({       // action을 dispatch 하는 느낌의 put
      type: LOG_OUT_SUCCESS, 
    }) 
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      data : err.response.data
    })
  }  
}


function signUpAPI(data) {
  return axios.post(API_URL+'/user', data);
}
function* signUp(action) {
  try {
    const result =  yield call(signUpAPI, action.data);
    console.log(result);
    yield put({       
      type: SIGN_UP_SUCCESS, 
      data: action.data
    }) 
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      data : err.response.data
    })
  }  
}

function* follow(action) {
  try {
    yield delay(1000);
    yield put({       
      type: FOLLOW_SUCCESS, 
      data: action.data
    }) 
  } catch (err) {
    yield put({
      type: FOLLOW_FAILURE,
      data : err.response.data
    })
  }  
}

function* unfollow(action) {
  try {
    yield delay(1000);
    yield put({       
      type: UNFOLLOW_SUCCESS, 
      data: action.data
    }) 
  } catch (err) {
    yield put({
      type: UNFOLLOW_FAILURE,
      data : err.response.data
    })
  }  
}

function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp)
}


export default function* userSage() {
  yield all([
    fork(watchFollow),
    fork(watchUnfollow),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
  ])
}