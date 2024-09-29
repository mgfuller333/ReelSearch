"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-use-controllable-state@1.1.0_@types+react@18.0.15_react@18.3.1";
exports.ids = ["vendor-chunks/@radix-ui+react-use-controllable-state@1.1.0_@types+react@18.0.15_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.1.0_@types+react@18.0.15_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.1.0_@types+react@18.0.15_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useControllableState: () => (/* binding */ useControllableState)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.0.4_@babel+core@7.25.2_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-use-callback-ref */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.0_@types+react@18.0.15_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs\");\n// packages/react/use-controllable-state/src/useControllableState.tsx\n\n\nfunction useControllableState({ prop, defaultProp, onChange = ()=>{} }) {\n    const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({\n        defaultProp,\n        onChange\n    });\n    const isControlled = prop !== void 0;\n    const value = isControlled ? prop : uncontrolledProp;\n    const handleChange = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.useCallbackRef)(onChange);\n    const setValue = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((nextValue)=>{\n        if (isControlled) {\n            const setter = nextValue;\n            const value2 = typeof nextValue === \"function\" ? setter(prop) : nextValue;\n            if (value2 !== prop) handleChange(value2);\n        } else {\n            setUncontrolledProp(nextValue);\n        }\n    }, [\n        isControlled,\n        prop,\n        setUncontrolledProp,\n        handleChange\n    ]);\n    return [\n        value,\n        setValue\n    ];\n}\nfunction useUncontrolledState({ defaultProp, onChange }) {\n    const uncontrolledState = react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultProp);\n    const [value] = uncontrolledState;\n    const prevValueRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);\n    const handleChange = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.useCallbackRef)(onChange);\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{\n        if (prevValueRef.current !== value) {\n            handleChange(value);\n            prevValueRef.current = value;\n        }\n    }, [\n        value,\n        prevValueRef,\n        handleChange\n    ]);\n    return uncontrolledState;\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXVzZS1jb250cm9sbGFibGUtc3RhdGVAMS4xLjBfQHR5cGVzK3JlYWN0QDE4LjAuMTVfcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtdXNlLWNvbnRyb2xsYWJsZS1zdGF0ZS9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEscUVBQXFFO0FBQ3RDO0FBQ21DO0FBQ2xFLFNBQVNFLHFCQUFxQixFQUM1QkMsSUFBSSxFQUNKQyxXQUFXLEVBQ1hDLFdBQVcsS0FDWCxDQUFDLEVBQ0Y7SUFDQyxNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUdDLHFCQUFxQjtRQUFFSjtRQUFhQztJQUFTO0lBQzdGLE1BQU1JLGVBQWVOLFNBQVMsS0FBSztJQUNuQyxNQUFNTyxRQUFRRCxlQUFlTixPQUFPRztJQUNwQyxNQUFNSyxlQUFlVixnRkFBY0EsQ0FBQ0k7SUFDcEMsTUFBTU8sV0FBV1osOENBQWlCLENBQ2hDLENBQUNjO1FBQ0MsSUFBSUwsY0FBYztZQUNoQixNQUFNTSxTQUFTRDtZQUNmLE1BQU1FLFNBQVMsT0FBT0YsY0FBYyxhQUFhQyxPQUFPWixRQUFRVztZQUNoRSxJQUFJRSxXQUFXYixNQUFNUSxhQUFhSztRQUNwQyxPQUFPO1lBQ0xULG9CQUFvQk87UUFDdEI7SUFDRixHQUNBO1FBQUNMO1FBQWNOO1FBQU1JO1FBQXFCSTtLQUFhO0lBRXpELE9BQU87UUFBQ0Q7UUFBT0U7S0FBUztBQUMxQjtBQUNBLFNBQVNKLHFCQUFxQixFQUM1QkosV0FBVyxFQUNYQyxRQUFRLEVBQ1Q7SUFDQyxNQUFNWSxvQkFBb0JqQiwyQ0FBYyxDQUFDSTtJQUN6QyxNQUFNLENBQUNNLE1BQU0sR0FBR087SUFDaEIsTUFBTUUsZUFBZW5CLHlDQUFZLENBQUNVO0lBQ2xDLE1BQU1DLGVBQWVWLGdGQUFjQSxDQUFDSTtJQUNwQ0wsNENBQWUsQ0FBQztRQUNkLElBQUltQixhQUFhRyxPQUFPLEtBQUtaLE9BQU87WUFDbENDLGFBQWFEO1lBQ2JTLGFBQWFHLE9BQU8sR0FBR1o7UUFDekI7SUFDRixHQUFHO1FBQUNBO1FBQU9TO1FBQWNSO0tBQWE7SUFDdEMsT0FBT007QUFDVDtBQUdFLENBQ0Ysa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVlbC1oYXJ2ZXN0ZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXVzZS1jb250cm9sbGFibGUtc3RhdGVAMS4xLjBfQHR5cGVzK3JlYWN0QDE4LjAuMTVfcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtdXNlLWNvbnRyb2xsYWJsZS1zdGF0ZS9kaXN0L2luZGV4Lm1qcz9mMjk0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhY2thZ2VzL3JlYWN0L3VzZS1jb250cm9sbGFibGUtc3RhdGUvc3JjL3VzZUNvbnRyb2xsYWJsZVN0YXRlLnRzeFxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFja1JlZiB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtdXNlLWNhbGxiYWNrLXJlZlwiO1xuZnVuY3Rpb24gdXNlQ29udHJvbGxhYmxlU3RhdGUoe1xuICBwcm9wLFxuICBkZWZhdWx0UHJvcCxcbiAgb25DaGFuZ2UgPSAoKSA9PiB7XG4gIH1cbn0pIHtcbiAgY29uc3QgW3VuY29udHJvbGxlZFByb3AsIHNldFVuY29udHJvbGxlZFByb3BdID0gdXNlVW5jb250cm9sbGVkU3RhdGUoeyBkZWZhdWx0UHJvcCwgb25DaGFuZ2UgfSk7XG4gIGNvbnN0IGlzQ29udHJvbGxlZCA9IHByb3AgIT09IHZvaWQgMDtcbiAgY29uc3QgdmFsdWUgPSBpc0NvbnRyb2xsZWQgPyBwcm9wIDogdW5jb250cm9sbGVkUHJvcDtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2tSZWYob25DaGFuZ2UpO1xuICBjb25zdCBzZXRWYWx1ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChuZXh0VmFsdWUpID0+IHtcbiAgICAgIGlmIChpc0NvbnRyb2xsZWQpIHtcbiAgICAgICAgY29uc3Qgc2V0dGVyID0gbmV4dFZhbHVlO1xuICAgICAgICBjb25zdCB2YWx1ZTIgPSB0eXBlb2YgbmV4dFZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBzZXR0ZXIocHJvcCkgOiBuZXh0VmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZTIgIT09IHByb3ApIGhhbmRsZUNoYW5nZSh2YWx1ZTIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VW5jb250cm9sbGVkUHJvcChuZXh0VmFsdWUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2lzQ29udHJvbGxlZCwgcHJvcCwgc2V0VW5jb250cm9sbGVkUHJvcCwgaGFuZGxlQ2hhbmdlXVxuICApO1xuICByZXR1cm4gW3ZhbHVlLCBzZXRWYWx1ZV07XG59XG5mdW5jdGlvbiB1c2VVbmNvbnRyb2xsZWRTdGF0ZSh7XG4gIGRlZmF1bHRQcm9wLFxuICBvbkNoYW5nZVxufSkge1xuICBjb25zdCB1bmNvbnRyb2xsZWRTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRQcm9wKTtcbiAgY29uc3QgW3ZhbHVlXSA9IHVuY29udHJvbGxlZFN0YXRlO1xuICBjb25zdCBwcmV2VmFsdWVSZWYgPSBSZWFjdC51c2VSZWYodmFsdWUpO1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFja1JlZihvbkNoYW5nZSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByZXZWYWx1ZVJlZi5jdXJyZW50ICE9PSB2YWx1ZSkge1xuICAgICAgaGFuZGxlQ2hhbmdlKHZhbHVlKTtcbiAgICAgIHByZXZWYWx1ZVJlZi5jdXJyZW50ID0gdmFsdWU7XG4gICAgfVxuICB9LCBbdmFsdWUsIHByZXZWYWx1ZVJlZiwgaGFuZGxlQ2hhbmdlXSk7XG4gIHJldHVybiB1bmNvbnRyb2xsZWRTdGF0ZTtcbn1cbmV4cG9ydCB7XG4gIHVzZUNvbnRyb2xsYWJsZVN0YXRlXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2tSZWYiLCJ1c2VDb250cm9sbGFibGVTdGF0ZSIsInByb3AiLCJkZWZhdWx0UHJvcCIsIm9uQ2hhbmdlIiwidW5jb250cm9sbGVkUHJvcCIsInNldFVuY29udHJvbGxlZFByb3AiLCJ1c2VVbmNvbnRyb2xsZWRTdGF0ZSIsImlzQ29udHJvbGxlZCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwic2V0VmFsdWUiLCJ1c2VDYWxsYmFjayIsIm5leHRWYWx1ZSIsInNldHRlciIsInZhbHVlMiIsInVuY29udHJvbGxlZFN0YXRlIiwidXNlU3RhdGUiLCJwcmV2VmFsdWVSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.1.0_@types+react@18.0.15_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs\n");

/***/ })

};
;