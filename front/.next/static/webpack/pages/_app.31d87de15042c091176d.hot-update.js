webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/sagas/user.js":
/*!***************************!*\
  !*** ./src/sagas/user.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSage; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./src/reducers/user.js");




function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/user");
}

function* loadMyInfo(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyInfoAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/user/login", data);
}

function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logInAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.log(err.response);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/user/logout");
}

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      // action을 dispatch 하는 느낌의 put
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user', data);
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/followAPI", data);
}

function* follow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/unfollowAPI", data);
}

function* unfollow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* userSage() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL3VzZXIuanMiXSwibmFtZXMiOlsibG9hZE15SW5mb0FQSSIsImF4aW9zIiwiZ2V0IiwibG9hZE15SW5mbyIsImFjdGlvbiIsInJlc3VsdCIsImNhbGwiLCJkYXRhIiwicHV0IiwidHlwZSIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiZXJyIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJlcnJvciIsInJlc3BvbnNlIiwibG9nSW5BUEkiLCJwb3N0IiwibG9nSW4iLCJjb25zb2xlIiwibG9nIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsImxvZ091dEFQSSIsImxvZ091dCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsInNpZ25VcEFQSSIsInNpZ25VcCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsImZvbGxvd0FQSSIsImZvbGxvdyIsImRlbGF5IiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIndhdGNoRm9sbG93IiwidGFrZUxhdGVzdCIsIkZPTExPV19SRVFVRVNUIiwid2F0Y2hVbmZvbGxvdyIsIlVORk9MTE9XX1JFUVVFU1QiLCJ3YXRjaExvZ0luIiwiTE9HX0lOX1JFUVVFU1QiLCJ3YXRjaExvZ091dCIsIkxPR19PVVRfUkVRVUVTVCIsIndhdGNoU2lnblVwIiwiU0lHTl9VUF9SRVFVRVNUIiwid2F0Y2hMb2FkTXlJbmZvIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJ1c2VyU2FnZSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBVUEsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QixTQUFPQyw0Q0FBSyxDQUFDQyxH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QUFtQlAsUUFBbkIsQ0FBaEI7QUFDRDs7QUFDRCxVQUFVUSxVQUFWLEdBQXVCO0FBQ3JCLFFBQU1KLHFFQUFVLENBQUNLLDZEQUFELEVBQWlCNUIsS0FBakIsQ0FBaEI7QUFDRDs7QUFDRCxVQUFVNkIsV0FBVixHQUF3QjtBQUN0QixRQUFNTixxRUFBVSxDQUFDTyw4REFBRCxFQUFrQnhCLE1BQWxCLENBQWhCO0FBQ0Q7O0FBRUQsVUFBVXlCLFdBQVYsR0FBd0I7QUFDdEIsUUFBTVIscUVBQVUsQ0FBQ1MsOERBQUQsRUFBa0J0QixNQUFsQixDQUFoQjtBQUNEOztBQUNELFVBQVV1QixlQUFWLEdBQTRCO0FBQzFCLFFBQU1WLHFFQUFVLENBQUNXLG1FQUFELEVBQXVCaEQsVUFBdkIsQ0FBaEI7QUFDRDs7QUFJYyxVQUFVaUQsUUFBVixHQUFxQjtBQUNsQyxRQUFNQyw4REFBRyxDQUFDLENBQ1JDLCtEQUFJLENBQUNmLFdBQUQsQ0FESSxFQUVSZSwrREFBSSxDQUFDWixhQUFELENBRkksRUFHUlksK0RBQUksQ0FBQ1YsVUFBRCxDQUhJLEVBSVJVLCtEQUFJLENBQUNSLFdBQUQsQ0FKSSxFQUtSUSwrREFBSSxDQUFDTixXQUFELENBTEksRUFNUk0sK0RBQUksQ0FBQ0osZUFBRCxDQU5JLENBQUQsQ0FBVDtBQVFEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzFkODdkZTE1MDQyYzA5MTE3NmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGFsbCwgZm9yaywgdGFrZUxhdGVzdCwgZGVsYXksIHB1dCxjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHsgXHJcbiAgTE9HX0lOX1JFUVVFU1QsIExPR19JTl9TVUNDRVNTLCBMT0dfSU5fRkFJTFVSRSwgXHJcbiAgTE9HX09VVF9SRVFVRVNULCBMT0dfT1VUX1NVQ0NFU1MsIExPR19PVVRfRkFJTFVSRSxcclxuICBTSUdOX1VQX1JFUVVFU1QsIFNJR05fVVBfU1VDQ0VTUywgU0lHTl9VUF9GQUlMVVJFLCBcclxuICBGT0xMT1dfU1VDQ0VTUywgRk9MTE9XX0ZBSUxVUkUsIEZPTExPV19SRVFVRVNULFxyXG4gIFVORk9MTE9XX1NVQ0NFU1MsIFVORk9MTE9XX0ZBSUxVUkUsIFVORk9MTE9XX1JFUVVFU1QsIFxyXG4gIExPQURfTVlfSU5GT19SRVFVRVNULCBMT0FEX01ZX0lORk9fU1VDQ0VTUywgTE9BRF9NWV9JTkZPX0ZBSUxVUkVcclxufSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcblxyXG5mdW5jdGlvbiBsb2FkTXlJbmZvQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoXCIvdXNlclwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgICAgICAgXHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLCBcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yIDogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgfSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi91c2VyL2xvZ2luXCIsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICBcclxuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsIFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgfSkgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yIDogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgfSAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvdXNlci9sb2dvdXRcIilcclxufVxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICAvLyBhY3Rpb27snYQgZGlzcGF0Y2gg7ZWY64qUIOuKkOuCjOydmCBwdXRcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLCBcclxuICAgIH0pIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gIH0gIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSAgeWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICBcclxuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLCBcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgIH0pIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gIH0gIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvZm9sbG93QVBJXCIsIGRhdGEpXHJcbn1cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICBcclxuICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsIFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgfSkgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICB9ICBcclxufVxyXG5cclxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS91bmZvbGxvd0FQSVwiLCBkYXRhKVxyXG59XHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICBcclxuICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUywgXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICB9KSBcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yIDogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgfSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbylcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2UoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgZm9yayh3YXRjaExvYWRNeUluZm8pLFxyXG4gIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9