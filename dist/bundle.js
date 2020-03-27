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
  // let mo = new MovingObject({
  //     pos: [30, 30],
  //     vel: [20, 20],
  //     radius: 1,
  //     color: "#00ff00"
  // });
  // console.log(mo);
  // mo.draw(ctx);
  // mo.move();

  var s1 = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"](); // let np = new Person({ 
  //     pos: [90, 90], 
  //     vel: [20, 20]
  // });
  // console.log(np);
  // np.draw(ctx);

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
      ctx.strokeStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI // false
      );
      ctx.stroke();
    }
  }, {
    key: "move",
    value: function move() {
      this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
      this.vel = this.simulation.bounce(this.pos, this.vel); // console.log(this.pos);
    }
  }, {
    key: "changeDir",
    value: function changeDir(vel) {
      if (Math.abs(vel[0]) > Math.abs(vel[1])) {
        vel[0] = -vel[0];
      } else {
        vel[1] = -vel[1];
      }

      return vel;
    }
  }, {
    key: "isCollidedWith",
    value: function isCollidedWith(otherObject) {
      var centerDist = _util__WEBPACK_IMPORTED_MODULE_0__["Util"].dist(this.pos, otherObject.pos);
      return centerDist <= this.radius + otherObject.radius;
    }
  }]);

  return MovingObject;
}();



/***/ }),

/***/ "./src/person.js":
/*!***********************!*\
  !*** ./src/person.js ***!
  \***********************/
/*! exports provided: DEFAULTS, Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULTS", function() { return DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
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
  RADIUS: 20,
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
    parameters.radius = DEFAULTS.RADIUS; // parameters.pos = parameters.pos || parameters.simulation.randomPosition();
    // parameters.vel = parameters.vel || Util.randomVec(DEFAULTS.SPEED);

    parameters.pos = parameters.pos;
    parameters.vel = parameters.vel;
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
    this.NUM_PERSONS = 10;
    this.persons = [];
    this.addPersons();
  } // handleDensity() {
  // }


  _createClass(Simulation, [{
    key: "addPersons",
    value: function addPersons() {
      for (var i = 0; i < this.NUM_PERSONS; i++) {
        this.persons.push(new _person__WEBPACK_IMPORTED_MODULE_0__["Person"]({
          pos: this.randomPosition(),
          vel: _util__WEBPACK_IMPORTED_MODULE_1__["Util"].randomVec(_person__WEBPACK_IMPORTED_MODULE_0__["DEFAULTS"].SPEED),
          simulation: this
        }));
      }
    }
  }, {
    key: "randomPosition",
    value: function randomPosition() {
      var rad = _person__WEBPACK_IMPORTED_MODULE_0__["DEFAULTS"].RADIUS;
      var x = _util__WEBPACK_IMPORTED_MODULE_1__["Util"].randomIntRange(rad, this.DIM_X - rad);
      var y = _util__WEBPACK_IMPORTED_MODULE_1__["Util"].randomIntRange(rad, this.DIM_Y - rad);
      return [x, y];
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
        for (var j = 1; j > i && j < this.persons.length; j++) {
          // for (let j=0; j<this.persons.length; j++) {
          var pers1 = this.persons[i];
          var pers2 = this.persons[j];

          if (pers1.isCollidedWith(pers2)) {
            pers1.vel = pers1.changeDir(pers1.vel);
            pers1.color = '#ff0000';
            pers2.vel = pers2.changeDir(pers2.vel);
            pers2.color = '#ff0000'; // pers1.pos = this.bounce(pers1.vel, pers1.pos)
            // pers2.pos = this.bounce(pers2.vel, pers2.pos)
          }
        }
      }
    }
  }, {
    key: "bounce",
    value: function bounce(pos, vel) {
      var rad = _person__WEBPACK_IMPORTED_MODULE_0__["DEFAULTS"].RADIUS;

      if (pos[0] - rad <= 0 || pos[0] + rad >= this.DIM_X) {
        vel[0] = -vel[0];
      } else if (pos[1] - rad <= 0 || pos[1] + rad >= this.DIM_Y) {
        vel[1] = -vel[1];
      }

      return vel;
    }
  }, {
    key: "step",
    value: function step() {
      this.moveObjects();
      this.checkCollisions();
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
        _this.simulation.step();

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
  },
  randomIntRange: function randomIntRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb3Zpbmdfb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb25fdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2lkdGgiLCJTaW11bGF0aW9uIiwiRElNX1giLCJoZWlnaHQiLCJESU1fWSIsImN0eCIsImdldENvbnRleHQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiTW92aW5nT2JqZWN0IiwiUGVyc29uIiwiU2ltdWxhdGlvblZpZXciLCJzMSIsInN2MSIsInN0YXJ0IiwicGFyYW1ldGVycyIsInBvcyIsInZlbCIsInJhZGl1cyIsImNvbG9yIiwic2ltdWxhdGlvbiIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlIiwiYm91bmNlIiwiYWJzIiwib3RoZXJPYmplY3QiLCJjZW50ZXJEaXN0IiwiVXRpbCIsImRpc3QiLCJERUZBVUxUUyIsIlJBRElVUyIsIkNPTE9SIiwiU1BFRUQiLCJOVU1fUEVSU09OUyIsInBlcnNvbnMiLCJhZGRQZXJzb25zIiwiaSIsInB1c2giLCJyYW5kb21Qb3NpdGlvbiIsInJhbmRvbVZlYyIsInJhZCIsIngiLCJyYW5kb21JbnRSYW5nZSIsInkiLCJjbGVhclJlY3QiLCJmb3JFYWNoIiwicGVyc29uIiwiZHJhdyIsIm1vdmUiLCJsZW5ndGgiLCJqIiwicGVyczEiLCJwZXJzMiIsImlzQ29sbGlkZWRXaXRoIiwiY2hhbmdlRGlyIiwibW92ZU9iamVjdHMiLCJjaGVja0NvbGxpc2lvbnMiLCJzZXRJbnRlcnZhbCIsInN0ZXAiLCJkZWciLCJyYW5kb20iLCJzY2FsZSIsInNpbiIsImNvcyIsInZlYyIsIm0iLCJwb3MxIiwicG9zMiIsInNxcnQiLCJwb3ciLCJtaW4iLCJtYXgiLCJmbG9vciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN0RCxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csb0JBQVQsQ0FBOEIsUUFBOUIsRUFBd0MsQ0FBeEMsQ0FBakIsQ0FEc0QsQ0FFdEQ7QUFDQTs7QUFDQUQsVUFBUSxDQUFDRSxLQUFULEdBQWlCQyxtREFBVSxDQUFDQyxLQUE1QjtBQUNBSixVQUFRLENBQUNLLE1BQVQsR0FBa0JGLG1EQUFVLENBQUNHLEtB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TCxDQUFTSCxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVDLElBQUksQ0FBQyxDQUFELENBQXZCLEVBQTRCLENBQTVCLElBQWlDL0MsSUFBSSxDQUFDaUQsR0FBTCxDQUFTSCxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVDLElBQUksQ0FBQyxDQUFELENBQXZCLEVBQTRCLENBQTVCLENBRDdCLENBQVA7QUFHRixHQWZnQjtBQWlCakJ6QixnQkFqQmlCLDBCQWlCRjRCLEdBakJFLEVBaUJHQyxHQWpCSCxFQWlCUTtBQUN0QixXQUFPbkQsSUFBSSxDQUFDb0QsS0FBTCxDQUFXcEQsSUFBSSxDQUFDd0MsTUFBTCxNQUFpQlcsR0FBRyxHQUFHRCxHQUFOLEdBQVksQ0FBN0IsSUFBa0NBLEdBQTdDLENBQVA7QUFDRjtBQW5CZ0IsQ0FBYixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnLi9zaW11bGF0aW9uJztcbmltcG9ydCBTaW11bGF0aW9uVmlldyBmcm9tICcuL3NpbXVsYXRpb25fdmlldyc7XG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQgUGVyc29uIGZyb20gJy4vcGVyc29uJztcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgICAvLyBjYW52YXNFbC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIC8vIGNhbnZhc0VsLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjYW52YXNFbC53aWR0aCA9IFNpbXVsYXRpb24uRElNX1g7XG4gICAgY2FudmFzRWwuaGVpZ2h0ID0gU2ltdWxhdGlvbi5ESU1fWTtcbiAgICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgLy8gY2FudmFzRWwud2lkdGggPSBHYW1lLkRJTV9YO1xuICAgIC8vIGNhbnZhc0VsLmhlaWdodCA9IEdhbWUuRElNX1k7XG4gICAgY29uc29sZS5sb2coJ3dlYnBhY2sgaXMgd29ya2luZycpO1xuXG4gICAgd2luZG93Lk1vdmluZ09iamVjdCA9IE1vdmluZ09iamVjdDtcbiAgICB3aW5kb3cuUGVyc29uID0gUGVyc29uO1xuICAgIHdpbmRvdy5TaW11bGF0aW9uID0gU2ltdWxhdGlvbjtcbiAgICB3aW5kb3cuU2ltdWxhdGlvblZpZXcgPSBTaW11bGF0aW9uVmlldztcblxuICAgIC8vIGNvbnN0IFNpbXVsYXRpb24gPSBuZXcgU2ltdWxhdGlvbigpO1xuICAgIC8vIG5ldyBTaW11bGF0aW9uVmlldyhnYW1lLCBjdHgpLnN0YXJ0KCk7XG5cblxuICAgIC8vIGxldCBtbyA9IG5ldyBNb3ZpbmdPYmplY3Qoe1xuICAgIC8vICAgICBwb3M6IFszMCwgMzBdLFxuICAgIC8vICAgICB2ZWw6IFsyMCwgMjBdLFxuICAgIC8vICAgICByYWRpdXM6IDEsXG4gICAgLy8gICAgIGNvbG9yOiBcIiMwMGZmMDBcIlxuICAgIC8vIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKG1vKTtcbiAgICAvLyBtby5kcmF3KGN0eCk7XG4gICAgLy8gbW8ubW92ZSgpO1xuICAgIFxuICAgIFxuICAgIGxldCBzMSA9IG5ldyBTaW11bGF0aW9uKCk7XG4gICAgXG4gICAgLy8gbGV0IG5wID0gbmV3IFBlcnNvbih7IFxuICAgIC8vICAgICBwb3M6IFs5MCwgOTBdLCBcbiAgICAvLyAgICAgdmVsOiBbMjAsIDIwXVxuICAgIC8vIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKG5wKTtcbiAgICAvLyBucC5kcmF3KGN0eCk7XG5cbiAgICBjb25zb2xlLmxvZyhzMSk7XG5cbiAgICBsZXQgc3YxID0gbmV3IFNpbXVsYXRpb25WaWV3KHMxLCBjdHgpXG4gICAgLy8gY29uc29sZS5sb2coc3YxKTtcbiAgICBzdjEuc3RhcnQoKTtcbn0pOyIsImltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnLi9zaW11bGF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5wb3MgID0gcGFyYW1ldGVycy5wb3M7XG4gICAgdGhpcy52ZWwgID0gcGFyYW1ldGVycy52ZWw7XG4gICAgdGhpcy5yYWRpdXMgID0gcGFyYW1ldGVycy5yYWRpdXM7XG4gICAgdGhpcy5jb2xvciAgPSBwYXJhbWV0ZXJzLmNvbG9yO1xuICAgIHRoaXMuc2ltdWxhdGlvbiA9IHBhcmFtZXRlcnMuc2ltdWxhdGlvbjtcbiAgICB9XG5cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIHRoaXMucG9zWzBdLFxuICAgICAgICAgICAgdGhpcy5wb3NbMV0sXG4gICAgICAgICAgICB0aGlzLnJhZGl1cyxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICAgICAgLy8gZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnBvcyA9IFsodGhpcy5wb3NbMF0gKyB0aGlzLnZlbFswXSksICh0aGlzLnBvc1sxXSArIHRoaXMudmVsWzFdKV1cbiAgICAgICAgdGhpcy52ZWwgPSB0aGlzLnNpbXVsYXRpb24uYm91bmNlKHRoaXMucG9zLCB0aGlzLnZlbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9zKTtcbiAgICB9O1xuXG4gICAgY2hhbmdlRGlyKHZlbCkge1xuICAgICAgICBcbiAgICAgICAgaWYgKE1hdGguYWJzKHZlbFswXSkgPiBNYXRoLmFicyh2ZWxbMV0pKSB7XG4gICAgICAgICAgICB2ZWxbMF0gPSAtIHZlbFswXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmVsWzFdID0gLSB2ZWxbMV1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHZlbDtcbiAgICB9XG4gICAgXG4gICAgaXNDb2xsaWRlZFdpdGgob3RoZXJPYmplY3QpIHtcbiAgICAgICAgY29uc3QgY2VudGVyRGlzdCA9IFV0aWwuZGlzdCh0aGlzLnBvcywgb3RoZXJPYmplY3QucG9zKTtcbiAgICAgICAgcmV0dXJuIGNlbnRlckRpc3QgPD0gKHRoaXMucmFkaXVzICsgb3RoZXJPYmplY3QucmFkaXVzKTtcblxuICAgIH1cblxuIH1cblxuXG4iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL21vdmluZ19vYmplY3RcIjtcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVFMgPSB7XG4gICAgUkFESVVTOiAyMCxcbiAgICBDT0xPUjogXCIjMDAwMDY2XCIsXG4gICAgU1BFRUQ6IDJcbn1cblxuZXhwb3J0IGNsYXNzIFBlcnNvbiBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVycyA9IHt9KSB7XG4gICAgICAgIHBhcmFtZXRlcnMuY29sb3IgPSBERUZBVUxUUy5DT0xPUjtcbiAgICAgICAgcGFyYW1ldGVycy5yYWRpdXMgPSBERUZBVUxUUy5SQURJVVM7XG4gICAgICAgIC8vIHBhcmFtZXRlcnMucG9zID0gcGFyYW1ldGVycy5wb3MgfHwgcGFyYW1ldGVycy5zaW11bGF0aW9uLnJhbmRvbVBvc2l0aW9uKCk7XG4gICAgICAgIC8vIHBhcmFtZXRlcnMudmVsID0gcGFyYW1ldGVycy52ZWwgfHwgVXRpbC5yYW5kb21WZWMoREVGQVVMVFMuU1BFRUQpO1xuICAgICAgICBwYXJhbWV0ZXJzLnBvcyA9IHBhcmFtZXRlcnMucG9zO1xuICAgICAgICBwYXJhbWV0ZXJzLnZlbCA9IHBhcmFtZXRlcnMudmVsO1xuICAgICAgICBzdXBlcihwYXJhbWV0ZXJzKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQge1BlcnNvbiwgREVGQVVMVFN9IGZyb20gJy4vcGVyc29uJztcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuRElNX1ggPSA2MDA7XG4gICAgICAgIHRoaXMuRElNX1kgPSA0MDA7XG4gICAgICAgIHRoaXMuTlVNX1BFUlNPTlMgPSAxMDtcbiAgICAgICAgdGhpcy5wZXJzb25zID0gW107XG4gICAgICAgIHRoaXMuYWRkUGVyc29ucygpO1xuICAgIH1cblxuICAgIC8vIGhhbmRsZURlbnNpdHkoKSB7XG5cbiAgICAvLyB9XG5cbiAgICBhZGRQZXJzb25zKCkge1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLk5VTV9QRVJTT05TOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGVyc29ucy5wdXNoKG5ldyBQZXJzb24oe1xuICAgICAgICAgICAgICAgIHBvczogdGhpcy5yYW5kb21Qb3NpdGlvbigpLCBcbiAgICAgICAgICAgICAgICB2ZWw6IFV0aWwucmFuZG9tVmVjKERFRkFVTFRTLlNQRUVEKSwgXG4gICAgICAgICAgICAgICAgc2ltdWxhdGlvbjogdGhpc30pKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJhbmRvbVBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCByYWQgPSBERUZBVUxUUy5SQURJVVM7XG4gICAgICAgIGxldCB4ID0gVXRpbC5yYW5kb21JbnRSYW5nZShyYWQsIHRoaXMuRElNX1ggLSByYWQpO1xuICAgICAgICBsZXQgeSA9IFV0aWwucmFuZG9tSW50UmFuZ2UocmFkLCB0aGlzLkRJTV9ZIC0gcmFkKTtcbiAgICAgICAgcmV0dXJuIFt4LHldXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLkRJTV9YLCB0aGlzLkRJTV9ZKTtcbiAgICAgICAgdGhpcy5wZXJzb25zLmZvckVhY2goIHBlcnNvbiA9PiBwZXJzb24uZHJhdyhjdHgpKTtcbiAgICB9XG5cbiAgICBtb3ZlT2JqZWN0cygpIHtcbiAgICAgICAgdGhpcy5wZXJzb25zLmZvckVhY2goKHBlcnNvbikgPT4ge1xuICAgICAgICAgICAgcGVyc29uLm1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuXG4gICAgY2hlY2tDb2xsaXNpb25zKCkge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5wZXJzb25zLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MTsgaj5pICYmIGo8dGhpcy5wZXJzb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAvLyBmb3IgKGxldCBqPTA7IGo8dGhpcy5wZXJzb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBlcnMxID0gdGhpcy5wZXJzb25zW2ldO1xuICAgICAgICAgICAgICAgIGxldCBwZXJzMiA9IHRoaXMucGVyc29uc1tqXTtcblxuICAgICAgICAgICAgICAgIGlmIChwZXJzMS5pc0NvbGxpZGVkV2l0aChwZXJzMikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnMxLnZlbCA9IHBlcnMxLmNoYW5nZURpcihwZXJzMS52ZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGVyczEuY29sb3IgPSAnI2ZmMDAwMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzMi52ZWwgPSBwZXJzMi5jaGFuZ2VEaXIocGVyczIudmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnMyLmNvbG9yID0gJyNmZjAwMDAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGVyczEucG9zID0gdGhpcy5ib3VuY2UocGVyczEudmVsLCBwZXJzMS5wb3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZXJzMi5wb3MgPSB0aGlzLmJvdW5jZShwZXJzMi52ZWwsIHBlcnMyLnBvcylcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYm91bmNlKHBvcywgdmVsKSB7XG4gICAgICAgIGxldCByYWQgPSBERUZBVUxUUy5SQURJVVNcbiAgICAgICAgaWYgKHBvc1swXS1yYWQgPD0gMCB8fCBwb3NbMF0rcmFkPj0gdGhpcy5ESU1fWCkge1xuICAgICAgICAgICB2ZWxbMF0gPSAtIHZlbFswXSBcbiAgICAgICAgfSBlbHNlIGlmIChwb3NbMV0tcmFkIDw9IDAgfHwgcG9zWzFdK3JhZCA+PSB0aGlzLkRJTV9ZKSB7XG4gICAgICAgICAgICB2ZWxbMV0gPSAtIHZlbFsxXVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2ZWw7XG4gICAgfVxuXG4gICAgc3RlcCgpIHtcbiAgICAgICAgdGhpcy5tb3ZlT2JqZWN0cygpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9ucygpO1xuICAgIH1cblxufVxuXG5TaW11bGF0aW9uLkRJTV9YID0gNjAwO1xuU2ltdWxhdGlvbi5ESU1fWSA9IDQwMDtcbi8vIFNpbXVsYXRpb24uTlVNX1BFUlNPTlMgPSAxMDA7XG4iLCJpbXBvcnQgU2ltdWxhdGlvbiBmcm9tICcuL3NpbXVsYXRpb24nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXVsYXRpb25WaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihzaW11bGF0aW9uLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbiA9IHNpbXVsYXRpb247XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGlvbi5zdGVwKCk7XG4gICAgICAgICAgICB0aGlzLnNpbXVsYXRpb24uZHJhdyh0aGlzLmN0eCk7XG4gICAgICAgIH0sIDIwKVxuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgVXRpbCA9IHtcbiAgIC8vIFJldHVybiBhIHJhbmRvbWx5IG9yaWVudGVkIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBsZW5ndGguXG4gICByYW5kb21WZWMobGVuZ3RoKSB7XG4gICAgICBjb25zdCBkZWcgPSAyICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCk7XG4gICAgICByZXR1cm4gVXRpbC5zY2FsZShbTWF0aC5zaW4oZGVnKSwgTWF0aC5jb3MoZGVnKV0sIGxlbmd0aCk7XG4gICB9LFxuICAgLy8gU2NhbGUgdGhlIGxlbmd0aCBvZiBhIHZlY3RvciBieSB0aGUgZ2l2ZW4gYW1vdW50LlxuICAgc2NhbGUodmVjLCBtKSB7XG4gICAgICByZXR1cm4gW3ZlY1swXSAqIG0sIHZlY1sxXSAqIG1dO1xuICAgfSxcblxuICAgZGlzdChwb3MxLCBwb3MyKSB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgICAgTWF0aC5wb3cocG9zMVswXSAtIHBvczJbMF0sIDIpICsgTWF0aC5wb3cocG9zMVsxXSAtIHBvczJbMV0sIDIpXG4gICAgICApXG4gICB9LFxuICAgXG4gICByYW5kb21JbnRSYW5nZShtaW4sIG1heCkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG4gICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==