webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/reducers/post.js":
/*!******************************!*\
  !*** ./src/reducers/post.js ***!
  \******************************/
/*! exports provided: initialState, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/reducers/user.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _withshepherd_faker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @withshepherd/faker */ "./node_modules/@withshepherd/faker/index.js");
/* harmony import */ var _withshepherd_faker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_withshepherd_faker__WEBPACK_IMPORTED_MODULE_3__);




const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '김진성'
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?update=20180726'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?update=20180726'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?update=20180726'
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: 'nero'
      },
      content: '우와 개정판이 나왔군요~'
    }, {
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: 'hero'
      },
      content: '얼른 사고싶어요'
    }]
  }],
  imagePaths: [],
  hasMorePost: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
}); // reducer == 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성을 지키면서)

const reducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_2__["default"])(state, draft => {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.loadPostsError = null;
        draft.hasMorePost = draft.mainPosts.length < 50;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.mainPosts.unshift(action.data);
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.addPostError = null;
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.removePostError = null;
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        break;

      case ADD_COMMENT_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Comments.unshift(action.data.content); // 게시글 글 넣어주기

          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          draft.addCommentError = null;
          break;
        }

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3Bvc3QuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic2hvcnRpZCIsImdlbmVyYXRlIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3QiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImNvbmNhdCIsImxlbmd0aCIsImVycm9yIiwidW5zaGlmdCIsImZpbHRlciIsInYiLCJwb3N0IiwiZmluZCIsIlBvc3RJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QixpQkFBTixHQUF3QixLQUF4QjtBQUNBdUIsZUFBSyxDQUFDdEIsY0FBTixHQUFxQixJQUFyQjtBQUNBc0IsZUFBSyxDQUFDckIsZUFBTixHQUFzQixJQUF0QjtBQUNBO0FBQ0Q7O0FBQ0QsV0FBS1ksbUJBQUw7QUFDRVMsYUFBSyxDQUFDdkIsaUJBQU4sR0FBd0IsS0FBeEI7QUFDQXVCLGFBQUssQ0FBQ3JCLGVBQU4sR0FBc0JtQixNQUFNLENBQUNLLEtBQTdCO0FBQ0E7O0FBQ0Y7QUFDRTtBQW5FSjtBQXFFRCxHQXRFcUQsQ0FBeEM7QUFBQSxDQUFoQjs7QUF5RWVQLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODJjYjc4NTZmOTM2NTg3OTYxMGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydGlkIGZyb20gXCJzaG9ydGlkXCI7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FIH0gZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCBmYWtlciBmcm9tICdAd2l0aHNoZXBoZXJkL2Zha2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbe1xyXG4gICAgaWQ6MSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgaWQ6MSxcclxuICAgICAgbmlja25hbWU6ICfquYDsp4TshLEnXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICBJbWFnZXM6IFt7XHJcbiAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICAgIHNyYzogICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91cGRhdGU9MjAxODA3MjYnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICAgIHNyYyA6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91cGRhdGU9MjAxODA3MjYnXHJcbiAgICB9LHtcclxuICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICAgICAgc3JjOiAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dXBkYXRlPTIwMTgwNzI2J1xyXG4gICAgfV0sXHJcbiAgICBDb21tZW50czogW3tcclxuICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgbmlja25hbWU6ICduZXJvJyxcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogJ+yasOyZgCDqsJzsoJXtjJDsnbQg64KY7JmU6rWw7JqUfidcclxuICAgIH0sIHtcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgbmlja25hbWU6ICdoZXJvJ1xyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiAn7Ja866W4IOyCrOqzoOyLtuyWtOyalCdcclxuICAgIH1dXHJcbiAgfV0sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgaGFzTW9yZVBvc3Q6IHRydWUsXHJcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcblxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfUE9TVFNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1BPU1RTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9QT1NUU19GQUlMVVJFXCI7IFxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSlcclxuXHJcbi8vIHJlZHVjZXIgPT0g7J207KCEIOyDge2DnOulvCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja064K064qUIO2VqOyImCjrtojrs4DshLHsnYQg7KeA7YKk66m07IScKVxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZz10cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmU9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3I9bnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5Qb3N0cyk7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lPXRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3I9bnVsbDtcclxuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvcj1hY3Rpb24uZXJyb3JcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZz10cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvcj1udWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lPXRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yPW51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3I9YWN0aW9uLmVycm9yXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgXHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZz10cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvcj1udWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KT0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZT10cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvcj1udWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yPWFjdGlvbi5lcnJvclxyXG4gICAgICAgIGJyZWFrO1xyXG4gIFxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9dHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZT1mYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpOyAgXHJcbiAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhLmNvbnRlbnQpOyAgIC8vIOqyjOyLnOq4gCDquIAg64Sj7Ja07KO86riwXHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmU9dHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3I9bnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yPWFjdGlvbi5lcnJvclxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9