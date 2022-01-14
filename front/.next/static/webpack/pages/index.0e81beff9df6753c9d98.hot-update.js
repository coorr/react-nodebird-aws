webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./src/components/AppLayout.js");
/* harmony import */ var _components_PostForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostForm.js */ "./src/components/PostForm.js");
/* harmony import */ var _components_PostCard_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostCard.js */ "./src/components/PostCard.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./src/reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./src/reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\sysone\\Desktop\\react-next\\front\\src\\pages\\index.js",
    _s = $RefreshSig$();










const Home = () => {
  _s();

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const {
    mainPosts,
    hasMorePost,
    loadPostsLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOAD_MY_INFO_REQUEST"]
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 200) {
        if (hasMorePost && !loadPostsLoading) {
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"]
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePost, loadPostsLoading]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_PostForm_js__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 14
    }, undefined), mainPosts.map(post => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_PostCard_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      post: post
    }, post.id, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, undefined);
};

_s(Home, "i/nzWAUQQ+Depgog4i+rt8qcSuw=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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

/***/ }),

/***/ "./src/reducers/user.js":
/*!******************************!*\
  !*** ./src/reducers/user.js ***!
  \******************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

const initialState = {
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
  me: null,
  signUpData: {},
  loginData: {}
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
      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = null;
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true; // draft.me.loadFollowings.push({id: action.data});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJIb21lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm1lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtYWluUG9zdHMiLCJoYXNNb3JlUG9zdCIsImxvYWRQb3N0c0xvYWRpbmciLCJwb3N0IiwidXNlRWZmZWN0IiwidHlwZSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCIsImlkIiwiaW5pdGlhbFN0YXRlIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImVycm9yIiwiRm9sbG93aW5ncyIsInB1c2giLCJmaWx0ZXIiLCJ2IiwiUG9zdHMiLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFBQTs7QUFDakIsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFTQywrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsSUFBbEIsQ0FBMUI7QUFDQSxRQUFNO0FBQUVDLGFBQUY7QUFBYUMsZUFBYjtBQUEwQkM7QUFBMUIsTUFBK0NMLCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDSyxJQUFsQixDQUFoRTtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZFYsWUFBUSxDQUFDO0FBQ1BXLFVBQUksRUFBRUMsbUVBQW9CQTtBQURuQixLQUFELENBQVI7QUFHQVosWUFBUSxDQUFDO0FBQ1BX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QzVELFlBQUUsRUFBRW1ELE1BQU0sQ0FBQ0g7QUFBWixTQUF2QjtBQUNBOztBQUNGLFdBQUtGLGlCQUFMO0FBQ0VPLGFBQUssQ0FBQzNFLEVBQU4sQ0FBU2lGLEtBQVQsR0FBaUJOLEtBQUssQ0FBQzNFLEVBQU4sQ0FBU2lGLEtBQVQsQ0FBZUYsTUFBZixDQUF1QkMsQ0FBRCxJQUFPQSxDQUFDLENBQUMxRCxFQUFGLEtBQVNtRCxNQUFNLENBQUNILElBQTdDLENBQWpCO0FBQ0E7O0FBQ0Y7QUFDRTtBQS9HSjtBQWlIRCxHQWxIdUQsQ0FBeEM7QUFBQSxDQUFoQjs7QUFvSGVFLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBlODFiZWZmOWRmNjc1M2M5ZDk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyc7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzJztcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdCwgbG9hZFBvc3RzTG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1RcclxuICAgIH0pXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICBpZih3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LSAyMDApIHtcclxuICAgICAgICBpZihoYXNNb3JlUG9zdCAmJiAhbG9hZFBvc3RzTG9hZGluZykge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLG9uU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbClcclxuICAgIH1cclxuICB9LCBbaGFzTW9yZVBvc3QsIGxvYWRQb3N0c0xvYWRpbmddKTtcclxuXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgeyBtZSAmJiA8UG9zdEZvcm0gLz59XHJcbiAgICAgeyBtYWluUG9zdHMubWFwKChwb3N0KSA9PiAgPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz4gKX1cclxuICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCA7KCV67O0IOqwgOyguOyYpOq4sCDsi5zrj4Qg7KSRXHJcbiAgbG9hZE15SW5mb0RvbmUgOiBmYWxzZSxcclxuICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsIFxyXG5cclxuICBmb2xsb3dMb2FkaW5nOiBmYWxzZSwgXHJcbiAgZm9sbG93RG9uZSA6IGZhbHNlLFxyXG4gIGZvbGxvd0Vycm9yOiBudWxsLCBcclxuXHJcbiAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgXHJcbiAgdW5mb2xsb3dEb25lIDogZmFsc2UsXHJcbiAgdW5mb2xsb3dFcnJvcjogbnVsbCwgXHJcblxyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4Qg7KSRXHJcbiAgbG9nSW5Eb25lIDogZmFsc2UsXHJcbiAgbG9nSW5FcnJvcjogbnVsbCwgXHJcblxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAgLy8g66Gc6re47JWE7JuDIOyLnOuPhCDspJFcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsICAvLyDtmozsm5DqsIDsnoUg7Iuc64+EIOykkVxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG5cclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4Qg7KSRXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIFxyXG4gIG1lOiBudWxsLFxyXG4gIHNpZ25VcERhdGEgOiB7fSxcclxuICBsb2dpbkRhdGEgOiB7fSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIkxPR19JTl9SRVFVRVNUXCIsXHJcbiAgICBkYXRhLCBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIkxPR19PVVRfUkVRVUVTVFwiLFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSxhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4gIHtcclxuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nPXRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZT10cnVlO1xyXG4gICAgICAvLyBkcmFmdC5tZS5sb2FkRm9sbG93aW5ncy5wdXNoKHtpZDogYWN0aW9uLmRhdGF9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZz10cnVlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dEb25lPSBmYWxzZTtcclxuICAgICAgZHJhZnQuZm9sbG93RXJyb3I9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQuZm9sbG93RG9uZT10cnVlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goe2lkOiBhY3Rpb24uZGF0YX0pO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmc9dHJ1ZTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dEb25lPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dFcnJvcj0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dEb25lPXRydWU7XHJcbiAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3M9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmc9dHJ1ZTtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nSW5FcnJvcj0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRG9uZT10cnVlO1xyXG4gICAgICBkcmFmdC5tZT0gYWN0aW9uLmRhdGFcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgICAgXHJcbiAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZz0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9nT3V0RG9uZT1mYWxzZTtcclxuICAgICAgZHJhZnQubG9nT3V0RXJyb3I9bnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQubG9nT3V0RG9uZT10cnVlO1xyXG4gICAgICBkcmFmdC5tZT1udWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvcj0gYWN0aW9uLmVycm9yXHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nPSB0cnVlO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lPWZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvcj1udWxsXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmU9dHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3I9IGFjdGlvbi5lcnJvclxyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmc9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZT1mYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvcj1udWxsXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmU9dHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3I9IGFjdGlvbi5lcnJvclxyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHtpZDogYWN0aW9uLmRhdGF9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==