webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/PostCard.js":
/*!************************************!*\
  !*** ./src/components/PostCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PostImages_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostImages.js */ "./src/components/PostImages.js");
/* harmony import */ var _CommentForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentForm.js */ "./src/components/CommentForm.js");
/* harmony import */ var _PostCardContent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostCardContent.js */ "./src/components/PostCardContent.js");
/* harmony import */ var _reducers_post_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post.js */ "./src/reducers/post.js");
/* harmony import */ var _FollowButton_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FollowButton.js */ "./src/components/FollowButton.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\sysone\\Desktop\\react-next\\front\\src\\components\\PostCard.js",
    _s = $RefreshSig$();














const PostCard = _ref => {
  _s();

  let {
    post
  } = _ref;
  console.log(post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: liked,
    1: setLiked
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: commentFormOpened,
    1: setCommentFormOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  const {
    removePostLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.post);
  const onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    setLiked(prev => !prev);
  }, []);
  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    setCommentFormOpened(prev => !prev);
  }, []);
  const onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => {
    console.log(post.id);
    console.log(removePostLoading);
    dispatch({
      type: _reducers_post_js__WEBPACK_IMPORTED_MODULE_8__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    style: {
      marginBottom: 20
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PostImages_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 34
      }, undefined),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["RetweetOutlined"], {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, undefined), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 19
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["HeartOutlined"], {
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, {
          children: id && post.User.id !== id ?
          /*#__PURE__*/
          // DB가 있을 경우 === 바꿔야함
          Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              type: "danger",
              onClick: onRemovePost,
              loading: removePostLoading,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 17
            }, undefined)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, undefined),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }, undefined)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, undefined)],
      extra: id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_FollowButton_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 22
      }, undefined),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
        // avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_PostCardContent_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 24
        }, undefined) // description={post.content}
        // title={post.User.nickname}

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_CommentForm_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
        header: `${post.Comments.length}개의 댓글`,
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
            author: item.User.nickname,
            avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
              children: item.User.nickname[0]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 27
            }, undefined),
            content: item.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, undefined);
};

_s(PostCard, "QAKM0woin01E6sfzW//Gv6udQas=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdENhcmQuanMiXSwibmFtZXMiOlsiUG9zdENhcmQiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJsaWtlZCIsInNldExpa2VkIiwidXNlU3RhdGUiLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicmVtb3ZlUG9zdExvYWRpbmciLCJvblRvZ2dsZUxpa2UiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJvblRvZ2dsZUNvbW1lbnQiLCJvblJlbW92ZVBvc3QiLCJ0eXBlIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJtYXJnaW5Cb3R0b20iLCJJbWFnZXMiLCJVc2VyIiwiY29udGVudCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbSIsIm5pY2tuYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJzdHJpbmciLCJjcmVhdGVkQXQiLCJhcnJheU9mIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLFFBQWM7QUFBQTs7QUFBQSxNQUFiO0FBQUVDO0FBQUYsR0FBYTtBQUM3QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQSxRQUFNRyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUEsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEtBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsaUJBQUQ7QUFBQSxPQUFvQkM7QUFBcEIsTUFBNENGLHNEQUFRLENB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QyxpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ3JCeEIsTUFBRSxFQUFFdUIsaURBQVMsQ0FBQ0UsTUFETztBQUVyQlQsUUFBSSxFQUFFTyxpREFBUyxDQUFDRyxNQUZLO0FBR3JCVCxXQUFPLEVBQUVNLGlEQUFTLENBQUNJLE1BSEU7QUFJckJDLGFBQVMsRUFBR0wsaURBQVMsQ0FBQ0ksTUFKRDtBQUtyQlQsWUFBUSxFQUFFSyxpREFBUyxDQUFDTSxPQUFWLENBQWtCTixpREFBUyxDQUFDRyxNQUE1QixDQUxXO0FBTXJCWCxVQUFNLEVBQUVRLGlEQUFTLENBQUNNLE9BQVYsQ0FBa0JOLGlEQUFTLENBQUNHLE1BQTVCO0FBTmEsR0FBaEIsRUFPSkk7QUFSZ0IsQ0FBckI7QUFXZXpDLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA0ODdiMTMwMDBkMDA4MDNkODAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGxpcHNpc091dGxpbmVkLCBIZWFydE91dGxpbmVkLCBIZWFydFR3b1RvbmUsIE1lc3NhZ2VPdXRsaW5lZCwgUmV0d2VldE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgQ2FyZCwgUG9wb3ZlciwgTGlzdCwgQ29tbWVudCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gJy4vUG9zdEltYWdlcy5qcyc7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuL0NvbW1lbnRGb3JtLmpzJztcclxuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tICcuL1Bvc3RDYXJkQ29udGVudC5qcyc7XHJcbmltcG9ydCB7IFJFTU9WRV9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0LmpzJztcclxuaW1wb3J0IEZvbGxvd0J1dHRvbiBmcm9tICcuL0ZvbGxvd0J1dHRvbi5qcydcclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2cocG9zdCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG4gIGNvbnN0IHsgcmVtb3ZlUG9zdExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gIGNvbnN0IG9uVG9nZ2xlTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldExpa2VkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfSxbXSk7XHJcbiAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpID0+ICFwcmV2KTtcclxuICB9LFtdKTtcclxuXHJcbiAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocG9zdC5pZCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZW1vdmVQb3N0TG9hZGluZyk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWRcclxuICAgIH0pXHJcbiAgfSxbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOjIwfX0+XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9IC8+IH1cclxuICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiAvPixcclxuICAgICAgICAgIGxpa2VkID8gPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9IC8+XHJcbiAgICAgICAgICA6IDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0gLz4sXHJcbiAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9IC8+LFxyXG4gICAgICAgICAgPFBvcG92ZXIga2V5PVwibW9yZVwiIGNvbnRlbnQ9eyhcclxuICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICB7IGlkICYmIHBvc3QuVXNlci5pZCAhPT0gaWQgPyAoICAvLyBEQuqwgCDsnojsnYQg6rK97JqwID09PSDrsJTqv5TslbztlahcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCIgb25DbGljaz17b25SZW1vdmVQb3N0fSBsb2FkaW5nPXtyZW1vdmVQb3N0TG9hZGluZ30+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApIDogPEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj59XHJcbiAgICAgICAgICAgIDwvQnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkICAgLz5cclxuICAgICAgICAgIDwvUG9wb3Zlcj4sXHJcbiAgICAgICAgXX1cclxuICAgICAgICBleHRyYT17aWQgJiYgPEZvbGxvd0J1dHRvbiBwb3N0PXtwb3N0fSAvPn1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJkLk1ldGEgXHJcbiAgICAgICAgICAvLyBhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5jb250ZW50fSAvPn1cclxuICAgICAgICAgIC8vIGRlc2NyaXB0aW9uPXtwb3N0LmNvbnRlbnR9XHJcbiAgICAgICAgICAvLyB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICA8TGlzdCBcclxuICAgICAgICAgICAgaGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzLmxlbmd0aH3qsJzsnZgg64yT6riAYH1cclxuICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gIHBvc3QgOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNyZWF0ZWRBdCA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==