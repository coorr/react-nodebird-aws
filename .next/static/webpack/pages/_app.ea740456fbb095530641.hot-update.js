webpackHotUpdate_N_E("pages/_app",{

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
  } // Images: [],
  // Comments: [],

});

const reducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });

    case ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true
      });

    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostError: action.error
      });

    case ADD_COMMENT_SUCCESS:
      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);

      const post = _objectSpread({}, state.mainPosts[postIndex]);

      post.Comments = [dummyComment(action.data.content), ...post.Comments];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = post;
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null
      });

    case ADD_COMMENT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentDone: true
      });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3Bvc3QuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0Iiwic2hvcnRpZCIsImdlbmVyYXRlIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiLCJwb3N0SW5kZXgiLCJmaW5kSW5kZXgiLCJ2IiwicG9zdElkIiwicG9zdCIsImR1bW15Q29tbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLFlBQVksR0FBRztBQUMxQkMsV0FBUyxFQUFFLENBQUM7QUFDVkMsTUFBRSxFQUFDLENBRE87QUFFVkMsUUFBSSxFQUFFO0FBQ0pELFFBQUUsRUFBQyxDQURDO0FBRUpFLGNBQVEsRUFBRTtBQUZOLEtBRkk7QUFNVkMsV0FBTyxFQUFFLHVCQU5DO0FBT1ZDLFVBQU0sRUFBRSxDQUFDO0FBQ1BDLFNBQUcsRUFBRztBQURDLEtBQUQsRUFFTDtBQUNEQSxTQUFHLEVBQUc7QUFETCxLQUZLLEVBSU47QUFDQUEsU0FBRyxFQUFFO0FBREwsS0FKTSxDQVBFO0FBY1ZDLFlBQVEsRUFBRSxDQUFDO0FBQ1RMLFVB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QWlCLEVBQUMsSUFGcEI7QUFHRUMsc0JBQWMsRUFBQyxLQUhqQjtBQUlFQyx1QkFBZSxFQUFDO0FBSmxCOztBQU1GLFNBQUtJLG1CQUFMO0FBQ0UsNkNBQ0tXLEtBREw7QUFFRWpCLHlCQUFpQixFQUFDLEtBRnBCO0FBR0VDLHNCQUFjLEVBQUM7QUFIakI7O0FBS0YsU0FBS08sbUJBQUw7QUFDRSw2Q0FDS1MsS0FETDtBQUVFakIseUJBQWlCLEVBQUMsS0FGcEI7QUFHRUUsdUJBQWUsRUFBQ2dCLE1BQU0sQ0FBQ0M7QUFIekI7O0FBS0Y7QUFDRSxhQUFPRixLQUFQO0FBL0NKO0FBaURELENBbEREOztBQW9EZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lYTc0MDQ1NmZiYjA5NTUzMDY0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0aWQgZnJvbSBcInNob3J0aWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbe1xyXG4gICAgaWQ6MSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgaWQ6MSxcclxuICAgICAgbmlja25hbWU6ICfquYDsp4TshLEnXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICBJbWFnZXM6IFt7XHJcbiAgICAgIHNyYzogICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91cGRhdGU9MjAxODA3MjYnXHJcbiAgICB9LCB7XHJcbiAgICAgIHNyYyA6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91cGRhdGU9MjAxODA3MjYnXHJcbiAgICB9LHtcclxuICAgICAgc3JjOiAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dXBkYXRlPTIwMTgwNzI2J1xyXG4gICAgfV0sXHJcbiAgICBDb21tZW50czogW3tcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIG5pY2tuYW1lOiAnbmVybycsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6ICfsmrDsmYAg6rCc7KCV7YyQ7J20IOuCmOyZlOq1sOyalH4nXHJcbiAgICB9LCB7XHJcbiAgICAgIFVzZXI6IHtcclxuICAgICAgICBuaWNrbmFtZTogJ2hlcm8nXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6ICfslrzrpbgg7IKs6rOg7Iu27Ja07JqUJ1xyXG4gICAgfV1cclxuICB9XSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSlcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAgKHtcclxuICBpZDpzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgY29udGVudDogZGF0YSxcclxuICBVc2VyOiB7XHJcbiAgICBpZDoxLFxyXG4gICAgbmlja25hbWU6J+q5gOynhOyEsSdcclxuICB9LFxyXG4gIC8vIEltYWdlczogW10sXHJcbiAgLy8gQ29tbWVudHM6IFtdLFxyXG59KSBcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6dHJ1ZSxcclxuICAgICAgICBhZGRQb3N0RG9uZTpmYWxzZSxcclxuICAgICAgICBhZGRQb3N0RXJyb3I6bnVsbCxcclxuICAgICAgfVxyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgYWRkUG9zdERvbmU6dHJ1ZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRQb3N0TG9hZGluZzpmYWxzZSxcclxuICAgICAgICBhZGRQb3N0RXJyb3I6YWN0aW9uLmVycm9yXHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSB7Li4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF19O1xyXG4gICAgICBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6dHJ1ZSxcclxuICAgICAgICBhZGRDb21tZW50RG9uZTpmYWxzZSxcclxuICAgICAgICBhZGRDb21tZW50RXJyb3I6bnVsbCxcclxuICAgICAgfVxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgIGFkZENvbW1lbnREb25lOnRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgYWRkQ29tbWVudEVycm9yOmFjdGlvbi5lcnJvclxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=