import { all ,fork } from 'redux-saga/effects';

import postSaga from './post';
import userSage from './user';



export default function* rootSaga() {
  yield all([
    fork(postSaga),
    fork(userSage)
  ])
}