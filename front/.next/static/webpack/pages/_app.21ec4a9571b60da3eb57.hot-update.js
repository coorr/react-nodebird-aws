webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/reducers/post.js":
/*!******************************!*\
  !*** ./src/reducers/post.js ***!
  \******************************/
/*! exports provided: initialState, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_REQUEST, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_REQUEST", function() { return REMOVE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/reducers/user.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _withshepherd_faker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @withshepherd/faker */ "./node_modules/@withshepherd/faker/index.js");
/* harmony import */ var _withshepherd_faker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_withshepherd_faker__WEBPACK_IMPORTED_MODULE_3__);




const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePost: true,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
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
  addCommentError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null
};
const LIKE_POST_REQUEST = "LIKE_POSTS_REQUEST";
const LIKE_POST_SUCCESS = "LIKE_POSTS_SUCCESS";
const LIKE_POST_FAILURE = "LIKE_POSTS_FAILURE";
const UNLIKE_POST_REQUEST = "UNLIKE_POSTS_REQUEST";
const UNLIKE_POST_SUCCESS = "UNLIKE_POSTS_SUCCESS";
const UNLIKE_POST_FAILURE = "UNLIKE_POSTS_FAILURE";
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
const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
const RETWEET_REQUEST = "RETWEET_REQUEST";
const RETWEET_SUCCESS = "RETWEET_SUCCESS";
const RETWEET_FAILURE = "RETWEET_FAILURE";
const REMOVE_REQUEST = 'REMOVE_REQUEST';
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
      case RETWEET_REQUEST:
        draft.retweetLoading = true;
        draft.retweetDone = false;
        draft.retweetError = null;
        break;

      case RETWEET_SUCCESS:
        draft.retweetLoading = false;
        draft.retweetDone = true;
        draft.mainPosts.unshift(action.data);
        break;

      case RETWEET_FAILURE:
        draft.retweetLoading = false;
        draft.retweetError = action.error;
        break;

      case REMOVE_REQUEST:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;

      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;

      case UPLOAD_IMAGES_SUCCESS:
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;

      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;

      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;

      case LIKE_POST_SUCCESS:
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers.push({
          id: action.data.UserId
        });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;

      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;

      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;

      case UNLIKE_POST_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
          draft.unlikePostLoading = false;
          draft.unlikePostDone = true;
          break;
        }

      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;

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
        draft.imagePaths = [];
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
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
        draft.removePostLoading = false;
        draft.removePostDone = true;
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
          post.Comments.unshift(action.data); // 게시글 글 넣어주기

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3Bvc3QuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0IiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQb3N0RXJyb3IiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsInJldHdlZXRMb2FkaW5nIiwicmV0d2VldERvbmUiLCJyZXR3ZWV0RXJyb3IiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJSRVRXRUVUX1JFUVVFU1QiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0ZBSUxVUkUiLCJSRU1PVkVfUkVRVUVTVCIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZXJyb3IiLCJmaWx0ZXIiLCJ2IiwiaSIsInBvc3QiLCJmaW5kIiwiaWQiLCJQb3N0SWQiLCJMaWtlcnMiLCJwdXNoIiwiVXNlcklkIiwiY29uY2F0IiwibGVuZ3RoIiwiQ29tbWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxZQUFZLEdBQUc7QUFDMUJDLFdBQVMsRUFBRSxFQURlO0FBRTFCQyxZQUFVLEVBQUUsRUFGYztBQUcxQkMsYUFBVyxFQUFFLElBSGE7QUFJMUJDLGlCQUFlLEVBQUUsS0FKUztBQUsxQkMsY0FBWSxFQUFFLEtBTFk7QUFNMUJDLGVBQWEsRUFBRSxJQU5XO0FBUTFCQyxtQkFBaUIsRUFBRSxLQVJPO0FBUzFCQyxnQkFBYyxFQUFFLEtBVFU7QUFVMUJDLGlCQUFlLEVBQUUsSUFWUztBQVkxQkMsa0JBQWdCLEVBQUUsS0FaUTtBQWExQkMsZUFBYSxFQUFFLEtBYlc7QUFjMUJDLGdCQUFjLEVBQUUsSUFkVTtBQWdCMUJDLGdCQUFjLEVBQUUsS0Fo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LGVBQUssQ0FBQ3hDLGVBQU4sR0FBc0IsSUFBdEI7QUFDQTtBQUNEOztBQUNELFdBQUt3QixtQkFBTDtBQUNFZ0IsYUFBSyxDQUFDMUMsaUJBQU4sR0FBd0IsS0FBeEI7QUFDQTBDLGFBQUssQ0FBQ3hDLGVBQU4sR0FBc0JzQyxNQUFNLENBQUNJLEtBQTdCO0FBQ0E7O0FBQ0Y7QUFDRTtBQXZJSjtBQXlJRCxHQTFJcUQsQ0FBeEM7QUFBQSxDQUFoQjs7QUE2SWVOLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjFlYzRhOTU3MWI2MGRhM2ViNTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydGlkIGZyb20gXCJzaG9ydGlkXCI7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FIH0gZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCBmYWtlciBmcm9tICdAd2l0aHNoZXBoZXJkL2Zha2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBoYXNNb3JlUG9zdDogdHJ1ZSxcclxuICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgbGlrZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3REb25lOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG5cclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG5cclxuICB1cGxvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICB1cGxvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuXHJcbiAgcmV0d2VldExvYWRpbmc6IGZhbHNlLFxyXG4gIHJldHdlZXREb25lOiBmYWxzZSxcclxuICByZXR3ZWV0RXJyb3I6IG51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9IFwiTElLRV9QT1NUU19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9IFwiTElLRV9QT1NUU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9IFwiTElLRV9QT1NUU19GQUlMVVJFXCI7IFxyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSBcIlVOTElLRV9QT1NUU19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gXCJVTkxJS0VfUE9TVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9IFwiVU5MSUtFX1BPU1RTX0ZBSUxVUkVcIjsgXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1BPU1RTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiOyBcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSBcIlVQTE9BRF9JTUFHRVNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gXCJVUExPQURfSU1BR0VTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9IFwiVVBMT0FEX0lNQUdFU19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gXCJSRVRXRUVUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9IFwiUkVUV0VFVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSBcIlJFVFdFRVRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9SRVFVRVNUICA9ICdSRU1PVkVfUkVRVUVTVCc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KVxyXG5cclxuLy8gcmVkdWNlciA9PSDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYKOu2iOuzgOyEseydhCDsp4DtgqTrqbTshJwpXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZz10cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJldHdlZXREb25lPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvcj1udWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZT10cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkU6IFxyXG4gICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvcj1hY3Rpb24uZXJyb3JcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgUkVNT1ZFX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocz0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEgKVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZz10cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmU9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3I9bnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZT10cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTogXHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvcj1hY3Rpb24uZXJyb3JcclxuICAgICAgICBicmVhaztcclxuICAgICAgXHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3REb25lPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3I9bnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZClcclxuICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3REb25lPXRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6IFxyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yPWFjdGlvbi5lcnJvclxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBcclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmU9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yPW51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTsgXHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmU9dHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yPWFjdGlvbi5lcnJvclxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZz10cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmU9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3I9bnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5Qb3N0cyk7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lPXRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3I9bnVsbDtcclxuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvcj1hY3Rpb24uZXJyb3JcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZz10cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvcj1udWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lPXRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yPW51bGw7XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yPWFjdGlvbi5lcnJvclxyXG4gICAgICAgIGJyZWFrO1xyXG4gIFxyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmc9dHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZT1mYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3I9bnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cz0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodik9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lPXRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3I9YWN0aW9uLmVycm9yXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgXHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZz10cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lPWZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7ICBcclxuICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpOyAgIC8vIOqyjOyLnOq4gCDquIAg64Sj7Ja07KO86riwXHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmU9dHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3I9bnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yPWFjdGlvbi5lcnJvclxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9