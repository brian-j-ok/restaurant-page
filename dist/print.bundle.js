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
___CSS_LOADER_EXPORT___.push([module.id, "h1,\nh2 {\n  margin: 0;\n}\n\n.hero {\n  font-size: clamp(40px, 10vw, 100px);\n  line-height: 1;\n  display: inline-block;\n  color: #fff;\n  z-index: 2;\n  letter-spacing: 10px;\n\n  /* Bright things in dark environments usually cast that light, giving off a glow */\n  filter: drop-shadow(0 1px 3px);\n}\n\n.demo {\n  height: 100px;\n  background: #fff;\n}\n\n.layers {\n  position: relative;\n}\n\n.layers::before,\n.layers::after {\n  content: attr(data-text);\n  position: absolute;\n  width: 110%;\n  z-index: -1;\n}\n\n.layers::before {\n  top: 10px;\n  left: 15px;\n  color: #e0287d;\n}\n\n.layers::after {\n  top: 5px;\n  left: -10px;\n  color: #1bc7fb;\n}\n\n.paths {\n  animation: paths 5s step-end infinite;\n}\n\n@keyframes paths {\n  0% {\n    clip-path: polygon(\n      0% 43%,\n      83% 43%,\n      83% 22%,\n      23% 22%,\n      23% 24%,\n      91% 24%,\n      91% 26%,\n      18% 26%,\n      18% 83%,\n      29% 83%,\n      29% 17%,\n      41% 17%,\n      41% 39%,\n      18% 39%,\n      18% 82%,\n      54% 82%,\n      54% 88%,\n      19% 88%,\n      19% 4%,\n      39% 4%,\n      39% 14%,\n      76% 14%,\n      76% 52%,\n      23% 52%,\n      23% 35%,\n      19% 35%,\n      19% 8%,\n      36% 8%,\n      36% 31%,\n      73% 31%,\n      73% 16%,\n      1% 16%,\n      1% 56%,\n      50% 56%,\n      50% 8%\n    );\n  }\n\n  5% {\n    clip-path: polygon(\n      0% 29%,\n      44% 29%,\n      44% 83%,\n      94% 83%,\n      94% 56%,\n      11% 56%,\n      11% 64%,\n      94% 64%,\n      94% 70%,\n      88% 70%,\n      88% 32%,\n      18% 32%,\n      18% 96%,\n      10% 96%,\n      10% 62%,\n      9% 62%,\n      9% 84%,\n      68% 84%,\n      68% 50%,\n      52% 50%,\n      52% 55%,\n      35% 55%,\n      35% 87%,\n      25% 87%,\n      25% 39%,\n      15% 39%,\n      15% 88%,\n      52% 88%\n    );\n  }\n\n  30% {\n    clip-path: polygon(\n      0% 53%,\n      93% 53%,\n      93% 62%,\n      68% 62%,\n      68% 37%,\n      97% 37%,\n      97% 89%,\n      13% 89%,\n      13% 45%,\n      51% 45%,\n      51% 88%,\n      17% 88%,\n      17% 54%,\n      81% 54%,\n      81% 75%,\n      79% 75%,\n      79% 76%,\n      38% 76%,\n      38% 28%,\n      61% 28%,\n      61% 12%,\n      55% 12%,\n      55% 62%,\n      68% 62%,\n      68% 51%,\n      0% 51%,\n      0% 92%,\n      63% 92%,\n      63% 4%,\n      65% 4%\n    );\n  }\n\n  45% {\n    clip-path: polygon(\n      0% 33%,\n      2% 33%,\n      2% 69%,\n      58% 69%,\n      58% 94%,\n      55% 94%,\n      55% 25%,\n      33% 25%,\n      33% 85%,\n      16% 85%,\n      16% 19%,\n      5% 19%,\n      5% 20%,\n      79% 20%,\n      79% 96%,\n      93% 96%,\n      93% 50%,\n      5% 50%,\n      5% 74%,\n      55% 74%,\n      55% 57%,\n      96% 57%,\n      96% 59%,\n      87% 59%,\n      87% 65%,\n      82% 65%,\n      82% 39%,\n      63% 39%,\n      63% 92%,\n      4% 92%,\n      4% 36%,\n      24% 36%,\n      24% 70%,\n      1% 70%,\n      1% 43%,\n      15% 43%,\n      15% 28%,\n      23% 28%,\n      23% 71%,\n      90% 71%,\n      90% 86%,\n      97% 86%,\n      97% 1%,\n      60% 1%,\n      60% 67%,\n      71% 67%,\n      71% 91%,\n      17% 91%,\n      17% 14%,\n      39% 14%,\n      39% 30%,\n      58% 30%,\n      58% 11%,\n      52% 11%,\n      52% 83%,\n      68% 83%\n    );\n  }\n\n  76% {\n    clip-path: polygon(\n      0% 26%,\n      15% 26%,\n      15% 73%,\n      72% 73%,\n      72% 70%,\n      77% 70%,\n      77% 75%,\n      8% 75%,\n      8% 42%,\n      4% 42%,\n      4% 61%,\n      17% 61%,\n      17% 12%,\n      26% 12%,\n      26% 63%,\n      73% 63%,\n      73% 43%,\n      90% 43%,\n      90% 67%,\n      50% 67%,\n      50% 41%,\n      42% 41%,\n      42% 46%,\n      50% 46%,\n      50% 84%,\n      96% 84%,\n      96% 78%,\n      49% 78%,\n      49% 25%,\n      63% 25%,\n      63% 14%\n    );\n  }\n\n  90% {\n    clip-path: polygon(\n      0% 41%,\n      13% 41%,\n      13% 6%,\n      87% 6%,\n      87% 93%,\n      10% 93%,\n      10% 13%,\n      89% 13%,\n      89% 6%,\n      3% 6%,\n      3% 8%,\n      16% 8%,\n      16% 79%,\n      0% 79%,\n      0% 99%,\n      92% 99%,\n      92% 90%,\n      5% 90%,\n      5% 60%,\n      0% 60%,\n      0% 48%,\n      89% 48%,\n      89% 13%,\n      80% 13%,\n      80% 43%,\n      95% 43%,\n      95% 19%,\n      80% 19%,\n      80% 85%,\n      38% 85%,\n      38% 62%\n    );\n  }\n\n  1%,\n  7%,\n  33%,\n  47%,\n  78%,\n  93% {\n    clip-path: none;\n  }\n}\n\n.glitch span {\n  animation: paths 5s step-end infinite;\n}\n\n.glitch::before {\n  animation: paths 5s step-end infinite, opacity 5s step-end infinite,\n    font 8s step-end infinite, movement 10s step-end infinite;\n}\n\n.glitch::after {\n  animation: paths 5s step-end infinite, opacity 5s step-end infinite,\n    font 7s step-end infinite, movement 8s step-end infinite;\n}", "",{"version":3,"sources":["webpack://./src/styles/glitch.css"],"names":[],"mappings":"AAAA;;EAEE,SAAS;AACX;;AAEA;EACE,mCAAmC;EACnC,cAAc;EACd,qBAAqB;EACrB,WAAW;EACX,UAAU;EACV,oBAAoB;;EAEpB,kFAAkF;EAClF,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,wBAAwB;EACxB,kBAAkB;EAClB,WAAW;EACX,WAAW;AACb;;AAEA;EACE,SAAS;EACT,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,QAAQ;EACR,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE;IACE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;KAoCC;EACH;;EAEA;IACE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;KA6BC;EACH;;EAEA;IACE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;KA+BC;EACH;;EAEA;IACE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;KAyDC;EACH;;EAEA;IACE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;KAgCC;EACH;;EAEA;IACE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;KAgCC;EACH;;EAEA;;;;;;IAME,eAAe;EACjB;AACF;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE;6DAC2D;AAC7D;;AAEA;EACE;4DAC0D;AAC5D","sourcesContent":["h1,\nh2 {\n  margin: 0;\n}\n\n.hero {\n  font-size: clamp(40px, 10vw, 100px);\n  line-height: 1;\n  display: inline-block;\n  color: #fff;\n  z-index: 2;\n  letter-spacing: 10px;\n\n  /* Bright things in dark environments usually cast that light, giving off a glow */\n  filter: drop-shadow(0 1px 3px);\n}\n\n.demo {\n  height: 100px;\n  background: #fff;\n}\n\n.layers {\n  position: relative;\n}\n\n.layers::before,\n.layers::after {\n  content: attr(data-text);\n  position: absolute;\n  width: 110%;\n  z-index: -1;\n}\n\n.layers::before {\n  top: 10px;\n  left: 15px;\n  color: #e0287d;\n}\n\n.layers::after {\n  top: 5px;\n  left: -10px;\n  color: #1bc7fb;\n}\n\n.paths {\n  animation: paths 5s step-end infinite;\n}\n\n@keyframes paths {\n  0% {\n    clip-path: polygon(\n      0% 43%,\n      83% 43%,\n      83% 22%,\n      23% 22%,\n      23% 24%,\n      91% 24%,\n      91% 26%,\n      18% 26%,\n      18% 83%,\n      29% 83%,\n      29% 17%,\n      41% 17%,\n      41% 39%,\n      18% 39%,\n      18% 82%,\n      54% 82%,\n      54% 88%,\n      19% 88%,\n      19% 4%,\n      39% 4%,\n      39% 14%,\n      76% 14%,\n      76% 52%,\n      23% 52%,\n      23% 35%,\n      19% 35%,\n      19% 8%,\n      36% 8%,\n      36% 31%,\n      73% 31%,\n      73% 16%,\n      1% 16%,\n      1% 56%,\n      50% 56%,\n      50% 8%\n    );\n  }\n\n  5% {\n    clip-path: polygon(\n      0% 29%,\n      44% 29%,\n      44% 83%,\n      94% 83%,\n      94% 56%,\n      11% 56%,\n      11% 64%,\n      94% 64%,\n      94% 70%,\n      88% 70%,\n      88% 32%,\n      18% 32%,\n      18% 96%,\n      10% 96%,\n      10% 62%,\n      9% 62%,\n      9% 84%,\n      68% 84%,\n      68% 50%,\n      52% 50%,\n      52% 55%,\n      35% 55%,\n      35% 87%,\n      25% 87%,\n      25% 39%,\n      15% 39%,\n      15% 88%,\n      52% 88%\n    );\n  }\n\n  30% {\n    clip-path: polygon(\n      0% 53%,\n      93% 53%,\n      93% 62%,\n      68% 62%,\n      68% 37%,\n      97% 37%,\n      97% 89%,\n      13% 89%,\n      13% 45%,\n      51% 45%,\n      51% 88%,\n      17% 88%,\n      17% 54%,\n      81% 54%,\n      81% 75%,\n      79% 75%,\n      79% 76%,\n      38% 76%,\n      38% 28%,\n      61% 28%,\n      61% 12%,\n      55% 12%,\n      55% 62%,\n      68% 62%,\n      68% 51%,\n      0% 51%,\n      0% 92%,\n      63% 92%,\n      63% 4%,\n      65% 4%\n    );\n  }\n\n  45% {\n    clip-path: polygon(\n      0% 33%,\n      2% 33%,\n      2% 69%,\n      58% 69%,\n      58% 94%,\n      55% 94%,\n      55% 25%,\n      33% 25%,\n      33% 85%,\n      16% 85%,\n      16% 19%,\n      5% 19%,\n      5% 20%,\n      79% 20%,\n      79% 96%,\n      93% 96%,\n      93% 50%,\n      5% 50%,\n      5% 74%,\n      55% 74%,\n      55% 57%,\n      96% 57%,\n      96% 59%,\n      87% 59%,\n      87% 65%,\n      82% 65%,\n      82% 39%,\n      63% 39%,\n      63% 92%,\n      4% 92%,\n      4% 36%,\n      24% 36%,\n      24% 70%,\n      1% 70%,\n      1% 43%,\n      15% 43%,\n      15% 28%,\n      23% 28%,\n      23% 71%,\n      90% 71%,\n      90% 86%,\n      97% 86%,\n      97% 1%,\n      60% 1%,\n      60% 67%,\n      71% 67%,\n      71% 91%,\n      17% 91%,\n      17% 14%,\n      39% 14%,\n      39% 30%,\n      58% 30%,\n      58% 11%,\n      52% 11%,\n      52% 83%,\n      68% 83%\n    );\n  }\n\n  76% {\n    clip-path: polygon(\n      0% 26%,\n      15% 26%,\n      15% 73%,\n      72% 73%,\n      72% 70%,\n      77% 70%,\n      77% 75%,\n      8% 75%,\n      8% 42%,\n      4% 42%,\n      4% 61%,\n      17% 61%,\n      17% 12%,\n      26% 12%,\n      26% 63%,\n      73% 63%,\n      73% 43%,\n      90% 43%,\n      90% 67%,\n      50% 67%,\n      50% 41%,\n      42% 41%,\n      42% 46%,\n      50% 46%,\n      50% 84%,\n      96% 84%,\n      96% 78%,\n      49% 78%,\n      49% 25%,\n      63% 25%,\n      63% 14%\n    );\n  }\n\n  90% {\n    clip-path: polygon(\n      0% 41%,\n      13% 41%,\n      13% 6%,\n      87% 6%,\n      87% 93%,\n      10% 93%,\n      10% 13%,\n      89% 13%,\n      89% 6%,\n      3% 6%,\n      3% 8%,\n      16% 8%,\n      16% 79%,\n      0% 79%,\n      0% 99%,\n      92% 99%,\n      92% 90%,\n      5% 90%,\n      5% 60%,\n      0% 60%,\n      0% 48%,\n      89% 48%,\n      89% 13%,\n      80% 13%,\n      80% 43%,\n      95% 43%,\n      95% 19%,\n      80% 19%,\n      80% 85%,\n      38% 85%,\n      38% 62%\n    );\n  }\n\n  1%,\n  7%,\n  33%,\n  47%,\n  78%,\n  93% {\n    clip-path: none;\n  }\n}\n\n.glitch span {\n  animation: paths 5s step-end infinite;\n}\n\n.glitch::before {\n  animation: paths 5s step-end infinite, opacity 5s step-end infinite,\n    font 8s step-end infinite, movement 10s step-end infinite;\n}\n\n.glitch::after {\n  animation: paths 5s step-end infinite, opacity 5s step-end infinite,\n    font 7s step-end infinite, movement 8s step-end infinite;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".home-section {\n  display: grid;\n  place-content: center;\n}\n\n.home-section h1 {\n  margin: 10px 0px;\n  padding: 20px 20px;\n  backdrop-filter: blur(8px);\n  border-radius: 24px;\n}\n\n.home-section div {\n  margin: 10px 0px;\n  padding: 20px 20px;\n  display: grid;\n  place-content: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/home.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,0BAA0B;EAC1B,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,qBAAqB;AACvB","sourcesContent":[".home-section {\n  display: grid;\n  place-content: center;\n}\n\n.home-section h1 {\n  margin: 10px 0px;\n  padding: 20px 20px;\n  backdrop-filter: blur(8px);\n  border-radius: 24px;\n}\n\n.home-section div {\n  margin: 10px 0px;\n  padding: 20px 20px;\n  display: grid;\n  place-content: center;\n}"],"sourceRoot":""}]);
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

  home.appendChild(header);
  home.appendChild(videoPlayer);

  return home;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ04yQjtBQUNFOztBQUVkO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLCtLQUErSyxVQUFVLGlCQUFpQixpQkFBaUIsV0FBVzs7QUFFdE87QUFDQTs7QUFFQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL2dsaXRjaC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9ob21lLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvZ2xpdGNoLmNzcz84OTIzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvaG9tZS5jc3M/NGI1MSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImgxLFxcbmgyIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmhlcm8ge1xcbiAgZm9udC1zaXplOiBjbGFtcCg0MHB4LCAxMHZ3LCAxMDBweCk7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMjtcXG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xcblxcbiAgLyogQnJpZ2h0IHRoaW5ncyBpbiBkYXJrIGVudmlyb25tZW50cyB1c3VhbGx5IGNhc3QgdGhhdCBsaWdodCwgZ2l2aW5nIG9mZiBhIGdsb3cgKi9cXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxcHggM3B4KTtcXG59XFxuXFxuLmRlbW8ge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcblxcbi5sYXllcnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubGF5ZXJzOjpiZWZvcmUsXFxuLmxheWVyczo6YWZ0ZXIge1xcbiAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDExMCU7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmxheWVyczo6YmVmb3JlIHtcXG4gIHRvcDogMTBweDtcXG4gIGxlZnQ6IDE1cHg7XFxuICBjb2xvcjogI2UwMjg3ZDtcXG59XFxuXFxuLmxheWVyczo6YWZ0ZXIge1xcbiAgdG9wOiA1cHg7XFxuICBsZWZ0OiAtMTBweDtcXG4gIGNvbG9yOiAjMWJjN2ZiO1xcbn1cXG5cXG4ucGF0aHMge1xcbiAgYW5pbWF0aW9uOiBwYXRocyA1cyBzdGVwLWVuZCBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBwYXRocyB7XFxuICAwJSB7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgICAwJSA0MyUsXFxuICAgICAgODMlIDQzJSxcXG4gICAgICA4MyUgMjIlLFxcbiAgICAgIDIzJSAyMiUsXFxuICAgICAgMjMlIDI0JSxcXG4gICAgICA5MSUgMjQlLFxcbiAgICAgIDkxJSAyNiUsXFxuICAgICAgMTglIDI2JSxcXG4gICAgICAxOCUgODMlLFxcbiAgICAgIDI5JSA4MyUsXFxuICAgICAgMjklIDE3JSxcXG4gICAgICA0MSUgMTclLFxcbiAgICAgIDQxJSAzOSUsXFxuICAgICAgMTglIDM5JSxcXG4gICAgICAxOCUgODIlLFxcbiAgICAgIDU0JSA4MiUsXFxuICAgICAgNTQlIDg4JSxcXG4gICAgICAxOSUgODglLFxcbiAgICAgIDE5JSA0JSxcXG4gICAgICAzOSUgNCUsXFxuICAgICAgMzklIDE0JSxcXG4gICAgICA3NiUgMTQlLFxcbiAgICAgIDc2JSA1MiUsXFxuICAgICAgMjMlIDUyJSxcXG4gICAgICAyMyUgMzUlLFxcbiAgICAgIDE5JSAzNSUsXFxuICAgICAgMTklIDglLFxcbiAgICAgIDM2JSA4JSxcXG4gICAgICAzNiUgMzElLFxcbiAgICAgIDczJSAzMSUsXFxuICAgICAgNzMlIDE2JSxcXG4gICAgICAxJSAxNiUsXFxuICAgICAgMSUgNTYlLFxcbiAgICAgIDUwJSA1NiUsXFxuICAgICAgNTAlIDglXFxuICAgICk7XFxuICB9XFxuXFxuICA1JSB7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgICAwJSAyOSUsXFxuICAgICAgNDQlIDI5JSxcXG4gICAgICA0NCUgODMlLFxcbiAgICAgIDk0JSA4MyUsXFxuICAgICAgOTQlIDU2JSxcXG4gICAgICAxMSUgNTYlLFxcbiAgICAgIDExJSA2NCUsXFxuICAgICAgOTQlIDY0JSxcXG4gICAgICA5NCUgNzAlLFxcbiAgICAgIDg4JSA3MCUsXFxuICAgICAgODglIDMyJSxcXG4gICAgICAxOCUgMzIlLFxcbiAgICAgIDE4JSA5NiUsXFxuICAgICAgMTAlIDk2JSxcXG4gICAgICAxMCUgNjIlLFxcbiAgICAgIDklIDYyJSxcXG4gICAgICA5JSA4NCUsXFxuICAgICAgNjglIDg0JSxcXG4gICAgICA2OCUgNTAlLFxcbiAgICAgIDUyJSA1MCUsXFxuICAgICAgNTIlIDU1JSxcXG4gICAgICAzNSUgNTUlLFxcbiAgICAgIDM1JSA4NyUsXFxuICAgICAgMjUlIDg3JSxcXG4gICAgICAyNSUgMzklLFxcbiAgICAgIDE1JSAzOSUsXFxuICAgICAgMTUlIDg4JSxcXG4gICAgICA1MiUgODglXFxuICAgICk7XFxuICB9XFxuXFxuICAzMCUge1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgICAgMCUgNTMlLFxcbiAgICAgIDkzJSA1MyUsXFxuICAgICAgOTMlIDYyJSxcXG4gICAgICA2OCUgNjIlLFxcbiAgICAgIDY4JSAzNyUsXFxuICAgICAgOTclIDM3JSxcXG4gICAgICA5NyUgODklLFxcbiAgICAgIDEzJSA4OSUsXFxuICAgICAgMTMlIDQ1JSxcXG4gICAgICA1MSUgNDUlLFxcbiAgICAgIDUxJSA4OCUsXFxuICAgICAgMTclIDg4JSxcXG4gICAgICAxNyUgNTQlLFxcbiAgICAgIDgxJSA1NCUsXFxuICAgICAgODElIDc1JSxcXG4gICAgICA3OSUgNzUlLFxcbiAgICAgIDc5JSA3NiUsXFxuICAgICAgMzglIDc2JSxcXG4gICAgICAzOCUgMjglLFxcbiAgICAgIDYxJSAyOCUsXFxuICAgICAgNjElIDEyJSxcXG4gICAgICA1NSUgMTIlLFxcbiAgICAgIDU1JSA2MiUsXFxuICAgICAgNjglIDYyJSxcXG4gICAgICA2OCUgNTElLFxcbiAgICAgIDAlIDUxJSxcXG4gICAgICAwJSA5MiUsXFxuICAgICAgNjMlIDkyJSxcXG4gICAgICA2MyUgNCUsXFxuICAgICAgNjUlIDQlXFxuICAgICk7XFxuICB9XFxuXFxuICA0NSUge1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgICAgMCUgMzMlLFxcbiAgICAgIDIlIDMzJSxcXG4gICAgICAyJSA2OSUsXFxuICAgICAgNTglIDY5JSxcXG4gICAgICA1OCUgOTQlLFxcbiAgICAgIDU1JSA5NCUsXFxuICAgICAgNTUlIDI1JSxcXG4gICAgICAzMyUgMjUlLFxcbiAgICAgIDMzJSA4NSUsXFxuICAgICAgMTYlIDg1JSxcXG4gICAgICAxNiUgMTklLFxcbiAgICAgIDUlIDE5JSxcXG4gICAgICA1JSAyMCUsXFxuICAgICAgNzklIDIwJSxcXG4gICAgICA3OSUgOTYlLFxcbiAgICAgIDkzJSA5NiUsXFxuICAgICAgOTMlIDUwJSxcXG4gICAgICA1JSA1MCUsXFxuICAgICAgNSUgNzQlLFxcbiAgICAgIDU1JSA3NCUsXFxuICAgICAgNTUlIDU3JSxcXG4gICAgICA5NiUgNTclLFxcbiAgICAgIDk2JSA1OSUsXFxuICAgICAgODclIDU5JSxcXG4gICAgICA4NyUgNjUlLFxcbiAgICAgIDgyJSA2NSUsXFxuICAgICAgODIlIDM5JSxcXG4gICAgICA2MyUgMzklLFxcbiAgICAgIDYzJSA5MiUsXFxuICAgICAgNCUgOTIlLFxcbiAgICAgIDQlIDM2JSxcXG4gICAgICAyNCUgMzYlLFxcbiAgICAgIDI0JSA3MCUsXFxuICAgICAgMSUgNzAlLFxcbiAgICAgIDElIDQzJSxcXG4gICAgICAxNSUgNDMlLFxcbiAgICAgIDE1JSAyOCUsXFxuICAgICAgMjMlIDI4JSxcXG4gICAgICAyMyUgNzElLFxcbiAgICAgIDkwJSA3MSUsXFxuICAgICAgOTAlIDg2JSxcXG4gICAgICA5NyUgODYlLFxcbiAgICAgIDk3JSAxJSxcXG4gICAgICA2MCUgMSUsXFxuICAgICAgNjAlIDY3JSxcXG4gICAgICA3MSUgNjclLFxcbiAgICAgIDcxJSA5MSUsXFxuICAgICAgMTclIDkxJSxcXG4gICAgICAxNyUgMTQlLFxcbiAgICAgIDM5JSAxNCUsXFxuICAgICAgMzklIDMwJSxcXG4gICAgICA1OCUgMzAlLFxcbiAgICAgIDU4JSAxMSUsXFxuICAgICAgNTIlIDExJSxcXG4gICAgICA1MiUgODMlLFxcbiAgICAgIDY4JSA4MyVcXG4gICAgKTtcXG4gIH1cXG5cXG4gIDc2JSB7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgICAwJSAyNiUsXFxuICAgICAgMTUlIDI2JSxcXG4gICAgICAxNSUgNzMlLFxcbiAgICAgIDcyJSA3MyUsXFxuICAgICAgNzIlIDcwJSxcXG4gICAgICA3NyUgNzAlLFxcbiAgICAgIDc3JSA3NSUsXFxuICAgICAgOCUgNzUlLFxcbiAgICAgIDglIDQyJSxcXG4gICAgICA0JSA0MiUsXFxuICAgICAgNCUgNjElLFxcbiAgICAgIDE3JSA2MSUsXFxuICAgICAgMTclIDEyJSxcXG4gICAgICAyNiUgMTIlLFxcbiAgICAgIDI2JSA2MyUsXFxuICAgICAgNzMlIDYzJSxcXG4gICAgICA3MyUgNDMlLFxcbiAgICAgIDkwJSA0MyUsXFxuICAgICAgOTAlIDY3JSxcXG4gICAgICA1MCUgNjclLFxcbiAgICAgIDUwJSA0MSUsXFxuICAgICAgNDIlIDQxJSxcXG4gICAgICA0MiUgNDYlLFxcbiAgICAgIDUwJSA0NiUsXFxuICAgICAgNTAlIDg0JSxcXG4gICAgICA5NiUgODQlLFxcbiAgICAgIDk2JSA3OCUsXFxuICAgICAgNDklIDc4JSxcXG4gICAgICA0OSUgMjUlLFxcbiAgICAgIDYzJSAyNSUsXFxuICAgICAgNjMlIDE0JVxcbiAgICApO1xcbiAgfVxcblxcbiAgOTAlIHtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcbiAgICAgIDAlIDQxJSxcXG4gICAgICAxMyUgNDElLFxcbiAgICAgIDEzJSA2JSxcXG4gICAgICA4NyUgNiUsXFxuICAgICAgODclIDkzJSxcXG4gICAgICAxMCUgOTMlLFxcbiAgICAgIDEwJSAxMyUsXFxuICAgICAgODklIDEzJSxcXG4gICAgICA4OSUgNiUsXFxuICAgICAgMyUgNiUsXFxuICAgICAgMyUgOCUsXFxuICAgICAgMTYlIDglLFxcbiAgICAgIDE2JSA3OSUsXFxuICAgICAgMCUgNzklLFxcbiAgICAgIDAlIDk5JSxcXG4gICAgICA5MiUgOTklLFxcbiAgICAgIDkyJSA5MCUsXFxuICAgICAgNSUgOTAlLFxcbiAgICAgIDUlIDYwJSxcXG4gICAgICAwJSA2MCUsXFxuICAgICAgMCUgNDglLFxcbiAgICAgIDg5JSA0OCUsXFxuICAgICAgODklIDEzJSxcXG4gICAgICA4MCUgMTMlLFxcbiAgICAgIDgwJSA0MyUsXFxuICAgICAgOTUlIDQzJSxcXG4gICAgICA5NSUgMTklLFxcbiAgICAgIDgwJSAxOSUsXFxuICAgICAgODAlIDg1JSxcXG4gICAgICAzOCUgODUlLFxcbiAgICAgIDM4JSA2MiVcXG4gICAgKTtcXG4gIH1cXG5cXG4gIDElLFxcbiAgNyUsXFxuICAzMyUsXFxuICA0NyUsXFxuICA3OCUsXFxuICA5MyUge1xcbiAgICBjbGlwLXBhdGg6IG5vbmU7XFxuICB9XFxufVxcblxcbi5nbGl0Y2ggc3BhbiB7XFxuICBhbmltYXRpb246IHBhdGhzIDVzIHN0ZXAtZW5kIGluZmluaXRlO1xcbn1cXG5cXG4uZ2xpdGNoOjpiZWZvcmUge1xcbiAgYW5pbWF0aW9uOiBwYXRocyA1cyBzdGVwLWVuZCBpbmZpbml0ZSwgb3BhY2l0eSA1cyBzdGVwLWVuZCBpbmZpbml0ZSxcXG4gICAgZm9udCA4cyBzdGVwLWVuZCBpbmZpbml0ZSwgbW92ZW1lbnQgMTBzIHN0ZXAtZW5kIGluZmluaXRlO1xcbn1cXG5cXG4uZ2xpdGNoOjphZnRlciB7XFxuICBhbmltYXRpb246IHBhdGhzIDVzIHN0ZXAtZW5kIGluZmluaXRlLCBvcGFjaXR5IDVzIHN0ZXAtZW5kIGluZmluaXRlLFxcbiAgICBmb250IDdzIHN0ZXAtZW5kIGluZmluaXRlLCBtb3ZlbWVudCA4cyBzdGVwLWVuZCBpbmZpbml0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9nbGl0Y2guY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysb0JBQW9COztFQUVwQixrRkFBa0Y7RUFDbEYsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRTtJQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FvQ0M7RUFDSDs7RUFFQTtJQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTZCQztFQUNIOztFQUVBO0lBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0ErQkM7RUFDSDs7RUFFQTtJQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5REM7RUFDSDs7RUFFQTtJQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdDQztFQUNIOztFQUVBO0lBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBZ0NDO0VBQ0g7O0VBRUE7Ozs7OztJQU1FLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFOzZEQUMyRDtBQUM3RDs7QUFFQTtFQUNFOzREQUMwRDtBQUM1RFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJoMSxcXG5oMiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5oZXJvIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoNDBweCwgMTB2dywgMTAwcHgpO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHotaW5kZXg6IDI7XFxuICBsZXR0ZXItc3BhY2luZzogMTBweDtcXG5cXG4gIC8qIEJyaWdodCB0aGluZ3MgaW4gZGFyayBlbnZpcm9ubWVudHMgdXN1YWxseSBjYXN0IHRoYXQgbGlnaHQsIGdpdmluZyBvZmYgYSBnbG93ICovXFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDNweCk7XFxufVxcblxcbi5kZW1vIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG5cXG4ubGF5ZXJzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxheWVyczo6YmVmb3JlLFxcbi5sYXllcnM6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMTAlO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5sYXllcnM6OmJlZm9yZSB7XFxuICB0b3A6IDEwcHg7XFxuICBsZWZ0OiAxNXB4O1xcbiAgY29sb3I6ICNlMDI4N2Q7XFxufVxcblxcbi5sYXllcnM6OmFmdGVyIHtcXG4gIHRvcDogNXB4O1xcbiAgbGVmdDogLTEwcHg7XFxuICBjb2xvcjogIzFiYzdmYjtcXG59XFxuXFxuLnBhdGhzIHtcXG4gIGFuaW1hdGlvbjogcGF0aHMgNXMgc3RlcC1lbmQgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgcGF0aHMge1xcbiAgMCUge1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgICAgMCUgNDMlLFxcbiAgICAgIDgzJSA0MyUsXFxuICAgICAgODMlIDIyJSxcXG4gICAgICAyMyUgMjIlLFxcbiAgICAgIDIzJSAyNCUsXFxuICAgICAgOTElIDI0JSxcXG4gICAgICA5MSUgMjYlLFxcbiAgICAgIDE4JSAyNiUsXFxuICAgICAgMTglIDgzJSxcXG4gICAgICAyOSUgODMlLFxcbiAgICAgIDI5JSAxNyUsXFxuICAgICAgNDElIDE3JSxcXG4gICAgICA0MSUgMzklLFxcbiAgICAgIDE4JSAzOSUsXFxuICAgICAgMTglIDgyJSxcXG4gICAgICA1NCUgODIlLFxcbiAgICAgIDU0JSA4OCUsXFxuICAgICAgMTklIDg4JSxcXG4gICAgICAxOSUgNCUsXFxuICAgICAgMzklIDQlLFxcbiAgICAgIDM5JSAxNCUsXFxuICAgICAgNzYlIDE0JSxcXG4gICAgICA3NiUgNTIlLFxcbiAgICAgIDIzJSA1MiUsXFxuICAgICAgMjMlIDM1JSxcXG4gICAgICAxOSUgMzUlLFxcbiAgICAgIDE5JSA4JSxcXG4gICAgICAzNiUgOCUsXFxuICAgICAgMzYlIDMxJSxcXG4gICAgICA3MyUgMzElLFxcbiAgICAgIDczJSAxNiUsXFxuICAgICAgMSUgMTYlLFxcbiAgICAgIDElIDU2JSxcXG4gICAgICA1MCUgNTYlLFxcbiAgICAgIDUwJSA4JVxcbiAgICApO1xcbiAgfVxcblxcbiAgNSUge1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgICAgMCUgMjklLFxcbiAgICAgIDQ0JSAyOSUsXFxuICAgICAgNDQlIDgzJSxcXG4gICAgICA5NCUgODMlLFxcbiAgICAgIDk0JSA1NiUsXFxuICAgICAgMTElIDU2JSxcXG4gICAgICAxMSUgNjQlLFxcbiAgICAgIDk0JSA2NCUsXFxuICAgICAgOTQlIDcwJSxcXG4gICAgICA4OCUgNzAlLFxcbiAgICAgIDg4JSAzMiUsXFxuICAgICAgMTglIDMyJSxcXG4gICAgICAxOCUgOTYlLFxcbiAgICAgIDEwJSA5NiUsXFxuICAgICAgMTAlIDYyJSxcXG4gICAgICA5JSA2MiUsXFxuICAgICAgOSUgODQlLFxcbiAgICAgIDY4JSA4NCUsXFxuICAgICAgNjglIDUwJSxcXG4gICAgICA1MiUgNTAlLFxcbiAgICAgIDUyJSA1NSUsXFxuICAgICAgMzUlIDU1JSxcXG4gICAgICAzNSUgODclLFxcbiAgICAgIDI1JSA4NyUsXFxuICAgICAgMjUlIDM5JSxcXG4gICAgICAxNSUgMzklLFxcbiAgICAgIDE1JSA4OCUsXFxuICAgICAgNTIlIDg4JVxcbiAgICApO1xcbiAgfVxcblxcbiAgMzAlIHtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcbiAgICAgIDAlIDUzJSxcXG4gICAgICA5MyUgNTMlLFxcbiAgICAgIDkzJSA2MiUsXFxuICAgICAgNjglIDYyJSxcXG4gICAgICA2OCUgMzclLFxcbiAgICAgIDk3JSAzNyUsXFxuICAgICAgOTclIDg5JSxcXG4gICAgICAxMyUgODklLFxcbiAgICAgIDEzJSA0NSUsXFxuICAgICAgNTElIDQ1JSxcXG4gICAgICA1MSUgODglLFxcbiAgICAgIDE3JSA4OCUsXFxuICAgICAgMTclIDU0JSxcXG4gICAgICA4MSUgNTQlLFxcbiAgICAgIDgxJSA3NSUsXFxuICAgICAgNzklIDc1JSxcXG4gICAgICA3OSUgNzYlLFxcbiAgICAgIDM4JSA3NiUsXFxuICAgICAgMzglIDI4JSxcXG4gICAgICA2MSUgMjglLFxcbiAgICAgIDYxJSAxMiUsXFxuICAgICAgNTUlIDEyJSxcXG4gICAgICA1NSUgNjIlLFxcbiAgICAgIDY4JSA2MiUsXFxuICAgICAgNjglIDUxJSxcXG4gICAgICAwJSA1MSUsXFxuICAgICAgMCUgOTIlLFxcbiAgICAgIDYzJSA5MiUsXFxuICAgICAgNjMlIDQlLFxcbiAgICAgIDY1JSA0JVxcbiAgICApO1xcbiAgfVxcblxcbiAgNDUlIHtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxcbiAgICAgIDAlIDMzJSxcXG4gICAgICAyJSAzMyUsXFxuICAgICAgMiUgNjklLFxcbiAgICAgIDU4JSA2OSUsXFxuICAgICAgNTglIDk0JSxcXG4gICAgICA1NSUgOTQlLFxcbiAgICAgIDU1JSAyNSUsXFxuICAgICAgMzMlIDI1JSxcXG4gICAgICAzMyUgODUlLFxcbiAgICAgIDE2JSA4NSUsXFxuICAgICAgMTYlIDE5JSxcXG4gICAgICA1JSAxOSUsXFxuICAgICAgNSUgMjAlLFxcbiAgICAgIDc5JSAyMCUsXFxuICAgICAgNzklIDk2JSxcXG4gICAgICA5MyUgOTYlLFxcbiAgICAgIDkzJSA1MCUsXFxuICAgICAgNSUgNTAlLFxcbiAgICAgIDUlIDc0JSxcXG4gICAgICA1NSUgNzQlLFxcbiAgICAgIDU1JSA1NyUsXFxuICAgICAgOTYlIDU3JSxcXG4gICAgICA5NiUgNTklLFxcbiAgICAgIDg3JSA1OSUsXFxuICAgICAgODclIDY1JSxcXG4gICAgICA4MiUgNjUlLFxcbiAgICAgIDgyJSAzOSUsXFxuICAgICAgNjMlIDM5JSxcXG4gICAgICA2MyUgOTIlLFxcbiAgICAgIDQlIDkyJSxcXG4gICAgICA0JSAzNiUsXFxuICAgICAgMjQlIDM2JSxcXG4gICAgICAyNCUgNzAlLFxcbiAgICAgIDElIDcwJSxcXG4gICAgICAxJSA0MyUsXFxuICAgICAgMTUlIDQzJSxcXG4gICAgICAxNSUgMjglLFxcbiAgICAgIDIzJSAyOCUsXFxuICAgICAgMjMlIDcxJSxcXG4gICAgICA5MCUgNzElLFxcbiAgICAgIDkwJSA4NiUsXFxuICAgICAgOTclIDg2JSxcXG4gICAgICA5NyUgMSUsXFxuICAgICAgNjAlIDElLFxcbiAgICAgIDYwJSA2NyUsXFxuICAgICAgNzElIDY3JSxcXG4gICAgICA3MSUgOTElLFxcbiAgICAgIDE3JSA5MSUsXFxuICAgICAgMTclIDE0JSxcXG4gICAgICAzOSUgMTQlLFxcbiAgICAgIDM5JSAzMCUsXFxuICAgICAgNTglIDMwJSxcXG4gICAgICA1OCUgMTElLFxcbiAgICAgIDUyJSAxMSUsXFxuICAgICAgNTIlIDgzJSxcXG4gICAgICA2OCUgODMlXFxuICAgICk7XFxuICB9XFxuXFxuICA3NiUge1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgICAgMCUgMjYlLFxcbiAgICAgIDE1JSAyNiUsXFxuICAgICAgMTUlIDczJSxcXG4gICAgICA3MiUgNzMlLFxcbiAgICAgIDcyJSA3MCUsXFxuICAgICAgNzclIDcwJSxcXG4gICAgICA3NyUgNzUlLFxcbiAgICAgIDglIDc1JSxcXG4gICAgICA4JSA0MiUsXFxuICAgICAgNCUgNDIlLFxcbiAgICAgIDQlIDYxJSxcXG4gICAgICAxNyUgNjElLFxcbiAgICAgIDE3JSAxMiUsXFxuICAgICAgMjYlIDEyJSxcXG4gICAgICAyNiUgNjMlLFxcbiAgICAgIDczJSA2MyUsXFxuICAgICAgNzMlIDQzJSxcXG4gICAgICA5MCUgNDMlLFxcbiAgICAgIDkwJSA2NyUsXFxuICAgICAgNTAlIDY3JSxcXG4gICAgICA1MCUgNDElLFxcbiAgICAgIDQyJSA0MSUsXFxuICAgICAgNDIlIDQ2JSxcXG4gICAgICA1MCUgNDYlLFxcbiAgICAgIDUwJSA4NCUsXFxuICAgICAgOTYlIDg0JSxcXG4gICAgICA5NiUgNzglLFxcbiAgICAgIDQ5JSA3OCUsXFxuICAgICAgNDklIDI1JSxcXG4gICAgICA2MyUgMjUlLFxcbiAgICAgIDYzJSAxNCVcXG4gICAgKTtcXG4gIH1cXG5cXG4gIDkwJSB7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgICAwJSA0MSUsXFxuICAgICAgMTMlIDQxJSxcXG4gICAgICAxMyUgNiUsXFxuICAgICAgODclIDYlLFxcbiAgICAgIDg3JSA5MyUsXFxuICAgICAgMTAlIDkzJSxcXG4gICAgICAxMCUgMTMlLFxcbiAgICAgIDg5JSAxMyUsXFxuICAgICAgODklIDYlLFxcbiAgICAgIDMlIDYlLFxcbiAgICAgIDMlIDglLFxcbiAgICAgIDE2JSA4JSxcXG4gICAgICAxNiUgNzklLFxcbiAgICAgIDAlIDc5JSxcXG4gICAgICAwJSA5OSUsXFxuICAgICAgOTIlIDk5JSxcXG4gICAgICA5MiUgOTAlLFxcbiAgICAgIDUlIDkwJSxcXG4gICAgICA1JSA2MCUsXFxuICAgICAgMCUgNjAlLFxcbiAgICAgIDAlIDQ4JSxcXG4gICAgICA4OSUgNDglLFxcbiAgICAgIDg5JSAxMyUsXFxuICAgICAgODAlIDEzJSxcXG4gICAgICA4MCUgNDMlLFxcbiAgICAgIDk1JSA0MyUsXFxuICAgICAgOTUlIDE5JSxcXG4gICAgICA4MCUgMTklLFxcbiAgICAgIDgwJSA4NSUsXFxuICAgICAgMzglIDg1JSxcXG4gICAgICAzOCUgNjIlXFxuICAgICk7XFxuICB9XFxuXFxuICAxJSxcXG4gIDclLFxcbiAgMzMlLFxcbiAgNDclLFxcbiAgNzglLFxcbiAgOTMlIHtcXG4gICAgY2xpcC1wYXRoOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uZ2xpdGNoIHNwYW4ge1xcbiAgYW5pbWF0aW9uOiBwYXRocyA1cyBzdGVwLWVuZCBpbmZpbml0ZTtcXG59XFxuXFxuLmdsaXRjaDo6YmVmb3JlIHtcXG4gIGFuaW1hdGlvbjogcGF0aHMgNXMgc3RlcC1lbmQgaW5maW5pdGUsIG9wYWNpdHkgNXMgc3RlcC1lbmQgaW5maW5pdGUsXFxuICAgIGZvbnQgOHMgc3RlcC1lbmQgaW5maW5pdGUsIG1vdmVtZW50IDEwcyBzdGVwLWVuZCBpbmZpbml0ZTtcXG59XFxuXFxuLmdsaXRjaDo6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uOiBwYXRocyA1cyBzdGVwLWVuZCBpbmZpbml0ZSwgb3BhY2l0eSA1cyBzdGVwLWVuZCBpbmZpbml0ZSxcXG4gICAgZm9udCA3cyBzdGVwLWVuZCBpbmZpbml0ZSwgbW92ZW1lbnQgOHMgc3RlcC1lbmQgaW5maW5pdGU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ob21lLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtc2VjdGlvbiBoMSB7XFxuICBtYXJnaW46IDEwcHggMHB4O1xcbiAgcGFkZGluZzogMjBweCAyMHB4O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uIGRpdiB7XFxuICBtYXJnaW46IDEwcHggMHB4O1xcbiAgcGFkZGluZzogMjBweCAyMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ob21lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhvbWUtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1zZWN0aW9uIGgxIHtcXG4gIG1hcmdpbjogMTBweCAwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxufVxcblxcbi5ob21lLXNlY3Rpb24gZGl2IHtcXG4gIG1hcmdpbjogMTBweCAwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsaXRjaC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsaXRjaC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL2hvbWUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZ2xpdGNoLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUtc2VjdGlvbicpO1xuXG4gIC8vIEhlYWRlciBDb2RlXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdnbGl0Y2gnKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2xheWVycycpO1xuXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4uaW5uZXJIVE1MID0gXCJMby1GaSBDYWZlXCI7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gIC8vIElmcmFtZSBDb2RlXG4gIGNvbnN0IHZpZGVvUGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZpZGVvUGxheWVyLmlubmVySFRNTCA9IFwiPGlmcmFtZSB3aWR0aD0nNTYwJyBoZWlnaHQ9JzMxNScgc3JjPSdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC81cWFwNWFPNGk5QScgdGl0bGU9J1lvdVR1YmUgdmlkZW8gcGxheWVyJyBmcmFtZWJvcmRlcj0nMCcgYWxsb3c9J2FjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmUnIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cIlxuXG4gIGhvbWUuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgaG9tZS5hcHBlbmRDaGlsZCh2aWRlb1BsYXllcik7XG5cbiAgcmV0dXJuIGhvbWU7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9