/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ObjectGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ObjectGenerator */ "./src/js/modules/ObjectGenerator.js");


window.addEventListener('DOMContentLoaded', function () {
  Object(_modules_ObjectGenerator__WEBPACK_IMPORTED_MODULE_0__["ObjectGenerator"])();
  Object(_modules_ObjectGenerator__WEBPACK_IMPORTED_MODULE_0__["ObjectReceiver"])();
});

/***/ }),

/***/ "./src/js/modules/ObjectGenerator.js":
/*!*******************************************!*\
  !*** ./src/js/modules/ObjectGenerator.js ***!
  \*******************************************/
/*! exports provided: ObjectGenerator, ObjectReceiver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectGenerator", function() { return ObjectGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectReceiver", function() { return ObjectReceiver; });
//all global variable for reset
var arrObg = [];
var objGenerate = document.querySelector('#obgGenerate');
var objReset = document.querySelector('#objReset');
var objData = 1;
var ObjDelay = 1;
var ObjGenerateStatus = false;
var objReceive = document.querySelector('#obgReceive');
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var currentElem = 0;
var receiveDelay = 2;
var ObjectReceiverStatus = false;
var isArray = false;
var queue = document.getElementById('queue'); //reset function

var reset = function reset() {
  objData = 1;
  ObjDelay = 1;
  ObjGenerateStatus = false;
  objReceive = document.querySelector('#obgReceive');
  counter1 = 0;
  counter2 = 0;
  counter3 = 0;
  currentElem = 0;
  receiveDelay = 2;
  ObjectReceiverStatus = false;
  isArray = false;
}; //reset action


objReset.addEventListener('click', reset); //object generator function

var ObjectGenerator = function ObjectGenerator() {
  //New object creator
  function objGenerateF(data) {
    //Indicator listener
    isIndicators();
    var Obj = {
      data: data
    };
    arrObg.push(Obj);
    var timeOut;

    if (ObjGenerateStatus) {
      timeOut = setTimeout(function () {
        objGenerateF(objData);
      }, ObjDelay);
    } else {
      clearTimeout(timeOut);
    } //create object value and delay for timeout


    rand();
    return true;
  } //create object value and delay for timeout


  function rand() {
    objData = Math.floor(Math.random() * 100) + 1;
    ObjDelay = Math.floor(Math.random() * 10) + 1;
    ObjDelay = ObjDelay * 1000;
  } //Object generate start event


  objGenerate.addEventListener('click', function () {
    ObjGenerateStatus = !ObjGenerateStatus;
    objGenerateF(objData);
  });
}; //Show indicator status function

function isIndicators() {
  if (arrObg.length) {
    queue.style.backgroundColor = 'green';
  } else {
    queue.style.backgroundColor = 'red';
  }

  if (!ObjGenerateStatus) {
    objGenerate.style.backgroundColor = 'red';
  } else {
    objGenerate.style.backgroundColor = 'green';
  }

  if (!ObjectReceiverStatus) {
    objReceive.style.backgroundColor = 'red';
  } else {
    objReceive.style.backgroundColor = 'green';
  }
}

isIndicators(); // Object receiver function

var ObjectReceiver = function ObjectReceiver() {
  function getObj() {
    isIndicators();
    document.querySelector('#counter1').innerHTML = counter1;
    document.querySelector('#counter2').innerHTML = counter2;
    document.querySelector('#counter3').innerHTML = counter3;
    var data;

    if (arrObg.length && arrObg[currentElem]) {
      data = arrObg[currentElem].data;
    } else {
      data = null;
    }

    if (data != null) {
      if (data < 30) {
        counter1++;
      } else if (data > 30 && data < 70) {
        counter2++;
      } else {
        counter3++;
      }

      currentElem++;
    }

    if (data === null) {
      receiveDelay++;
    }

    var interval;

    if (ObjectReceiverStatus) {
      interval = setTimeout(getObj, receiveDelay * 1000);
    } else {
      clearTimeout(interval);
    }
  } // Object receive start event


  objReceive.addEventListener('click', function () {
    ObjectReceiverStatus = !ObjectReceiverStatus;
    getObj();
  });
};

/***/ })

/******/ });
//# sourceMappingURL=script.js.map