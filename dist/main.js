/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* stylelint-disable no-descending-specificity */\\r\\nbody {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  background-color: rgb(10, 11, 20);\\r\\n  font-family: Lato, sans-serif;\\r\\n}\\r\\n\\r\\nheader,\\r\\nfooter {\\r\\n  color: #fff;\\r\\n  width: 100%;\\r\\n  height: 10vh;\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n  background-color: #ef5350;\\r\\n  border: rgb(97, 97, 97) solid 1px;\\r\\n  box-shadow: 0 0 1rem 1rem rgb(52, 52, 59);\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#container {\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  font-weight: bold;\\r\\n  font-size: 13px;\\r\\n  cursor: pointer;\\r\\n  transition-duration: 0.4s;\\r\\n  width: 100px;\\r\\n  padding: 10px;\\r\\n  border-radius: 8px;\\r\\n  margin-bottom: 15px;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n.comment-btn:hover {\\r\\n  background-color: #333;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n#pokemon-container {\\r\\n  display: grid;\\r\\n  gap: 20px;\\r\\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\\r\\n  grid-template-rows: 1fr;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  width: auto;\\r\\n  background-color: rgb(247, 247, 247);\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.image {\\r\\n  background-color: rgb(243, 243, 243)\\r\\n}\\r\\n\\r\\n.image img {\\r\\n  width: 100%;\\r\\n  max-width: 400px;\\r\\n  max-height: 400px;\\r\\n  background-color: rgb(243, 243, 243);\\r\\n}\\r\\n\\r\\n.poke-details {\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n  color: #fff;\\r\\n  background-color: #ef5350;\\r\\n  box-shadow: 0 0 1rem 0.5rem rgb(52, 52, 59);\\r\\n}\\r\\n\\r\\nh4 {\\r\\n  margin: 0;\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\np {\\r\\n  font-size: 1.5rem;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.like-pokemon {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.like-pokemon p {\\r\\n  font-size: 0.8rem;\\r\\n  margin: 3px;\\r\\n}\\r\\n\\r\\n.fa-heart {\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.fa-heart:hover {\\r\\n  cursor: pointer;\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.card ul {\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  padding: 1rem 0;\\r\\n}\\r\\n\\r\\n.card li {\\r\\n  list-style: none;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  font-size: 1.5rem;\\r\\n  cursor: pointer;\\r\\n  transition: 0.2s;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  background: #fff;\\r\\n  color: #ef5350;\\r\\n}\\r\\n\\r\\n.popup-card {\\r\\n  width: 80vw;\\r\\n  height: 80vh;\\r\\n  background-color: #d3d3d3ee;\\r\\n  color: #fff;\\r\\n  position: sticky;\\r\\n  z-index: 1;\\r\\n  bottom: 10%;\\r\\n  left: 10%;\\r\\n  box-shadow: 1rem 1rem 3rem 1rem #333;\\r\\n  display: flex;\\r\\n  margin: 0 !important;\\r\\n}\\r\\n\\r\\n.popup-details {\\r\\n  width: 30%;\\r\\n  background-color: #ef5350;\\r\\n  box-shadow: 1rem 0 1rem 0 #333;\\r\\n  z-index: 2;\\r\\n}\\r\\n\\r\\n.popup-details p {\\r\\n  font-size: 1.3rem;\\r\\n}\\r\\n\\r\\n.popup-details h4 {\\r\\n  font-size: 1.3rem;\\r\\n}\\r\\n\\r\\n.popup-details .like-pokemon {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n}\\r\\n\\r\\n.popup-poke-details {\\r\\n  width: 100%;\\r\\n  height: 75%;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.popup-image img {\\r\\n  width: 100%;\\r\\n  background-color: rgb(243, 243, 243);\\r\\n}\\r\\n\\r\\n.popup-card ul {\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  padding: 1rem 0;\\r\\n}\\r\\n\\r\\n.popup-card li {\\r\\n  color: #000;\\r\\n  font-weight: bold;\\r\\n  list-style: none;\\r\\n  font-size: 1rem;\\r\\n  padding: 1rem;\\r\\n  background-color: #fff;\\r\\n  border: #ffcb05 solid 5px;\\r\\n}\\r\\n\\r\\n.comments-div {\\r\\n  width: 56%;\\r\\n  background-color: #ef5350;\\r\\n  padding: 2rem;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  color: #000;\\r\\n  width: 100%;\\r\\n  height: 45%;\\r\\n  border: #333 solid 1px;\\r\\n  background-color: rgba(255, 255, 255, 0.63);\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n.single-comment {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.comments p {\\r\\n  font-size: 1rem;\\r\\n  margin: 0.3rem;\\r\\n}\\r\\n\\r\\nform {\\r\\n  width: 100%;\\r\\n  height: 45%;\\r\\n}\\r\\n\\r\\nform p {\\r\\n  font-size: 1rem;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.counter-div {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n\\r\\n.form-group {\\r\\n  padding: 0.1rem 0;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  width: 100%;\\r\\n  height: 2rem;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  font-family: Lato, sans-serif;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n#submit-btn {\\r\\n  font-weight: bold;\\r\\n  font-size: 1.5rem;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://pokemon/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://pokemon/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://pokemon/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://pokemon/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://pokemon/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://pokemon/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://pokemon/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://pokemon/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://pokemon/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://pokemon/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_getCounts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getCounts.js */ \"./src/modules/getCounts.js\");\n/* harmony import */ var _modules_renderStructure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderStructure.js */ \"./src/modules/renderStructure.js\");\n/* harmony import */ var _modules_apiCall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/apiCall.js */ \"./src/modules/apiCall.js\");\n/* harmony import */ var _modules_itemCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/itemCounter.js */ \"./src/modules/itemCounter.js\");\n\n\n\n\n\n// window.addEventListener('load', () => {\n//   displayCards();\n// });\n\nconst starter = async () => {\n  const data = await (0,_modules_apiCall_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  await (0,_modules_renderStructure_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data.results);\n  const pokes = (0,_modules_itemCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(data.results);\n  (0,_modules_getCounts_js__WEBPACK_IMPORTED_MODULE_1__.displayCounts)(pokes);\n};\nstarter();\n\n//# sourceURL=webpack://pokemon/./src/index.js?");

/***/ }),

/***/ "./src/modules/apiCall.js":
/*!********************************!*\
  !*** ./src/modules/apiCall.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchPokemons = async () => {\r\n  const pokeData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');\r\n  const allData = await pokeData.json();\r\n  return allData;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchPokemons);\n\n//# sourceURL=webpack://pokemon/./src/modules/apiCall.js?");

/***/ }),

/***/ "./src/modules/getCounts.js":
/*!**********************************!*\
  !*** ./src/modules/getCounts.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayCounts\": () => (/* binding */ displayCounts),\n/* harmony export */   \"likeCountes\": () => (/* binding */ likeCountes)\n/* harmony export */ });\n/* harmony import */ var _manageLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageLikes.js */ \"./src/modules/manageLikes.js\");\n\n\nconst displayCounts = (myPokes) => {\n  const counts = document.querySelector('.myPokes');\n  counts.innerText = `${myPokes} pokemons`;\n};\nconst likeCountes = async (pokeId, containerDiv) => {\n  const likes = await (0,_manageLikes_js__WEBPACK_IMPORTED_MODULE_0__.updateLikes)(pokeId);\n  containerDiv.innerHTML = `${likes} likes`;\n};\n\n//# sourceURL=webpack://pokemon/./src/modules/getCounts.js?");

/***/ }),

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pokeCounter = (data) => {\n  const counter = data.length;\n  return counter;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pokeCounter);\n\n//# sourceURL=webpack://pokemon/./src/modules/itemCounter.js?");

/***/ }),

/***/ "./src/modules/manageLikes.js":
/*!************************************!*\
  !*** ./src/modules/manageLikes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appId\": () => (/* binding */ appId),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes),\n/* harmony export */   \"updateLikes\": () => (/* binding */ updateLikes)\n/* harmony export */ });\nconst appId = 'j1jEowx7LZmaUO42biPH';\nconst url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;\nconst postLikes = async (id) => {\n  const postObject = { item_id: id };\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(postObject),\n  });\n  return response;\n};\nconst getLikes = async () => {\n  const likesData = await fetch(url);\n  const allLikes = await likesData.json();\n  return allLikes;\n};\n\nconst updateLikes = async (id) => {\n  const storeLikes = await getLikes();\n  let results = 0;\n  storeLikes.forEach((e) => {\n    if (e.item_id.toString() === id.toString()) {\n      results = e.likes;\n    }\n  });\n\n  return results;\n};\n\n//# sourceURL=webpack://pokemon/./src/modules/manageLikes.js?");

/***/ }),

/***/ "./src/modules/managePosts.js":
/*!************************************!*\
  !*** ./src/modules/managePosts.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\n/* harmony import */ var _manageLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageLikes.js */ \"./src/modules/manageLikes.js\");\n\r\n\r\nconst baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_manageLikes_js__WEBPACK_IMPORTED_MODULE_0__.appId}/comments`;\r\n\r\nconst postComment = async (id, username, comment) => {\r\n  const postObj = {\r\n    item_id: id,\r\n    username,\r\n    comment,\r\n  };\r\n  const response = await fetch(baseUrl, {\r\n    method: 'POST',\r\n    headers: { 'Content-Type': 'application/json' },\r\n    body: JSON.stringify(postObj),\r\n  });\r\n  return response;\r\n};\r\n\r\nconst getComments = async (id) => {\r\n  const pokeComment = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_manageLikes_js__WEBPACK_IMPORTED_MODULE_0__.appId}/comments?item_id=${id}`);\r\n  const allComments = await pokeComment.json();\r\n  return allComments;\r\n};\n\n//# sourceURL=webpack://pokemon/./src/modules/managePosts.js?");

/***/ }),

/***/ "./src/modules/openPopup.js":
/*!**********************************!*\
  !*** ./src/modules/openPopup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openPopup\": () => (/* binding */ openPopup)\n/* harmony export */ });\n/* harmony import */ var _getCounts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCounts.js */ \"./src/modules/getCounts.js\");\n/* harmony import */ var _renderPokeImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderPokeImage.js */ \"./src/modules/renderPokeImage.js\");\n/* harmony import */ var _renderPokeType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderPokeType.js */ \"./src/modules/renderPokeType.js\");\n/* harmony import */ var _managePosts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./managePosts.js */ \"./src/modules/managePosts.js\");\n/* eslint-disable import/prefer-default-export */\r\n/* eslint-disable no-use-before-define */\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction openPopup(id) {\r\n  function fetchPokemonsPopup(id) {\r\n    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)\r\n      .then((response) => response.json())\r\n      .then((pokemonInfo) => {\r\n        renderPkmnPopup(pokemonInfo);\r\n      });\r\n  }\r\n\r\n  const displayComments = async (id, commentDiv) => {\r\n    const pokemonComments = await (0,_managePosts_js__WEBPACK_IMPORTED_MODULE_3__.getComments)(id);\r\n    pokemonComments.forEach((comment) => {\r\n      const comDiv = document.createElement('div');\r\n      comDiv.classList.add('single-comment');\r\n      const user = document.createElement('p');\r\n      user.innerHTML = `${comment.username}: `;\r\n      const userCom = document.createElement('p');\r\n      userCom.innerHTML = comment.comment;\r\n      comDiv.append(user, userCom);\r\n      commentDiv.append(comDiv);\r\n    });\r\n  };\r\n\r\n  const countComments = async (id, counterP) => {\r\n    const pokemonComments = await (0,_managePosts_js__WEBPACK_IMPORTED_MODULE_3__.getComments)(id);\r\n    const commentsCounter = pokemonComments.length;\r\n    counterP.innerHTML = commentsCounter;\r\n  };\r\n\r\n  const removeComments = () => {\r\n    const comsDiv = document.getElementById('all-comments');\r\n    comsDiv.innerHTML = '';\r\n  };\r\n\r\n  function renderPkmnPopup(pokemonInfo) {\r\n    const PopupPokemonContainer = document.getElementById('container');\r\n    const pokePopup = document.createElement('div');\r\n    pokePopup.classList.add('popup-card');\r\n    pokePopup.setAttribute('id', 'popup');\r\n\r\n    const popupDetails = document.createElement('div');\r\n    popupDetails.classList.add('popup-details');\r\n\r\n    const pokeDetails = document.createElement('div');\r\n    pokeDetails.classList.add('popup-poke-details');\r\n\r\n    (0,_renderPokeImage_js__WEBPACK_IMPORTED_MODULE_1__.createImg)(pokemonInfo.id, pokeDetails);\r\n\r\n    const closeCommentBtn = document.createElement('button');\r\n    closeCommentBtn.classList.add('close-comment-btn');\r\n    closeCommentBtn.innerHTML = 'Close';\r\n    closeCommentBtn.addEventListener('click', () => {\r\n      const popup = document.getElementById('popup');\r\n      popup.remove();\r\n    });\r\n\r\n    const pokeName = document.createElement('h4');\r\n    pokeName.innerText = pokemonInfo.name;\r\n\r\n    const pokeNumber = document.createElement('p');\r\n    pokeNumber.innerText = `#${pokemonInfo.id}`;\r\n\r\n    const likePokemon = document.createElement('div');\r\n    likePokemon.className = 'like-pokemon';\r\n\r\n    const likeIcon = document.createElement('i');\r\n    likeIcon.className = 'far fa-heart fa-lg';\r\n    likeIcon.setAttribute('id', `like${pokemonInfo.id}`);\r\n\r\n    const likeCounter = document.createElement('p');\r\n    likeCounter.classList.add('like-counter');\r\n\r\n    (0,_getCounts_js__WEBPACK_IMPORTED_MODULE_0__.likeCountes)(pokemonInfo.id, likeCounter);\r\n\r\n    const pokeTypes = document.createElement('ul');\r\n\r\n    (0,_renderPokeType_js__WEBPACK_IMPORTED_MODULE_2__.createPokeType)(pokemonInfo.types, pokeTypes);\r\n\r\n    const commentsdiv = document.createElement('div');\r\n    commentsdiv.classList.add('comments-div');\r\n    commentsdiv.innerHTML = `\r\n        <div id=\"all-comments\" class=\"comments\">\r\n        </div>\r\n        <form id=\"comment-form\">\r\n            <div class=\"counter-div\">\r\n              <p>Comments: </p><p id=\"comments-counter\"></p>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"name\">Your Name</label>\r\n                <input class=\"user-name\" type=\"text\" id=\"name\" placeholder=\"Your Name\" required>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"comment\"></label>\r\n                <textarea class=\"user-comment\" id=\"comment\" rows=\"10\" placeholder=\"Type your comment here\" required/></textarea>\r\n            </div>\r\n            <input id=\"submit-btn\" class=\"button\" type=\"submit\" value=\"Post Comment\">\r\n        </form>\r\n    `;\r\n\r\n    likePokemon.append(likeIcon, likeCounter);\r\n    pokeDetails.append(pokeName, pokeNumber, likePokemon);\r\n    popupDetails.append(pokeDetails, pokeTypes);\r\n    pokePopup.append(popupDetails, commentsdiv, closeCommentBtn);\r\n    PopupPokemonContainer.append(pokePopup);\r\n\r\n    const postBtn = document.getElementById('submit-btn');\r\n    const input = document.getElementById('name');\r\n    const comment = document.getElementById('comment');\r\n    postBtn.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      const allCommentDiv = document.getElementById('all-comments');\r\n      (0,_managePosts_js__WEBPACK_IMPORTED_MODULE_3__.postComment)(pokemonInfo.id, input.value, comment.value);\r\n      removeComments();\r\n      setTimeout(() => {\r\n        displayComments(pokemonInfo.id, allCommentDiv);\r\n        countComments(pokemonInfo.id, counterP);\r\n      }, 500);\r\n    });\r\n    const counterP = document.getElementById('comments-counter');\r\n    const commentDiv = document.getElementById('all-comments');\r\n    displayComments(id, commentDiv);\r\n    countComments(id, counterP);\r\n  }\r\n\r\n  fetchPokemonsPopup(id);\r\n}\r\n\n\n//# sourceURL=webpack://pokemon/./src/modules/openPopup.js?");

/***/ }),

/***/ "./src/modules/pokeDetail.js":
/*!***********************************!*\
  !*** ./src/modules/pokeDetail.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchPokemons\": () => (/* binding */ fetchPokemons)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nconst fetchPokemons = async (url) => {\n  const pokeData = await fetch(url);\n  const allData = await pokeData.json();\n  return allData;\n};\n\n\n//# sourceURL=webpack://pokemon/./src/modules/pokeDetail.js?");

/***/ }),

/***/ "./src/modules/renderPokeImage.js":
/*!****************************************!*\
  !*** ./src/modules/renderPokeImage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createImg\": () => (/* binding */ createImg)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nconst createImg = async (pokeID, containerDiv) => {\n  // console.log(pokeID);\n  const pokeImgContainer = document.createElement('div');\n  pokeImgContainer.classList.add('image');\n\n  const pokeImage = document.createElement('img');\n  pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeID}.png`;\n\n  pokeImgContainer.append(pokeImage);\n  containerDiv.append(pokeImgContainer);\n};\n\n\n//# sourceURL=webpack://pokemon/./src/modules/renderPokeImage.js?");

/***/ }),

/***/ "./src/modules/renderPokeType.js":
/*!***************************************!*\
  !*** ./src/modules/renderPokeType.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPokeType\": () => (/* binding */ createPokeType)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nconst createPokeType = async (types, ul) => {\n  types.forEach((type) => {\n    const typeLi = document.createElement('li');\n    typeLi.innerText = type.type.name;\n    ul.append(typeLi);\n  });\n};\n\n//# sourceURL=webpack://pokemon/./src/modules/renderPokeType.js?");

/***/ }),

/***/ "./src/modules/renderStructure.js":
/*!****************************************!*\
  !*** ./src/modules/renderStructure.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderPokeImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPokeImage.js */ \"./src/modules/renderPokeImage.js\");\n/* harmony import */ var _renderPokeType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderPokeType.js */ \"./src/modules/renderPokeType.js\");\n/* harmony import */ var _pokeDetail_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokeDetail.js */ \"./src/modules/pokeDetail.js\");\n/* harmony import */ var _manageLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manageLikes.js */ \"./src/modules/manageLikes.js\");\n/* harmony import */ var _getCounts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCounts.js */ \"./src/modules/getCounts.js\");\n/* harmony import */ var _openPopup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./openPopup.js */ \"./src/modules/openPopup.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst render = (data) => {\r\n  data.forEach(async (pokeData) => {\r\n    const mydata = await (0,_pokeDetail_js__WEBPACK_IMPORTED_MODULE_2__.fetchPokemons)(pokeData.url);\r\n    const allPokemonContainer = document.getElementById('pokemon-container');\r\n\r\n    const pokeContainer = document.createElement('div');\r\n    pokeContainer.classList.add('card');\r\n\r\n    (0,_renderPokeImage_js__WEBPACK_IMPORTED_MODULE_0__.createImg)(mydata.id, pokeContainer);\r\n\r\n    const pokeDetails = document.createElement('div');\r\n    pokeDetails.classList.add('poke-details');\r\n\r\n    const pokeName = document.createElement('h4');\r\n    pokeName.innerText = pokeData.name;\r\n\r\n    const pokeNumber = document.createElement('p');\r\n    pokeNumber.innerText = `#${mydata.id}`;\r\n\r\n    const likePokemon = document.createElement('div');\r\n    likePokemon.className = 'like-pokemon';\r\n\r\n    const likeIcon = document.createElement('i');\r\n    likeIcon.className = 'far fa-heart fa-lg';\r\n    likeIcon.setAttribute('id', `like${mydata.id}`);\r\n\r\n    const likeCounter = document.createElement('p');\r\n    likeCounter.classList.add('like-counter');\r\n\r\n    (0,_getCounts_js__WEBPACK_IMPORTED_MODULE_4__.likeCountes)(mydata.id, likeCounter);\r\n\r\n    const pokeTypes = document.createElement('ul');\r\n\r\n    const commentBtn = document.createElement('button');\r\n    commentBtn.classList.add('comment-btn');\r\n    commentBtn.setAttribute('id', `${mydata.id}`);\r\n    commentBtn.innerHTML = 'Comments';\r\n    commentBtn.addEventListener('click', () => {\r\n      (0,_openPopup_js__WEBPACK_IMPORTED_MODULE_5__.openPopup)(`${mydata.id}`);\r\n    });\r\n\r\n    (0,_renderPokeType_js__WEBPACK_IMPORTED_MODULE_1__.createPokeType)(mydata.types, pokeTypes);\r\n\r\n    likePokemon.append(likeIcon, likeCounter);\r\n    pokeDetails.append(pokeName, pokeNumber, likePokemon);\r\n    pokeContainer.append(pokeDetails, pokeTypes, commentBtn);\r\n    allPokemonContainer.appendChild(pokeContainer);\r\n\r\n    const likeBtn = document.getElementById(`like${mydata.id}`);\r\n    likeBtn.addEventListener('click', () => {\r\n      (0,_manageLikes_js__WEBPACK_IMPORTED_MODULE_3__.postLikes)(mydata.id);\r\n      (0,_getCounts_js__WEBPACK_IMPORTED_MODULE_4__.likeCountes)(mydata.id, likeCounter);\r\n    });\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://pokemon/./src/modules/renderStructure.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;