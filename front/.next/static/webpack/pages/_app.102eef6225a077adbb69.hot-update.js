webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/reducers/user.js":
/*!******************************!*\
  !*** ./src/reducers/user.js ***!
  \******************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

const initialState = {
  removeFollowerLoading: false,
  //f 팔로워 한 사람 가져오기
  removeFollowerDone: false,
  removeFollowerError: null,
  loadFollowersLoading: false,
  //f 팔로워 한 사람 가져오기
  loadFollowersDone: false,
  loadFollowersError: null,
  loadFollowingsLoading: false,
  // 팔로잉 한 사람 가져오기
  loadFollowingsDone: false,
  loadFollowingsError: null,
  loadMyInfoLoading: false,
  // 유저정보 가져오기 시도 중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  followLoading: false,
  followDone: false,
  followError: null,
  unfollowLoading: false,
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
  me: null
};
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
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
const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
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
      case REMOVE_FOLLOWER_REQUEST:
        draft.loadFollowersLoading = true;
        draft.loadFollowersDone = false;
        draft.loadFollowersError = null;
        break;

      case REMOVE_FOLLOWER_SUCCESS:
        draft.loadFollowersLoading = false;
        draft.loadFollowersDone = true;
        draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
        break;

      case REMOVE_FOLLOWER_FAILURE:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.error;
        break;

      case LOAD_FOLLOWERS_REQUEST:
        draft.loadFollowersLoading = true;
        draft.loadFollowersDone = false;
        draft.loadFollowersError = null;
        break;

      case LOAD_FOLLOWERS_SUCCESS:
        draft.loadFollowersLoading = false;
        draft.loadFollowersDone = true;
        draft.me.Followers = action.data;
        break;

      case LOAD_FOLLOWERS_FAILURE:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.error;
        break;

      case LOAD_FOLLOWINGS_REQUEST:
        draft.loadFollowingsLoading = true;
        draft.loadFollowingsDone = false;
        draft.loadFollowingsError = null;
        break;

      case LOAD_FOLLOWINGS_SUCCESS:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsDone = true;
        draft.me.Followings = action.data;
        break;

      case LOAD_FOLLOWINGS_FAILURE:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsError = action.error;
        break;

      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = null;
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.me = action.data;
        break;

      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;

      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followDone = false;
        draft.followError = null;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push({
          id: action.data.UserId
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
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
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
        draft.me.nickname = action.data.nickname;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3VzZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJEb25lIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0xvYWRpbmciLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJsb2FkRm9sbG93aW5nc0Vycm9yIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFIiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsIkZvbGxvd2VycyIsImZpbHRlciIsInYiLCJpZCIsIlVzZXJJZCIsImVycm9yIiwiRm9sbG93aW5ncyIsInB1c2giLCJuaWNrbmFtZSIsIlBvc3RzIiwidW5zaGlmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxZQUFZLEdBQUc7QUFDMUJDLHVCQUFxQixFQUFFLEtBREc7QUFDSTtBQUM5QkMsb0JBQWtCLEVBQUcsS0FGSztB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QUFTbUQsS0FBVCxDQUFlUixNQUFmLENBQXVCQyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsRUFBRixLQUFTTixNQUFNLENBQUNMLElBQTdDLENBQWpCO0FBQ0E7O0FBQ0Y7QUFDRTtBQTdKSjtBQStKRCxHQWhLdUQsQ0FBeEM7QUFBQSxDQUFoQjs7QUFrS2VHLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTAyZWVmNjIyNWEwNzdhZGJiNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICByZW1vdmVGb2xsb3dlckxvYWRpbmc6IGZhbHNlLCAvL2Yg7YyU66Gc7JuMIO2VnCDsgqzrnowg6rCA7KC47Jik6riwXHJcbiAgcmVtb3ZlRm9sbG93ZXJEb25lIDogZmFsc2UsXHJcbiAgcmVtb3ZlRm9sbG93ZXJFcnJvcjogbnVsbCwgXHJcblxyXG4gIGxvYWRGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSwgLy9mIO2MlOuhnOybjCDtlZwg7IKs656MIOqwgOyguOyYpOq4sFxyXG4gIGxvYWRGb2xsb3dlcnNEb25lIDogZmFsc2UsXHJcbiAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLCBcclxuICBcclxuICBsb2FkRm9sbG93aW5nc0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsnokg7ZWcIOyCrOuejCDqsIDsoLjsmKTquLBcclxuICBsb2FkRm9sbG93aW5nc0RvbmUgOiBmYWxzZSxcclxuICBsb2FkRm9sbG93aW5nc0Vycm9yOiBudWxsLCBcclxuXHJcbiAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIDsoJXrs7Qg6rCA7KC47Jik6riwIOyLnOuPhCDspJFcclxuICBsb2FkTXlJbmZvRG9uZSA6IGZhbHNlLFxyXG4gIGxvYWRNeUluZm9FcnJvcjogbnVsbCwgXHJcblxyXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCBcclxuICBmb2xsb3dEb25lIDogZmFsc2UsXHJcbiAgZm9sbG93RXJyb3I6IG51bGwsIFxyXG5cclxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCBcclxuICB1bmZvbGxvd0RvbmUgOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLCBcclxuXHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhCDspJFcclxuICBsb2dJbkRvbmUgOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLCBcclxuXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsICAvLyDroZzqt7jslYTsm4Mg7Iuc64+EIOykkVxyXG4gIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gIGxvZ091dEVycm9yOiBudWxsLFxyXG5cclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgIC8vIO2ajOybkOqwgOyehSDsi5zrj4Qg7KSRXHJcbiAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgc2lnblVwRXJyb3I6IG51bGwsXHJcblxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsICAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhCDspJFcclxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgXHJcbiAgbWU6IG51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XRVJTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XSU5HU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XSU5HU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XSU5HU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCA9ICdSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyA9ICdSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSA9ICdSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJMT0dfSU5fUkVRVUVTVFwiLFxyXG4gICAgZGF0YSwgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJMT0dfT1VUX1JFUVVFU1RcIixcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+ICB7XHJcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZz10cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZT0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvcj0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmU9dHJ1ZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gZHJhZnQubWUuRm9sbG93ZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZz10cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZT0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvcj0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZT10cnVlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZz10cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmU9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lPXRydWU7XHJcbiAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZz10cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZT0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvcj0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmU9dHJ1ZTtcclxuICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZz10cnVlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dEb25lPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZm9sbG93RXJyb3I9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQuZm9sbG93RG9uZT10cnVlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nPXRydWU7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZT0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3I9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZT10cnVlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz10cnVlO1xyXG4gICAgICBkcmFmdC5sb2dJbkRvbmU9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dJbkVycm9yPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lPXRydWU7XHJcbiAgICAgIGRyYWZ0Lm1lPSBhY3Rpb24uZGF0YVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQubG9nSW5FcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICBcclxuICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lPWZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvcj1udWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lPXRydWU7XHJcbiAgICAgIGRyYWZ0Lm1lPW51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yPSBhY3Rpb24uZXJyb3JcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmc9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmU9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcEVycm9yPW51bGxcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRG9uZT10cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvcj0gYWN0aW9uLmVycm9yXHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZz0gdHJ1ZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lPWZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yPW51bGxcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZT10cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvcj0gYWN0aW9uLmVycm9yXHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOiBhY3Rpb24uZGF0YX0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9