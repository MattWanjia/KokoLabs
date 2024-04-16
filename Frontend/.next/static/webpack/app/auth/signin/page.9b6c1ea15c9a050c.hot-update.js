"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/signin/page",{

/***/ "(app-pages-browser)/./src/api.tsx":
/*!*********************!*\
  !*** ./src/api.tsx ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchCategories: function() { return /* binding */ fetchCategories; },\n/* harmony export */   fetchExpenses: function() { return /* binding */ fetchExpenses; },\n/* harmony export */   fetchIncomes: function() { return /* binding */ fetchIncomes; },\n/* harmony export */   login: function() { return /* binding */ login; },\n/* harmony export */   register: function() { return /* binding */ register; }\n/* harmony export */ });\n// api.js\nconst BASE_URL = \"http://localhost:8000/\";\nconst login = async (credentials)=>{\n    try {\n        let data = {\n            \"username\": credentials.username,\n            \"password\": credentials.password\n        };\n        const response = await fetch(\"\".concat(BASE_URL, \"api/token/\"), {\n            mode: \"cors\",\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"username\": credentials.username,\n                \"password\": credentials.password\n            })\n        });\n        if (!response.ok) {\n            throw new Error(\"Login failed\");\n        }\n        return await response.json();\n    } catch (error) {\n        console.error(\"Error logging in:\", error);\n        throw error;\n    }\n};\nconst register = async (userData)=>{\n    try {\n        const response = await fetch(\"\".concat(BASE_URL, \"register/\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(userData)\n        });\n        if (!response.ok) {\n            throw new Error(\"Registration failed\");\n        }\n        return await response.json();\n    } catch (error) {\n        console.error(\"Error registering user:\", error);\n        throw error;\n    }\n};\nconst fetchCategories = async ()=>{\n    let headers = {\n        \"Authorization\": \"Bearer \".concat(localStorage.getItem(\"access\"))\n    };\n    try {\n        const response = await fetch(\"\".concat(BASE_URL, \"lists/category/\"), {\n            headers: headers\n        });\n        if (!response.ok) {\n            throw new Error(\"Failed to fetch categories\");\n        }\n        return await response.json();\n    } catch (error) {\n        console.error(\"Error fetching categories:\", error);\n        throw error;\n    }\n};\nconst fetchExpenses = async ()=>{\n    try {\n        const response = await fetch(\"\".concat(BASE_URL, \"expense/\"));\n        if (!response.ok) {\n            throw new Error(\"Failed to fetch categories\");\n        }\n        return await response.json();\n    } catch (error) {\n        console.error(\"Error fetching categories:\", error);\n        throw error;\n    }\n};\nconst fetchIncomes = async ()=>{\n    try {\n        const response = await fetch(\"\".concat(BASE_URL, \"income/\"));\n        if (!response.ok) {\n            throw new Error(\"Failed to fetch categories\");\n        }\n        return await response.json();\n    } catch (error) {\n        console.error(\"Error fetching categories:\", error);\n        throw error;\n    }\n}; // Define similar functions for other endpoints (goal, expense, income)\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcGkudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsU0FBUztBQUVULE1BQU1BLFdBQVc7QUFFVixNQUFNQyxRQUFRLE9BQU9DO0lBQzFCLElBQUk7UUFFRixJQUFJQyxPQUFPO1lBQ1AsWUFBWUQsWUFBWUUsUUFBUTtZQUNoQyxZQUFZRixZQUFZRyxRQUFRO1FBQ3BDO1FBRUEsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLEdBQVksT0FBVFAsVUFBUyxlQUFhO1lBQ2xEUSxNQUFLO1lBQ1BDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFFQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFDLFlBQVlYLFlBQVlFLFFBQVE7Z0JBQUUsWUFBWUYsWUFBWUcsUUFBUTtZQUFBO1FBQzFGO1FBQ0EsSUFBSSxDQUFDQyxTQUFTUSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBQ0EsT0FBTyxNQUFNVCxTQUFTVSxJQUFJO0lBQzVCLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMscUJBQXFCQTtRQUNuQyxNQUFNQTtJQUNSO0FBQ0YsRUFBRTtBQUVLLE1BQU1FLFdBQVcsT0FBT0M7SUFDN0IsSUFBSTtRQUNGLE1BQU1kLFdBQVcsTUFBTUMsTUFBTSxHQUFZLE9BQVRQLFVBQVMsY0FBWTtZQUNuRFMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNPO1FBQ3ZCO1FBQ0EsSUFBSSxDQUFDZCxTQUFTUSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBQ0EsT0FBTyxNQUFNVCxTQUFTVSxJQUFJO0lBQzVCLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsMkJBQTJCQTtRQUN6QyxNQUFNQTtJQUNSO0FBQ0YsRUFBRTtBQUVLLE1BQU1JLGtCQUFrQjtJQUU3QixJQUFJWCxVQUFVO1FBQ1osaUJBQWlCLFVBQXlDLE9BQS9CWSxhQUFhQyxPQUFPLENBQUM7SUFDbEQ7SUFFQSxJQUFJO1FBQ0YsTUFBTWpCLFdBQVcsTUFBTUMsTUFBTSxHQUFZLE9BQVRQLFVBQVMsb0JBQWtCO1lBQ3pEVSxTQUFTQTtRQUNYO1FBQ0EsSUFBSSxDQUFDSixTQUFTUSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBQ0EsT0FBTyxNQUFNVCxTQUFTVSxJQUFJO0lBQzVCLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsOEJBQThCQTtRQUM1QyxNQUFNQTtJQUNSO0FBQ0YsRUFBRTtBQUVLLE1BQU1PLGdCQUFnQjtJQUMzQixJQUFJO1FBQ0YsTUFBTWxCLFdBQVcsTUFBTUMsTUFBTSxHQUFZLE9BQVRQLFVBQVM7UUFDekMsSUFBSSxDQUFDTSxTQUFTUSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBQ0EsT0FBTyxNQUFNVCxTQUFTVSxJQUFJO0lBQzVCLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsOEJBQThCQTtRQUM1QyxNQUFNQTtJQUNSO0FBQ0YsRUFBRTtBQUVLLE1BQU1RLGVBQWU7SUFDMUIsSUFBSTtRQUNGLE1BQU1uQixXQUFXLE1BQU1DLE1BQU0sR0FBWSxPQUFUUCxVQUFTO1FBQ3pDLElBQUksQ0FBQ00sU0FBU1EsRUFBRSxFQUFFO1lBQ2hCLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUNBLE9BQU8sTUFBTVQsU0FBU1UsSUFBSTtJQUM1QixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7UUFDNUMsTUFBTUE7SUFDUjtBQUNGLEVBQUUsQ0FFRix1RUFBdUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaS50c3g/YmRjMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGkuanNcblxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAwLyc7XG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9IGFzeW5jIChjcmVkZW50aWFsczogYW55KSA9PiB7XG4gIHRyeSB7XG5cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgJ3VzZXJuYW1lJzogY3JlZGVudGlhbHMudXNlcm5hbWUsXG4gICAgICAgICdwYXNzd29yZCc6IGNyZWRlbnRpYWxzLnBhc3N3b3JkXG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH1hcGkvdG9rZW4vYCwge1xuICAgICAgICBtb2RlOidjb3JzJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcblxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyd1c2VybmFtZSc6IGNyZWRlbnRpYWxzLnVzZXJuYW1lLCAncGFzc3dvcmQnOiBjcmVkZW50aWFscy5wYXNzd29yZH0pLFxuICAgIH0pO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTG9naW4gZmFpbGVkJyk7XG4gICAgfVxuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9nZ2luZyBpbjonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZWdpc3RlciA9IGFzeW5jICh1c2VyRGF0YTogYW55KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH1yZWdpc3Rlci9gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksXG4gICAgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWdpc3RyYXRpb24gZmFpbGVkJyk7XG4gICAgfVxuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVnaXN0ZXJpbmcgdXNlcjonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENhdGVnb3JpZXMgPSBhc3luYyAoKSA9PiB7XG5cbiAgbGV0IGhlYWRlcnMgPSB7XG4gICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2VzcycpfWBcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH1saXN0cy9jYXRlZ29yeS9gLCB7XG4gICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggY2F0ZWdvcmllcycpO1xuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhdGVnb3JpZXM6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hFeHBlbnNlcyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfWV4cGVuc2UvYCk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggY2F0ZWdvcmllcycpO1xuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhdGVnb3JpZXM6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hJbmNvbWVzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9aW5jb21lL2ApO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIGNhdGVnb3JpZXMnKTtcbiAgICB9XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjYXRlZ29yaWVzOicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuLy8gRGVmaW5lIHNpbWlsYXIgZnVuY3Rpb25zIGZvciBvdGhlciBlbmRwb2ludHMgKGdvYWwsIGV4cGVuc2UsIGluY29tZSlcblxuIl0sIm5hbWVzIjpbIkJBU0VfVVJMIiwibG9naW4iLCJjcmVkZW50aWFscyIsImRhdGEiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsInJlZ2lzdGVyIiwidXNlckRhdGEiLCJmZXRjaENhdGVnb3JpZXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hFeHBlbnNlcyIsImZldGNoSW5jb21lcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/api.tsx\n"));

/***/ })

});