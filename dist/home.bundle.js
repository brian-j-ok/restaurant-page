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
___CSS_LOADER_EXPORT___.push([module.id, ".home-section {\n  display: grid;\n  place-content: center;\n}\n\n.home-section h1 {\n  margin: 10px 0px;\n  padding: 20px 20px;\n  border-radius: 24px;\n  text-align: center;\n\n  backdrop-filter: blur(8px);\n}\n\n.home-section div {\n  margin: 10px 0px;\n  padding: 20px 20px;\n  display: grid;\n  place-content: center;\n}\n\n.home-section h2 {\n  padding: 20px 20px 0px 20px;\n  backdrop-filter: blur(8px);\n  border-radius: 24px;\n}", "",{"version":3,"sources":["webpack://./src/styles/home.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;;EAElB,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;EAC3B,0BAA0B;EAC1B,mBAAmB;AACrB","sourcesContent":[".home-section {\n  display: grid;\n  place-content: center;\n}\n\n.home-section h1 {\n  margin: 10px 0px;\n  padding: 20px 20px;\n  border-radius: 24px;\n  text-align: center;\n\n  backdrop-filter: blur(8px);\n}\n\n.home-section div {\n  margin: 10px 0px;\n  padding: 20px 20px;\n  display: grid;\n  place-content: center;\n}\n\n.home-section h2 {\n  padding: 20px 20px 0px 20px;\n  backdrop-filter: blur(8px);\n  border-radius: 24px;\n}"],"sourceRoot":""}]);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkI7QUFDRTs7QUFFZDtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwrS0FBK0ssVUFBVSxpQkFBaUIsaUJBQWlCLFdBQVc7QUFDdE87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvZ2xpdGNoLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL2hvbWUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9nbGl0Y2guY3NzPzg5MjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9ob21lLmNzcz80YjUxIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaDEsXFxuaDIge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVybyB7XFxuICBmb250LXNpemU6IGNsYW1wKDQwcHgsIDEwdncsIDEwMHB4KTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6ICNmZmY7XFxuICB6LWluZGV4OiAyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxuXFxuICAvKiBCcmlnaHQgdGhpbmdzIGluIGRhcmsgZW52aXJvbm1lbnRzIHVzdWFsbHkgY2FzdCB0aGF0IGxpZ2h0LCBnaXZpbmcgb2ZmIGEgZ2xvdyAqL1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAzcHgpO1xcbn1cXG5cXG4uYWJvdXQge1xcbiAgY29sb3I6ICNmZmY7XFxuICB6LWluZGV4OiAyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxuXFxuICAvKiBCcmlnaHQgdGhpbmdzIGluIGRhcmsgZW52aXJvbm1lbnRzIHVzdWFsbHkgY2FzdCB0aGF0IGxpZ2h0LCBnaXZpbmcgb2ZmIGEgZ2xvdyAqL1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAzcHgpO1xcbn1cXG5cXG4ubGF5ZXJzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxheWVyczo6YmVmb3JlLFxcbi5sYXllcnM6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMTAlO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5sYXllcnM6OmJlZm9yZSB7XFxuICB0b3A6IDEwcHg7XFxuICBsZWZ0OiAxNXB4O1xcbiAgY29sb3I6ICNlMDI4N2Q7XFxufVxcblxcbi5sYXllcnM6OmFmdGVyIHtcXG4gIHRvcDogNXB4O1xcbiAgbGVmdDogLTEwcHg7XFxuICBjb2xvcjogIzFiYzdmYjtcXG59XFxuXFxuLnBhdGhzIHtcXG4gIGFuaW1hdGlvbjogcGF0aHMgNXMgc3RlcC1lbmQgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgcGF0aHMge1xcbiAgMCUge1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgICAgMCUgNDMlLFxcbiAgICAgIDgzJSA0MyUsXFxuICAgICAgODMlIDIyJSxcXG4gICAgICAyMyUgMjIlLFxcbiAgICAgIDIzJSAyNCUsXFxuICAgICAgOTElIDI0JSxcXG4gICAgICA5MSUgMjYlLFxcbiAgICAgIDE4JSAyNiUsXFxuICAgICAgMTglIDgzJSxcXG4gICAgICAyOSUgODMlLFxcbiAgICAgIDI5JSAxNyUsXFxuICAgICAgNDElIDE3JSxcXG4gICAgICA0MSUgMzklLFxcbiAgICAgIDE4JSAzOSUsXFxuICAgICAgMTglIDgyJSxcXG4gICAgICA1NCUgODIlLFxcbiAgICAgIDU0JSA4OCUsXFxuICAgICAgMTklIDg4JSxcXG4gICAgICAxOSUgNCUsXFxuICAgICAgMzklIDQlLFxcbiAgICAgIDM5JSAxNCUsXFxuICAgICAgNzYlIDE0JSxcXG4gICAgICA3NiUgNTIlLFxcbiAgICAgIDIzJSA1MiUsXFxuICAgICAgMjMlIDM1JSxcXG4gICAgICAxOSUgMzUlLFxcbiAgICAgIDE5JSA4JSxcXG4gICAgICAzNiUgOCUsXFxuICAgICAgMzYlIDMxJSxcXG4gICAgICA3MyUgMzElLFxcbiAgICAgIDczJSAxNiUsXFxuICAgICAgMSUgMTYlLFxcbiAgICAgIDElIDU2JSxcXG4gICAgICA1MCUgNTYlLFxcbiAgICAgIDUwJSA4JVxcbiAgICApO1xcbiAgfVxcblxcbiAgNSUge1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgICAgMCUgMjklLFxcbiAgICAgIDQ0JSAyOSUsXFxuICAgICAgNDQlIDgzJSxcXG4gICAgICA5NCUgODMlLFxcbiAgICAgIDk0JSA1NiUsXFxuICAgICAgMTElIDU2JSxcXG4gICAgICAxMSUgNjQlLFxcbiAgICAgIDk0JSA2NCUsXFxuICAgICAgOTQlIDcwJSxcXG4gICAgICA4OCUgNzAlLFxcbiAgICAgIDg4JSAzMiUsXFxuICAgICAgMTglIDMyJSxcXG4gICAgICAxOCUgOTYlLFxcbiAgICAgIDEwJSA5NiUsXFxuICAgICAgMTAlIDYyJSxcXG4gICAgICA5JSA2MiUsXFxuICAgICAgOSUgODQlLFxcbiAgICAgIDY4JSA4NCUsXFxuICAgICAgNjglIDUwJSxcXG4gICAgICA1MiUgNTAlLFxcbiAgICAgIDUyJSA1NSUsXFxuICAgICAgMzUlIDU1JSxcXG4gICAgICAzNSUgODclLFxcbiAgICAgIDI1JSA4NyUsXFxuICAgICAgMjUlIDM5JSxcXG4gICAgICAxNSUgMzklLFxcbiAgICAgIDE1JSA4OCUsXFxuICAgICAgNTIlIDg4JVxcbiAgICApO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcbiAgICAgIDAlIDUzJSxcXG4gICAgICA5MyUgNTMlLFxcbiAgICAgIDkzJSA2MiUsXFxuICAgICAgNjglIDYyJSxcXG4gICAgICA2OCUgMzclLFxcbiAgICAgIDk3JSAzNyUsXFxuICAgICAgOTclIDg5JSxcXG4gICAgICAxMyUgODklLFxcbiAgICAgIDEzJSA0NSUsXFxuICAgICAgNTElIDQ1JSxcXG4gICAgICA1MSUgODglLFxcbiAgICAgIDE3JSA4OCUsXFxuICAgICAgMTclIDU0JSxcXG4gICAgICA4MSUgNTQlLFxcbiAgICAgIDgxJSA3NSUsXFxuICAgICAgNzklIDc1JSxcXG4gICAgICA3OSUgNzYlLFxcbiAgICAgIDM4JSA3NiUsXFxuICAgICAgMzglIDI4JSxcXG4gICAgICA2MSUgMjglLFxcbiAgICAgIDYxJSAxMiUsXFxuICAgICAgNTUlIDEyJSxcXG4gICAgICA1NSUgNjIlLFxcbiAgICAgIDY4JSA2MiUsXFxuICAgICAgNjglIDUxJSxcXG4gICAgICAwJSA1MSUsXFxuICAgICAgMCUgOTIlLFxcbiAgICAgIDYzJSA5MiUsXFxuICAgICAgNjMlIDQlLFxcbiAgICAgIDY1JSA0JVxcbiAgICApO1xcbiAgfVxcblxcbiAgNDUlIHtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcbiAgICAgIDAlIDMzJSxcXG4gICAgICAyJSAzMyUsXFxuICAgICAgMiUgNjklLFxcbiAgICAgIDU4JSA2OSUsXFxuICAgICAgNTglIDk0JSxcXG4gICAgICA1NSUgOTQlLFxcbiAgICAgIDU1JSAyNSUsXFxuICAgICAgMzMlIDI1JSxcXG4gICAgICAzMyUgODUlLFxcbiAgICAgIDE2JSA4NSUsXFxuICAgICAgMTYlIDE5JSxcXG4gICAgICA1JSAxOSUsXFxuICAgICAgNSUgMjAlLFxcbiAgICAgIDc5JSAyMCUsXFxuICAgICAgNzklIDk2JSxcXG4gICAgICA5MyUgOTYlLFxcbiAgICAgIDkzJSA1MCUsXFxuICAgICAgNSUgNTAlLFxcbiAgICAgIDUlIDc0JSxcXG4gICAgICA1NSUgNzQlLFxcbiAgICAgIDU1JSA1NyUsXFxuICAgICAgOTYlIDU3JSxcXG4gICAgICA5NiUgNTklLFxcbiAgICAgIDg3JSA1OSUsXFxuICAgICAgODclIDY1JSxcXG4gICAgICA4MiUgNjUlLFxcbiAgICAgIDgyJSAzOSUsXFxuICAgICAgNjMlIDM5JSxcXG4gICAgICA2MyUgOTIlLFxcbiAgICAgIDQlIDkyJSxcXG4gICAgICA0JSAzNiUsXFxuICAgICAgMjQlIDM2JSxcXG4gICAgICAyNCUgNzAlLFxcbiAgICAgIDElIDcwJSxcXG4gICAgICAxJSA0MyUsXFxuICAgICAgMTUlIDQzJSxcXG4gICAgICAxNSUgMjglLFxcbiAgICAgIDIzJSAyOCUsXFxuICAgICAgMjMlIDcxJSxcXG4gICAgICA5MCUgNzElLFxcbiAgICAgIDkwJSA4NiUsXFxuICAgICAgOTclIDg2JSxcXG4gICAgICA5NyUgMSUsXFxuICAgICAgNjAlIDElLFxcbiAgICAgIDYwJSA2NyUsXFxuICAgICAgNzElIDY3JSxcXG4gICAgICA3MSUgOTElLFxcbiAgICAgIDE3JSA5MSUsXFxuICAgICAgMTclIDE0JSxcXG4gICAgICAzOSUgMTQlLFxcbiAgICAgIDM5JSAzMCUsXFxuICAgICAgNTglIDMwJSxcXG4gICAgICA1OCUgMTElLFxcbiAgICAgIDUyJSAxMSUsXFxuICAgICAgNTIlIDgzJSxcXG4gICAgICA2OCUgODMlXFxuICAgICk7XFxuICB9XFxuXFxuICA3NiUge1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgICAgMCUgMjYlLFxcbiAgICAgIDE1JSAyNiUsXFxuICAgICAgMTUlIDczJSxcXG4gICAgICA3MiUgNzMlLFxcbiAgICAgIDcyJSA3MCUsXFxuICAgICAgNzclIDcwJSxcXG4gICAgICA3NyUgNzUlLFxcbiAgICAgIDglIDc1JSxcXG4gICAgICA4JSA0MiUsXFxuICAgICAgNCUgNDIlLFxcbiAgICAgIDQlIDYxJSxcXG4gICAgICAxNyUgNjElLFxcbiAgICAgIDE3JSAxMiUsXFxuICAgICAgMjYlIDEyJSxcXG4gICAgICAyNiUgNjMlLFxcbiAgICAgIDczJSA2MyUsXFxuICAgICAgNzMlIDQzJSxcXG4gICAgICA5MCUgNDMlLFxcbiAgICAgIDkwJSA2NyUsXFxuICAgICAgNTAlIDY3JSxcXG4gICAgICA1MCUgNDElLFxcbiAgICAgIDQyJSA0MSUsXFxuICAgICAgNDIlIDQ2JSxcXG4gICAgICA1MCUgNDYlLFxcbiAgICAgIDUwJSA4NCUsXFxuICAgICAgOTYlIDg0JSxcXG4gICAgICA5NiUgNzglLFxcbiAgICAgIDQ5JSA3OCUsXFxuICAgICAgNDklIDI1JSxcXG4gICAgICA2MyUgMjUlLFxcbiAgICAgIDYzJSAxNCVcXG4gICAgKTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgICAwJSA0MSUsXFxuICAgICAgMTMlIDQxJSxcXG4gICAgICAxMyUgNiUsXFxuICAgICAgODclIDYlLFxcbiAgICAgIDg3JSA5MyUsXFxuICAgICAgMTAlIDkzJSxcXG4gICAgICAxMCUgMTMlLFxcbiAgICAgIDg5JSAxMyUsXFxuICAgICAgODklIDYlLFxcbiAgICAgIDMlIDYlLFxcbiAgICAgIDMlIDglLFxcbiAgICAgIDE2JSA4JSxcXG4gICAgICAxNiUgNzklLFxcbiAgICAgIDAlIDc5JSxcXG4gICAgICAwJSA5OSUsXFxuICAgICAgOTIlIDk5JSxcXG4gICAgICA5MiUgOTAlLFxcbiAgICAgIDUlIDkwJSxcXG4gICAgICA1JSA2MCUsXFxuICAgICAgMCUgNjAlLFxcbiAgICAgIDAlIDQ4JSxcXG4gICAgICA4OSUgNDglLFxcbiAgICAgIDg5JSAxMyUsXFxuICAgICAgODAlIDEzJSxcXG4gICAgICA4MCUgNDMlLFxcbiAgICAgIDk1JSA0MyUsXFxuICAgICAgOTUlIDE5JSxcXG4gICAgICA4MCUgMTklLFxcbiAgICAgIDgwJSA4NSUsXFxuICAgICAgMzglIDg1JSxcXG4gICAgICAzOCUgNjIlXFxuICAgICk7XFxuICB9XFxuXFxuICAxJSxcXG4gIDclLFxcbiAgMzMlLFxcbiAgNDclLFxcbiAgNzglLFxcbiAgOTMlIHtcXG4gICAgY2xpcC1wYXRoOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uZ2xpdGNoIHNwYW4ge1xcbiAgYW5pbWF0aW9uOiBwYXRocyA1cyBzdGVwLWVuZCBpbmZpbml0ZTtcXG59XFxuXFxuLmdsaXRjaDo6YmVmb3JlIHtcXG4gIGFuaW1hdGlvbjogcGF0aHMgNXMgc3RlcC1lbmQgaW5maW5pdGUsIG9wYWNpdHkgNXMgc3RlcC1lbmQgaW5maW5pdGUsXFxuICAgIGZvbnQgOHMgc3RlcC1lbmQgaW5maW5pdGUsIG1vdmVtZW50IDEwcyBzdGVwLWVuZCBpbmZpbml0ZTtcXG59XFxuXFxuLmdsaXRjaDo6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uOiBwYXRocyA1cyBzdGVwLWVuZCBpbmZpbml0ZSwgb3BhY2l0eSA1cyBzdGVwLWVuZCBpbmZpbml0ZSxcXG4gICAgZm9udCA3cyBzdGVwLWVuZCBpbmZpbml0ZSwgbW92ZW1lbnQgOHMgc3RlcC1lbmQgaW5maW5pdGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2xpdGNoLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsVUFBVTtFQUNWLG9CQUFvQjs7RUFFcEIsa0ZBQWtGO0VBQ2xGLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysb0JBQW9COztFQUVwQixrRkFBa0Y7RUFDbEYsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFFBQVE7RUFDUixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFO0lBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW9DQztFQUNIOztFQUVBO0lBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNkJDO0VBQ0g7O0VBRUE7SUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQStCQztFQUNIOztFQUVBO0lBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXlEQztFQUNIOztFQUVBO0lBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBZ0NDO0VBQ0g7O0VBRUE7SUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FnQ0M7RUFDSDs7RUFFQTs7Ozs7O0lBTUUsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0U7NkRBQzJEO0FBQzdEOztBQUVBO0VBQ0U7NERBQzBEO0FBQzVEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImgxLFxcbmgyIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlcm8ge1xcbiAgZm9udC1zaXplOiBjbGFtcCg0MHB4LCAxMHZ3LCAxMDBweCk7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMjtcXG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xcblxcbiAgLyogQnJpZ2h0IHRoaW5ncyBpbiBkYXJrIGVudmlyb25tZW50cyB1c3VhbGx5IGNhc3QgdGhhdCBsaWdodCwgZ2l2aW5nIG9mZiBhIGdsb3cgKi9cXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxcHggM3B4KTtcXG59XFxuXFxuLmFib3V0IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMjtcXG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xcblxcbiAgLyogQnJpZ2h0IHRoaW5ncyBpbiBkYXJrIGVudmlyb25tZW50cyB1c3VhbGx5IGNhc3QgdGhhdCBsaWdodCwgZ2l2aW5nIG9mZiBhIGdsb3cgKi9cXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxcHggM3B4KTtcXG59XFxuXFxuLmxheWVycyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5sYXllcnM6OmJlZm9yZSxcXG4ubGF5ZXJzOjphZnRlciB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTEwJTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ubGF5ZXJzOjpiZWZvcmUge1xcbiAgdG9wOiAxMHB4O1xcbiAgbGVmdDogMTVweDtcXG4gIGNvbG9yOiAjZTAyODdkO1xcbn1cXG5cXG4ubGF5ZXJzOjphZnRlciB7XFxuICB0b3A6IDVweDtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgY29sb3I6ICMxYmM3ZmI7XFxufVxcblxcbi5wYXRocyB7XFxuICBhbmltYXRpb246IHBhdGhzIDVzIHN0ZXAtZW5kIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHBhdGhzIHtcXG4gIDAlIHtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcbiAgICAgIDAlIDQzJSxcXG4gICAgICA4MyUgNDMlLFxcbiAgICAgIDgzJSAyMiUsXFxuICAgICAgMjMlIDIyJSxcXG4gICAgICAyMyUgMjQlLFxcbiAgICAgIDkxJSAyNCUsXFxuICAgICAgOTElIDI2JSxcXG4gICAgICAxOCUgMjYlLFxcbiAgICAgIDE4JSA4MyUsXFxuICAgICAgMjklIDgzJSxcXG4gICAgICAyOSUgMTclLFxcbiAgICAgIDQxJSAxNyUsXFxuICAgICAgNDElIDM5JSxcXG4gICAgICAxOCUgMzklLFxcbiAgICAgIDE4JSA4MiUsXFxuICAgICAgNTQlIDgyJSxcXG4gICAgICA1NCUgODglLFxcbiAgICAgIDE5JSA4OCUsXFxuICAgICAgMTklIDQlLFxcbiAgICAgIDM5JSA0JSxcXG4gICAgICAzOSUgMTQlLFxcbiAgICAgIDc2JSAxNCUsXFxuICAgICAgNzYlIDUyJSxcXG4gICAgICAyMyUgNTIlLFxcbiAgICAgIDIzJSAzNSUsXFxuICAgICAgMTklIDM1JSxcXG4gICAgICAxOSUgOCUsXFxuICAgICAgMzYlIDglLFxcbiAgICAgIDM2JSAzMSUsXFxuICAgICAgNzMlIDMxJSxcXG4gICAgICA3MyUgMTYlLFxcbiAgICAgIDElIDE2JSxcXG4gICAgICAxJSA1NiUsXFxuICAgICAgNTAlIDU2JSxcXG4gICAgICA1MCUgOCVcXG4gICAgKTtcXG4gIH1cXG5cXG4gIDUlIHtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcbiAgICAgIDAlIDI5JSxcXG4gICAgICA0NCUgMjklLFxcbiAgICAgIDQ0JSA4MyUsXFxuICAgICAgOTQlIDgzJSxcXG4gICAgICA5NCUgNTYlLFxcbiAgICAgIDExJSA1NiUsXFxuICAgICAgMTElIDY0JSxcXG4gICAgICA5NCUgNjQlLFxcbiAgICAgIDk0JSA3MCUsXFxuICAgICAgODglIDcwJSxcXG4gICAgICA4OCUgMzIlLFxcbiAgICAgIDE4JSAzMiUsXFxuICAgICAgMTglIDk2JSxcXG4gICAgICAxMCUgOTYlLFxcbiAgICAgIDEwJSA2MiUsXFxuICAgICAgOSUgNjIlLFxcbiAgICAgIDklIDg0JSxcXG4gICAgICA2OCUgODQlLFxcbiAgICAgIDY4JSA1MCUsXFxuICAgICAgNTIlIDUwJSxcXG4gICAgICA1MiUgNTUlLFxcbiAgICAgIDM1JSA1NSUsXFxuICAgICAgMzUlIDg3JSxcXG4gICAgICAyNSUgODclLFxcbiAgICAgIDI1JSAzOSUsXFxuICAgICAgMTUlIDM5JSxcXG4gICAgICAxNSUgODglLFxcbiAgICAgIDUyJSA4OCVcXG4gICAgKTtcXG4gIH1cXG5cXG4gIDMwJSB7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgICAwJSA1MyUsXFxuICAgICAgOTMlIDUzJSxcXG4gICAgICA5MyUgNjIlLFxcbiAgICAgIDY4JSA2MiUsXFxuICAgICAgNjglIDM3JSxcXG4gICAgICA5NyUgMzclLFxcbiAgICAgIDk3JSA4OSUsXFxuICAgICAgMTMlIDg5JSxcXG4gICAgICAxMyUgNDUlLFxcbiAgICAgIDUxJSA0NSUsXFxuICAgICAgNTElIDg4JSxcXG4gICAgICAxNyUgODglLFxcbiAgICAgIDE3JSA1NCUsXFxuICAgICAgODElIDU0JSxcXG4gICAgICA4MSUgNzUlLFxcbiAgICAgIDc5JSA3NSUsXFxuICAgICAgNzklIDc2JSxcXG4gICAgICAzOCUgNzYlLFxcbiAgICAgIDM4JSAyOCUsXFxuICAgICAgNjElIDI4JSxcXG4gICAgICA2MSUgMTIlLFxcbiAgICAgIDU1JSAxMiUsXFxuICAgICAgNTUlIDYyJSxcXG4gICAgICA2OCUgNjIlLFxcbiAgICAgIDY4JSA1MSUsXFxuICAgICAgMCUgNTElLFxcbiAgICAgIDAlIDkyJSxcXG4gICAgICA2MyUgOTIlLFxcbiAgICAgIDYzJSA0JSxcXG4gICAgICA2NSUgNCVcXG4gICAgKTtcXG4gIH1cXG5cXG4gIDQ1JSB7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgICAwJSAzMyUsXFxuICAgICAgMiUgMzMlLFxcbiAgICAgIDIlIDY5JSxcXG4gICAgICA1OCUgNjklLFxcbiAgICAgIDU4JSA5NCUsXFxuICAgICAgNTUlIDk0JSxcXG4gICAgICA1NSUgMjUlLFxcbiAgICAgIDMzJSAyNSUsXFxuICAgICAgMzMlIDg1JSxcXG4gICAgICAxNiUgODUlLFxcbiAgICAgIDE2JSAxOSUsXFxuICAgICAgNSUgMTklLFxcbiAgICAgIDUlIDIwJSxcXG4gICAgICA3OSUgMjAlLFxcbiAgICAgIDc5JSA5NiUsXFxuICAgICAgOTMlIDk2JSxcXG4gICAgICA5MyUgNTAlLFxcbiAgICAgIDUlIDUwJSxcXG4gICAgICA1JSA3NCUsXFxuICAgICAgNTUlIDc0JSxcXG4gICAgICA1NSUgNTclLFxcbiAgICAgIDk2JSA1NyUsXFxuICAgICAgOTYlIDU5JSxcXG4gICAgICA4NyUgNTklLFxcbiAgICAgIDg3JSA2NSUsXFxuICAgICAgODIlIDY1JSxcXG4gICAgICA4MiUgMzklLFxcbiAgICAgIDYzJSAzOSUsXFxuICAgICAgNjMlIDkyJSxcXG4gICAgICA0JSA5MiUsXFxuICAgICAgNCUgMzYlLFxcbiAgICAgIDI0JSAzNiUsXFxuICAgICAgMjQlIDcwJSxcXG4gICAgICAxJSA3MCUsXFxuICAgICAgMSUgNDMlLFxcbiAgICAgIDE1JSA0MyUsXFxuICAgICAgMTUlIDI4JSxcXG4gICAgICAyMyUgMjglLFxcbiAgICAgIDIzJSA3MSUsXFxuICAgICAgOTAlIDcxJSxcXG4gICAgICA5MCUgODYlLFxcbiAgICAgIDk3JSA4NiUsXFxuICAgICAgOTclIDElLFxcbiAgICAgIDYwJSAxJSxcXG4gICAgICA2MCUgNjclLFxcbiAgICAgIDcxJSA2NyUsXFxuICAgICAgNzElIDkxJSxcXG4gICAgICAxNyUgOTElLFxcbiAgICAgIDE3JSAxNCUsXFxuICAgICAgMzklIDE0JSxcXG4gICAgICAzOSUgMzAlLFxcbiAgICAgIDU4JSAzMCUsXFxuICAgICAgNTglIDExJSxcXG4gICAgICA1MiUgMTElLFxcbiAgICAgIDUyJSA4MyUsXFxuICAgICAgNjglIDgzJVxcbiAgICApO1xcbiAgfVxcblxcbiAgNzYlIHtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcbiAgICAgIDAlIDI2JSxcXG4gICAgICAxNSUgMjYlLFxcbiAgICAgIDE1JSA3MyUsXFxuICAgICAgNzIlIDczJSxcXG4gICAgICA3MiUgNzAlLFxcbiAgICAgIDc3JSA3MCUsXFxuICAgICAgNzclIDc1JSxcXG4gICAgICA4JSA3NSUsXFxuICAgICAgOCUgNDIlLFxcbiAgICAgIDQlIDQyJSxcXG4gICAgICA0JSA2MSUsXFxuICAgICAgMTclIDYxJSxcXG4gICAgICAxNyUgMTIlLFxcbiAgICAgIDI2JSAxMiUsXFxuICAgICAgMjYlIDYzJSxcXG4gICAgICA3MyUgNjMlLFxcbiAgICAgIDczJSA0MyUsXFxuICAgICAgOTAlIDQzJSxcXG4gICAgICA5MCUgNjclLFxcbiAgICAgIDUwJSA2NyUsXFxuICAgICAgNTAlIDQxJSxcXG4gICAgICA0MiUgNDElLFxcbiAgICAgIDQyJSA0NiUsXFxuICAgICAgNTAlIDQ2JSxcXG4gICAgICA1MCUgODQlLFxcbiAgICAgIDk2JSA4NCUsXFxuICAgICAgOTYlIDc4JSxcXG4gICAgICA0OSUgNzglLFxcbiAgICAgIDQ5JSAyNSUsXFxuICAgICAgNjMlIDI1JSxcXG4gICAgICA2MyUgMTQlXFxuICAgICk7XFxuICB9XFxuXFxuICA5MCUge1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgICAgMCUgNDElLFxcbiAgICAgIDEzJSA0MSUsXFxuICAgICAgMTMlIDYlLFxcbiAgICAgIDg3JSA2JSxcXG4gICAgICA4NyUgOTMlLFxcbiAgICAgIDEwJSA5MyUsXFxuICAgICAgMTAlIDEzJSxcXG4gICAgICA4OSUgMTMlLFxcbiAgICAgIDg5JSA2JSxcXG4gICAgICAzJSA2JSxcXG4gICAgICAzJSA4JSxcXG4gICAgICAxNiUgOCUsXFxuICAgICAgMTYlIDc5JSxcXG4gICAgICAwJSA3OSUsXFxuICAgICAgMCUgOTklLFxcbiAgICAgIDkyJSA5OSUsXFxuICAgICAgOTIlIDkwJSxcXG4gICAgICA1JSA5MCUsXFxuICAgICAgNSUgNjAlLFxcbiAgICAgIDAlIDYwJSxcXG4gICAgICAwJSA0OCUsXFxuICAgICAgODklIDQ4JSxcXG4gICAgICA4OSUgMTMlLFxcbiAgICAgIDgwJSAxMyUsXFxuICAgICAgODAlIDQzJSxcXG4gICAgICA5NSUgNDMlLFxcbiAgICAgIDk1JSAxOSUsXFxuICAgICAgODAlIDE5JSxcXG4gICAgICA4MCUgODUlLFxcbiAgICAgIDM4JSA4NSUsXFxuICAgICAgMzglIDYyJVxcbiAgICApO1xcbiAgfVxcblxcbiAgMSUsXFxuICA3JSxcXG4gIDMzJSxcXG4gIDQ3JSxcXG4gIDc4JSxcXG4gIDkzJSB7XFxuICAgIGNsaXAtcGF0aDogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmdsaXRjaCBzcGFuIHtcXG4gIGFuaW1hdGlvbjogcGF0aHMgNXMgc3RlcC1lbmQgaW5maW5pdGU7XFxufVxcblxcbi5nbGl0Y2g6OmJlZm9yZSB7XFxuICBhbmltYXRpb246IHBhdGhzIDVzIHN0ZXAtZW5kIGluZmluaXRlLCBvcGFjaXR5IDVzIHN0ZXAtZW5kIGluZmluaXRlLFxcbiAgICBmb250IDhzIHN0ZXAtZW5kIGluZmluaXRlLCBtb3ZlbWVudCAxMHMgc3RlcC1lbmQgaW5maW5pdGU7XFxufVxcblxcbi5nbGl0Y2g6OmFmdGVyIHtcXG4gIGFuaW1hdGlvbjogcGF0aHMgNXMgc3RlcC1lbmQgaW5maW5pdGUsIG9wYWNpdHkgNXMgc3RlcC1lbmQgaW5maW5pdGUsXFxuICAgIGZvbnQgN3Mgc3RlcC1lbmQgaW5maW5pdGUsIG1vdmVtZW50IDhzIHN0ZXAtZW5kIGluZmluaXRlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaG9tZS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ob21lLXNlY3Rpb24gaDEge1xcbiAgbWFyZ2luOiAxMHB4IDBweDtcXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbiBkaXYge1xcbiAgbWFyZ2luOiAxMHB4IDBweDtcXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ob21lLXNlY3Rpb24gaDIge1xcbiAgcGFkZGluZzogMjBweCAyMHB4IDBweCAyMHB4O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjs7RUFFbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhvbWUtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uIGgxIHtcXG4gIG1hcmdpbjogMTBweCAwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxufVxcblxcbi5ob21lLXNlY3Rpb24gZGl2IHtcXG4gIG1hcmdpbjogMTBweCAwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uIGgyIHtcXG4gIHBhZGRpbmc6IDIwcHggMjBweCAwcHggMjBweDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbGl0Y2guY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbGl0Y2guY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9ob21lLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2dsaXRjaC5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lLXNlY3Rpb24nKTtcblxuICAvLyBIZWFkZXIgQ29kZVxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnZ2xpdGNoJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdsYXllcnMnKTtcblxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLmlubmVySFRNTCA9IFwiTG8tRmkgQ2FmZVwiO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAvLyBJZnJhbWUgQ29kZVxuICBjb25zdCB2aWRlb1BsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2aWRlb1BsYXllci5pbm5lckhUTUwgPSBcIjxpZnJhbWUgd2lkdGg9JzU2MCcgaGVpZ2h0PSczMTUnIHNyYz0naHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvNXFhcDVhTzRpOUEnIHRpdGxlPSdZb3VUdWJlIHZpZGVvIHBsYXllcicgZnJhbWVib3JkZXI9JzAnIGFsbG93PSdhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlJyBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XCJcbiAgXG4gIC8vIEFib3V0IFBhcmFncmFwaCBDb2RlXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnZ2xpdGNoJyk7XG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2xheWVycycpO1xuXG4gIGNvbnN0IGFib3V0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgYWJvdXRTcGFuLmlubmVySFRNTCA9IFwiU2VydmluZyB1cCBzb21lIGZyZXNoIGJlYXRzLi4uXCI7XG4gIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFib3V0RGl2LmlubmVySFRNTCA9IFwiQ29tZSBpblwiO1xuXG4gIGFib3V0LmFwcGVuZENoaWxkKGFib3V0U3Bhbik7XG4gIGFib3V0LmFwcGVuZENoaWxkKGFib3V0RGl2KTtcblxuICBob21lLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGhvbWUuYXBwZW5kQ2hpbGQodmlkZW9QbGF5ZXIpO1xuICBob21lLmFwcGVuZENoaWxkKGFib3V0KTtcblxuICByZXR1cm4gaG9tZTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=