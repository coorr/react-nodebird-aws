webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/sagas/post.js":
/*!***************************!*\
  !*** ./src/sagas/post.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./src/reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./src/reducers/user.js");





function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.lastId);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post', data);
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(changeNicknameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post/images', data);
}

function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data}/retweet`);
}

function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(retweetAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}

function* watchLoadUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchLoadRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadRetweet)]);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL3Bvc3QuanMiXSwibmFtZXMiOlsibG9hZFBvc3RzQVBJIiwibGFzdElkIiwiYXhpb3MiLCJnZXQiLCJsb2FkUG9zdHMiLCJhY3Rpb24iLCJyZXN1bHQiLCJjYWxsIiwiY29uc29sZSIsImxvZyIsInB1dCIsInR5cGUiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJkYXRhIiwiZXJyIiwiZXJyb3IiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJyZXNwb25zZSIsImFkZFBvc3RBUEkiLCJwb3N0IiwiYWRkUG9zdCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9UT19NRSIsImlkIiwiQUREX1BPU1RfRkFJTFVSRSIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJhZGRDb21tZW50IiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJyZW1vdmVQb3N0QVBJIiwiZGVsZXRlIiwicmVtb3ZlUG9zdCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0IiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsInVubGlrZVBvc3RBUEkiLCJ1bmxpa2VQb3N0IiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJjaGFuZ2VOaWNrbmFtZUFQSSIsIm5pY2tuYW1lIiwiY2hhbmdlTmlja25hbWUiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0ZBSUxVUkUiLCJ3YXRjaExvYWRQb3N0cyIsInRha2VMYXRlc3QiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJ3YXRjaEFkZFBvc3QiLCJBRERfUE9TVF9SRVFVRVNUIiwid2F0Y2hBZGRDb21tZW50IiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIndhdGNoUmVtb3ZlUG9zdCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJ3YXRjaExpa2VQb3N0IiwiTElLRV9QT1NUX1JFUVVFU1QiLCJ3YXRjaFVubGlrZVBvc3QiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwid2F0Y2hMb2FkVXBsb2FkSW1hZ2VzIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwid2F0Y2hMb2FkUmV0d2VldCIsIlJFVFdFRVRfUkVRVUVTVCIsInBvc3RTYWdhIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBU0E7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQkMsTUFBdEIsRUFBOEI7QUFDNUIsU0FBT0MsNENBQUssQ0FBQ0MsR0FBTixDQUFXLGlCQUFnQkYsTUFBTSxJQUFJLENBQUUsRUFBdkMsQ0FBUDtBQUNEOztBQUVELFVBQVVHLFNBQVYsQ0FBb0JDLE1BQXBCLEVBQTRCO0FBQzFCLE1BQUk7QUFDRixVQUFNQyxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ1AsWUFBRCxFQUFlSyxNQUFNLENBQUNKLE1BQXRCLENBQXpCO0FBQ0FPLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaO0FBQ0EsVUFBTUksOERBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUVDLGlFQURFO0FBRVJDLFVBQUksRUFBRVAsTUFBTSxDQUFDTztBQUZMLEtBQUQsQ0FBVDtBQUlELEdBUEQsQ0FPRSxPQUFPQyxHQUFQLEVBQVk7QUFDWk4sV0FBTyxDQUFDTyxLQUFSLENBQWNELEdBQWQ7QUFDQSxVQUFNSiw4REFBRyxDQUFD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YSxzRUFBRCxFQUEwQnpCLGNBQTFCLENBQWhCO0FBQ0Q7O0FBQ0QsVUFBVTBCLHFCQUFWLEdBQWtDO0FBQ2hDLFFBQU1kLHFFQUFVLENBQUNlLG9FQUFELEVBQXdCdkIsWUFBeEIsQ0FBaEI7QUFDRDs7QUFDRCxVQUFVd0IsZ0JBQVYsR0FBNkI7QUFDM0IsUUFBTWhCLHFFQUFVLENBQUNpQiw4REFBRCxFQUFrQnJCLE9BQWxCLENBQWhCO0FBQ0Q7O0FBSWMsVUFBVXNCLFFBQVYsR0FBcUI7QUFDbEMsUUFBTUMsOERBQUcsQ0FBQyxDQUNSQywrREFBSSxDQUFDbEIsWUFBRCxDQURJLEVBRVJrQiwrREFBSSxDQUFDaEIsZUFBRCxDQUZJLEVBR1JnQiwrREFBSSxDQUFDZCxlQUFELENBSEksRUFJUmMsK0RBQUksQ0FBQ3JCLGNBQUQsQ0FKSSxFQUtScUIsK0RBQUksQ0FBQ1osYUFBRCxDQUxJLEVBTVJZLCtEQUFJLENBQUNWLGVBQUQsQ0FOSSxFQU9SVSwrREFBSSxDQUFDUixtQkFBRCxDQVBJLEVBUVJRLCtEQUFJLENBQUNOLHFCQUFELENBUkksRUFTUk0sK0RBQUksQ0FBQ0osZ0JBQUQsQ0FUSSxDQUFELENBQVQ7QUFXRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjc1NTFmY2IwMjc1MGM5MGM1Yzk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBhbGwgLGZvcmssIGNhbGwsIHB1dCwgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0LCBkZWxheSwgdGhyb3R0bGV9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7IFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX0NPTU1FTlRfRkFJTFVSRSwgXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX1BPU1RfU1VDQ0VTUywgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgXHJcbiAgTE9BRF9QT1NUU19SRVFVRVNULCBMT0FEX1BPU1RTX1NVQ0NFU1MsIExPQURfUE9TVFNfRkFJTFVSRSwgXHJcbiAgTElLRV9QT1NUX1JFUVVFU1QsIFVOTElLRV9QT1NUX1JFUVVFU1QsIExJS0VfUE9TVF9TVUNDRVNTLCBcclxuICBMSUtFX1BPU1RfRkFJTFVSRSwgVU5MSUtFX1BPU1RfU1VDQ0VTUywgVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgVVBMT0FEX0lNQUdFU19TVUNDRVNTLCBSRVRXRUVUX1NVQ0NFU1MsIFJFVFdFRVRfRkFJTFVSRSwgUkVUV0VFVF9SRVFVRVNULFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUywgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICBcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLCBcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yIDogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgfSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsICBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7ICAgICAgIFxyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLCBcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KVxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgfSkgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gIH0gIFxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIHlpZWxkIHB1dCh7ICAgICAgIFxyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLCBcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICB9ICBcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgICAgICAgXHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSBcclxuICAgIH0pIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICB9ICBcclxufVxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7ICAgICAgIFxyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUywgXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhICBcclxuICAgIH0pIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yIDogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgfSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgICAgICAgXHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSAgXHJcbiAgICB9KSBcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yIDogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgfSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZU5pY2tuYW1lQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL25pY2tuYW1lJywgeyBuaWNrbmFtZTogZGF0YSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSAgeWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgICAgICAgXHJcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLCBcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEgIFxyXG4gICAgfSkgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICB9ICBcclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgICAgICAgXHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUywgXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KSBcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICB9ICBcclxufVxyXG5cclxuZnVuY3Rpb24gcmV0d2VldEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YX0vcmV0d2VldGApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwocmV0d2VldEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgICAgICAgXHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfU1VDQ0VTUywgXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KSBcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICB9ICBcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVbmxpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmlja25hbWUoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVcGxvYWRJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcylcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUmV0d2VldCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldClcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFVwbG9hZEltYWdlcyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFJldHdlZXQpLFxyXG4gIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9