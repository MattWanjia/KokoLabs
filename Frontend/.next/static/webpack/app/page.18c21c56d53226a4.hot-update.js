"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/api.tsx":
/*!*********************!*\
  !*** ./src/api.tsx ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchCategories: function() { return /* binding */ fetchCategories; },\n/* harmony export */   login: function() { return /* binding */ login; },\n/* harmony export */   register: function() { return /* binding */ register; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n// api.js\n\nconst BASE_URL = \"http://localhost:8000/\";\nconst login = async (credentials)=>{\n    try {\n        /*const response = await fetch(`${BASE_URL}api/token/`, {\n        mode:'no-cors',\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: {\n        'username':'admin'\n      },\n    });*/ const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(BASE_URL, \"api/token\"), {\n            credentials\n        });\n        if (response.status != 200) {\n            throw new Error(\"Login failed\");\n        }\n        return await response.data;\n    } catch (error) {\n        console.error(\"Error logging in:\", error);\n        throw error;\n    }\n};\nconst register = async (userData)=>{\n    try {\n        const response = await fetch(\"\".concat(BASE_URL, \"register/\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(userData)\n        });\n        if (!response.ok) {\n            throw new Error(\"Registration failed\");\n        }\n        return await response.json();\n    } catch (error) {\n        console.error(\"Error registering user:\", error);\n        throw error;\n    }\n};\nconst fetchCategories = async ()=>{\n    try {\n        const response = await fetch(\"\".concat(BASE_URL, \"category/\"));\n        if (!response.ok) {\n            throw new Error(\"Failed to fetch categories\");\n        }\n        return await response.json();\n    } catch (error) {\n        console.error(\"Error fetching categories:\", error);\n        throw error;\n    }\n}; // Define similar functions for other endpoints (goal, expense, income)\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcGkudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxTQUFTO0FBRWlCO0FBRTFCLE1BQU1DLFdBQVc7QUFFVixNQUFNQyxRQUFRLE9BQU9DO0lBQzFCLElBQUk7UUFDRjs7Ozs7Ozs7O09BU0csR0FFSCxNQUFNQyxXQUFXLE1BQU1KLDZDQUFLQSxDQUFDSyxJQUFJLENBQUMsR0FBWSxPQUFUSixVQUFTLGNBQVk7WUFBQ0U7UUFBVztRQUV0RSxJQUFJQyxTQUFTRSxNQUFNLElBQUksS0FBSztZQUMxQixNQUFNLElBQUlDLE1BQU07UUFDbEI7UUFDQSxPQUFPLE1BQU1ILFNBQVNJLElBQUk7SUFDNUIsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxxQkFBcUJBO1FBQ25DLE1BQU1BO0lBQ1I7QUFDRixFQUFFO0FBRUssTUFBTUUsV0FBVyxPQUFPQztJQUM3QixJQUFJO1FBQ0YsTUFBTVIsV0FBVyxNQUFNUyxNQUFNLEdBQVksT0FBVFosVUFBUyxjQUFZO1lBQ25EYSxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ047UUFDdkI7UUFDQSxJQUFJLENBQUNSLFNBQVNlLEVBQUUsRUFBRTtZQUNoQixNQUFNLElBQUlaLE1BQU07UUFDbEI7UUFDQSxPQUFPLE1BQU1ILFNBQVNnQixJQUFJO0lBQzVCLEVBQUUsT0FBT1gsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsMkJBQTJCQTtRQUN6QyxNQUFNQTtJQUNSO0FBQ0YsRUFBRTtBQUVLLE1BQU1ZLGtCQUFrQjtJQUM3QixJQUFJO1FBQ0YsTUFBTWpCLFdBQVcsTUFBTVMsTUFBTSxHQUFZLE9BQVRaLFVBQVM7UUFDekMsSUFBSSxDQUFDRyxTQUFTZSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJWixNQUFNO1FBQ2xCO1FBQ0EsT0FBTyxNQUFNSCxTQUFTZ0IsSUFBSTtJQUM1QixFQUFFLE9BQU9YLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7UUFDNUMsTUFBTUE7SUFDUjtBQUNGLEVBQUUsQ0FFRix1RUFBdUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaS50c3g/YmRjMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGkuanNcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvJztcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKGNyZWRlbnRpYWxzOiBhbnkpID0+IHtcbiAgdHJ5IHtcbiAgICAvKmNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9YXBpL3Rva2VuL2AsIHtcbiAgICAgICAgbW9kZTonbm8tY29ycycsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiB7XG4gICAgICAgICd1c2VybmFtZSc6J2FkbWluJ1xuICAgICAgfSxcbiAgICB9KTsqL1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke0JBU0VfVVJMfWFwaS90b2tlbmAsIHtjcmVkZW50aWFsc30pO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTG9naW4gZmFpbGVkJyk7XG4gICAgfVxuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5kYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvZ2dpbmcgaW46JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAodXNlckRhdGE6IGFueSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9cmVnaXN0ZXIvYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLFxuICAgIH0pO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVnaXN0cmF0aW9uIGZhaWxlZCcpO1xuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlZ2lzdGVyaW5nIHVzZXI6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9Y2F0ZWdvcnkvYCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggY2F0ZWdvcmllcycpO1xuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhdGVnb3JpZXM6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG4vLyBEZWZpbmUgc2ltaWxhciBmdW5jdGlvbnMgZm9yIG90aGVyIGVuZHBvaW50cyAoZ29hbCwgZXhwZW5zZSwgaW5jb21lKVxuXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJCQVNFX1VSTCIsImxvZ2luIiwiY3JlZGVudGlhbHMiLCJyZXNwb25zZSIsInBvc3QiLCJzdGF0dXMiLCJFcnJvciIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJyZWdpc3RlciIsInVzZXJEYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImpzb24iLCJmZXRjaENhdGVnb3JpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/api.tsx\n"));

/***/ })

});