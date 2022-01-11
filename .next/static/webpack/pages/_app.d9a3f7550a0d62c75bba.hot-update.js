webpackHotUpdate_N_E("pages/_app",{

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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



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

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  nickname: '김진성',
  id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
  Posts: [{
    id: 1
  }],
  Followings: [{
    nickname: '김진성'
  }, {
    nickname: '부부'
  }, {
    nickname: '아아'
  }],
  Followers: [{
    nickname: '김진성'
  }, {
    nickname: '부부'
  }, {
    nickname: '아아'
  }]
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
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, draft => {
    switch (action.type) {
      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followDone = false;
        draft.followError = null;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me = dummyUser(action.data);
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
        draft.me = dummyUser(action.data);
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
        draft.me = dummyUser(action.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3VzZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImR1bW15VXNlciIsImRhdGEiLCJuaWNrbmFtZSIsImlkIiwic2hvcnRpZCIsImdlbmVyYXRlIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwidHlwZSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJlcnJvciIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxZQUFZLEdBQUc7QUFDMUJDLGVBQWEsRUFBRSxLQURXO0FBQ0o7QUFDdEJDLFlBQVUsRUFBRyxLQUZhO0FBRzFCQyxhQUFXLEVBQUUsSUFIYTtBQUsxQkMsaUJBQWUsRUFBRSxLQUxTO0FBS0Y7QUFDeEJDLGNBQVksRUFBRyxLQU5XO0FBTzFCQyxlQUFhLEVBQUUsSUFQVztBQVMxQkMsY0FBWSxFQUFFLEtBVFk7QUFTTDtBQUNyQkMsV0FBUyxFQUFHLEtBVmM7QUFXMUJDLFlBQVUsRUFBRSxJQVhjO0FBYTFCQyxlQUFhLEVBQUUsS0FiVztBQWFIO0FBQ3ZCQyxZQUFVLEVBQUUsS0FkYztBQWUxQkMsYUFBVyxFQUFFLElBZmE7QUFpQjFCQyxlQUFhLEVBQUUsS0FqQlc7QUFpQkg7QUFDdkJDLFlBQVUsRUFBRSxLQWxCYztBQW1CMUJDLGFBQVcsRUFBRSxJQW5CYTtBQXFCMUJDLHVCQUFxQixFQUFFLEtBckJHO0FBcUJLO0FBQy9CQyxvQkFBa0IsRUFBRSxLQXRCTTtBQXVCMUJDLHFCQUFtQixFQUFFLElBdkJLO0FBeUIxQkMsSUFBRSxFQUFFLElBekJzQjtBQTBCMUJDLFlBQVUsRUFBRyxFQTFCYTtBQTJCMUJDLFdBQVMsRUFBRztBQTNCYyxDQUFyQjtBQThCQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFFQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFFQSxNQUFNQyxlQUFlLEdB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YixJQUE3QyxDQUFqQjtBQUNBOztBQUNGO0FBQ0U7QUFoR0o7QUFrR0QsR0FuR3VELENBQXhDO0FBQUEsQ0FBaEI7O0FBcUdlVyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmQ5YTNmNzU1MGEwZDYyYzc1YmJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuaW1wb3J0IHNob3J0aWQgZnJvbSBcInNob3J0aWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4Qg7KSRXHJcbiAgZm9sbG93RG9uZSA6IGZhbHNlLFxyXG4gIGZvbGxvd0Vycm9yOiBudWxsLCBcclxuXHJcbiAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhCDspJFcclxuICB1bmZvbGxvd0RvbmUgOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLCBcclxuXHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhCDspJFcclxuICBsb2dJbkRvbmUgOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLCBcclxuXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsICAvLyDroZzqt7jslYTsm4Mg7Iuc64+EIOykkVxyXG4gIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gIGxvZ091dEVycm9yOiBudWxsLFxyXG5cclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgIC8vIO2ajOybkOqwgOyehSDsi5zrj4Qg7KSRXHJcbiAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgc2lnblVwRXJyb3I6IG51bGwsXHJcblxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsICAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhCDspJFcclxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgXHJcbiAgbWU6IG51bGwsXHJcbiAgc2lnblVwRGF0YSA6IHt9LFxyXG4gIGxvZ2luRGF0YSA6IHt9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbiAgLi4uZGF0YSxcclxuICBuaWNrbmFtZTon6rmA7KeE7ISxJyxcclxuICBpZDpzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgUG9zdHM6IFt7aWQ6IDF9XSxcclxuICBGb2xsb3dpbmdzOlt7IG5pY2tuYW1lOifquYDsp4TshLEnfSx7IG5pY2tuYW1lOifrtoDrtoAnfSx7IG5pY2tuYW1lOifslYTslYQnfSxdLFxyXG4gIEZvbGxvd2VyczpbeyBuaWNrbmFtZTon6rmA7KeE7ISxJ30seyBuaWNrbmFtZTon67aA67aAJ30seyBuaWNrbmFtZTon7JWE7JWEJ31dLFxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIkxPR19JTl9SRVFVRVNUXCIsXHJcbiAgICBkYXRhLCBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIkxPR19PVVRfUkVRVUVTVFwiLFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSxhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4gIHtcclxuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmc9dHJ1ZTtcclxuICAgICAgZHJhZnQuZm9sbG93RG9uZT0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0RvbmU9dHJ1ZTtcclxuICAgICAgZHJhZnQubWU9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQuZm9sbG93RXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZz10cnVlO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0RvbmU9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0Vycm9yPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0RvbmU9dHJ1ZTtcclxuICAgICAgZHJhZnQubWU9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmc9dHJ1ZTtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nSW5FcnJvcj0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRG9uZT10cnVlO1xyXG4gICAgICBkcmFmdC5tZT0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgICAgXHJcbiAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZz0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9nT3V0RG9uZT1mYWxzZTtcclxuICAgICAgZHJhZnQubG9nT3V0RXJyb3I9bnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQubG9nT3V0RG9uZT10cnVlO1xyXG4gICAgICBkcmFmdC5tZT1udWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvcj0gYWN0aW9uLmVycm9yXHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nPSB0cnVlO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lPWZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvcj1udWxsXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmU9dHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz1mYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3I9IGFjdGlvbi5lcnJvclxyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmc9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZT1mYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvcj1udWxsXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nPWZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmU9dHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3I9IGFjdGlvbi5lcnJvclxyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHtpZDogYWN0aW9uLmRhdGF9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==