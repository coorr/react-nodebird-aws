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
/* harmony import */ var _ant_design_icons_lib_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons/lib/icons */ "./node_modules/@ant-design/icons/lib/icons/index.js");
/* harmony import */ var _ant_design_icons_lib_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
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
`;
_c2 = Header;
const CloseBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_ant_design_icons_lib_icons__WEBPACK_IMPORTED_MODULE_4__["CloseOutlined"])`
    position: absolute;
    right: 0;
    top: 0;
    padding: 15px;
    line-height: 14px;
    cursor: pointer;
`;
_c3 = CloseBtn;
const SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  height: calc(100% - 44px);
  background: #090909; 
`;
_c4 = SlickWrapper;
const ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  padding: 32px;
  text-align: center;

  & img {
    margin: 0 auto;
    max-height: 750px;
  }
  `;
_c5 = ImgWrapper;
const Indicator = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  text-align: center;

  & > div {
    width: 500px;
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
_c6 = Indicator;
const Global = styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"]`
  .slick-slide {
    display: inline-block;
  }
`;
_c7 = Global;

const ImagesZoom = _ref => {
  _s();

  let {
    images,
    onClose
  } = _ref;
  const {
    0: currentSlide,
    1: setCurrentSlide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Overlay, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Global, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Header, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
        children: "\uC0C1\uC138 \uC774\uBBF8\uC9C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(CloseBtn, {
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
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(SlickWrapper, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
          initialSlide: 0,
          afterChange: slide => setCurrentSlide(slide),
          infinite: true // 마지막에서 다시 첫번째로
          ,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          children: images.map(v => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(ImgWrapper, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
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
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Indicator, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            children: [currentSlide + 1, ' ', "/", images.length]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
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

_s(ImagesZoom, "O3+WkaZMPiaKjIuf6Ewo7IR30p0=");

_c8 = ImagesZoom;
ImagesZoom.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImagesZoom);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "Overlay");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "CloseBtn");
$RefreshReg$(_c4, "SlickWrapper");
$RefreshReg$(_c5, "ImgWrapper");
$RefreshReg$(_c6, "Indicator");
$RefreshReg$(_c7, "Global");
$RefreshReg$(_c8, "ImagesZoom");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW1hZ2VzWm9vbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJPdmVybGF5Iiwic3R5bGVkIiwiZGl2IiwiSGVhZGVyIiwiaGVhZGVyIiwiQ2xvc2VCdG4iLCJDbG9zZU91dGxpbmVkIiwiU2xpY2tXcmFwcGVyIiwiSW1nV3JhcHBlciIsIkluZGljYXRvciIsIkdsb2JhbCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiSW1hZ2VzWm9vbSIsImltYWdlcyIsIm9uQ2xvc2UiLCJjdXJyZW50U2xpZGUiLCJzZXRDdXJyZW50U2xpZGUiLCJ1c2VTdGF0ZSIsInNsaWRlIiwibWFwIiwidiIsInNyYyIsImxlbmd0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUEE7S0FBTUYsTztBQVFOLE1BQU1HLE1BQU0sR0FBR0YseURBQU0sQ0FBQ0csTUFBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWJBO01BQU1ELE07QUFjTixNQUFNRSxRQUFRLEdBQUdKLGlFQUFNLENBQUNLLHlFQUFELENBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUEE7TUFBTUQsUTtBQVFOLE1BQU1FLFlBQVksR0FBR04seURBQU0sQ0FBQ0MsR0FBSTtBQUNoQztBQUNBO0FBQ0EsQ0FIQTtNQUFNSyxZO0FBSU4sTUFBTUMsVUFBVSxHQUFHUCx5REFBTSxDQUFDQyxHQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FSQTtNQUFNTSxVO0FBU04sTUFBTUMsU0FBUyxHQUFHUix5REFBTSxDQUFDQyxHQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FkQTtNQUFNTyxTO0FBZU4sTUFBTUMsTUFBTSxHQUFHQyxtRUFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0EsQ0FKQTtNQUFNRCxNOztBQU1OLE1BQU1FLFVBQVUsR0FBRyxRQUFzQjtBQUFBOztBQUFBLE1BQXJCO0FBQUNDLFVBQUQ7QUFBUUM7QUFBUixHQUFxQjtBQUN2QyxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFvQ0Msc0RBQVEsQ0FBQyxDQUFELENBQWxEO0FBQ0Esc0JBQ0UscUVBQUMsT0FBRDtBQUFBLDRCQUNFLHFFQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLE1BQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLFFBQUQ7QUFBVSxlQUFPLEVBQUVILE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQU1FLHFFQUFDLFlBQUQ7QUFBQSw2QkFDRTtBQUFBLGdDQUNFLHFFQUFDLGtEQUFEO0FBQ0Usc0JBQVksRUFBRSxDQURoQjtBQUVFLHFCQUFXLEVBQUdJLEtBQUQsSUFBV0YsZUFBZSxDQUFDRSxLQUFELENBRnpDO0FBR0Usa0JBQVEsTUFIVixDQUdXO0FBSFg7QUFJRSxnQkFBTSxFQUFFLEtBSlY7QUFLRSxzQkFBWSxFQUFFLENBTGhCO0FBTUUsd0JBQWMsRUFBRSxDQU5sQjtBQUFBLG9CQVFHTCxNQUFNLENBQUNNLEdBQVAsQ0FBWUMsQ0FBRCxpQkFDVixxRUFBQyxVQUFEO0FBQUEsbUNBQ0U7QUFBSyxpQkFBRyxFQUFFQSxDQUFDLENBQUNDLEdBQVo7QUFBaUIsaUJBQUcsRUFBRUQsQ0FBQyxDQUFDQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBaUJELENBQUMsQ0FBQ0MsR0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERDtBQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFlRSxxRUFBQyxTQUFEO0FBQUEsaUNBQ0U7QUFBQSx1QkFDR04sWUFBWSxHQUFHLENBRGxCLEVBRUcsR0FGSCxPQUlHRixNQUFNLENBQUNTLE1BSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBbUNELENBckNEOztHQUFNVixVOztNQUFBQSxVO0FBdUNOQSxVQUFVLENBQUNXLFNBQVgsR0FBdUI7QUFDckJWLFFBQU0sRUFBRVcsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsaURBQVMsQ0FBQ0UsTUFBNUIsRUFBb0NDLFVBRHZCO0FBRXJCYixTQUFPLEVBQUVVLGlEQUFTLENBQUNJLElBQVYsQ0FBZUQ7QUFGSCxDQUF2QjtBQUtlZix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNmVjMzlkMmQyYzNiZWEyZWYxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgU2xpY2sgZnJvbSAncmVhY3Qtc2xpY2snXHJcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucyc7XHJcblxyXG5jb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogNTAwMDtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgcmlnaHQ6MDtcclxuICBib3R0b206MDtcclxuYDtcclxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBoZWlnaHQ6NDRweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICYgaDEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBsaW5lLWhlaWdodDogNDRweDtcclxuICB9XHJcbmA7ICBcclxuY29uc3QgQ2xvc2VCdG4gPSBzdHlsZWQoQ2xvc2VPdXRsaW5lZClgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuYFxyXG5jb25zdCBTbGlja1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDRweCk7XHJcbiAgYmFja2dyb3VuZDogIzA5MDkwOTsgXHJcbmA7XHJcbmNvbnN0IEltZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAmIGltZyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDc1MHB4O1xyXG4gIH1cclxuICBgO1xyXG5jb25zdCBJbmRpY2F0b3IgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgJiA+IGRpdiB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXMgOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzMxMzEzMTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IEdsb2JhbCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIC5zbGljay1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBJbWFnZXNab29tID0gKHtpbWFnZXMsb25DbG9zZX0pID0+IHtcclxuICBjb25zdCBbY3VycmVudFNsaWRlICAsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuICByZXR1cm4gKFxyXG4gICAgPE92ZXJsYXk+XHJcbiAgICAgIDxHbG9iYWwgLz5cclxuICAgICAgPEhlYWRlcj5cclxuICAgICAgICA8aDE+7IOB7IS4IOydtOuvuOyngDwvaDE+XHJcbiAgICAgICAgPENsb3NlQnRuIG9uQ2xpY2s9e29uQ2xvc2V9ID5YPC9DbG9zZUJ0bj5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxTbGlja1dyYXBwZXI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxTbGljayBcclxuICAgICAgICAgICAgaW5pdGlhbFNsaWRlPXswfVxyXG4gICAgICAgICAgICBhZnRlckNoYW5nZT17KHNsaWRlKSA9PiBzZXRDdXJyZW50U2xpZGUoc2xpZGUpfVxyXG4gICAgICAgICAgICBpbmZpbml0ZSAvLyDrp4jsp4Drp4nsl5DshJwg64uk7IucIOyyq+uyiOynuOuhnFxyXG4gICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c9ezF9XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsPXsxfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aW1hZ2VzLm1hcCgodikgPT4gKFxyXG4gICAgICAgICAgICAgIDxJbWdXcmFwcGVyIGtleT17di5zcmN9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Yuc3JjfSBhbHQ9e3Yuc3JjfSAvPlxyXG4gICAgICAgICAgICAgIDwvSW1nV3JhcHBlcj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NsaWNrPlxyXG4gICAgICAgICAgPEluZGljYXRvcj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7Y3VycmVudFNsaWRlICsgMX0gXHJcbiAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAvXHJcbiAgICAgICAgICAgICAge2ltYWdlcy5sZW5ndGh9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9JbmRpY2F0b3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU2xpY2tXcmFwcGVyPlxyXG4gICAgPC9PdmVybGF5PlxyXG4gICk7XHJcbn07XHJcblxyXG5JbWFnZXNab29tLnByb3BUeXBlcyA9IHtcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VzWm9vbTsiXSwic291cmNlUm9vdCI6IiJ9