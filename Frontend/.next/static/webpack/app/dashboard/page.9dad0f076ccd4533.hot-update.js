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

/***/ "(app-pages-browser)/./src/app/dashboard/page.tsx":
/*!************************************!*\
  !*** ./src/app/dashboard/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api.tsx\");\n/* harmony import */ var _components_Dashboard_Dash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Dashboard/Dash */ \"(app-pages-browser)/./src/components/Dashboard/Dash.tsx\");\n/* harmony import */ var _components_Layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Layouts/DefaultLayout */ \"(app-pages-browser)/./src/components/Layouts/DefaultLayout.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [incomes, setIncomes] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]); // Initialize incomes as an empty array of any type\n    const [expenses, setExpenses] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [totalIncome, setTotalIncome] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [totalExpense, setTotalExpense] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);\n    const [goal, setGoal] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [chartTotals, setChartTotals] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetchLists();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        // Calculate total income\n        const incomeTotal = incomes.reduce((total, income)=>total + parseInt(income.amount), 0);\n        setTotalIncome(incomeTotal);\n        // Calculate total expense\n        const expenseTotal = expenses.reduce((total, expense)=>total + parseInt(expense.amount), 0);\n        setTotalExpense(expenseTotal);\n    }, [\n        incomes,\n        expenses\n    ]); // Run this effect whenever incomes or expenses change\n    const fetchLists = async ()=>{\n        try {\n            const res = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchExpenses)();\n            setExpenses(res);\n            const res2 = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchIncomes)();\n            setIncomes(res2);\n            const res3 = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchGoal)();\n            setGoal(res3);\n            //console.log(res3)\n            const res4 = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchCategories)();\n            setCategories(res4);\n            const res5 = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.getMonthlyTotals)();\n            setChartTotals(res5);\n            console.log(localStorage.getItem(\"token\"));\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Dashboard_Dash__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                incomes: incomes,\n                expenses: expenses,\n                totalIncome: totalIncome,\n                totalExpense: totalExpense,\n                goal: goal,\n                categories: categories,\n                chartTotals: chartTotals\n            }, void 0, false, {\n                fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/app/dashboard/page.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/ghost/Documents/KokoLabs/Frontend/src/app/dashboard/page.tsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"cnhIPDInPglQrEV/xQmcYR9DKbU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVrRztBQUNuRDtBQUNnQjtBQUNuQjtBQUc3QixTQUFTUzs7SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdILCtDQUFRQSxDQUFRLEVBQUUsR0FBRyxtREFBbUQ7SUFDdEcsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFRLEVBQUU7SUFDbEQsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1UsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25DLE1BQU0sQ0FBQ1ksWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9DLE1BQU0sQ0FBQ2MsYUFBYUMsZUFBZSxHQUFHZiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRWpERCxnREFBU0EsQ0FBQztRQUVSaUI7SUFDRixHQUFHLEVBQUU7SUFFTGpCLGdEQUFTQSxDQUFDO1FBQ1IseUJBQXlCO1FBQ3pCLE1BQU1rQixjQUFjZixRQUFRZ0IsTUFBTSxDQUFDLENBQUNDLE9BQU9DLFNBQVdELFFBQVFFLFNBQVNELE9BQU9FLE1BQU0sR0FBRztRQUN2RmYsZUFBZVU7UUFFZiwwQkFBMEI7UUFDMUIsTUFBTU0sZUFBZW5CLFNBQVNjLE1BQU0sQ0FBQyxDQUFDQyxPQUFPSyxVQUFZTCxRQUFRRSxTQUFTRyxRQUFRRixNQUFNLEdBQUc7UUFDM0ZiLGdCQUFnQmM7SUFFbEIsR0FBRztRQUFDckI7UUFBU0U7S0FBUyxHQUFHLHNEQUFzRDtJQUUvRSxNQUFNWSxhQUFhO1FBQ2pCLElBQUc7WUFDRCxNQUFNUyxNQUFNLE1BQU1oQyxtREFBYUE7WUFFL0JZLFlBQVlvQjtZQUVaLE1BQU1DLE9BQU8sTUFBTS9CLGtEQUFZQTtZQUUvQlEsV0FBV3VCO1lBRVgsTUFBTUMsT0FBTyxNQUFNakMsK0NBQVNBO1lBRTVCaUIsUUFBUWdCO1lBRVIsbUJBQW1CO1lBQ25CLE1BQU1DLE9BQU8sTUFBTXBDLHFEQUFlQTtZQUNsQ3FCLGNBQWNlO1lBRWQsTUFBTUMsT0FBTyxNQUFNakMsc0RBQWdCQTtZQUNuQ21CLGVBQWVjO1lBR2ZDLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDO1FBQ25DLEVBQUMsT0FBTUMsS0FBSTtZQUNUSixRQUFRQyxHQUFHLENBQUNHO1FBQ2Q7SUFFRjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDcEMseUVBQWFBO3NCQUNaLDRFQUFDRCxrRUFBSUE7Z0JBQUNLLFNBQVNBO2dCQUFTRSxVQUFVQTtnQkFBVUUsYUFBYUE7Z0JBQWFFLGNBQWNBO2dCQUFjRSxNQUFNQTtnQkFBTUUsWUFBWUE7Z0JBQVlFLGFBQWFBOzs7Ozs7Ozs7Ozs7QUFJM0o7R0E3RHdCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Rhc2hib2FyZC9wYWdlLnRzeD9jMTVlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyBmZXRjaENhdGVnb3JpZXMsIGZldGNoRXhwZW5zZXMsIGZldGNoR29hbCwgZmV0Y2hJbmNvbWVzLCBnZXRNb250aGx5VG90YWxzIH0gZnJvbSBcIkAvYXBpXCI7XG5pbXBvcnQgRGFzaCBmcm9tIFwiQC9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoXCI7XG5pbXBvcnQgRGVmYXVsdExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dHMvRGVmYXVsdExheW91dFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpbmNvbWVzLCBzZXRJbmNvbWVzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7IC8vIEluaXRpYWxpemUgaW5jb21lcyBhcyBhbiBlbXB0eSBhcnJheSBvZiBhbnkgdHlwZVxuICBjb25zdCBbZXhwZW5zZXMsIHNldEV4cGVuc2VzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFt0b3RhbEluY29tZSwgc2V0VG90YWxJbmNvbWVdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW3RvdGFsRXhwZW5zZSwgc2V0VG90YWxFeHBlbnNlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtnb2FsLCBzZXRHb2FsXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2NoYXJ0VG90YWxzLCBzZXRDaGFydFRvdGFsc10gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgZmV0Y2hMaXN0cygpXG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIGluY29tZVxuICAgIGNvbnN0IGluY29tZVRvdGFsID0gaW5jb21lcy5yZWR1Y2UoKHRvdGFsLCBpbmNvbWUpID0+IHRvdGFsICsgcGFyc2VJbnQoaW5jb21lLmFtb3VudCksIDApO1xuICAgIHNldFRvdGFsSW5jb21lKGluY29tZVRvdGFsKTtcblxuICAgIC8vIENhbGN1bGF0ZSB0b3RhbCBleHBlbnNlXG4gICAgY29uc3QgZXhwZW5zZVRvdGFsID0gZXhwZW5zZXMucmVkdWNlKCh0b3RhbCwgZXhwZW5zZSkgPT4gdG90YWwgKyBwYXJzZUludChleHBlbnNlLmFtb3VudCksIDApO1xuICAgIHNldFRvdGFsRXhwZW5zZShleHBlbnNlVG90YWwpO1xuXG4gIH0sIFtpbmNvbWVzLCBleHBlbnNlc10pOyAvLyBSdW4gdGhpcyBlZmZlY3Qgd2hlbmV2ZXIgaW5jb21lcyBvciBleHBlbnNlcyBjaGFuZ2VcblxuICBjb25zdCBmZXRjaExpc3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeXtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoRXhwZW5zZXMoKVxuXG4gICAgICBzZXRFeHBlbnNlcyhyZXMpXG5cbiAgICAgIGNvbnN0IHJlczIgPSBhd2FpdCBmZXRjaEluY29tZXMoKVxuXG4gICAgICBzZXRJbmNvbWVzKHJlczIpXG5cbiAgICAgIGNvbnN0IHJlczMgPSBhd2FpdCBmZXRjaEdvYWwoKVxuXG4gICAgICBzZXRHb2FsKHJlczMpXG5cbiAgICAgIC8vY29uc29sZS5sb2cocmVzMylcbiAgICAgIGNvbnN0IHJlczQgPSBhd2FpdCBmZXRjaENhdGVnb3JpZXMoKVxuICAgICAgc2V0Q2F0ZWdvcmllcyhyZXM0KVxuXG4gICAgICBjb25zdCByZXM1ID0gYXdhaXQgZ2V0TW9udGhseVRvdGFscygpXG4gICAgICBzZXRDaGFydFRvdGFscyhyZXM1KVxuXG5cbiAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKVxuICAgIH1jYXRjaChlcnIpe1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbiAgICBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxEZWZhdWx0TGF5b3V0PlxuICAgICAgICA8RGFzaCBpbmNvbWVzPXtpbmNvbWVzfSBleHBlbnNlcz17ZXhwZW5zZXN9IHRvdGFsSW5jb21lPXt0b3RhbEluY29tZX0gdG90YWxFeHBlbnNlPXt0b3RhbEV4cGVuc2V9IGdvYWw9e2dvYWx9IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IGNoYXJ0VG90YWxzPXtjaGFydFRvdGFsc30vPlxuICAgICAgPC9EZWZhdWx0TGF5b3V0PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImZldGNoQ2F0ZWdvcmllcyIsImZldGNoRXhwZW5zZXMiLCJmZXRjaEdvYWwiLCJmZXRjaEluY29tZXMiLCJnZXRNb250aGx5VG90YWxzIiwiRGFzaCIsIkRlZmF1bHRMYXlvdXQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJpbmNvbWVzIiwic2V0SW5jb21lcyIsImV4cGVuc2VzIiwic2V0RXhwZW5zZXMiLCJ0b3RhbEluY29tZSIsInNldFRvdGFsSW5jb21lIiwidG90YWxFeHBlbnNlIiwic2V0VG90YWxFeHBlbnNlIiwiZ29hbCIsInNldEdvYWwiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImNoYXJ0VG90YWxzIiwic2V0Q2hhcnRUb3RhbHMiLCJmZXRjaExpc3RzIiwiaW5jb21lVG90YWwiLCJyZWR1Y2UiLCJ0b3RhbCIsImluY29tZSIsInBhcnNlSW50IiwiYW1vdW50IiwiZXhwZW5zZVRvdGFsIiwiZXhwZW5zZSIsInJlcyIsInJlczIiLCJyZXMzIiwicmVzNCIsInJlczUiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});