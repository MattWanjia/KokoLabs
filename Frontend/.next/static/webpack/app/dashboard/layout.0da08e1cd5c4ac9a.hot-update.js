"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/layout",{

/***/ "(app-pages-browser)/./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"376dab714479\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY3NzL3N0eWxlLmNzcz9iZjFlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiMzc2ZGFiNzE0NDc5XCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/css/style.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/dashboard/layout.tsx":
/*!**************************************!*\
  !*** ./src/app/dashboard/layout.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var jsvectormap_dist_css_jsvectormap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsvectormap/dist/css/jsvectormap.css */ \"(app-pages-browser)/./node_modules/jsvectormap/dist/css/jsvectormap.css\");\n/* harmony import */ var flatpickr_dist_flatpickr_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.min.css */ \"(app-pages-browser)/./node_modules/flatpickr/dist/flatpickr.min.css\");\n/* harmony import */ var _css_satoshi_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/css/satoshi.css */ \"(app-pages-browser)/./src/css/satoshi.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/css/style.css */ \"(app-pages-browser)/./src/css/style.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_common_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/common/Loader */ \"(app-pages-browser)/./src/components/common/Loader/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const [sidebarOpen, setSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);\n    // const pathname = usePathname();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        setTimeout(()=>setLoading(false), 1000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"PESA YANGU\"\n            }, void 0, false, {\n                fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/app/dashboard/layout.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"description\",\n                content: \"A financial management app\"\n            }, void 0, false, {\n                fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/app/dashboard/layout.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                suppressHydrationWarning: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"dark:bg-boxdark-2 dark:text-bodydark\",\n                    children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Loader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/app/dashboard/layout.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 22\n                    }, this) : children\n                }, void 0, false, {\n                    fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/app/dashboard/layout.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/app/dashboard/layout.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/app/dashboard/layout.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"W0GlrGRGi4fX92DkQbdCWtCD/TE=\");\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL2xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDOEM7QUFDSjtBQUNmO0FBQ0Y7QUFDMEI7QUFDSDtBQUVqQyxTQUFTSSxXQUFXLEtBSWpDO1FBSmlDLEVBQ2pDQyxRQUFRLEVBR1IsR0FKaUM7O0lBS2pDLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQVU7SUFFaEQsa0NBQWtDO0lBRWxDRCxnREFBU0EsQ0FBQztRQUNSUyxXQUFXLElBQU1ELFdBQVcsUUFBUTtJQUN0QyxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0U7UUFBS0MsTUFBSzs7MEJBQ1QsOERBQUNDOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUNDO2dCQUFLQyxNQUFLO2dCQUFjQyxTQUFROzs7Ozs7MEJBQ2pDLDhEQUFDQztnQkFBS0MsMEJBQTBCOzBCQUM5Qiw0RUFBQ0M7b0JBQUlDLFdBQVU7OEJBQ1paLHdCQUFVLDhEQUFDTCxpRUFBTUE7Ozs7K0JBQU1FOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQztHQXpCd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZGFzaGJvYXJkL2xheW91dC50c3g/NzIzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBcImpzdmVjdG9ybWFwL2Rpc3QvY3NzL2pzdmVjdG9ybWFwLmNzc1wiO1xuaW1wb3J0IFwiZmxhdHBpY2tyL2Rpc3QvZmxhdHBpY2tyLm1pbi5jc3NcIjtcbmltcG9ydCBcIkAvY3NzL3NhdG9zaGkuY3NzXCI7XG5pbXBvcnQgXCJAL2Nzcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvY29tbW9uL0xvYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290TGF5b3V0KHtcbiAgY2hpbGRyZW4sXG59OiBSZWFkb25seTx7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59Pikge1xuICBjb25zdCBbc2lkZWJhck9wZW4sIHNldFNpZGViYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgLy8gY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKSwgMTAwMCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPHRpdGxlPlBFU0EgWUFOR1U8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkEgZmluYW5jaWFsIG1hbmFnZW1lbnQgYXBwXCIgLz5cbiAgICAgIDxib2R5IHN1cHByZXNzSHlkcmF0aW9uV2FybmluZz17dHJ1ZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFyazpiZy1ib3hkYXJrLTIgZGFyazp0ZXh0LWJvZHlkYXJrXCI+XG4gICAgICAgICAge2xvYWRpbmcgPyA8TG9hZGVyIC8+IDogY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTG9hZGVyIiwiUm9vdExheW91dCIsImNoaWxkcmVuIiwic2lkZWJhck9wZW4iLCJzZXRTaWRlYmFyT3BlbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0VGltZW91dCIsImh0bWwiLCJsYW5nIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJib2R5Iiwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/layout.tsx\n"));

/***/ })

});