webpackHotUpdate_N_E("pages/signup",{

/***/ "./src/reducers/user.js":
/*!******************************!*\
  !*** ./src/reducers/user.js ***!
  \******************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
  followLoading: false,
  // 로그인 시도 중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 로그인 시도 중
  unfollowDone: false,
  unfollowError: null,
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
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
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
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
    switch (action.type) {
      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followDone = false;
        draft.followError = null;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push({
          id: action.data
        });
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowDone = false;
        draft.unfollowError = null;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true;
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data);
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
        break;

      default:
        break;
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3VzZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsIkZvbGxvd2luZ3Mi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V0FBTixHQUFtQmlDLE1BQU0sQ0FBQ00sS0FBMUI7QUFDQTs7QUFFRixXQUFLdkIsdUJBQUw7QUFDRW1CLGFBQUssQ0FBQ2xDLHFCQUFOLEdBQTZCLElBQTdCO0FBQ0FrQyxhQUFLLENBQUNqQyxrQkFBTixHQUF5QixLQUF6QjtBQUNBaUMsYUFBSyxDQUFDaEMsbUJBQU4sR0FBMEIsSUFBMUI7QUFDQTs7QUFDRixXQUFLYyx1QkFBTDtBQUNFa0IsYUFBSyxDQUFDbEMscUJBQU4sR0FBNEIsS0FBNUI7QUFDQWtDLGFBQUssQ0FBQ2pDLGtCQUFOLEdBQXlCLElBQXpCO0FBQ0E7O0FBQ0YsV0FBS2dCLHVCQUFMO0FBQ0VpQixhQUFLLENBQUNsQyxxQkFBTixHQUE0QixLQUE1QjtBQUNBa0MsYUFBSyxDQUFDaEMsbUJBQU4sR0FBMkI4QixNQUFNLENBQUNNLEtBQWxDO0FBQ0E7O0FBRUYsV0FBS2QsY0FBTDtBQUNFVSxhQUFLLENBQUMvQixFQUFOLENBQVNzQyxLQUFULENBQWVDLE9BQWYsQ0FBdUI7QUFBQ0wsWUFBRSxFQUFFTCxNQUFNLENBQUNMO0FBQVosU0FBdkI7QUFDQTs7QUFDRixXQUFLRixpQkFBTDtBQUNFUyxhQUFLLENBQUMvQixFQUFOLENBQVNzQyxLQUFULEdBQWlCUCxLQUFLLENBQUMvQixFQUFOLENBQVNzQyxLQUFULENBQWVGLE1BQWYsQ0FBdUJDLENBQUQsSUFBT0EsQ0FBQyxDQUFDSCxFQUFGLEtBQVNMLE1BQU0sQ0FBQ0wsSUFBN0MsQ0FBakI7QUFDQTs7QUFDRjtBQUNFO0FBaEdKO0FBa0dELEdBbkd1RCxDQUF4QztBQUFBLENBQWhCOztBQXFHZUcsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjM1YjRhNmRlYTY1NTY5NTlhMjA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuaW1wb3J0IHNob3J0aWQgZnJvbSBcInNob3J0aWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4Qg7KSRXHJcbiAgZm9sbG93RG9uZSA6IGZhbHNlLFxyXG4gIGZvbGxvd0Vycm9yOiBudWxsLCBcclxuXHJcbiAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhCDspJFcclxuICB1bmZvbGxvd0RvbmUgOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLCBcclxuXHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhCDspJFcclxuICBsb2dJbkRvbmUgOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLCBcclxuXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsICAvLyDroZzqt7jslYTsm4Mg7Iuc64+EIOykkVxyXG4gIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gIGxvZ091dEVycm9yOiBudWxsLFxyXG5cclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgIC8vIO2ajOybkOqwgOyehSDsi5zrj4Qg7KSRXHJcbiAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgc2lnblVwRXJyb3I6IG51bGwsXHJcblxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsICAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhCDspJFcclxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgXHJcbiAgbWU6IG51bGwsXHJcbiAgc2lnblVwRGF0YSA6IHt9LFxyXG4gIGxvZ2luRGF0YSA6IHt9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJMT0dfSU5fUkVRVUVTVFwiLFxyXG4gICAgZGF0YSwgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJMT0dfT1VUX1JFUVVFU1RcIixcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+ICB7XHJcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nPXRydWU7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0RvbmU9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dFcnJvcj0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dEb25lPXRydWU7XHJcbiAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7aWQ6IGFjdGlvbi5kYXRhfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQuZm9sbG93RXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZz10cnVlO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0RvbmU9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0Vycm9yPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0RvbmU9dHJ1ZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93aW5ncz0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz10cnVlO1xyXG4gICAgICBkcmFmdC5sb2dJbkRvbmU9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dJbkVycm9yPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lPXRydWU7XHJcbiAgICAgIGRyYWZ0Lm1lPSBhY3Rpb24uZGF0YVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQubG9nSW5FcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICBcclxuICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lPWZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvcj1udWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lPXRydWU7XHJcbiAgICAgIGRyYWZ0Lm1lPW51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yPSBhY3Rpb24uZXJyb3JcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmc9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmU9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcEVycm9yPW51bGxcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRG9uZT10cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvcj0gYWN0aW9uLmVycm9yXHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZz0gdHJ1ZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lPWZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yPW51bGxcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZT10cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvcj0gYWN0aW9uLmVycm9yXHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOiBhY3Rpb24uZGF0YX0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9