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




function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/post', data);
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/api/post/${data.postId}/comment`, data);
}

function* addPost(action) {
  try {
    // const result =  yield call(logiInAPI);
    console.log(action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function* addComment(action) {
  try {
    // const result =  yield call(addCommentAPI);
    console.log(action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL3Bvc3QuanMiXSwibmFtZXMiOlsiYWRkUG9zdEFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwiYWRkUG9zdCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJkZWxheSIsInB1dCIsInR5cGUiLCJBRERfUE9TVF9TVUNDRVNTIiwiZXJyIiwiQUREX1BPU1RfRkFJTFVSRSIsInJlc3BvbnNlIiwiYWRkQ29tbWVudCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsIkFERF9QT1NUX1JFUVVFU1QiLCJ3YXRjaEFkZENvbW1lbnQiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwicG9zdFNhZ2EiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUtBLFNBQVNBLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3hCLFNBQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxXQUFYLEVBQXdCRixJQUF4QixDQUFQO0FBQ0Q7O0FBRUQsU0FBU0csYUFBVCxDQUF1QkgsSUFBdkIsRUFBNkI7QUFDM0IsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFZLGFBQVlGLElBQUksQ0FBQ0ksTUFBTyxVQUFwQyxFQUErQ0osSUFBL0MsQ0FBUDtBQUNEOztBQUVELFVBQVVLLE9BQVYsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3hCLE1BQUk7QUFDRjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBTSxDQUFDTixJQUFuQjtBQUNBLFVBQU1TLGdFQUFLLENBQUMsSUFBRCxDQUFYO0FBQ0EsVUFBTUMsOERBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUVDLCtEQURFO0FBRVJaLFVBQUksRUFBRU0sTUFBTSxDQUFDTjtBQUZMLEtBQUQsQ0FBVDtBQUlELEdBUkQsQ0FRRSxPQUFPYSxHQUFQLEVBQVk7QUFDWixVQUFNSCw4REFBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRUcsK0RBREU7QUFFUmQsVUFBSSxFQUFHYSxHQUFHLENBQUNFLFFBQUosQ0FBYWY7QUFGWixLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFVBQVVnQixVQUFWLENBQXFCVixNQUFyQixFQUE2QjtBQUMzQixNQUFJO0FBQ0Y7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQU0sQ0FBQ04sSUFBbkI7QUFDQSxVQUFNUyxnRUFBSyxDQUFDLElBQUQsQ0FBWDtBQUNBLFVBQU1DLDhEQUFHLENBQUM7QUFDUkMsVUFBSSxFQUFFTSxrRUFERTtBQUVSakIsVUFBSSxFQUFDTSxNQUFNLENBQUNOO0FBRkosS0FBRCxDQUFUO0FBSUQsR0FSRCxDQVFFLE9BQU9hLEdBQVAsRUFBWTtBQUNaLFVBQU1ILDhEQUFHLENBQUM7QUFDUkMsVUFBSSxFQUFFTyxrRUFERTtBQUVSbEIsVUFBSSxFQUFHYSxHQUFHLENBQUNFLFFBQUosQ0FBYWY7QUFGWixLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFVBQVVtQixZQUFWLEdBQXlCO0FBQ3ZCLFFBQU1DLHFFQUFVLENBQUNDLCtEQUFELEVBQW1CaEIsT0FBbkIsQ0FBaEI7QUFDRDs7QUFFRCxVQUFVaUIsZUFBVixHQUE0QjtBQUMxQixRQUFNRixxRUFBVSxDQUFDRyxrRUFBRCxFQUFzQlAsVUFBdEIsQ0FBaEI7QUFDRDs7QUFHYyxVQUFVUSxRQUFWLEdBQXFCO0FBQ2xDLFFBQU1DLDhEQUFHLENBQUMsQ0FDUkMsK0RBQUksQ0FBQ1AsWUFBRCxDQURJLEVBRVJPLCtEQUFJLENBQUNKLGVBQUQsQ0FGSSxDQUFELENBQVQ7QUFJRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmJlZjIxYmRkYzRiMzk5ZTc1N2M5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBhbGwgLGZvcmssIGNhbGwsIHB1dCwgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0LCBkZWxheX0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHsgXHJcbiAgQUREX1BPU1RfUkVRVUVTVCwgQUREX1BPU1RfU1VDQ0VTUywgQUREX1BPU1RfRkFJTFVSRSxcclxuICBBRERfQ09NTUVOVF9SRVFVRVNULCBBRERfQ09NTUVOVF9TVUNDRVNTLCBBRERfQ09NTUVOVF9GQUlMVVJFXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvYXBpL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwobG9naUluQVBJKTtcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHsgICAgICAgXHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgfSkgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhIDogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgfSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSAgeWllbGQgY2FsbChhZGRDb21tZW50QVBJKTtcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHsgICAgICAgXHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsIFxyXG4gICAgICBkYXRhOmFjdGlvbi5kYXRhXHJcbiAgICB9KSBcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGEgOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICB9ICBcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KVxyXG4gIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9