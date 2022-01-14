webpackHotUpdate_N_E("pages/signup",{

/***/ "./node_modules/shortid/index.js":
false,

/***/ "./node_modules/shortid/lib/alphabet.js":
false,

/***/ "./node_modules/shortid/lib/build.js":
false,

/***/ "./node_modules/shortid/lib/generate.js":
false,

/***/ "./node_modules/shortid/lib/index.js":
false,

/***/ "./node_modules/shortid/lib/is-valid.js":
false,

/***/ "./node_modules/shortid/lib/random/random-byte-browser.js":
false,

/***/ "./node_modules/shortid/lib/random/random-from-seed.js":
false,

/***/ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js":
false,

/***/ "./node_modules/shortid/node_modules/nanoid/format.browser.js":
false,

/***/ "./src/reducers/user.js":
/*!******************************!*\
  !*** ./src/reducers/user.js ***!
  \******************************/
/*! exports provided: initialState, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
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
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3VzZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsIkZvbGxvd2luZ3MiLCJwdXNoIiwiaWQiLCJlcnJvciIsImZpbHRlciIsInYiLCJQb3N0cyIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxlQUFhLEVBQUUsS0FEVztBQUNKO0FBQ3RCQyxZQUFVLEVBQUcsS0FGYTtBQUcxQkMsYUFBVyxFQUFFLElBSGE7QUFLMUJDLGlCQUFlLEVBQUUsS0FMUztBQUtGO0FBQ3hCQyxjQUFZLEVBQUcsS0FOVztBQU8xQkMsZUFBYSxFQUFFLElBUFc7QUFTMUJDLGNBQVksRUFBRSxLQVRZO0FBU0w7QUFDckJDLFdBQVMsRUFBRyxLQVZjO0FBVzFCQyxZQUFVLEVBQUUsSUFYYztBQWExQkMsZUFBYSxFQUFFLEtBYlc7QUFhSDtBQUN2QkMsWUFBVSxFQUFFLEtBZGM7QUFlMUJDLGFBQVcsRUFBRSxJQWZhO0FBaUIxQkMsZUFBYSxFQUFFLEtBakJXO0FBaUJIO0FBQ3ZCQyxZQUFVLEVBQUUsS0FsQmM7QUFtQjFCQyxhQUFXLEVBQUUsSUFuQmE7QUFxQjFCQyx1QkFBcUIsRUFBRSxLQXJCRztBQXFCSztBQUMvQkMsb0JBQWtCLEVBQUUsS0F0Qk07QUF1QjFCQyxxQkFBbUIsRUFBRSxJQXZCSztBQXlCMUJDLElBQUUsRUFBRSxJQXpCc0I7QUEwQjFCQyxZQUFVLEVBQUcsRUExQmE7QUEyQjFCQyxXQUFTLEVBQUc7QUEzQmMsQ0FBckI7QUE4QkEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJB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QUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC5lNTQ3ODA2NmFhMmM2MjAyODQyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+EIOykkVxyXG4gIGZvbGxvd0RvbmUgOiBmYWxzZSxcclxuICBmb2xsb3dFcnJvcjogbnVsbCwgXHJcblxyXG4gIHVuZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4Qg7KSRXHJcbiAgdW5mb2xsb3dEb25lIDogZmFsc2UsXHJcbiAgdW5mb2xsb3dFcnJvcjogbnVsbCwgXHJcblxyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4Qg7KSRXHJcbiAgbG9nSW5Eb25lIDogZmFsc2UsXHJcbiAgbG9nSW5FcnJvcjogbnVsbCwgXHJcblxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAgLy8g66Gc6re47JWE7JuDIOyLnOuPhCDspJFcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsICAvLyDtmozsm5DqsIDsnoUg7Iuc64+EIOykkVxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG5cclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4Qg7KSRXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIFxyXG4gIG1lOiBudWxsLFxyXG4gIHNpZ25VcERhdGEgOiB7fSxcclxuICBsb2dpbkRhdGEgOiB7fSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIkxPR19JTl9SRVFVRVNUXCIsXHJcbiAgICBkYXRhLCBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIkxPR19PVVRfUkVRVUVTVFwiLFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSxhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4gIHtcclxuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmc9dHJ1ZTtcclxuICAgICAgZHJhZnQuZm9sbG93RG9uZT0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0RvbmU9dHJ1ZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHtpZDogYWN0aW9uLmRhdGF9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nPXRydWU7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZT0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3I9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZT10cnVlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0Vycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nPXRydWU7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRG9uZT0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3I9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dJbkRvbmU9dHJ1ZTtcclxuICAgICAgZHJhZnQubWU9IGFjdGlvbi5kYXRhXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dJbkVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIFxyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmc9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmU9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yPW51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmU9dHJ1ZTtcclxuICAgICAgZHJhZnQubWU9bnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQubG9nT3V0RXJyb3I9IGFjdGlvbi5lcnJvclxyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz0gdHJ1ZTtcclxuICAgICAgZHJhZnQuc2lnblVwRG9uZT1mYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3I9bnVsbFxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lPXRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcEVycm9yPSBhY3Rpb24uZXJyb3JcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nPSB0cnVlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmU9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3I9bnVsbFxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lPXRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yPSBhY3Rpb24uZXJyb3JcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7aWQ6IGFjdGlvbi5kYXRhfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=