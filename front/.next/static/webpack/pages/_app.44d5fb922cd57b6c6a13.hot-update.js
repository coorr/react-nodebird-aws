webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/reducers/post.js":
/*!******************************!*\
  !*** ./src/reducers/post.js ***!
  \******************************/
/*! exports provided: initialState, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_REQUEST, addPost, addComment, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
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
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
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
  retweetError: null,
  singlePost: null
};
const LIKE_POST_REQUEST = "LIKE_POSTS_REQUEST";
const LIKE_POST_SUCCESS = "LIKE_POSTS_SUCCESS";
const LIKE_POST_FAILURE = "LIKE_POSTS_FAILURE";
const UNLIKE_POST_REQUEST = "UNLIKE_POSTS_REQUEST";
const UNLIKE_POST_SUCCESS = "UNLIKE_POSTS_SUCCESS";
const UNLIKE_POST_FAILURE = "UNLIKE_POSTS_FAILURE";
const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";
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

      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.singlePost = action.data;
        break;

      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;

      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePost = action.data.length === 10;
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

/***/ }),

/***/ "./src/sagas/post.js":
/*!***************************!*\
  !*** ./src/sagas/post.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./src/reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./src/reducers/user.js");





function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPosts(action) {
  try {
    console.log(result);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/post/${data}`);
}

function* loadPost(action) {
  try {
    console.log(result);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post', data);
}

function* addPost(action) {
  try {
    console.log(result);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(changeNicknameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post/images', data);
}

function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data}/retweet`);
}

function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(retweetAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}

function* watchLoadUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchLoadRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadRetweet)]);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zYWdhcy9wb3N0LmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdCIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwicmV0d2VldExvYWRpbmciLCJyZXR3ZWV0RG9uZSIsInJldHdlZXRFcnJvciIsInNpbmdsZVBvc3QiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJSRVRXRUVUX1JFUVVFU1QiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0ZBSUxVUkUiLCJSRU1PVkVfUkVRVUVTVCIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZXJyb3IiLCJmaWx0ZXIiLCJ2IiwiaSIsInBvc3QiLCJmaW5kIiwiaWQiLCJQb3N0SWQiLCJMaWtlcnMiLCJwdXNoIiwiVXNlcklkIiwiY29uY2F0IiwibGVuZ3RoIiwiQ29tbWVudHMiLCJsb2FkUG9zdHNBUEkiLCJsYXN0SWQiLCJheGlvcyIsImdldCIsImxvYWRQb3N0cyIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJsb2FkUG9zdEFQSSIsImxvYWRQb3N0IiwiYWRkUG9zdEFQSSIsIkFERF9QT1NUX1RPX01FIiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJyZW1vdmVQb3N0IiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0IiwidW5saWtlUG9zdEFQSSIsInVubGlrZVBvc3QiLCJjaGFuZ2VOaWNrbmFtZUFQSSIsIm5pY2tuYW1lIiwiY2hhbmdlTmlja25hbWUiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJ3YXRjaExvYWRQb3N0cyIsInRha2VMYXRlc3QiLCJ3YXRjaExvYWRQb3N0Iiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hMaWtlUG9zdCIsIndhdGNoVW5saWtlUG9zdCIsIndhdGNoQ2hhbmdlTmlja25hbWUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIndhdGNoTG9hZFVwbG9hZEltYWdlcyIsIndhdGNoTG9hZFJldHdlZXQiLCJwb3N0U2FnYSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxZQUFZLEdBQUc7QUFDMUJDLFdBQVMsRUFBRSxFQURlO0FBRTFCQyxZQUFVLEVBQUUsRUFGYztBQUcxQkMsYUFBVyxFQUFFLElBSGE7QUFJMUJDLGlCQUFlLEVBQUUsS0FKUztBQUsxQkMsY0FBWSxFQUFFLEtBTFk7QUFNMUJDLGVBQWEsRUFBRSxJQU5XO0FBUTFCQyxtQkFBaUIsRUFBRSxLQVJPO0FBUzFCQyxnQkFBYyxFQUFFLEtBVFU7QUFVMUJDLGlCQUFlLEVBQUUsSUFWUztBQVkxQkMsaUJBQWUsRUFBRSxLQVpTO0FBYTFCQyxjQUFZLEVBQUUsS0FiWTtBQWMxQkMsZUFBYSxFQUFFLElBZFc7QUFnQjFCQyxrQkFBZ0IsRUFBRSxLQWhCUTtBQWlCMUJDLGVBQWEsRUFBRSxLQWpCVztBQWtCMUJDLGdCQUFj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Q3hCLFFBQU1MLHFFQUFVLENBQUN4RixnRUFBRCxFQUFvQjJFLFFBQXBCLENBQWhCO0FBQ0Q7O0FBQ0QsVUFBVW1CLGVBQVYsR0FBNEI7QUFDMUIsUUFBTU4scUVBQVUsQ0FBQ3JGLGtFQUFELEVBQXNCMEUsVUFBdEIsQ0FBaEI7QUFDRDs7QUFDRCxVQUFVa0IsbUJBQVYsR0FBZ0M7QUFDOUIsUUFBTVAscUVBQVUsQ0FBQ1Esc0VBQUQsRUFBMEJoQixjQUExQixDQUFoQjtBQUNEOztBQUNELFVBQVVpQixxQkFBVixHQUFrQztBQUNoQyxRQUFNVCxxRUFBVSxDQUFDbkUsb0VBQUQsRUFBd0IrRCxZQUF4QixDQUFoQjtBQUNEOztBQUNELFVBQVVjLGdCQUFWLEdBQTZCO0FBQzNCLFFBQU1WLHFFQUFVLENBQUNoRSw4REFBRCxFQUFrQjhELE9BQWxCLENBQWhCO0FBQ0Q7O0FBSWMsVUFBVWEsUUFBVixHQUFxQjtBQUNsQyxRQUFNQyw4REFBRyxDQUFDLENBQ1JDLCtEQUFJLENBQUNYLFlBQUQsQ0FESSxFQUVSVywrREFBSSxDQUFDVixlQUFELENBRkksRUFHUlUsK0RBQUksQ0FBQ1QsZUFBRCxDQUhJLEVBSVJTLCtEQUFJLENBQUNkLGNBQUQsQ0FKSSxFQUtSYywrREFBSSxDQUFDWixhQUFELENBTEksRUFNUlksK0RBQUksQ0FBQ1IsYUFBRCxDQU5JLEVBT1JRLCtEQUFJLENBQUNQLGVBQUQsQ0FQSSxFQVFSTywrREFBSSxDQUFDTixtQkFBRCxDQVJJLEVBU1JNLCtEQUFJLENBQUNKLHFCQUFELENBVEksRUFVUkksK0RBQUksQ0FBQ0gsZ0JBQUQsQ0FWSSxDQUFELENBQVQ7QUFZRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQ0ZDVmYjkyMmNkNTdiNmM2YTEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRpZCBmcm9tIFwic2hvcnRpZFwiO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSB9IGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnQHdpdGhzaGVwaGVyZC9mYWtlcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgaGFzTW9yZVBvc3Q6IHRydWUsXHJcbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcblxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcblxyXG4gIHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0RvbmU6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxyXG5cclxuICByZXR3ZWV0TG9hZGluZzogZmFsc2UsXHJcbiAgcmV0d2VldERvbmU6IGZhbHNlLFxyXG4gIHJldHdlZXRFcnJvcjogbnVsbCxcclxuXHJcbiAgc2luZ2xlUG9zdDpudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSBcIkxJS0VfUE9TVFNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSBcIkxJS0VfUE9TVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSBcIkxJS0VfUE9TVFNfRkFJTFVSRVwiOyBcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gXCJVTkxJS0VfUE9TVFNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9IFwiVU5MSUtFX1BPU1RTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSBcIlVOTElLRV9QT1NUU19GQUlMVVJFXCI7IFxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gXCJMT0FEX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSBcIkxPQURfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9IFwiTE9BRF9QT1NUX0ZBSUxVUkVcIjsgXHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gXCJMT0FEX1BPU1RTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfUE9TVFNfRkFJTFVSRVwiOyBcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSBcIlVQTE9BRF9JTUFHRVNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gXCJVUExPQURfSU1BR0VTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9IFwiVVBMT0FEX0lNQUdFU19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gXCJSRVRXRUVUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9IFwiUkVUV0VFVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSBcIlJFVFdFRVRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9SRVFVRVNUICA9ICdSRU1PVkVfUkVRVUVTVCc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KVxyXG5cclxuLy8gcmVkdWNlciA9PSDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYKOu2iOuzgOyEseydhCDsp4DtgqTrqbTshJwpXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZz10cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJldHdlZXREb25lPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvcj1udWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZT10cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkU6IFxyXG4gICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvcj1hY3Rpb24uZXJyb3JcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgUkVNT1ZFX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocz0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEgKVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZz10cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmU9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3I9bnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZT10cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTogXHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvcj1hY3Rpb24uZXJyb3JcclxuICAgICAgICBicmVhaztcclxuICAgICAgXHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3REb25lPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3I9bnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZClcclxuICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3REb25lPXRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6IFxyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yPWFjdGlvbi5lcnJvclxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBcclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmU9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yPW51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTsgXHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmU9dHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yPWFjdGlvbi5lcnJvclxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmc9dHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmU9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvcj1udWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmU9dHJ1ZTtcclxuICAgICAgICBkcmFmdC5zaW5nbGVQb3N0ID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3I9YWN0aW9uLmVycm9yXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZT1mYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvcj1udWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmU9dHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3I9YWN0aW9uLmVycm9yXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmc9dHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZT1mYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3I9bnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZT10cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvcj1udWxsO1xyXG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvcj1hY3Rpb24uZXJyb3JcclxuICAgICAgICBicmVhaztcclxuICBcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmU9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yPW51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHM9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZT10cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yPWFjdGlvbi5lcnJvclxyXG4gICAgICAgIGJyZWFrO1xyXG4gIFxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9dHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZT1mYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpOyAgXHJcbiAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTsgICAvLyDqsozsi5zquIAg6riAIOuEo+yWtOyjvOq4sFxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lPXRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yPW51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvcj1hY3Rpb24uZXJyb3JcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYWxsICxmb3JrLCBjYWxsLCBwdXQsIHRha2VFdmVyeSwgdGFrZUxhdGVzdCwgZGVsYXksIHRocm90dGxlfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBcclxuICBBRERfUE9TVF9SRVFVRVNULCBBRERfUE9TVF9TVUNDRVNTLCBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsIEFERF9DT01NRU5UX1NVQ0NFU1MsIEFERF9DT01NRU5UX0ZBSUxVUkUsIFxyXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1NVQ0NFU1MsIFJFTU9WRV9QT1NUX0ZBSUxVUkUsIFxyXG4gIExPQURfUE9TVFNfUkVRVUVTVCwgTE9BRF9QT1NUU19TVUNDRVNTLCBMT0FEX1BPU1RTX0ZBSUxVUkUsIFxyXG4gIExJS0VfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9SRVFVRVNULCBMSUtFX1BPU1RfU1VDQ0VTUywgXHJcbiAgTElLRV9QT1NUX0ZBSUxVUkUsIFVOTElLRV9QT1NUX1NVQ0NFU1MsIFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLCBVUExPQURfSU1BR0VTX1JFUVVFU1QsIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUywgUkVUV0VFVF9TVUNDRVNTLCBSRVRXRUVUX0ZBSUxVUkUsIFJFVFdFRVRfUkVRVUVTVCwgTE9BRF9QT1NUX1JFUVVFU1QsIExPQURfUE9TVF9TVUNDRVNTLCBMT0FEX1BPU1RfRkFJTFVSRSxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkobGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHsgICAgICAgXHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUywgXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gIH0gIFxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICBcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgfSlcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gIH0gIFxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCAgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgICAgICAgXHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsIFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICB9KSBcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yIDogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgfSAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSAgeWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgeWllbGQgcHV0KHsgICAgICAgXHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsIFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgfSkgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gIH0gIFxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSAgeWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICBcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUywgXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhIFxyXG4gICAgfSkgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gIH0gIFxyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSAgeWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgICAgICAgXHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLCBcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEgIFxyXG4gICAgfSkgXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICB9ICBcclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSAgeWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICBcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUywgXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhICBcclxuICAgIH0pIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3IgOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICB9ICBcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlTmlja25hbWVBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvbmlja25hbWUnLCB7IG5pY2tuYW1lOiBkYXRhIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogY2hhbmdlTmlja25hbWUoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICBcclxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsIFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSAgXHJcbiAgICB9KSBcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gIH0gIFxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9pbWFnZXMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICBcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLCBcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gIH0gIFxyXG59XHJcblxyXG5mdW5jdGlvbiByZXR3ZWV0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhfS9yZXR3ZWV0YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZXR3ZWV0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSAgeWllbGQgY2FsbChyZXR3ZWV0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAgICAgICBcclxuICAgICAgdHlwZTogUkVUV0VFVF9TVUNDRVNTLCBcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVUV0VFVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvciA6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gIH0gIFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVbmxpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmlja25hbWUoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVcGxvYWRJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcylcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUmV0d2VldCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldClcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoVW5saWtlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpLFxyXG4gICAgZm9yayh3YXRjaExvYWRVcGxvYWRJbWFnZXMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRSZXR3ZWV0KSxcclxuICBdKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==