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
  var canvasEl1 = document.getElementsByTagName("canvas")[0];
  var canvasEl2 = document.getElementsByTagName("canvas")[1];
  canvasEl1.width = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_X;
  canvasEl1.height = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_Y;
  var ctx1 = canvasEl1.getContext("2d");
  canvasEl2.width = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_X;
  canvasEl2.height = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_Y;
  var ctx2 = canvasEl2.getContext("2d");
  console.log('webpack is working');
  window.Simulation = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"];
  window.SimulationView = _simulation_view__WEBPACK_IMPORTED_MODULE_1__["default"];
  var s1 = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"](200, 0.75); // let np = new Person({ 
  //     pos: [90, 90], 
  //     vel: [20, 20]
  // });
  // console.log(np);
  // np.draw(ctx1);

  console.log(s1);
  var sv1 = new _simulation_view__WEBPACK_IMPORTED_MODULE_1__["default"](s1, ctx1); // console.log(sv1);

  sv1.start();
  var s2 = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"](200, 0.25); // let np = new Person({ 
  //     pos: [90, 90], 
  //     vel: [20, 20]
  // });
  // console.log(np);
  // np.draw(ctx1);

  console.log(s2);
  var sv2 = new _simulation_view__WEBPACK_IMPORTED_MODULE_1__["default"](s2, ctx2); // console.log(sv1);

  sv2.start();
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
    this.mass = parameters.mass;
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

      if (centerDist < this.radius + otherObject.radius) {
        return true;
      } else {
        return false;
      }

      ;
    }
  }, {
    key: "remove",
    value: function remove() {
      this.simulation.remove(this);
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
  RADIUS: 2,
  COLOR: "#000066",
  SPEED: 2,
  MASS: 1
};
var Person = /*#__PURE__*/function (_MovingObject) {
  _inherits(Person, _MovingObject);

  var _super = _createSuper(Person);

  function Person() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Person);

    parameters.color = DEFAULTS.COLOR;
    parameters.radius = DEFAULTS.RADIUS;
    parameters.mass = DEFAULTS.MASS;
    parameters.pos = parameters.pos || parameters.simulation.randomPosition();
    parameters.vel = parameters.vel || _util__WEBPACK_IMPORTED_MODULE_1__["Util"].randomVec(DEFAULTS.SPEED);
    parameters.consciousCtizen = false; // parameters.pos = parameters.pos;
    // parameters.vel = parameters.vel;

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
  function Simulation(density, socialDistancingRate) {
    _classCallCheck(this, Simulation);

    this.DIM_X = 600;
    this.DIM_Y = 400;
    this.NUM_PERSONS = 100;
    this.density = density;
    this.socialDistancingRate = socialDistancingRate;
    this.persons = [];
    this.addPersons();
    this.addPatientZero();
    this.addConsciousCitizen();
  } // handleDensity() {
  // }


  _createClass(Simulation, [{
    key: "addPersons",
    value: function addPersons() {
      for (var i = 0; i < this.density; i++) {
        this.persons.push(new _person__WEBPACK_IMPORTED_MODULE_0__["Person"]({
          pos: this.randomPosition(),
          vel: _util__WEBPACK_IMPORTED_MODULE_1__["Util"].randomVec(_person__WEBPACK_IMPORTED_MODULE_0__["DEFAULTS"].SPEED),
          simulation: this
        }));

        if (i !== 0) {
          for (var j = 0; j < this.persons.length - 1; j++) {
            if (_util__WEBPACK_IMPORTED_MODULE_1__["Util"].dist(this.persons[i].pos, this.persons[j].pos) - _person__WEBPACK_IMPORTED_MODULE_0__["DEFAULTS"].RADIUS * 2 < 0) {
              this.persons[i].pos = this.randomPosition();
              j = -1;
            }
          }
        }
      }
    }
  }, {
    key: "addPatientZero",
    value: function addPatientZero() {
      this.persons[this.persons.length - 1].color = 'red';
    }
  }, {
    key: "addConsciousCitizen",
    value: function addConsciousCitizen() {
      // debugger;
      for (var i = 0; i < this.persons.length * this.socialDistancingRate; i++) {
        this.persons[i].consciousCitizen = true;
        this.persons[i].vel = [0, 0];
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
    key: "removeObject",
    value: function removeObject(object) {
      this.persons.splice(this.persons.indexOf(object), 1);
    }
  }, {
    key: "checkCollisions",
    value: function checkCollisions() {
      for (var i = 0; i < this.persons.length; i++) {
        for (var j = i + 1; j < this.persons.length; j++) {
          var pers1 = this.persons[i];
          var pers2 = this.persons[j]; // debugger;

          if (pers1.isCollidedWith(pers2)) {
            // pers1.vel = pers1.changeDir(pers1.vel);
            // pers1.color = '#ff0000';
            // pers2.vel = pers2.changeDir(pers2.vel);
            // pers2.color = '#ff0000';
            // pers1.pos = this.bounce(pers1.vel, pers1.pos)
            // pers2.pos = this.bounce(pers2.vel, pers2.pos)
            _util__WEBPACK_IMPORTED_MODULE_1__["Util"].resolveCollision(pers1, pers2);

            if (pers1.color === 'red') {
              pers2.color = 'red';
            } else if (pers2.color === 'red') {
              pers1.color = 'red';
            }

            ; // this.removeObject(pers1);
            // this.removeObject(pers2);
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

      var simulationInterval = setInterval(function () {
        _this.simulation.step();

        _this.simulation.draw(_this.ctx);
      }, 20);
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(simulationInterval);
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
  },
  rotate: function rotate(velocity, angle) {
    var rotatedVelocities = {
      x: velocity[0] * Math.cos(angle) - velocity[1] * Math.sin(angle),
      y: velocity[0] * Math.sin(angle) + velocity[1] * Math.cos(angle)
    };
    return rotatedVelocities;
  },
  resolveCollision: function resolveCollision(pers, otherPers) {
    var xVelDiff = pers.vel[0] - otherPers.vel[0];
    var yVelDiff = pers.vel[1] - otherPers.vel[1];
    var xDist = otherPers.pos[0] - pers.pos[0];
    var yDist = otherPers.pos[1] - pers.pos[1]; // Prevent accidental overlap of pers

    if (xVelDiff * xDist + yVelDiff * yDist >= 0) {
      pers.vel = pers.changeDir(pers.vel);
      otherPers.vel = otherPers.changeDir(otherPers.vel);
    }
  } // resolveCollision(pers, otherPers) {
  //    const xVelDiff = pers.vel[0] - otherPers.vel[0];
  //    const yVelDiff = pers.vel[1] - otherPers.vel[1];
  //    const xDist = otherPers.pos[0] - pers.pos[0];
  //    const yDist = otherPers.pos[1] - pers.pos[1];
  //    // Prevent accidental overlap of pers
  //    if (xVelDiff * xDist + yVelDiff * yDist >= 0) {
  //       // Grab angle between the two colliding pers
  //       const angle = -Math.atan2(otherPers.pos[1] - pers.pos[1], otherPers.pos[0] - pers.pos[0]);
  //       // Store mass in var for better readability in collision equation
  //       const m1 = pers.mass;
  //       const m2 = otherPers.mass;
  //       // vel before equation
  //       const u1 = Util.rotate(pers.vel, angle);
  //       const u2 = Util.rotate(otherPers.vel, angle);
  //       // vel after 1d collision equation
  //       const v1 = [u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), u1.y];
  //       const v2 = [u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), u2.y];
  //       // Final vel after rotating axis back to original location
  //       const vFinal1 = Util.rotate(v1, -angle);
  //       const vFinal2 = Util.rotate(v2, -angle);
  //       // Swap pers velocities for realistic bounce effect
  //       pers.vel[0] = vFinal1.x;
  //       pers.vel[1] = vFinal1.y;
  //       otherPers.vel[0] = vFinal2.x;
  //       otherPers.vel[1] = vFinal2.y;
  //    }
  // }
  // resolveCollision(pers, otherPers) {
  //    const xVelDiff = pers.vel[0] - otherPers.vel[0];
  //    const yVelDiff = pers.vel[1] - otherPers.vel[1];
  //    const xDist = otherPers.pos[0] - pers.pos[0];
  //    const yDist = otherPers.pos[1] - pers.pos[1];
  //    // Prevent accidental overlap of pers
  //    if (xVelDiff * xDist + yVelDiff * yDist >= 0) {
  //       // Grab angle between the two colliding pers
  //       const angle = -Math.atan2(otherPers.pos[1] - pers.pos[1], otherPers.pos[0] - pers.pos[0]);
  //       // Store mass in var for better readability in collision equation
  //       const m1 = pers.mass;
  //       const m2 = otherPers.mass;
  //       if (pers.consciousCitizen === true) {
  //          // vel before equation
  //          const u1 = Util.rotate(pers.vel, angle);
  //          const u2 = Util.rotate(otherPers.vel, angle);
  //          // vel after 1d collision equation
  //          const v1 = [u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), u1.y];
  //          const v2 = [u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), u2.y];
  //          // Final vel after rotating axis back to original location
  //          const vFinal1 = Util.rotate(v1, -angle);
  //          const vFinal2 = Util.rotate(v2, -angle);
  //          // Swap pers velocities for realistic bounce effect
  //          // pers.vel[0] = vFinal1.x;
  //          // pers.vel[1] = vFinal1.y;
  //          // pers.vel[0] = 0;
  //          // pers.vel[1] = 0;
  //          otherPers.vel[0] = vFinal2.x;
  //          otherPers.vel[1] = vFinal2.y;
  //       } else if (otherPers.consciousCitizen === true){
  //          // vel before equation
  //          const u1 = Util.rotate(pers.vel, angle);
  //          const u2 = Util.rotate(otherPers.vel, angle);
  //          // vel after 1d collision equation
  //          const v1 = [u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), u1.y];
  //          const v2 = [u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), u2.y];
  //          // Final vel after rotating axis back to original location
  //          const vFinal1 = Util.rotate(v1, -angle);
  //          const vFinal2 = Util.rotate(v2, -angle);
  //          // Swap pers velocities for realistic bounce effect
  //          pers.vel[0] = vFinal1.x;
  //          pers.vel[1] = vFinal1.y;
  //          // otherPers.vel[0] = vFinal2.x;
  //          // otherPers.vel[1] = vFinal2.y;
  //          // otherPers.vel[0] = 0;
  //          // otherPers.vel[1] = 0;
  //       } else {
  //          // vel before equation
  //          const u1 = Util.rotate(pers.vel, angle);
  //          const u2 = Util.rotate(otherPers.vel, angle);
  //          // vel after 1d collision equation
  //          const v1 = [u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), u1.y];
  //          const v2 = [u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), u2.y];
  //          // Final vel after rotating axis back to original location
  //          const vFinal1 = Util.rotate(v1, -angle);
  //          const vFinal2 = Util.rotate(v2, -angle);
  //          // Swap pers velocities for realistic bounce effect
  //          pers.vel[0] = vFinal1.x;
  //          pers.vel[1] = vFinal1.y;
  //          otherPers.vel[0] = vFinal2.x;
  //          otherPers.vel[1] = vFinal2.y;
  //       }
  //    }
  // }

};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb3Zpbmdfb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb25fdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbDEiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNhbnZhc0VsMiIsIndpZHRoIiwiU2ltdWxhdGlvbiIsIkRJTV9YIiwiaGVpZ2h0IiwiRElNX1kiLCJjdHgxIiwiZ2V0Q29udGV4dCIsImN0eDIiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiU2ltdWxhdGlvblZpZXciLCJzMSIsInN2MSIsInN0YXJ0IiwiczIiLCJzdjIiLCJNb3ZpbmdPYmplY3QiLCJwYXJhbWV0ZXJzIiwicG9zIiwidmVsIiwicmFkaXVzIiwiY29sb3IiLCJtYXNzIiwic2ltdWxhdGlvbiIsImN0eCIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlIiwiYm91bmNlIiwiYWJzIiwib3RoZXJPYmplY3QiLCJjZW50ZXJEaXN0IiwiVXRpbCIsImRpc3QiLCJyZW1vdmUiLCJERUZBVUxUUyIsIlJBRElVUyIsIkNPTE9SIiwiU1BFRUQiLCJNQVNTIiwiUGVyc29uIiwicmFuZG9tUG9zaXRpb24iLCJyYW5kb21WZWMiLCJjb25zY2lvdXNDdGl6ZW4iLCJkZW5zaXR5Iiwic29jaWFsRGlzdGFuY2luZ1JhdGUiLCJOVU1fUEVSU09OUyIsInBlcnNvbnMiLCJhZGRQZXJzb25zIiwiYWRkUGF0aWVudFplcm8iLCJhZGRDb25zY2lvdXNDaXRpemVuIiwiaSIsInB1c2giLCJqIiwibGVuZ3RoIiwiY29uc2Npb3VzQ2l0aXplbiIsInJhZCIsIngiLCJyYW5kb21JbnRSYW5nZSIsInkiLCJjbGVhclJlY3QiLCJmb3JFYWNoIiwicGVyc29uIiwiZHJhdyIsIm1vdmUiLCJvYmplY3QiLCJzcGxpY2UiLCJpbmRleE9mIiwicGVyczEiLCJwZXJzMiIsImlzQ29sbGlkZWRXaXRoIiwicmVzb2x2ZUNvbGxpc2lvbiIsIm1vdmVPYmplY3RzIiwiY2hlY2tDb2xsaXNpb25zIiwic2ltdWxhdGlvbkludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzdGVwIiwiY2xlYXJJbnRlcnZhbCIsImRlZyIsInJhbmRvbSIsInNjYWxlIiwic2luIiwiY29zIiwidmVjIiwibSIsInBvczEiLCJwb3MyIiwic3FydCIsInBvdyIsIm1pbiIsIm1heCIsImZsb29yIiwicm90YXRlIiwidmVsb2NpdHkiLCJhbmdsZSIsInJvdGF0ZWRWZWxvY2l0aWVzIiwicGVycyIsIm90aGVyUGVycyIsInhWZWxEaWZmIiwieVZlbERpZmYiLCJ4RGlzdCIsInlEaXN0IiwiY2hhbmdlRGlyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxp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QUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXZLaUIsQ0FBYixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnLi9zaW11bGF0aW9uJztcbmltcG9ydCBTaW11bGF0aW9uVmlldyBmcm9tICcuL3NpbXVsYXRpb25fdmlldyc7XG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQge1BlcnNvbn0gZnJvbSAnLi9wZXJzb24nO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXNFbDEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgICBjb25zdCBjYW52YXNFbDIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVsxXTtcblxuICAgIGNhbnZhc0VsMS53aWR0aCA9IFNpbXVsYXRpb24uRElNX1g7XG4gICAgY2FudmFzRWwxLmhlaWdodCA9IFNpbXVsYXRpb24uRElNX1k7XG4gICAgY29uc3QgY3R4MSA9IGNhbnZhc0VsMS5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBjYW52YXNFbDIud2lkdGggPSBTaW11bGF0aW9uLkRJTV9YO1xuICAgIGNhbnZhc0VsMi5oZWlnaHQgPSBTaW11bGF0aW9uLkRJTV9ZO1xuICAgIGNvbnN0IGN0eDIgPSBjYW52YXNFbDIuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBcbiAgICBjb25zb2xlLmxvZygnd2VicGFjayBpcyB3b3JraW5nJyk7XG5cblxuICAgIHdpbmRvdy5TaW11bGF0aW9uID0gU2ltdWxhdGlvbjtcbiAgICB3aW5kb3cuU2ltdWxhdGlvblZpZXcgPSBTaW11bGF0aW9uVmlldztcblxuICAgIGxldCBzMSA9IG5ldyBTaW11bGF0aW9uKDIwMCwgMC43NSk7XG4gICAgXG4gICAgLy8gbGV0IG5wID0gbmV3IFBlcnNvbih7IFxuICAgIC8vICAgICBwb3M6IFs5MCwgOTBdLCBcbiAgICAvLyAgICAgdmVsOiBbMjAsIDIwXVxuICAgIC8vIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKG5wKTtcbiAgICAvLyBucC5kcmF3KGN0eDEpO1xuXG4gICAgY29uc29sZS5sb2coczEpO1xuXG4gICAgbGV0IHN2MSA9IG5ldyBTaW11bGF0aW9uVmlldyhzMSwgY3R4MSlcbiAgICAvLyBjb25zb2xlLmxvZyhzdjEpO1xuICAgIHN2MS5zdGFydCgpO1xuXG5cbiAgICBsZXQgczIgPSBuZXcgU2ltdWxhdGlvbigyMDAsIDAuMjUpO1xuICAgIFxuICAgIC8vIGxldCBucCA9IG5ldyBQZXJzb24oeyBcbiAgICAvLyAgICAgcG9zOiBbOTAsIDkwXSwgXG4gICAgLy8gICAgIHZlbDogWzIwLCAyMF1cbiAgICAvLyB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyhucCk7XG4gICAgLy8gbnAuZHJhdyhjdHgxKTtcblxuICAgIGNvbnNvbGUubG9nKHMyKTtcblxuICAgIGxldCBzdjIgPSBuZXcgU2ltdWxhdGlvblZpZXcoczIsIGN0eDIpXG4gICAgLy8gY29uc29sZS5sb2coc3YxKTtcbiAgICBzdjIuc3RhcnQoKTtcblxuICAgIFxufSk7IiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgU2ltdWxhdGlvbiBmcm9tICcuL3NpbXVsYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnBvcyAgPSBwYXJhbWV0ZXJzLnBvcztcbiAgICB0aGlzLnZlbCAgPSBwYXJhbWV0ZXJzLnZlbDtcbiAgICB0aGlzLnJhZGl1cyAgPSBwYXJhbWV0ZXJzLnJhZGl1cztcbiAgICB0aGlzLmNvbG9yICA9IHBhcmFtZXRlcnMuY29sb3I7XG4gICAgdGhpcy5tYXNzID0gcGFyYW1ldGVycy5tYXNzO1xuICAgIHRoaXMuc2ltdWxhdGlvbiA9IHBhcmFtZXRlcnMuc2ltdWxhdGlvbjtcbiAgICB9XG5cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIHRoaXMucG9zWzBdLFxuICAgICAgICAgICAgdGhpcy5wb3NbMV0sXG4gICAgICAgICAgICB0aGlzLnJhZGl1cyxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICAgICAgLy8gZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnBvcyA9IFsodGhpcy5wb3NbMF0gKyB0aGlzLnZlbFswXSksICh0aGlzLnBvc1sxXSArIHRoaXMudmVsWzFdKV1cbiAgICAgICAgdGhpcy52ZWwgPSB0aGlzLnNpbXVsYXRpb24uYm91bmNlKHRoaXMucG9zLCB0aGlzLnZlbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9zKTtcbiAgICB9O1xuXG4gICAgY2hhbmdlRGlyKHZlbCkge1xuICAgICAgICBcbiAgICAgICAgaWYgKE1hdGguYWJzKHZlbFswXSkgPiBNYXRoLmFicyh2ZWxbMV0pKSB7XG4gICAgICAgICAgICB2ZWxbMF0gPSAtIHZlbFswXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmVsWzFdID0gLSB2ZWxbMV1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHZlbDtcbiAgICB9XG4gICAgXG4gICAgaXNDb2xsaWRlZFdpdGgob3RoZXJPYmplY3QpIHtcbiAgICAgICAgY29uc3QgY2VudGVyRGlzdCA9IFV0aWwuZGlzdCh0aGlzLnBvcywgb3RoZXJPYmplY3QucG9zKTtcbiAgICAgICAgaWYgKGNlbnRlckRpc3QgPCAodGhpcy5yYWRpdXMgKyBvdGhlck9iamVjdC5yYWRpdXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uLnJlbW92ZSh0aGlzKTtcbiAgICB9XG5cbiB9XG5cblxuIiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRTID0ge1xuICAgIFJBRElVUzogMixcbiAgICBDT0xPUjogXCIjMDAwMDY2XCIsXG4gICAgU1BFRUQ6IDIsXG4gICAgTUFTUzogMVxufVxuXG5leHBvcnQgY2xhc3MgUGVyc29uIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzID0ge30pIHtcbiAgICAgICAgcGFyYW1ldGVycy5jb2xvciA9IERFRkFVTFRTLkNPTE9SO1xuICAgICAgICBwYXJhbWV0ZXJzLnJhZGl1cyA9IERFRkFVTFRTLlJBRElVUztcbiAgICAgICAgcGFyYW1ldGVycy5tYXNzID0gREVGQVVMVFMuTUFTUztcbiAgICAgICAgcGFyYW1ldGVycy5wb3MgPSBwYXJhbWV0ZXJzLnBvcyB8fCBwYXJhbWV0ZXJzLnNpbXVsYXRpb24ucmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgcGFyYW1ldGVycy52ZWwgPSBwYXJhbWV0ZXJzLnZlbCB8fCBVdGlsLnJhbmRvbVZlYyhERUZBVUxUUy5TUEVFRCk7XG4gICAgICAgIHBhcmFtZXRlcnMuY29uc2Npb3VzQ3RpemVuID0gZmFsc2U7XG4gICAgICAgIC8vIHBhcmFtZXRlcnMucG9zID0gcGFyYW1ldGVycy5wb3M7XG4gICAgICAgIC8vIHBhcmFtZXRlcnMudmVsID0gcGFyYW1ldGVycy52ZWw7XG4gICAgICAgIHN1cGVyKHBhcmFtZXRlcnMpO1xuICAgIH1cblxufSIsImltcG9ydCB7UGVyc29uLCBERUZBVUxUU30gZnJvbSAnLi9wZXJzb24nO1xuaW1wb3J0IHtVdGlsfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW11bGF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihkZW5zaXR5LCBzb2NpYWxEaXN0YW5jaW5nUmF0ZSkge1xuICAgICAgICB0aGlzLkRJTV9YID0gNjAwO1xuICAgICAgICB0aGlzLkRJTV9ZID0gNDAwO1xuICAgICAgICB0aGlzLk5VTV9QRVJTT05TID0gMTAwO1xuICAgICAgICB0aGlzLmRlbnNpdHkgPSBkZW5zaXR5O1xuICAgICAgICB0aGlzLnNvY2lhbERpc3RhbmNpbmdSYXRlID0gc29jaWFsRGlzdGFuY2luZ1JhdGU7XG4gICAgICAgIHRoaXMucGVyc29ucyA9IFtdO1xuICAgICAgICB0aGlzLmFkZFBlcnNvbnMoKTtcbiAgICAgICAgdGhpcy5hZGRQYXRpZW50WmVybygpO1xuICAgICAgICB0aGlzLmFkZENvbnNjaW91c0NpdGl6ZW4oKTtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGVEZW5zaXR5KCkge1xuXG4gICAgLy8gfVxuXG4gICAgYWRkUGVyc29ucygpIHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5kZW5zaXR5OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGVyc29ucy5wdXNoKG5ldyBQZXJzb24oe1xuICAgICAgICAgICAgICAgIHBvczogdGhpcy5yYW5kb21Qb3NpdGlvbigpLCBcbiAgICAgICAgICAgICAgICB2ZWw6IFV0aWwucmFuZG9tVmVjKERFRkFVTFRTLlNQRUVEKSwgXG4gICAgICAgICAgICAgICAgc2ltdWxhdGlvbjogdGhpc30pKTtcblxuICAgICAgICAgICAgaWYgKGkhPT0wKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnBlcnNvbnMubGVuZ3RoLTE7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKFV0aWwuZGlzdCh0aGlzLnBlcnNvbnNbaV0ucG9zLCB0aGlzLnBlcnNvbnNbal0ucG9zKSAtIERFRkFVTFRTLlJBRElVUyAqIDIpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzb25zW2ldLnBvcyA9IHRoaXMucmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGo9LTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRQYXRpZW50WmVybygpIHtcbiAgICAgICAgdGhpcy5wZXJzb25zW3RoaXMucGVyc29ucy5sZW5ndGgtMV0uY29sb3IgPSAncmVkJztcbiAgICB9XG5cbiAgICBhZGRDb25zY2lvdXNDaXRpemVuKCkge1xuICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMucGVyc29ucy5sZW5ndGggKiB0aGlzLnNvY2lhbERpc3RhbmNpbmdSYXRlOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGVyc29uc1tpXS5jb25zY2lvdXNDaXRpemVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucGVyc29uc1tpXS52ZWwgPSBbMCwwXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByYW5kb21Qb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgcmFkID0gREVGQVVMVFMuUkFESVVTO1xuICAgICAgICBsZXQgeCA9IFV0aWwucmFuZG9tSW50UmFuZ2UocmFkLCB0aGlzLkRJTV9YIC0gcmFkKTtcbiAgICAgICAgbGV0IHkgPSBVdGlsLnJhbmRvbUludFJhbmdlKHJhZCwgdGhpcy5ESU1fWSAtIHJhZCk7XG4gICAgICAgIHJldHVybiBbeCx5XTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuRElNX1gsIHRoaXMuRElNX1kpO1xuICAgICAgICB0aGlzLnBlcnNvbnMuZm9yRWFjaCggcGVyc29uID0+IHBlcnNvbi5kcmF3KGN0eCkpO1xuICAgIH1cblxuICAgIG1vdmVPYmplY3RzKCkge1xuICAgICAgICB0aGlzLnBlcnNvbnMuZm9yRWFjaCgocGVyc29uKSA9PiB7XG4gICAgICAgICAgICBwZXJzb24ubW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVPYmplY3Qob2JqZWN0KSB7XG4gICAgICAgIHRoaXMucGVyc29ucy5zcGxpY2UodGhpcy5wZXJzb25zLmluZGV4T2Yob2JqZWN0KSwgMSlcbiAgICB9XG4gICAgXG5cbiAgICBjaGVja0NvbGxpc2lvbnMoKSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLnBlcnNvbnMubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaj1pKzE7IGo8dGhpcy5wZXJzb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBlcnMxID0gdGhpcy5wZXJzb25zW2ldO1xuICAgICAgICAgICAgICAgIGxldCBwZXJzMiA9IHRoaXMucGVyc29uc1tqXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgICAgICAgICBpZiAocGVyczEuaXNDb2xsaWRlZFdpdGgocGVyczIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZXJzMS52ZWwgPSBwZXJzMS5jaGFuZ2VEaXIocGVyczEudmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlcnMxLmNvbG9yID0gJyNmZjAwMDAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGVyczIudmVsID0gcGVyczIuY2hhbmdlRGlyKHBlcnMyLnZlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZXJzMi5jb2xvciA9ICcjZmYwMDAwJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlcnMxLnBvcyA9IHRoaXMuYm91bmNlKHBlcnMxLnZlbCwgcGVyczEucG9zKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGVyczIucG9zID0gdGhpcy5ib3VuY2UocGVyczIudmVsLCBwZXJzMi5wb3MpXG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlsLnJlc29sdmVDb2xsaXNpb24ocGVyczEsIHBlcnMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwZXJzMS5jb2xvciA9PT0gJ3JlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnMyLmNvbG9yID0gJ3JlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGVyczIuY29sb3IgPT09ICdyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyczEuY29sb3IgPSAncmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVtb3ZlT2JqZWN0KHBlcnMxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVtb3ZlT2JqZWN0KHBlcnMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYm91bmNlKHBvcywgdmVsKSB7XG4gICAgICAgIGxldCByYWQgPSBERUZBVUxUUy5SQURJVVNcbiAgICAgICAgaWYgKHBvc1swXS1yYWQgPD0gMCB8fCBwb3NbMF0rcmFkPj0gdGhpcy5ESU1fWCkge1xuICAgICAgICAgICB2ZWxbMF0gPSAtIHZlbFswXSBcbiAgICAgICAgfSBlbHNlIGlmIChwb3NbMV0tcmFkIDw9IDAgfHwgcG9zWzFdK3JhZCA+PSB0aGlzLkRJTV9ZKSB7XG4gICAgICAgICAgICB2ZWxbMV0gPSAtIHZlbFsxXVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2ZWw7XG4gICAgfVxuXG4gICAgc3RlcCgpIHtcbiAgICAgICAgdGhpcy5tb3ZlT2JqZWN0cygpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9ucygpO1xuICAgIH1cblxufVxuXG5TaW11bGF0aW9uLkRJTV9YID0gNjAwO1xuU2ltdWxhdGlvbi5ESU1fWSA9IDQwMDtcbi8vIFNpbXVsYXRpb24uTlVNX1BFUlNPTlMgPSAxMDA7XG4iLCJpbXBvcnQgU2ltdWxhdGlvbiBmcm9tICcuL3NpbXVsYXRpb24nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXVsYXRpb25WaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihzaW11bGF0aW9uLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbiA9IHNpbXVsYXRpb247XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGxldCBzaW11bGF0aW9uSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNpbXVsYXRpb24uc3RlcCgpO1xuICAgICAgICAgICAgdGhpcy5zaW11bGF0aW9uLmRyYXcodGhpcy5jdHgpO1xuICAgICAgICB9LCAyMClcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHNpbXVsYXRpb25JbnRlcnZhbCk7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBVdGlsID0ge1xuICAgLy8gUmV0dXJuIGEgcmFuZG9tbHkgb3JpZW50ZWQgdmVjdG9yIHdpdGggdGhlIGdpdmVuIGxlbmd0aC5cbiAgIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICAgIGNvbnN0IGRlZyA9IDIgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcbiAgICAgIHJldHVybiBVdGlsLnNjYWxlKFtNYXRoLnNpbihkZWcpLCBNYXRoLmNvcyhkZWcpXSwgbGVuZ3RoKTtcbiAgIH0sXG4gICAvLyBTY2FsZSB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yIGJ5IHRoZSBnaXZlbiBhbW91bnQuXG4gICBzY2FsZSh2ZWMsIG0pIHtcbiAgICAgIHJldHVybiBbdmVjWzBdICogbSwgdmVjWzFdICogbV07XG4gICB9LFxuXG4gICBkaXN0KHBvczEsIHBvczIpIHtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICAgICBNYXRoLnBvdyhwb3MxWzBdIC0gcG9zMlswXSwgMikgKyBNYXRoLnBvdyhwb3MxWzFdIC0gcG9zMlsxXSwgMilcbiAgICAgIClcbiAgIH0sXG4gICBcbiAgIHJhbmRvbUludFJhbmdlKG1pbiwgbWF4KSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgIH0sXG5cbiAgIHJvdGF0ZSh2ZWxvY2l0eSwgYW5nbGUpIHtcbiAgICAgIGNvbnN0IHJvdGF0ZWRWZWxvY2l0aWVzID0ge1xuICAgICAgICAgeDogdmVsb2NpdHlbMF0gKiBNYXRoLmNvcyhhbmdsZSkgLSB2ZWxvY2l0eVsxXSAqIE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgIHk6IHZlbG9jaXR5WzBdICogTWF0aC5zaW4oYW5nbGUpICsgdmVsb2NpdHlbMV0gKiBNYXRoLmNvcyhhbmdsZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiByb3RhdGVkVmVsb2NpdGllcztcbiAgIH0sXG5cbiAgIHJlc29sdmVDb2xsaXNpb24ocGVycywgb3RoZXJQZXJzKSB7XG5cbiAgICAgIGNvbnN0IHhWZWxEaWZmID0gcGVycy52ZWxbMF0gLSBvdGhlclBlcnMudmVsWzBdO1xuICAgICAgY29uc3QgeVZlbERpZmYgPSBwZXJzLnZlbFsxXSAtIG90aGVyUGVycy52ZWxbMV07XG5cblxuICAgICAgY29uc3QgeERpc3QgPSBvdGhlclBlcnMucG9zWzBdIC0gcGVycy5wb3NbMF07XG4gICAgICBjb25zdCB5RGlzdCA9IG90aGVyUGVycy5wb3NbMV0gLSBwZXJzLnBvc1sxXTtcblxuICAgICAgLy8gUHJldmVudCBhY2NpZGVudGFsIG92ZXJsYXAgb2YgcGVyc1xuICAgICAgaWYgKHhWZWxEaWZmICogeERpc3QgKyB5VmVsRGlmZiAqIHlEaXN0ID49IDApIHtcblxuICAgICAgICAgcGVycy52ZWwgPSBwZXJzLmNoYW5nZURpcihwZXJzLnZlbCk7XG4gICAgICAgICBvdGhlclBlcnMudmVsID0gb3RoZXJQZXJzLmNoYW5nZURpcihvdGhlclBlcnMudmVsKTtcbiAgICAgICAgIFxuICAgICAgfVxuICAgfVxuICAgLy8gcmVzb2x2ZUNvbGxpc2lvbihwZXJzLCBvdGhlclBlcnMpIHtcbiAgIC8vICAgIGNvbnN0IHhWZWxEaWZmID0gcGVycy52ZWxbMF0gLSBvdGhlclBlcnMudmVsWzBdO1xuICAgLy8gICAgY29uc3QgeVZlbERpZmYgPSBwZXJzLnZlbFsxXSAtIG90aGVyUGVycy52ZWxbMV07XG5cblxuICAgLy8gICAgY29uc3QgeERpc3QgPSBvdGhlclBlcnMucG9zWzBdIC0gcGVycy5wb3NbMF07XG4gICAvLyAgICBjb25zdCB5RGlzdCA9IG90aGVyUGVycy5wb3NbMV0gLSBwZXJzLnBvc1sxXTtcblxuICAgLy8gICAgLy8gUHJldmVudCBhY2NpZGVudGFsIG92ZXJsYXAgb2YgcGVyc1xuICAgLy8gICAgaWYgKHhWZWxEaWZmICogeERpc3QgKyB5VmVsRGlmZiAqIHlEaXN0ID49IDApIHtcblxuICAgLy8gICAgICAgLy8gR3JhYiBhbmdsZSBiZXR3ZWVuIHRoZSB0d28gY29sbGlkaW5nIHBlcnNcbiAgIC8vICAgICAgIGNvbnN0IGFuZ2xlID0gLU1hdGguYXRhbjIob3RoZXJQZXJzLnBvc1sxXSAtIHBlcnMucG9zWzFdLCBvdGhlclBlcnMucG9zWzBdIC0gcGVycy5wb3NbMF0pO1xuXG4gICAvLyAgICAgICAvLyBTdG9yZSBtYXNzIGluIHZhciBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5IGluIGNvbGxpc2lvbiBlcXVhdGlvblxuICAgLy8gICAgICAgY29uc3QgbTEgPSBwZXJzLm1hc3M7XG4gICAvLyAgICAgICBjb25zdCBtMiA9IG90aGVyUGVycy5tYXNzO1xuXG4gICAvLyAgICAgICAvLyB2ZWwgYmVmb3JlIGVxdWF0aW9uXG4gICAvLyAgICAgICBjb25zdCB1MSA9IFV0aWwucm90YXRlKHBlcnMudmVsLCBhbmdsZSk7XG4gICAvLyAgICAgICBjb25zdCB1MiA9IFV0aWwucm90YXRlKG90aGVyUGVycy52ZWwsIGFuZ2xlKTtcblxuICAgLy8gICAgICAgLy8gdmVsIGFmdGVyIDFkIGNvbGxpc2lvbiBlcXVhdGlvblxuICAgLy8gICAgICAgY29uc3QgdjEgPSBbdTEueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUyLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUxLnldO1xuICAgLy8gICAgICAgY29uc3QgdjIgPSBbdTIueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUxLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUyLnldO1xuXG4gICAvLyAgICAgICAvLyBGaW5hbCB2ZWwgYWZ0ZXIgcm90YXRpbmcgYXhpcyBiYWNrIHRvIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAvLyAgICAgICBjb25zdCB2RmluYWwxID0gVXRpbC5yb3RhdGUodjEsIC1hbmdsZSk7XG4gICAvLyAgICAgICBjb25zdCB2RmluYWwyID0gVXRpbC5yb3RhdGUodjIsIC1hbmdsZSk7XG5cbiAgIC8vICAgICAgIC8vIFN3YXAgcGVycyB2ZWxvY2l0aWVzIGZvciByZWFsaXN0aWMgYm91bmNlIGVmZmVjdFxuICAgLy8gICAgICAgcGVycy52ZWxbMF0gPSB2RmluYWwxLng7XG4gICAvLyAgICAgICBwZXJzLnZlbFsxXSA9IHZGaW5hbDEueTtcblxuICAgLy8gICAgICAgb3RoZXJQZXJzLnZlbFswXSA9IHZGaW5hbDIueDtcbiAgIC8vICAgICAgIG90aGVyUGVycy52ZWxbMV0gPSB2RmluYWwyLnk7XG4gICAvLyAgICB9XG4gICAvLyB9XG5cbiAgIC8vIHJlc29sdmVDb2xsaXNpb24ocGVycywgb3RoZXJQZXJzKSB7XG4gICAvLyAgICBjb25zdCB4VmVsRGlmZiA9IHBlcnMudmVsWzBdIC0gb3RoZXJQZXJzLnZlbFswXTtcbiAgIC8vICAgIGNvbnN0IHlWZWxEaWZmID0gcGVycy52ZWxbMV0gLSBvdGhlclBlcnMudmVsWzFdO1xuXG4gICAvLyAgICBjb25zdCB4RGlzdCA9IG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXTtcbiAgIC8vICAgIGNvbnN0IHlEaXN0ID0gb3RoZXJQZXJzLnBvc1sxXSAtIHBlcnMucG9zWzFdO1xuXG4gICAvLyAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgb3ZlcmxhcCBvZiBwZXJzXG4gICAvLyAgICBpZiAoeFZlbERpZmYgKiB4RGlzdCArIHlWZWxEaWZmICogeURpc3QgPj0gMCkge1xuXG4gICAvLyAgICAgICAvLyBHcmFiIGFuZ2xlIGJldHdlZW4gdGhlIHR3byBjb2xsaWRpbmcgcGVyc1xuICAgLy8gICAgICAgY29uc3QgYW5nbGUgPSAtTWF0aC5hdGFuMihvdGhlclBlcnMucG9zWzFdIC0gcGVycy5wb3NbMV0sIG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXSk7XG5cbiAgIC8vICAgICAgIC8vIFN0b3JlIG1hc3MgaW4gdmFyIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgaW4gY29sbGlzaW9uIGVxdWF0aW9uXG4gICAvLyAgICAgICBjb25zdCBtMSA9IHBlcnMubWFzcztcbiAgIC8vICAgICAgIGNvbnN0IG0yID0gb3RoZXJQZXJzLm1hc3M7XG5cbiAgIC8vICAgICAgIGlmIChwZXJzLmNvbnNjaW91c0NpdGl6ZW4gPT09IHRydWUpIHtcbiAgIC8vICAgICAgICAgIC8vIHZlbCBiZWZvcmUgZXF1YXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHUxID0gVXRpbC5yb3RhdGUocGVycy52ZWwsIGFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHUyID0gVXRpbC5yb3RhdGUob3RoZXJQZXJzLnZlbCwgYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyB2ZWwgYWZ0ZXIgMWQgY29sbGlzaW9uIGVxdWF0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB2MSA9IFt1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTEueV07XG4gICAvLyAgICAgICAgICBjb25zdCB2MiA9IFt1Mi54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTEueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTIueV07XG5cbiAgIC8vICAgICAgICAgIC8vIEZpbmFsIHZlbCBhZnRlciByb3RhdGluZyBheGlzIGJhY2sgdG8gb3JpZ2luYWwgbG9jYXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDEgPSBVdGlsLnJvdGF0ZSh2MSwgLWFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDIgPSBVdGlsLnJvdGF0ZSh2MiwgLWFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gU3dhcCBwZXJzIHZlbG9jaXRpZXMgZm9yIHJlYWxpc3RpYyBib3VuY2UgZWZmZWN0XG4gICAvLyAgICAgICAgICAvLyBwZXJzLnZlbFswXSA9IHZGaW5hbDEueDtcbiAgIC8vICAgICAgICAgIC8vIHBlcnMudmVsWzFdID0gdkZpbmFsMS55O1xuICAgLy8gICAgICAgICAgLy8gcGVycy52ZWxbMF0gPSAwO1xuICAgLy8gICAgICAgICAgLy8gcGVycy52ZWxbMV0gPSAwO1xuXG4gICAvLyAgICAgICAgICBvdGhlclBlcnMudmVsWzBdID0gdkZpbmFsMi54O1xuICAgLy8gICAgICAgICAgb3RoZXJQZXJzLnZlbFsxXSA9IHZGaW5hbDIueTtcblxuICAgLy8gICAgICAgfSBlbHNlIGlmIChvdGhlclBlcnMuY29uc2Npb3VzQ2l0aXplbiA9PT0gdHJ1ZSl7XG4gICAvLyAgICAgICAgICAvLyB2ZWwgYmVmb3JlIGVxdWF0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB1MSA9IFV0aWwucm90YXRlKHBlcnMudmVsLCBhbmdsZSk7XG4gICAvLyAgICAgICAgICBjb25zdCB1MiA9IFV0aWwucm90YXRlKG90aGVyUGVycy52ZWwsIGFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gdmVsIGFmdGVyIDFkIGNvbGxpc2lvbiBlcXVhdGlvblxuICBcbiAgIC8vICAgICAgICAgIGNvbnN0IHYxID0gW3UxLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1Mi54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1MS55XTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHYyID0gW3UyLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1MS54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1Mi55XTtcblxuICAgLy8gICAgICAgICAgLy8gRmluYWwgdmVsIGFmdGVyIHJvdGF0aW5nIGF4aXMgYmFjayB0byBvcmlnaW5hbCBsb2NhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdkZpbmFsMSA9IFV0aWwucm90YXRlKHYxLCAtYW5nbGUpO1xuICAgLy8gICAgICAgICAgY29uc3QgdkZpbmFsMiA9IFV0aWwucm90YXRlKHYyLCAtYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyBTd2FwIHBlcnMgdmVsb2NpdGllcyBmb3IgcmVhbGlzdGljIGJvdW5jZSBlZmZlY3RcbiAgIC8vICAgICAgICAgIHBlcnMudmVsWzBdID0gdkZpbmFsMS54O1xuICAgLy8gICAgICAgICAgcGVycy52ZWxbMV0gPSB2RmluYWwxLnk7XG5cbiAgIC8vICAgICAgICAgIC8vIG90aGVyUGVycy52ZWxbMF0gPSB2RmluYWwyLng7XG4gICAvLyAgICAgICAgICAvLyBvdGhlclBlcnMudmVsWzFdID0gdkZpbmFsMi55O1xuICAgLy8gICAgICAgICAgLy8gb3RoZXJQZXJzLnZlbFswXSA9IDA7XG4gICAvLyAgICAgICAgICAvLyBvdGhlclBlcnMudmVsWzFdID0gMDtcbiAgIC8vICAgICAgIH0gZWxzZSB7XG4gICAvLyAgICAgICAgICAvLyB2ZWwgYmVmb3JlIGVxdWF0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB1MSA9IFV0aWwucm90YXRlKHBlcnMudmVsLCBhbmdsZSk7XG4gICAvLyAgICAgICAgICBjb25zdCB1MiA9IFV0aWwucm90YXRlKG90aGVyUGVycy52ZWwsIGFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gdmVsIGFmdGVyIDFkIGNvbGxpc2lvbiBlcXVhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdjEgPSBbdTEueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUyLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUxLnldO1xuICAgLy8gICAgICAgICAgY29uc3QgdjIgPSBbdTIueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUxLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUyLnldO1xuXG4gICAvLyAgICAgICAgICAvLyBGaW5hbCB2ZWwgYWZ0ZXIgcm90YXRpbmcgYXhpcyBiYWNrIHRvIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB2RmluYWwxID0gVXRpbC5yb3RhdGUodjEsIC1hbmdsZSk7XG4gICAvLyAgICAgICAgICBjb25zdCB2RmluYWwyID0gVXRpbC5yb3RhdGUodjIsIC1hbmdsZSk7XG5cbiAgIC8vICAgICAgICAgIC8vIFN3YXAgcGVycyB2ZWxvY2l0aWVzIGZvciByZWFsaXN0aWMgYm91bmNlIGVmZmVjdFxuICAgLy8gICAgICAgICAgcGVycy52ZWxbMF0gPSB2RmluYWwxLng7XG4gICAvLyAgICAgICAgICBwZXJzLnZlbFsxXSA9IHZGaW5hbDEueTtcblxuICAgLy8gICAgICAgICAgb3RoZXJQZXJzLnZlbFswXSA9IHZGaW5hbDIueDtcbiAgIC8vICAgICAgICAgIG90aGVyUGVycy52ZWxbMV0gPSB2RmluYWwyLnk7XG4gICAvLyAgICAgICB9XG4gICAvLyAgICB9XG4gICAvLyB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==