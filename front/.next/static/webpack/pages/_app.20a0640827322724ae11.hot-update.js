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
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./src/reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./src/reducers/user.js");






function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/posts', data);
}

function* loadPosts(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_SUCCESS"],
      data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["generateDummyPost"])(10)
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post', data);
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logiInAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
      data: {
        id,
        content: action.data
      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
      data: id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    // const result =  yield call(addCommentAPI);
    console.log(action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
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
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
      data: action.data // id 값이 들어가있음

    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL3Bvc3QuanMiXSwibmFtZXMiOlsibG9hZFBvc3RzQVBJIiwiZGF0YSIsImF4aW9zIiwiZ2V0IiwibG9hZFBvc3RzIiwiYWN0aW9uIiwiZGVsYXkiLCJpZCIsInNob3J0aWQiLCJnZW5lcmF0ZSIsInB1dCIsInR5cGUiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJnZW5lcmF0ZUR1bW15UG9zdCIsImVyciIsIkxPQURfUE9TVFNfRkFJTFVSRSIsInJlc3BvbnNlIiwiYWRkUG9zdEFQSSIsInBvc3QiLCJhZGRQb3N0IiwicmVzdWx0IiwiY2FsbCIsImxvZ2lJbkFQSSIsIkFERF9QT1NUX1NVQ0NFU1MiLCJjb250ZW50IiwiQUREX1BPU1RfVE9fTUUiLCJBRERfUE9TVF9GQUlMVVJFIiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsImFkZENvbW1lbnQiLCJjb25zb2xlIiwibG9nIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJ3YXRjaExvYWRQb3N0cyIsInRocm90dGxlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsIkFERF9QT1NUX1JFUVVFU1QiLCJ3YXRjaEFkZENvbW1lbnQiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwid2F0Y2hSZW1vdmVQb3N0IiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsInBvc3RTYWdhIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEI7QUFD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LFVBQUksRUFBRTBCLGdFQURFO0FBRVJwQyxVQUFJLEVBQUVJLE1BQU0sQ0FBQ0o7QUFGTCxLQUFELENBQVQ7QUFJRCxHQVpELENBWUUsT0FBT2EsR0FBUCxFQUFZO0FBQ1osVUFBTUosOERBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUUyQixrRUFERTtBQUVSckMsVUFBSSxFQUFHYSxHQUFHLENBQUNFLFFBQUosQ0FBYWY7QUFGWixLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFVBQVVzQyxjQUFWLEdBQTJCO0FBQ3pCLFFBQU1DLG1FQUFRLENBQUMsSUFBRCxFQUFPQyxpRUFBUCxFQUEyQnJDLFNBQTNCLENBQWQ7QUFDRDs7QUFFRCxVQUFVc0MsWUFBVixHQUF5QjtBQUN2QixRQUFNQyxxRUFBVSxDQUFDQywrREFBRCxFQUFtQnpCLE9BQW5CLENBQWhCO0FBQ0Q7O0FBRUQsVUFBVTBCLGVBQVYsR0FBNEI7QUFDMUIsUUFBTUYscUVBQVUsQ0FBQ0csa0VBQUQsRUFBc0JqQixVQUF0QixDQUFoQjtBQUNEOztBQUVELFVBQVVrQixlQUFWLEdBQTRCO0FBQzFCLFFBQU1KLHFFQUFVLENBQUNLLGtFQUFELEVBQXNCYixVQUF0QixDQUFoQjtBQUNEOztBQUljLFVBQVVjLFFBQVYsR0FBcUI7QUFDbEMsUUFBTUMsOERBQUcsQ0FBQyxDQUNSQywrREFBSSxDQUFDVCxZQUFELENBREksRUFFUlMsK0RBQUksQ0FBQ04sZUFBRCxDQUZJLEVBR1JNLCtEQUFJLENBQUNKLGVBQUQsQ0FISSxFQUlSSSwrREFBSSxDQUFDWixjQUFELENBSkksQ0FBRCxDQUFUO0FBTUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yMGEwNjQwODI3MzIyNzI0YWUxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYWxsICxmb3JrLCBjYWxsLCBwdXQsIHRha2VFdmVyeSwgdGFrZUxhdGVzdCwgZGVsYXksIHRocm90dGxlfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgc2hvcnRpZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHsgXHJcbiAgQUREX1BPU1RfUkVRVUVTVCwgQUREX1BPU1RfU1VDQ0VTUywgQUREX1BPU1RfRkFJTFVSRSxcclxuICBBRERfQ09NTUVOVF9SRVFVRVNULCBBRERfQ09NTUVOVF9TVUNDRVNTLCBBRERfQ09NTUVOVF9GQUlMVVJFLCBcclxuICBSRU1PVkVfUE9TVF9SRVFVRVNULCBSRU1PVkVfUE9TVF9TVUNDRVNTLCBSRU1PVkVfUE9TVF9GQUlMVVJFLCBMT0FEX1BPU1RTX1JFUVVFU1QsIExPQURfUE9TVFNfU1VDQ0VTUywgTE9BRF9QT1NUU19GQUlMVVJFLCBnZW5lcmF0ZUR1bW15UG9zdFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldCgnL2FwaS9wb3N0cycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIGNvbnN0IGlkID0gc2hvcnRpZC5nZW5lcmF0ZSgpO1xyXG4gICAgeWllbGQgcHV0KHsgICAgICAgXHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUywgXHJcbiAgICAgIGRhdGE6IGdlbmVyYXRlRHVtbXlQb3N0KDEwKSxcclxuICAgIH0pXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGEgOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICB9ICBcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSAgeWllbGQgY2FsbChsb2dpSW5BUEkpO1xyXG4gICAgeWllbGQgcHV0KHsgICAgICAgXHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgY29udGVudDogYWN0aW9uLmRhdGFcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOmlkLFxyXG4gICAgfSkgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhIDogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgfSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvYXBpL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSk7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7ICAgICAgIFxyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLCBcclxuICAgICAgZGF0YTphY3Rpb24uZGF0YVxyXG4gICAgfSkgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhIDogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgfSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3JlbW92ZScsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIGNvbnNvbGUubG9nKFwiYWFzZGFzZFwiKTtcclxuICAgIHlpZWxkIHB1dCh7ICAgICAgIFxyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLCBcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEgIC8vIGlkIOqwkuydtCDrk6TslrTqsIDsnojsnYxcclxuICAgIH0pIFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSlcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGEgOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICB9ICBcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpXHJcbiAgXSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=