"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunknv_coding"] = self["webpackChunknv_coding"] || []).push([["services"],{

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://nv-coding/./src/styles/styles.scss?");

/***/ }),

/***/ "./src/scripts/accordion/init.ts":
/*!***************************************!*\
  !*** ./src/scripts/accordion/init.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar vevet_1 = __webpack_require__(/*! vevet */ \"./node_modules/vevet/build/es/index.js\");\nvar accordionsInit = function () {\n    var elements = Array.from(document.querySelectorAll('.accordion-list__item'));\n    if (elements.length === 0) {\n        return;\n    }\n    elements.forEach(function (element) {\n        if (!element) {\n            return;\n        }\n        var button = element.querySelector('.accordion-list__summary');\n        var body = element.querySelector('.accordion-list__details');\n        if (!button || !body) {\n            return;\n        }\n        var bodyInner = body.querySelector('.accordion-list__inner');\n        if (!bodyInner) {\n            return;\n        }\n        var timeline = new vevet_1.Timeline({ duration: 400 });\n        timeline.addCallback('progress', function (_a) {\n            var easing = _a.easing, progress = _a.progress;\n            var height = progress === 1 ? 'auto' : \"\".concat(bodyInner.clientHeight * easing, \"px\");\n            body.style.height = height;\n            body.style.opacity = \"\".concat(easing);\n        });\n        button.addEventListener('click', function () {\n            element.classList.toggle('active');\n            if (timeline.progress > 0) {\n                timeline.reverse();\n            }\n            else {\n                timeline.play();\n            }\n        });\n        if (element.classList.contains('active')) {\n            timeline.play();\n        }\n    });\n};\nexports[\"default\"] = accordionsInit;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/accordion/init.ts?");

/***/ }),

/***/ "./src/scripts/config/vevet.ts":
/*!*************************************!*\
  !*** ./src/scripts/config/vevet.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar vevet_1 = __webpack_require__(/*! vevet */ \"./node_modules/vevet/build/es/index.js\");\nvar vevet = new vevet_1.Application({\n    tablet: 1199,\n    phone: 899,\n    prefix: 'v-',\n    viewportResizeTimeout: 100,\n    easing: [0.25, 0.1, 0.25, 1],\n});\nexports[\"default\"] = vevet;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/config/vevet.ts?");

/***/ }),

/***/ "./src/scripts/fadeContent/init.ts":
/*!*****************************************!*\
  !*** ./src/scripts/fadeContent/init.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar initSection_1 = __importDefault(__webpack_require__(/*! ./initSection */ \"./src/scripts/fadeContent/initSection.ts\"));\nvar fadeContentInit = function () {\n    var sectionArr = document.querySelectorAll('.fade-section');\n    if (sectionArr.length === 0) {\n        return;\n    }\n    sectionArr.forEach(function (section) {\n        (0, initSection_1.default)(section);\n    });\n};\nexports[\"default\"] = fadeContentInit;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/fadeContent/init.ts?");

/***/ }),

/***/ "./src/scripts/fadeContent/initSection.ts":
/*!************************************************!*\
  !*** ./src/scripts/fadeContent/initSection.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar useParentHeight_1 = __importDefault(__webpack_require__(/*! ./useParentHeight */ \"./src/scripts/fadeContent/useParentHeight.ts\"));\nvar makeTimeline_1 = __importDefault(__webpack_require__(/*! ./makeTimeline */ \"./src/scripts/fadeContent/makeTimeline.ts\"));\nvar initFadeSection = function (section, activeKey) {\n    if (activeKey === void 0) { activeKey = '1'; }\n    var parent = section.querySelector('.fade-section-content');\n    if (!parent) {\n        return;\n    }\n    var state = {\n        active: {\n            key: activeKey,\n            item: undefined,\n            button: undefined,\n        },\n        prev: {\n            key: activeKey,\n            item: undefined,\n            button: undefined,\n        },\n        parent: {\n            item: parent,\n            parentHeight: (0, useParentHeight_1.default)(parent),\n            activeHeight: parent.clientHeight,\n        },\n    };\n    var buttons = Array.from(section.querySelectorAll('.fade-section__button'));\n    var items = Array.from(section.querySelectorAll('.fade-section-content__item'));\n    if (items.length === 0) {\n        return;\n    }\n    state.active.button = section.querySelector('.fade-section__button.active');\n    buttons.forEach(function (button) {\n        button.addEventListener('click', function () {\n            var data = button.dataset.item;\n            state.prev.key = state.active.key;\n            state.active.key = data || '1';\n            state.prev.button = state.active.button;\n            state.active.button = button;\n            var showItem;\n            var hideItem;\n            if (state.prev.key === state.active.key) {\n                return;\n            }\n            if (state.prev.button) {\n                state.prev.button.classList.remove('active');\n            }\n            state.active.button.classList.add('active');\n            items.forEach(function (item) {\n                if (item.dataset.item === state.active.key) {\n                    showItem = item;\n                }\n                if (item.dataset.item === state.prev.key) {\n                    hideItem = item;\n                }\n            });\n            if (!showItem || !hideItem) {\n                return;\n            }\n            state.parent.activeHeight = showItem.clientHeight;\n            state.parent.parentHeight.save();\n            (0, makeTimeline_1.default)({\n                showItem: showItem,\n                hideItem: hideItem,\n                parentHeight: state.parent.parentHeight,\n                section: section,\n                activeHeight: state.parent.activeHeight,\n            });\n        });\n    });\n};\nexports[\"default\"] = initFadeSection;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/fadeContent/initSection.ts?");

/***/ }),

/***/ "./src/scripts/fadeContent/makeTimeline.ts":
/*!*************************************************!*\
  !*** ./src/scripts/fadeContent/makeTimeline.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar vevet_1 = __webpack_require__(/*! vevet */ \"./node_modules/vevet/build/es/index.js\");\nvar makeTimeline = function (_a) {\n    var showItemProp = _a.showItem, hideItemProp = _a.hideItem, parentHeight = _a.parentHeight, sectionProp = _a.section, activeHeight = _a.activeHeight, _b = _a.duration, duration = _b === void 0 ? 600 : _b;\n    var showItem = showItemProp;\n    var hideItem = hideItemProp;\n    var section = sectionProp;\n    var timeline = new vevet_1.Timeline({\n        duration: duration,\n        easing: [0.25, 0.1, 0.25, 1],\n    });\n    timeline.addCallback('start', function () {\n        parentHeight.save();\n        hideItem.classList.add('unactive');\n        showItem.classList.remove('unactive');\n    });\n    timeline.addCallback('progress', function (_a) {\n        var progress = _a.progress;\n        section.style.pointerEvents = 'none';\n        parentHeight.interpolate(activeHeight, progress);\n        showItem.style.opacity = \"\".concat(progress);\n        hideItem.style.opacity = \"\".concat(1 - progress);\n    });\n    timeline.addCallback('end', function () {\n        section.style.pointerEvents = '';\n        timeline.destroy();\n        parentHeight.reset();\n    });\n    timeline.play();\n};\nexports[\"default\"] = makeTimeline;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/fadeContent/makeTimeline.ts?");

/***/ }),

/***/ "./src/scripts/fadeContent/useParentHeight.ts":
/*!****************************************************!*\
  !*** ./src/scripts/fadeContent/useParentHeight.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar useParentHeight = function (element) {\n    var currentHeight = 0;\n    var save = function () {\n        var parent = element;\n        if (!parent) {\n            return;\n        }\n        currentHeight = parent.clientHeight;\n        parent.style.height = \"\".concat(currentHeight, \"px\");\n    };\n    var reset = function () {\n        var parent = element;\n        if (!parent) {\n            return;\n        }\n        currentHeight = 0;\n        parent.style.height = '';\n    };\n    var interpolate = function (targetHeight, progress) {\n        var parent = element;\n        if (!parent) {\n            return;\n        }\n        var startHeight = currentHeight;\n        var difference = targetHeight - startHeight;\n        var height = startHeight + difference * progress;\n        parent.style.height = \"\".concat(height, \"px\");\n    };\n    return { save: save, reset: reset, interpolate: interpolate };\n};\nexports[\"default\"] = useParentHeight;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/fadeContent/useParentHeight.ts?");

/***/ }),

/***/ "./src/scripts/stages/init.ts":
/*!************************************!*\
  !*** ./src/scripts/stages/init.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar changeHeight = function (section, additionalArr, maxHeightProps) {\n    var maxHeight = maxHeightProps;\n    additionalArr.forEach(function (additional) {\n        maxHeight =\n            maxHeight < additional.clientHeight ? additional.clientHeight : maxHeight;\n    });\n    section.style.setProperty('--additional-height', \"\".concat(maxHeight === 0 ? 'auto' : \"\".concat(maxHeight, \"px\")));\n};\nvar stagesStylesInit = function () {\n    var sections = Array.from(document.querySelectorAll('.stages'));\n    if (sections.length === 0) {\n        return;\n    }\n    sections.forEach(function (section) {\n        var additionalArr = Array.from(section.querySelectorAll('.stages-additional'));\n        if (additionalArr.length === 0) {\n            return;\n        }\n        var maxHeight = 0;\n        changeHeight(section, additionalArr, maxHeight);\n        var breakpoint = '(max-width: 899px)';\n        var breakpointList = window.matchMedia(breakpoint);\n        breakpointList.addEventListener('change', function () {\n            changeHeight(section, additionalArr, maxHeight);\n        });\n    });\n};\nexports[\"default\"] = stagesStylesInit;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/stages/init.ts?");

/***/ }),

/***/ "./src/services.ts":
/*!*************************!*\
  !*** ./src/services.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! @/styles/styles.scss */ \"./src/styles/styles.scss\");\nvar vevet_1 = __importDefault(__webpack_require__(/*! ./scripts/config/vevet */ \"./src/scripts/config/vevet.ts\"));\nvar init_1 = __importDefault(__webpack_require__(/*! ./scripts/fadeContent/init */ \"./src/scripts/fadeContent/init.ts\"));\nvar init_2 = __importDefault(__webpack_require__(/*! ./scripts/accordion/init */ \"./src/scripts/accordion/init.ts\"));\nvar init_3 = __importDefault(__webpack_require__(/*! ./scripts/stages/init */ \"./src/scripts/stages/init.ts\"));\n// document.addEventListener('DOMContentLoaded', () => {\n//   init();\n// });\nvevet_1.default.pageLoad.onLoaded(function () {\n    (0, init_1.default)();\n    (0, init_2.default)();\n    (0, init_3.default)();\n});\n\n\n//# sourceURL=webpack://nv-coding/./src/services.ts?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors","node_modules_normalize_css_normalize_css-src_styles_styles_scss"], () => (__webpack_exec__("./src/services.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);