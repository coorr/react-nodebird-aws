webpackHotUpdate_N_E("pages/index",{

/***/ "./src/reducers/user.js":
/*!******************************!*\
  !*** ./src/reducers/user.js ***!
  \******************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOEW_REQUEST, FOLLOEW_SUCCESS, FOLLOEW_FAILURE, UNFOLLOEW_REQUEST, UNFOLLOEW_SUCCESS, UNFOLLOEW_FAILURE, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOEW_REQUEST", function() { return FOLLOEW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOEW_SUCCESS", function() { return FOLLOEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOEW_FAILURE", function() { return FOLLOEW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOEW_REQUEST", function() { return UNFOLLOEW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOEW_SUCCESS", function() { return UNFOLLOEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOEW_FAILURE", function() { return UNFOLLOEW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const initialState = {
  logInLoading: false,
  // 로그인 시도 중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도 중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도 중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도 중
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const FOLLOEW_REQUEST = 'FOLLOEW_REQUEST';
const FOLLOEW_SUCCESS = 'FOLLOEW_SUCCESS';
const FOLLOEW_FAILURE = 'FOLLOEW_FAILURE';
const UNFOLLOEW_REQUEST = 'UNFOLLOEW_REQUEST';
const UNFOLLOEW_SUCCESS = 'UNFOLLOEW_SUCCESS';
const UNFOLLOEW_FAILURE = 'UNFOLLOEW_FAILURE';

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  nickname: '김진성',
  id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
  Posts: [],
  Followings: [],
  Followers: []
});

const loginRequestAction = data => {
  return {
    type: "LOG_IN_REQUEST",
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: "LOG_OUT_REQUEST"
  };
};

const reducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOG_IN_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: true,
        logInDone: false,
        logInError: null
      });

    case LOG_IN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.data)
      });

    case LOG_IN_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        logInError: action.error
      });

    case LOG_OUT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: true,
        logOutDone: false,
        logOutError: null
      });

    case LOG_OUT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: false,
        logOutDone: true,
        me: null
      });

    case LOG_OUT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: false,
        logOutError: action.error
      });

    case SIGN_UP_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: true,
        signUpDone: false,
        signUpError: null
      });

    case SIGN_UP_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpDone: true
      });

    case SIGN_UP_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpError: action.error
      });

    case CHANGE_NICKNAME_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: true,
        changeNicknameDone: false,
        changeNicknameError: null
      });

    case CHANGE_NICKNAME_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameDone: true
      });

    case CHANGE_NICKNAME_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameError: action.error
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3VzZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPRVdfUkVRVUVTVCIsIkZPTExPRVdfU1VDQ0VTUyIsIkZPTExPRVdfRkFJTFVSRSIsIlVORk9MTE9FV19SRVFVRVNUIiwiVU5GT0xMT0VXX1NVQ0NFU1MiLCJVTkZPTExPRVdfRkFJTFVSRSIsImR1bW15VXNlciIsImRhdGEiLCJuaWNrbmFtZSIsImlkIiwic2hvcnRpZCIsImdlbmVyYXRlIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwidHlwZSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVP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O0FBQ0UsNkNBQ0syQixLQURMO0FBRUUzQyxxQkFBYSxFQUFDLEtBRmhCO0FBR0VDLGtCQUFVLEVBQUMsSUFIYjtBQUlFUSxVQUFFLEVBQUM7QUFKTDs7QUFNRixTQUFLUSxlQUFMO0FBQ0UsNkNBQ0swQixLQURMO0FBRUUzQyxxQkFBYSxFQUFDLEtBRmhCO0FBR0VFLG1CQUFXLEVBQUUwQyxNQUFNLENBQUNDO0FBSHRCOztBQU1GLFNBQUszQixlQUFMO0FBQ0UsNkNBQ0t5QixLQURMO0FBRUV4QyxxQkFBYSxFQUFFLElBRmpCO0FBR0VDLGtCQUFVLEVBQUMsS0FIYjtBQUlFQyxtQkFBVyxFQUFDO0FBSmQ7O0FBTUYsU0FBS2MsZUFBTDtBQUNFLDZDQUNLd0IsS0FETDtBQUVFeEMscUJBQWEsRUFBQyxLQUZoQjtBQUdFQyxrQkFBVSxFQUFDO0FBSGI7O0FBS0YsU0FBS2dCLGVBQUw7QUFDRSw2Q0FDS3VCLEtBREw7QUFFRXhDLHFCQUFhLEVBQUMsS0FGaEI7QUFHRUUsbUJBQVcsRUFBRXVDLE1BQU0sQ0FBQ0M7QUFIdEI7O0FBTUYsU0FBS3hCLHVCQUFMO0FBQ0UsNkNBQ0tzQixLQURMO0FBRUVyQyw2QkFBcUIsRUFBRSxJQUZ6QjtBQUdFQywwQkFBa0IsRUFBQyxLQUhyQjtBQUlFQywyQkFBbUIsRUFBQztBQUp0Qjs7QUFNRixTQUFLYyx1QkFBTDtBQUNFLDZDQUNLcUIsS0FETDtBQUVFckMsNkJBQXFCLEVBQUMsS0FGeEI7QUFHRUMsMEJBQWtCLEVBQUM7QUFIckI7O0FBS0YsU0FBS2dCLHVCQUFMO0FBQ0UsNkNBQ0tvQixLQURMO0FBRUVyQyw2QkFBcUIsRUFBQyxLQUZ4QjtBQUdFRSwyQkFBbUIsRUFBRW9DLE1BQU0sQ0FBQ0M7QUFIOUI7O0FBS0Y7QUFDRSxhQUFPRixLQUFQO0FBbkZKO0FBcUZELENBdEZEOztBQXdGZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGU5NzIyYzk5MTNlNzQ3NGJjMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydGlkIGZyb20gXCJzaG9ydGlkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4Qg7KSRXHJcbiAgbG9nSW5Eb25lIDogZmFsc2UsXHJcbiAgbG9nSW5FcnJvcjogbnVsbCwgXHJcblxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAgLy8g66Gc6re47JWE7JuDIOyLnOuPhCDspJFcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsICAvLyDtmozsm5DqsIDsnoUg7Iuc64+EIOykkVxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG5cclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4Qg7KSRXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIFxyXG4gIG1lOiBudWxsLFxyXG4gIHNpZ25VcERhdGEgOiB7fSxcclxuICBsb2dpbkRhdGEgOiB7fSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT0VXX1JFUVVFU1QgPSAnRk9MTE9FV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPRVdfU1VDQ0VTUyA9ICdGT0xMT0VXX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9FV19GQUlMVVJFID0gJ0ZPTExPRVdfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT0VXX1JFUVVFU1QgPSAnVU5GT0xMT0VXX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT0VXX1NVQ0NFU1MgPSAnVU5GT0xMT0VXX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT0VXX0ZBSUxVUkUgPSAnVU5GT0xMT0VXX0ZBSUxVUkUnO1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbiAgLi4uZGF0YSxcclxuICBuaWNrbmFtZTon6rmA7KeE7ISxJyxcclxuICBpZDpzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgUG9zdHM6IFtdLFxyXG4gIEZvbGxvd2luZ3M6W10sXHJcbiAgRm9sbG93ZXJzOiBbXVxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIkxPR19JTl9SRVFVRVNUXCIsXHJcbiAgICBkYXRhLCBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIkxPR19PVVRfUkVRVUVTVFwiLFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSxhY3Rpb24pID0+IHtcclxuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9nSW5Mb2FkaW5nOnRydWUsXHJcbiAgICAgICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgICAgICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dJbkxvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgbG9nSW5Eb25lOnRydWUsXHJcbiAgICAgICAgbWU6IGR1bW15VXNlcihhY3Rpb24uZGF0YSksXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvZ0luTG9hZGluZzpmYWxzZSxcclxuICAgICAgICBsb2dJbkVycm9yOmFjdGlvbi5lcnJvcixcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dPdXRMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGxvZ091dERvbmU6ZmFsc2UsXHJcbiAgICAgICAgbG9nT3V0RXJyb3I6bnVsbFxyXG4gICAgICB9XHJcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dPdXRMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgIGxvZ091dERvbmU6dHJ1ZSxcclxuICAgICAgICBtZTpudWxsLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2dPdXRMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgIGxvZ091dEVycm9yOiBhY3Rpb24uZXJyb3JcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNpZ25VcExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgc2lnblVwRG9uZTpmYWxzZSxcclxuICAgICAgICBzaWduVXBFcnJvcjpudWxsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNpZ25VcExvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgc2lnblVwRG9uZTp0cnVlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzaWduVXBMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgIHNpZ25VcEVycm9yOiBhY3Rpb24uZXJyb3JcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGNoYW5nZU5pY2tuYW1lRG9uZTpmYWxzZSxcclxuICAgICAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOm51bGxcclxuICAgICAgfVxyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgY2hhbmdlTmlja25hbWVEb25lOnRydWUsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IGFjdGlvbi5lcnJvclxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=