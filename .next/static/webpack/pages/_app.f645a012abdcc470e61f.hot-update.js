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

const dummyComment = data => ({
  id: 1,
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
      {
        console.log(action.data);
        console.log(state.mainPosts.findIndex);
        const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);

        const post = _objectSpread({}, state.mainPosts[postIndex]);

        post.Comments = [dummyComment(action.data.content), ...post.Comments];
        const mainPosts = [...state.mainPosts];
        mainPosts[postIndex] = post;
        console.log(mainPosts);
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts,
          addCommentLoading: true,
          addCommentDone: false,
          addCommentError: null
        });
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3Bvc3QuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0Iiwic2hvcnRpZCIsImdlbmVyYXRlIiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZmluZEluZGV4IiwicG9zdEluZGV4IiwidiIsInBvc3RJZCIsInBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxZQUFZLEdBQUc7QUFDMUJDLFdBQVMsRUFBRSxDQUFDO0FBQ1ZDLE1BQUUsRUFBQyxDQURPO0FBRVZDLFFBQUksRUFBRTtBQUNKRCxRQUFFLEVBQUMsQ0FEQztBQUVKRSxjQUFRLEVBQUU7QUFGTixLQUZJO0FBTVZDLFdBQU8sRUFBRSx1QkFOQztBQU9WQyxVQUFNLEVBQUUsQ0FBQztBQUNQQyxTQUFHLEVBQUc7QUFEQyxLQUFELEVBRUw7QUFDREEsU0FBRyxFQUFHO0FBREwsS0FGSyxFQUlOO0FBQ0FBLFNBQUcsRUFBRTtBQURMLEtBSk0sQ0FQRTtBQWNWQyxZQUFRLEVB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QUFPVCxLQUFLLENBQUM5QixTQUFOLENBQWdCb0MsU0FBaEIsQ0FBUCxDQUFWOztBQUNBRyxZQUFJLENBQUNoQyxRQUFMLEdBQWdCLENBQUNxQixZQUFZLENBQUNHLE1BQU0sQ0FBQ1QsSUFBUCxDQUFZbEIsT0FBYixDQUFiLEVBQW9DLEdBQUdtQyxJQUFJLENBQUNoQyxRQUE1QyxDQUFoQjtBQUNBLGNBQU1QLFNBQVMsR0FBRyxDQUFDLEdBQUc4QixLQUFLLENBQUM5QixTQUFWLENBQWxCO0FBQ0FBLGlCQUFTLENBQUNvQyxTQUFELENBQVQsR0FBdUJHLElBQXZCO0FBQ0FOLGVBQU8sQ0FBQ0MsR0FBUixDQUFZbEMsU0FBWjtBQUNBLCtDQUNLOEIsS0FETDtBQUVFOUIsbUJBRkY7QUFHRVksMkJBQWlCLEVBQUMsSUFIcEI7QUFJRUMsd0JBQWMsRUFBQyxLQUpqQjtBQUtFQyx5QkFBZSxFQUFDO0FBTGxCO0FBT0Q7O0FBQ0QsU0FBS0ksbUJBQUw7QUFDRSw2Q0FDS1ksS0FETDtBQUVFbEIseUJBQWlCLEVBQUMsS0FGcEI7QUFHRUMsc0JBQWMsRUFBQztBQUhqQjs7QUFLRixTQUFLTyxtQkFBTDtBQUNFLDZDQUNLVSxLQURMO0FBRUVsQix5QkFBaUIsRUFBQyxLQUZwQjtBQUdFRSx1QkFBZSxFQUFDaUIsTUFBTSxDQUFDQztBQUh6Qjs7QUFLRjtBQUNFLGFBQU9GLEtBQVA7QUFwREo7QUFzREQsQ0F2REQ7O0FBeURlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmY2NDVhMDEyYWJkY2M0NzBlNjFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRpZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFt7XHJcbiAgICBpZDoxLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICBpZDoxLFxyXG4gICAgICBuaWNrbmFtZTogJ+q5gOynhOyEsSdcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcclxuICAgIEltYWdlczogW3tcclxuICAgICAgc3JjOiAgJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VwZGF0ZT0yMDE4MDcyNidcclxuICAgIH0sIHtcclxuICAgICAgc3JjIDogJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VwZGF0ZT0yMDE4MDcyNidcclxuICAgIH0se1xyXG4gICAgICBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91cGRhdGU9MjAxODA3MjYnXHJcbiAgICB9XSxcclxuICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgbmlja25hbWU6ICduZXJvJyxcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogJ+yasOyZgCDqsJzsoJXtjJDsnbQg64KY7JmU6rWw7JqUfidcclxuICAgIH0sIHtcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIG5pY2tuYW1lOiAnaGVybydcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogJ+yWvOuluCDsgqzqs6Dsi7bslrTsmpQnXHJcbiAgICB9XVxyXG4gIH1dLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfQ09NTUVOVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfQ09NTUVOVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICAoe1xyXG4gIGlkOnNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICBjb250ZW50OiBkYXRhLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOjEsXHJcbiAgICBuaWNrbmFtZTon6rmA7KeE7ISxJ1xyXG4gIH0sXHJcbiAgLy8gSW1hZ2VzOiBbXSxcclxuICAvLyBDb21tZW50czogW10sXHJcbn0pIFxyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6MSxcclxuICBjb250ZW50OiBkYXRhLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6J+q5gOynhOyEsSdcclxuICB9LFxyXG59KVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSxhY3Rpb24pID0+IHtcclxuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRQb3N0TG9hZGluZzp0cnVlLFxyXG4gICAgICAgIGFkZFBvc3REb25lOmZhbHNlLFxyXG4gICAgICAgIGFkZFBvc3RFcnJvcjpudWxsLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICBhZGRQb3N0TG9hZGluZzpmYWxzZSxcclxuICAgICAgICBhZGRQb3N0RG9uZTp0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgIGFkZFBvc3RFcnJvcjphY3Rpb24uZXJyb3JcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgpO1xyXG4gICAgICBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICBjb25zdCBwb3N0ID0gey4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdfTtcclxuICAgICAgcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xyXG4gICAgICBjb25zb2xlLmxvZyhtYWluUG9zdHMpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1haW5Qb3N0cyxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzp0cnVlLFxyXG4gICAgICAgIGFkZENvbW1lbnREb25lOmZhbHNlLFxyXG4gICAgICAgIGFkZENvbW1lbnRFcnJvcjpudWxsLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgYWRkQ29tbWVudERvbmU6dHJ1ZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzpmYWxzZSxcclxuICAgICAgICBhZGRDb21tZW50RXJyb3I6YWN0aW9uLmVycm9yXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==