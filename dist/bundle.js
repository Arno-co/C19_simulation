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
  var canvasEl1 = document.getElementsByTagName("canvas")[0]; // const canvasEl2 = document.getElementsByTagName("canvas")[1];

  var density = document.getElementById('my-density-range');
  var outputDensity = document.getElementById('density-value');
  outputDensity.innerHTML = density.value;

  density.oninput = function () {
    outputDensity.innerHTML = this.value;
    var s1 = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"](this.value, socialDist.value / 100, ctx1);
    console.log(s1);
  };

  console.log(density.value);
  var socialDist = document.getElementById('my-social-range');
  var outputSocialDist = document.getElementById('social-value');
  outputSocialDist.innerHTML = socialDist.value;

  socialDist.oninput = function () {
    outputSocialDist.innerHTML = this.value;
    var s1 = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"](density.value, this.value / 100, ctx1);
    return s1;
  };

  console.log(socialDist.value);
  var startSimulation = document.getElementById('start');

  startSimulation.onclick = function () {
    sv1.start();
  };

  canvasEl1.width = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_X;
  canvasEl1.height = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_Y;
  var ctx1 = canvasEl1.getContext("2d"); // canvasEl2.width = Simulation.DIM_X;
  // canvasEl2.height = Simulation.DIM_Y;
  // const ctx2 = canvasEl2.getContext("2d");

  console.log('webpack is working');
  window.Simulation = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"];
  window.SimulationView = _simulation_view__WEBPACK_IMPORTED_MODULE_1__["default"];
  var s1 = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"](density.value, socialDist.value / 100, ctx1);
  console.log(s1);
  var sv1 = new _simulation_view__WEBPACK_IMPORTED_MODULE_1__["default"](s1, ctx1); // sv1.start();
  // let s2 = new Simulation(50, 0.8);
  // console.log(s2);
  // let sv2 = new SimulationView(s2, ctx2)
  // sv2.start();
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
/* harmony import */ var _simulation_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simulation_view */ "./src/simulation_view.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Simulation = /*#__PURE__*/function () {
  function Simulation(density, socialDistancingRate, ctx) {
    _classCallCheck(this, Simulation);

    this.DIM_X = 600;
    this.DIM_Y = 400;
    this.NUM_PERSONS = 100;
    this.density = density;
    this.socialDistancingRate = socialDistancingRate;
    this.populationInfected = false;
    this.persons = [];
    this.addPersons();
    this.addPatientZero();
    this.addConsciousCitizen();
    this.draw(ctx);
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
        this.persons[i].color = 'green';
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

      if (pos[0] - rad < 0 || pos[0] + rad > this.DIM_X) {
        vel[0] = -vel[0];
      } else if (pos[1] - rad < 0 || pos[1] + rad > this.DIM_Y) {
        vel[1] = -vel[1];
      }

      return vel;
    }
  }, {
    key: "handleInfection",
    value: function handleInfection() {
      if (this.persons.every(function (person) {
        return person.color === 'red';
      })) {
        this.populationInfected = true;
      }
    }
  }, {
    key: "step",
    value: function step() {
      this.moveObjects();
      this.checkCollisions();
      this.handleInfection(); // if (!this.populationInfected) {
      //     this.moveObjects();
      //     this.checkCollisions();
      //     this.handleInfection();
      // } else {
      //     return null;
      // }
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

        if (_this.simulation.populationInfected) {
          clearInterval(simulationInterval);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb3Zpbmdfb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb25fdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbDEiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImRlbnNpdHkiLCJnZXRFbGVtZW50QnlJZCIsIm91dHB1dERlbnNpdHkiLCJpbm5lckhUTUwiLCJ2YWx1ZSIsIm9uaW5wdXQiLCJzMSIsIlNpbXVsYXRpb24iLCJzb2NpYWxEaXN0IiwiY3R4MSIsImNvbnNvbGUiLCJsb2ciLCJvdXRwdXRTb2NpYWxEaXN0Iiwic3RhcnRTaW11bGF0aW9uIiwib25jbGljayIsInN2MSIsInN0YXJ0Iiwid2lkdGgiLCJESU1fWCIsImhlaWdodCIsIkRJTV9ZIiwiZ2V0Q29udGV4dCIsIndpbmRvdyIsIlNpbXVsYXRpb25WaWV3IiwiTW92aW5nT2JqZWN0IiwicGFyYW1ldGVycyIsInBvcyIsInZlbCIsInJhZGl1cyIsImNvbG9yIiwibWFzcyIsInNpbXVsYXRpb24iLCJjdHgiLCJzdHJva2VTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsInN0cm9rZSIsImJvdW5jZSIsImFicyIsIm90aGVyT2JqZWN0IiwiY2VudGVyRGlzdCIsIlV0aWwiLCJkaXN0IiwicmVtb3ZlIiwiREVGQVVMVFMiLCJSQURJVVMiLCJDT0xPUiIsIlNQRUVEIiwiTUFTUyIsIlBlcnNvbiIsInJhbmRvbVBvc2l0aW9uIiwicmFuZG9tVmVjIiwiY29uc2Npb3VzQ3RpemVuIiwic29jaWFsRGlzdGFuY2luZ1JhdGUiLCJOVU1fUEVSU09OUyIsInBvcHVsYXRpb25JbmZlY3RlZCIsInBlcnNvbnMiLCJhZGRQZXJzb25zIiwiYWRkUGF0aWVudFplcm8iLCJhZGRDb25zY2lvdXNDaXRpemVuIiwiZHJhdyIsImkiLCJwdXNoIiwiaiIsImxlbmd0aCIsImNvbnNjaW91c0NpdGl6ZW4iLCJyYWQiLCJ4IiwicmFuZG9tSW50UmFuZ2UiLCJ5IiwiY2xlYXJSZWN0IiwiZm9yRWFjaCIsInBlcnNvbiIsIm1vdmUiLCJvYmplY3QiLCJzcGxpY2UiLCJpbmRleE9mIiwicGVyczEiLCJwZXJzMiIsImlzQ29sbGlkZWRXaXRoIiwicmVzb2x2ZUNvbGxpc2lvbiIsImV2ZXJ5IiwibW92ZU9iamVjdHMiLCJjaGVja0NvbGxpc2lvbnMiLCJoYW5kbGVJbmZlY3Rpb24iLCJzaW11bGF0aW9uSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInN0ZXAiLCJjbGVhckludGVydmFsIiwiZGVnIiwicmFuZG9tIiwic2NhbGUiLCJzaW4iLCJjb3MiLCJ2ZWMiLCJtIiwicG9zMSIsInBvczIiLCJzcXJ0IiwicG93IiwibWluIiwibWF4IiwiZmxvb3IiLCJyb3RhdGUiLCJ2ZWxvY2l0eSIsImFuZ2xlIiwicm90YXRlZFZlbG9jaXRpZXMiLCJwZXJzIiwib3RoZXJQZXJzIiwieFZlbERpZmYiLCJ5VmVsRGlmZiIsInhEaXN0IiwieURpc3QiLCJjaGFuZ2VEaXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0FBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDdEQsTUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLG9CQUFULENBQThCLFFBQTlCLEVBQXdDLENBQXhDLENBQWxCLENBRHNELENBRXREOztBQUlBLE1BQUlDLE9BQU8sR0FBR0osUUFBUSxDQUFDSyxjQUFULENBQXdCLGtCQUF4QixDQUFkO0FBQ0EsTUFBSUMsYUFBYSxHQUFHTixRQUFRLENBQUNLLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBcEI7QUFFQUMsZUFBYSxDQUFDQyxTQUFkLEdBQTBCSCxPQUFPLENBQUNJLEtBQWxDOztBQUVBSixTQUFPLENBQUNLLE9BQVIsR0FBa0IsWUFBWTtBQUUxQkgsaUJBQWEsQ0FBQ0MsU0FBZCxHQUEwQixLQUFLQyxLQUEvQjtBQUNBLFFBQUlFLEVBQUUsR0FBRyxJQUFJQyxtREFBSixDQUFlLEtBQUtILEtBQXBCLEVBQTJCSSxVQUFVLENBQUNKLEtBQVgsR0FBbUIsR0FBOUMsRUFBbURLLElBQW5ELENBQVQ7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlMLEVBQVo7QUFDSCxHQUxEOztBQU1BSSxTQUFPLENBQUNDLEdBQVIsQ0FBWVgsT0FBTyxDQUFDSSxLQUFwQjtBQUVBLE1BQUlJLFVBQVUsR0FBR1osUUFBUSxDQUFDSyxjQUFULENBQXdCLGlCQUF4QixDQUFqQjtBQUNBLE1BQUlXLGdCQUFnQixHQUFHaEIsUUFBUSxDQUFDSyxjQUFULENBQXdCLGNBQXhCLENBQXZCO0FBRUFXLGtCQUFnQixDQUFDVCxTQUFqQixHQUE2QkssVUFBVSxDQUFDSixLQUF4Qzs7QUFFQUksWUFBVSxDQUFDSCxPQUFYLEdBQXFCLFlBQVk7QUFDN0JPLG9CQUFnQixDQUFDVCxTQUFqQixHQUE2QixLQUFLQyxLQUFsQztBQUNBLFFBQUlFLEVBQUUsR0FBRyxJQUFJQyxtREFBSixDQUFlUCxPQUFPLENBQUNJLEtBQXZCLEVBQThCLEtBQUtBLEtBQUwsR0FBYSxHQUEzQyxFQUFnREssSUFBaEQsQ0FBVDtBQUNBLFdBQU9ILEVBQVA7QUFDSCxHQUpEOztBQUtBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsVUFBVSxDQUFDSixLQUF2QjtBQUVBLE1BQUlTLGVBQWUsR0FBR2pCLFFBQVEsQ0FBQ0ssY0FBVCxDQUF3QixPQUF4QixDQUF0Qjs7QUFDQVksaUJBQWUsQ0FBQ0MsT0FBaEIsR0FBMEIsWUFBWTtBQUNsQ0MsT0FBRyxDQUFDQyxLQUFKO0FBQ0gsR0FGRDs7QUFLQWxCLFdBQVMsQ0FBQ21CLEtBQVYsR0FBa0JWLG1EQUFVLENBQUNXLEtBQTdCO0FBQ0FwQixXQUFTLENBQUNxQixNQUFWLEdBQW1CWixtREFBVSxDQUFDYSxLQUE5QjtBQUNBLE1BQU1YLElBQUksR0FBR1gsU0FBUyxDQUFDdUIsVUFBVixDQUFxQixJQUFyQixDQUFiLENBdkNzRCxDQXlDdEQ7QUFDQTtBQUNBOztBQUVBWCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUdBVyxRQUFNLENBQUNmLFVBQVAsR0FBb0JBLG1EQUFwQjtBQUNBZSxRQUFNLENBQUNDLGNBQVAsR0FBd0JBLHdEQUF4QjtBQUVBLE1BQUlqQixFQUFFLEdBQUcsSUFBSUMsbURBQUosQ0FBZVAsT0FBTyxDQUFDSSxLQUF2QixFQUE4QkksVUFBVSxDQUFDSixLQUFYLEdBQW1CLEdBQWpELEVBQXNESyxJQUF0RCxDQUFUO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxFQUFaO0FBQ0EsTUFBSVMsR0FBRyxHQUFHLElBQUlRLHdEQUFKLENBQW1CakIsRUFBbkIsRUFBdUJHLElBQXZCLENBQVYsQ0FyRHNELENBc0R0RDtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBS0gsQ0FqRUQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0lBRXFCZSxZO0FBQ2pCLHdCQUFZQyxVQUFaLEVBQXdCO0FBQUE7O0FBQ3hCLFNBQUtDLEdBQUwsR0FBWUQsVUFBVSxDQUFDQyxHQUF2QjtBQUNBLFNBQUtDLEdBQUwsR0FBWUYsVUFBVSxDQUFDRSxHQUF2QjtBQUNBLFNBQUtDLE1BQUwsR0FBZUgsVUFBVSxDQUFDRyxNQUExQjtBQUNBLFNBQUtDLEtBQUwsR0FBY0osVUFBVSxDQUFDSSxLQUF6QjtBQUNBLFNBQUtDLElBQUwsR0FBWUwsVUFBVSxDQUFDSyxJQUF2QjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JOLFVBQVUsQ0FBQ00sVUFBN0I7QUFDQzs7Ozt5QkFHSUMsRyxFQUFLO0FBQ05BLFNBQUcsQ0FBQ0MsV0FBSixHQUFrQixLQUFLSixLQUF2QjtBQUNBRyxTQUFHLENBQUNFLFNBQUo7QUFDQUYsU0FBRyxDQUFDRyxHQUFKLENBQ0ksS0FBS1QsR0FBTCxDQUFTLENBQVQsQ0FESixFQUVJLEtBQUtBLEdBQUwsQ0FBUyxDQUFULENBRkosRUFHSSxLQUFLRSxNQUhULEVBSUksQ0FKSixFQUtJLElBQUlRLElBQUksQ0FBQ0MsRUFMYixDQU1JO0FBTko7QUFRQUwsU0FBRyxDQUFDTSxNQUFKO0FBQ0Y7OzsyQkFFSztBQUNILFdBQUtaLEdBQUwsR0FBVyxDQUFFLEtBQUtBLEdBQUwsQ0FBUyxDQUFULElBQWMsS0FBS0MsR0FBTCxDQUFTLENBQVQsQ0FBaEIsRUFBK0IsS0FBS0QsR0FBTCxDQUFTLENBQVQsSUFBYyxLQUFLQyxHQUFMLENBQVMsQ0FBVCxDQUE3QyxDQUFYO0FBQ0EsV0FBS0EsR0FBTCxHQUFXLEtBQUtJLFVBQUwsQ0FBZ0JRLE1BQWhCLENBQXVCLEtBQUtiLEdBQTVCLEVBQWlDLEtBQUtDLEdBQXRDLENBQVgsQ0FGRyxDQUdIO0FBQ0g7Ozs4QkFFU0EsRyxFQUFLO0FBRVgsVUFBSVMsSUFBSSxDQUFDSSxHQUFMLENBQVNiLEdBQUcsQ0FBQyxDQUFELENBQVosSUFBbUJTLElBQUksQ0FBQ0ksR0FBTCxDQUFTYixHQUFHLENBQUMsQ0FBRCxDQUFaLENBQXZCLEVBQXlDO0FBQ3JDQSxXQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBRUEsR0FBRyxDQUFDLENBQUQsQ0FBZDtBQUNILE9BRkQsTUFFTztBQUNIQSxXQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBRUEsR0FBRyxDQUFDLENBQUQsQ0FBZDtBQUNIOztBQUVELGFBQU9BLEdBQVA7QUFDSDs7O21DQUVjYyxXLEVBQWE7QUFDeEIsVUFBTUMsVUFBVSxHQUFHQywwQ0FBSSxDQUFDQyxJQUFMLENBQVUsS0FBS2xCLEdBQWYsRUFBb0JlLFdBQVcsQ0FBQ2YsR0FBaEMsQ0FBbkI7O0FBQ0EsVUFBSWdCLFVBQVUsR0FBSSxLQUFLZCxNQUFMLEdBQWNhLFdBQVcsQ0FBQ2IsTUFBNUMsRUFBcUQ7QUFDakQsZUFBTyxJQUFQO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsZUFBTyxLQUFQO0FBQ0g7O0FBQUE7QUFFSjs7OzZCQUVRO0FBQ0wsV0FBS0csVUFBTCxDQUFnQmMsTUFBaEIsQ0FBdUIsSUFBdkI7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REw7QUFDQTtBQUVPLElBQU1DLFFBQVEsR0FBRztBQUNwQkMsUUFBTSxFQUFFLENBRFk7QUFFcEJDLE9BQUssRUFBRSxTQUZhO0FBR3BCQyxPQUFLLEVBQUUsQ0FIYTtBQUlwQkMsTUFBSSxFQUFFO0FBSmMsQ0FBakI7QUFPQSxJQUFNQyxNQUFiO0FBQUE7O0FBQUE7O0FBQ0ksb0JBQTZCO0FBQUEsUUFBakIxQixVQUFpQix1RUFBSixFQUFJOztBQUFBOztBQUN6QkEsY0FBVSxDQUFDSSxLQUFYLEdBQW1CaUIsUUFBUSxDQUFDRSxLQUE1QjtBQUNBdkIsY0FBVSxDQUFDRyxNQUFYLEdBQW9Ca0IsUUFBUSxDQUFDQyxNQUE3QjtBQUNBdEIsY0FBVSxDQUFDSyxJQUFYLEdBQWtCZ0IsUUFBUSxDQUFDSSxJQUEzQjtBQUNBekIsY0FBVSxDQUFDQyxHQUFYLEdBQWlCRCxVQUFVLENBQUNDLEdBQVgsSUFBa0JELFVBQVUsQ0FBQ00sVUFBWCxDQUFzQnFCLGNBQXRCLEVBQW5DO0FBQ0EzQixjQUFVLENBQUNFLEdBQVgsR0FBaUJGLFVBQVUsQ0FBQ0UsR0FBWCxJQUFrQmdCLDBDQUFJLENBQUNVLFNBQUwsQ0FBZVAsUUFBUSxDQUFDRyxLQUF4QixDQUFuQztBQUNBeEIsY0FBVSxDQUFDNkIsZUFBWCxHQUE2QixLQUE3QixDQU55QixDQU96QjtBQUNBOztBQVJ5Qiw2QkFTbkI3QixVQVRtQjtBQVU1Qjs7QUFYTDtBQUFBLEVBQTRCRCxzREFBNUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7O0lBRXFCakIsVTtBQUNqQixzQkFBWVAsT0FBWixFQUFxQnVELG9CQUFyQixFQUEyQ3ZCLEdBQTNDLEVBQWdEO0FBQUE7O0FBQzVDLFNBQUtkLEtBQUwsR0FBYSxHQUFiO0FBQ0EsU0FBS0UsS0FBTCxHQUFhLEdBQWI7QUFDQSxTQUFLb0MsV0FBTCxHQUFtQixHQUFuQjtBQUNBLFNBQUt4RCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLdUQsb0JBQUwsR0FBNEJBLG9CQUE1QjtBQUNBLFNBQUtFLGtCQUFMLEdBQTBCLEtBQTFCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLQyxVQUFMO0FBQ0EsU0FBS0MsY0FBTDtBQUNBLFNBQUtDLG1CQUFMO0FBQ0EsU0FBS0MsSUFBTCxDQUFVOUIsR0FBVjtBQUNILEcsQ0FFRDtBQUVBOzs7OztpQ0FFYTtBQUNULFdBQUksSUFBSStCLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQyxLQUFLL0QsT0FBcEIsRUFBNkIrRCxDQUFDLEVBQTlCLEVBQWtDO0FBQzlCLGFBQUtMLE9BQUwsQ0FBYU0sSUFBYixDQUFrQixJQUFJYiw4Q0FBSixDQUFXO0FBQ3pCekIsYUFBRyxFQUFFLEtBQUswQixjQUFMLEVBRG9CO0FBRXpCekIsYUFBRyxFQUFFZ0IsMENBQUksQ0FBQ1UsU0FBTCxDQUFlUCxnREFBUSxDQUFDRyxLQUF4QixDQUZvQjtBQUd6QmxCLG9CQUFVLEVBQUU7QUFIYSxTQUFYLENBQWxCOztBQUtBLFlBQUlnQyxDQUFDLEtBQUcsQ0FBUixFQUFXO0FBQ1AsZUFBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtQLE9BQUwsQ0FBYVEsTUFBYixHQUFvQixDQUF4QyxFQUEyQ0QsQ0FBQyxFQUE1QyxFQUFnRDtBQUM1QyxnQkFBS3RCLDBDQUFJLENBQUNDLElBQUwsQ0FBVSxLQUFLYyxPQUFMLENBQWFLLENBQWIsRUFBZ0JyQyxHQUExQixFQUErQixLQUFLZ0MsT0FBTCxDQUFhTyxDQUFiLEVBQWdCdkMsR0FBL0MsSUFBc0RvQixnREFBUSxDQUFDQyxNQUFULEdBQWtCLENBQXpFLEdBQThFLENBQWxGLEVBQXFGO0FBQ2pGLG1CQUFLVyxPQUFMLENBQWFLLENBQWIsRUFBZ0JyQyxHQUFoQixHQUFzQixLQUFLMEIsY0FBTCxFQUF0QjtBQUNBYSxlQUFDLEdBQUMsQ0FBQyxDQUFIO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFDSjs7O3FDQUVnQjtBQUNiLFdBQUtQLE9BQUwsQ0FBYSxLQUFLQSxPQUFMLENBQWFRLE1BQWIsR0FBb0IsQ0FBakMsRUFBb0NyQyxLQUFwQyxHQUE0QyxLQUE1QztBQUNIOzs7MENBRXFCO0FBQ2xCO0FBQ0EsV0FBSyxJQUFJa0MsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDLEtBQUtMLE9BQUwsQ0FBYVEsTUFBYixHQUFzQixLQUFLWCxvQkFBM0MsRUFBaUVRLENBQUMsRUFBbEUsRUFBc0U7QUFDbEUsYUFBS0wsT0FBTCxDQUFhSyxDQUFiLEVBQWdCSSxnQkFBaEIsR0FBbUMsSUFBbkM7QUFDQSxhQUFLVCxPQUFMLENBQWFLLENBQWIsRUFBZ0JwQyxHQUFoQixHQUFzQixDQUFDLENBQUQsRUFBRyxDQUFILENBQXRCO0FBQ0EsYUFBSytCLE9BQUwsQ0FBYUssQ0FBYixFQUFnQmxDLEtBQWhCLEdBQXdCLE9BQXhCO0FBQ0g7QUFDSjs7O3FDQUVnQjtBQUNiLFVBQU11QyxHQUFHLEdBQUd0QixnREFBUSxDQUFDQyxNQUFyQjtBQUNBLFVBQUlzQixDQUFDLEdBQUcxQiwwQ0FBSSxDQUFDMkIsY0FBTCxDQUFvQkYsR0FBcEIsRUFBeUIsS0FBS2xELEtBQUwsR0FBYWtELEdBQXRDLENBQVI7QUFDQSxVQUFJRyxDQUFDLEdBQUc1QiwwQ0FBSSxDQUFDMkIsY0FBTCxDQUFvQkYsR0FBcEIsRUFBeUIsS0FBS2hELEtBQUwsR0FBYWdELEdBQXRDLENBQVI7QUFDQSxhQUFPLENBQUNDLENBQUQsRUFBR0UsQ0FBSCxDQUFQO0FBQ0g7Ozt5QkFFSXZDLEcsRUFBSztBQUNOQSxTQUFHLENBQUN3QyxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixLQUFLdEQsS0FBekIsRUFBZ0MsS0FBS0UsS0FBckM7QUFDQSxXQUFLc0MsT0FBTCxDQUFhZSxPQUFiLENBQXNCLFVBQUFDLE1BQU07QUFBQSxlQUFJQSxNQUFNLENBQUNaLElBQVAsQ0FBWTlCLEdBQVosQ0FBSjtBQUFBLE9BQTVCO0FBQ0g7OztrQ0FFYTtBQUNWLFdBQUswQixPQUFMLENBQWFlLE9BQWIsQ0FBcUIsVUFBQ0MsTUFBRCxFQUFZO0FBQzdCQSxjQUFNLENBQUNDLElBQVA7QUFDSCxPQUZEO0FBR0g7OztpQ0FFWUMsTSxFQUFRO0FBQ2pCLFdBQUtsQixPQUFMLENBQWFtQixNQUFiLENBQW9CLEtBQUtuQixPQUFMLENBQWFvQixPQUFiLENBQXFCRixNQUFyQixDQUFwQixFQUFrRCxDQUFsRDtBQUNIOzs7c0NBR2lCO0FBQ2QsV0FBSyxJQUFJYixDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUMsS0FBS0wsT0FBTCxDQUFhUSxNQUE3QixFQUFvQ0gsQ0FBQyxFQUFyQyxFQUF5QztBQUNyQyxhQUFLLElBQUlFLENBQUMsR0FBQ0YsQ0FBQyxHQUFDLENBQWIsRUFBZ0JFLENBQUMsR0FBQyxLQUFLUCxPQUFMLENBQWFRLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQ3hDLGNBQUljLEtBQUssR0FBRyxLQUFLckIsT0FBTCxDQUFhSyxDQUFiLENBQVo7QUFDQSxjQUFJaUIsS0FBSyxHQUFHLEtBQUt0QixPQUFMLENBQWFPLENBQWIsQ0FBWixDQUZ3QyxDQUl4Qzs7QUFDQSxjQUFJYyxLQUFLLENBQUNFLGNBQU4sQ0FBcUJELEtBQXJCLENBQUosRUFBaUM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FyQyxzREFBSSxDQUFDdUMsZ0JBQUwsQ0FBc0JILEtBQXRCLEVBQTZCQyxLQUE3Qjs7QUFDQSxnQkFBSUQsS0FBSyxDQUFDbEQsS0FBTixLQUFnQixLQUFwQixFQUEyQjtBQUMzQm1ELG1CQUFLLENBQUNuRCxLQUFOLEdBQWMsS0FBZDtBQUNDLGFBRkQsTUFFTyxJQUFJbUQsS0FBSyxDQUFDbkQsS0FBTixLQUFnQixLQUFwQixFQUEyQjtBQUM5QmtELG1CQUFLLENBQUNsRCxLQUFOLEdBQWMsS0FBZDtBQUNIOztBQUFBLGFBWndCLENBYXpCO0FBQ0E7QUFFUDtBQUNKO0FBQ0o7QUFDSjs7OzJCQUdNSCxHLEVBQUtDLEcsRUFBSztBQUNiLFVBQUl5QyxHQUFHLEdBQUd0QixnREFBUSxDQUFDQyxNQUFuQjs7QUFDQSxVQUFJckIsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFPMEMsR0FBUCxHQUFhLENBQWIsSUFBa0IxQyxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQU8wQyxHQUFQLEdBQWEsS0FBS2xELEtBQXhDLEVBQStDO0FBQzVDUyxXQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBRUEsR0FBRyxDQUFDLENBQUQsQ0FBZDtBQUNGLE9BRkQsTUFFTyxJQUFJRCxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQU8wQyxHQUFQLEdBQWEsQ0FBYixJQUFrQjFDLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBTzBDLEdBQVAsR0FBYSxLQUFLaEQsS0FBeEMsRUFBK0M7QUFDbERPLFdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUFFQSxHQUFHLENBQUMsQ0FBRCxDQUFkO0FBQ0g7O0FBQ0QsYUFBT0EsR0FBUDtBQUNIOzs7c0NBRWlCO0FBQ2QsVUFBSSxLQUFLK0IsT0FBTCxDQUFheUIsS0FBYixDQUFtQixVQUFBVCxNQUFNO0FBQUEsZUFBSUEsTUFBTSxDQUFDN0MsS0FBUCxLQUFpQixLQUFyQjtBQUFBLE9BQXpCLENBQUosRUFBMEQ7QUFDdEQsYUFBSzRCLGtCQUFMLEdBQTBCLElBQTFCO0FBQ0g7QUFDSjs7OzJCQUVNO0FBRUgsV0FBSzJCLFdBQUw7QUFDQSxXQUFLQyxlQUFMO0FBQ0EsV0FBS0MsZUFBTCxHQUpHLENBTUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7Ozs7OztBQUlML0UsVUFBVSxDQUFDVyxLQUFYLEdBQW1CLEdBQW5CO0FBQ0FYLFVBQVUsQ0FBQ2EsS0FBWCxHQUFtQixHQUFuQixDLENBQ0EsZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdJQTs7SUFHcUJHLGM7QUFDakIsMEJBQVlRLFVBQVosRUFBd0JDLEdBQXhCLEVBQTZCO0FBQUE7O0FBQ3pCLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtELFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0g7Ozs7NEJBRU87QUFBQTs7QUFDSixVQUFJd0Qsa0JBQWtCLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQ3ZDLGFBQUksQ0FBQ3pELFVBQUwsQ0FBZ0IwRCxJQUFoQjs7QUFDQSxhQUFJLENBQUMxRCxVQUFMLENBQWdCK0IsSUFBaEIsQ0FBcUIsS0FBSSxDQUFDOUIsR0FBMUI7O0FBQ0EsWUFBSSxLQUFJLENBQUNELFVBQUwsQ0FBZ0IwQixrQkFBcEIsRUFBd0M7QUFDcENpQyx1QkFBYSxDQUFDSCxrQkFBRCxDQUFiO0FBQ0g7QUFDSixPQU5tQyxFQU1qQyxFQU5pQyxDQUFwQztBQVNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkw7QUFBQTtBQUFPLElBQU01QyxJQUFJLEdBQUc7QUFDakI7QUFDQVUsV0FGaUIscUJBRVBhLE1BRk8sRUFFQztBQUNmLFFBQU15QixHQUFHLEdBQUcsSUFBSXZELElBQUksQ0FBQ0MsRUFBVCxHQUFjRCxJQUFJLENBQUN3RCxNQUFMLEVBQTFCO0FBQ0EsV0FBT2pELElBQUksQ0FBQ2tELEtBQUwsQ0FBVyxDQUFDekQsSUFBSSxDQUFDMEQsR0FBTCxDQUFTSCxHQUFULENBQUQsRUFBZ0J2RCxJQUFJLENBQUMyRCxHQUFMLENBQVNKLEdBQVQsQ0FBaEIsQ0FBWCxFQUEyQ3pCLE1BQTNDLENBQVA7QUFDRixHQUxnQjtBQU1qQjtBQUNBMkIsT0FQaUIsaUJBT1hHLEdBUFcsRUFPTkMsQ0FQTSxFQU9IO0FBQ1gsV0FBTyxDQUFDRCxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNDLENBQVYsRUFBYUQsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTQyxDQUF0QixDQUFQO0FBQ0YsR0FUZ0I7QUFXakJyRCxNQVhpQixnQkFXWnNELElBWFksRUFXTkMsSUFYTSxFQVdBO0FBQ2QsV0FBTy9ELElBQUksQ0FBQ2dFLElBQUwsQ0FDSmhFLElBQUksQ0FBQ2lFLEdBQUwsQ0FBU0gsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVQyxJQUFJLENBQUMsQ0FBRCxDQUF2QixFQUE0QixDQUE1QixJQUFpQy9ELElBQUksQ0FBQ2lFLEdBQUwsQ0FBU0gsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVQyxJQUFJLENBQUMsQ0FBRCxDQUF2QixFQUE0QixDQUE1QixDQUQ3QixDQUFQO0FBR0YsR0FmZ0I7QUFpQmpCN0IsZ0JBakJpQiwwQkFpQkZnQyxHQWpCRSxFQWlCR0MsR0FqQkgsRUFpQlE7QUFDdEIsV0FBT25FLElBQUksQ0FBQ29FLEtBQUwsQ0FBV3BFLElBQUksQ0FBQ3dELE1BQUwsTUFBaUJXLEdBQUcsR0FBR0QsR0FBTixHQUFZLENBQTdCLElBQWtDQSxHQUE3QyxDQUFQO0FBQ0YsR0FuQmdCO0FBcUJqQkcsUUFyQmlCLGtCQXFCVkMsUUFyQlUsRUFxQkFDLEtBckJBLEVBcUJPO0FBQ3JCLFFBQU1DLGlCQUFpQixHQUFHO0FBQ3ZCdkMsT0FBQyxFQUFFcUMsUUFBUSxDQUFDLENBQUQsQ0FBUixHQUFjdEUsSUFBSSxDQUFDMkQsR0FBTCxDQUFTWSxLQUFULENBQWQsR0FBZ0NELFFBQVEsQ0FBQyxDQUFELENBQVIsR0FBY3RFLElBQUksQ0FBQzBELEdBQUwsQ0FBU2EsS0FBVCxDQUQxQjtBQUV2QnBDLE9BQUMsRUFBRW1DLFFBQVEsQ0FBQyxDQUFELENBQVIsR0FBY3RFLElBQUksQ0FBQzBELEdBQUwsQ0FBU2EsS0FBVCxDQUFkLEdBQWdDRCxRQUFRLENBQUMsQ0FBRCxDQUFSLEdBQWN0RSxJQUFJLENBQUMyRCxHQUFMLENBQVNZLEtBQVQ7QUFGMUIsS0FBMUI7QUFJQSxXQUFPQyxpQkFBUDtBQUNGLEdBM0JnQjtBQTZCakIxQixrQkE3QmlCLDRCQTZCQTJCLElBN0JBLEVBNkJNQyxTQTdCTixFQTZCaUI7QUFFL0IsUUFBTUMsUUFBUSxHQUFHRixJQUFJLENBQUNsRixHQUFMLENBQVMsQ0FBVCxJQUFjbUYsU0FBUyxDQUFDbkYsR0FBVixDQUFjLENBQWQsQ0FBL0I7QUFDQSxRQUFNcUYsUUFBUSxHQUFHSCxJQUFJLENBQUNsRixHQUFMLENBQVMsQ0FBVCxJQUFjbUYsU0FBUyxDQUFDbkYsR0FBVixDQUFjLENBQWQsQ0FBL0I7QUFHQSxRQUFNc0YsS0FBSyxHQUFHSCxTQUFTLENBQUNwRixHQUFWLENBQWMsQ0FBZCxJQUFtQm1GLElBQUksQ0FBQ25GLEdBQUwsQ0FBUyxDQUFULENBQWpDO0FBQ0EsUUFBTXdGLEtBQUssR0FBR0osU0FBUyxDQUFDcEYsR0FBVixDQUFjLENBQWQsSUFBbUJtRixJQUFJLENBQUNuRixHQUFMLENBQVMsQ0FBVCxDQUFqQyxDQVArQixDQVMvQjs7QUFDQSxRQUFJcUYsUUFBUSxHQUFHRSxLQUFYLEdBQW1CRCxRQUFRLEdBQUdFLEtBQTlCLElBQXVDLENBQTNDLEVBQThDO0FBRTNDTCxVQUFJLENBQUNsRixHQUFMLEdBQVdrRixJQUFJLENBQUNNLFNBQUwsQ0FBZU4sSUFBSSxDQUFDbEYsR0FBcEIsQ0FBWDtBQUNBbUYsZUFBUyxDQUFDbkYsR0FBVixHQUFnQm1GLFNBQVMsQ0FBQ0ssU0FBVixDQUFvQkwsU0FBUyxDQUFDbkYsR0FBOUIsQ0FBaEI7QUFFRjtBQUNILEdBN0NnQixDQThDakI7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF2S2lCLENBQWIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBTaW11bGF0aW9uIGZyb20gJy4vc2ltdWxhdGlvbic7XG5pbXBvcnQgU2ltdWxhdGlvblZpZXcgZnJvbSAnLi9zaW11bGF0aW9uX3ZpZXcnO1xuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL21vdmluZ19vYmplY3QnO1xuaW1wb3J0IHtQZXJzb259IGZyb20gJy4vcGVyc29uJztcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzRWwxID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gICAgLy8gY29uc3QgY2FudmFzRWwyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMV07XG5cblxuXG4gICAgbGV0IGRlbnNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktZGVuc2l0eS1yYW5nZScpO1xuICAgIGxldCBvdXRwdXREZW5zaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbnNpdHktdmFsdWUnKTtcblxuICAgIG91dHB1dERlbnNpdHkuaW5uZXJIVE1MID0gZGVuc2l0eS52YWx1ZTtcblxuICAgIGRlbnNpdHkub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXG4gICAgICAgIG91dHB1dERlbnNpdHkuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcbiAgICAgICAgbGV0IHMxID0gbmV3IFNpbXVsYXRpb24odGhpcy52YWx1ZSwgc29jaWFsRGlzdC52YWx1ZSAvIDEwMCwgY3R4MSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHMxKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coZGVuc2l0eS52YWx1ZSk7XG5cbiAgICBsZXQgc29jaWFsRGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1zb2NpYWwtcmFuZ2UnKTtcbiAgICBsZXQgb3V0cHV0U29jaWFsRGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb2NpYWwtdmFsdWUnKTtcblxuICAgIG91dHB1dFNvY2lhbERpc3QuaW5uZXJIVE1MID0gc29jaWFsRGlzdC52YWx1ZTtcblxuICAgIHNvY2lhbERpc3Qub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3V0cHV0U29jaWFsRGlzdC5pbm5lckhUTUwgPSB0aGlzLnZhbHVlO1xuICAgICAgICBsZXQgczEgPSBuZXcgU2ltdWxhdGlvbihkZW5zaXR5LnZhbHVlLCB0aGlzLnZhbHVlIC8gMTAwLCBjdHgxKTtcbiAgICAgICAgcmV0dXJuIHMxO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzb2NpYWxEaXN0LnZhbHVlKTtcblxuICAgIGxldCBzdGFydFNpbXVsYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKTtcbiAgICBzdGFydFNpbXVsYXRpb24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3YxLnN0YXJ0KCk7XG4gICAgfVxuICAgIFxuXG4gICAgY2FudmFzRWwxLndpZHRoID0gU2ltdWxhdGlvbi5ESU1fWDtcbiAgICBjYW52YXNFbDEuaGVpZ2h0ID0gU2ltdWxhdGlvbi5ESU1fWTtcbiAgICBjb25zdCBjdHgxID0gY2FudmFzRWwxLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIC8vIGNhbnZhc0VsMi53aWR0aCA9IFNpbXVsYXRpb24uRElNX1g7XG4gICAgLy8gY2FudmFzRWwyLmhlaWdodCA9IFNpbXVsYXRpb24uRElNX1k7XG4gICAgLy8gY29uc3QgY3R4MiA9IGNhbnZhc0VsMi5nZXRDb250ZXh0KFwiMmRcIik7XG4gIFxuICAgIGNvbnNvbGUubG9nKCd3ZWJwYWNrIGlzIHdvcmtpbmcnKTtcblxuXG4gICAgd2luZG93LlNpbXVsYXRpb24gPSBTaW11bGF0aW9uO1xuICAgIHdpbmRvdy5TaW11bGF0aW9uVmlldyA9IFNpbXVsYXRpb25WaWV3O1xuXG4gICAgbGV0IHMxID0gbmV3IFNpbXVsYXRpb24oZGVuc2l0eS52YWx1ZSwgc29jaWFsRGlzdC52YWx1ZSAvIDEwMCwgY3R4MSk7XG4gICAgY29uc29sZS5sb2coczEpO1xuICAgIGxldCBzdjEgPSBuZXcgU2ltdWxhdGlvblZpZXcoczEsIGN0eDEpXG4gICAgLy8gc3YxLnN0YXJ0KCk7XG5cblxuICAgIC8vIGxldCBzMiA9IG5ldyBTaW11bGF0aW9uKDUwLCAwLjgpO1xuICAgIC8vIGNvbnNvbGUubG9nKHMyKTtcbiAgICAvLyBsZXQgc3YyID0gbmV3IFNpbXVsYXRpb25WaWV3KHMyLCBjdHgyKVxuICAgIC8vIHN2Mi5zdGFydCgpO1xuXG5cblxuICAgIFxufSk7IiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgU2ltdWxhdGlvbiBmcm9tICcuL3NpbXVsYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnBvcyAgPSBwYXJhbWV0ZXJzLnBvcztcbiAgICB0aGlzLnZlbCAgPSBwYXJhbWV0ZXJzLnZlbDtcbiAgICB0aGlzLnJhZGl1cyAgPSBwYXJhbWV0ZXJzLnJhZGl1cztcbiAgICB0aGlzLmNvbG9yICA9IHBhcmFtZXRlcnMuY29sb3I7XG4gICAgdGhpcy5tYXNzID0gcGFyYW1ldGVycy5tYXNzO1xuICAgIHRoaXMuc2ltdWxhdGlvbiA9IHBhcmFtZXRlcnMuc2ltdWxhdGlvbjtcbiAgICB9XG5cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIHRoaXMucG9zWzBdLFxuICAgICAgICAgICAgdGhpcy5wb3NbMV0sXG4gICAgICAgICAgICB0aGlzLnJhZGl1cyxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICAgICAgLy8gZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnBvcyA9IFsodGhpcy5wb3NbMF0gKyB0aGlzLnZlbFswXSksICh0aGlzLnBvc1sxXSArIHRoaXMudmVsWzFdKV1cbiAgICAgICAgdGhpcy52ZWwgPSB0aGlzLnNpbXVsYXRpb24uYm91bmNlKHRoaXMucG9zLCB0aGlzLnZlbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9zKTtcbiAgICB9O1xuXG4gICAgY2hhbmdlRGlyKHZlbCkge1xuICAgICAgICBcbiAgICAgICAgaWYgKE1hdGguYWJzKHZlbFswXSkgPiBNYXRoLmFicyh2ZWxbMV0pKSB7XG4gICAgICAgICAgICB2ZWxbMF0gPSAtIHZlbFswXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmVsWzFdID0gLSB2ZWxbMV1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHZlbDtcbiAgICB9XG4gICAgXG4gICAgaXNDb2xsaWRlZFdpdGgob3RoZXJPYmplY3QpIHtcbiAgICAgICAgY29uc3QgY2VudGVyRGlzdCA9IFV0aWwuZGlzdCh0aGlzLnBvcywgb3RoZXJPYmplY3QucG9zKTtcbiAgICAgICAgaWYgKGNlbnRlckRpc3QgPCAodGhpcy5yYWRpdXMgKyBvdGhlck9iamVjdC5yYWRpdXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uLnJlbW92ZSh0aGlzKTtcbiAgICB9XG5cbiB9XG5cblxuIiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRTID0ge1xuICAgIFJBRElVUzogMixcbiAgICBDT0xPUjogXCIjMDAwMDY2XCIsXG4gICAgU1BFRUQ6IDIsXG4gICAgTUFTUzogMVxufVxuXG5leHBvcnQgY2xhc3MgUGVyc29uIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzID0ge30pIHtcbiAgICAgICAgcGFyYW1ldGVycy5jb2xvciA9IERFRkFVTFRTLkNPTE9SO1xuICAgICAgICBwYXJhbWV0ZXJzLnJhZGl1cyA9IERFRkFVTFRTLlJBRElVUztcbiAgICAgICAgcGFyYW1ldGVycy5tYXNzID0gREVGQVVMVFMuTUFTUztcbiAgICAgICAgcGFyYW1ldGVycy5wb3MgPSBwYXJhbWV0ZXJzLnBvcyB8fCBwYXJhbWV0ZXJzLnNpbXVsYXRpb24ucmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgcGFyYW1ldGVycy52ZWwgPSBwYXJhbWV0ZXJzLnZlbCB8fCBVdGlsLnJhbmRvbVZlYyhERUZBVUxUUy5TUEVFRCk7XG4gICAgICAgIHBhcmFtZXRlcnMuY29uc2Npb3VzQ3RpemVuID0gZmFsc2U7XG4gICAgICAgIC8vIHBhcmFtZXRlcnMucG9zID0gcGFyYW1ldGVycy5wb3M7XG4gICAgICAgIC8vIHBhcmFtZXRlcnMudmVsID0gcGFyYW1ldGVycy52ZWw7XG4gICAgICAgIHN1cGVyKHBhcmFtZXRlcnMpO1xuICAgIH1cblxufSIsImltcG9ydCB7UGVyc29uLCBERUZBVUxUU30gZnJvbSAnLi9wZXJzb24nO1xuaW1wb3J0IHtVdGlsfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFNpbXVsYXRpb25WaWV3IGZyb20gJy4vc2ltdWxhdGlvbl92aWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvbiB7XG4gICAgY29uc3RydWN0b3IoZGVuc2l0eSwgc29jaWFsRGlzdGFuY2luZ1JhdGUsIGN0eCkge1xuICAgICAgICB0aGlzLkRJTV9YID0gNjAwO1xuICAgICAgICB0aGlzLkRJTV9ZID0gNDAwO1xuICAgICAgICB0aGlzLk5VTV9QRVJTT05TID0gMTAwO1xuICAgICAgICB0aGlzLmRlbnNpdHkgPSBkZW5zaXR5O1xuICAgICAgICB0aGlzLnNvY2lhbERpc3RhbmNpbmdSYXRlID0gc29jaWFsRGlzdGFuY2luZ1JhdGU7XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbkluZmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGVyc29ucyA9IFtdO1xuICAgICAgICB0aGlzLmFkZFBlcnNvbnMoKTtcbiAgICAgICAgdGhpcy5hZGRQYXRpZW50WmVybygpO1xuICAgICAgICB0aGlzLmFkZENvbnNjaW91c0NpdGl6ZW4oKTtcbiAgICAgICAgdGhpcy5kcmF3KGN0eCk7XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlRGVuc2l0eSgpIHtcblxuICAgIC8vIH1cblxuICAgIGFkZFBlcnNvbnMoKSB7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMuZGVuc2l0eTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnMucHVzaChuZXcgUGVyc29uKHtcbiAgICAgICAgICAgICAgICBwb3M6IHRoaXMucmFuZG9tUG9zaXRpb24oKSwgXG4gICAgICAgICAgICAgICAgdmVsOiBVdGlsLnJhbmRvbVZlYyhERUZBVUxUUy5TUEVFRCksIFxuICAgICAgICAgICAgICAgIHNpbXVsYXRpb246IHRoaXN9KSk7XG5cbiAgICAgICAgICAgIGlmIChpIT09MCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wZXJzb25zLmxlbmd0aC0xOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChVdGlsLmRpc3QodGhpcy5wZXJzb25zW2ldLnBvcywgdGhpcy5wZXJzb25zW2pdLnBvcykgLSBERUZBVUxUUy5SQURJVVMgKiAyKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc29uc1tpXS5wb3MgPSB0aGlzLnJhbmRvbVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBqPS0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkUGF0aWVudFplcm8oKSB7XG4gICAgICAgIHRoaXMucGVyc29uc1t0aGlzLnBlcnNvbnMubGVuZ3RoLTFdLmNvbG9yID0gJ3JlZCc7XG4gICAgfVxuXG4gICAgYWRkQ29uc2Npb3VzQ2l0aXplbigpIHtcbiAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLnBlcnNvbnMubGVuZ3RoICogdGhpcy5zb2NpYWxEaXN0YW5jaW5nUmF0ZTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0uY29uc2Npb3VzQ2l0aXplbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0udmVsID0gWzAsMF07XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0uY29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJhbmRvbVBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCByYWQgPSBERUZBVUxUUy5SQURJVVM7XG4gICAgICAgIGxldCB4ID0gVXRpbC5yYW5kb21JbnRSYW5nZShyYWQsIHRoaXMuRElNX1ggLSByYWQpO1xuICAgICAgICBsZXQgeSA9IFV0aWwucmFuZG9tSW50UmFuZ2UocmFkLCB0aGlzLkRJTV9ZIC0gcmFkKTtcbiAgICAgICAgcmV0dXJuIFt4LHldO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5ESU1fWCwgdGhpcy5ESU1fWSk7XG4gICAgICAgIHRoaXMucGVyc29ucy5mb3JFYWNoKCBwZXJzb24gPT4gcGVyc29uLmRyYXcoY3R4KSk7XG4gICAgfVxuXG4gICAgbW92ZU9iamVjdHMoKSB7XG4gICAgICAgIHRoaXMucGVyc29ucy5mb3JFYWNoKChwZXJzb24pID0+IHtcbiAgICAgICAgICAgIHBlcnNvbi5tb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbW92ZU9iamVjdChvYmplY3QpIHtcbiAgICAgICAgdGhpcy5wZXJzb25zLnNwbGljZSh0aGlzLnBlcnNvbnMuaW5kZXhPZihvYmplY3QpLCAxKVxuICAgIH1cbiAgICBcblxuICAgIGNoZWNrQ29sbGlzaW9ucygpIHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMucGVyc29ucy5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqPWkrMTsgajx0aGlzLnBlcnNvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcGVyczEgPSB0aGlzLnBlcnNvbnNbaV07XG4gICAgICAgICAgICAgICAgbGV0IHBlcnMyID0gdGhpcy5wZXJzb25zW2pdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIGlmIChwZXJzMS5pc0NvbGxpZGVkV2l0aChwZXJzMikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlcnMxLnZlbCA9IHBlcnMxLmNoYW5nZURpcihwZXJzMS52ZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGVyczEuY29sb3IgPSAnI2ZmMDAwMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZXJzMi52ZWwgPSBwZXJzMi5jaGFuZ2VEaXIocGVyczIudmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlcnMyLmNvbG9yID0gJyNmZjAwMDAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGVyczEucG9zID0gdGhpcy5ib3VuY2UocGVyczEudmVsLCBwZXJzMS5wb3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZXJzMi5wb3MgPSB0aGlzLmJvdW5jZShwZXJzMi52ZWwsIHBlcnMyLnBvcylcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWwucmVzb2x2ZUNvbGxpc2lvbihwZXJzMSwgcGVyczIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBlcnMxLmNvbG9yID09PSAncmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGVyczIuY29sb3IgPSAncmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwZXJzMi5jb2xvciA9PT0gJ3JlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzMS5jb2xvciA9ICdyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZW1vdmVPYmplY3QocGVyczEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZW1vdmVPYmplY3QocGVyczIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBib3VuY2UocG9zLCB2ZWwpIHtcbiAgICAgICAgbGV0IHJhZCA9IERFRkFVTFRTLlJBRElVU1xuICAgICAgICBpZiAocG9zWzBdLXJhZCA8IDAgfHwgcG9zWzBdK3JhZCA+IHRoaXMuRElNX1gpIHtcbiAgICAgICAgICAgdmVsWzBdID0gLSB2ZWxbMF0gXG4gICAgICAgIH0gZWxzZSBpZiAocG9zWzFdLXJhZCA8IDAgfHwgcG9zWzFdK3JhZCA+IHRoaXMuRElNX1kpIHtcbiAgICAgICAgICAgIHZlbFsxXSA9IC0gdmVsWzFdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZlbDtcbiAgICB9XG5cbiAgICBoYW5kbGVJbmZlY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnBlcnNvbnMuZXZlcnkocGVyc29uID0+IHBlcnNvbi5jb2xvciA9PT0gJ3JlZCcpKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRpb25JbmZlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGVwKCkge1xuXG4gICAgICAgIHRoaXMubW92ZU9iamVjdHMoKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbnMoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVJbmZlY3Rpb24oKTtcblxuICAgICAgICAvLyBpZiAoIXRoaXMucG9wdWxhdGlvbkluZmVjdGVkKSB7XG4gICAgICAgIC8vICAgICB0aGlzLm1vdmVPYmplY3RzKCk7XG4gICAgICAgIC8vICAgICB0aGlzLmNoZWNrQ29sbGlzaW9ucygpO1xuICAgICAgICAvLyAgICAgdGhpcy5oYW5kbGVJbmZlY3Rpb24oKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIHJldHVybiBudWxsO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG59XG5cblNpbXVsYXRpb24uRElNX1ggPSA2MDA7XG5TaW11bGF0aW9uLkRJTV9ZID0gNDAwO1xuLy8gU2ltdWxhdGlvbi5OVU1fUEVSU09OUyA9IDEwMDtcbiIsImltcG9ydCBTaW11bGF0aW9uIGZyb20gJy4vc2ltdWxhdGlvbic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvblZpZXcge1xuICAgIGNvbnN0cnVjdG9yKHNpbXVsYXRpb24sIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uID0gc2ltdWxhdGlvbjtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgbGV0IHNpbXVsYXRpb25JbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGlvbi5zdGVwKCk7XG4gICAgICAgICAgICB0aGlzLnNpbXVsYXRpb24uZHJhdyh0aGlzLmN0eCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zaW11bGF0aW9uLnBvcHVsYXRpb25JbmZlY3RlZCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc2ltdWxhdGlvbkludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjApO1xuXG4gICAgICAgIFxuICAgIH1cblxufSIsImV4cG9ydCBjb25zdCBVdGlsID0ge1xuICAgLy8gUmV0dXJuIGEgcmFuZG9tbHkgb3JpZW50ZWQgdmVjdG9yIHdpdGggdGhlIGdpdmVuIGxlbmd0aC5cbiAgIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICAgIGNvbnN0IGRlZyA9IDIgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcbiAgICAgIHJldHVybiBVdGlsLnNjYWxlKFtNYXRoLnNpbihkZWcpLCBNYXRoLmNvcyhkZWcpXSwgbGVuZ3RoKTtcbiAgIH0sXG4gICAvLyBTY2FsZSB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yIGJ5IHRoZSBnaXZlbiBhbW91bnQuXG4gICBzY2FsZSh2ZWMsIG0pIHtcbiAgICAgIHJldHVybiBbdmVjWzBdICogbSwgdmVjWzFdICogbV07XG4gICB9LFxuXG4gICBkaXN0KHBvczEsIHBvczIpIHtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICAgICBNYXRoLnBvdyhwb3MxWzBdIC0gcG9zMlswXSwgMikgKyBNYXRoLnBvdyhwb3MxWzFdIC0gcG9zMlsxXSwgMilcbiAgICAgIClcbiAgIH0sXG4gICBcbiAgIHJhbmRvbUludFJhbmdlKG1pbiwgbWF4KSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgIH0sXG5cbiAgIHJvdGF0ZSh2ZWxvY2l0eSwgYW5nbGUpIHtcbiAgICAgIGNvbnN0IHJvdGF0ZWRWZWxvY2l0aWVzID0ge1xuICAgICAgICAgeDogdmVsb2NpdHlbMF0gKiBNYXRoLmNvcyhhbmdsZSkgLSB2ZWxvY2l0eVsxXSAqIE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgIHk6IHZlbG9jaXR5WzBdICogTWF0aC5zaW4oYW5nbGUpICsgdmVsb2NpdHlbMV0gKiBNYXRoLmNvcyhhbmdsZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiByb3RhdGVkVmVsb2NpdGllcztcbiAgIH0sXG5cbiAgIHJlc29sdmVDb2xsaXNpb24ocGVycywgb3RoZXJQZXJzKSB7XG5cbiAgICAgIGNvbnN0IHhWZWxEaWZmID0gcGVycy52ZWxbMF0gLSBvdGhlclBlcnMudmVsWzBdO1xuICAgICAgY29uc3QgeVZlbERpZmYgPSBwZXJzLnZlbFsxXSAtIG90aGVyUGVycy52ZWxbMV07XG5cblxuICAgICAgY29uc3QgeERpc3QgPSBvdGhlclBlcnMucG9zWzBdIC0gcGVycy5wb3NbMF07XG4gICAgICBjb25zdCB5RGlzdCA9IG90aGVyUGVycy5wb3NbMV0gLSBwZXJzLnBvc1sxXTtcblxuICAgICAgLy8gUHJldmVudCBhY2NpZGVudGFsIG92ZXJsYXAgb2YgcGVyc1xuICAgICAgaWYgKHhWZWxEaWZmICogeERpc3QgKyB5VmVsRGlmZiAqIHlEaXN0ID49IDApIHtcblxuICAgICAgICAgcGVycy52ZWwgPSBwZXJzLmNoYW5nZURpcihwZXJzLnZlbCk7XG4gICAgICAgICBvdGhlclBlcnMudmVsID0gb3RoZXJQZXJzLmNoYW5nZURpcihvdGhlclBlcnMudmVsKTtcbiAgICAgICAgIFxuICAgICAgfVxuICAgfVxuICAgLy8gcmVzb2x2ZUNvbGxpc2lvbihwZXJzLCBvdGhlclBlcnMpIHtcbiAgIC8vICAgIGNvbnN0IHhWZWxEaWZmID0gcGVycy52ZWxbMF0gLSBvdGhlclBlcnMudmVsWzBdO1xuICAgLy8gICAgY29uc3QgeVZlbERpZmYgPSBwZXJzLnZlbFsxXSAtIG90aGVyUGVycy52ZWxbMV07XG5cblxuICAgLy8gICAgY29uc3QgeERpc3QgPSBvdGhlclBlcnMucG9zWzBdIC0gcGVycy5wb3NbMF07XG4gICAvLyAgICBjb25zdCB5RGlzdCA9IG90aGVyUGVycy5wb3NbMV0gLSBwZXJzLnBvc1sxXTtcblxuICAgLy8gICAgLy8gUHJldmVudCBhY2NpZGVudGFsIG92ZXJsYXAgb2YgcGVyc1xuICAgLy8gICAgaWYgKHhWZWxEaWZmICogeERpc3QgKyB5VmVsRGlmZiAqIHlEaXN0ID49IDApIHtcblxuICAgLy8gICAgICAgLy8gR3JhYiBhbmdsZSBiZXR3ZWVuIHRoZSB0d28gY29sbGlkaW5nIHBlcnNcbiAgIC8vICAgICAgIGNvbnN0IGFuZ2xlID0gLU1hdGguYXRhbjIob3RoZXJQZXJzLnBvc1sxXSAtIHBlcnMucG9zWzFdLCBvdGhlclBlcnMucG9zWzBdIC0gcGVycy5wb3NbMF0pO1xuXG4gICAvLyAgICAgICAvLyBTdG9yZSBtYXNzIGluIHZhciBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5IGluIGNvbGxpc2lvbiBlcXVhdGlvblxuICAgLy8gICAgICAgY29uc3QgbTEgPSBwZXJzLm1hc3M7XG4gICAvLyAgICAgICBjb25zdCBtMiA9IG90aGVyUGVycy5tYXNzO1xuXG4gICAvLyAgICAgICAvLyB2ZWwgYmVmb3JlIGVxdWF0aW9uXG4gICAvLyAgICAgICBjb25zdCB1MSA9IFV0aWwucm90YXRlKHBlcnMudmVsLCBhbmdsZSk7XG4gICAvLyAgICAgICBjb25zdCB1MiA9IFV0aWwucm90YXRlKG90aGVyUGVycy52ZWwsIGFuZ2xlKTtcblxuICAgLy8gICAgICAgLy8gdmVsIGFmdGVyIDFkIGNvbGxpc2lvbiBlcXVhdGlvblxuICAgLy8gICAgICAgY29uc3QgdjEgPSBbdTEueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUyLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUxLnldO1xuICAgLy8gICAgICAgY29uc3QgdjIgPSBbdTIueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUxLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUyLnldO1xuXG4gICAvLyAgICAgICAvLyBGaW5hbCB2ZWwgYWZ0ZXIgcm90YXRpbmcgYXhpcyBiYWNrIHRvIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAvLyAgICAgICBjb25zdCB2RmluYWwxID0gVXRpbC5yb3RhdGUodjEsIC1hbmdsZSk7XG4gICAvLyAgICAgICBjb25zdCB2RmluYWwyID0gVXRpbC5yb3RhdGUodjIsIC1hbmdsZSk7XG5cbiAgIC8vICAgICAgIC8vIFN3YXAgcGVycyB2ZWxvY2l0aWVzIGZvciByZWFsaXN0aWMgYm91bmNlIGVmZmVjdFxuICAgLy8gICAgICAgcGVycy52ZWxbMF0gPSB2RmluYWwxLng7XG4gICAvLyAgICAgICBwZXJzLnZlbFsxXSA9IHZGaW5hbDEueTtcblxuICAgLy8gICAgICAgb3RoZXJQZXJzLnZlbFswXSA9IHZGaW5hbDIueDtcbiAgIC8vICAgICAgIG90aGVyUGVycy52ZWxbMV0gPSB2RmluYWwyLnk7XG4gICAvLyAgICB9XG4gICAvLyB9XG5cbiAgIC8vIHJlc29sdmVDb2xsaXNpb24ocGVycywgb3RoZXJQZXJzKSB7XG4gICAvLyAgICBjb25zdCB4VmVsRGlmZiA9IHBlcnMudmVsWzBdIC0gb3RoZXJQZXJzLnZlbFswXTtcbiAgIC8vICAgIGNvbnN0IHlWZWxEaWZmID0gcGVycy52ZWxbMV0gLSBvdGhlclBlcnMudmVsWzFdO1xuXG4gICAvLyAgICBjb25zdCB4RGlzdCA9IG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXTtcbiAgIC8vICAgIGNvbnN0IHlEaXN0ID0gb3RoZXJQZXJzLnBvc1sxXSAtIHBlcnMucG9zWzFdO1xuXG4gICAvLyAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgb3ZlcmxhcCBvZiBwZXJzXG4gICAvLyAgICBpZiAoeFZlbERpZmYgKiB4RGlzdCArIHlWZWxEaWZmICogeURpc3QgPj0gMCkge1xuXG4gICAvLyAgICAgICAvLyBHcmFiIGFuZ2xlIGJldHdlZW4gdGhlIHR3byBjb2xsaWRpbmcgcGVyc1xuICAgLy8gICAgICAgY29uc3QgYW5nbGUgPSAtTWF0aC5hdGFuMihvdGhlclBlcnMucG9zWzFdIC0gcGVycy5wb3NbMV0sIG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXSk7XG5cbiAgIC8vICAgICAgIC8vIFN0b3JlIG1hc3MgaW4gdmFyIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgaW4gY29sbGlzaW9uIGVxdWF0aW9uXG4gICAvLyAgICAgICBjb25zdCBtMSA9IHBlcnMubWFzcztcbiAgIC8vICAgICAgIGNvbnN0IG0yID0gb3RoZXJQZXJzLm1hc3M7XG5cbiAgIC8vICAgICAgIGlmIChwZXJzLmNvbnNjaW91c0NpdGl6ZW4gPT09IHRydWUpIHtcbiAgIC8vICAgICAgICAgIC8vIHZlbCBiZWZvcmUgZXF1YXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHUxID0gVXRpbC5yb3RhdGUocGVycy52ZWwsIGFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHUyID0gVXRpbC5yb3RhdGUob3RoZXJQZXJzLnZlbCwgYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyB2ZWwgYWZ0ZXIgMWQgY29sbGlzaW9uIGVxdWF0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB2MSA9IFt1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTEueV07XG4gICAvLyAgICAgICAgICBjb25zdCB2MiA9IFt1Mi54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTEueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTIueV07XG5cbiAgIC8vICAgICAgICAgIC8vIEZpbmFsIHZlbCBhZnRlciByb3RhdGluZyBheGlzIGJhY2sgdG8gb3JpZ2luYWwgbG9jYXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDEgPSBVdGlsLnJvdGF0ZSh2MSwgLWFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDIgPSBVdGlsLnJvdGF0ZSh2MiwgLWFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gU3dhcCBwZXJzIHZlbG9jaXRpZXMgZm9yIHJlYWxpc3RpYyBib3VuY2UgZWZmZWN0XG4gICAvLyAgICAgICAgICAvLyBwZXJzLnZlbFswXSA9IHZGaW5hbDEueDtcbiAgIC8vICAgICAgICAgIC8vIHBlcnMudmVsWzFdID0gdkZpbmFsMS55O1xuICAgLy8gICAgICAgICAgLy8gcGVycy52ZWxbMF0gPSAwO1xuICAgLy8gICAgICAgICAgLy8gcGVycy52ZWxbMV0gPSAwO1xuXG4gICAvLyAgICAgICAgICBvdGhlclBlcnMudmVsWzBdID0gdkZpbmFsMi54O1xuICAgLy8gICAgICAgICAgb3RoZXJQZXJzLnZlbFsxXSA9IHZGaW5hbDIueTtcblxuICAgLy8gICAgICAgfSBlbHNlIGlmIChvdGhlclBlcnMuY29uc2Npb3VzQ2l0aXplbiA9PT0gdHJ1ZSl7XG4gICAvLyAgICAgICAgICAvLyB2ZWwgYmVmb3JlIGVxdWF0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB1MSA9IFV0aWwucm90YXRlKHBlcnMudmVsLCBhbmdsZSk7XG4gICAvLyAgICAgICAgICBjb25zdCB1MiA9IFV0aWwucm90YXRlKG90aGVyUGVycy52ZWwsIGFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gdmVsIGFmdGVyIDFkIGNvbGxpc2lvbiBlcXVhdGlvblxuICBcbiAgIC8vICAgICAgICAgIGNvbnN0IHYxID0gW3UxLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1Mi54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1MS55XTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHYyID0gW3UyLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1MS54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1Mi55XTtcblxuICAgLy8gICAgICAgICAgLy8gRmluYWwgdmVsIGFmdGVyIHJvdGF0aW5nIGF4aXMgYmFjayB0byBvcmlnaW5hbCBsb2NhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdkZpbmFsMSA9IFV0aWwucm90YXRlKHYxLCAtYW5nbGUpO1xuICAgLy8gICAgICAgICAgY29uc3QgdkZpbmFsMiA9IFV0aWwucm90YXRlKHYyLCAtYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyBTd2FwIHBlcnMgdmVsb2NpdGllcyBmb3IgcmVhbGlzdGljIGJvdW5jZSBlZmZlY3RcbiAgIC8vICAgICAgICAgIHBlcnMudmVsWzBdID0gdkZpbmFsMS54O1xuICAgLy8gICAgICAgICAgcGVycy52ZWxbMV0gPSB2RmluYWwxLnk7XG5cbiAgIC8vICAgICAgICAgIC8vIG90aGVyUGVycy52ZWxbMF0gPSB2RmluYWwyLng7XG4gICAvLyAgICAgICAgICAvLyBvdGhlclBlcnMudmVsWzFdID0gdkZpbmFsMi55O1xuICAgLy8gICAgICAgICAgLy8gb3RoZXJQZXJzLnZlbFswXSA9IDA7XG4gICAvLyAgICAgICAgICAvLyBvdGhlclBlcnMudmVsWzFdID0gMDtcbiAgIC8vICAgICAgIH0gZWxzZSB7XG4gICAvLyAgICAgICAgICAvLyB2ZWwgYmVmb3JlIGVxdWF0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB1MSA9IFV0aWwucm90YXRlKHBlcnMudmVsLCBhbmdsZSk7XG4gICAvLyAgICAgICAgICBjb25zdCB1MiA9IFV0aWwucm90YXRlKG90aGVyUGVycy52ZWwsIGFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gdmVsIGFmdGVyIDFkIGNvbGxpc2lvbiBlcXVhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdjEgPSBbdTEueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUyLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUxLnldO1xuICAgLy8gICAgICAgICAgY29uc3QgdjIgPSBbdTIueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUxLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUyLnldO1xuXG4gICAvLyAgICAgICAgICAvLyBGaW5hbCB2ZWwgYWZ0ZXIgcm90YXRpbmcgYXhpcyBiYWNrIHRvIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB2RmluYWwxID0gVXRpbC5yb3RhdGUodjEsIC1hbmdsZSk7XG4gICAvLyAgICAgICAgICBjb25zdCB2RmluYWwyID0gVXRpbC5yb3RhdGUodjIsIC1hbmdsZSk7XG5cbiAgIC8vICAgICAgICAgIC8vIFN3YXAgcGVycyB2ZWxvY2l0aWVzIGZvciByZWFsaXN0aWMgYm91bmNlIGVmZmVjdFxuICAgLy8gICAgICAgICAgcGVycy52ZWxbMF0gPSB2RmluYWwxLng7XG4gICAvLyAgICAgICAgICBwZXJzLnZlbFsxXSA9IHZGaW5hbDEueTtcblxuICAgLy8gICAgICAgICAgb3RoZXJQZXJzLnZlbFswXSA9IHZGaW5hbDIueDtcbiAgIC8vICAgICAgICAgIG90aGVyUGVycy52ZWxbMV0gPSB2RmluYWwyLnk7XG4gICAvLyAgICAgICB9XG4gICAvLyAgICB9XG4gICAvLyB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==