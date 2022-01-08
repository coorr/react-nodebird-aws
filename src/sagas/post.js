import axios from 'axios';
import { all ,fork, call, put, takeEvery, takeLatest, delay} from 'redux-saga/effects';
import { 
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE
} from '../reducers/post';

function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function addCommentAPI(data) {
  return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addPost(action) {
  try {
    // const result =  yield call(logiInAPI);
    console.log(action.data);
    yield delay(1000);
    yield put({       
      type: ADD_POST_SUCCESS, 
      data: action.data
    }) 
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data : err.response.data
    })
  }  
}

function* addComment(action) {
  try {
    // const result =  yield call(addCommentAPI);
    console.log(action.data);
    yield delay(1000);
    yield put({       
      type: ADD_COMMENT_SUCCESS, 
      data:action.data
    }) 
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data : err.response.data
    })
  }  
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}


export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComment)
  ])
}