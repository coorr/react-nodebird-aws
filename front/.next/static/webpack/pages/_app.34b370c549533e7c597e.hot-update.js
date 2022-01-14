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





function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/posts', data);
}

function* loadPosts(action) {
  console.log(action.data);

  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post', {
    content: data
  });
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
      data: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/remove', data);
}

function* removePost(action) {
  try {
    // const result =  yield call(removePostAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    console.log("aasdasd");
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: action.data // id 값이 들어가있음

    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
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

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL3Bvc3QuanMiXSwibmFtZXMiOlsibG9hZFBvc3RzQVBJIiwiZGF0YSIsImF4aW9zIiwiZ2V0IiwibG9hZFBvc3RzIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJ0eXBlIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiZXJyIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwicmVzcG9uc2UiLCJhZGRQb3N0QVBJIiwicG9zdCIsImNvbnRlbnQiLCJhZGRQb3N0IiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX1RPX01FIiwiaWQiLCJBRERfUE9TVF9GQUlMVVJFIiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsImFkZENvbW1lbnQiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsInJlbW92ZVBvc3RBUEkiLCJyZW1vdmVQb3N0IiwiZGVsYXkiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJBRERfUE9TVF9SRVFVRVNUIiwid2F0Y2hBZGRDb21tZW50IiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIndhdGNoUmVtb3ZlUG9zdCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJwb3N0U2FnYSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQzFCLFNBQU9DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxRQUFWLEVBQW9CRixJQUFwQixDQUFQO0FBQ0Q7O0FBRUQsVUFB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LGdFQURFO0FBRVJoQyxVQUFJLEVBQUVJLE1BQU0sQ0FBQ0o7QUFGTCxLQUFELENBQVQ7QUFJRCxHQVpELENBWUUsT0FBT1ksR0FBUCxFQUFZO0FBQ1osVUFBTUgsOERBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUV1QixrRUFERTtBQUVSakMsVUFBSSxFQUFHWSxHQUFHLENBQUNFLFFBQUosQ0FBYWQ7QUFGWixLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFVBQVVrQyxjQUFWLEdBQTJCO0FBQ3pCLFFBQU1DLG1FQUFRLENBQUMsSUFBRCxFQUFPQyxpRUFBUCxFQUEyQmpDLFNBQTNCLENBQWQ7QUFDRDs7QUFFRCxVQUFVa0MsWUFBVixHQUF5QjtBQUN2QixRQUFNQyxxRUFBVSxDQUFDQywrREFBRCxFQUFtQnJCLE9BQW5CLENBQWhCO0FBQ0Q7O0FBRUQsVUFBVXNCLGVBQVYsR0FBNEI7QUFDMUIsUUFBTUYscUVBQVUsQ0FBQ0csa0VBQUQsRUFBc0JoQixVQUF0QixDQUFoQjtBQUNEOztBQUVELFVBQVVpQixlQUFWLEdBQTRCO0FBQzFCLFFBQU1KLHFFQUFVLENBQUNLLGtFQUFELEVBQXNCZCxVQUF0QixDQUFoQjtBQUNEOztBQUljLFVBQVVlLFFBQVYsR0FBcUI7QUFDbEMsUUFBTUMsOERBQUcsQ0FBQyxDQUNSQywrREFBSSxDQUFDVCxZQUFELENBREksRUFFUlMsK0RBQUksQ0FBQ04sZUFBRCxDQUZJLEVBR1JNLCtEQUFJLENBQUNKLGVBQUQsQ0FISSxFQUlSSSwrREFBSSxDQUFDWixjQUFELENBSkksQ0FBRCxDQUFUO0FBTUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zNGIzNzBjNTQ5NTMzZTdjNTk3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYWxsICxmb3JrLCBjYWxsLCBwdXQsIHRha2VFdmVyeSwgdGFrZUxhdGVzdCwgZGVsYXksIHRocm90dGxlfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBcclxuICBBRERfUE9TVF9SRVFVRVNULCBBRERfUE9TVF9TVUNDRVNTLCBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsIEFERF9DT01NRU5UX1NVQ0NFU1MsIEFERF9DT01NRU5UX0ZBSUxVUkUsIFxyXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1NVQ0NFU1MsIFJFTU9WRV9QT1NUX0ZBSUxVUkUsIFxyXG4gIExPQURfUE9TVFNfUkVRVUVTVCwgTE9BRF9QT1NUU19TVUNDRVNTLCBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvcG9zdHMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICBcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLCBcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGEgOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICB9ICBcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0Jywge2NvbnRlbnQ6IGRhdGF9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7ICAgICAgIFxyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLCBcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KVxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgfSkgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhIDogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgfSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSAgeWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICBcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUywgXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KSBcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGEgOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICB9ICBcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcmVtb3ZlJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSAgeWllbGQgY2FsbChyZW1vdmVQb3N0QVBJKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgY29uc29sZS5sb2coXCJhYXNkYXNkXCIpO1xyXG4gICAgeWllbGQgcHV0KHsgICAgICAgXHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSAgLy8gaWQg6rCS7J20IOuTpOyWtOqwgOyeiOydjFxyXG4gICAgfSkgXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZGF0YSA6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gIH0gIFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRQb3N0cylcclxuICBdKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==