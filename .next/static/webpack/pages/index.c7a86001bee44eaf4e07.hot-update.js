webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ImagesZoom/index.js":
/*!********************************************!*\
  !*** ./src/components/ImagesZoom/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\sysone\\Desktop\\react-next\\src\\components\\ImagesZoom\\index.js",
    _s = $RefreshSig$();






const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  position: fixed;
  z-index: 5000;
  top:0;
  left:0;
  right:0;
  bottom:0;
`;
_c = Overlay;
const Header = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].header`
  height:44px;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;

  & h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }

  & button {
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px;
    line-height: 14px;
    cursor: pointer;
  }
`;
_c2 = Header;
const SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  height: calc(100% - 44px);
  background: #090909; 
`;
_c3 = SlickWrapper;
const ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  padding: 32px;
  text-align: center;

  & img {
    margin: 0 auto;
    max-height: 750px;
  }
  `;
_c4 = ImgWrapper;
const Indicator = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  text-align: center;

  & > div {
    width: 750px;
    height: 30px;
    line-height: 30px;
    border-radius : 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;
const Global = styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"]`
  .slick-slide {
    display: inline-block;
  }
`;
_c5 = Global;

const ImagesZoom = _ref => {
  _s();

  let {
    images,
    onClose
  } = _ref;
  const {
    0: currentState,
    1: setCurrentSlide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Overlay, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Header, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
        children: "\uC0C1\uC138 \uC774\uBBF8\uC9C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        onClick: onClose,
        children: "X"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(SlickWrapper, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
          initialSlide: 0,
          afterChange: slide => setCurrentSlide(slide),
          infinite: true // 마지막에서 다시 첫번째로
          ,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          children: images.map(v => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ImgWrapper, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
              src: v.src,
              alt: v.src
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 17
            }, undefined)
          }, v.src, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, undefined);
};

_s(ImagesZoom, "tzyUJGS+rX9ORv/H4WH1DuUDWG0=");

_c6 = ImagesZoom;
ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Overlay");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "SlickWrapper");
$RefreshReg$(_c4, "ImgWrapper");
$RefreshReg$(_c5, "Global");
$RefreshReg$(_c6, "ImagesZoom");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW1hZ2VzWm9vbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJPdmVybGF5Iiwic3R5bGVkIiwiZGl2IiwiSGVhZGVyIiwiaGVhZGVyIiwiU2xpY2tXcmFwcGVyIiwiSW1nV3JhcHBlciIsIkluZGljYXRvciIsIkdsb2JhbCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiSW1hZ2VzWm9vbSIsImltYWdlcyIsIm9uQ2xvc2UiLCJjdXJyZW50U3RhdGUiLCJzZXRDdXJyZW50U2xpZGUiLCJ1c2VTdGF0ZSIsInNsaWRlIiwibWFwIiwidiIsInNyYyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQQTtLQUFNRixPO0FBUU4sTUFBTUcsTUFBTSxHQUFHRix5REFBTSxDQUFDRyxNQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBdEJBO01BQU1ELE07QUF1Qk4sTUFBTUUsWUFBWSxHQUFHSix5REFBTSxDQUFDQyxHQUFJO0FBQ2hDO0FBQ0E7QUFDQSxDQUhBO01BQU1HLFk7QUFJTixNQUFPQyxVQUFVLEdBQUdMLHlEQUFNLENBQUNDLEdBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQVJBO01BQU9JLFU7QUFTUCxNQUFNQyxTQUFTLEdBQUdOLHlEQUFNLENBQUNDLEdBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWRBO0FBZUEsTUFBTU0sTUFBTSxHQUFHQyxtRUFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0EsQ0FKQTtNQUFNRCxNOztBQU1OLE1BQU1FLFVBQVUsR0FBRyxRQUFzQjtBQUFBOztBQUFBLE1BQXJCO0FBQUNDLFVBQUQ7QUFBUUM7QUFBUixHQUFxQjtBQUN2QyxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLHNEQUFRLENBQUMsQ0FBRCxDQUFoRDtBQUNBLHNCQUNFLHFFQUFDLE9BQUQ7QUFBQSw0QkFDRSxxRUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyxNQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFRLGVBQU8sRUFBRUgsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBTUUscUVBQUMsWUFBRDtBQUFBLDZCQUNFO0FBQUEsK0JBQ0UscUVBQUMsa0RBQUQ7QUFDRSxzQkFBWSxFQUFFLENBRGhCO0FBRUUscUJBQVcsRUFBR0ksS0FBRCxJQUFXRixlQUFlLENBQUNFLEtBQUQsQ0FGekM7QUFHRSxrQkFBUSxNQUhWLENBR1c7QUFIWDtBQUlFLGdCQUFNLEVBQUUsS0FKVjtBQUtFLHNCQUFZLEVBQUUsQ0FMaEI7QUFNRSx3QkFBYyxFQUFFLENBTmxCO0FBQUEsb0JBUUdMLE1BQU0sQ0FBQ00sR0FBUCxDQUFZQyxDQUFELGlCQUNWLHFFQUFDLFVBQUQ7QUFBQSxtQ0FDRTtBQUFLLGlCQUFHLEVBQUVBLENBQUMsQ0FBQ0MsR0FBWjtBQUFpQixpQkFBRyxFQUFFRCxDQUFDLENBQUNDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUFpQkQsQ0FBQyxDQUFDQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUREO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBMkJELENBN0JEOztHQUFNVCxVOztNQUFBQSxVO0FBK0JOQSxVQUFVLENBQUNVLFNBQVgsR0FBdUI7QUFDckJULFFBQU0sRUFBRVUsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsaURBQVMsQ0FBQ0UsTUFBNUIsRUFBb0NDLFVBRHZCO0FBRXJCWixTQUFPLEVBQUVTLGlEQUFTLENBQUNJLElBQVYsQ0FBZUQ7QUFGSCxDQUF2QjtBQUtlZCx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jN2E4NjAwMWJlZTQ0ZWFmNGUwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgU2xpY2sgZnJvbSAncmVhY3Qtc2xpY2snXHJcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA1MDAwO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICByaWdodDowO1xyXG4gIGJvdHRvbTowO1xyXG5gO1xyXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIGhlaWdodDo0NHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgJiBoMSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gIH1cclxuXHJcbiAgJiBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gOyAgXHJcbmNvbnN0IFNsaWNrV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NHB4KTtcclxuICBiYWNrZ3JvdW5kOiAjMDkwOTA5OyBcclxuYDtcclxuY29uc3QgIEltZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAmIGltZyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDc1MHB4O1xyXG4gIH1cclxuICBgO1xyXG5jb25zdCBJbmRpY2F0b3IgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgJiA+IGRpdiB7XHJcbiAgICB3aWR0aDogNzUwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXMgOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzMxMzEzMTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IEdsb2JhbCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIC5zbGljay1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBJbWFnZXNab29tID0gKHtpbWFnZXMsb25DbG9zZX0pID0+IHtcclxuICBjb25zdCBbY3VycmVudFN0YXRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxPdmVybGF5PlxyXG4gICAgICA8R2xvYmFsIC8+XHJcbiAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgPGgxPuyDgeyEuCDsnbTrr7jsp4A8L2gxPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0gPlg8L2J1dHRvbj5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxTbGlja1dyYXBwZXI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxTbGljayBcclxuICAgICAgICAgICAgaW5pdGlhbFNsaWRlPXswfVxyXG4gICAgICAgICAgICBhZnRlckNoYW5nZT17KHNsaWRlKSA9PiBzZXRDdXJyZW50U2xpZGUoc2xpZGUpfVxyXG4gICAgICAgICAgICBpbmZpbml0ZSAvLyDrp4jsp4Drp4nsl5DshJwg64uk7IucIOyyq+uyiOynuOuhnFxyXG4gICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c9ezF9XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsPXsxfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aW1hZ2VzLm1hcCgodikgPT4gKFxyXG4gICAgICAgICAgICAgIDxJbWdXcmFwcGVyIGtleT17di5zcmN9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Yuc3JjfSBhbHQ9e3Yuc3JjfSAvPlxyXG4gICAgICAgICAgICAgIDwvSW1nV3JhcHBlcj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NsaWNrPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NsaWNrV3JhcHBlcj5cclxuICAgIDwvT3ZlcmxheT5cclxuICApO1xyXG59O1xyXG5cclxuSW1hZ2VzWm9vbS5wcm9wVHlwZXMgPSB7XHJcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlc1pvb207Il0sInNvdXJjZVJvb3QiOiIifQ==