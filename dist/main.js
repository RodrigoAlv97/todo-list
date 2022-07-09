/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0;\n    padding: 0;\n}\n\n#content{\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr 9fr;\n}\n\n#header{\n    grid-area: 1/1/2/3 ;\n    background-color: rgb(255, 191, 200);\n\n\n}\n\n#sidebar{\n    background-color: rgb(223, 255, 191);\n}\n\n#main{\n    background-color: rgb(191, 204, 255);\n    display: grid;\n\n    grid-template-columns: repeat(4,1fr);\n    grid-template-rows: repeat(3,1fr);\n    padding: 20px;\n    gap: 20px;\n\n}\n\n#projectList{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n\n.card{\n    height: 220px;\n    width: 330px;\n    display: grid;\n    grid-template-columns: 1fr 1fr ;\n    grid-template-rows: 1fr 3fr 1fr;\n    border: 1px solid black;\n    \n}\n\n.cardDescription{\n    grid-area: 2/1/3/3;\n}\n\n.cardName , .cardDescription , .cardDate , .cardPriority {\n    display: flex;\n    flex-direction: column;\n    padding-left: 10px;\n    padding-right: 10px;    \n}\n\n.buttons{\n    display: flex;\n    flex-direction: row;\n}\n\n.btnEdit , .btnDone{\n    width: 50%;\n}\n\n.cardDate{\n    justify-content: center;\n    align-items: flex-end;\n}\n\n.cardName{\n    justify-content: center;\n    align-items: flex-start;\n}\n\n.cardPriority{\n    align-items: center;\n    justify-content: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;IACnB,oCAAoC;;;AAGxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;IACpC,aAAa;;IAEb,oCAAoC;IACpC,iCAAiC;IACjC,aAAa;IACb,SAAS;;AAEb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;;AAGA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,+BAA+B;IAC/B,+BAA+B;IAC/B,uBAAuB;;AAE3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;IACnB,uBAAuB;AAC3B","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n}\n\n#content{\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr 9fr;\n}\n\n#header{\n    grid-area: 1/1/2/3 ;\n    background-color: rgb(255, 191, 200);\n\n\n}\n\n#sidebar{\n    background-color: rgb(223, 255, 191);\n}\n\n#main{\n    background-color: rgb(191, 204, 255);\n    display: grid;\n\n    grid-template-columns: repeat(4,1fr);\n    grid-template-rows: repeat(3,1fr);\n    padding: 20px;\n    gap: 20px;\n\n}\n\n#projectList{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n\n.card{\n    height: 220px;\n    width: 330px;\n    display: grid;\n    grid-template-columns: 1fr 1fr ;\n    grid-template-rows: 1fr 3fr 1fr;\n    border: 1px solid black;\n    \n}\n\n.cardDescription{\n    grid-area: 2/1/3/3;\n}\n\n.cardName , .cardDescription , .cardDate , .cardPriority {\n    display: flex;\n    flex-direction: column;\n    padding-left: 10px;\n    padding-right: 10px;    \n}\n\n.buttons{\n    display: flex;\n    flex-direction: row;\n}\n\n.btnEdit , .btnDone{\n    width: 50%;\n}\n\n.cardDate{\n    justify-content: center;\n    align-items: flex-end;\n}\n\n.cardName{\n    justify-content: center;\n    align-items: flex-start;\n}\n\n.cardPriority{\n    align-items: center;\n    justify-content: center;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentProject": () => (/* binding */ CurrentProject),
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ProjectList": () => (/* binding */ ProjectList),
/* harmony export */   "taskDone": () => (/* binding */ taskDone)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/modules/ui.js");



const Project = (name) =>{

    const getName = () => name;

    let projectList = [];

    const addTask = task =>{
        projectList.push(task);
    }

    const getList = () => projectList;


    return {getName , getList , addTask}
    
}

const ProjectList = (function() {
    const list = [];

    const addProject = (value) => {
        list.push(value);
    };

    return {list , addProject}

})();

const CurrentProject = (function() {
    let current = ""

    const setCurrent = (value) =>{

        current = value

    }

    const getCurrent = () =>{
        return current
    }

    return {getCurrent , setCurrent}

})();

function taskDone() {
    const card = document.querySelector('.card');
    let value = card.getAttribute("data");
    
    ProjectList.list.forEach(element =>{
        if (element.getName() == CurrentProject.getCurrent().getName()) {
            console.log(element.getList());
            element.getList().splice(value , 1);
            console.log(element.getList());
            (0,_ui__WEBPACK_IMPORTED_MODULE_0__.taskLoader)();

        }
    });
}



/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "addTask": () => (/* binding */ addTask)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");


const Task = (name , description , dueDate , priority) => {

    return {name , description , dueDate , priority}
}

function addTask() {

    const iName = document.querySelector('#inputName');
    const iDate = document.querySelector('#inputDate');
    const iDesc = document.querySelector('#inputDesc');
    const iPrio = document.querySelector('#inputPrio');
    const iPro = document.querySelector('#inputProjects');


    const name = iName.value;
    const date = iDate.value;
    const desc = iDesc.value;
    const prio = iPrio.value; 
    const pro = iPro.value;
    if (name!== "" || date !== "" ) {
        const task = Task(name , desc , date , prio);

        _project__WEBPACK_IMPORTED_MODULE_0__.ProjectList.list.forEach(element => {
            if (element.getName() == pro) {
                element.addTask(task);
            }      
        });
    } else {
        console.log('inset Name and date');
    }
  

}




/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainPageLoader": () => (/* binding */ mainPageLoader),
/* harmony export */   "newTaskLoader": () => (/* binding */ newTaskLoader),
/* harmony export */   "projectListLoader": () => (/* binding */ projectListLoader),
/* harmony export */   "taskLoader": () => (/* binding */ taskLoader),
/* harmony export */   "uiLoader": () => (/* binding */ uiLoader)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");



const content = document.querySelector("#content");


function mainPageLoader () {

    // Header--------------------------------------------------
    
        const header = document.createElement('div');
        header.setAttribute('id' , 'header');
        
        const headerTitle = document.createElement('div');
        headerTitle.setAttribute('id' , 'headerTitle');
        headerTitle.textContent = 'Todo List';
    
        header.appendChild(headerTitle);
        
        content.appendChild(header);
    
    // Header--------------------------------------------------
    
    //Sidebar--------------------------------------------------
    
        const sidebar = document.createElement('div');
        sidebar.setAttribute('id' , 'sidebar');
    
        const btnAddProject = document.createElement('button');
        btnAddProject.setAttribute('id' , 'btnAddProject');
        btnAddProject.textContent = 'Add New Project';
    
        const projectList = document.createElement('ul');
        projectList.textContent = 'Projects';
        projectList.setAttribute('id' , 'projectList');

        sidebar.appendChild(projectList);

    
        content.appendChild(sidebar);
    
    //Sidebar--------------------------------------------------
    
    //Main--------------------------------------------------
    
        const main = document.createElement('div');
        main.setAttribute('id' , 'main');
    
        content.appendChild(main);
    
    }
    //Main--------------------------------------------------

    function projectListLoader(){

        const list = _project__WEBPACK_IMPORTED_MODULE_0__.ProjectList.list

        list.forEach(element => {
            const listItem =document.createElement('li');
            listItem.setAttribute('class' , 'listItem');
            listItem.setAttribute('data' , list.indexOf(element));
            listItem.textContent = element.getName();
            listItem.addEventListener('click' , function () {
                _project__WEBPACK_IMPORTED_MODULE_0__.CurrentProject.setCurrent(element);
                console.log(_project__WEBPACK_IMPORTED_MODULE_0__.CurrentProject.getCurrent().getName());
                taskLoader();
            } )
            projectList.appendChild(listItem);
        });
    }

    function taskLoader () {
   
        main.replaceChildren();
        _project__WEBPACK_IMPORTED_MODULE_0__.CurrentProject.getCurrent().getList().forEach(element => {
            
            const card = document.createElement('div');
            card.setAttribute('class' , 'card');
            
            card.setAttribute('data' , _project__WEBPACK_IMPORTED_MODULE_0__.CurrentProject.getCurrent().getList().indexOf(element) );



            const cardName = document.createElement('div');
            cardName.textContent = element.name;
            cardName.setAttribute('class' , 'cardName');
            card.appendChild(cardName);

            const cardDate = document.createElement('div');
            cardDate.textContent = element.dueDate;
            cardDate.setAttribute('class' , 'cardDate');
            card.appendChild(cardDate);

            const cardDescription = document.createElement('div');
            cardDescription.textContent = element.description;
            cardDescription.setAttribute('class' , 'cardDescription');
            card.appendChild(cardDescription);

            const cardPriority = document.createElement('div');
            cardPriority.textContent = element.priority;
            cardPriority.setAttribute('class' , 'cardPriority');
            card.appendChild(cardPriority);
        
            const buttons = document.createElement('div');
            buttons.setAttribute('class' , 'buttons');
            const btnEdit = document.createElement('button')
            btnEdit.textContent ="Edit";
            btnEdit.setAttribute('class' , 'btnEdit');
            buttons.appendChild(btnEdit);
            const btnDone = document.createElement('button')
            btnDone.textContent ="Done";
            btnDone.setAttribute('class' , 'btnDone');
            btnDone.addEventListener('click' , _project__WEBPACK_IMPORTED_MODULE_0__.taskDone);

        

            buttons.appendChild(btnDone);
            card.appendChild(buttons);

           
            main.appendChild(card);
      });
        
    }

    function newTaskLoader () {

        const formContainer = document.createElement('div');
        formContainer.setAttribute('id' , 'formContainer');

    //Form Name--------------------------------------------------
        
        const formName = document.createElement('div');
        formName.setAttribute('class' , 'formItem')
        const labelName = document.createElement('label');
        labelName.setAttribute('class' , 'formLabel');
        labelName.textContent = 'Name: ';
        formName.appendChild(labelName)
        const inputName = document.createElement('INPUT');
        inputName.setAttribute("type", "text");
        inputName.setAttribute('id' , 'inputName');
        formName.appendChild(inputName);

        formContainer.appendChild(formName);

    //Form Name--------------------------------------------------
        
    
    //Form Date--------------------------------------------------

        const formDate = document.createElement('div');
        formDate.setAttribute('class' , 'formItem');
        const labelDate = document.createElement('label');
        labelDate.setAttribute('class' , 'formLabel');
        labelDate.textContent = 'Due Date: ';
        formDate.appendChild(labelDate);
        const inputDate = document.createElement('INPUT');
        inputDate.setAttribute('type' , 'date');
        inputDate.setAttribute('id' , 'inputDate');
        formDate.appendChild(inputDate);

        formContainer.appendChild(formDate);

    //Form Date--------------------------------------------------

    //Form Description--------------------------------------------------

        const formDesc = document.createElement('div');
        formDesc.setAttribute('class' , 'formItem');
        const labelDesc = document.createElement('label');
        labelDesc.setAttribute('class' , 'formLabel');
        labelDesc.textContent = 'Description: ';
        formDesc.appendChild(labelDesc);
        const inputDesc = document.createElement('TEXTAREA');
        inputDesc.setAttribute('id' , 'inputDesc');
        formDesc.appendChild(inputDesc);

        formContainer.appendChild(formDesc);


    //Form Description--------------------------------------------------
 
    //Form Priority--------------------------------------------------

        const formPrio = document.createElement('div');
        formPrio.setAttribute('class' , 'formItem');
        const labelPrio = document.createElement('label');
        labelPrio.setAttribute('class' , 'formLabel');
        labelPrio.textContent = 'Priority: ';
        formPrio.appendChild(labelPrio);
        const inputPrio = document.createElement('SELECT');
        inputPrio.setAttribute('id' , 'inputPrio');
        const optionLow = document.createElement("option");
        optionLow.text = "Low";
        inputPrio.add(optionLow);
        const optionMedium = document.createElement("option");
        optionMedium.text = "Medium";
        inputPrio.add(optionMedium);
        const optionHigh = document.createElement("option");
        optionHigh.text = "High";
        inputPrio.add(optionHigh);
        formPrio.appendChild(inputPrio);

        formContainer.appendChild(formPrio);


    //Form Priority--------------------------------------------------

        const formProjects = document.createElement('div');
        formProjects.setAttribute('class' , 'formItem');
        const labelProjects = document.createElement('label');
        labelProjects.setAttribute('class' , 'formLabel');
        labelProjects.textContent = 'Project: ';
        formProjects.appendChild(labelProjects);
        const inputProjects = document.createElement('SELECT');
        inputProjects.setAttribute('id' , 'inputProjects');
        
        
        const list = _project__WEBPACK_IMPORTED_MODULE_0__.ProjectList.list

        list.forEach(element => {
        const option = document.createElement("option");
        option.text = element.getName();
        inputProjects.add(option);
        });

        formProjects.appendChild(inputProjects)
        formContainer.appendChild(formProjects)

     
    //Form project--------------------------------------------------

    

    //Form project--------------------------------------------------


    //Form Button--------------------------------------------------

        const formButtons = document.createElement('div');
        formButtons.setAttribute('class' , 'formItem' )
        
        const addBtn = document.createElement('button');
        addBtn.setAttribute('class' , 'addBtn');
        addBtn.textContent = 'Add';
        addBtn.addEventListener('click' , _task__WEBPACK_IMPORTED_MODULE_1__.addTask);
        formButtons.appendChild(addBtn)

        const cancelBtn = document.createElement('button');
        cancelBtn.setAttribute('class' , 'cancelBtn');
        cancelBtn.textContent = 'Cancel';
        formButtons.appendChild(cancelBtn);
        formContainer.appendChild(formButtons);

    //Form Button--------------------------------------------------
    
    
    main.appendChild(formContainer);

    }


    function uiLoader () {
        mainPageLoader();
        projectListLoader();
    }


    

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task */ "./src/modules/task.js");
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");







const def = (0,_modules_project__WEBPACK_IMPORTED_MODULE_2__.Project)('Default');
const def2 = (0,_modules_project__WEBPACK_IMPORTED_MODULE_2__.Project)('Default2');
const test = (0,_modules_task__WEBPACK_IMPORTED_MODULE_1__.Task) ('testName' , 'testDesc' , 'testDate' , 'testPrio');
const test2 = (0,_modules_task__WEBPACK_IMPORTED_MODULE_1__.Task) ('testName2' , 'testDesc2' , 'testDate2' , 'testPrio2');
def2.addTask(test);
def2.addTask(test2)
console.log(def.getList());



_modules_project__WEBPACK_IMPORTED_MODULE_2__.ProjectList.addProject(def);
_modules_project__WEBPACK_IMPORTED_MODULE_2__.ProjectList.addProject(def2);

console.log(_modules_project__WEBPACK_IMPORTED_MODULE_2__.ProjectList.list);

_modules_project__WEBPACK_IMPORTED_MODULE_2__.CurrentProject.setCurrent(def);
console.log('current= ' + _modules_project__WEBPACK_IMPORTED_MODULE_2__.CurrentProject.getCurrent().getName());
_modules_project__WEBPACK_IMPORTED_MODULE_2__.CurrentProject.setCurrent(def2);
console.log('current= ' + _modules_project__WEBPACK_IMPORTED_MODULE_2__.CurrentProject.getCurrent().getName());
(0,_modules_ui__WEBPACK_IMPORTED_MODULE_3__.uiLoader)();
(0,_modules_ui__WEBPACK_IMPORTED_MODULE_3__.newTaskLoader)();






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7VUM1UUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNpQjtBQUNvQztBQUNQOzs7O0FBSW5FLFlBQVkseURBQU87QUFDbkIsYUFBYSx5REFBTztBQUNwQixhQUFhLG1EQUFJO0FBQ2pCLGNBQWMsbURBQUk7QUFDbEI7QUFDQTtBQUNBOzs7O0FBSUEsb0VBQXNCO0FBQ3RCLG9FQUFzQjs7QUFFdEIsWUFBWSw4REFBZ0I7O0FBRTVCLHVFQUF5QjtBQUN6QiwwQkFBMEIsdUVBQXlCO0FBQ25ELHVFQUF5QjtBQUN6QiwwQkFBMEIsdUVBQXlCO0FBQ25ELHFEQUFRO0FBQ1IsMERBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnI7XFxufVxcblxcbiNoZWFkZXJ7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMyA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5MSwgMjAwKTtcXG5cXG5cXG59XFxuXFxuI3NpZGViYXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDI1NSwgMTkxKTtcXG59XFxuXFxuI21haW57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTEsIDIwNCwgMjU1KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLDFmcik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG5cXG59XFxuXFxuI3Byb2plY3RMaXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4uY2FyZHtcXG4gICAgaGVpZ2h0OiAyMjBweDtcXG4gICAgd2lkdGg6IDMzMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMWZyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgXFxufVxcblxcbi5jYXJkRGVzY3JpcHRpb257XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMztcXG59XFxuXFxuLmNhcmROYW1lICwgLmNhcmREZXNjcmlwdGlvbiAsIC5jYXJkRGF0ZSAsIC5jYXJkUHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7ICAgIFxcbn1cXG5cXG4uYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmJ0bkVkaXQgLCAuYnRuRG9uZXtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmNhcmREYXRle1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uY2FyZE5hbWV7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmNhcmRQcmlvcml0eXtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvQ0FBb0M7OztBQUd4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhOztJQUViLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLHVCQUF1Qjs7QUFFM0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnI7XFxufVxcblxcbiNoZWFkZXJ7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMyA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE5MSwgMjAwKTtcXG5cXG5cXG59XFxuXFxuI3NpZGViYXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDI1NSwgMTkxKTtcXG59XFxuXFxuI21haW57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTEsIDIwNCwgMjU1KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLDFmcik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG5cXG59XFxuXFxuI3Byb2plY3RMaXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4uY2FyZHtcXG4gICAgaGVpZ2h0OiAyMjBweDtcXG4gICAgd2lkdGg6IDMzMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMWZyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgXFxufVxcblxcbi5jYXJkRGVzY3JpcHRpb257XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMztcXG59XFxuXFxuLmNhcmROYW1lICwgLmNhcmREZXNjcmlwdGlvbiAsIC5jYXJkRGF0ZSAsIC5jYXJkUHJpb3JpdHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7ICAgIFxcbn1cXG5cXG4uYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmJ0bkVkaXQgLCAuYnRuRG9uZXtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmNhcmREYXRle1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uY2FyZE5hbWV7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmNhcmRQcmlvcml0eXtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdGFza0xvYWRlciB9IGZyb20gXCIuL3VpXCI7XG5cblxuY29uc3QgUHJvamVjdCA9IChuYW1lKSA9PntcblxuICAgIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuXG4gICAgbGV0IHByb2plY3RMaXN0ID0gW107XG5cbiAgICBjb25zdCBhZGRUYXNrID0gdGFzayA9PntcbiAgICAgICAgcHJvamVjdExpc3QucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRMaXN0ID0gKCkgPT4gcHJvamVjdExpc3Q7XG5cblxuICAgIHJldHVybiB7Z2V0TmFtZSAsIGdldExpc3QgLCBhZGRUYXNrfVxuICAgIFxufVxuXG5jb25zdCBQcm9qZWN0TGlzdCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBsaXN0ID0gW107XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIGxpc3QucHVzaCh2YWx1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7bGlzdCAsIGFkZFByb2plY3R9XG5cbn0pKCk7XG5cbmNvbnN0IEN1cnJlbnRQcm9qZWN0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGxldCBjdXJyZW50ID0gXCJcIlxuXG4gICAgY29uc3Qgc2V0Q3VycmVudCA9ICh2YWx1ZSkgPT57XG5cbiAgICAgICAgY3VycmVudCA9IHZhbHVlXG5cbiAgICB9XG5cbiAgICBjb25zdCBnZXRDdXJyZW50ID0gKCkgPT57XG4gICAgICAgIHJldHVybiBjdXJyZW50XG4gICAgfVxuXG4gICAgcmV0dXJuIHtnZXRDdXJyZW50ICwgc2V0Q3VycmVudH1cblxufSkoKTtcblxuZnVuY3Rpb24gdGFza0RvbmUoKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJyk7XG4gICAgbGV0IHZhbHVlID0gY2FyZC5nZXRBdHRyaWJ1dGUoXCJkYXRhXCIpO1xuICAgIFxuICAgIFByb2plY3RMaXN0Lmxpc3QuZm9yRWFjaChlbGVtZW50ID0+e1xuICAgICAgICBpZiAoZWxlbWVudC5nZXROYW1lKCkgPT0gQ3VycmVudFByb2plY3QuZ2V0Q3VycmVudCgpLmdldE5hbWUoKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5nZXRMaXN0KCkpO1xuICAgICAgICAgICAgZWxlbWVudC5nZXRMaXN0KCkuc3BsaWNlKHZhbHVlICwgMSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LmdldExpc3QoKSk7XG4gICAgICAgICAgICB0YXNrTG9hZGVyKCk7XG5cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQge1Byb2plY3QgLCBQcm9qZWN0TGlzdCAsIEN1cnJlbnRQcm9qZWN0ICwgdGFza0RvbmV9IiwiaW1wb3J0IHsgQ3VycmVudFByb2plY3QsIFByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zdCBUYXNrID0gKG5hbWUgLCBkZXNjcmlwdGlvbiAsIGR1ZURhdGUgLCBwcmlvcml0eSkgPT4ge1xuXG4gICAgcmV0dXJuIHtuYW1lICwgZGVzY3JpcHRpb24gLCBkdWVEYXRlICwgcHJpb3JpdHl9XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2soKSB7XG5cbiAgICBjb25zdCBpTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dE5hbWUnKTtcbiAgICBjb25zdCBpRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dERhdGUnKTtcbiAgICBjb25zdCBpRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dERlc2MnKTtcbiAgICBjb25zdCBpUHJpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dFByaW8nKTtcbiAgICBjb25zdCBpUHJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0UHJvamVjdHMnKTtcblxuXG4gICAgY29uc3QgbmFtZSA9IGlOYW1lLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBpRGF0ZS52YWx1ZTtcbiAgICBjb25zdCBkZXNjID0gaURlc2MudmFsdWU7XG4gICAgY29uc3QgcHJpbyA9IGlQcmlvLnZhbHVlOyBcbiAgICBjb25zdCBwcm8gPSBpUHJvLnZhbHVlO1xuICAgIGlmIChuYW1lIT09IFwiXCIgfHwgZGF0ZSAhPT0gXCJcIiApIHtcbiAgICAgICAgY29uc3QgdGFzayA9IFRhc2sobmFtZSAsIGRlc2MgLCBkYXRlICwgcHJpbyk7XG5cbiAgICAgICAgUHJvamVjdExpc3QubGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZ2V0TmFtZSgpID09IHBybykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkVGFzayh0YXNrKTtcbiAgICAgICAgICAgIH0gICAgICBcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luc2V0IE5hbWUgYW5kIGRhdGUnKTtcbiAgICB9XG4gIFxuXG59XG5cblxuZXhwb3J0IHtUYXNrICwgYWRkVGFza30iLCJpbXBvcnQgeyBQcm9qZWN0TGlzdCAsIEN1cnJlbnRQcm9qZWN0ICwgUHJvamVjdCAsIHRhc2tEb25lICAgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQge1Rhc2sgLCBhZGRUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5cbmZ1bmN0aW9uIG1haW5QYWdlTG9hZGVyICgpIHtcblxuICAgIC8vIEhlYWRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcgLCAnaGVhZGVyJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXJUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJyAsICdoZWFkZXJUaXRsZScpO1xuICAgICAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdUb2RvIExpc3QnO1xuICAgIFxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuICAgICAgICBcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIFxuICAgIC8vIEhlYWRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgLy9TaWRlYmFyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaWRlYmFyLnNldEF0dHJpYnV0ZSgnaWQnICwgJ3NpZGViYXInKTtcbiAgICBcbiAgICAgICAgY29uc3QgYnRuQWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG5BZGRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnICwgJ2J0bkFkZFByb2plY3QnKTtcbiAgICAgICAgYnRuQWRkUHJvamVjdC50ZXh0Q29udGVudCA9ICdBZGQgTmV3IFByb2plY3QnO1xuICAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHByb2plY3RMaXN0LnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICAgICAgcHJvamVjdExpc3Quc2V0QXR0cmlidXRlKCdpZCcgLCAncHJvamVjdExpc3QnKTtcblxuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcblxuICAgIFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuICAgIFxuICAgIC8vU2lkZWJhci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgLy9NYWluLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnICwgJ21haW4nKTtcbiAgICBcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBcbiAgICB9XG4gICAgLy9NYWluLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGZ1bmN0aW9uIHByb2plY3RMaXN0TG9hZGVyKCl7XG5cbiAgICAgICAgY29uc3QgbGlzdCA9IFByb2plY3RMaXN0Lmxpc3RcblxuICAgICAgICBsaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0SXRlbSA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnICwgJ2xpc3RJdGVtJyk7XG4gICAgICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEnICwgbGlzdC5pbmRleE9mKGVsZW1lbnQpKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gZWxlbWVudC5nZXROYW1lKCk7XG4gICAgICAgICAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgQ3VycmVudFByb2plY3Quc2V0Q3VycmVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhDdXJyZW50UHJvamVjdC5nZXRDdXJyZW50KCkuZ2V0TmFtZSgpKTtcbiAgICAgICAgICAgICAgICB0YXNrTG9hZGVyKCk7XG4gICAgICAgICAgICB9IClcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGFza0xvYWRlciAoKSB7XG4gICBcbiAgICAgICAgbWFpbi5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgQ3VycmVudFByb2plY3QuZ2V0Q3VycmVudCgpLmdldExpc3QoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnICwgJ2NhcmQnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2RhdGEnICwgQ3VycmVudFByb2plY3QuZ2V0Q3VycmVudCgpLmdldExpc3QoKS5pbmRleE9mKGVsZW1lbnQpICk7XG5cblxuXG4gICAgICAgICAgICBjb25zdCBjYXJkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2FyZE5hbWUudGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgICAgICBjYXJkTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJyAsICdjYXJkTmFtZScpO1xuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkTmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcmREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjYXJkRGF0ZS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZHVlRGF0ZTtcbiAgICAgICAgICAgIGNhcmREYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnICwgJ2NhcmREYXRlJyk7XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmREYXRlKTtcblxuICAgICAgICAgICAgY29uc3QgY2FyZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjYXJkRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBlbGVtZW50LmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnICwgJ2NhcmREZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRGVzY3JpcHRpb24pO1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNhcmRQcmlvcml0eS50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJpb3JpdHk7XG4gICAgICAgICAgICBjYXJkUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycgLCAnY2FyZFByaW9yaXR5Jyk7XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRQcmlvcml0eSk7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYnV0dG9ucy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJyAsICdidXR0b25zJyk7XG4gICAgICAgICAgICBjb25zdCBidG5FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIGJ0bkVkaXQudGV4dENvbnRlbnQgPVwiRWRpdFwiO1xuICAgICAgICAgICAgYnRuRWRpdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJyAsICdidG5FZGl0Jyk7XG4gICAgICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKGJ0bkVkaXQpO1xuICAgICAgICAgICAgY29uc3QgYnRuRG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBidG5Eb25lLnRleHRDb250ZW50ID1cIkRvbmVcIjtcbiAgICAgICAgICAgIGJ0bkRvbmUuc2V0QXR0cmlidXRlKCdjbGFzcycgLCAnYnRuRG9uZScpO1xuICAgICAgICAgICAgYnRuRG9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgLCB0YXNrRG9uZSk7XG5cbiAgICAgICAgXG5cbiAgICAgICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoYnRuRG9uZSk7XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuXG4gICAgICAgICAgIFxuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdUYXNrTG9hZGVyICgpIHtcblxuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcgLCAnZm9ybUNvbnRhaW5lcicpO1xuXG4gICAgLy9Gb3JtIE5hbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZm9ybU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybU5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycgLCAnZm9ybUl0ZW0nKVxuICAgICAgICBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbE5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycgLCAnZm9ybUxhYmVsJyk7XG4gICAgICAgIGxhYmVsTmFtZS50ZXh0Q29udGVudCA9ICdOYW1lOiAnO1xuICAgICAgICBmb3JtTmFtZS5hcHBlbmRDaGlsZChsYWJlbE5hbWUpXG4gICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lOUFVUJyk7XG4gICAgICAgIGlucHV0TmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgaW5wdXROYW1lLnNldEF0dHJpYnV0ZSgnaWQnICwgJ2lucHV0TmFtZScpO1xuICAgICAgICBmb3JtTmFtZS5hcHBlbmRDaGlsZChpbnB1dE5hbWUpO1xuXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybU5hbWUpO1xuXG4gICAgLy9Gb3JtIE5hbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBcbiAgICBcbiAgICAvL0Zvcm0gRGF0ZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgICAgY29uc3QgZm9ybURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybURhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycgLCAnZm9ybUl0ZW0nKTtcbiAgICAgICAgY29uc3QgbGFiZWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWxEYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnICwgJ2Zvcm1MYWJlbCcpO1xuICAgICAgICBsYWJlbERhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6ICc7XG4gICAgICAgIGZvcm1EYXRlLmFwcGVuZENoaWxkKGxhYmVsRGF0ZSk7XG4gICAgICAgIGNvbnN0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lOUFVUJyk7XG4gICAgICAgIGlucHV0RGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnICwgJ2RhdGUnKTtcbiAgICAgICAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZSgnaWQnICwgJ2lucHV0RGF0ZScpO1xuICAgICAgICBmb3JtRGF0ZS5hcHBlbmRDaGlsZChpbnB1dERhdGUpO1xuXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybURhdGUpO1xuXG4gICAgLy9Gb3JtIERhdGUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy9Gb3JtIERlc2NyaXB0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICBjb25zdCBmb3JtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtRGVzYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJyAsICdmb3JtSXRlbScpO1xuICAgICAgICBjb25zdCBsYWJlbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbERlc2Muc2V0QXR0cmlidXRlKCdjbGFzcycgLCAnZm9ybUxhYmVsJyk7XG4gICAgICAgIGxhYmVsRGVzYy50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjogJztcbiAgICAgICAgZm9ybURlc2MuYXBwZW5kQ2hpbGQobGFiZWxEZXNjKTtcbiAgICAgICAgY29uc3QgaW5wdXREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVEVYVEFSRUEnKTtcbiAgICAgICAgaW5wdXREZXNjLnNldEF0dHJpYnV0ZSgnaWQnICwgJ2lucHV0RGVzYycpO1xuICAgICAgICBmb3JtRGVzYy5hcHBlbmRDaGlsZChpbnB1dERlc2MpO1xuXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybURlc2MpO1xuXG5cbiAgICAvL0Zvcm0gRGVzY3JpcHRpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIFxuICAgIC8vRm9ybSBQcmlvcml0eS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgICAgY29uc3QgZm9ybVByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybVByaW8uc2V0QXR0cmlidXRlKCdjbGFzcycgLCAnZm9ybUl0ZW0nKTtcbiAgICAgICAgY29uc3QgbGFiZWxQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbGFiZWxQcmlvLnNldEF0dHJpYnV0ZSgnY2xhc3MnICwgJ2Zvcm1MYWJlbCcpO1xuICAgICAgICBsYWJlbFByaW8udGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICc7XG4gICAgICAgIGZvcm1QcmlvLmFwcGVuZENoaWxkKGxhYmVsUHJpbyk7XG4gICAgICAgIGNvbnN0IGlucHV0UHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1NFTEVDVCcpO1xuICAgICAgICBpbnB1dFByaW8uc2V0QXR0cmlidXRlKCdpZCcgLCAnaW5wdXRQcmlvJyk7XG4gICAgICAgIGNvbnN0IG9wdGlvbkxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbkxvdy50ZXh0ID0gXCJMb3dcIjtcbiAgICAgICAgaW5wdXRQcmlvLmFkZChvcHRpb25Mb3cpO1xuICAgICAgICBjb25zdCBvcHRpb25NZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb25NZWRpdW0udGV4dCA9IFwiTWVkaXVtXCI7XG4gICAgICAgIGlucHV0UHJpby5hZGQob3B0aW9uTWVkaXVtKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbkhpZ2gudGV4dCA9IFwiSGlnaFwiO1xuICAgICAgICBpbnB1dFByaW8uYWRkKG9wdGlvbkhpZ2gpO1xuICAgICAgICBmb3JtUHJpby5hcHBlbmRDaGlsZChpbnB1dFByaW8pO1xuXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVByaW8pO1xuXG5cbiAgICAvL0Zvcm0gUHJpb3JpdHktLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgIGNvbnN0IGZvcm1Qcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtUHJvamVjdHMuc2V0QXR0cmlidXRlKCdjbGFzcycgLCAnZm9ybUl0ZW0nKTtcbiAgICAgICAgY29uc3QgbGFiZWxQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsUHJvamVjdHMuc2V0QXR0cmlidXRlKCdjbGFzcycgLCAnZm9ybUxhYmVsJyk7XG4gICAgICAgIGxhYmVsUHJvamVjdHMudGV4dENvbnRlbnQgPSAnUHJvamVjdDogJztcbiAgICAgICAgZm9ybVByb2plY3RzLmFwcGVuZENoaWxkKGxhYmVsUHJvamVjdHMpO1xuICAgICAgICBjb25zdCBpbnB1dFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU0VMRUNUJyk7XG4gICAgICAgIGlucHV0UHJvamVjdHMuc2V0QXR0cmlidXRlKCdpZCcgLCAnaW5wdXRQcm9qZWN0cycpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxpc3QgPSBQcm9qZWN0TGlzdC5saXN0XG5cbiAgICAgICAgbGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udGV4dCA9IGVsZW1lbnQuZ2V0TmFtZSgpO1xuICAgICAgICBpbnB1dFByb2plY3RzLmFkZChvcHRpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3JtUHJvamVjdHMuYXBwZW5kQ2hpbGQoaW5wdXRQcm9qZWN0cylcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUHJvamVjdHMpXG5cbiAgICAgXG4gICAgLy9Gb3JtIHByb2plY3QtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgXG5cbiAgICAvL0Zvcm0gcHJvamVjdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuICAgIC8vRm9ybSBCdXR0b24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgIGNvbnN0IGZvcm1CdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1CdXR0b25zLnNldEF0dHJpYnV0ZSgnY2xhc3MnICwgJ2Zvcm1JdGVtJyApXG4gICAgICAgIFxuICAgICAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnICwgJ2FkZEJ0bicpO1xuICAgICAgICBhZGRCdG4udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsIGFkZFRhc2spO1xuICAgICAgICBmb3JtQnV0dG9ucy5hcHBlbmRDaGlsZChhZGRCdG4pXG5cbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJyAsICdjYW5jZWxCdG4nKTtcbiAgICAgICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgICAgIGZvcm1CdXR0b25zLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbnMpO1xuXG4gICAgLy9Gb3JtIEJ1dHRvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgXG4gICAgbWFpbi5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gdWlMb2FkZXIgKCkge1xuICAgICAgICBtYWluUGFnZUxvYWRlcigpO1xuICAgICAgICBwcm9qZWN0TGlzdExvYWRlcigpO1xuICAgIH1cblxuXG4gICAgZXhwb3J0IHttYWluUGFnZUxvYWRlciAsIHByb2plY3RMaXN0TG9hZGVyICwgdGFza0xvYWRlciAsIG5ld1Rhc2tMb2FkZXIgLCB1aUxvYWRlcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tcIjtcbmltcG9ydCB7IFByb2plY3QgLCBQcm9qZWN0TGlzdCAsIEN1cnJlbnRQcm9qZWN0fSBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RcIjtcbmltcG9ydCB7IHRhc2tMb2FkZXIsIHVpTG9hZGVyICwgbmV3VGFza0xvYWRlcn0gZnJvbSBcIi4vbW9kdWxlcy91aVwiO1xuXG5cblxuY29uc3QgZGVmID0gUHJvamVjdCgnRGVmYXVsdCcpO1xuY29uc3QgZGVmMiA9IFByb2plY3QoJ0RlZmF1bHQyJyk7XG5jb25zdCB0ZXN0ID0gVGFzayAoJ3Rlc3ROYW1lJyAsICd0ZXN0RGVzYycgLCAndGVzdERhdGUnICwgJ3Rlc3RQcmlvJyk7XG5jb25zdCB0ZXN0MiA9IFRhc2sgKCd0ZXN0TmFtZTInICwgJ3Rlc3REZXNjMicgLCAndGVzdERhdGUyJyAsICd0ZXN0UHJpbzInKTtcbmRlZjIuYWRkVGFzayh0ZXN0KTtcbmRlZjIuYWRkVGFzayh0ZXN0MilcbmNvbnNvbGUubG9nKGRlZi5nZXRMaXN0KCkpO1xuXG5cblxuUHJvamVjdExpc3QuYWRkUHJvamVjdChkZWYpO1xuUHJvamVjdExpc3QuYWRkUHJvamVjdChkZWYyKTtcblxuY29uc29sZS5sb2coUHJvamVjdExpc3QubGlzdCk7XG5cbkN1cnJlbnRQcm9qZWN0LnNldEN1cnJlbnQoZGVmKTtcbmNvbnNvbGUubG9nKCdjdXJyZW50PSAnICsgQ3VycmVudFByb2plY3QuZ2V0Q3VycmVudCgpLmdldE5hbWUoKSk7XG5DdXJyZW50UHJvamVjdC5zZXRDdXJyZW50KGRlZjIpO1xuY29uc29sZS5sb2coJ2N1cnJlbnQ9ICcgKyBDdXJyZW50UHJvamVjdC5nZXRDdXJyZW50KCkuZ2V0TmFtZSgpKTtcbnVpTG9hZGVyKCk7XG5uZXdUYXNrTG9hZGVyKCk7XG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9