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





function loadPostsAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/posts');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL3Bvc3QuanMiXSwibmFtZXMiOlsibG9hZFBvc3RzQVBJIiwiYXhpb3MiLCJnZXQiLCJsb2FkUG9zdHMiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJ0eXBlIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiZXJyIiwiZXJyb3IiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJyZXNwb25zZSIsImFkZFBvc3RBUEkiLCJwb3N0IiwiY29udGVudCIsImFkZFBvc3QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfVE9fTUUiLCJpZCIsIkFERF9QT1NUX0ZBSUxVUkUiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwiYWRkQ29tbWVudCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwicmVtb3ZlUG9zdEFQSSIsInJlbW92ZVBvc3QiLCJkZWxheSIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJ3YXRjaExvYWRQb3N0cyIsInRha2VMYXRlc3QiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJ3YXRjaEFkZFBvc3QiLCJBRERfUE9TVF9SRVFVRVNUIiwid2F0Y2hBZGRDb21tZW50IiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIndhdGNoUmVtb3ZlUG9zdCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJwb3N0U2FnYSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BOztBQUVBLFNBQVNBLFlBQVQsR0FBd0I7QUFDdEIsU0FBT0MsNENBQUssQ0FBQ0MsR0FBTixDQUFVLFFBQVYsQ0FBUDtBQUNEOztBQUVELFVBQVVDLFNBQVYsQ0FBb0JDLE1BQXBCLEVBQTRCO0FB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QSxVQUFNRyw4REFBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRXVCLGdFQURFO0FBRVIzQixVQUFJLEVBQUVILE1BQU0sQ0FBQ0c7QUFGTCxLQUFELENBQVQ7QUFJRCxHQVpELENBWUUsT0FBT00sR0FBUCxFQUFZO0FBQ1osVUFBTUgsOERBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUV3QixrRUFERTtBQUVSNUIsVUFBSSxFQUFHTSxHQUFHLENBQUNHLFFBQUosQ0FBYVQ7QUFGWixLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFVBQVU2QixjQUFWLEdBQTJCO0FBQ3pCLFFBQU1DLHFFQUFVLENBQUNDLGlFQUFELEVBQXFCbkMsU0FBckIsQ0FBaEI7QUFDRDs7QUFFRCxVQUFVb0MsWUFBVixHQUF5QjtBQUN2QixRQUFNRixxRUFBVSxDQUFDRywrREFBRCxFQUFtQnBCLE9BQW5CLENBQWhCO0FBQ0Q7O0FBRUQsVUFBVXFCLGVBQVYsR0FBNEI7QUFDMUIsUUFBTUoscUVBQVUsQ0FBQ0ssa0VBQUQsRUFBc0JmLFVBQXRCLENBQWhCO0FBQ0Q7O0FBRUQsVUFBVWdCLGVBQVYsR0FBNEI7QUFDMUIsUUFBTU4scUVBQVUsQ0FBQ08sa0VBQUQsRUFBc0JiLFVBQXRCLENBQWhCO0FBQ0Q7O0FBSWMsVUFBVWMsUUFBVixHQUFxQjtBQUNsQyxRQUFNQyw4REFBRyxDQUFDLENBQ1JDLCtEQUFJLENBQUNSLFlBQUQsQ0FESSxFQUVSUSwrREFBSSxDQUFDTixlQUFELENBRkksRUFHUk0sK0RBQUksQ0FBQ0osZUFBRCxDQUhJLEVBSVJJLCtEQUFJLENBQUNYLGNBQUQsQ0FKSSxDQUFELENBQVQ7QUFNRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmIzYzI4ODU2ODdlZmRlNTI1OGNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBhbGwgLGZvcmssIGNhbGwsIHB1dCwgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0LCBkZWxheSwgdGhyb3R0bGV9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7IFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX0NPTU1FTlRfRkFJTFVSRSwgXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX1BPU1RfU1VDQ0VTUywgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgXHJcbiAgTE9BRF9QT1NUU19SRVFVRVNULCBMT0FEX1BPU1RTX1NVQ0NFU1MsIExPQURfUE9TVFNfRkFJTFVSRSxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldCgnL3Bvc3RzJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgICAgICAgXHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUywgXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBkYXRhIDogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgfSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIHtjb250ZW50OiBkYXRhfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSAgeWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICBcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUywgXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSlcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgIH0pIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZGF0YSA6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gIH0gIFxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgICAgICAgXHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsIFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgfSkgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhIDogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgfSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3JlbW92ZScsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIGNvbnNvbGUubG9nKFwiYWFzZGFzZFwiKTtcclxuICAgIHlpZWxkIHB1dCh7ICAgICAgIFxyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLCBcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEgIC8vIGlkIOqwkuydtCDrk6TslrTqsIDsnojsnYxcclxuICAgIH0pIFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSlcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGEgOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICB9ICBcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRQb3N0cylcclxuICBdKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==