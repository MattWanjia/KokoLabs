"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/components/Header/DropdownUser.tsx":
/*!************************************************!*\
  !*** ./src/components/Header/DropdownUser.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst DropdownUser = ()=>{\n    _s();\n    const [dropdownOpen, setDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const trigger = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const dropdown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // close on click outside\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let uname = localStorage.getItem(\"username\");\n        //setUsername(uname)\n        const clickHandler = (param)=>{\n            let { target } = param;\n            if (!dropdown.current) return;\n            if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;\n            setDropdownOpen(false);\n        };\n        document.addEventListener(\"click\", clickHandler);\n        return ()=>document.removeEventListener(\"click\", clickHandler);\n    });\n    // close if the esc key is pressed\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const keyHandler = (param)=>{\n            let { keyCode } = param;\n            if (!dropdownOpen || keyCode !== 27) return;\n            setDropdownOpen(false);\n        };\n        document.addEventListener(\"keydown\", keyHandler);\n        return ()=>document.removeEventListener(\"keydown\", keyHandler);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                ref: trigger,\n                onClick: ()=>setDropdownOpen(!dropdownOpen),\n                className: \"flex items-center gap-4\",\n                href: \"#\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"hidden text-right lg:block\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"block text-sm font-medium text-black dark:text-white\",\n                            children: localStorage.getItem(\"username\")\n                        }, void 0, false, {\n                            fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/components/Header/DropdownUser.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/components/Header/DropdownUser.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"h-12 w-12 rounded-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            width: 112,\n                            height: 112,\n                            src: \"/images/user/user-01.png\",\n                            style: {\n                                width: \"auto\",\n                                height: \"auto\"\n                            },\n                            alt: \"User\"\n                        }, void 0, false, {\n                            fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/components/Header/DropdownUser.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/components/Header/DropdownUser.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: \"hidden fill-current sm:block\",\n                        width: \"12\",\n                        height: \"8\",\n                        viewBox: \"0 0 12 8\",\n                        fill: \"none\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fillRule: \"evenodd\",\n                            clipRule: \"evenodd\",\n                            d: \"M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z\",\n                            fill: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/components/Header/DropdownUser.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/components/Header/DropdownUser.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/components/Header/DropdownUser.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: dropdown,\n                onFocus: ()=>setDropdownOpen(true),\n                onBlur: ()=>setDropdownOpen(false),\n                className: \"absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark \".concat(dropdownOpen === true ? \"block\" : \"hidden\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"fill-current\",\n                            width: \"22\",\n                            height: \"22\",\n                            viewBox: \"0 0 22 22\",\n                            fill: \"none\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z\",\n                                    fill: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/components/Header/DropdownUser.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z\",\n                                    fill: \"\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/components/Header/DropdownUser.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/components/Header/DropdownUser.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, undefined),\n                        \"Log Out\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/components/Header/DropdownUser.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/components/Header/DropdownUser.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/components/Header/DropdownUser.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DropdownUser, \"hkoH68GJII7P2yGeZij+cWVU8Hk=\");\n_c = DropdownUser;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropdownUser);\nvar _c;\n$RefreshReg$(_c, \"DropdownUser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9Ecm9wZG93blVzZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9EO0FBQ3ZCO0FBQ0U7QUFFL0IsTUFBTUssZUFBZTs7SUFDbkIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0wsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1RLFVBQVVULDZDQUFNQSxDQUFNO0lBQzVCLE1BQU1VLFdBQVdWLDZDQUFNQSxDQUFNO0lBRTdCLHlCQUF5QjtJQUN6QkQsZ0RBQVNBLENBQUM7UUFDUixJQUFJWSxRQUFTQyxhQUFhQyxPQUFPLENBQUM7UUFHbEMsb0JBQW9CO1FBRXBCLE1BQU1DLGVBQWU7Z0JBQUMsRUFBRUMsTUFBTSxFQUFjO1lBQzFDLElBQUksQ0FBQ0wsU0FBU00sT0FBTyxFQUFFO1lBQ3ZCLElBQ0UsQ0FBQ1gsZ0JBQ0RLLFNBQVNNLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDRixXQUMxQk4sUUFBUU8sT0FBTyxDQUFDQyxRQUFRLENBQUNGLFNBRXpCO1lBQ0ZULGdCQUFnQjtRQUNsQjtRQUNBWSxTQUFTQyxnQkFBZ0IsQ0FBQyxTQUFTTDtRQUNuQyxPQUFPLElBQU1JLFNBQVNFLG1CQUFtQixDQUFDLFNBQVNOO0lBRXJEO0lBRUEsa0NBQWtDO0lBQ2xDZixnREFBU0EsQ0FBQztRQUNSLE1BQU1zQixhQUFhO2dCQUFDLEVBQUVDLE9BQU8sRUFBaUI7WUFDNUMsSUFBSSxDQUFDakIsZ0JBQWdCaUIsWUFBWSxJQUFJO1lBQ3JDaEIsZ0JBQWdCO1FBQ2xCO1FBQ0FZLFNBQVNDLGdCQUFnQixDQUFDLFdBQVdFO1FBQ3JDLE9BQU8sSUFBTUgsU0FBU0UsbUJBQW1CLENBQUMsV0FBV0M7SUFDdkQ7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUN0QixpREFBSUE7Z0JBQ0h1QixLQUFLaEI7Z0JBQ0xpQixTQUFTLElBQU1wQixnQkFBZ0IsQ0FBQ0Q7Z0JBQ2hDbUIsV0FBVTtnQkFDVkcsTUFBSzs7a0NBRUwsOERBQUNDO3dCQUFLSixXQUFVO2tDQUNkLDRFQUFDSTs0QkFBS0osV0FBVTtzQ0FDYlosYUFBYUMsT0FBTyxDQUFDOzs7Ozs7Ozs7OztrQ0FLMUIsOERBQUNlO3dCQUFLSixXQUFVO2tDQUNkLDRFQUFDckIsa0RBQUtBOzRCQUNKMEIsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsS0FBSzs0QkFDTEMsT0FBTztnQ0FDTEgsT0FBTztnQ0FDUEMsUUFBUTs0QkFDVjs0QkFDQUcsS0FBSTs7Ozs7Ozs7Ozs7a0NBSVIsOERBQUNDO3dCQUNDVixXQUFVO3dCQUNWSyxPQUFNO3dCQUNOQyxRQUFPO3dCQUNQSyxTQUFRO3dCQUNSQyxNQUFLO3dCQUNMQyxPQUFNO2tDQUVOLDRFQUFDQzs0QkFDQ0MsVUFBUzs0QkFDVEMsVUFBUzs0QkFDVEMsR0FBRTs0QkFDRkwsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTVgsOERBQUNiO2dCQUNDRSxLQUFLZjtnQkFDTGdDLFNBQVMsSUFBTXBDLGdCQUFnQjtnQkFDL0JxQyxRQUFRLElBQU1yQyxnQkFBZ0I7Z0JBQzlCa0IsV0FBVyw2SUFFVixPQURDbkIsaUJBQWlCLE9BQU8sVUFBVTswQkFJcEMsNEVBQUN1QztvQkFBT3BCLFdBQVU7O3NDQUNoQiw4REFBQ1U7NEJBQ0NWLFdBQVU7NEJBQ1ZLLE9BQU07NEJBQ05DLFFBQU87NEJBQ1BLLFNBQVE7NEJBQ1JDLE1BQUs7NEJBQ0xDLE9BQU07OzhDQUVOLDhEQUFDQztvQ0FDQ0csR0FBRTtvQ0FDRkwsTUFBSzs7Ozs7OzhDQUVQLDhEQUFDRTtvQ0FDQ0csR0FBRTtvQ0FDRkwsTUFBSzs7Ozs7Ozs7Ozs7O3dCQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPaEI7R0F0SE1oQztLQUFBQTtBQXdITiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvRHJvcGRvd25Vc2VyLnRzeD9kOTAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IERyb3Bkb3duVXNlciA9ICgpID0+IHtcbiAgY29uc3QgW2Ryb3Bkb3duT3Blbiwgc2V0RHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gIGNvbnN0IHRyaWdnZXIgPSB1c2VSZWY8YW55PihudWxsKTtcbiAgY29uc3QgZHJvcGRvd24gPSB1c2VSZWY8YW55PihudWxsKTtcblxuICAvLyBjbG9zZSBvbiBjbGljayBvdXRzaWRlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHVuYW1lID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpXG5cblxuICAgIC8vc2V0VXNlcm5hbWUodW5hbWUpXG5cbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoeyB0YXJnZXQgfTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFkcm9wZG93bi5jdXJyZW50KSByZXR1cm47XG4gICAgICBpZiAoXG4gICAgICAgICFkcm9wZG93bk9wZW4gfHxcbiAgICAgICAgZHJvcGRvd24uY3VycmVudC5jb250YWlucyh0YXJnZXQpIHx8XG4gICAgICAgIHRyaWdnZXIuY3VycmVudC5jb250YWlucyh0YXJnZXQpXG4gICAgICApXG4gICAgICAgIHJldHVybjtcbiAgICAgIHNldERyb3Bkb3duT3BlbihmYWxzZSk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XG5cbiAgfSk7XG5cbiAgLy8gY2xvc2UgaWYgdGhlIGVzYyBrZXkgaXMgcHJlc3NlZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGtleUhhbmRsZXIgPSAoeyBrZXlDb2RlIH06IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmICghZHJvcGRvd25PcGVuIHx8IGtleUNvZGUgIT09IDI3KSByZXR1cm47XG4gICAgICBzZXREcm9wZG93bk9wZW4oZmFsc2UpO1xuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5SGFuZGxlcik7XG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleUhhbmRsZXIpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgIDxMaW5rXG4gICAgICAgIHJlZj17dHJpZ2dlcn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RHJvcGRvd25PcGVuKCFkcm9wZG93bk9wZW4pfVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiXG4gICAgICAgIGhyZWY9XCIjXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHRleHQtcmlnaHQgbGc6YmxvY2tcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICB7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJyl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIFxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaC0xMiB3LTEyIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgd2lkdGg9ezExMn1cbiAgICAgICAgICAgIGhlaWdodD17MTEyfVxuICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvdXNlci91c2VyLTAxLnBuZ1wifVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFsdD1cIlVzZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8c3ZnXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGZpbGwtY3VycmVudCBzbTpibG9ja1wiXG4gICAgICAgICAgd2lkdGg9XCIxMlwiXG4gICAgICAgICAgaGVpZ2h0PVwiOFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxMiA4XCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICBkPVwiTTAuNDEwNzY1IDAuOTEwNzM0QzAuNzM2MjAyIDAuNTg1Mjk3IDEuMjYzODQgMC41ODUyOTcgMS41ODkyOCAwLjkxMDczNEw2LjAwMDAyIDUuMzIxNDhMMTAuNDEwOCAwLjkxMDczNEMxMC43MzYyIDAuNTg1Mjk3IDExLjI2MzggMC41ODUyOTcgMTEuNTg5MyAwLjkxMDczNEMxMS45MTQ3IDEuMjM2MTcgMTEuOTE0NyAxLjc2MzgxIDExLjU4OTMgMi4wODkyNEw2LjU4OTI4IDcuMDg5MjRDNi4yNjM4NCA3LjQxNDY4IDUuNzM2MiA3LjQxNDY4IDUuNDEwNzcgNy4wODkyNEwwLjQxMDc2NSAyLjA4OTI0QzAuMDg1MzI3NyAxLjc2MzgxIDAuMDg1MzI3NyAxLjIzNjE3IDAuNDEwNzY1IDAuOTEwNzM0WlwiXG4gICAgICAgICAgICBmaWxsPVwiXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvTGluaz5cblxuICAgICAgey8qIDwhLS0gRHJvcGRvd24gU3RhcnQgLS0+ICovfVxuICAgICAgPGRpdlxuICAgICAgICByZWY9e2Ryb3Bkb3dufVxuICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXREcm9wZG93bk9wZW4odHJ1ZSl9XG4gICAgICAgIG9uQmx1cj17KCkgPT4gc2V0RHJvcGRvd25PcGVuKGZhbHNlKX1cbiAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgcmlnaHQtMCBtdC00IGZsZXggdy02Mi41IGZsZXgtY29sIHJvdW5kZWQtc20gYm9yZGVyIGJvcmRlci1zdHJva2UgYmctd2hpdGUgc2hhZG93LWRlZmF1bHQgZGFyazpib3JkZXItc3Ryb2tlZGFyayBkYXJrOmJnLWJveGRhcmsgJHtcbiAgICAgICAgICBkcm9wZG93bk9wZW4gPT09IHRydWUgPyBcImJsb2NrXCIgOiBcImhpZGRlblwiXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICBcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMy41IHB4LTYgcHktNCB0ZXh0LXNtIGZvbnQtbWVkaXVtIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3Zlcjp0ZXh0LXByaW1hcnkgbGc6dGV4dC1iYXNlXCI+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50XCJcbiAgICAgICAgICAgIHdpZHRoPVwiMjJcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMjJcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMiAyMlwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTTE1LjUzNzUgMC42MTg3NDRIMTEuNjUzMUMxMC43NTk0IDAuNjE4NzQ0IDEwLjAwMzEgMS4zNzQ5OSAxMC4wMDMxIDIuMjY4NzRWNC42NDA2MkMxMC4wMDMxIDUuMDUzMTIgMTAuMzQ2OSA1LjM5Njg3IDEwLjc1OTQgNS4zOTY4N0MxMS4xNzE5IDUuMzk2ODcgMTEuNTUgNS4wNTMxMiAxMS41NSA0LjY0MDYyVjIuMjM0MzdDMTEuNTUgMi4xNjU2MiAxMS41ODQ0IDIuMTMxMjQgMTEuNjUzMSAyLjEzMTI0SDE1LjUzNzVDMTYuMzYyNSAyLjEzMTI0IDE3LjAxNTYgMi43ODQzNyAxNy4wMTU2IDMuNjA5MzdWMTguMzU2MkMxNy4wMTU2IDE5LjE4MTIgMTYuMzYyNSAxOS44MzQ0IDE1LjUzNzUgMTkuODM0NEgxMS42NTMxQzExLjU4NDQgMTkuODM0NCAxMS41NSAxOS44IDExLjU1IDE5LjczMTJWMTcuMzU5NEMxMS41NSAxNi45NDY5IDExLjIwNjIgMTYuNjAzMSAxMC43NTk0IDE2LjYwMzFDMTAuMzEyNSAxNi42MDMxIDEwLjAwMzEgMTYuOTQ2OSAxMC4wMDMxIDE3LjM1OTRWMTkuNzMxMkMxMC4wMDMxIDIwLjYyNSAxMC43NTk0IDIxLjM4MTIgMTEuNjUzMSAyMS4zODEySDE1LjUzNzVDMTcuMjIxOSAyMS4zODEyIDE4LjU2MjUgMjAuMDA2MiAxOC41NjI1IDE4LjM1NjJWMy42NDM3NEMxOC41NjI1IDEuOTU5MzcgMTcuMTg3NSAwLjYxODc0NCAxNS41Mzc1IDAuNjE4NzQ0WlwiXG4gICAgICAgICAgICAgIGZpbGw9XCJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNNi4wNTAwMSAxMS43NTYzSDEyLjIwMzFDMTIuNjE1NiAxMS43NTYzIDEyLjk1OTQgMTEuNDEyNSAxMi45NTk0IDExQzEyLjk1OTQgMTAuNTg3NSAxMi42MTU2IDEwLjI0MzggMTIuMjAzMSAxMC4yNDM4SDYuMDg0MzlMOC4yMTU2NCA4LjA3ODEzQzguNTI1MDEgNy43Njg3NSA4LjUyNTAxIDcuMjg3NSA4LjIxNTY0IDYuOTc4MTJDNy45MDYyNiA2LjY2ODc1IDcuNDI1MDEgNi42Njg3NSA3LjExNTY0IDYuOTc4MTJMMy42NzgxNCAxMC40ODQ0QzMuMzY4NzYgMTAuNzkzOCAzLjM2ODc2IDExLjI3NSAzLjY3ODE0IDExLjU4NDRMNy4xMTU2NCAxNS4wOTA2QzcuMjUzMTQgMTUuMjI4MSA3LjQ1OTM5IDE1LjMzMTIgNy42NjU2NCAxNS4zMzEyQzcuODcxODkgMTUuMzMxMiA4LjA0Mzc2IDE1LjI2MjUgOC4yMTU2NCAxNS4xMjVDOC41MjUwMSAxNC44MTU2IDguNTI1MDEgMTQuMzM0NCA4LjIxNTY0IDE0LjAyNUw2LjA1MDAxIDExLjc1NjNaXCJcbiAgICAgICAgICAgICAgZmlsbD1cIlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIExvZyBPdXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8IS0tIERyb3Bkb3duIEVuZCAtLT4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blVzZXI7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJMaW5rIiwiSW1hZ2UiLCJEcm9wZG93blVzZXIiLCJkcm9wZG93bk9wZW4iLCJzZXREcm9wZG93bk9wZW4iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidHJpZ2dlciIsImRyb3Bkb3duIiwidW5hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2xpY2tIYW5kbGVyIiwidGFyZ2V0IiwiY3VycmVudCIsImNvbnRhaW5zIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtleUhhbmRsZXIiLCJrZXlDb2RlIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwib25DbGljayIsImhyZWYiLCJzcGFuIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJzdHlsZSIsImFsdCIsInN2ZyIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJwYXRoIiwiZmlsbFJ1bGUiLCJjbGlwUnVsZSIsImQiLCJvbkZvY3VzIiwib25CbHVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header/DropdownUser.tsx\n"));

/***/ })

});