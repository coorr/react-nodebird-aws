webpackHotUpdate_N_E("pages/index",{

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
});

const dummyPost = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: '김진성2'
  },
  Images: [{
    src: null
  }],
  Comments: []
});

const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  content: data,
  User: {
    id: 1,
    nickname: '김진성2'
  }
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
          const post = draft.mainPosts.find(v => v.id === action.data.postId);
          post.Comments.unshift(dummyComment(action.data.content)); // 게시글 글 넣어주기

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3Bvc3QuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic2hvcnRpZCIsImdlbmVyYXRlIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3QiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJ2IiwiaSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJpbWFnZSIsIkNvbW1lbnQiLCJzZW50ZW5jZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25jYXQiLCJsZW5ndGgiLCJlcnJvciIsInVuc2hpZnQiLCJmaWx0ZXIiLCJwb3N0IiwiZmluZCIsInBvc3RJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLFlBQVksR0FBRztBQUMxQkMsV0FBUyxFQUFFLENBQUM7QUFDVkMsTUFBRSxFQUFDLENBRE87QUFFVkMsUUFBSSxFQUFFO0FBQ0pELFFBQUUsRUFBQyxDQURDO0FBRUpFLGNBQVEsRUFBRTtBQUZOLEtBRkk7QUFNVkMsV0FBTyxFQUFFLHVCQU5DO0FBT1ZDLFVBQU0sRUFBRSxDQUFDO0FBQ1BKLFFBQUUsRUFBRUssOENBQU8sQ0FBQ0MsUUFBUixFQURHO0FBRVBDLFNBQUcsRUFBRztBQUZDLEtBQUQsRUFHTDtBQUNEUCxRQUFFLEVBQUVLLDhDQUFPLENBQUNDLFFBQVIsRUFESDtBQUVEQyxTQUFHLEVBQUc7QUFGTCxLQUhLLEVBTU47QUFDQVAsUUFBRSxFQUFFSyw4Q0FBTyxDQUFDQyxRQUFSLEVBREo7QUFFQUMsU0FBRyxFQUFFO0FBRkwsS0FOTSxDQVBFO0FBaUJWQyxZQUFRLEVBQUUsQ0FBQztBQUNUUixRQUFFLEVBQUVLLDhDQUFPLENBQUNDLFFBQVIsRUFESztBQUVUTCxVQUFJLEVBQUU7QUFDSkQsVUFBRSxFQUFFSyw4Q0FBTyxDQUFDQyxRQUFSLEVBREE7QUFFSkosZ0JBQVEsRUFBRTtBQUZOLE9BRkc7QUFNVEMsYUFBTyxFQUFFO0FBTkEsS0FBRCxFQU9QO0FBQ0RGLFVBQUksRUFBRTtBQUNKRCxVQUFFLEVBQUVLLDhDQUFPLENBQUNDLFFBQVIsRUFEQTtBQUVKSixnQkFBUSxFQUFFO0FBRk4sT0FETDtBQUtEQyxhQUFPLEVBQUU7QUFMUixLQVBPO0FB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RWEsYUFBSyxDQUFDeEMsaUJBQU4sR0FBd0IsSUFBeEI7QUFDQXdDLGFBQUssQ0FBQ3ZDLGNBQU4sR0FBcUIsS0FBckI7QUFDQTs7QUFDRixXQUFLMkIsbUJBQUw7QUFBMEI7QUFDeEIsZ0JBQU1rQixJQUFJLEdBQUdOLEtBQUssQ0FBQzdELFNBQU4sQ0FBZ0JvRSxJQUFoQixDQUFzQnZDLENBQUQsSUFBT0EsQ0FBQyxDQUFDNUIsRUFBRixLQUFTMEQsTUFBTSxDQUFDUCxJQUFQLENBQVlpQixNQUFqRCxDQUFiO0FBQ0FGLGNBQUksQ0FBQzFELFFBQUwsQ0FBY3dELE9BQWQsQ0FBc0JULFlBQVksQ0FBQ0csTUFBTSxDQUFDUCxJQUFQLENBQVloRCxPQUFiLENBQWxDLEVBRndCLENBRW9DOztBQUM1RHlELGVBQUssQ0FBQ3hDLGlCQUFOLEdBQXdCLEtBQXhCO0FBQ0F3QyxlQUFLLENBQUN2QyxjQUFOLEdBQXFCLElBQXJCO0FBQ0F1QyxlQUFLLENBQUN0QyxlQUFOLEdBQXNCLElBQXRCO0FBQ0E7QUFDRDs7QUFDRCxXQUFLMkIsbUJBQUw7QUFDRVcsYUFBSyxDQUFDeEMsaUJBQU4sR0FBd0IsS0FBeEI7QUFDQXdDLGFBQUssQ0FBQ3RDLGVBQU4sR0FBc0JvQyxNQUFNLENBQUNLLEtBQTdCO0FBQ0E7O0FBQ0Y7QUFDRTtBQW5FSjtBQXFFRCxHQXRFcUQsQ0FBeEM7QUFBQSxDQUFoQjs7QUF5RWVQLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg3YjBkOGI1OWUzMTU2NGExZGI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRpZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSB9IGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnQHdpdGhzaGVwaGVyZC9mYWtlcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW3tcclxuICAgIGlkOjEsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGlkOjEsXHJcbiAgICAgIG5pY2tuYW1lOiAn6rmA7KeE7ISxJ1xyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLFxyXG4gICAgSW1hZ2VzOiBbe1xyXG4gICAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG4gICAgICBzcmM6ICAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dXBkYXRlPTIwMTgwNzI2J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG4gICAgICBzcmMgOiAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dXBkYXRlPTIwMTgwNzI2J1xyXG4gICAgfSx7XHJcbiAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICAgIHNyYzogJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VwZGF0ZT0yMDE4MDcyNidcclxuICAgIH1dLFxyXG4gICAgQ29tbWVudHM6IFt7XHJcbiAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lOiAnbmVybycsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6ICfsmrDsmYAg6rCc7KCV7YyQ7J20IOuCmOyZlOq1sOyalH4nXHJcbiAgICB9LCB7XHJcbiAgICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lOiAnaGVybydcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogJ+yWvOuluCDsgqzqs6Dsi7bslrTsmpQnXHJcbiAgICB9XVxyXG4gIH1dLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIGhhc01vcmVQb3N0OiB0cnVlLFxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG5cclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBcclxuICBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKHYsaSkgPT4gKHtcclxuICAgIGlkOnNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgIEltYWdlczogW3tcclxuICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gICAgfV0sXHJcbiAgICBDb21tZW50OiBbe1xyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6c2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lOmZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgICAgfSwgXHJcbiAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICB9XSxcclxuICB9KSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1BPU1RTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiOyBcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gICh7XHJcbiAgaWQ6IGRhdGEuaWQsXHJcbiAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOjEsXHJcbiAgICBuaWNrbmFtZTon6rmA7KeE7ISxMidcclxuICB9LFxyXG4gIEltYWdlczogW3tcclxuICAgIHNyYzogbnVsbFxyXG4gIH1dLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufSkgXHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICBpZDpzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgY29udGVudDogZGF0YSxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOifquYDsp4TshLEyJ1xyXG4gIH0sXHJcbn0pXHJcblxyXG4vLyByZWR1Y2VyID09IOydtOyghCDsg4Htg5zrpbwg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtOuCtOuKlCDtlajsiJgo67aI67OA7ISx7J2EIOyngO2CpOuptOyEnClcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSxhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmc9dHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yPW51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZT10cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yPW51bGw7XHJcbiAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3I9YWN0aW9uLmVycm9yXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmc9dHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZT1mYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3I9bnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZT10cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvcj1udWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yPWFjdGlvbi5lcnJvclxyXG4gICAgICAgIGJyZWFrO1xyXG4gIFxyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmc9dHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZT1mYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3I9bnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cz0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodik9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmU9dHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3I9bnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvcj1hY3Rpb24uZXJyb3JcclxuICAgICAgICBicmVhaztcclxuICBcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmU9ZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTsgIFxyXG4gICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpOyAgIC8vIOqyjOyLnOq4gCDquIAg64Sj7Ja07KO86riwXHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmU9dHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3I9bnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yPWFjdGlvbi5lcnJvclxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9