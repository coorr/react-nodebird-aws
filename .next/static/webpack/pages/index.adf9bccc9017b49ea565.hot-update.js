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
  console.log(postData);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    children: postData.split(/(#[^\s#]+)/g).map(v => {
      console.log(v);

      if (v.match(/#[^\s#]+/)) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: `/hashtag/${v.slice(1)}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
            children: v
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 56
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 18
        }, undefined);
      }

      return v;
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdENhcmRDb250ZW50LmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkQ29udGVudCIsInBvc3REYXRhIiwiY29uc29sZSIsImxvZyIsInNwbGl0IiwibWFwIiwidiIsIm1hdGNoIiwic2xpY2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUEsZUFBZSxHQUFHLFFBQWdCO0FBQUEsTUFBZjtBQUFDQztBQUFELEdBQWU7QUFBSTtBQUMxQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQSxzQkFDRTtBQUFBLGNBQ0dBLFFBQVEsQ0FBQ0csS0FBVCxDQUFlLGFBQWYsRUFBOEJDLEdBQTlCLENBQW1DQyxDQUFELElBQU87QUFDeENKLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRyxDQUFaOztBQUNBLFVBQUdBLENBQUMsQ0FBQ0MsS0FBRixDQUFRLFVBQVIsQ0FBSCxFQUF3QjtBQUN0Qiw0QkFBTyxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBRyxZQUFXRCxDQUFDLENBQUNFLEtBQUYsQ0FBUSxDQUFSLENBQVcsRUFBbkM7QUFBQSxpQ0FBc0M7QUFBQSxzQkFBSUY7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVA7QUFDRDs7QUFDRCxhQUFPQSxDQUFQO0FBQ0QsS0FOQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVdELENBYkQsQyxDQWNBOzs7S0FkTU4sZTtBQWdCTkEsZUFBZSxDQUFDUyxTQUFoQixHQUE0QjtBQUMxQlIsVUFBUSxFQUFFUyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURELENBQTVCO0FBSWVaLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFkZjliY2NjOTAxN2I0OWVhNTY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgUG9zdENhcmRDb250ZW50ID0gKHtwb3N0RGF0YX0pID0+IHsgICAvLyDssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqQnLnNwbGl0KC8jW15cXHMjXSsvZylcclxuICBjb25zb2xlLmxvZyhwb3N0RGF0YSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtwb3N0RGF0YS5zcGxpdCgvKCNbXlxccyNdKykvZykubWFwKCh2KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2codik7XHJcbiAgICAgICAgaWYodi5tYXRjaCgvI1teXFxzI10rLykpIHtcclxuICAgICAgICAgIHJldHVybiA8TGluayBocmVmPXtgL2hhc2h0YWcvJHt2LnNsaWNlKDEpfWB9PjxhPnt2fTwvYT48L0xpbms+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbi8vIGhvdyB0byBmaW5kIO2VtOyJrO2DnOq3uCDslaQg7Iqk7ZSM66a/XHJcblxyXG5Qb3N0Q2FyZENvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gIHBvc3REYXRhOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkQ29udGVudDsiXSwic291cmNlUm9vdCI6IiJ9