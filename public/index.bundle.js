"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunknv_coding"] = self["webpackChunknv_coding"] || []).push([["index"],{

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://nv-coding/./src/styles/styles.scss?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar main_1 = __webpack_require__(/*! @/scripts/main */ \"./src/scripts/main.ts\");\n__webpack_require__(/*! @/styles/styles.scss */ \"./src/styles/styles.scss\");\nvar vevet_1 = __importDefault(__webpack_require__(/*! ./scripts/config/vevet */ \"./src/scripts/config/vevet.ts\"));\n// document.addEventListener('DOMContentLoaded', () => {\n//   init();\n// });\nvevet_1.default.pageLoad.onLoaded(function () {\n    (0, main_1.init)();\n});\n\n\n//# sourceURL=webpack://nv-coding/./src/index.ts?");

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

/***/ "./src/scripts/main.ts":
/*!*****************************!*\
  !*** ./src/scripts/main.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.init = void 0;\nvar init_1 = __importDefault(__webpack_require__(/*! ./popup/init */ \"./src/scripts/popup/init.ts\"));\nvar scrollbar_1 = __importDefault(__webpack_require__(/*! ./scrollbar */ \"./src/scripts/scrollbar.ts\"));\n// import animationCanvasInit from './animationCanvas/animationCanvas';\nvar init_2 = __importDefault(__webpack_require__(/*! ./fadeContent/init */ \"./src/scripts/fadeContent/init.ts\"));\nvar init_3 = __importDefault(__webpack_require__(/*! ./accordion/init */ \"./src/scripts/accordion/init.ts\"));\nvar init_4 = __importDefault(__webpack_require__(/*! ./stages/init */ \"./src/scripts/stages/init.ts\"));\nvar init_5 = __importDefault(__webpack_require__(/*! ./titleLines/init */ \"./src/scripts/titleLines/init.ts\"));\nvar vevet_1 = __importDefault(__webpack_require__(/*! ./config/vevet */ \"./src/scripts/config/vevet.ts\"));\n// import videoHandler from './video';\nvar init = function () {\n    (0, scrollbar_1.default)();\n    // animationCanvasInit();\n    (0, init_2.default)();\n    (0, init_3.default)();\n    (0, init_4.default)();\n    // videoHandler();\n    if (!vevet_1.default.viewport.isPhone) {\n        (0, init_5.default)();\n    }\n    var header = document.querySelector('.header');\n    // const headerHeight = header ? header.offsetHeight : 0;\n    var isScrolled = false;\n    if (header) {\n        if (window.scrollY > 20) {\n            header.classList.add('scrolled');\n            isScrolled = true;\n        }\n        window.addEventListener('scroll', function () {\n            if (window.scrollY > 20 && !isScrolled) {\n                header.classList.add('scrolled');\n                isScrolled = true;\n                return;\n            }\n            if (window.scrollY <= 20 && isScrolled) {\n                header.classList.remove('scrolled');\n                isScrolled = false;\n            }\n        });\n    }\n    var popups = (0, init_1.default)();\n    // console.log(popups);\n    var formArr = document.querySelectorAll('form');\n    if (formArr.length !== 0) {\n        formArr.forEach(function (form) {\n            form.addEventListener('submit', function (evt) {\n                evt.preventDefault();\n                popups.forEach(function (_a) {\n                    var timeline = _a.timeline, isThanks = _a.isThanks;\n                    if (isThanks) {\n                        timeline === null || timeline === void 0 ? void 0 : timeline.play();\n                    }\n                    else {\n                        timeline === null || timeline === void 0 ? void 0 : timeline.reverse();\n                    }\n                });\n            });\n        });\n        // document.addEventListener(\n        //   'wpcf7mailsent',\n        //   function () {\n        //     popups.forEach(({ timeline, isThanksPopup }) => {\n        //       if (isThanksPopup) {\n        //         timeline.play();\n        //       } else {\n        //         timeline.reverse();\n        //       }\n        //     });\n        //   },\n        //   false\n        // );\n    }\n};\nexports.init = init;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/main.ts?");

/***/ }),

/***/ "./src/scripts/popup/init.ts":
/*!***********************************!*\
  !*** ./src/scripts/popup/init.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar popupClass_1 = __importDefault(__webpack_require__(/*! ./popupClass */ \"./src/scripts/popup/popupClass.ts\"));\nvar initPopups = function () {\n    var popupDomArr = document.querySelectorAll('.popup');\n    if (popupDomArr.length === 0) {\n        return [];\n    }\n    var popupArr = [];\n    popupDomArr.forEach(function (element) {\n        var popup = new popupClass_1.default(element);\n        popupArr.push(popup);\n    });\n    popupArr.forEach(function (popup) {\n        popup.initOpen(popupArr);\n    });\n    return popupArr;\n};\nexports[\"default\"] = initPopups;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/popup/init.ts?");

/***/ }),

/***/ "./src/scripts/popup/makeTimeline.ts":
/*!*******************************************!*\
  !*** ./src/scripts/popup/makeTimeline.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar vevet_1 = __webpack_require__(/*! vevet */ \"./node_modules/vevet/build/es/index.js\");\nvar renderModalAnimation = function (_a) {\n    var progress = _a.progress, easing = _a.easing, parent = _a.parent, overlay = _a.overlay, scroll = _a.scroll, additional = _a.additional;\n    if (parent) {\n        var element = parent;\n        element.style.display = \"\".concat(progress > 0 ? 'flex' : 'none');\n        element.style.opacity = \"\".concat(progress > 0 ? 1 : 0);\n    }\n    if (overlay) {\n        var element = overlay;\n        element.style.opacity = \"\".concat(easing);\n    }\n    if (scroll) {\n        var element = scroll;\n        element.style.opacity = \"\".concat(easing);\n        if (parent.classList.contains('popup-menu')) {\n            element.style.transform = \"translateX(\".concat((easing - 1) * 100, \"%)\");\n        }\n        else {\n            element.style.transform = \"translateY(\".concat((1 - easing) * 2, \"rem)\");\n        }\n    }\n    if (additional) {\n        var element = additional;\n        element.style.opacity = \"\".concat(easing);\n        if (parent.classList.contains('popup-menu')) {\n            element.style.transform = \"translateX(\".concat((easing - 1) * 100, \"%)\");\n        }\n        else {\n            element.style.transform = \"translateY(\".concat((1 - easing) * 2, \"rem)\");\n        }\n    }\n};\nvar makeTimeline = function (parent, scroll, overlay, additional, video) {\n    if (!parent || !scroll || !overlay) {\n        return undefined;\n    }\n    var timeline = new vevet_1.Timeline({\n        duration: 600,\n        easing: [0.25, 0.1, 0.25, 1],\n    });\n    timeline.addCallback('start', function () {\n        var _a, _b;\n        if (!timeline.isReversed) {\n            (_a = document.querySelector('html')) === null || _a === void 0 ? void 0 : _a.classList.add('lock');\n            (_b = document.querySelector('body')) === null || _b === void 0 ? void 0 : _b.classList.add('lock');\n            parent.classList.add('_opened');\n            if (video) {\n                video.play();\n            }\n        }\n    });\n    timeline.addCallback('progress', function (_a) {\n        var progress = _a.progress, easing = _a.easing;\n        renderModalAnimation({\n            parent: parent,\n            scroll: scroll,\n            overlay: overlay,\n            progress: progress,\n            easing: easing,\n            additional: additional,\n        });\n    });\n    timeline.addCallback('end', function () {\n        var _a, _b;\n        if (timeline.isReversed) {\n            (_a = document.querySelector('html')) === null || _a === void 0 ? void 0 : _a.classList.remove('lock');\n            (_b = document.querySelector('body')) === null || _b === void 0 ? void 0 : _b.classList.remove('lock');\n            parent.classList.remove('_opened');\n            if (video) {\n                video.pause();\n            }\n        }\n    });\n    return timeline;\n};\nexports[\"default\"] = makeTimeline;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/popup/makeTimeline.ts?");

/***/ }),

/***/ "./src/scripts/popup/popupClass.ts":
/*!*****************************************!*\
  !*** ./src/scripts/popup/popupClass.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/scripts/popup/utils.ts\");\nvar makeTimeline_1 = __importDefault(__webpack_require__(/*! ./makeTimeline */ \"./src/scripts/popup/makeTimeline.ts\"));\nvar Popup = /** @class */ (function () {\n    function Popup(domElement) {\n        var _this = this;\n        this._isThanks = false;\n        this._closeButton = null;\n        this._openButtons = [];\n        this._parent = domElement;\n        this._name = domElement.dataset.popupname;\n        this._scroll = this._parent.querySelector('.popup__scroll');\n        this._overlay = this._parent.querySelector('.popup__overlay');\n        this._wrapper = this._parent.querySelector('.popup__wrapper');\n        this._additional = this._parent.querySelector('.popup__additional');\n        this._video = this._parent.querySelector('.video');\n        if (!this._name || !this._scroll || !this._overlay || !this._wrapper) {\n            return;\n        }\n        this._isThanks = this._name === '_popup-thanks';\n        this._timeline = (0, makeTimeline_1.default)(this._parent, this._scroll, this._overlay, this._additional, this._video);\n        this._openButtons = Array.from(document.querySelectorAll(\"[data-popup=\\\"\".concat(this._name, \"\\\"]\")));\n        this._closeButton = this._parent.querySelector('.popup__close');\n        if (this._closeButton) {\n            this._closeButton.addEventListener('click', function () {\n                var _a;\n                (_a = _this._timeline) === null || _a === void 0 ? void 0 : _a.reverse();\n            });\n        }\n        (0, utils_1.useOutsideClick)(this._wrapper, function () {\n            var _a, _b, _c, _d;\n            if (_this._parent.classList.contains('_opened')) {\n                (_a = _this._timeline) === null || _a === void 0 ? void 0 : _a.reverse();\n                (_b = document.querySelector('html')) === null || _b === void 0 ? void 0 : _b.classList.remove('lock');\n                (_c = document.querySelector('body')) === null || _c === void 0 ? void 0 : _c.classList.remove('lock');\n                (_d = _this._video) === null || _d === void 0 ? void 0 : _d.pause();\n            }\n        });\n        (0, utils_1.useOnEscape)(function () {\n            var _a, _b, _c, _d;\n            if (_this._parent.classList.contains('_opened')) {\n                (_a = _this._timeline) === null || _a === void 0 ? void 0 : _a.reverse();\n                (_b = document.querySelector('html')) === null || _b === void 0 ? void 0 : _b.classList.remove('lock');\n                (_c = document.querySelector('body')) === null || _c === void 0 ? void 0 : _c.classList.remove('lock');\n                (_d = _this._video) === null || _d === void 0 ? void 0 : _d.pause();\n            }\n        });\n    }\n    Object.defineProperty(Popup.prototype, \"parent\", {\n        get: function () {\n            return this._parent;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Popup.prototype, \"name\", {\n        get: function () {\n            return this._name;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Popup.prototype, \"isThanks\", {\n        get: function () {\n            return this._isThanks;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Popup.prototype, \"scroll\", {\n        get: function () {\n            return this._scroll;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Popup.prototype, \"overlay\", {\n        get: function () {\n            return this._overlay;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Popup.prototype, \"additional\", {\n        get: function () {\n            return this._additional;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Popup.prototype, \"wrapper\", {\n        get: function () {\n            return this._wrapper;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Popup.prototype, \"video\", {\n        get: function () {\n            return this._video;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Popup.prototype, \"timeline\", {\n        get: function () {\n            return this._timeline;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Popup.prototype, \"closeButton\", {\n        get: function () {\n            return this._closeButton;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Popup.prototype, \"openButtons\", {\n        get: function () {\n            return this._openButtons;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Popup.prototype.initOpen = function (popupArr) {\n        var _this = this;\n        if (popupArr.length === 0 || !this._openButtons) {\n            return;\n        }\n        this._openButtons.forEach(function (openBtn) {\n            openBtn.addEventListener('click', function (evt) {\n                var _a;\n                evt.preventDefault();\n                popupArr.forEach(function (popup) {\n                    var _a;\n                    if (popup.parent.classList.contains('_opened') &&\n                        popup.name !== _this._name) {\n                        (_a = popup.timeline) === null || _a === void 0 ? void 0 : _a.reverse();\n                    }\n                });\n                (_a = _this._timeline) === null || _a === void 0 ? void 0 : _a.play();\n            });\n        });\n    };\n    return Popup;\n}());\nexports[\"default\"] = Popup;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/popup/popupClass.ts?");

/***/ }),

/***/ "./src/scripts/popup/utils.ts":
/*!************************************!*\
  !*** ./src/scripts/popup/utils.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.useOnEscape = exports.useOutsideClick = void 0;\nvar useOutsideClick = function (element, callback) {\n    var listener = function (event) {\n        if (!element.contains(event === null || event === void 0 ? void 0 : event.target) && event.which === 1) {\n            callback();\n        }\n    };\n    document.addEventListener('mousedown', listener);\n};\nexports.useOutsideClick = useOutsideClick;\nvar useOnEscape = function (callback) {\n    window.addEventListener('keydown', function (evt) {\n        if (evt.keyCode === 27) {\n            callback();\n        }\n    });\n};\nexports.useOnEscape = useOnEscape;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/popup/utils.ts?");

/***/ }),

/***/ "./src/scripts/scrollbar.ts":
/*!**********************************!*\
  !*** ./src/scripts/scrollbar.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar vevet_1 = __webpack_require__(/*! vevet */ \"./node_modules/vevet/build/es/index.js\");\nvar vevet_2 = __importDefault(__webpack_require__(/*! ./config/vevet */ \"./src/scripts/config/vevet.ts\"));\nvar scrollBarInit = function () {\n    var scrollBar;\n    if (!vevet_2.default.isMobile) {\n        scrollBar = new vevet_1.ScrollBar({ container: window });\n    }\n    return scrollBar;\n};\nexports[\"default\"] = scrollBarInit;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/scrollbar.ts?");

/***/ }),

/***/ "./src/scripts/stages/init.ts":
/*!************************************!*\
  !*** ./src/scripts/stages/init.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar changeHeight = function (section, additionalArr, maxHeightProps) {\n    var maxHeight = maxHeightProps;\n    additionalArr.forEach(function (additional) {\n        maxHeight =\n            maxHeight < additional.clientHeight ? additional.clientHeight : maxHeight;\n    });\n    section.style.setProperty('--additional-height', \"\".concat(maxHeight === 0 ? 'auto' : \"\".concat(maxHeight, \"px\")));\n};\nvar stagesStylesInit = function () {\n    var sections = Array.from(document.querySelectorAll('.stages'));\n    if (sections.length === 0) {\n        return;\n    }\n    sections.forEach(function (section) {\n        var additionalArr = Array.from(section.querySelectorAll('.stages-additional'));\n        if (additionalArr.length === 0) {\n            return;\n        }\n        var maxHeight = 0;\n        changeHeight(section, additionalArr, maxHeight);\n        var breakpoint = '(max-width: 899px)';\n        var breakpointList = window.matchMedia(breakpoint);\n        breakpointList.addEventListener('change', function () {\n            changeHeight(section, additionalArr, maxHeight);\n        });\n    });\n};\nexports[\"default\"] = stagesStylesInit;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/stages/init.ts?");

/***/ }),

/***/ "./src/scripts/titleLines/init.ts":
/*!****************************************!*\
  !*** ./src/scripts/titleLines/init.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar changeWidth = function (container, title) {\n    var width = title.clientWidth;\n    container.style.setProperty('--title-width', \"\".concat(width, \"px\"));\n};\nvar initTitleLines = function () {\n    var titleContainers = Array.from(document.querySelectorAll('.services-details__title__container'));\n    if (titleContainers.length === 0) {\n        return;\n    }\n    titleContainers.forEach(function (container) {\n        var title = container.querySelector('.services-details__title');\n        if (!title) {\n            return;\n        }\n        changeWidth(container, title);\n        var breakpoint = '(max-width: 899px)';\n        var breakpointList = window.matchMedia(breakpoint);\n        breakpointList.addEventListener('change', function (evt) {\n            if (evt.matches) {\n                changeWidth(container, title);\n            }\n        });\n    });\n};\nexports[\"default\"] = initTitleLines;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/titleLines/init.ts?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_vevet_build_es_index_js"], () => (__webpack_exec__("./src/index.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);