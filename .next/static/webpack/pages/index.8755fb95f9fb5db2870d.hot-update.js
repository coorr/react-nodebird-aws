webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/PostCardContent.js":
/*!*******************************************!*\
  !*** ./src/components/PostCardContent.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\sysone\\Desktop\\react-next\\src\\components\\PostCardContent.js";





const PostCardContent = _ref => {
  let {
    postData
  } = _ref;
  // 첫 번째 게시글 #해시태그 #익스프레스'.split(/#[^\s#]+/g)
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: postData.split(/#[^\s#]+/g).map(v => {
      console.log(v);

      if (postData.text(/#[^\s#]+/)) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: `/hashtag/${v.slice(1)}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
            children: v
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 56
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 18
        }, undefined);
      }

      return v;
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
}; // how to find 해쉬태그 앤 스플릿


_c = PostCardContent;
PostCardContent.propTypes = {
  postData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCardContent);

var _c;

$RefreshReg$(_c, "PostCardContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdENhcmRDb250ZW50LmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkQ29udGVudCIsInBvc3REYXRhIiwic3BsaXQiLCJtYXAiLCJ2IiwiY29uc29sZSIsImxvZyIsInRleHQiLCJzbGljZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxNQUFNQSxlQUFlLEdBQUcsUUFBZ0I7QUFBQSxNQUFmO0FBQUNDO0FBQUQsR0FBZTtBQUFJO0FBQzFDLHNCQUNFO0FBQUEsY0FDR0EsUUFBUSxDQUFDQyxLQUFULENBQWUsV0FBZixFQUE0QkMsR0FBNUIsQ0FBaUNDLENBQUQsSUFBTztBQUN0Q0MsYUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7O0FBQ0EsVUFBR0gsUUFBUSxDQUFDTSxJQUFULENBQWMsVUFBZCxDQUFILEVBQThCO0FBQzVCLDRCQUFPLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFHLFlBQVdILENBQUMsQ0FBQ0ksS0FBRixDQUFRLENBQVIsQ0FBVyxFQUFuQztBQUFBLGlDQUFzQztBQUFBLHNCQUFJSjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUNEOztBQUNELGFBQU9BLENBQVA7QUFDRCxLQU5BO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBV0QsQ0FaRCxDLENBYUE7OztLQWJNSixlO0FBZU5BLGVBQWUsQ0FBQ1MsU0FBaEIsR0FBNEI7QUFDMUJSLFVBQVEsRUFBRVMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFERCxDQUE1QjtBQUllWiw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NzU1ZmI5NWY5ZmI1ZGIyODcwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFBvc3RDYXJkQ29udGVudCA9ICh7cG9zdERhdGF9KSA9PiB7ICAgLy8g7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJy5zcGxpdCgvI1teXFxzI10rL2cpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtwb3N0RGF0YS5zcGxpdCgvI1teXFxzI10rL2cpLm1hcCgodikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHYpO1xyXG4gICAgICAgIGlmKHBvc3REYXRhLnRleHQoLyNbXlxccyNdKy8pKSB7XHJcbiAgICAgICAgICByZXR1cm4gPExpbmsgaHJlZj17YC9oYXNodGFnLyR7di5zbGljZSgxKX1gfT48YT57dn08L2E+PC9MaW5rPlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdjtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4vLyBob3cgdG8gZmluZCDtlbTsiaztg5zqt7gg7JWkIOyKpO2UjOumv1xyXG5cclxuUG9zdENhcmRDb250ZW50LnByb3BUeXBlcyA9IHtcclxuICBwb3N0RGF0YTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZENvbnRlbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==