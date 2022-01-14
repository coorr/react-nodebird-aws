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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post', {
    content: data
  });
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
      data: result.data.id
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL3Bvc3QuanMiXSwibmFtZXMiOlsibG9hZFBvc3RzQVBJIiwiZGF0YSIsImF4aW9zIiwiZ2V0IiwibG9hZFBvc3RzIiwiYWN0aW9uIiwiZGVsYXkiLCJpZCIsInNob3J0aWQiLCJnZW5lcmF0ZSIsInB1dCIsInR5cGUiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJnZW5lcmF0ZUR1bW15UG9zdCIsImVyciIsIkxPQURfUE9TVFNfRkFJTFVSRSIsInJlc3BvbnNlIiwiYWRkUG9zdEFQSSIsInBvc3QiLCJjb250ZW50IiwiYWRkUG9zdCIsInJlc3VsdCIsImNhbGwiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfVE9fTUUiLCJBRERfUE9TVF9GQUlMVVJFIiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsImFkZENvbW1lbnQiLCJjb25zb2xlIiwibG9nIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJ3YXRjaExvYWRQb3N0cyIsInRocm90dGxlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsIkFERF9QT1NUX1JFUVVFU1QiLCJ3YXRjaEFkZENvbW1lbnQiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwid2F0Y2hSZW1vdmVQb3N0IiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsInBvc3RTYWdhIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEI7QUFDMUIsU0FBT0MsNENB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SUEsVUFBTVMsOERBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUV5QixnRUFERTtBQUVSbkMsVUFBSSxFQUFFSSxNQUFNLENBQUNKO0FBRkwsS0FBRCxDQUFUO0FBSUQsR0FaRCxDQVlFLE9BQU9hLEdBQVAsRUFBWTtBQUNaLFVBQU1KLDhEQUFHLENBQUM7QUFDUkMsVUFBSSxFQUFFMEIsa0VBREU7QUFFUnBDLFVBQUksRUFBR2EsR0FBRyxDQUFDRSxRQUFKLENBQWFmO0FBRlosS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFRCxVQUFVcUMsY0FBVixHQUEyQjtBQUN6QixRQUFNQyxtRUFBUSxDQUFDLElBQUQsRUFBT0MsaUVBQVAsRUFBMkJwQyxTQUEzQixDQUFkO0FBQ0Q7O0FBRUQsVUFBVXFDLFlBQVYsR0FBeUI7QUFDdkIsUUFBTUMscUVBQVUsQ0FBQ0MsK0RBQUQsRUFBbUJ2QixPQUFuQixDQUFoQjtBQUNEOztBQUVELFVBQVV3QixlQUFWLEdBQTRCO0FBQzFCLFFBQU1GLHFFQUFVLENBQUNHLGtFQUFELEVBQXNCakIsVUFBdEIsQ0FBaEI7QUFDRDs7QUFFRCxVQUFVa0IsZUFBVixHQUE0QjtBQUMxQixRQUFNSixxRUFBVSxDQUFDSyxrRUFBRCxFQUFzQmIsVUFBdEIsQ0FBaEI7QUFDRDs7QUFJYyxVQUFVYyxRQUFWLEdBQXFCO0FBQ2xDLFFBQU1DLDhEQUFHLENBQUMsQ0FDUkMsK0RBQUksQ0FBQ1QsWUFBRCxDQURJLEVBRVJTLCtEQUFJLENBQUNOLGVBQUQsQ0FGSSxFQUdSTSwrREFBSSxDQUFDSixlQUFELENBSEksRUFJUkksK0RBQUksQ0FBQ1osY0FBRCxDQUpJLENBQUQsQ0FBVDtBQU1EIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMGRjODM3MzQwMGY2ZjE5YTczNmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGFsbCAsZm9yaywgY2FsbCwgcHV0LCB0YWtlRXZlcnksIHRha2VMYXRlc3QsIGRlbGF5LCB0aHJvdHRsZX0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHNob3J0aWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCB7IFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX0NPTU1FTlRfRkFJTFVSRSwgXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCwgUkVNT1ZFX1BPU1RfU1VDQ0VTUywgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgTE9BRF9QT1NUU19SRVFVRVNULCBMT0FEX1BPU1RTX1NVQ0NFU1MsIExPQURfUE9TVFNfRkFJTFVSRSwgZ2VuZXJhdGVEdW1teVBvc3RcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoJy9hcGkvcG9zdHMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICBjb25zdCBpZCA9IHNob3J0aWQuZ2VuZXJhdGUoKTtcclxuICAgIHlpZWxkIHB1dCh7ICAgICAgIFxyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsIFxyXG4gICAgICBkYXRhOiBnZW5lcmF0ZUR1bW15UG9zdCgxMCksXHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBkYXRhIDogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgfSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIHtjb250ZW50OiBkYXRhfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSAgeWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICBcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUywgXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSlcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgIH0pIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZGF0YSA6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gIH0gIFxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEkpO1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICBcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUywgXHJcbiAgICAgIGRhdGE6YWN0aW9uLmRhdGFcclxuICAgIH0pIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZGF0YSA6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gIH0gIFxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9yZW1vdmUnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEkpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImFhc2Rhc2RcIik7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICBcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUywgXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhICAvLyBpZCDqsJLsnbQg65Ok7Ja06rCA7J6I7J2MXHJcbiAgICB9KSBcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhIDogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgfSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKVxyXG4gIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9