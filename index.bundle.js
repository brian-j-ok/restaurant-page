/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/glitch.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/glitch.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1,\nh2 {\n  margin: 0;\n}\n\n.hero {\n  font-size: clamp(40px, 10vw, 100px);\n  line-height: 1;\n  display: inline-block;\n  color: #fff;\n  z-index: 2;\n  letter-spacing: 10px;\n\n  /* Bright things in dark environments usually cast that light, giving off a glow */\n  filter: drop-shadow(0 1px 3px);\n}\n\n.about {\n  color: #fff;\n  z-index: 2;\n  letter-spacing: 10px;\n\n  /* Bright things in dark environments usually cast that light, giving off a glow */\n  filter: drop-shadow(0 1px 3px);\n}\n\n.layers {\n  position: relative;\n}\n\n.layers::before,\n.layers::after {\n  content: attr(data-text);\n  position: absolute;\n  width: 110%;\n  z-index: -1;\n}\n\n.layers::before {\n  top: 10px;\n  left: 15px;\n  color: #e0287d;\n}\n\n.layers::after {\n  top: 5px;\n  left: -10px;\n  color: #1bc7fb;\n}\n\n.paths {\n  animation: paths 5s step-end infinite;\n}\n\n@keyframes paths {\n  0% {\n    clip-path: polygon(\n      0% 43%,\n      83% 43%,\n      83% 22%,\n      23% 22%,\n      23% 24%,\n      91% 24%,\n      91% 26%,\n      18% 26%,\n      18% 83%,\n      29% 83%,\n      29% 17%,\n      41% 17%,\n      41% 39%,\n      18% 39%,\n      18% 82%,\n      54% 82%,\n      54% 88%,\n      19% 88%,\n      19% 4%,\n      39% 4%,\n      39% 14%,\n      76% 14%,\n      76% 52%,\n      23% 52%,\n      23% 35%,\n      19% 35%,\n      19% 8%,\n      36% 8%,\n      36% 31%,\n      73% 31%,\n      73% 16%,\n      1% 16%,\n      1% 56%,\n      50% 56%,\n      50% 8%\n    );\n  }\n\n  5% {\n    clip-path: polygon(\n      0% 29%,\n      44% 29%,\n      44% 83%,\n      94% 83%,\n      94% 56%,\n      11% 56%,\n      11% 64%,\n      94% 64%,\n      94% 70%,\n      88% 70%,\n      88% 32%,\n      18% 32%,\n      18% 96%,\n      10% 96%,\n      10% 62%,\n      9% 62%,\n      9% 84%,\n      68% 84%,\n      68% 50%,\n      52% 50%,\n      52% 55%,\n      35% 55%,\n      35% 87%,\n      25% 87%,\n      25% 39%,\n      15% 39%,\n      15% 88%,\n      52% 88%\n    );\n  }\n\n  30% {\n    clip-path: polygon(\n      0% 53%,\n      93% 53%,\n      93% 62%,\n      68% 62%,\n      68% 37%,\n      97% 37%,\n      97% 89%,\n      13% 89%,\n      13% 45%,\n      51% 45%,\n      51% 88%,\n      17% 88%,\n      17% 54%,\n      81% 54%,\n      81% 75%,\n      79% 75%,\n      79% 76%,\n      38% 76%,\n      38% 28%,\n      61% 28%,\n      61% 12%,\n      55% 12%,\n      55% 62%,\n      68% 62%,\n      68% 51%,\n      0% 51%,\n      0% 92%,\n      63% 92%,\n      63% 4%,\n      65% 4%\n    );\n  }\n\n  45% {\n    clip-path: polygon(\n      0% 33%,\n      2% 33%,\n      2% 69%,\n      58% 69%,\n      58% 94%,\n      55% 94%,\n      55% 25%,\n      33% 25%,\n      33% 85%,\n      16% 85%,\n      16% 19%,\n      5% 19%,\n      5% 20%,\n      79% 20%,\n      79% 96%,\n      93% 96%,\n      93% 50%,\n      5% 50%,\n      5% 74%,\n      55% 74%,\n      55% 57%,\n      96% 57%,\n      96% 59%,\n      87% 59%,\n      87% 65%,\n      82% 65%,\n      82% 39%,\n      63% 39%,\n      63% 92%,\n      4% 92%,\n      4% 36%,\n      24% 36%,\n      24% 70%,\n      1% 70%,\n      1% 43%,\n      15% 43%,\n      15% 28%,\n      23% 28%,\n      23% 71%,\n      90% 71%,\n      90% 86%,\n      97% 86%,\n      97% 1%,\n      60% 1%,\n      60% 67%,\n      71% 67%,\n      71% 91%,\n      17% 91%,\n      17% 14%,\n      39% 14%,\n      39% 30%,\n      58% 30%,\n      58% 11%,\n      52% 11%,\n      52% 83%,\n      68% 83%\n    );\n  }\n\n  76% {\n    clip-path: polygon(\n      0% 26%,\n      15% 26%,\n      15% 73%,\n      72% 73%,\n      72% 70%,\n      77% 70%,\n      77% 75%,\n      8% 75%,\n      8% 42%,\n      4% 42%,\n      4% 61%,\n      17% 61%,\n      17% 12%,\n      26% 12%,\n      26% 63%,\n      73% 63%,\n      73% 43%,\n      90% 43%,\n      90% 67%,\n      50% 67%,\n      50% 41%,\n      42% 41%,\n      42% 46%,\n      50% 46%,\n      50% 84%,\n      96% 84%,\n      96% 78%,\n      49% 78%,\n      49% 25%,\n      63% 25%,\n      63% 14%\n    );\n  }\n\n  90% {\n    clip-path: polygon(\n      0% 41%,\n      13% 41%,\n      13% 6%,\n      87% 6%,\n      87% 93%,\n      10% 93%,\n      10% 13%,\n      89% 13%,\n      89% 6%,\n      3% 6%,\n      3% 8%,\n      16% 8%,\n      16% 79%,\n      0% 79%,\n      0% 99%,\n      92% 99%,\n      92% 90%,\n      5% 90%,\n      5% 60%,\n      0% 60%,\n      0% 48%,\n      89% 48%,\n      89% 13%,\n      80% 13%,\n      80% 43%,\n      95% 43%,\n      95% 19%,\n      80% 19%,\n      80% 85%,\n      38% 85%,\n      38% 62%\n    );\n  }\n\n  1%,\n  7%,\n  33%,\n  47%,\n  78%,\n  93% {\n    clip-path: none;\n  }\n}\n\n.glitch span {\n  animation: paths 5s step-end infinite;\n}\n\n.glitch::before {\n  animation: paths 5s step-end infinite, opacity 5s step-end infinite,\n    font 8s step-end infinite, movement 10s step-end infinite;\n}\n\n.glitch::after {\n  animation: paths 5s step-end infinite, opacity 5s step-end infinite,\n    font 7s step-end infinite, movement 8s step-end infinite;\n}", "",{"version":3,"sources":["webpack://./src/styles/glitch.css"],"names":[],"mappings":"AAAA;;EAEE,SAAS;AACX;;AAEA;EACE,mCAAmC;EACnC,cAAc;EACd,qBAAqB;EACrB,WAAW;EACX,UAAU;EACV,oBAAoB;;EAEpB,kFAAkF;EAClF,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,UAAU;EACV,oBAAoB;;EAEpB,kFAAkF;EAClF,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,wBAAwB;EACxB,kBAAkB;EAClB,WAAW;EACX,WAAW;AACb;;AAEA;EACE,SAAS;EACT,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,QAAQ;EACR,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE;IACE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;KAoCC;EACH;;EAEA;IACE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;KA6BC;EACH;;EAEA;IACE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;KA+BC;EACH;;EAEA;IACE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;KAyDC;EACH;;EAEA;IACE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;KAgCC;EACH;;EAEA;IACE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;KAgCC;EACH;;EAEA;;;;;;IAME,eAAe;EACjB;AACF;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE;6DAC2D;AAC7D;;AAEA;EACE;4DAC0D;AAC5D","sourcesContent":["h1,\nh2 {\n  margin: 0;\n}\n\n.hero {\n  font-size: clamp(40px, 10vw, 100px);\n  line-height: 1;\n  display: inline-block;\n  color: #fff;\n  z-index: 2;\n  letter-spacing: 10px;\n\n  /* Bright things in dark environments usually cast that light, giving off a glow */\n  filter: drop-shadow(0 1px 3px);\n}\n\n.about {\n  color: #fff;\n  z-index: 2;\n  letter-spacing: 10px;\n\n  /* Bright things in dark environments usually cast that light, giving off a glow */\n  filter: drop-shadow(0 1px 3px);\n}\n\n.layers {\n  position: relative;\n}\n\n.layers::before,\n.layers::after {\n  content: attr(data-text);\n  position: absolute;\n  width: 110%;\n  z-index: -1;\n}\n\n.layers::before {\n  top: 10px;\n  left: 15px;\n  color: #e0287d;\n}\n\n.layers::after {\n  top: 5px;\n  left: -10px;\n  color: #1bc7fb;\n}\n\n.paths {\n  animation: paths 5s step-end infinite;\n}\n\n@keyframes paths {\n  0% {\n    clip-path: polygon(\n      0% 43%,\n      83% 43%,\n      83% 22%,\n      23% 22%,\n      23% 24%,\n      91% 24%,\n      91% 26%,\n      18% 26%,\n      18% 83%,\n      29% 83%,\n      29% 17%,\n      41% 17%,\n      41% 39%,\n      18% 39%,\n      18% 82%,\n      54% 82%,\n      54% 88%,\n      19% 88%,\n      19% 4%,\n      39% 4%,\n      39% 14%,\n      76% 14%,\n      76% 52%,\n      23% 52%,\n      23% 35%,\n      19% 35%,\n      19% 8%,\n      36% 8%,\n      36% 31%,\n      73% 31%,\n      73% 16%,\n      1% 16%,\n      1% 56%,\n      50% 56%,\n      50% 8%\n    );\n  }\n\n  5% {\n    clip-path: polygon(\n      0% 29%,\n      44% 29%,\n      44% 83%,\n      94% 83%,\n      94% 56%,\n      11% 56%,\n      11% 64%,\n      94% 64%,\n      94% 70%,\n      88% 70%,\n      88% 32%,\n      18% 32%,\n      18% 96%,\n      10% 96%,\n      10% 62%,\n      9% 62%,\n      9% 84%,\n      68% 84%,\n      68% 50%,\n      52% 50%,\n      52% 55%,\n      35% 55%,\n      35% 87%,\n      25% 87%,\n      25% 39%,\n      15% 39%,\n      15% 88%,\n      52% 88%\n    );\n  }\n\n  30% {\n    clip-path: polygon(\n      0% 53%,\n      93% 53%,\n      93% 62%,\n      68% 62%,\n      68% 37%,\n      97% 37%,\n      97% 89%,\n      13% 89%,\n      13% 45%,\n      51% 45%,\n      51% 88%,\n      17% 88%,\n      17% 54%,\n      81% 54%,\n      81% 75%,\n      79% 75%,\n      79% 76%,\n      38% 76%,\n      38% 28%,\n      61% 28%,\n      61% 12%,\n      55% 12%,\n      55% 62%,\n      68% 62%,\n      68% 51%,\n      0% 51%,\n      0% 92%,\n      63% 92%,\n      63% 4%,\n      65% 4%\n    );\n  }\n\n  45% {\n    clip-path: polygon(\n      0% 33%,\n      2% 33%,\n      2% 69%,\n      58% 69%,\n      58% 94%,\n      55% 94%,\n      55% 25%,\n      33% 25%,\n      33% 85%,\n      16% 85%,\n      16% 19%,\n      5% 19%,\n      5% 20%,\n      79% 20%,\n      79% 96%,\n      93% 96%,\n      93% 50%,\n      5% 50%,\n      5% 74%,\n      55% 74%,\n      55% 57%,\n      96% 57%,\n      96% 59%,\n      87% 59%,\n      87% 65%,\n      82% 65%,\n      82% 39%,\n      63% 39%,\n      63% 92%,\n      4% 92%,\n      4% 36%,\n      24% 36%,\n      24% 70%,\n      1% 70%,\n      1% 43%,\n      15% 43%,\n      15% 28%,\n      23% 28%,\n      23% 71%,\n      90% 71%,\n      90% 86%,\n      97% 86%,\n      97% 1%,\n      60% 1%,\n      60% 67%,\n      71% 67%,\n      71% 91%,\n      17% 91%,\n      17% 14%,\n      39% 14%,\n      39% 30%,\n      58% 30%,\n      58% 11%,\n      52% 11%,\n      52% 83%,\n      68% 83%\n    );\n  }\n\n  76% {\n    clip-path: polygon(\n      0% 26%,\n      15% 26%,\n      15% 73%,\n      72% 73%,\n      72% 70%,\n      77% 70%,\n      77% 75%,\n      8% 75%,\n      8% 42%,\n      4% 42%,\n      4% 61%,\n      17% 61%,\n      17% 12%,\n      26% 12%,\n      26% 63%,\n      73% 63%,\n      73% 43%,\n      90% 43%,\n      90% 67%,\n      50% 67%,\n      50% 41%,\n      42% 41%,\n      42% 46%,\n      50% 46%,\n      50% 84%,\n      96% 84%,\n      96% 78%,\n      49% 78%,\n      49% 25%,\n      63% 25%,\n      63% 14%\n    );\n  }\n\n  90% {\n    clip-path: polygon(\n      0% 41%,\n      13% 41%,\n      13% 6%,\n      87% 6%,\n      87% 93%,\n      10% 93%,\n      10% 13%,\n      89% 13%,\n      89% 6%,\n      3% 6%,\n      3% 8%,\n      16% 8%,\n      16% 79%,\n      0% 79%,\n      0% 99%,\n      92% 99%,\n      92% 90%,\n      5% 90%,\n      5% 60%,\n      0% 60%,\n      0% 48%,\n      89% 48%,\n      89% 13%,\n      80% 13%,\n      80% 43%,\n      95% 43%,\n      95% 19%,\n      80% 19%,\n      80% 85%,\n      38% 85%,\n      38% 62%\n    );\n  }\n\n  1%,\n  7%,\n  33%,\n  47%,\n  78%,\n  93% {\n    clip-path: none;\n  }\n}\n\n.glitch span {\n  animation: paths 5s step-end infinite;\n}\n\n.glitch::before {\n  animation: paths 5s step-end infinite, opacity 5s step-end infinite,\n    font 8s step-end infinite, movement 10s step-end infinite;\n}\n\n.glitch::after {\n  animation: paths 5s step-end infinite, opacity 5s step-end infinite,\n    font 7s step-end infinite, movement 8s step-end infinite;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/home.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/home.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".home-section {\n  display: grid;\n  place-content: center;\n}\n\n.home-section h1 {\n  margin: 10px 0px;\n  padding: 20px 20px;\n  border-radius: 24px;\n  text-align: center;\n}\n\n.home-section div {\n  \n  margin: 10px 0px;\n  padding: 20px 20px;\n  display: grid;\n  place-content: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/home.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;;EAEE,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,qBAAqB;AACvB","sourcesContent":[".home-section {\n  display: grid;\n  place-content: center;\n}\n\n.home-section h1 {\n  margin: 10px 0px;\n  padding: 20px 20px;\n  border-radius: 24px;\n  text-align: center;\n}\n\n.home-section div {\n  \n  margin: 10px 0px;\n  padding: 20px 20px;\n  display: grid;\n  place-content: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menu-items {\n  margin: 20px 0px;\n\n  display: grid;\n  place-content: center;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.menu-item {\n  padding: 15px 10px;\n  backdrop-filter: blur(8px);\n  border-radius: 24px;\n}\n\n.menu-item>img {\n  width: 100%;\n}\n\n.menu-title {\n  margin: 10px 0px;\n  padding-bottom: 10px;\n  border-bottom: solid 2px white;\n}\n\n@media (max-width: 600px) {\n  .menu-items {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/menu.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;;EAEhB,aAAa;EACb,qBAAqB;EACrB,qCAAqC;EACrC,kCAAkC;EAClC,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,0BAA0B;EAC1B,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,8BAA8B;AAChC;;AAEA;EACE;IACE,0BAA0B;IAC1B,wBAAwB;EAC1B;AACF","sourcesContent":[".menu-items {\n  margin: 20px 0px;\n\n  display: grid;\n  place-content: center;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.menu-item {\n  padding: 15px 10px;\n  backdrop-filter: blur(8px);\n  border-radius: 24px;\n}\n\n.menu-item>img {\n  width: 100%;\n}\n\n.menu-title {\n  margin: 10px 0px;\n  padding-bottom: 10px;\n  border-bottom: solid 2px white;\n}\n\n@media (max-width: 600px) {\n  .menu-items {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/fonts/VCR_MONO.ttf */ "./src/fonts/VCR_MONO.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/imgs/cafe-background.gif */ "./src/imgs/cafe-background.gif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'VCR';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n}\n\n*, *::before, *::after {\n  margin: 0px;\n  padding: 0px;\n  font-family: 'VCR', monospace;\n  color: #fff;\n}\n\nbody {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: center;\n}\n\n.navbar ul {\n  height: 5vh;\n\n  background-color: hsl(0, 0%, 0%, .5);\n\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.navbar li {\n  padding: 10px 10px;\n\n  color: white;\n  font-size: 24px;\n  list-style-type: none;\n}\n\n.navbar li:hover {\n  background-color: grey;\n  border-radius: 12px;\n}\n\n#content>section {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,+DAAsD;AACxD;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,yDAAsD;EACtD,4BAA4B;EAC5B,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,WAAW;;EAEX,oCAAoC;;EAEpC,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;;EAElB,YAAY;EACZ,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;AACrB","sourcesContent":["@font-face {\n  font-family: 'VCR';\n  src: url('/src/fonts/VCR_MONO.ttf') format('truetype');\n}\n\n*, *::before, *::after {\n  margin: 0px;\n  padding: 0px;\n  font-family: 'VCR', monospace;\n  color: #fff;\n}\n\nbody {\n  background-image: url('/src/imgs/cafe-background.gif');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: center;\n}\n\n.navbar ul {\n  height: 5vh;\n\n  background-color: hsl(0, 0%, 0%, .5);\n\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.navbar li {\n  padding: 10px 10px;\n\n  color: white;\n  font-size: 24px;\n  list-style-type: none;\n}\n\n.navbar li:hover {\n  background-color: grey;\n  border-radius: 12px;\n}\n\n#content>section {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/glitch.css":
/*!*******************************!*\
  !*** ./src/styles/glitch.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_glitch_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./glitch.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/glitch.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_glitch_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_glitch_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_glitch_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_glitch_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/home.css":
/*!*****************************!*\
  !*** ./src/styles/home.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/menu.css":
/*!*****************************!*\
  !*** ./src/styles/menu.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });
function loadContact() {
  const contact = document.createElement('section');
  contact.classList.add('contact-section');

  return contact;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/home.css */ "./src/styles/home.css");
/* harmony import */ var _styles_glitch_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/glitch.css */ "./src/styles/glitch.css");



function loadHome() {
  const home = document.createElement('section');
  home.classList.add('home-section');

  // Header Code
  const header = document.createElement('h1');
  header.classList.add('hero');
  header.classList.add('glitch');
  header.classList.add('layers');

  const span = document.createElement('span');
  span.innerHTML = "Lo-Fi Cafe";

  header.appendChild(span);

  // Iframe Code
  const videoPlayer = document.createElement('div');
  videoPlayer.innerHTML = "<iframe width='560' height='315' src='https://www.youtube.com/embed/5qap5aO4i9A' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
  
  // About Paragraph Code
  const about = document.createElement('h2');
  about.classList.add('about');
  about.classList.add('glitch');
  about.classList.add('layers');

  const aboutSpan = document.createElement('span');
  aboutSpan.innerHTML = "Serving up some fresh beats...";
  const aboutDiv = document.createElement('div');
  aboutDiv.innerHTML = "Come in";

  about.appendChild(aboutSpan);
  about.appendChild(aboutDiv);

  home.appendChild(header);
  home.appendChild(videoPlayer);
  home.appendChild(about);

  return home;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/menu.css */ "./src/styles/menu.css");
/* harmony import */ var _imgs_ramen_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/ramen.gif */ "./src/imgs/ramen.gif");
/* harmony import */ var _imgs_steak_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/steak.gif */ "./src/imgs/steak.gif");
/* harmony import */ var _imgs_spaget_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/spaget.gif */ "./src/imgs/spaget.gif");
/* harmony import */ var _imgs_fried_rice_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgs/fried_rice.gif */ "./src/imgs/fried_rice.gif");








const menuImages = [_imgs_ramen_gif__WEBPACK_IMPORTED_MODULE_2__, _imgs_steak_gif__WEBPACK_IMPORTED_MODULE_3__, _imgs_spaget_gif__WEBPACK_IMPORTED_MODULE_4__, _imgs_fried_rice_gif__WEBPACK_IMPORTED_MODULE_5__];
const menuTitles = ['Ramen', 'Steak', 'Spagetti', 'Fried Rice'];
const menuDescriptions = [
  "Ramen because ... Ramen",
  "Steak that looks way better than a steak should",
  "Is spagetti japanese?",
  "Totally realistic egg physics",
];

function loadMenu() {
  const menu = document.createElement('section');
  menu.classList.add('menu-section');

  // Header Code
  const header = document.createElement('h1');
  header.classList.add('hero');
  header.classList.add('glitch');
  header.classList.add('layers');

  const span = document.createElement('span');
  span.innerHTML = "Lo-Fi Menu";

  header.appendChild(span);
  menu.appendChild(header);

  // Menu Items Code
  const menuItems = document.createElement('div');
  menuItems.classList.add('menu-items');

  for (let i=0; i<menuImages.length; i++) {
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    let menuPicture = new Image();
    menuPicture.src = menuImages[i];
    menuPicture.classList.add('menu-picture');

    let menuTitle = document.createElement('h2');
    menuTitle.classList.add('menu-title');
    menuTitle.innerHTML = menuTitles[i];

    let menuDesc = document.createElement('p');
    menuDesc.classList.add('menu-desc');
    menuDesc.innerHTML = menuDescriptions[i];

    menuItem.appendChild(menuPicture);
    menuItem.appendChild(menuTitle);
    menuItem.appendChild(menuDesc);

    menuItems.appendChild(menuItem);
  };

  menu.appendChild(menuItems);

  return menu;
}

/***/ }),

/***/ "./src/fonts/VCR_MONO.ttf":
/*!********************************!*\
  !*** ./src/fonts/VCR_MONO.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10cf96d54dcd9af0486c.ttf";

/***/ }),

/***/ "./src/imgs/cafe-background.gif":
/*!**************************************!*\
  !*** ./src/imgs/cafe-background.gif ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95fba90d1ce2d5c5fea4.gif";

/***/ }),

/***/ "./src/imgs/fried_rice.gif":
/*!*********************************!*\
  !*** ./src/imgs/fried_rice.gif ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d490894ced24c23e7ecb.gif";

/***/ }),

/***/ "./src/imgs/ramen.gif":
/*!****************************!*\
  !*** ./src/imgs/ramen.gif ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "271684b89bdf62fffb8a.gif";

/***/ }),

/***/ "./src/imgs/spaget.gif":
/*!*****************************!*\
  !*** ./src/imgs/spaget.gif ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b73040d9aae5d462b675.gif";

/***/ }),

/***/ "./src/imgs/steak.gif":
/*!****************************!*\
  !*** ./src/imgs/steak.gif ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "20d23af732374177f8ea.gif";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");






function createNavbar() {
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');

  // Create ul element for navbar
  const navlist = document.createElement('ul');

  // Create li elements with anchors for navbar
  let navlink1 = document.createElement('li');
  navlink1.innerHTML = "Home";
  navlink1.addEventListener('click', () => {
    if (content.firstChild.classList == 'home-section') return

    content.firstChild.remove();
    content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
  });

  let navlink2 = document.createElement('li');
  navlink2.innerHTML = "Menu";
  navlink2.addEventListener('click', () => {
    if (content.firstChild.classList == 'menu-section') return

    content.firstChild.remove();
    content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
  });

  let navlink3 = document.createElement('li');
  navlink3.innerHTML = "Contact";
  navlink3.addEventListener('click', () => {
    if(content.firstChild.classList == 'contact-section') return

    content.firstChild.remove();
    content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
  });

  // Append navlinks to navlist
  navlist.appendChild(navlink1);
  navlist.appendChild(navlink2);
  navlist.appendChild(navlink3);
  
  navbar.appendChild(navlist);

  return navbar;
}

document.body.appendChild(createNavbar());

const content = document.createElement('div');
content.setAttribute('id', 'content');

content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());

document.body.appendChild(content);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLG9EQUFRO0FBQ2hDLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isb0RBQVE7QUFDaEMsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qix1REFBVztBQUNuQyxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLG9EQUFROztBQUU1QixtQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvZ2xpdGNoLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL2hvbWUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvbWVudS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvZ2xpdGNoLmNzcz84OTIzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvaG9tZS5jc3M/NGI1MSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL21lbnUuY3NzPzcwMGEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImgxLFxcbmgyIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlcm8ge1xcbiAgZm9udC1zaXplOiBjbGFtcCg0MHB4LCAxMHZ3LCAxMDBweCk7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMjtcXG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xcblxcbiAgLyogQnJpZ2h0IHRoaW5ncyBpbiBkYXJrIGVudmlyb25tZW50cyB1c3VhbGx5IGNhc3QgdGhhdCBsaWdodCwgZ2l2aW5nIG9mZiBhIGdsb3cgKi9cXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxcHggM3B4KTtcXG59XFxuXFxuLmFib3V0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMjtcXG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xcblxcbiAgLyogQnJpZ2h0IHRoaW5ncyBpbiBkYXJrIGVudmlyb25tZW50cyB1c3VhbGx5IGNhc3QgdGhhdCBsaWdodCwgZ2l2aW5nIG9mZiBhIGdsb3cgKi9cXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxcHggM3B4KTtcXG59XFxuXFxuLmxheWVycyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5sYXllcnM6OmJlZm9yZSxcXG4ubGF5ZXJzOjphZnRlciB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTEwJTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ubGF5ZXJzOjpiZWZvcmUge1xcbiAgdG9wOiAxMHB4O1xcbiAgbGVmdDogMTVweDtcXG4gIGNvbG9yOiAjZTAyODdkO1xcbn1cXG5cXG4ubGF5ZXJzOjphZnRlciB7XFxuICB0b3A6IDVweDtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgY29sb3I6ICMxYmM3ZmI7XFxufVxcblxcbi5wYXRocyB7XFxuICBhbmltYXRpb246IHBhdGhzIDVzIHN0ZXAtZW5kIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHBhdGhzIHtcXG4gIDAlIHtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcbiAgICAgIDAlIDQzJSxcXG4gICAgICA4MyUgNDMlLFxcbiAgICAgIDgzJSAyMiUsXFxuICAgICAgMjMlIDIyJSxcXG4gICAgICAyMyUgMjQlLFxcbiAgICAgIDkxJSAyNCUsXFxuICAgICAgOTElIDI2JSxcXG4gICAgICAxOCUgMjYlLFxcbiAgICAgIDE4JSA4MyUsXFxuICAgICAgMjklIDgzJSxcXG4gICAgICAyOSUgMTclLFxcbiAgICAgIDQxJSAxNyUsXFxuICAgICAgNDElIDM5JSxcXG4gICAgICAxOCUgMzklLFxcbiAgICAgIDE4JSA4MiUsXFxuICAgICAgNTQlIDgyJSxcXG4gICAgICA1NCUgODglLFxcbiAgICAgIDE5JSA4OCUsXFxuICAgICAgMTklIDQlLFxcbiAgICAgIDM5JSA0JSxcXG4gICAgICAzOSUgMTQlLFxcbiAgICAgIDc2JSAxNCUsXFxuICAgICAgNzYlIDUyJSxcXG4gICAgICAyMyUgNTIlLFxcbiAgICAgIDIzJSAzNSUsXFxuICAgICAgMTklIDM1JSxcXG4gICAgICAxOSUgOCUsXFxuICAgICAgMzYlIDglLFxcbiAgICAgIDM2JSAzMSUsXFxuICAgICAgNzMlIDMxJSxcXG4gICAgICA3MyUgMTYlLFxcbiAgICAgIDElIDE2JSxcXG4gICAgICAxJSA1NiUsXFxuICAgICAgNTAlIDU2JSxcXG4gICAgICA1MCUgOCVcXG4gICAgKTtcXG4gIH1cXG5cXG4gIDUlIHtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcbiAgICAgIDAlIDI5JSxcXG4gICAgICA0NCUgMjklLFxcbiAgICAgIDQ0JSA4MyUsXFxuICAgICAgOTQlIDgzJSxcXG4gICAgICA5NCUgNTYlLFxcbiAgICAgIDExJSA1NiUsXFxuICAgICAgMTElIDY0JSxcXG4gICAgICA5NCUgNjQlLFxcbiAgICAgIDk0JSA3MCUsXFxuICAgICAgODglIDcwJSxcXG4gICAgICA4OCUgMzIlLFxcbiAgICAgIDE4JSAzMiUsXFxuICAgICAgMTglIDk2JSxcXG4gICAgICAxMCUgOTYlLFxcbiAgICAgIDEwJSA2MiUsXFxuICAgICAgOSUgNjIlLFxcbiAgICAgIDklIDg0JSxcXG4gICAgICA2OCUgODQlLFxcbiAgICAgIDY4JSA1MCUsXFxuICAgICAgNTIlIDUwJSxcXG4gICAgICA1MiUgNTUlLFxcbiAgICAgIDM1JSA1NSUsXFxuICAgICAgMzUlIDg3JSxcXG4gICAgICAyNSUgODclLFxcbiAgICAgIDI1JSAzOSUsXFxuICAgICAgMTUlIDM5JSxcXG4gICAgICAxNSUgODglLFxcbiAgICAgIDUyJSA4OCVcXG4gICAgKTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgICAwJSA1MyUsXFxuICAgICAgOTMlIDUzJSxcXG4gICAgICA5MyUgNjIlLFxcbiAgICAgIDY4JSA2MiUsXFxuICAgICAgNjglIDM3JSxcXG4gICAgICA5NyUgMzclLFxcbiAgICAgIDk3JSA4OSUsXFxuICAgICAgMTMlIDg5JSxcXG4gICAgICAxMyUgNDUlLFxcbiAgICAgIDUxJSA0NSUsXFxuICAgICAgNTElIDg4JSxcXG4gICAgICAxNyUgODglLFxcbiAgICAgIDE3JSA1NCUsXFxuICAgICAgODElIDU0JSxcXG4gICAgICA4MSUgNzUlLFxcbiAgICAgIDc5JSA3NSUsXFxuICAgICAgNzklIDc2JSxcXG4gICAgICAzOCUgNzYlLFxcbiAgICAgIDM4JSAyOCUsXFxuICAgICAgNjElIDI4JSxcXG4gICAgICA2MSUgMTIlLFxcbiAgICAgIDU1JSAxMiUsXFxuICAgICAgNTUlIDYyJSxcXG4gICAgICA2OCUgNjIlLFxcbiAgICAgIDY4JSA1MSUsXFxuICAgICAgMCUgNTElLFxcbiAgICAgIDAlIDkyJSxcXG4gICAgICA2MyUgOTIlLFxcbiAgICAgIDYzJSA0JSxcXG4gICAgICA2NSUgNCVcXG4gICAgKTtcXG4gIH1cXG5cXG4gIDQ1JSB7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgICAwJSAzMyUsXFxuICAgICAgMiUgMzMlLFxcbiAgICAgIDIlIDY5JSxcXG4gICAgICA1OCUgNjklLFxcbiAgICAgIDU4JSA5NCUsXFxuICAgICAgNTUlIDk0JSxcXG4gICAgICA1NSUgMjUlLFxcbiAgICAgIDMzJSAyNSUsXFxuICAgICAgMzMlIDg1JSxcXG4gICAgICAxNiUgODUlLFxcbiAgICAgIDE2JSAxOSUsXFxuICAgICAgNSUgMTklLFxcbiAgICAgIDUlIDIwJSxcXG4gICAgICA3OSUgMjAlLFxcbiAgICAgIDc5JSA5NiUsXFxuICAgICAgOTMlIDk2JSxcXG4gICAgICA5MyUgNTAlLFxcbiAgICAgIDUlIDUwJSxcXG4gICAgICA1JSA3NCUsXFxuICAgICAgNTUlIDc0JSxcXG4gICAgICA1NSUgNTclLFxcbiAgICAgIDk2JSA1NyUsXFxuICAgICAgOTYlIDU5JSxcXG4gICAgICA4NyUgNTklLFxcbiAgICAgIDg3JSA2NSUsXFxuICAgICAgODIlIDY1JSxcXG4gICAgICA4MiUgMzklLFxcbiAgICAgIDYzJSAzOSUsXFxuICAgICAgNjMlIDkyJSxcXG4gICAgICA0JSA5MiUsXFxuICAgICAgNCUgMzYlLFxcbiAgICAgIDI0JSAzNiUsXFxuICAgICAgMjQlIDcwJSxcXG4gICAgICAxJSA3MCUsXFxuICAgICAgMSUgNDMlLFxcbiAgICAgIDE1JSA0MyUsXFxuICAgICAgMTUlIDI4JSxcXG4gICAgICAyMyUgMjglLFxcbiAgICAgIDIzJSA3MSUsXFxuICAgICAgOTAlIDcxJSxcXG4gICAgICA5MCUgODYlLFxcbiAgICAgIDk3JSA4NiUsXFxuICAgICAgOTclIDElLFxcbiAgICAgIDYwJSAxJSxcXG4gICAgICA2MCUgNjclLFxcbiAgICAgIDcxJSA2NyUsXFxuICAgICAgNzElIDkxJSxcXG4gICAgICAxNyUgOTElLFxcbiAgICAgIDE3JSAxNCUsXFxuICAgICAgMzklIDE0JSxcXG4gICAgICAzOSUgMzAlLFxcbiAgICAgIDU4JSAzMCUsXFxuICAgICAgNTglIDExJSxcXG4gICAgICA1MiUgMTElLFxcbiAgICAgIDUyJSA4MyUsXFxuICAgICAgNjglIDgzJVxcbiAgICApO1xcbiAgfVxcblxcbiAgNzYlIHtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcbiAgICAgIDAlIDI2JSxcXG4gICAgICAxNSUgMjYlLFxcbiAgICAgIDE1JSA3MyUsXFxuICAgICAgNzIlIDczJSxcXG4gICAgICA3MiUgNzAlLFxcbiAgICAgIDc3JSA3MCUsXFxuICAgICAgNzclIDc1JSxcXG4gICAgICA4JSA3NSUsXFxuICAgICAgOCUgNDIlLFxcbiAgICAgIDQlIDQyJSxcXG4gICAgICA0JSA2MSUsXFxuICAgICAgMTclIDYxJSxcXG4gICAgICAxNyUgMTIlLFxcbiAgICAgIDI2JSAxMiUsXFxuICAgICAgMjYlIDYzJSxcXG4gICAgICA3MyUgNjMlLFxcbiAgICAgIDczJSA0MyUsXFxuICAgICAgOTAlIDQzJSxcXG4gICAgICA5MCUgNjclLFxcbiAgICAgIDUwJSA2NyUsXFxuICAgICAgNTAlIDQxJSxcXG4gICAgICA0MiUgNDElLFxcbiAgICAgIDQyJSA0NiUsXFxuICAgICAgNTAlIDQ2JSxcXG4gICAgICA1MCUgODQlLFxcbiAgICAgIDk2JSA4NCUsXFxuICAgICAgOTYlIDc4JSxcXG4gICAgICA0OSUgNzglLFxcbiAgICAgIDQ5JSAyNSUsXFxuICAgICAgNjMlIDI1JSxcXG4gICAgICA2MyUgMTQlXFxuICAgICk7XFxuICB9XFxuXFxuICA5MCUge1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgICAgMCUgNDElLFxcbiAgICAgIDEzJSA0MSUsXFxuICAgICAgMTMlIDYlLFxcbiAgICAgIDg3JSA2JSxcXG4gICAgICA4NyUgOTMlLFxcbiAgICAgIDEwJSA5MyUsXFxuICAgICAgMTAlIDEzJSxcXG4gICAgICA4OSUgMTMlLFxcbiAgICAgIDg5JSA2JSxcXG4gICAgICAzJSA2JSxcXG4gICAgICAzJSA4JSxcXG4gICAgICAxNiUgOCUsXFxuICAgICAgMTYlIDc5JSxcXG4gICAgICAwJSA3OSUsXFxuICAgICAgMCUgOTklLFxcbiAgICAgIDkyJSA5OSUsXFxuICAgICAgOTIlIDkwJSxcXG4gICAgICA1JSA5MCUsXFxuICAgICAgNSUgNjAlLFxcbiAgICAgIDAlIDYwJSxcXG4gICAgICAwJSA0OCUsXFxuICAgICAgODklIDQ4JSxcXG4gICAgICA4OSUgMTMlLFxcbiAgICAgIDgwJSAxMyUsXFxuICAgICAgODAlIDQzJSxcXG4gICAgICA5NSUgNDMlLFxcbiAgICAgIDk1JSAxOSUsXFxuICAgICAgODAlIDE5JSxcXG4gICAgICA4MCUgODUlLFxcbiAgICAgIDM4JSA4NSUsXFxuICAgICAgMzglIDYyJVxcbiAgICApO1xcbiAgfVxcblxcbiAgMSUsXFxuICA3JSxcXG4gIDMzJSxcXG4gIDQ3JSxcXG4gIDc4JSxcXG4gIDkzJSB7XFxuICAgIGNsaXAtcGF0aDogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmdsaXRjaCBzcGFuIHtcXG4gIGFuaW1hdGlvbjogcGF0aHMgNXMgc3RlcC1lbmQgaW5maW5pdGU7XFxufVxcblxcbi5nbGl0Y2g6OmJlZm9yZSB7XFxuICBhbmltYXRpb246IHBhdGhzIDVzIHN0ZXAtZW5kIGluZmluaXRlLCBvcGFjaXR5IDVzIHN0ZXAtZW5kIGluZmluaXRlLFxcbiAgICBmb250IDhzIHN0ZXAtZW5kIGluZmluaXRlLCBtb3ZlbWVudCAxMHMgc3RlcC1lbmQgaW5maW5pdGU7XFxufVxcblxcbi5nbGl0Y2g6OmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogcGF0aHMgNXMgc3RlcC1lbmQgaW5maW5pdGUsIG9wYWNpdHkgNXMgc3RlcC1lbmQgaW5maW5pdGUsXFxuICAgIGZvbnQgN3Mgc3RlcC1lbmQgaW5maW5pdGUsIG1vdmVtZW50IDhzIHN0ZXAtZW5kIGluZmluaXRlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dsaXRjaC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFVBQVU7RUFDVixvQkFBb0I7O0VBRXBCLGtGQUFrRjtFQUNsRiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLG9CQUFvQjs7RUFFcEIsa0ZBQWtGO0VBQ2xGLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRTtJQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FvQ0M7RUFDSDs7RUFFQTtJQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTZCQztFQUNIOztFQUVBO0lBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0ErQkM7RUFDSDs7RUFFQTtJQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5REM7RUFDSDs7RUFFQTtJQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdDQztFQUNIOztFQUVBO0lBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBZ0NDO0VBQ0g7O0VBRUE7Ozs7OztJQU1FLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFOzZEQUMyRDtBQUM3RDs7QUFFQTtFQUNFOzREQUMwRDtBQUM1RFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJoMSxcXG5oMiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5oZXJvIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoNDBweCwgMTB2dywgMTAwcHgpO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHotaW5kZXg6IDI7XFxuICBsZXR0ZXItc3BhY2luZzogMTBweDtcXG5cXG4gIC8qIEJyaWdodCB0aGluZ3MgaW4gZGFyayBlbnZpcm9ubWVudHMgdXN1YWxseSBjYXN0IHRoYXQgbGlnaHQsIGdpdmluZyBvZmYgYSBnbG93ICovXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDNweCk7XFxufVxcblxcbi5hYm91dCB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHotaW5kZXg6IDI7XFxuICBsZXR0ZXItc3BhY2luZzogMTBweDtcXG5cXG4gIC8qIEJyaWdodCB0aGluZ3MgaW4gZGFyayBlbnZpcm9ubWVudHMgdXN1YWxseSBjYXN0IHRoYXQgbGlnaHQsIGdpdmluZyBvZmYgYSBnbG93ICovXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDNweCk7XFxufVxcblxcbi5sYXllcnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubGF5ZXJzOjpiZWZvcmUsXFxuLmxheWVyczo6YWZ0ZXIge1xcbiAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDExMCU7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmxheWVyczo6YmVmb3JlIHtcXG4gIHRvcDogMTBweDtcXG4gIGxlZnQ6IDE1cHg7XFxuICBjb2xvcjogI2UwMjg3ZDtcXG59XFxuXFxuLmxheWVyczo6YWZ0ZXIge1xcbiAgdG9wOiA1cHg7XFxuICBsZWZ0OiAtMTBweDtcXG4gIGNvbG9yOiAjMWJjN2ZiO1xcbn1cXG5cXG4ucGF0aHMge1xcbiAgYW5pbWF0aW9uOiBwYXRocyA1cyBzdGVwLWVuZCBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBwYXRocyB7XFxuICAwJSB7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgICAwJSA0MyUsXFxuICAgICAgODMlIDQzJSxcXG4gICAgICA4MyUgMjIlLFxcbiAgICAgIDIzJSAyMiUsXFxuICAgICAgMjMlIDI0JSxcXG4gICAgICA5MSUgMjQlLFxcbiAgICAgIDkxJSAyNiUsXFxuICAgICAgMTglIDI2JSxcXG4gICAgICAxOCUgODMlLFxcbiAgICAgIDI5JSA4MyUsXFxuICAgICAgMjklIDE3JSxcXG4gICAgICA0MSUgMTclLFxcbiAgICAgIDQxJSAzOSUsXFxuICAgICAgMTglIDM5JSxcXG4gICAgICAxOCUgODIlLFxcbiAgICAgIDU0JSA4MiUsXFxuICAgICAgNTQlIDg4JSxcXG4gICAgICAxOSUgODglLFxcbiAgICAgIDE5JSA0JSxcXG4gICAgICAzOSUgNCUsXFxuICAgICAgMzklIDE0JSxcXG4gICAgICA3NiUgMTQlLFxcbiAgICAgIDc2JSA1MiUsXFxuICAgICAgMjMlIDUyJSxcXG4gICAgICAyMyUgMzUlLFxcbiAgICAgIDE5JSAzNSUsXFxuICAgICAgMTklIDglLFxcbiAgICAgIDM2JSA4JSxcXG4gICAgICAzNiUgMzElLFxcbiAgICAgIDczJSAzMSUsXFxuICAgICAgNzMlIDE2JSxcXG4gICAgICAxJSAxNiUsXFxuICAgICAgMSUgNTYlLFxcbiAgICAgIDUwJSA1NiUsXFxuICAgICAgNTAlIDglXFxuICAgICk7XFxuICB9XFxuXFxuICA1JSB7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgICAwJSAyOSUsXFxuICAgICAgNDQlIDI5JSxcXG4gICAgICA0NCUgODMlLFxcbiAgICAgIDk0JSA4MyUsXFxuICAgICAgOTQlIDU2JSxcXG4gICAgICAxMSUgNTYlLFxcbiAgICAgIDExJSA2NCUsXFxuICAgICAgOTQlIDY0JSxcXG4gICAgICA5NCUgNzAlLFxcbiAgICAgIDg4JSA3MCUsXFxuICAgICAgODglIDMyJSxcXG4gICAgICAxOCUgMzIlLFxcbiAgICAgIDE4JSA5NiUsXFxuICAgICAgMTAlIDk2JSxcXG4gICAgICAxMCUgNjIlLFxcbiAgICAgIDklIDYyJSxcXG4gICAgICA5JSA4NCUsXFxuICAgICAgNjglIDg0JSxcXG4gICAgICA2OCUgNTAlLFxcbiAgICAgIDUyJSA1MCUsXFxuICAgICAgNTIlIDU1JSxcXG4gICAgICAzNSUgNTUlLFxcbiAgICAgIDM1JSA4NyUsXFxuICAgICAgMjUlIDg3JSxcXG4gICAgICAyNSUgMzklLFxcbiAgICAgIDE1JSAzOSUsXFxuICAgICAgMTUlIDg4JSxcXG4gICAgICA1MiUgODglXFxuICAgICk7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgICAgMCUgNTMlLFxcbiAgICAgIDkzJSA1MyUsXFxuICAgICAgOTMlIDYyJSxcXG4gICAgICA2OCUgNjIlLFxcbiAgICAgIDY4JSAzNyUsXFxuICAgICAgOTclIDM3JSxcXG4gICAgICA5NyUgODklLFxcbiAgICAgIDEzJSA4OSUsXFxuICAgICAgMTMlIDQ1JSxcXG4gICAgICA1MSUgNDUlLFxcbiAgICAgIDUxJSA4OCUsXFxuICAgICAgMTclIDg4JSxcXG4gICAgICAxNyUgNTQlLFxcbiAgICAgIDgxJSA1NCUsXFxuICAgICAgODElIDc1JSxcXG4gICAgICA3OSUgNzUlLFxcbiAgICAgIDc5JSA3NiUsXFxuICAgICAgMzglIDc2JSxcXG4gICAgICAzOCUgMjglLFxcbiAgICAgIDYxJSAyOCUsXFxuICAgICAgNjElIDEyJSxcXG4gICAgICA1NSUgMTIlLFxcbiAgICAgIDU1JSA2MiUsXFxuICAgICAgNjglIDYyJSxcXG4gICAgICA2OCUgNTElLFxcbiAgICAgIDAlIDUxJSxcXG4gICAgICAwJSA5MiUsXFxuICAgICAgNjMlIDkyJSxcXG4gICAgICA2MyUgNCUsXFxuICAgICAgNjUlIDQlXFxuICAgICk7XFxuICB9XFxuXFxuICA0NSUge1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgICAgMCUgMzMlLFxcbiAgICAgIDIlIDMzJSxcXG4gICAgICAyJSA2OSUsXFxuICAgICAgNTglIDY5JSxcXG4gICAgICA1OCUgOTQlLFxcbiAgICAgIDU1JSA5NCUsXFxuICAgICAgNTUlIDI1JSxcXG4gICAgICAzMyUgMjUlLFxcbiAgICAgIDMzJSA4NSUsXFxuICAgICAgMTYlIDg1JSxcXG4gICAgICAxNiUgMTklLFxcbiAgICAgIDUlIDE5JSxcXG4gICAgICA1JSAyMCUsXFxuICAgICAgNzklIDIwJSxcXG4gICAgICA3OSUgOTYlLFxcbiAgICAgIDkzJSA5NiUsXFxuICAgICAgOTMlIDUwJSxcXG4gICAgICA1JSA1MCUsXFxuICAgICAgNSUgNzQlLFxcbiAgICAgIDU1JSA3NCUsXFxuICAgICAgNTUlIDU3JSxcXG4gICAgICA5NiUgNTclLFxcbiAgICAgIDk2JSA1OSUsXFxuICAgICAgODclIDU5JSxcXG4gICAgICA4NyUgNjUlLFxcbiAgICAgIDgyJSA2NSUsXFxuICAgICAgODIlIDM5JSxcXG4gICAgICA2MyUgMzklLFxcbiAgICAgIDYzJSA5MiUsXFxuICAgICAgNCUgOTIlLFxcbiAgICAgIDQlIDM2JSxcXG4gICAgICAyNCUgMzYlLFxcbiAgICAgIDI0JSA3MCUsXFxuICAgICAgMSUgNzAlLFxcbiAgICAgIDElIDQzJSxcXG4gICAgICAxNSUgNDMlLFxcbiAgICAgIDE1JSAyOCUsXFxuICAgICAgMjMlIDI4JSxcXG4gICAgICAyMyUgNzElLFxcbiAgICAgIDkwJSA3MSUsXFxuICAgICAgOTAlIDg2JSxcXG4gICAgICA5NyUgODYlLFxcbiAgICAgIDk3JSAxJSxcXG4gICAgICA2MCUgMSUsXFxuICAgICAgNjAlIDY3JSxcXG4gICAgICA3MSUgNjclLFxcbiAgICAgIDcxJSA5MSUsXFxuICAgICAgMTclIDkxJSxcXG4gICAgICAxNyUgMTQlLFxcbiAgICAgIDM5JSAxNCUsXFxuICAgICAgMzklIDMwJSxcXG4gICAgICA1OCUgMzAlLFxcbiAgICAgIDU4JSAxMSUsXFxuICAgICAgNTIlIDExJSxcXG4gICAgICA1MiUgODMlLFxcbiAgICAgIDY4JSA4MyVcXG4gICAgKTtcXG4gIH1cXG5cXG4gIDc2JSB7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgICAwJSAyNiUsXFxuICAgICAgMTUlIDI2JSxcXG4gICAgICAxNSUgNzMlLFxcbiAgICAgIDcyJSA3MyUsXFxuICAgICAgNzIlIDcwJSxcXG4gICAgICA3NyUgNzAlLFxcbiAgICAgIDc3JSA3NSUsXFxuICAgICAgOCUgNzUlLFxcbiAgICAgIDglIDQyJSxcXG4gICAgICA0JSA0MiUsXFxuICAgICAgNCUgNjElLFxcbiAgICAgIDE3JSA2MSUsXFxuICAgICAgMTclIDEyJSxcXG4gICAgICAyNiUgMTIlLFxcbiAgICAgIDI2JSA2MyUsXFxuICAgICAgNzMlIDYzJSxcXG4gICAgICA3MyUgNDMlLFxcbiAgICAgIDkwJSA0MyUsXFxuICAgICAgOTAlIDY3JSxcXG4gICAgICA1MCUgNjclLFxcbiAgICAgIDUwJSA0MSUsXFxuICAgICAgNDIlIDQxJSxcXG4gICAgICA0MiUgNDYlLFxcbiAgICAgIDUwJSA0NiUsXFxuICAgICAgNTAlIDg0JSxcXG4gICAgICA5NiUgODQlLFxcbiAgICAgIDk2JSA3OCUsXFxuICAgICAgNDklIDc4JSxcXG4gICAgICA0OSUgMjUlLFxcbiAgICAgIDYzJSAyNSUsXFxuICAgICAgNjMlIDE0JVxcbiAgICApO1xcbiAgfVxcblxcbiAgOTAlIHtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcbiAgICAgIDAlIDQxJSxcXG4gICAgICAxMyUgNDElLFxcbiAgICAgIDEzJSA2JSxcXG4gICAgICA4NyUgNiUsXFxuICAgICAgODclIDkzJSxcXG4gICAgICAxMCUgOTMlLFxcbiAgICAgIDEwJSAxMyUsXFxuICAgICAgODklIDEzJSxcXG4gICAgICA4OSUgNiUsXFxuICAgICAgMyUgNiUsXFxuICAgICAgMyUgOCUsXFxuICAgICAgMTYlIDglLFxcbiAgICAgIDE2JSA3OSUsXFxuICAgICAgMCUgNzklLFxcbiAgICAgIDAlIDk5JSxcXG4gICAgICA5MiUgOTklLFxcbiAgICAgIDkyJSA5MCUsXFxuICAgICAgNSUgOTAlLFxcbiAgICAgIDUlIDYwJSxcXG4gICAgICAwJSA2MCUsXFxuICAgICAgMCUgNDglLFxcbiAgICAgIDg5JSA0OCUsXFxuICAgICAgODklIDEzJSxcXG4gICAgICA4MCUgMTMlLFxcbiAgICAgIDgwJSA0MyUsXFxuICAgICAgOTUlIDQzJSxcXG4gICAgICA5NSUgMTklLFxcbiAgICAgIDgwJSAxOSUsXFxuICAgICAgODAlIDg1JSxcXG4gICAgICAzOCUgODUlLFxcbiAgICAgIDM4JSA2MiVcXG4gICAgKTtcXG4gIH1cXG5cXG4gIDElLFxcbiAgNyUsXFxuICAzMyUsXFxuICA0NyUsXFxuICA3OCUsXFxuICA5MyUge1xcbiAgICBjbGlwLXBhdGg6IG5vbmU7XFxuICB9XFxufVxcblxcbi5nbGl0Y2ggc3BhbiB7XFxuICBhbmltYXRpb246IHBhdGhzIDVzIHN0ZXAtZW5kIGluZmluaXRlO1xcbn1cXG5cXG4uZ2xpdGNoOjpiZWZvcmUge1xcbiAgYW5pbWF0aW9uOiBwYXRocyA1cyBzdGVwLWVuZCBpbmZpbml0ZSwgb3BhY2l0eSA1cyBzdGVwLWVuZCBpbmZpbml0ZSxcXG4gICAgZm9udCA4cyBzdGVwLWVuZCBpbmZpbml0ZSwgbW92ZW1lbnQgMTBzIHN0ZXAtZW5kIGluZmluaXRlO1xcbn1cXG5cXG4uZ2xpdGNoOjphZnRlciB7XFxuICBhbmltYXRpb246IHBhdGhzIDVzIHN0ZXAtZW5kIGluZmluaXRlLCBvcGFjaXR5IDVzIHN0ZXAtZW5kIGluZmluaXRlLFxcbiAgICBmb250IDdzIHN0ZXAtZW5kIGluZmluaXRlLCBtb3ZlbWVudCA4cyBzdGVwLWVuZCBpbmZpbml0ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmhvbWUtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uIGgxIHtcXG4gIG1hcmdpbjogMTBweCAwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uIGRpdiB7XFxuICBcXG4gIG1hcmdpbjogMTBweCAwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhvbWUtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uIGgxIHtcXG4gIG1hcmdpbjogMTBweCAwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uIGRpdiB7XFxuICBcXG4gIG1hcmdpbjogMTBweCAwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWVudS1pdGVtcyB7XFxuICBtYXJnaW46IDIwcHggMHB4O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG59XFxuXFxuLm1lbnUtaXRlbT5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tZW51LXRpdGxlIHtcXG4gIG1hcmdpbjogMTBweCAwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB3aGl0ZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAubWVudS1pdGVtcyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWVudS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7O0VBRWhCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLGtDQUFrQztFQUNsQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7SUFDMUIsd0JBQXdCO0VBQzFCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1lbnUtaXRlbXMge1xcbiAgbWFyZ2luOiAyMHB4IDBweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxufVxcblxcbi5tZW51LWl0ZW0+aW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWVudS10aXRsZSB7XFxuICBtYXJnaW46IDEwcHggMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggd2hpdGU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLm1lbnUtaXRlbXMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvVkNSX01PTk8udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9pbWdzL2NhZmUtYmFja2dyb3VuZC5naWZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1ZDUic7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdWQ1InLCBtb25vc3BhY2U7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5uYXZiYXIgdWwge1xcbiAgaGVpZ2h0OiA1dmg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDAlLCAuNSk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2YmFyIGxpIHtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG5cXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLm5hdmJhciBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuI2NvbnRlbnQ+c2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLCtEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlEQUFzRDtFQUN0RCw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7O0VBRVgsb0NBQW9DOztFQUVwQyxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjs7RUFFbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdWQ1InO1xcbiAgc3JjOiB1cmwoJy9zcmMvZm9udHMvVkNSX01PTk8udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdWQ1InLCBtb25vc3BhY2U7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zcmMvaW1ncy9jYWZlLWJhY2tncm91bmQuZ2lmJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLm5hdmJhciB1bCB7XFxuICBoZWlnaHQ6IDV2aDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMCUsIC41KTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXZiYXIgbGkge1xcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcblxcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4ubmF2YmFyIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4jY29udGVudD5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsaXRjaC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsaXRjaC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXNlY3Rpb24nKTtcblxuICByZXR1cm4gY29udGFjdDtcbn0iLCJpbXBvcnQgJy4vc3R5bGVzL2hvbWUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZ2xpdGNoLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUtc2VjdGlvbicpO1xuXG4gIC8vIEhlYWRlciBDb2RlXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdnbGl0Y2gnKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2xheWVycycpO1xuXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4uaW5uZXJIVE1MID0gXCJMby1GaSBDYWZlXCI7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gIC8vIElmcmFtZSBDb2RlXG4gIGNvbnN0IHZpZGVvUGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZpZGVvUGxheWVyLmlubmVySFRNTCA9IFwiPGlmcmFtZSB3aWR0aD0nNTYwJyBoZWlnaHQ9JzMxNScgc3JjPSdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC81cWFwNWFPNGk5QScgdGl0bGU9J1lvdVR1YmUgdmlkZW8gcGxheWVyJyBmcmFtZWJvcmRlcj0nMCcgYWxsb3c9J2FjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmUnIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cIlxuICBcbiAgLy8gQWJvdXQgUGFyYWdyYXBoIENvZGVcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuICBhYm91dC5jbGFzc0xpc3QuYWRkKCdnbGl0Y2gnKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnbGF5ZXJzJyk7XG5cbiAgY29uc3QgYWJvdXRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBhYm91dFNwYW4uaW5uZXJIVE1MID0gXCJTZXJ2aW5nIHVwIHNvbWUgZnJlc2ggYmVhdHMuLi5cIjtcbiAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXREaXYuaW5uZXJIVE1MID0gXCJDb21lIGluXCI7XG5cbiAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRTcGFuKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXREaXYpO1xuXG4gIGhvbWUuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgaG9tZS5hcHBlbmRDaGlsZCh2aWRlb1BsYXllcik7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuXG4gIHJldHVybiBob21lO1xufSIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvbWVudS5jc3MnO1xuXG5pbXBvcnQgUmFtZW4gZnJvbSAnLi9pbWdzL3JhbWVuLmdpZic7XG5pbXBvcnQgU3RlYWsgZnJvbSAnLi9pbWdzL3N0ZWFrLmdpZic7XG5pbXBvcnQgU3BhZ2V0IGZyb20gJy4vaW1ncy9zcGFnZXQuZ2lmJztcbmltcG9ydCBGcmllZFJpY2UgZnJvbSAnLi9pbWdzL2ZyaWVkX3JpY2UuZ2lmJztcblxuY29uc3QgbWVudUltYWdlcyA9IFtSYW1lbiwgU3RlYWssIFNwYWdldCwgRnJpZWRSaWNlXTtcbmNvbnN0IG1lbnVUaXRsZXMgPSBbJ1JhbWVuJywgJ1N0ZWFrJywgJ1NwYWdldHRpJywgJ0ZyaWVkIFJpY2UnXTtcbmNvbnN0IG1lbnVEZXNjcmlwdGlvbnMgPSBbXG4gIFwiUmFtZW4gYmVjYXVzZSAuLi4gUmFtZW5cIixcbiAgXCJTdGVhayB0aGF0IGxvb2tzIHdheSBiZXR0ZXIgdGhhbiBhIHN0ZWFrIHNob3VsZFwiLFxuICBcIklzIHNwYWdldHRpIGphcGFuZXNlP1wiLFxuICBcIlRvdGFsbHkgcmVhbGlzdGljIGVnZyBwaHlzaWNzXCIsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24nKTtcblxuICAvLyBIZWFkZXIgQ29kZVxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnZ2xpdGNoJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdsYXllcnMnKTtcblxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLmlubmVySFRNTCA9IFwiTG8tRmkgTWVudVwiO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChzcGFuKTtcbiAgbWVudS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIC8vIE1lbnUgSXRlbXMgQ29kZVxuICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW1zLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbXMnKTtcblxuICBmb3IgKGxldCBpPTA7IGk8bWVudUltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgbGV0IG1lbnVQaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgbWVudVBpY3R1cmUuc3JjID0gbWVudUltYWdlc1tpXTtcbiAgICBtZW51UGljdHVyZS5jbGFzc0xpc3QuYWRkKCdtZW51LXBpY3R1cmUnKTtcblxuICAgIGxldCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LXRpdGxlJyk7XG4gICAgbWVudVRpdGxlLmlubmVySFRNTCA9IG1lbnVUaXRsZXNbaV07XG5cbiAgICBsZXQgbWVudURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudURlc2MuY2xhc3NMaXN0LmFkZCgnbWVudS1kZXNjJyk7XG4gICAgbWVudURlc2MuaW5uZXJIVE1MID0gbWVudURlc2NyaXB0aW9uc1tpXTtcblxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVQaWN0dXJlKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVEZXNjKTtcblxuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gIH07XG5cbiAgbWVudS5hcHBlbmRDaGlsZChtZW51SXRlbXMpO1xuXG4gIHJldHVybiBtZW51O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xuXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVOYXZiYXIoKSB7XG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XG5cbiAgLy8gQ3JlYXRlIHVsIGVsZW1lbnQgZm9yIG5hdmJhclxuICBjb25zdCBuYXZsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAvLyBDcmVhdGUgbGkgZWxlbWVudHMgd2l0aCBhbmNob3JzIGZvciBuYXZiYXJcbiAgbGV0IG5hdmxpbmsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbmF2bGluazEuaW5uZXJIVE1MID0gXCJIb21lXCI7XG4gIG5hdmxpbmsxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChjb250ZW50LmZpcnN0Q2hpbGQuY2xhc3NMaXN0ID09ICdob21lLXNlY3Rpb24nKSByZXR1cm5cblxuICAgIGNvbnRlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxvYWRIb21lKCkpO1xuICB9KTtcblxuICBsZXQgbmF2bGluazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBuYXZsaW5rMi5pbm5lckhUTUwgPSBcIk1lbnVcIjtcbiAgbmF2bGluazIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGNvbnRlbnQuZmlyc3RDaGlsZC5jbGFzc0xpc3QgPT0gJ21lbnUtc2VjdGlvbicpIHJldHVyblxuXG4gICAgY29udGVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZE1lbnUoKSk7XG4gIH0pO1xuXG4gIGxldCBuYXZsaW5rMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIG5hdmxpbmszLmlubmVySFRNTCA9IFwiQ29udGFjdFwiO1xuICBuYXZsaW5rMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZihjb250ZW50LmZpcnN0Q2hpbGQuY2xhc3NMaXN0ID09ICdjb250YWN0LXNlY3Rpb24nKSByZXR1cm5cblxuICAgIGNvbnRlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxvYWRDb250YWN0KCkpO1xuICB9KTtcblxuICAvLyBBcHBlbmQgbmF2bGlua3MgdG8gbmF2bGlzdFxuICBuYXZsaXN0LmFwcGVuZENoaWxkKG5hdmxpbmsxKTtcbiAgbmF2bGlzdC5hcHBlbmRDaGlsZChuYXZsaW5rMik7XG4gIG5hdmxpc3QuYXBwZW5kQ2hpbGQobmF2bGluazMpO1xuICBcbiAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdmxpc3QpO1xuXG4gIHJldHVybiBuYXZiYXI7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2YmFyKCkpO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKGxvYWRIb21lKCkpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==