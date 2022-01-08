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
  id: 1,
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
        state.mainPosts.findIndex(a => console.log(a.id));
        const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
        console.log(postIndex);

        const post = _objectSpread({}, state.mainPosts[postIndex]);

        console.log(post);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3Bvc3QuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwiZHVtbXlQb3N0IiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZmluZEluZGV4IiwiYSIsInBvc3RJbmRleCIsInYiLCJwb3N0SWQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxXQUFTLEVBQUUsQ0FBQztBQUNWQyxNQUFFLEVBQUMsQ0FETztBQUVWQyxRQUFJLEVBQUU7QUFDSkQsUUFBRSxFQUFDLENBREM7QUFFSkUsY0FBUSxFQUFFO0FBRk4sS0FGSTtBQU1WQyxXQUFPLEVBQUUsdUJBTkM7QUFPVkMsVUFBTSxFQUFFLENBQUM7QUFDUEMsU0FBRyxFQUFHO0FBREMsS0FBRCxFQUVMO0FBQ0RBLFNBQUcsRUFBRztBQURMLEtBRkssRUFJTjtBQUNBQSxTQUFHLEVBQUU7QUFETCxLQUpNLENBUEU7QUFjVkMsWUFBUSxFQUFFLENBQUM7QUFDVEwsVUFB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QyxHQUFSLENBQVlHLFNBQVo7O0FBQ0EsY0FBTUcsSUFBSSxxQkFBT1YsS0FBSyxDQUFDNUIsU0FBTixDQUFnQm1DLFNBQWhCLENBQVAsQ0FBVjs7QUFDQUosZUFBTyxDQUFDQyxHQUFSLENBQVlNLElBQVo7QUFDQUEsWUFBSSxDQUFDL0IsUUFBTCxHQUFnQixDQUFDbUIsWUFBWSxDQUFDRyxNQUFNLENBQUNQLElBQVAsQ0FBWWxCLE9BQWIsQ0FBYixFQUFvQyxHQUFHa0MsSUFBSSxDQUFDL0IsUUFBNUMsQ0FBaEI7QUFDQSxjQUFNUCxTQUFTLEdBQUcsQ0FBQyxHQUFHNEIsS0FBSyxDQUFDNUIsU0FBVixDQUFsQjtBQUNBQSxpQkFBUyxDQUFDbUMsU0FBRCxDQUFULEdBQXVCRyxJQUF2QjtBQUNBUCxlQUFPLENBQUNDLEdBQVIsQ0FBWWhDLFNBQVo7QUFDQSwrQ0FDSzRCLEtBREw7QUFFRTVCLG1CQUZGO0FBR0VZLDJCQUFpQixFQUFDLElBSHBCO0FBSUVDLHdCQUFjLEVBQUMsS0FKakI7QUFLRUMseUJBQWUsRUFBQztBQUxsQjtBQU9EOztBQUNELFNBQUtJLG1CQUFMO0FBQ0UsNkNBQ0tVLEtBREw7QUFFRWhCLHlCQUFpQixFQUFDLEtBRnBCO0FBR0VDLHNCQUFjLEVBQUM7QUFIakI7O0FBS0YsU0FBS08sbUJBQUw7QUFDRSw2Q0FDS1EsS0FETDtBQUVFaEIseUJBQWlCLEVBQUMsS0FGcEI7QUFHRUUsdUJBQWUsRUFBQ2UsTUFBTSxDQUFDQztBQUh6Qjs7QUFLRjtBQUNFLGFBQU9GLEtBQVA7QUF0REo7QUF3REQsQ0F6REQ7O0FBMkRlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41OGZkMmQzNzBhOWRkODVkYWZjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0aWQgZnJvbSBcInNob3J0aWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbe1xyXG4gICAgaWQ6MSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgaWQ6MSxcclxuICAgICAgbmlja25hbWU6ICfquYDsp4TshLEnXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICBJbWFnZXM6IFt7XHJcbiAgICAgIHNyYzogICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91cGRhdGU9MjAxODA3MjYnXHJcbiAgICB9LCB7XHJcbiAgICAgIHNyYyA6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91cGRhdGU9MjAxODA3MjYnXHJcbiAgICB9LHtcclxuICAgICAgc3JjOiAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dXBkYXRlPTIwMTgwNzI2J1xyXG4gICAgfV0sXHJcbiAgICBDb21tZW50czogW3tcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIG5pY2tuYW1lOiAnbmVybycsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6ICfsmrDsmYAg6rCc7KCV7YyQ7J20IOuCmOyZlOq1sOyalH4nXHJcbiAgICB9LCB7XHJcbiAgICAgIFVzZXI6IHtcclxuICAgICAgICBuaWNrbmFtZTogJ2hlcm8nXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6ICfslrzrpbgg7IKs6rOg7Iu27Ja07JqUJ1xyXG4gICAgfV1cclxuICB9XSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSlcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAgKHtcclxuICBpZDoxLFxyXG4gIGNvbnRlbnQ6IGRhdGEsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6MSxcclxuICAgIG5pY2tuYW1lOifquYDsp4TshLEnXHJcbiAgfSxcclxuICAvLyBJbWFnZXM6IFtdLFxyXG4gIC8vIENvbW1lbnRzOiBbXSxcclxufSkgXHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICBpZDoxLFxyXG4gIGNvbnRlbnQ6IGRhdGEsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTon6rmA7KeE7ISxJ1xyXG4gIH0sXHJcbn0pXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOnRydWUsXHJcbiAgICAgICAgYWRkUG9zdERvbmU6ZmFsc2UsXHJcbiAgICAgICAgYWRkUG9zdEVycm9yOm51bGwsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgIGFkZFBvc3REb25lOnRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6ZmFsc2UsXHJcbiAgICAgICAgYWRkUG9zdEVycm9yOmFjdGlvbi5lcnJvclxyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgoYSk9PiBjb25zb2xlLmxvZyhhLmlkKSlcclxuICAgICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgY29uc29sZS5sb2cocG9zdEluZGV4KTtcclxuICAgICAgY29uc3QgcG9zdCA9IHsuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XX07XHJcbiAgICAgIGNvbnNvbGUubG9nKHBvc3QpO1xyXG4gICAgICBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1haW5Qb3N0cyk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOnRydWUsXHJcbiAgICAgICAgYWRkQ29tbWVudERvbmU6ZmFsc2UsXHJcbiAgICAgICAgYWRkQ29tbWVudEVycm9yOm51bGwsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzpmYWxzZSxcclxuICAgICAgICBhZGRDb21tZW50RG9uZTp0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOmZhbHNlLFxyXG4gICAgICAgIGFkZENvbW1lbnRFcnJvcjphY3Rpb24uZXJyb3JcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9