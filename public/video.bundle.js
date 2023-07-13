"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunknv_coding"] = self["webpackChunknv_coding"] || []).push([["video"],{

/***/ "./src/scripts/video.ts":
/*!******************************!*\
  !*** ./src/scripts/video.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar bg_mp4_1 = __importDefault(__webpack_require__(/*! @/assets/video/bg.mp4 */ \"./src/assets/video/bg.mp4\"));\nvar videoHandler = function () {\n    var container = document.querySelector('.video-bg');\n    if (!container) {\n        return;\n    }\n    var video = container.querySelector('video');\n    if (!video) {\n        return;\n    }\n    // const video = document.createElement('video');\n    var source = document.createElement('source');\n    source.setAttribute('src', \"\".concat(bg_mp4_1.default));\n    source.setAttribute('type', 'video/mp4');\n    // video.setAttribute('preload', 'auto');\n    // video.setAttribute('autoplay', '');\n    // video.setAttribute('muted', '');\n    // video.setAttribute('playsinline', '');\n    // video.setAttribute('disablePictureInPicture', '');\n    // video.setAttribute('loop', '');\n    video.appendChild(source);\n    // container.appendChild(video);\n    // const children = Array.from(video.children) as HTMLSourceElement[];\n    // if (children.length === 0) {\n    //   return;\n    // }\n    // children.forEach((item) => {\n    //   const sourceElement = item;\n    //   sourceElement.src = sourceElement.dataset.src || '';\n    // });\n    video.load();\n    video.addEventListener('loadeddata', function () {\n        console.log(1);\n        setTimeout(function () {\n            container.classList.add('loaded');\n        }, 0);\n    });\n};\nvideoHandler();\nexports[\"default\"] = videoHandler;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/video.ts?");

/***/ }),

/***/ "./src/assets/video/bg.mp4":
/*!*********************************!*\
  !*** ./src/assets/video/bg.mp4 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./assets/video/bg.mp4\";\n\n//# sourceURL=webpack://nv-coding/./src/assets/video/bg.mp4?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/video.ts"));
/******/ }
]);