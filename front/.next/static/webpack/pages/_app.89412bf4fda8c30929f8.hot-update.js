webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/reducers/post.js":
/*!******************************!*\
  !*** ./src/reducers/post.js ***!
  \******************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
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
const generateDummyPost = number => Array(number).fill().map((v, i) => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  User: {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    nickname: _withshepherd_faker__WEBPACK_IMPORTED_MODULE_3___default.a.name.findName()
  },
  content: _withshepherd_faker__WEBPACK_IMPORTED_MODULE_3___default.a.lorem.paragraph(),
  Images: [{
    src: _withshepherd_faker__WEBPACK_IMPORTED_MODULE_3___default.a.image.image()
  }],
  Comment: [{
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: _withshepherd_faker__WEBPACK_IMPORTED_MODULE_3___default.a.name.findName()
    },
    content: _withshepherd_faker__WEBPACK_IMPORTED_MODULE_3___default.a.lorem.sentence()
  }]
}));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3Bvc3QuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic2hvcnRpZCIsImdlbmVyYXRlIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3QiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJ2IiwiaSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJpbWFnZSIsIkNvbW1lbnQiLCJzZW50ZW5jZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25jYXQiLCJsZW5ndGgi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QyxpQkFBTixHQUF3QixLQUF4QjtBQUNBc0MsYUFBSyxDQUFDcEMsZUFBTixHQUFzQmtDLE1BQU0sQ0FBQ0ssS0FBN0I7QUFDQTs7QUFDRjtBQUNFO0FBbkVKO0FBcUVELEdBdEVxRCxDQUF4QztBQUFBLENBQWhCOztBQXlFZVAsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44OTQxMmJmNGZkYThjMzA5MjlmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0aWQgZnJvbSBcInNob3J0aWRcIjtcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUgfSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ0B3aXRoc2hlcGhlcmQvZmFrZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFt7XHJcbiAgICBpZDoxLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICBpZDoxLFxyXG4gICAgICBuaWNrbmFtZTogJ+q5gOynhOyEsSdcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcclxuICAgIEltYWdlczogW3tcclxuICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICAgICAgc3JjOiAgJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VwZGF0ZT0yMDE4MDcyNidcclxuICAgIH0sIHtcclxuICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICAgICAgc3JjIDogJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VwZGF0ZT0yMDE4MDcyNidcclxuICAgIH0se1xyXG4gICAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG4gICAgICBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91cGRhdGU9MjAxODA3MjYnXHJcbiAgICB9XSxcclxuICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTogJ25lcm8nLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiAn7Jqw7JmAIOqwnOygle2MkOydtCDrgpjsmZTqtbDsmpR+J1xyXG4gICAgfSwge1xyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTogJ2hlcm8nXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6ICfslrzrpbgg7IKs6rOg7Iu27Ja07JqUJ1xyXG4gICAgfV1cclxuICB9XSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBoYXNNb3JlUG9zdDogdHJ1ZSxcclxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT4gXHJcbiAgQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCh2LGkpID0+ICh7XHJcbiAgICBpZDpzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICBJbWFnZXM6IFt7XHJcbiAgICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuICAgIH1dLFxyXG4gICAgQ29tbWVudDogW3tcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOnNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTpmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICAgIH0sIFxyXG4gICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgfV0sXHJcbiAgfSkpXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9QT1NUU19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfUE9TVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gXCJMT0FEX1BPU1RTX0ZBSUxVUkVcIjsgXHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSBcIlJFTU9WRV9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSBcIlJFTU9WRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSBcIlJFTU9WRV9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfQ09NTUVOVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfQ09NTUVOVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KVxyXG5cclxuLy8gcmVkdWNlciA9PSDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYKOu2iOuzgOyEseydhCDsp4DtgqTrqbTshJwpXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZT1mYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvcj1udWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmU9dHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvcj1udWxsO1xyXG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0ID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA8IDUwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yPWFjdGlvbi5lcnJvclxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmU9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yPW51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmU9dHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3I9bnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvcj1hY3Rpb24uZXJyb3JcclxuICAgICAgICBicmVhaztcclxuICBcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmU9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yPW51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHM9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lPXRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yPW51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3I9YWN0aW9uLmVycm9yXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgXHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZz10cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lPWZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7ICBcclxuICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEuY29udGVudCk7ICAgLy8g6rKM7Iuc6riAIOq4gCDrhKPslrTso7zquLBcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZT10cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvcj1udWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3I9YWN0aW9uLmVycm9yXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=