"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/context/GlobalContext.tsx":
/*!***************************************!*\
  !*** ./src/context/GlobalContext.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalProvider: function() { return /* binding */ GlobalProvider; },\n/* harmony export */   useGlobalContext: function() { return /* binding */ useGlobalContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n// context/GlobalContext.tsx\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(undefined);\nconst GlobalProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Fetch categories and set initial state\n        const fetchCats = async ()=>{\n            try {\n                const response = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchCategories)();\n                console.log(response);\n                //const response = await fetch('YOUR_API_ENDPOINT_FOR_CATEGORIES');\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch categories\");\n                }\n                //const data = await response.json();\n                setCategories(response); // Assuming data is an array of strings\n            } catch (error) {\n                console.error(\"Error fetching categories:\", error);\n            }\n        };\n        (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchCategories)();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: {\n            categories,\n            setCategories\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/context/GlobalContext.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(GlobalProvider, \"+ijgB8ROEl0Dkz53OTIi8GynN6s=\");\n_c = GlobalProvider;\nconst useGlobalContext = ()=>{\n    _s1();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(GlobalContext);\n    if (!context) {\n        throw new Error(\"useGlobalContext must be used within a GlobalProvider\");\n    }\n    return context;\n};\n_s1(useGlobalContext, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalContext);\nvar _c;\n$RefreshReg$(_c, \"GlobalProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L0dsb2JhbENvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDRCQUE0Qjs7O0FBRVk7QUFDbUM7QUFPM0UsTUFBTUssOEJBQWdCSixvREFBYUEsQ0FBZ0NLO0FBRTVELE1BQU1DLGlCQUFxQjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDN0MsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFXLEVBQUU7SUFFekRELGdEQUFTQSxDQUFDO1FBQ1IseUNBQXlDO1FBQ3pDLE1BQU1RLFlBQVk7WUFDaEIsSUFBSTtnQkFFRixNQUFNQyxXQUFXLE1BQU1aLHFEQUFlQTtnQkFFdENhLFFBQVFDLEdBQUcsQ0FBQ0Y7Z0JBRVosbUVBQW1FO2dCQUNuRSxJQUFJLENBQUNBLFNBQVNHLEVBQUUsRUFBRTtvQkFDaEIsTUFBTSxJQUFJQyxNQUFNO2dCQUNsQjtnQkFDQSxxQ0FBcUM7Z0JBQ3JDTixjQUFjRSxXQUFXLHVDQUF1QztZQUNsRSxFQUFFLE9BQU9LLE9BQU87Z0JBQ2RKLFFBQVFJLEtBQUssQ0FBQyw4QkFBOEJBO1lBQzlDO1FBQ0Y7UUFFQWpCLHFEQUFlQTtJQUNqQixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0ssY0FBY2EsUUFBUTtRQUFDQyxPQUFPO1lBQUVWO1lBQVlDO1FBQWM7a0JBQ3hERjs7Ozs7O0FBR1AsRUFBRTtHQS9CV0Q7S0FBQUE7QUFpQ04sTUFBTWEsbUJBQW1COztJQUM5QixNQUFNQyxVQUFVbkIsaURBQVVBLENBQUNHO0lBQzNCLElBQUksQ0FBQ2dCLFNBQVM7UUFDWixNQUFNLElBQUlMLE1BQU07SUFDbEI7SUFDQSxPQUFPSztBQUNULEVBQUU7SUFOV0Q7QUFRYiwrREFBZWYsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9HbG9iYWxDb250ZXh0LnRzeD8yZTljIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnRleHQvR2xvYmFsQ29udGV4dC50c3hcblxuaW1wb3J0IHsgZmV0Y2hDYXRlZ29yaWVzIH0gZnJvbSAnQC9hcGknO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgRkMsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBHbG9iYWxDb250ZXh0VHlwZSB7XG4gIGNhdGVnb3JpZXM6IGFueVtdOyAvLyBBZGp1c3QgdGhlIHR5cGUgYWNjb3JkaW5nIHRvIHlvdXIgY2F0ZWdvcnkgZGF0YSBzdHJ1Y3R1cmVcbiAgc2V0Q2F0ZWdvcmllczogKGNhdGVnb3JpZXM6IHN0cmluZ1tdKSA9PiB2b2lkO1xufVxuXG5jb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxHbG9iYWxDb250ZXh0VHlwZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFByb3ZpZGVyOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEZldGNoIGNhdGVnb3JpZXMgYW5kIHNldCBpbml0aWFsIHN0YXRlXG4gICAgY29uc3QgZmV0Y2hDYXRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoQ2F0ZWdvcmllcygpXG5cbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG5cbiAgICAgICAgLy9jb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdZT1VSX0FQSV9FTkRQT0lOVF9GT1JfQ0FURUdPUklFUycpO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggY2F0ZWdvcmllcycpO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0Q2F0ZWdvcmllcyhyZXNwb25zZSk7IC8vIEFzc3VtaW5nIGRhdGEgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2F0ZWdvcmllczonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoQ2F0ZWdvcmllcygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8R2xvYmFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VHbG9iYWxDb250ZXh0ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VHbG9iYWxDb250ZXh0IG11c3QgYmUgdXNlZCB3aXRoaW4gYSBHbG9iYWxQcm92aWRlcicpO1xuICB9XG4gIHJldHVybiBjb250ZXh0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJmZXRjaENhdGVnb3JpZXMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiR2xvYmFsQ29udGV4dCIsInVuZGVmaW5lZCIsIkdsb2JhbFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImZldGNoQ2F0cyIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIm9rIiwiRXJyb3IiLCJlcnJvciIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VHbG9iYWxDb250ZXh0IiwiY29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/GlobalContext.tsx\n"));

/***/ })

});