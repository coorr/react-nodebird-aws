webpackHotUpdate_N_E("pages/index",{

/***/ "./src/reducers/user.js":
/*!******************************!*\
  !*** ./src/reducers/user.js ***!
  \******************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
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
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
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
  me: null,
  userInfo: null
};
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
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

      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserDone = false;
        draft.loadUserError = null;
        break;

      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = false;
        draft.loadUserDone = true;
        draft.userInfo = action.data;
        break;

      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3VzZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJEb25lIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0xvYWRpbmciLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJsb2FkRm9sbG93aW5nc0Vycm9yIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsImxvYWRVc2VyTG9hZGluZyIsImxvYWRVc2VyRG9uZSIsImxvYWRVc2VyRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInVzZXJJbmZvIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFIiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsIkZvbGxvd2VycyIsImZpbHRlciIsInYiLCJpZCIsIlVzZXJJZCIsImVycm9yIiwiRm9sbG93aW5ncyIsInB1c2giLCJuaWNrbmFtZSIsIlBvc3RzIiwidW5zaGlmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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ZWQ3ZWRmY2YxNTg1NDM2YWE0NjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICByZW1vdmVGb2xsb3dlckxvYWRpbmc6IGZhbHNlLCAvL2Yg7YyU66Gc7JuMIO2VnCDsgqzrnowg6rCA7KC47Jik6riwXHJcbiAgcmVtb3ZlRm9sbG93ZXJEb25lIDogZmFsc2UsXHJcbiAgcmVtb3ZlRm9sbG93ZXJFcnJvcjogbnVsbCwgXHJcblxyXG4gIGxvYWRGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSwgLy9mIO2MlOuhnOybjCDtlZwg7IKs656MIOqwgOyguOyYpOq4sFxyXG4gIGxvYWRGb2xsb3dlcnNEb25lIDogZmFsc2UsXHJcbiAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLCBcclxuICBcclxuICBsb2FkRm9sbG93aW5nc0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsnokg7ZWcIOyCrOuejCDqsIDsoLjsmKTquLBcclxuICBsb2FkRm9sbG93aW5nc0RvbmUgOiBmYWxzZSxcclxuICBsb2FkRm9sbG93aW5nc0Vycm9yOiBudWxsLCBcclxuXHJcbiAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIDsoJXrs7Qg6rCA7KC47Jik6riwIOyLnOuPhCDspJFcclxuICBsb2FkTXlJbmZvRG9uZSA6IGZhbHNlLFxyXG4gIGxvYWRNeUluZm9FcnJvcjogbnVsbCwgXHJcblxyXG4gIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsIFxyXG4gIGxvYWRVc2VyRG9uZSA6IGZhbHNlLFxyXG4gIGxvYWRVc2VyRXJyb3I6IG51bGwsIFxyXG5cclxuICBmb2xsb3dMb2FkaW5nOiBmYWxzZSwgXHJcbiAgZm9sbG93RG9uZSA6IGZhbHNlLFxyXG4gIGZvbGxvd0Vycm9yOiBudWxsLCBcclxuXHJcbiAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgXHJcbiAgdW5mb2xsb3dEb25lIDogZmFsc2UsXHJcbiAgdW5mb2xsb3dFcnJvcjogbnVsbCwgXHJcblxyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4Qg7KSRXHJcbiAgbG9nSW5Eb25lIDogZmFsc2UsXHJcbiAgbG9nSW5FcnJvcjogbnVsbCwgXHJcblxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAgLy8g66Gc6re47JWE7JuDIOyLnOuPhCDspJFcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsICAvLyDtmozsm5DqsIDsnoUg7Iuc64+EIOykkVxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG5cclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4Qg7KSRXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIFxyXG4gIG1lOiBudWxsLFxyXG4gIHVzZXJJbmZvOm51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XRVJTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSA9ICdMT0FEX0ZPTExPV0VSU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSA9ICdMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSAnUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSAnUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUgPSAnUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiTE9HX0lOX1JFUVVFU1RcIixcclxuICAgIGRhdGEsIFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiTE9HX09VVF9SRVFVRVNUXCIsXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiAge1xyXG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmc9dHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmU9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3I9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lPXRydWU7XHJcbiAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmc9dHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmU9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3I9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0VSU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmU9dHJ1ZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0VSU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmc9dHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvcj0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRG9uZT10cnVlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmc9dHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmU9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3I9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lPXRydWU7XHJcbiAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZz10cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckRvbmU9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckVycm9yPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJEb25lPXRydWU7XHJcbiAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZz10cnVlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dEb25lPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZm9sbG93RXJyb3I9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQuZm9sbG93RG9uZT10cnVlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nPXRydWU7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZT0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3I9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZT10cnVlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz10cnVlO1xyXG4gICAgICBkcmFmdC5sb2dJbkRvbmU9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dJbkVycm9yPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lPXRydWU7XHJcbiAgICAgIGRyYWZ0Lm1lPSBhY3Rpb24uZGF0YVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQubG9nSW5FcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICBcclxuICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lPWZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvcj1udWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lPXRydWU7XHJcbiAgICAgIGRyYWZ0Lm1lPW51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yPSBhY3Rpb24uZXJyb3JcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmc9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmU9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcEVycm9yPW51bGxcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRG9uZT10cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvcj0gYWN0aW9uLmVycm9yXHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZz0gdHJ1ZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lPWZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yPW51bGxcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZT10cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvcj0gYWN0aW9uLmVycm9yXHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOiBhY3Rpb24uZGF0YX0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9