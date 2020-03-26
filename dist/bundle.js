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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simulation */ "./src/simulation.js");
/* harmony import */ var _simulation_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simulation_view */ "./src/simulation_view.js");
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moving_object */ "./src/moving_object.js");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person */ "./src/person.js");




document.addEventListener("DOMContentLoaded", function () {
  var canvasEl = document.getElementsByTagName("canvas")[0]; // canvasEl.width = window.innerWidth;
  // canvasEl.height = window.innerHeight;

  canvasEl.width = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_X;
  canvasEl.height = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_Y;
  var ctx = canvasEl.getContext("2d"); // canvasEl.width = Game.DIM_X;
  // canvasEl.height = Game.DIM_Y;

  console.log('webpack is working');
  window.MovingObject = _moving_object__WEBPACK_IMPORTED_MODULE_2__["default"];
  window.Person = _person__WEBPACK_IMPORTED_MODULE_3__["default"];
  window.Simulation = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"];
  window.SimulationView = _simulation_view__WEBPACK_IMPORTED_MODULE_1__["default"]; // const Simulation = new Simulation();
  // new SimulationView(game, ctx).start();

  var mo = new _moving_object__WEBPACK_IMPORTED_MODULE_2__["default"]({
    pos: [30, 30],
    vel: [20, 20],
    radius: 1,
    color: "#00ff00"
  }); // console.log(mo);

  mo.draw(ctx); // mo.move();

  var s1 = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var np = new _person__WEBPACK_IMPORTED_MODULE_3__["default"]({
    pos: [90, 90],
    vel: [20, 20]
  }); // console.log(np);

  np.draw(ctx);
  console.log(s1);
  var sv1 = new _simulation_view__WEBPACK_IMPORTED_MODULE_1__["default"](s1, ctx); // console.log(sv1);

  sv1.start();
});

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovingObject; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _simulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simulation */ "./src/simulation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var MovingObject = /*#__PURE__*/function () {
  function MovingObject(parameters) {
    _classCallCheck(this, MovingObject);

    this.pos = parameters.pos;
    this.vel = parameters.vel;
    this.radius = parameters.radius;
    this.color = parameters.color;
    this.simulation = parameters.simulation;
  }

  _createClass(MovingObject, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI // false
      );
      ctx.fill();
    }
  }, {
    key: "move",
    value: function move() {
      this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
      this.vel = this.simulation.bounce(this.pos, this.vel); // console.log(this.pos);
    }
  }, {
    key: "isCollidedWith",
    value: function isCollidedWith(otherPerson) {
      var centerDist = _util__WEBPACK_IMPORTED_MODULE_0__["Util"].dist(this.pos, otherPerson.pos);
      return centerDist < this.radius + otherPerson.radius;
    }
  }]);

  return MovingObject;
}();



/***/ }),

/***/ "./src/person.js":
/*!***********************!*\
  !*** ./src/person.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Person; });
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ "./src/moving_object.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var DEFAULTS = {
  RADIUS: 2,
  COLOR: "#000066",
  SPEED: 2
};

var Person = /*#__PURE__*/function (_MovingObject) {
  _inherits(Person, _MovingObject);

  var _super = _createSuper(Person);

  function Person() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Person);

    parameters.color = DEFAULTS.COLOR;
    parameters.radius = DEFAULTS.RADIUS;
    parameters.pos = parameters.pos || parameters.simulation.randomPosition();
    parameters.vel = parameters.vel || _util__WEBPACK_IMPORTED_MODULE_1__["Util"].randomVec(DEFAULTS.SPEED);
    return _super.call(this, parameters);
  }

  return Person;
}(_moving_object__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/simulation.js":
/*!***************************!*\
  !*** ./src/simulation.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Simulation; });
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person */ "./src/person.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Simulation = /*#__PURE__*/function () {
  function Simulation() {
    _classCallCheck(this, Simulation);

    this.DIM_X = 600;
    this.DIM_Y = 400;
    this.NUM_PERSONS = 100;
    this.persons = [];
    this.addPersons();
  } // handleDensity() {
  // }


  _createClass(Simulation, [{
    key: "addPersons",
    value: function addPersons() {
      for (var i = 0; i < this.NUM_PERSONS; i++) {
        this.persons.push(new _person__WEBPACK_IMPORTED_MODULE_0__["default"]({
          pos: this.randomPosition(),
          simulation: this
        }));
      }
    }
  }, {
    key: "randomPosition",
    value: function randomPosition() {
      return [Math.random() * this.DIM_X, Math.random() * this.DIM_Y];
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
      this.persons.forEach(function (person) {
        return person.draw(ctx);
      });
    }
  }, {
    key: "moveObjects",
    value: function moveObjects() {
      this.persons.forEach(function (person) {
        person.move();
      });
    }
  }, {
    key: "checkCollisions",
    value: function checkCollisions() {
      for (var i = 0; i < this.persons.length; i++) {
        for (var j = 1; j > 1 && j < this.persons.length; j++) {
          var pers1 = this.persons[i];
          var pers2 = this.persons[j];

          if (pers1.isCollidedWith(pers2)) {
            pers1.changeDir(pers1.vel);
            pers2.changeDir(pers2.vel);
          }
        }
      }
    }
  }, {
    key: "changeDir",
    value: function changeDir(vel) {
      if (vel[0] > vel[1]) {
        vel[0] = -vel[0];
      } else {
        vel[1] = -vel[1];
      }

      return vel;
    }
  }, {
    key: "bounce",
    value: function bounce(pos, vel) {
      if (pos[0] <= 0 || pos[0] >= this.DIM_X) {
        vel[0] = -vel[0];
      } else if (pos[1] <= 0 || pos[1] >= this.DIM_Y) {
        vel[1] = -vel[1];
      }

      return vel;
    }
  }]);

  return Simulation;
}();


Simulation.DIM_X = 600;
Simulation.DIM_Y = 400; // Simulation.NUM_PERSONS = 100;

/***/ }),

/***/ "./src/simulation_view.js":
/*!********************************!*\
  !*** ./src/simulation_view.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimulationView; });
/* harmony import */ var _simulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./simulation */ "./src/simulation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SimulationView = /*#__PURE__*/function () {
  function SimulationView(simulation, ctx) {
    _classCallCheck(this, SimulationView);

    this.ctx = ctx;
    this.simulation = simulation;
  }

  _createClass(SimulationView, [{
    key: "start",
    value: function start() {
      var _this = this;

      setInterval(function () {
        _this.simulation.moveObjects();

        _this.simulation.draw(_this.ctx);
      }, 20);
    }
  }]);

  return SimulationView;
}();



/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
var Util = {
  // Return a randomly oriented vector with the given length.
  randomVec: function randomVec(length) {
    var deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale: function scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },
  dist: function dist(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2));
  }
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb3Zpbmdfb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb25fdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2lkdGgiLCJTaW11bGF0aW9uIiwiRElNX1giLCJoZWlnaHQiLCJESU1fWSIsImN0eCIsImdldENvbnRleHQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiTW92aW5nT2JqZWN0IiwiUGVyc29uIiwiU2ltdWxhdGlvblZpZXciLCJtbyIsInBvcyIsInZlbCIsInJhZGl1cyIsImNvbG9yIiwiZHJhdyIsInMxIiwibnAiLCJzdjEiLCJzdGFydCIsInBhcmFtZXRlcnMiLCJzaW11bGF0aW9uIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsImJvdW5jZSIsIm90aGVyUGVyc29uIiwiY2VudGVyRGlzdCIsIlV0aWwiLCJkaXN0IiwiREVGQVVMVFMiLCJSQURJVVMiLCJDT0xPUiIsIlNQRUVEIiwicmFuZG9tUG9zaXRpb24iLCJyYW5kb21WZWMiLCJOVU1fUEVSU09OUyIsInBlcnNvbnMiLCJhZGRQZXJzb25zIiwiaSIsInB1c2giLCJyYW5kb20iLCJjbGVhclJlY3QiLCJmb3JFYWNoIiwicGVyc29uIiwibW92ZSIsImxlbmd0aCIsImoiLCJwZXJzMSIsInBlcnMyIiwiaXNDb2xsaWRlZFdpdGgiLCJjaGFuZ2VEaXIiLCJzZXRJbnRlcnZhbCIsIm1vdmVPYmplY3RzIiwiZGVnIiwic2NhbGUi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dHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnLi9zaW11bGF0aW9uJztcbmltcG9ydCBTaW11bGF0aW9uVmlldyBmcm9tICcuL3NpbXVsYXRpb25fdmlldyc7XG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQgUGVyc29uIGZyb20gJy4vcGVyc29uJztcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgICAvLyBjYW52YXNFbC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIC8vIGNhbnZhc0VsLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjYW52YXNFbC53aWR0aCA9IFNpbXVsYXRpb24uRElNX1g7XG4gICAgY2FudmFzRWwuaGVpZ2h0ID0gU2ltdWxhdGlvbi5ESU1fWTtcbiAgICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgLy8gY2FudmFzRWwud2lkdGggPSBHYW1lLkRJTV9YO1xuICAgIC8vIGNhbnZhc0VsLmhlaWdodCA9IEdhbWUuRElNX1k7XG4gICAgY29uc29sZS5sb2coJ3dlYnBhY2sgaXMgd29ya2luZycpO1xuXG4gICAgd2luZG93Lk1vdmluZ09iamVjdCA9IE1vdmluZ09iamVjdDtcbiAgICB3aW5kb3cuUGVyc29uID0gUGVyc29uO1xuICAgIHdpbmRvdy5TaW11bGF0aW9uID0gU2ltdWxhdGlvbjtcbiAgICB3aW5kb3cuU2ltdWxhdGlvblZpZXcgPSBTaW11bGF0aW9uVmlldztcblxuICAgIC8vIGNvbnN0IFNpbXVsYXRpb24gPSBuZXcgU2ltdWxhdGlvbigpO1xuICAgIC8vIG5ldyBTaW11bGF0aW9uVmlldyhnYW1lLCBjdHgpLnN0YXJ0KCk7XG5cblxuICAgIGxldCBtbyA9IG5ldyBNb3ZpbmdPYmplY3Qoe1xuICAgICAgICBwb3M6IFszMCwgMzBdLFxuICAgICAgICB2ZWw6IFsyMCwgMjBdLFxuICAgICAgICByYWRpdXM6IDEsXG4gICAgICAgIGNvbG9yOiBcIiMwMGZmMDBcIlxuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKG1vKTtcbiAgICBtby5kcmF3KGN0eCk7XG4gICAgLy8gbW8ubW92ZSgpO1xuICAgIFxuICAgIFxuICAgIGxldCBzMSA9IG5ldyBTaW11bGF0aW9uKCk7XG4gICAgXG4gICAgbGV0IG5wID0gbmV3IFBlcnNvbih7IFxuICAgICAgICBwb3M6IFs5MCwgOTBdLCBcbiAgICAgICAgdmVsOiBbMjAsIDIwXVxuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKG5wKTtcbiAgICBucC5kcmF3KGN0eCk7XG5cbiAgICBjb25zb2xlLmxvZyhzMSk7XG5cbiAgICBsZXQgc3YxID0gbmV3IFNpbXVsYXRpb25WaWV3KHMxLCBjdHgpXG4gICAgLy8gY29uc29sZS5sb2coc3YxKTtcbiAgICBzdjEuc3RhcnQoKTtcbn0pOyIsImltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnLi9zaW11bGF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5wb3MgID0gcGFyYW1ldGVycy5wb3M7XG4gICAgdGhpcy52ZWwgID0gcGFyYW1ldGVycy52ZWw7XG4gICAgdGhpcy5yYWRpdXMgID0gcGFyYW1ldGVycy5yYWRpdXM7XG4gICAgdGhpcy5jb2xvciAgPSBwYXJhbWV0ZXJzLmNvbG9yO1xuICAgIHRoaXMuc2ltdWxhdGlvbiA9IHBhcmFtZXRlcnMuc2ltdWxhdGlvbjtcbiAgICB9XG5cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICB0aGlzLnBvc1swXSxcbiAgICAgICAgICAgIHRoaXMucG9zWzFdLFxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgICAgIC8vIGZhbHNlXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMucG9zID0gWyh0aGlzLnBvc1swXSArIHRoaXMudmVsWzBdKSwgKHRoaXMucG9zWzFdICsgdGhpcy52ZWxbMV0pXVxuICAgICAgICB0aGlzLnZlbCA9IHRoaXMuc2ltdWxhdGlvbi5ib3VuY2UodGhpcy5wb3MsIHRoaXMudmVsKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wb3MpO1xuICAgIH07XG4gICAgXG4gICAgaXNDb2xsaWRlZFdpdGgob3RoZXJQZXJzb24pIHtcbiAgICAgICAgY29uc3QgY2VudGVyRGlzdCA9IFV0aWwuZGlzdCh0aGlzLnBvcywgb3RoZXJQZXJzb24ucG9zKTtcbiAgICAgICAgcmV0dXJuIGNlbnRlckRpc3QgPCAodGhpcy5yYWRpdXMgKyBvdGhlclBlcnNvbi5yYWRpdXMpO1xuICAgIH1cblxuIH1cblxuXG4iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL21vdmluZ19vYmplY3RcIjtcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBERUZBVUxUUyA9IHtcbiAgICBSQURJVVM6IDIsXG4gICAgQ09MT1I6IFwiIzAwMDA2NlwiLFxuICAgIFNQRUVEOiAyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNvbiBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVycyA9IHt9KSB7XG4gICAgICAgIHBhcmFtZXRlcnMuY29sb3IgPSBERUZBVUxUUy5DT0xPUjtcbiAgICAgICAgcGFyYW1ldGVycy5yYWRpdXMgPSBERUZBVUxUUy5SQURJVVM7XG4gICAgICAgIHBhcmFtZXRlcnMucG9zID0gcGFyYW1ldGVycy5wb3MgfHwgcGFyYW1ldGVycy5zaW11bGF0aW9uLnJhbmRvbVBvc2l0aW9uKCk7XG4gICAgICAgIHBhcmFtZXRlcnMudmVsID0gcGFyYW1ldGVycy52ZWwgfHwgVXRpbC5yYW5kb21WZWMoREVGQVVMVFMuU1BFRUQpO1xuICAgICAgICBzdXBlcihwYXJhbWV0ZXJzKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgUGVyc29uIGZyb20gJy4vcGVyc29uJztcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuRElNX1ggPSA2MDA7XG4gICAgICAgIHRoaXMuRElNX1kgPSA0MDA7XG4gICAgICAgIHRoaXMuTlVNX1BFUlNPTlMgPSAxMDA7XG4gICAgICAgIHRoaXMucGVyc29ucyA9IFtdO1xuICAgICAgICB0aGlzLmFkZFBlcnNvbnMoKTtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGVEZW5zaXR5KCkge1xuXG4gICAgLy8gfVxuXG4gICAgYWRkUGVyc29ucygpIHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5OVU1fUEVSU09OUzsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnMucHVzaChuZXcgUGVyc29uKHtwb3M6IHRoaXMucmFuZG9tUG9zaXRpb24oKSwgc2ltdWxhdGlvbjogdGhpc30pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJhbmRvbVBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gWyhNYXRoLnJhbmRvbSgpICogKHRoaXMuRElNX1gpKSwgKE1hdGgucmFuZG9tKCkgKiAodGhpcy5ESU1fWSkpXVxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5ESU1fWCwgdGhpcy5ESU1fWSk7XG4gICAgICAgIHRoaXMucGVyc29ucy5mb3JFYWNoKCBwZXJzb24gPT4gcGVyc29uLmRyYXcoY3R4KSk7XG4gICAgfVxuXG4gICAgbW92ZU9iamVjdHMoKSB7XG4gICAgICAgIHRoaXMucGVyc29ucy5mb3JFYWNoKChwZXJzb24pID0+IHtcbiAgICAgICAgICAgIHBlcnNvbi5tb3ZlKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb25zKCkge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5wZXJzb25zLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MTsgaj4xICYmIGo8dGhpcy5wZXJzb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGVyczEgPSB0aGlzLnBlcnNvbnNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgcGVyczIgPSB0aGlzLnBlcnNvbnNbal07XG5cbiAgICAgICAgICAgICAgICBpZiAocGVyczEuaXNDb2xsaWRlZFdpdGgocGVyczIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBlcnMxLmNoYW5nZURpcihwZXJzMS52ZWwpO1xuICAgICAgICAgICAgICAgICAgICBwZXJzMi5jaGFuZ2VEaXIocGVyczIudmVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VEaXIodmVsKSB7XG4gICAgICAgIGlmICh2ZWxbMF0gPiB2ZWwgWzFdKSB7XG4gICAgICAgICAgICB2ZWxbMF0gPSAtIHZlbFswXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmVsWzFdID0gLSB2ZWxbMV1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmVsXG4gICAgfVxuXG4gICAgYm91bmNlKHBvcywgdmVsKSB7XG4gICAgICAgIGlmIChwb3NbMF0gPD0gMCB8fCBwb3MgWzBdPj0gdGhpcy5ESU1fWCkge1xuICAgICAgICAgICB2ZWxbMF0gPSAtIHZlbFswXSBcbiAgICAgICAgfSBlbHNlIGlmIChwb3NbMV0gPD0gMCB8fCBwb3NbMV0gPj0gdGhpcy5ESU1fWSkge1xuICAgICAgICAgICAgdmVsWzFdID0gLSB2ZWxbMV1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmVsO1xuICAgIH1cblxufVxuXG5TaW11bGF0aW9uLkRJTV9YID0gNjAwO1xuU2ltdWxhdGlvbi5ESU1fWSA9IDQwMDtcbi8vIFNpbXVsYXRpb24uTlVNX1BFUlNPTlMgPSAxMDA7XG4iLCJpbXBvcnQgU2ltdWxhdGlvbiBmcm9tICcuL3NpbXVsYXRpb24nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXVsYXRpb25WaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihzaW11bGF0aW9uLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbiA9IHNpbXVsYXRpb247XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGlvbi5tb3ZlT2JqZWN0cygpO1xuICAgICAgICAgICAgdGhpcy5zaW11bGF0aW9uLmRyYXcodGhpcy5jdHgpO1xuICAgICAgICB9LCAyMClcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IFV0aWwgPSB7XG4gICAvLyBSZXR1cm4gYSByYW5kb21seSBvcmllbnRlZCB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gbGVuZ3RoLlxuICAgcmFuZG9tVmVjKGxlbmd0aCkge1xuICAgICAgY29uc3QgZGVnID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgcmV0dXJuIFV0aWwuc2NhbGUoW01hdGguc2luKGRlZyksIE1hdGguY29zKGRlZyldLCBsZW5ndGgpO1xuICAgfSxcbiAgIC8vIFNjYWxlIHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgYnkgdGhlIGdpdmVuIGFtb3VudC5cbiAgIHNjYWxlKHZlYywgbSkge1xuICAgICAgcmV0dXJuIFt2ZWNbMF0gKiBtLCB2ZWNbMV0gKiBtXTtcbiAgIH0sXG5cbiAgIGRpc3QocG9zMSwgcG9zMikge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgICAgIE1hdGgucG93KHBvczFbMF0gLSBwb3MyWzBdLCAyKSArIE1hdGgucG93KHBvczFbMV0gLSBwb3MyWzFdLCAyKVxuICAgICAgKVxuICAgfSBcbn0iXSwic291cmNlUm9vdCI6IiJ9