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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// import { Preloader } from 'vevet';\nvar main_1 = __webpack_require__(/*! @/scripts/main */ \"./src/scripts/main.ts\");\n__webpack_require__(/*! @/styles/styles.scss */ \"./src/styles/styles.scss\");\nvar vevet_1 = __importDefault(__webpack_require__(/*! ./scripts/config/vevet */ \"./src/scripts/config/vevet.ts\"));\n// document.addEventListener('DOMContentLoaded', () => {\n//   init();\n// });\n// eslint-disable-next-line no-new\n// new Preloader({\n//   container: '#v-preloader',\n//   hide: 300,\n// });\nvevet_1.default.pageLoad.onLoaded(function () {\n    (0, main_1.init)();\n});\n\n\n//# sourceURL=webpack://nv-coding/./src/index.ts?");

/***/ }),

/***/ "./src/scripts/config/useObserver.ts":
/*!*******************************************!*\
  !*** ./src/scripts/config/useObserver.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar useObserver = function (_a) {\n    var target = _a.target, callbackIn = _a.callbackIn, callbackOut = _a.callbackOut, _b = _a.isCallOnce, isCallOnce = _b === void 0 ? false : _b;\n    var observer = new IntersectionObserver(function (entries) {\n        entries.forEach(function (entry) {\n            var element = entry.target;\n            if (entry.isIntersecting) {\n                // console.log(entry, element);\n                if (!callbackIn) {\n                    return;\n                }\n                callbackIn(element);\n                if (isCallOnce) {\n                    observer.unobserve(element);\n                }\n            }\n            else {\n                if (!callbackOut) {\n                    return;\n                }\n                callbackOut(element);\n            }\n        }, {\n            root: null,\n            threshold: 0,\n            rootMargin: '0px 0px 0px 0px',\n        });\n    });\n    if (!target) {\n        return undefined;\n    }\n    observer.observe(target);\n    return observer;\n};\nexports[\"default\"] = useObserver;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/config/useObserver.ts?");

/***/ }),

/***/ "./src/scripts/config/vevet.ts":
/*!*************************************!*\
  !*** ./src/scripts/config/vevet.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar vevet_1 = __webpack_require__(/*! vevet */ \"./node_modules/vevet/build/es/index.js\");\nvar vevet = new vevet_1.Application({\n    tablet: 1199,\n    phone: 899,\n    prefix: 'v-',\n    viewportResizeTimeout: 100,\n    easing: [0.25, 0.1, 0.25, 1],\n});\nexports[\"default\"] = vevet;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/config/vevet.ts?");

/***/ }),

/***/ "./src/scripts/helpItem/animation.ts":
/*!*******************************************!*\
  !*** ./src/scripts/helpItem/animation.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar render = function (item, backgroundProp, evt) {\n    var background = backgroundProp;\n    var rect = item.getBoundingClientRect();\n    var x = rect.left;\n    var width = rect.width;\n    var positionX = (evt.clientX - x) / width;\n    if (positionX < 0.5) {\n        background.style.transformOrigin = '0 0';\n    }\n    else {\n        background.style.transformOrigin = '100% 0';\n    }\n    background.style.transform =\n        evt.type === 'mouseenter' ? 'scaleX(1)' : 'scaleX(0)';\n};\nvar itemAnimation = function (itemProp) {\n    var item = itemProp;\n    var background = item.querySelector('.help-item__background');\n    if (!background) {\n        return;\n    }\n    item.addEventListener('mouseenter', function (evt) {\n        render(item, background, evt);\n    });\n    item.addEventListener('mouseleave', function (evt) {\n        render(item, background, evt);\n    });\n};\nexports[\"default\"] = itemAnimation;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/helpItem/animation.ts?");

/***/ }),

/***/ "./src/scripts/helpItem/init.ts":
/*!**************************************!*\
  !*** ./src/scripts/helpItem/init.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar animation_1 = __importDefault(__webpack_require__(/*! ./animation */ \"./src/scripts/helpItem/animation.ts\"));\nvar helpItemInit = function () {\n    var sectionArray = Array.from(document.querySelectorAll('.help'));\n    if (sectionArray.length === 0) {\n        return;\n    }\n    sectionArray.forEach(function (section) {\n        var itemArray = Array.from(section.querySelectorAll('.help-item'));\n        if (itemArray.length === 0) {\n            return;\n        }\n        itemArray.forEach(function (item) {\n            if (!item) {\n                return;\n            }\n            (0, animation_1.default)(item);\n        });\n    });\n};\nexports[\"default\"] = helpItemInit;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/helpItem/init.ts?");

/***/ }),

/***/ "./src/scripts/helpParallax/init.ts":
/*!******************************************!*\
  !*** ./src/scripts/helpParallax/init.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar useObserver_1 = __importDefault(__webpack_require__(/*! ../config/useObserver */ \"./src/scripts/config/useObserver.ts\"));\nvar parallax_1 = __importStar(__webpack_require__(/*! ./parallax */ \"./src/scripts/helpParallax/parallax.ts\"));\nvar helpParallaxInit = function () {\n    var sectionArray = Array.from(document.querySelectorAll('.help-images'));\n    if (sectionArray.length === 0) {\n        return;\n    }\n    sectionArray.forEach(function (section) {\n        var itemArray = Array.from(section.querySelectorAll('.help-images__circle'));\n        if (itemArray.length === 0) {\n            return;\n        }\n        var listenerArray = [];\n        var frameArray = [];\n        (0, useObserver_1.default)({\n            target: section,\n            callbackIn: function () {\n                itemArray.forEach(function (item) {\n                    if (!item) {\n                        return;\n                    }\n                    var _a = (0, parallax_1.default)(item, section), listener = _a.listener, frame = _a.frame;\n                    listenerArray.push(listener);\n                    frameArray.push(frame);\n                });\n            },\n            callbackOut: function () {\n                itemArray.forEach(function (itemProp) {\n                    var item = itemProp;\n                    if (!item) {\n                        return;\n                    }\n                    item.style.transform = '';\n                });\n                listenerArray.forEach(function (listener) {\n                    (0, parallax_1.clearListener)(listener);\n                });\n                frameArray.forEach(function (frame) {\n                    frame.destroy();\n                });\n                listenerArray = [];\n                frameArray = [];\n            },\n        });\n    });\n};\nexports[\"default\"] = helpParallaxInit;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/helpParallax/init.ts?");

/***/ }),

/***/ "./src/scripts/helpParallax/parallax.ts":
/*!**********************************************!*\
  !*** ./src/scripts/helpParallax/parallax.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.clearListener = void 0;\nvar vevet_1 = __webpack_require__(/*! vevet */ \"./node_modules/vevet/build/es/index.js\");\nvar clearListener = function (listener) {\n    window.removeEventListener('scroll', listener);\n};\nexports.clearListener = clearListener;\nvar parallaxItem = function (itemProps, section) {\n    var item = itemProps;\n    var progress = {\n        current: 0,\n        target: 0,\n    };\n    var size = item.dataset.size;\n    var mass = 0.6;\n    if (size === 's') {\n        mass = 0.14;\n    }\n    if (size === 'm') {\n        mass = 0.1;\n    }\n    if (size === 'l') {\n        mass = 0.06;\n    }\n    if (size === 'xl') {\n        mass = 0.03;\n    }\n    var frame = new vevet_1.AnimationFrame({ fps: 60 });\n    var render = function () {\n        progress.current = vevet_1.utils.math.lerp(progress.current, progress.target, mass);\n        item.style.transform = \"translate(0, \".concat(progress.current, \"px)\");\n    };\n    frame.addCallback('frame', function () {\n        render();\n    });\n    frame.play();\n    var scrollListener = function () {\n        var rect = section.getBoundingClientRect();\n        var startY = -1 * (rect.top - window.innerHeight / 3);\n        var y = Math.min(startY, rect.height);\n        progress.target = (-60 * y) / rect.height;\n    };\n    var listener = function () {\n        scrollListener();\n    };\n    window.addEventListener('scroll', listener);\n    return { listener: listener, frame: frame };\n};\nexports[\"default\"] = parallaxItem;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/helpParallax/parallax.ts?");

/***/ }),

/***/ "./src/scripts/main.ts":
/*!*****************************!*\
  !*** ./src/scripts/main.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.init = void 0;\nvar vevet_1 = __importDefault(__webpack_require__(/*! ./config/vevet */ \"./src/scripts/config/vevet.ts\"));\nvar init_1 = __importDefault(__webpack_require__(/*! ./helpItem/init */ \"./src/scripts/helpItem/init.ts\"));\nvar init_2 = __importDefault(__webpack_require__(/*! ./helpParallax/init */ \"./src/scripts/helpParallax/init.ts\"));\nvar init_3 = __importDefault(__webpack_require__(/*! ./popup/init */ \"./src/scripts/popup/init.ts\"));\nvar scrollbar_1 = __importDefault(__webpack_require__(/*! ./scrollbar */ \"./src/scripts/scrollbar.ts\"));\nvar init_4 = __importDefault(__webpack_require__(/*! ./titleLines/init */ \"./src/scripts/titleLines/init.ts\"));\n// import vevet from './config/vevet';\nvar init = function () {\n    (0, scrollbar_1.default)();\n    (0, init_4.default)();\n    if (!vevet_1.default.isMobile) {\n        (0, init_1.default)();\n        (0, init_2.default)();\n    }\n    var header = document.querySelector('.header');\n    // const headerHeight = header ? header.offsetHeight : 0;\n    var isScrolled = false;\n    if (header) {\n        if (window.scrollY > 20) {\n            header.classList.add('scrolled');\n            isScrolled = true;\n        }\n        window.addEventListener('scroll', function () {\n            if (window.scrollY > 20 && !isScrolled) {\n                header.classList.add('scrolled');\n                isScrolled = true;\n                return;\n            }\n            if (window.scrollY <= 20 && isScrolled) {\n                header.classList.remove('scrolled');\n                isScrolled = false;\n            }\n        });\n    }\n    var popups = (0, init_3.default)();\n    var formArr = document.querySelectorAll('form');\n    if (formArr.length !== 0) {\n        formArr.forEach(function (form) {\n            form.addEventListener('submit', function (evt) {\n                evt.preventDefault();\n                popups.forEach(function (_a) {\n                    var timeline = _a.timeline, isThanks = _a.isThanks;\n                    if (isThanks) {\n                        timeline === null || timeline === void 0 ? void 0 : timeline.play();\n                    }\n                    else {\n                        timeline === null || timeline === void 0 ? void 0 : timeline.reverse();\n                    }\n                });\n            });\n        });\n        // document.addEventListener(\n        //   'wpcf7mailsent',\n        //   function () {\n        //     popups.forEach(({ timeline, isThanksPopup }) => {\n        //       if (isThanksPopup) {\n        //         timeline.play();\n        //       } else {\n        //         timeline.reverse();\n        //       }\n        //     });\n        //   },\n        //   false\n        // );\n    }\n};\nexports.init = init;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/main.ts?");

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

/***/ "./src/scripts/titleLines/init.ts":
/*!****************************************!*\
  !*** ./src/scripts/titleLines/init.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar changeWidth = function (container, title) {\n    var width = title.clientWidth;\n    container.style.setProperty('--title-width', \"\".concat(width, \"px\"));\n};\nvar initTitleLines = function () {\n    var titleContainers = Array.from(document.querySelectorAll('.title__container'));\n    if (titleContainers.length === 0) {\n        return;\n    }\n    titleContainers.forEach(function (container) {\n        var title = container.querySelector('.title');\n        if (!title) {\n            return;\n        }\n        changeWidth(container, title);\n        var breakpoint = '(max-width: 899px)';\n        var breakpointList = window.matchMedia(breakpoint);\n        breakpointList.addEventListener('change', function (evt) {\n            if (evt.matches) {\n                changeWidth(container, title);\n            }\n        });\n    });\n};\nexports[\"default\"] = initTitleLines;\n\n\n//# sourceURL=webpack://nv-coding/./src/scripts/titleLines/init.ts?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors","node_modules_normalize_css_normalize_css-src_styles_styles_scss"], () => (__webpack_exec__("./src/index.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);