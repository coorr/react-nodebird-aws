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




function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/login", data);
}

function logOutAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/logOut", data);
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/signUp", data);
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/followAPI", data);
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/unfollowAPI", data);
}

function* logIn(action) {
  try {
    // const result =  yield call(logInAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      // action을 dispatch 하는 느낌의 put
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      data: err.response.data
    });
  }
}

function* logOut() {
  try {
    // const result =  yield call(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      // action을 dispatch 하는 느낌의 put
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      data: err.response.data
    });
  }
}

function* signUp(action) {
  try {
    // const result =  yield call(signUpAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      // action을 dispatch 하는 느낌의 put
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      data: err.response.data
    });
  }
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
      data: err.response.data
    });
  }
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
      data: err.response.data
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

function* userSage() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL3VzZXIuanMiXSwibmFtZXMiOlsibG9nSW5BUEkiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwibG9nT3V0QVBJIiwic2lnblVwQVBJIiwiZm9sbG93QVBJIiwidW5mb2xsb3dBUEkiLCJsb2dJbiIsImFjdGlvbiIsImRlbGF5IiwicHV0IiwidHlwZSIsIkxPR19JTl9TVUNDRVNTIiwiZXJyIiwiTE9HX0lOX0ZBSUxVUkUiLCJyZXNwb25zZSIsImxvZ091dCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsInNpZ25VcCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsImZvbGxvdyIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJ1bmZvbGxvdyIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwid2F0Y2hGb2xsb3ciLCJ0YWtlTGF0ZXN0IiwiRk9MTE9XX1JFUVVFU1QiLCJ3YXRjaFVuZm9sbG93IiwiVU5GT0xMT1dfUkVRVUVTVCIsIndhdGNoTG9nSW4iLCJMT0dfSU5fUkVRVUVTVCIsIndhdGNoTG9nT3V0IiwiTE9HX09VVF9SRVFVRVNUIiwid2F0Y2hTaWduVXAiLCJTSUdOX1VQX1JFUVVFU1QiLCJ1c2VyU2FnZSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBUUEsU0FBU0EsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDdEIsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsRUFBeUJGLElBQXpCLENBQVA7QUFDRDs7QUFFRCxTQUFTRyxTQUFULENBQW1CSCxJQUFuQixFQUF5QjtBQUN2QixTQUFPQyw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsYUFBWCxFQUEwQkYsSUFBMUIsQ0FBUDtBQUNEOztBQUVELFNBQVNJLFNB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RlosS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFRCxVQUFVNEIsV0FBVixHQUF3QjtBQUN0QixRQUFNQyxxRUFBVSxDQUFDQyw2REFBRCxFQUFpQlIsTUFBakIsQ0FBaEI7QUFDRDs7QUFFRCxVQUFVUyxhQUFWLEdBQTBCO0FBQ3hCLFFBQU1GLHFFQUFVLENBQUNHLCtEQUFELEVBQW1CUCxRQUFuQixDQUFoQjtBQUNEOztBQUVELFVBQVVRLFVBQVYsR0FBdUI7QUFDckIsUUFBTUoscUVBQVUsQ0FBQ0ssNkRBQUQsRUFBaUIzQixLQUFqQixDQUFoQjtBQUNEOztBQUVELFVBQVU0QixXQUFWLEdBQXdCO0FBQ3RCLFFBQU1OLHFFQUFVLENBQUNPLDhEQUFELEVBQWtCcEIsTUFBbEIsQ0FBaEI7QUFDRDs7QUFFRCxVQUFVcUIsV0FBVixHQUF3QjtBQUN0QixRQUFNUixxRUFBVSxDQUFDUyw4REFBRCxFQUFrQm5CLE1BQWxCLENBQWhCO0FBQ0Q7O0FBR2MsVUFBVW9CLFFBQVYsR0FBcUI7QUFDbEMsUUFBTUMsOERBQUcsQ0FBQyxDQUNSQywrREFBSSxDQUFDYixXQUFELENBREksRUFFUmEsK0RBQUksQ0FBQ1YsYUFBRCxDQUZJLEVBR1JVLCtEQUFJLENBQUNSLFVBQUQsQ0FISSxFQUlSUSwrREFBSSxDQUFDTixXQUFELENBSkksRUFLUk0sK0RBQUksQ0FBQ0osV0FBRCxDQUxJLENBQUQsQ0FBVDtBQU9EIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzY5M2YzMTVmMWJhMWNjZThhZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGFsbCwgZm9yaywgdGFrZUxhdGVzdCwgZGVsYXksIHB1dCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7IFxyXG4gIExPR19JTl9SRVFVRVNULCBMT0dfSU5fU1VDQ0VTUywgTE9HX0lOX0ZBSUxVUkUsIFxyXG4gIExPR19PVVRfUkVRVUVTVCwgTE9HX09VVF9TVUNDRVNTLCBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgU0lHTl9VUF9SRVFVRVNULCBTSUdOX1VQX1NVQ0NFU1MsIFNJR05fVVBfRkFJTFVSRSwgXHJcbiAgRk9MTE9XX1NVQ0NFU1MsIEZPTExPV19GQUlMVVJFLCBGT0xMT1dfUkVRVUVTVCxcclxuICBVTkZPTExPV19TVUNDRVNTLCBVTkZPTExPV19GQUlMVVJFLCBVTkZPTExPV19SRVFVRVNUXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ2luXCIsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ091dFwiLCBkYXRhKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9zaWduVXBcIiwgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24gZm9sbG93QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvZm9sbG93QVBJXCIsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvdW5mb2xsb3dBUElcIiwgZGF0YSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwobG9nSW5BUEkpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICAvLyBhY3Rpb27snYQgZGlzcGF0Y2gg7ZWY64qUIOuKkOuCjOydmCBwdXRcclxuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsIFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgfSkgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgZGF0YSA6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gIH0gIFxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSAgeWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICAvLyBhY3Rpb27snYQgZGlzcGF0Y2gg7ZWY64qUIOuKkOuCjOydmCBwdXRcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLCBcclxuICAgIH0pIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhIDogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgfSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKHNpZ25VcEFQSSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7ICAgICAgIC8vIGFjdGlvbuydhCBkaXNwYXRjaCDtlZjripQg64qQ64KM7J2YIHB1dFxyXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsIFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgfSkgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGEgOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICB9ICBcclxufVxyXG5cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICBcclxuICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsIFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgfSkgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZGF0YSA6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gIH0gIFxyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHsgICAgICAgXHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsIFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgfSkgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICBkYXRhIDogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgfSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdlKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICBdKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==