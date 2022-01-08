webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/PostForm.js":
/*!************************************!*\
  !*** ./src/components/PostForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ "./src/hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./src/reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\sysone\\Desktop\\react-next\\src\\components\\PostForm.js",
    _s = $RefreshSig$();








const PostForm = () => {
  _s();

  const {
    imagePaths,
    addPostDone
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const [text, onChangeText, setText] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    console.log(text);
    dispatch(Object(_reducers_post__WEBPACK_IMPORTED_MODULE_4__["addPost"])(text));
  }, [text]);
  const imageInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    style: {
      margin: '10px 0 20px'
    },
    encType: "multipart/form-data",
    onFinish: onSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].TextArea, {
      value: text,
      onChange: onChangeText,
      maxLength: 140,
      placeholder: "\uC5B4\uB5A4 \uC2E0\uAE30\uD55C \uC77C\uC774 \uC788\uC5C8\uB098\uC694?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
        type: "file",
        multiple: true,
        hidden: true,
        ref: imageInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        onClick: onClickImageUpload,
        children: "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        type: "primary",
        style: {
          float: 'right'
        },
        htmlType: "submit",
        children: "\uCA31\uCA31"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: imagePaths.map(v => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        style: {
          display: 'inline-block'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
          src: v,
          style: {
            width: '200px'
          },
          alt: v
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
            children: "\uC81C\uAC70"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, undefined)]
      }, v, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

_s(PostForm, "kyhxGyjAccYtCM+/oW2zmwa/HLQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c;

$RefreshReg$(_c, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdEZvcm0uanMiXSwibmFtZXMiOlsiUG9zdEZvcm0iLCJpbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0ZXh0Iiwib25DaGFuZ2VUZXh0Iiwic2V0VGV4dCIsInVzZUlucHV0IiwidXNlRWZmZWN0Iiwib25TdWJtaXQiLCJ1c2VDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJhZGRQb3N0IiwiaW1hZ2VJbnB1dCIsInVzZVJlZiIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm1hcmdpbiIsImZsb2F0IiwibWFwIiwidiIsImRpc3BsYXkiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQUE7O0FBQ3JCLFFBQU07QUFBRUMsY0FBRjtBQUFlQztBQUFmLE1BQStCQywrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsSUFBbEIsQ0FBaEQ7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTSxDQUFDQyxJQUFELEVBQVFDLFlBQVIsRUFBc0JDLE9BQXRCLElBQWlDQywrREFBUSxDQUFDLEVBQUQsQ0FBL0M7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBR1YsV0FBSCxFQUFnQjtBQUNkUSxhQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0Q7QUFDRixHQUpRLEVBSVAsQ0FBQ1IsV0FBRCxDQUpPLENBQVQ7QUFNQSxRQUFNVyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsTUFBTTtBQUNqQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlSLElBQVo7QUFDQUYsWUFBUSxDQUFDVyw4REFBTyxDQUFDVCxJQUFELENBQVIsQ0FBUjtBQUNELEdBSDJCLEVBR3pCLENBQUNBLElBQUQsQ0FIeUIsQ0FBNUI7QUFLQSxRQUFNVSxVQUFVLEdBQUdDLG9EQUFNLEVBQXpCO0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUdOLHlEQUFXLENBQUMsTUFBSztBQUMxQ0ksY0FBVSxDQUFDRyxPQUFYLENBQW1CQyxLQUFuQjtBQUNELEdBRnFDLEVBRW5DLENBQUNKLFVBQVUsQ0FBQ0csT0FBWixDQUZtQyxDQUF0QztBQUdBLHNCQUNFLHFFQUFDLHlDQUFEO0FBQU0sU0FBSyxFQUFFO0FBQUNFLFlBQU0sRUFBRTtBQUFULEtBQWI7QUFBc0MsV0FBTyxFQUFDLHFCQUE5QztBQUFvRSxZQUFRLEVBQUVWLFFBQTlFO0FBQUEsNEJBQ0UscUVBQUMsMENBQUQsQ0FBTyxRQUFQO0FBQ0UsV0FBSyxFQUFFTCxJQURUO0FBRUUsY0FBUSxFQUFFQyxZQUZaO0FBR0UsZUFBUyxFQUFFLEdBSGI7QUFJRSxpQkFBVyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FO0FBQUEsOEJBQ0U7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBUSxNQUEzQjtBQUE0QixjQUFNLE1BQWxDO0FBQW1DLFdBQUcsRUFBRVM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLDJDQUFEO0FBQVEsZUFBTyxFQUFFRSxrQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRSxxRUFBQywyQ0FBRDtBQUFRLFlBQUksRUFBQyxTQUFiO0FBQXVCLGFBQUssRUFBRTtBQUFDSSxlQUFLLEVBQUU7QUFBUixTQUE5QjtBQUFnRCxnQkFBUSxFQUFDLFFBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixlQVlFO0FBQUEsZ0JBQ0d2QixVQUFVLENBQUN3QixHQUFYLENBQWdCQyxDQUFELGlCQUNkO0FBQWEsYUFBSyxFQUFFO0FBQUNDLGlCQUFPLEVBQUU7QUFBVixTQUFwQjtBQUFBLGdDQUNFO0FBQUssYUFBRyxFQUFFRCxDQUFWO0FBQWEsZUFBSyxFQUFFO0FBQUNFLGlCQUFLLEVBQUU7QUFBUixXQUFwQjtBQUFzQyxhQUFHLEVBQUVGO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLGlDQUNFLHFFQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBLFNBQVVBLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF5QkQsQ0E3Q0Q7O0dBQU0xQixRO1VBQ2lDRyx1RCxFQUNwQkksdUQsRUFDc0JJLHVEOzs7S0FIbkNYLFE7QUErQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI5ZjE0Y2Q4MWQ5MWJlZjBkMTIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IGFkZFBvc3QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IFBvc3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaW1hZ2VQYXRocyAsIGFkZFBvc3REb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbdGV4dCAsIG9uQ2hhbmdlVGV4dCwgc2V0VGV4dF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihhZGRQb3N0RG9uZSkge1xyXG4gICAgICBzZXRUZXh0KCcnKTtcclxuICAgIH1cclxuICB9LFthZGRQb3N0RG9uZV0pXHJcbiAgXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh0ZXh0KTtcclxuICAgIGRpc3BhdGNoKGFkZFBvc3QodGV4dCkpO1xyXG4gIH0sIFt0ZXh0XSk7XHJcblxyXG4gIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKT0+IHtcclxuICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBzdHlsZT17e21hcmdpbjogJzEwcHggMCAyMHB4J319IGVuY1R5cGU9J211bHRpcGFydC9mb3JtLWRhdGEnIG9uRmluaXNoPXtvblN1Ym1pdH0gPlxyXG4gICAgICA8SW5wdXQuVGV4dEFyZWEgXHJcbiAgICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH1cclxuICAgICAgICBtYXhMZW5ndGg9ezE0MH1cclxuICAgICAgICBwbGFjZWhvbGRlcj0n7Ja065akIOyLoOq4sO2VnCDsnbzsnbQg7J6I7JeI64KY7JqUPydcclxuICAgICAgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW5wdXQgdHlwZT0nZmlsZScgbXVsdGlwbGUgaGlkZGVuIHJlZj17aW1hZ2VJbnB1dH0gLz5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0gPuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9J3ByaW1hcnknIHN0eWxlPXt7ZmxvYXQ6ICdyaWdodCd9fSBodG1sVHlwZT0nc3VibWl0JyA+7Kix7KixPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtpbWFnZVBhdGhzLm1hcCgodikgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3Z9IHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZS1ibG9jayd9fT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3Z9IHN0eWxlPXt7d2lkdGg6ICcyMDBweCd9fSBhbHQ9e3Z9IC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbj7soJzqsbA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=