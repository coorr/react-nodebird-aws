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
    console.error(err);
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
    console.error(err);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL3Bvc3QuanMiXSwibmFtZXMiOlsibG9hZFBvc3RzQVBJIiwiZGF0YSIsImF4aW9zIiwiZ2V0IiwibG9hZFBvc3RzIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJ0eXBlIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiZXJyIiwiZXJyb3IiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJyZXNwb25zZSIsImFkZFBvc3RBUEkiLCJwb3N0IiwiY29udGVudCIsImFkZFBvc3QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfVE9fTUUiLCJpZCIsIkFERF9QT1NUX0ZBSUxVUkUiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwiYWRkQ29tbWVudCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwicmVtb3ZlUG9zdEFQSSIsInJlbW92ZVBvc3QiLCJkZWxheSIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJ3YXRjaExvYWRQb3N0cyIsInRha2VMYXRlc3QiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJ3YXRjaEFkZFBvc3QiLCJBRERfUE9TVF9SRVFVRVNUIiwid2F0Y2hBZGRDb21tZW50IiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIndhdGNoUmVtb3ZlUG9zdCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJwb3N0U2FnYSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQzFCLFNBQU9DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxRQUFWLEVBQW9CRixJQUFwQixDQUFQO0FBQ0Q7O0FBRUQsVUFBVUcs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QUNKLElBRkwsQ0FFVzs7QUFGWCxLQUFELENBQVQ7QUFJQSxVQUFNUyw4REFBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRXVCLGdFQURFO0FBRVJqQyxVQUFJLEVBQUVJLE1BQU0sQ0FBQ0o7QUFGTCxLQUFELENBQVQ7QUFJRCxHQVpELENBWUUsT0FBT1ksR0FBUCxFQUFZO0FBQ1osVUFBTUgsOERBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUV3QixrRUFERTtBQUVSbEMsVUFBSSxFQUFHWSxHQUFHLENBQUNHLFFBQUosQ0FBYWY7QUFGWixLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFVBQVVtQyxjQUFWLEdBQTJCO0FBQ3pCLFFBQU1DLHFFQUFVLENBQUNDLGlFQUFELEVBQXFCbEMsU0FBckIsQ0FBaEI7QUFDRDs7QUFFRCxVQUFVbUMsWUFBVixHQUF5QjtBQUN2QixRQUFNRixxRUFBVSxDQUFDRywrREFBRCxFQUFtQnBCLE9BQW5CLENBQWhCO0FBQ0Q7O0FBRUQsVUFBVXFCLGVBQVYsR0FBNEI7QUFDMUIsUUFBTUoscUVBQVUsQ0FBQ0ssa0VBQUQsRUFBc0JmLFVBQXRCLENBQWhCO0FBQ0Q7O0FBRUQsVUFBVWdCLGVBQVYsR0FBNEI7QUFDMUIsUUFBTU4scUVBQVUsQ0FBQ08sa0VBQUQsRUFBc0JiLFVBQXRCLENBQWhCO0FBQ0Q7O0FBSWMsVUFBVWMsUUFBVixHQUFxQjtBQUNsQyxRQUFNQyw4REFBRyxDQUFDLENBQ1JDLCtEQUFJLENBQUNSLFlBQUQsQ0FESSxFQUVSUSwrREFBSSxDQUFDTixlQUFELENBRkksRUFHUk0sK0RBQUksQ0FBQ0osZUFBRCxDQUhJLEVBSVJJLCtEQUFJLENBQUNYLGNBQUQsQ0FKSSxDQUFELENBQVQ7QUFNRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjZlOTVmMmExOWZhM2E2N2I2N2ViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBhbGwgLGZvcmssIGNhbGwsIHB1dCwgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0LCBkZWxheSwgdGhyb3R0bGV9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7IFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX0NPTU1FTlRfRkFJTFVSRSwgXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX1BPU1RfU1VDQ0VTUywgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgXHJcbiAgTE9BRF9QT1NUU19SRVFVRVNULCBMT0FEX1BPU1RTX1NVQ0NFU1MsIExPQURfUE9TVFNfRkFJTFVSRSxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoJy9wb3N0cycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7ICAgICAgIFxyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsIFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgfSlcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZGF0YSA6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gIH0gIFxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCB7Y29udGVudDogZGF0YX0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgICAgICAgXHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICB9KSBcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGEgOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICB9ICBcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7ICAgICAgIFxyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLCBcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZGF0YSA6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gIH0gIFxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9yZW1vdmUnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEkpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImFhc2Rhc2RcIik7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICBcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUywgXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhICAvLyBpZCDqsJLsnbQg65Ok7Ja06rCA7J6I7J2MXHJcbiAgICB9KSBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhIDogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgfSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpXHJcbiAgXSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=