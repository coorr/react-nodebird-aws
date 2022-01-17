webpackHotUpdate_N_E("pages/profile",{

/***/ "./src/components/NicknameEditForm.js":
/*!********************************************!*\
  !*** ./src/components/NicknameEditForm.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ "./src/hooks/useInput.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./src/reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\sysone\\Desktop\\react-next\\front\\src\\components\\NicknameEditForm.js",
    _s = $RefreshSig$();








const NicknameEditForm = () => {
  _s();

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const [nickname, onChangeNickname] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])((me === null || me === void 0 ? void 0 : me.nickname) || '');
  const style = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    marginBottom: '20px',
    border: '1px solid #d9d9d9',
    padding: '20px'
  }));
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["CHANGE_NICKNAME_REQUEST"],
      data: nickname
    });
  }, [nickname]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    style: style,
    onFinish: onSubmit,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, {
      addonBefore: "\uB2C9\uB124\uC784",
      enterButton: "\uC218\uC815",
      value: nickname,
      onChange: onChangeNickname,
      onSearch: onSubmit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

_s(NicknameEditForm, "VA0ljQZQ1AdnLsxeYjf5AZXt/jA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = NicknameEditForm;
/* harmony default export */ __webpack_exports__["default"] = (NicknameEditForm);

var _c;

$RefreshReg$(_c, "NicknameEditForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmlja25hbWVFZGl0Rm9ybS5qcyJdLCJuYW1lcyI6WyJOaWNrbmFtZUVkaXRGb3JtIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm1lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJuaWNrbmFtZSIsIm9uQ2hhbmdlTmlja25hbWUiLCJ1c2VJbnB1dCIsInN0eWxlIiwidXNlTWVtbyIsIm1hcmdpbkJvdHRvbSIsImJvcmRlciIsInBhZGRpbmciLCJvblN1Ym1pdCIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1BLGdCQUFnQixHQUFHLE1BQU07QUFBQTs7QUFDN0IsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFTQywrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsSUFBbEIsQ0FBMUI7QUFDQSxRQUFNLENBQUNDLFFBQUQsRUFBV0MsZ0JBQVgsSUFBK0JDLCtEQUFRLENBQUMsQ0FBQU4sRUFBRSxTQUFGLElBQUFBLEVBQUUsV0FBRixZQUFBQSxFQUFFLENBQUVJLFFBQUosS0FBZ0IsRUFBakIsQ0FBN0M7QUFFQSxRQUFNRyxLQUFLLEdBQUdDLHFEQUFPLENBQUMsT0FBTTtBQUMxQkMsZ0JBQVksRUFBQyxNQURhO0FBRTFCQyxVQUFNLEVBQUMsbUJBRm1CO0FBRzFCQyxXQUFPLEVBQUU7QUFIaUIsR0FBTixDQUFELENBQXJCO0FBTUEsUUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLE1BQU07QUFDakNmLFlBQVEsQ0FBQztBQUNQZ0IsVUFBSSxFQUFFQyxzRUFEQztBQUVQQyxVQUFJLEVBQUVaO0FBRkMsS0FBRCxDQUFSO0FBSUQsR0FMMkIsRUFLekIsQ0FBQ0EsUUFBRCxDQUx5QixDQUE1QjtBQU9BLHNCQUNFLHFFQUFDLHlDQUFEO0FBQ0EsU0FBSyxFQUFFRyxLQURQO0FBRUEsWUFBUSxFQUFFSyxRQUZWO0FBQUEsMkJBSUUscUVBQUMsMENBQUQsQ0FBTyxNQUFQO0FBQ0UsaUJBQVcsRUFBQyxvQkFEZDtBQUVFLGlCQUFXLEVBQUMsY0FGZDtBQUdFLFdBQUssRUFBRVIsUUFIVDtBQUlFLGNBQVEsRUFBRUMsZ0JBSlo7QUFLRSxjQUFRLEVBQUVPO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWNELENBaENEOztHQUFNZixnQjtVQUNhRSx1RCxFQUNGRSx1RCxFQUNzQkssdUQ7OztLQUhqQ1QsZ0I7QUFrQ1NBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuZTU1OGU4OGMyYTNlM2U1MzVlMjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSAsIElucHV0fSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuY29uc3QgTmlja25hbWVFZGl0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlTmlja25hbWVdID0gdXNlSW5wdXQobWU/Lm5pY2tuYW1lIHx8ICcnKTtcclxuXHJcbiAgY29uc3Qgc3R5bGUgPSB1c2VNZW1vKCgpPT4gKHtcclxuICAgIG1hcmdpbkJvdHRvbTonMjBweCcsXHJcbiAgICBib3JkZXI6JzFweCBzb2xpZCAjZDlkOWQ5JyxcclxuICAgIHBhZGRpbmc6ICcyMHB4J1xyXG4gIH0pKVxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IG5pY2tuYW1lLFxyXG4gICAgfSlcclxuICB9LCBbbmlja25hbWVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtIFxyXG4gICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgb25GaW5pc2g9e29uU3VibWl0fVxyXG4gICAgPlxyXG4gICAgICA8SW5wdXQuU2VhcmNoIFxyXG4gICAgICAgIGFkZG9uQmVmb3JlPVwi64uJ64Sk7J6EXCIgXHJcbiAgICAgICAgZW50ZXJCdXR0b249XCLsiJjsoJVcIiBcclxuICAgICAgICB2YWx1ZT17bmlja25hbWV9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9XHJcbiAgICAgICAgb25TZWFyY2g9e29uU3VibWl0fVxyXG4gICAgICAgIC8+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5pY2tuYW1lRWRpdEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==