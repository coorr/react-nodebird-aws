webpackHotUpdate_N_E("pages/index",{

/***/ "./src/reducers/post.js":
/*!******************************!*\
  !*** ./src/reducers/post.js ***!
  \******************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '김진성'
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?update=20180726'
    }, {
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?update=20180726'
    }, {
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?update=20180726'
    }],
    Comments: [{
      User: {
        nickname: 'nero'
      },
      content: '우와 개정판이 나왔군요~'
    }, {
      User: {
        nickname: 'hero'
      },
      content: '얼른 사고싶어요'
    }]
  }],
  imagePaths: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
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
});

const dummyPost = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
  content: data,
  User: {
    id: 1,
    nickname: '김진성'
  },
  Images: [{
    src: null
  }],
  Comments: []
});

const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
  content: data,
  User: {
    id: 1,
    nickname: '김진성'
  }
});

const reducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });

    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
        addPostError: null
      });

    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostError: action.error
      });

    case ADD_COMMENT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: true,
        addCommentDone: false
      });

    case ADD_COMMENT_SUCCESS:
      {
        console.log(action.data);
        state.mainPosts.findIndex(a => console.log(a.id));
        const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
        console.log(postIndex);

        const post = _objectSpread({}, state.mainPosts[postIndex]);

        console.log(post);
        post.Comments = [dummyComment(action.data.content), ...post.Comments];
        const mainPosts = [...state.mainPosts];
        console.log(mainPosts);
        mainPosts[postIndex] = post;
        console.log(mainPosts);
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts,
          addCommentLoading: false,
          addCommentDone: true,
          addCommentError: null
        });
      }

    case ADD_COMMENT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentError: action.error
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3Bvc3QuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0Iiwic2hvcnRpZCIsImdlbmVyYXRlIiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZmluZEluZGV4IiwiYSIsInBvc3RJbmRleCIsInYiLCJwb3N0SWQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxXQUFTLEVBQUUsQ0FBQztBQUNWQyxNQUFFLEVBQUMsQ0FETztBQUVWQyxRQUFJLEVBQUU7QUFDSkQsUUFBRSxFQUFDLENBREM7QUFFSkUsY0FBUSxFQUFFO0FBRk4sS0FGSTtBQU1WQyxXQUFPLEVBQUUsdUJBTkM7QUFPVkMsVUFBTSxFQUFFLENBQUM7QUFDUEMsU0FBRyxFQUFHO0FBREMsS0FBRCxFQUVMO0FBQ0RBLFNBQUcsRUFBRztBQURMLEtBRkssRUFJTjtBQUNBQSxTQUFHLEVBQUU7QUFETCxLQUpNLENBUEU7QUFjVkMsWUFB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ZWJwYWNrL3BhZ2VzL2luZGV4LjU0ZTA2NGRlMmYyMGU2YjljODY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRpZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFt7XHJcbiAgICBpZDoxLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICBpZDoxLFxyXG4gICAgICBuaWNrbmFtZTogJ+q5gOynhOyEsSdcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcclxuICAgIEltYWdlczogW3tcclxuICAgICAgc3JjOiAgJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VwZGF0ZT0yMDE4MDcyNidcclxuICAgIH0sIHtcclxuICAgICAgc3JjIDogJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VwZGF0ZT0yMDE4MDcyNidcclxuICAgIH0se1xyXG4gICAgICBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91cGRhdGU9MjAxODA3MjYnXHJcbiAgICB9XSxcclxuICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgbmlja25hbWU6ICduZXJvJyxcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogJ+yasOyZgCDqsJzsoJXtjJDsnbQg64KY7JmU6rWw7JqUfidcclxuICAgIH0sIHtcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIG5pY2tuYW1lOiAnaGVybydcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogJ+yWvOuluCDsgqzqs6Dsi7bslrTsmpQnXHJcbiAgICB9XVxyXG4gIH1dLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfQ09NTUVOVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfQ09NTUVOVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICAoe1xyXG4gIGlkOnNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICBjb250ZW50OiBkYXRhLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOjEsXHJcbiAgICBuaWNrbmFtZTon6rmA7KeE7ISxJ1xyXG4gIH0sXHJcbiAgSW1hZ2VzOiBbe1xyXG4gICAgc3JjOiBudWxsXHJcbiAgfV0sXHJcbiAgQ29tbWVudHM6IFtdLFxyXG59KSBcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOnNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICBjb250ZW50OiBkYXRhLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6J+q5gOynhOyEsSdcclxuICB9LFxyXG59KVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSxhY3Rpb24pID0+IHtcclxuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRQb3N0TG9hZGluZzp0cnVlLFxyXG4gICAgICAgIGFkZFBvc3REb25lOmZhbHNlLFxyXG4gICAgICAgIGFkZFBvc3RFcnJvcjpudWxsLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgICBhZGRQb3N0TG9hZGluZzpmYWxzZSxcclxuICAgICAgICAgIGFkZFBvc3REb25lOnRydWUsXHJcbiAgICAgICAgICBhZGRQb3N0RXJyb3I6bnVsbCxcclxuICAgICAgICB9XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgYWRkUG9zdEVycm9yOmFjdGlvbi5lcnJvclxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOnRydWUsXHJcbiAgICAgICAgICBhZGRDb21tZW50RG9uZTpmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgoYSk9PiBjb25zb2xlLmxvZyhhLmlkKSlcclxuICAgICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgY29uc29sZS5sb2cocG9zdEluZGV4KTtcclxuICAgICAgY29uc3QgcG9zdCA9IHsuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XX07XHJcbiAgICAgIGNvbnNvbGUubG9nKHBvc3QpO1xyXG4gICAgICBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICBjb25zb2xlLmxvZyhtYWluUG9zdHMpO1xyXG4gICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1haW5Qb3N0cyk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgIGFkZENvbW1lbnREb25lOnRydWUsXHJcbiAgICAgICAgYWRkQ29tbWVudEVycm9yOm51bGwsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzpmYWxzZSxcclxuICAgICAgICBhZGRDb21tZW50RXJyb3I6YWN0aW9uLmVycm9yXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==