/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500;600;700;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  text-decoration: none;\\n  color: #222;\\n  margin: 0;\\n}\\n\\nbody {\\n  background-color: #fff;\\n  padding: 0;\\n  margin: 0;\\n  font-family: 'Inter', sans-serif;\\n}\\n\\n.nav-menu {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding: 1% 10%;\\n  background: #fff;\\n  margin-bottom: 10px;\\n}\\n\\n#logo-nav {\\n  padding: 10px;\\n  border-radius: 100%;\\n  background: #4e6961;\\n  color: #f2e8df;\\n  font-size: 18px;\\n  font-weight: 700;\\n  letter-spacing: -1px;\\n}\\n\\n.list-menu {\\n  display: flex;\\n  gap: 15px;\\n  list-style: none;\\n  color: #4e6961;\\n  font-size: 15px;\\n  line-height: 18px;\\n  font-weight: 600;\\n}\\n\\n.container {\\n  width: 100%;\\n}\\n\\n.list-food {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  padding: 0;\\n}\\n\\n.nav-bar {\\n  margin: 20px;\\n}\\n\\n.nav-item {\\n  list-style: none;\\n  display: flex;\\n  flex-direction: row;\\n  padding: 5px;\\n}\\n\\n.nav-item li {\\n  text-decoration: none;\\n  font-size: 20px;\\n  font-weight: 600;\\n  color: black;\\n  padding: 10px;\\n}\\n\\n.link-breakfast,\\n.link-safefood {\\n  cursor: pointer;\\n  font-size: 24px;\\n  font-weight: 700;\\n  line-height: 24px;\\n  letter-spacing: 1px;\\n  color: #1d2824;\\n  padding: 0;\\n}\\n\\n.food-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-between;\\n  gap: 10px;\\n}\\n\\n.food-card {\\n  border: 2px solid #4e6961;\\n  border-radius: 10px;\\n  padding: 2px;\\n  height: 310px;\\n  display: grid;\\n  grid-template-rows: 65% 12% 18%;\\n  gap: 5px;\\n  box-shadow: 0 0 8px #4e6961;\\n}\\n\\n.food-img img {\\n  width: 100%;\\n  height: 200px;\\n  border-radius: 10px;\\n  object-fit: cover;\\n}\\n\\n.food-title {\\n  text-align: center;\\n}\\n\\n.reactions {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  gap: 20px;\\n  margin: 10px;\\n}\\n\\n.comments {\\n  background-color: #4e6961;\\n  border: none;\\n  color: #fff;\\n  font-size: 12px;\\n  font-weight: 600;\\n  border-radius: 10px;\\n  padding: 5px 10px;\\n  cursor: pointer;\\n}\\n\\n.likes {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  gap: 10px;\\n  font-size: 15px;\\n  cursor: pointer;\\n}\\n\\n.fa-heart {\\n  color: rgb(176, 5, 5);\\n  font-size: 20px;\\n}\\n\\n/* Comments PopUp */\\n.comment-popup {\\n  display: none;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 1000;\\n  padding: 0;\\n  overflow: auto;\\n  background: rgba(255, 255, 255, 0.507);\\n}\\n\\n.comment-container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  gap: 5px;\\n  width: 60%;\\n  margin: 0 auto;\\n  background: #fff;\\n  padding: 2px;\\n  border: 2px solid #4e6961;\\n  border-radius: 5px;\\n}\\n\\n.img-pop {\\n  width: 100%;\\n  height: 400px;\\n  border-radius: 3%;\\n}\\n\\n.pop-title {\\n  color: #4e6961;\\n  font-weight: 700;\\n  padding: 4px 10px;\\n}\\n\\n.food-comment h3 {\\n  color: #4e6961;\\n  font-size: 16px;\\n  font-weight: 500;\\n  padding: 4px 10px;\\n}\\n\\n.comment-form {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 30px;\\n}\\n\\n.form-input {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 10px;\\n  padding: 10px;\\n}\\n\\n.form-input input,\\n.form-input textarea {\\n  width: 100%;\\n  border: 1px solid #4e6961;\\n  padding: 5px 10px;\\n}\\n\\n.form-input button {\\n  background: #4e6961;\\n  border: none;\\n  padding: 8px 25px;\\n  font-size: 16px;\\n  font-weight: 600;\\n  color: #f2e8df;\\n  cursor: pointer;\\n}\\n\\n.close-comment {\\n  margin: 0;\\n  padding: 0 10px;\\n  align-self: flex-end;\\n  color: #1d2824;\\n  font-size: 40px;\\n  font-weight: 700;\\n  background: none;\\n  border: none;\\n  cursor: pointer;\\n}\\n\\nfooter {\\n  width: 80%;\\n  margin: auto;\\n  border-radius: 3px;\\n  border-width: thick;\\n  border-style: solid;\\n  height: 180px;\\n}\\n\\n.footer-content {\\n  width: 99.4%;\\n  height: 102px;\\n  border-width: thick;\\n  border-style: solid;\\n}\\n\\n.footer-content p {\\n  font-size: 1.1rem;\\n  padding-top: 30px;\\n  padding-left: 10px;\\n  font-weight: 600;\\n}\\n\\n.footer-icon {\\n  background-color: rgb(145, 146, 155);\\n  border-width: thick;\\n  border-style: solid;\\n  height: 57.4px;\\n  margin-bottom: 3px;\\n  margin-left: 1px;\\n  margin-right: 1px;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  header {\\n    gap: 150px;\\n  }\\n\\n  .container {\\n    width: 80%;\\n    margin: 0 auto;\\n  }\\n\\n  .nav-item {\\n    gap: 10px;\\n  }\\n\\n  .food-container {\\n    display: grid;\\n    grid-template-columns: repeat(3, 3fr);\\n    gap: 30px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _module_getAllitems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/getAllitems.js */ \"./src/module/getAllitems.js\");\n\n\n\n\nconst linkbreakfast = document.querySelector('.link-breakfast');\nconst linksafefood = document.querySelector('.link-safefood');\n\nlet selected = '';\n\n// Link address for each navigation bars\nconst breakfasturl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast';\nconst safefoodurl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';\n\n// Display the first navigation bar items when the page refreshs\nwindow.addEventListener('load', () => {\n  selected = linkbreakfast;\n  linksafefood.textContent = 'Light food';\n  (0,_module_getAllitems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(selected, breakfasturl);\n  linkbreakfast.style.textDecoration = 'underline';\n  linksafefood.style.textDecoration = 'none';\n});\n\n// Event for breakfast navigation bar\nlinkbreakfast.addEventListener('click', () => {\n  selected = linkbreakfast;\n  selected.textContent = 'Breakfast';\n  linksafefood.textContent = 'Light food';\n  (0,_module_getAllitems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(selected, breakfasturl);\n  linkbreakfast.style.textDecoration = 'underline';\n  linksafefood.style.textDecoration = 'none';\n});\n\n// Event for safe food navigation bar\nlinksafefood.addEventListener('click', () => {\n  selected = linksafefood;\n  selected.textContent = 'Light food';\n  linkbreakfast.textContent = 'Breakfast';\n  (0,_module_getAllitems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(selected, safefoodurl);\n  linksafefood.style.textDecoration = 'underline';\n  linkbreakfast.style.textDecoration = 'none';\n});\n\n\n//# sourceURL=webpack://javascript-capstone/./src/index.js?");

/***/ }),

/***/ "./src/module/commentPop.js":
/*!**********************************!*\
  !*** ./src/module/commentPop.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentPop\": () => (/* binding */ commentPop),\n/* harmony export */   \"renderComments\": () => (/* binding */ renderComments)\n/* harmony export */ });\nconst renderComments = async (meal) => {\n  const commentsList = document.querySelector('.food-comment ul');\n  if (commentsList) {\n    commentsList.innerHTML = '';\n    const response = await fetch(\n      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6ab7Rja0wjBms3XH6H8j/comments?item_id=${meal.meals[0].idMeal}`,\n    );\n    const comments = await response.json();\n    const commentsCount = comments.length > 0 ? comments.length : 0;\n    const commentsHeader = document.querySelector('.food-comment h3');\n    commentsHeader.textContent = `Comments (${commentsCount})`;\n    comments.forEach((comment) => {\n      const li = document.createElement('li');\n      li.textContent = `${comment.creation_date} ${comment.username}: ${comment.comment}`;\n      commentsList.appendChild(li);\n    });\n  }\n};\n\nconst commentPop = async (meal) => {\n  const popContainer = document.getElementById('pop-container');\n  popContainer.innerHTML = `\n    <div class=\"comment-container\">\n        <button name=\"button\" class=\"close-comment\" id=\"closePop\">&times;</button>\n        <img src=\"${meal.meals[0].strMealThumb}\" alt=\"#\" class=\"img-pop\">\n        <h2 class=\"pop-title\">${meal.meals[0].strMeal}</h2>\n        <div class=\"food-comment\">\n            <h3>Comments</h3>\n            <ul></ul>\n        </div>\n        <div class=\"comment-form\">\n            <h3>Add a comment</h3>\n            <form action=\"#\" method=\"#\" class=\"form-input\">\n                <input type=\"text\" id=\"name-user\" placeholder=\"User name\">\n                <textarea name=\"comment-user\" id=\"comment-user\" cols=\"30\" rows=\"5\" placeholder=\"Enter your comment\"></textarea>\n                <button name=\"button\">Comments</button>\n            </form>\n        </div>\n    </div>\n  `;\n  popContainer.style.display = 'block';\n\n  const closePop = document.getElementById('closePop');\n  closePop.addEventListener('click', () => {\n    popContainer.style.display = 'none';\n  });\n\n  const postComment = async (name, comment) => {\n    const response = await fetch(\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6ab7Rja0wjBms3XH6H8j/comments',\n      {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n          item_id: meal.meals[0].idMeal,\n          username: name,\n          comment,\n        }),\n      },\n    );\n    if (!response.ok) {\n      throw new Error('Failed to post comment');\n    }\n  };\n\n  const commentForm = popContainer.querySelector('.form-input');\n  commentForm.addEventListener('submit', async (event) => {\n    event.preventDefault();\n    const nameInput = document.getElementById('name-user');\n    const commentInput = document.getElementById('comment-user');\n    const name = nameInput.value.trim();\n    const comment = commentInput.value.trim();\n    await postComment(name, comment);\n    renderComments(meal);\n    nameInput.value = '';\n    commentInput.value = '';\n  });\n};\n\n\n\n\n//# sourceURL=webpack://javascript-capstone/./src/module/commentPop.js?");

/***/ }),

/***/ "./src/module/getAllitems.js":
/*!***********************************!*\
  !*** ./src/module/getAllitems.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getListitems),\n/* harmony export */   \"itemCounter\": () => (/* binding */ itemCounter)\n/* harmony export */ });\n/* harmony import */ var _commentPop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentPop.js */ \"./src/module/commentPop.js\");\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLikes.js */ \"./src/module/getLikes.js\");\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_getLikes_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst displayitems = (element) => {\n  const fooditem = document.querySelector('.food-container');\n  fooditem.innerHTML = '';\n  element.forEach((e) => {\n    const div = document.createElement('div');\n    div.classList.add('food-card');\n    div.id = e.idMeal;\n    div.innerHTML = `\n             <div class=\"food-img\"> <img src=\"${e.strMealThumb}\" alt=\"#\"></div>\n              <h3 class=\"food-title\">${e.strMeal}</h3>\n              <div class=\"reactions\">\n              <button class=\"comments\" id=\"${e.idMeal}\">Coments</button>\n              <div class=\"likes\"> </div>\n             </div> `;\n\n    const numOflikes = div.querySelector('.likes');\n    // counter for number of likes for each item\n    const likesCounter = (like) => {\n      const likesfound = like.find((element) => element.item_id === e.idMeal);\n      numOflikes.innerHTML = likesfound !== undefined\n        ? `<i class=\"fa-solid fa-heart\"></i>(${likesfound.likes})`\n        : '<i class=\"fa-solid fa-heart\"></i>(0)';\n    };\n    (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)().then(likesCounter);\n\n    // Add new likes event\n    numOflikes.addEventListener('click', () => {\n      (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__.newLikes)(e.idMeal);\n      (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)().then(likesCounter);\n    });\n\n    fooditem.appendChild(div);\n\n    const commentBtn = div.querySelector('.comments');\n    commentBtn.addEventListener('click', async () => {\n      const mealId = commentBtn.getAttribute('id');\n      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;\n      const response = await fetch(url);\n      const data = await response.json();\n      (0,_commentPop_js__WEBPACK_IMPORTED_MODULE_0__.commentPop)(data);\n      (0,_commentPop_js__WEBPACK_IMPORTED_MODULE_0__.renderComments)(data);\n    });\n  });\n};\n// All items counter for homepage\nconst itemCounter = (selected, item) => {\n  selected.innerHTML = `${selected.textContent.trim()} ${item}`;\n};\n// Get item from API's\nconst getListitems = async (selected, url) => {\n  const request = new Request(url);\n  const response = await fetch(request);\n  const data = await response.json();\n  const data1 = data.meals;\n  itemCounter(selected, data1.length);\n  displayitems(data1);\n};\n\n\n\n\n//# sourceURL=webpack://javascript-capstone/./src/module/getAllitems.js?");

/***/ }),

/***/ "./src/module/getLikes.js":
/*!********************************!*\
  !*** ./src/module/getLikes.js ***!
  \********************************/
/***/ ((module) => {

eval("const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7ehAPZeZwvIMAOMx1gZ4/likes';\n// add addlikes function\nconst newLikes = async (id) => {\n  const req = new Request(url);\n  const response = await fetch(req, {\n    method: 'POST',\n    body: JSON.stringify({ item_id: `${id}` }),\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n  return response;\n};\n\n// get number of likes\nconst getLikes = async () => {\n  const req = new Request(url);\n  const response = await fetch(req);\n  const like = await response.json();\n  return like;\n};\nmodule.exports = { newLikes, getLikes };\n\n//# sourceURL=webpack://javascript-capstone/./src/module/getLikes.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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