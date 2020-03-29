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

  canvasEl1.width = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_X;
  canvasEl1.height = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_Y;
  var ctx1 = canvasEl1.getContext("2d"); // canvasEl2.width = Simulation.DIM_X;
  // canvasEl2.height = Simulation.DIM_Y;
  // const ctx2 = canvasEl2.getContext("2d");

  console.log('webpack is working');
  window.Simulation = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"];
  window.SimulationView = _simulation_view__WEBPACK_IMPORTED_MODULE_1__["default"];
  var density = document.getElementById('my-density-range');
  var outputDensity = document.getElementById('density-value');
  outputDensity.innerHTML = density.value;

  density.oninput = function () {
    outputDensity.innerHTML = this.value;
    var s1 = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"](this.value, socialDist.value / 100, ctx1);
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
  var currentSimulation = null;
  var currentSimulationView = null;
  var startSimulation = document.getElementById('start');

  startSimulation.onclick = function () {
    currentSimulation = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"](density.value, socialDist.value / 100, ctx1);
    currentSimulationView = new _simulation_view__WEBPACK_IMPORTED_MODULE_1__["default"](currentSimulation, ctx1);
    currentSimulationView.start();
    console.log(currentSimulation);
  };

  var stopSimulation = document.getElementById('stop');

  stopSimulation.onclick = function () {
    currentSimulationView.stop(currentSimulation);
  };

  var s1 = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"](density.value, socialDist.value / 100, ctx1);
  console.log(s1); // let sv1 = new SimulationView(s1, ctx1)
  // sv1.start();
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
    parameters.consciousCtizen = false;
    parameters.infected = false; // parameters.pos = parameters.pos;
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
    this.simulationInterval = null;
    this.infectionNumber = 0;
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
      this.persons[0].color = 'red';
      this.persons[0].infected = true;
      this.infectionNuber = +1;
    }
  }, {
    key: "addConsciousCitizen",
    value: function addConsciousCitizen() {
      // debugger;
      for (var i = 1; i < this.persons.length * this.socialDistancingRate + 1; i++) {
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
          var pers2 = this.persons[j];

          if (pers1.isCollidedWith(pers2)) {
            // pers1.vel = pers1.changeDir(pers1.vel);
            // pers1.color = '#ff0000';
            // pers2.vel = pers2.changeDir(pers2.vel);
            // pers2.color = '#ff0000';
            // pers1.pos = this.bounce(pers1.vel, pers1.pos)
            // pers2.pos = this.bounce(pers2.vel, pers2.pos)
            _util__WEBPACK_IMPORTED_MODULE_1__["Util"].resolveCollision(pers1, pers2);

            if (pers1.color === 'red' && pers2.color !== 'red') {
              pers2.color = 'red';
              pers2.infected = true;
              this.infectionNuber += 1;
            } else if (pers2.color === 'red' && pers1.color !== 'red') {
              pers1.color = 'red';
              pers1.infected = 'true';
              this.infectionNuber += 1;
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
      if (this.infectionNuber / this.density > 0.99) {
        this.populationInfected = true;
      }
    }
  }, {
    key: "step",
    value: function step() {
      this.moveObjects();
      this.checkCollisions();
      this.handleInfection();
      console.log(this.infectionNuber); // if (!this.populationInfected) {
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

      this.simulation.simulationInterval = setInterval(function () {
        _this.simulation.step();

        _this.simulation.draw(_this.ctx);

        if (_this.simulation.populationInfected) {
          clearInterval(_this.simulation.simulationInterval);
        }
      }, 20);
    }
  }, {
    key: "stop",
    value: function stop(simulation) {
      clearInterval(simulation.simulationInterval);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb3Zpbmdfb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb25fdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbDEiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiU2ltdWxhdGlvbiIsIkRJTV9YIiwiaGVpZ2h0IiwiRElNX1kiLCJjdHgxIiwiZ2V0Q29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJTaW11bGF0aW9uVmlldyIsImRlbnNpdHkiLCJnZXRFbGVtZW50QnlJZCIsIm91dHB1dERlbnNpdHkiLCJpbm5lckhUTUwiLCJ2YWx1ZSIsIm9uaW5wdXQiLCJzMSIsInNvY2lhbERpc3QiLCJvdXRwdXRTb2NpYWxEaXN0IiwiY3VycmVudFNpbXVsYXRpb24iLCJjdXJyZW50U2ltdWxhdGlvblZpZXciLCJzdGFydFNpbXVsYXRpb24iLCJvbmNsaWNrIiwic3RhcnQiLCJzdG9wU2ltdWxhdGlvbiIsInN0b3AiLCJNb3ZpbmdPYmplY3QiLCJwYXJhbWV0ZXJzIiwicG9zIiwidmVsIiwicmFkaXVzIiwiY29sb3IiLCJtYXNzIiwic2ltdWxhdGlvbiIsImN0eCIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlIiwiYm91bmNlIiwiYWJzIiwib3RoZXJPYmplY3QiLCJjZW50ZXJEaXN0IiwiVXRpbCIsImRpc3QiLCJyZW1vdmUiLCJERUZBVUxUUyIsIlJBRElVUyIsIkNPTE9SIiwiU1BFRUQiLCJNQVNTIiwiUGVyc29uIiwicmFuZG9tUG9zaXRpb24iLCJyYW5kb21WZWMiLCJjb25zY2lvdXNDdGl6ZW4iLCJpbmZlY3RlZCIsInNvY2lhbERpc3RhbmNpbmdSYXRlIiwiTlVNX1BFUlNPTlMiLCJwb3B1bGF0aW9uSW5mZWN0ZWQiLCJwZXJzb25zIiwic2ltdWxhdGlvbkludGVydmFsIiwiaW5mZWN0aW9uTnVtYmVyIiwiYWRkUGVyc29ucyIsImFkZFBhdGllbnRaZXJvIiwiYWRkQ29uc2Npb3VzQ2l0aXplbiIsImRyYXciLCJpIiwicHVzaCIsImoiLCJsZW5ndGgiLCJpbmZlY3Rpb25OdWJlciIsImNvbnNjaW91c0NpdGl6ZW4iLCJyYWQiLCJ4IiwicmFuZG9tSW50UmFuZ2UiLCJ5IiwiY2xlYXJSZWN0IiwiZm9yRWFjaCIsInBlcnNvbiIsIm1vdmUiLCJvYmplY3QiLCJzcGxpY2UiLCJpbmRleE9mIiwicGVyczEiLCJwZXJzMiIsImlzQ29sbGlkZWRXaXRoIiwicmVzb2x2ZUNvbGxpc2lvbiIsIm1vdmVPYmplY3RzIiwiY2hlY2tDb2xsaXNpb25zIiwiaGFuZGxlSW5mZWN0aW9uIiwic2V0SW50ZXJ2YWwiLCJzdGVwIiwiY2xlYXJJbnRlcnZhbCIsImRlZyIsInJhbmRvbSIsInNjYWxlIiwic2luIiwiY29zIiwidmVjIiwibSIsInBvczEiLCJwb3MyIiwic3FydCIsInBvdyIsIm1pbiIsIm1heCIsImZsb29yIiwicm90YXRlIiwidmVsb2NpdHkiLCJhbmdsZSIsInJvdGF0ZWRWZWxvY2l0aWVzIiwicGVycyIsIm90aGVyUGVycyIsInhWZWxEaWZmIiwieVZlbERpZmYiLCJ4RGlzdCIsInlEaXN0IiwiY2hhbmdlRGlyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMs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LElBQUksQ0FBQ00sU0FBTCxDQUFlTixJQUFJLENBQUNwRixHQUFwQixDQUFYO0FBQ0FxRixlQUFTLENBQUNyRixHQUFWLEdBQWdCcUYsU0FBUyxDQUFDSyxTQUFWLENBQW9CTCxTQUFTLENBQUNyRixHQUE5QixDQUFoQjtBQUVGO0FBQ0gsR0E3Q2dCLENBOENqQjtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXZLaUIsQ0FBYixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnLi9zaW11bGF0aW9uJztcbmltcG9ydCBTaW11bGF0aW9uVmlldyBmcm9tICcuL3NpbXVsYXRpb25fdmlldyc7XG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQge1BlcnNvbn0gZnJvbSAnLi9wZXJzb24nO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXNFbDEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgICAvLyBjb25zdCBjYW52YXNFbDIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVsxXTtcblxuICAgIGNhbnZhc0VsMS53aWR0aCA9IFNpbXVsYXRpb24uRElNX1g7XG4gICAgY2FudmFzRWwxLmhlaWdodCA9IFNpbXVsYXRpb24uRElNX1k7XG4gICAgY29uc3QgY3R4MSA9IGNhbnZhc0VsMS5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAvLyBjYW52YXNFbDIud2lkdGggPSBTaW11bGF0aW9uLkRJTV9YO1xuICAgIC8vIGNhbnZhc0VsMi5oZWlnaHQgPSBTaW11bGF0aW9uLkRJTV9ZO1xuICAgIC8vIGNvbnN0IGN0eDIgPSBjYW52YXNFbDIuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgY29uc29sZS5sb2coJ3dlYnBhY2sgaXMgd29ya2luZycpO1xuXG5cbiAgICB3aW5kb3cuU2ltdWxhdGlvbiA9IFNpbXVsYXRpb247XG4gICAgd2luZG93LlNpbXVsYXRpb25WaWV3ID0gU2ltdWxhdGlvblZpZXc7XG5cbiAgICBcblxuXG4gICAgbGV0IGRlbnNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktZGVuc2l0eS1yYW5nZScpO1xuICAgIGxldCBvdXRwdXREZW5zaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbnNpdHktdmFsdWUnKTtcblxuICAgIG91dHB1dERlbnNpdHkuaW5uZXJIVE1MID0gZGVuc2l0eS52YWx1ZTtcblxuICAgIGRlbnNpdHkub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXG4gICAgICAgIG91dHB1dERlbnNpdHkuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcbiAgICAgICAgbGV0IHMxID0gbmV3IFNpbXVsYXRpb24odGhpcy52YWx1ZSwgc29jaWFsRGlzdC52YWx1ZSAvIDEwMCwgY3R4MSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRlbnNpdHkudmFsdWUpO1xuXG4gICAgbGV0IHNvY2lhbERpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktc29jaWFsLXJhbmdlJyk7XG4gICAgbGV0IG91dHB1dFNvY2lhbERpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29jaWFsLXZhbHVlJyk7XG5cbiAgICBvdXRwdXRTb2NpYWxEaXN0LmlubmVySFRNTCA9IHNvY2lhbERpc3QudmFsdWU7XG5cbiAgICBzb2NpYWxEaXN0Lm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG91dHB1dFNvY2lhbERpc3QuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcbiAgICAgICAgbGV0IHMxID0gbmV3IFNpbXVsYXRpb24oZGVuc2l0eS52YWx1ZSwgdGhpcy52YWx1ZSAvIDEwMCwgY3R4MSk7XG4gICAgICAgIHJldHVybiBzMTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coc29jaWFsRGlzdC52YWx1ZSk7XG5cbiAgICBsZXQgY3VycmVudFNpbXVsYXRpb24gPSBudWxsO1xuICAgIGxldCBjdXJyZW50U2ltdWxhdGlvblZpZXcgPSBudWxsO1xuXG4gICAgbGV0IHN0YXJ0U2ltdWxhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpO1xuICAgIHN0YXJ0U2ltdWxhdGlvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjdXJyZW50U2ltdWxhdGlvbiA9IG5ldyBTaW11bGF0aW9uKGRlbnNpdHkudmFsdWUsIHNvY2lhbERpc3QudmFsdWUgLyAxMDAsIGN0eDEpO1xuICAgICAgICBjdXJyZW50U2ltdWxhdGlvblZpZXcgPSBuZXcgU2ltdWxhdGlvblZpZXcoY3VycmVudFNpbXVsYXRpb24sIGN0eDEpXG4gICAgICAgIGN1cnJlbnRTaW11bGF0aW9uVmlldy5zdGFydCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50U2ltdWxhdGlvbik7XG4gICAgXG4gICAgfVxuICAgIFxuICAgIGxldCBzdG9wU2ltdWxhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9wJyk7XG4gICAgc3RvcFNpbXVsYXRpb24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3VycmVudFNpbXVsYXRpb25WaWV3LnN0b3AoY3VycmVudFNpbXVsYXRpb24pO1xuICAgIH1cbiAgICBcbiAgICBsZXQgczEgPSBuZXcgU2ltdWxhdGlvbihkZW5zaXR5LnZhbHVlLCBzb2NpYWxEaXN0LnZhbHVlIC8gMTAwLCBjdHgxKTtcbiAgICBjb25zb2xlLmxvZyhzMSk7XG4gICAgLy8gbGV0IHN2MSA9IG5ldyBTaW11bGF0aW9uVmlldyhzMSwgY3R4MSlcblxuICAgIFxuICAgIC8vIHN2MS5zdGFydCgpO1xuXG5cbiAgICAvLyBsZXQgczIgPSBuZXcgU2ltdWxhdGlvbig1MCwgMC44KTtcbiAgICAvLyBjb25zb2xlLmxvZyhzMik7XG4gICAgLy8gbGV0IHN2MiA9IG5ldyBTaW11bGF0aW9uVmlldyhzMiwgY3R4MilcbiAgICAvLyBzdjIuc3RhcnQoKTtcblxuXG5cbiAgICBcbn0pOyIsImltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnLi9zaW11bGF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5wb3MgID0gcGFyYW1ldGVycy5wb3M7XG4gICAgdGhpcy52ZWwgID0gcGFyYW1ldGVycy52ZWw7XG4gICAgdGhpcy5yYWRpdXMgID0gcGFyYW1ldGVycy5yYWRpdXM7XG4gICAgdGhpcy5jb2xvciAgPSBwYXJhbWV0ZXJzLmNvbG9yO1xuICAgIHRoaXMubWFzcyA9IHBhcmFtZXRlcnMubWFzcztcbiAgICB0aGlzLnNpbXVsYXRpb24gPSBwYXJhbWV0ZXJzLnNpbXVsYXRpb247XG4gICAgfVxuXG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICB0aGlzLnBvc1swXSxcbiAgICAgICAgICAgIHRoaXMucG9zWzFdLFxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgICAgIC8vIGZhbHNlXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBbKHRoaXMucG9zWzBdICsgdGhpcy52ZWxbMF0pLCAodGhpcy5wb3NbMV0gKyB0aGlzLnZlbFsxXSldXG4gICAgICAgIHRoaXMudmVsID0gdGhpcy5zaW11bGF0aW9uLmJvdW5jZSh0aGlzLnBvcywgdGhpcy52ZWwpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBvcyk7XG4gICAgfTtcblxuICAgIGNoYW5nZURpcih2ZWwpIHtcbiAgICAgICAgXG4gICAgICAgIGlmIChNYXRoLmFicyh2ZWxbMF0pID4gTWF0aC5hYnModmVsWzFdKSkge1xuICAgICAgICAgICAgdmVsWzBdID0gLSB2ZWxbMF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZlbFsxXSA9IC0gdmVsWzFdXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB2ZWw7XG4gICAgfVxuICAgIFxuICAgIGlzQ29sbGlkZWRXaXRoKG90aGVyT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGNlbnRlckRpc3QgPSBVdGlsLmRpc3QodGhpcy5wb3MsIG90aGVyT2JqZWN0LnBvcyk7XG4gICAgICAgIGlmIChjZW50ZXJEaXN0IDwgKHRoaXMucmFkaXVzICsgb3RoZXJPYmplY3QucmFkaXVzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbi5yZW1vdmUodGhpcyk7XG4gICAgfVxuXG4gfVxuXG5cbiIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUUyA9IHtcbiAgICBSQURJVVM6IDIsXG4gICAgQ09MT1I6IFwiIzAwMDA2NlwiLFxuICAgIFNQRUVEOiAyLFxuICAgIE1BU1M6IDFcbn1cblxuZXhwb3J0IGNsYXNzIFBlcnNvbiBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVycyA9IHt9KSB7XG4gICAgICAgIHBhcmFtZXRlcnMuY29sb3IgPSBERUZBVUxUUy5DT0xPUjtcbiAgICAgICAgcGFyYW1ldGVycy5yYWRpdXMgPSBERUZBVUxUUy5SQURJVVM7XG4gICAgICAgIHBhcmFtZXRlcnMubWFzcyA9IERFRkFVTFRTLk1BU1M7XG4gICAgICAgIHBhcmFtZXRlcnMucG9zID0gcGFyYW1ldGVycy5wb3MgfHwgcGFyYW1ldGVycy5zaW11bGF0aW9uLnJhbmRvbVBvc2l0aW9uKCk7XG4gICAgICAgIHBhcmFtZXRlcnMudmVsID0gcGFyYW1ldGVycy52ZWwgfHwgVXRpbC5yYW5kb21WZWMoREVGQVVMVFMuU1BFRUQpO1xuICAgICAgICBwYXJhbWV0ZXJzLmNvbnNjaW91c0N0aXplbiA9IGZhbHNlO1xuICAgICAgICBwYXJhbWV0ZXJzLmluZmVjdGVkID0gZmFsc2U7XG4gICAgICAgIC8vIHBhcmFtZXRlcnMucG9zID0gcGFyYW1ldGVycy5wb3M7XG4gICAgICAgIC8vIHBhcmFtZXRlcnMudmVsID0gcGFyYW1ldGVycy52ZWw7XG4gICAgICAgIHN1cGVyKHBhcmFtZXRlcnMpO1xuICAgIH1cblxufSIsImltcG9ydCB7UGVyc29uLCBERUZBVUxUU30gZnJvbSAnLi9wZXJzb24nO1xuaW1wb3J0IHtVdGlsfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFNpbXVsYXRpb25WaWV3IGZyb20gJy4vc2ltdWxhdGlvbl92aWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvbiB7XG4gICAgY29uc3RydWN0b3IoZGVuc2l0eSwgc29jaWFsRGlzdGFuY2luZ1JhdGUsIGN0eCkge1xuICAgICAgICB0aGlzLkRJTV9YID0gNjAwO1xuICAgICAgICB0aGlzLkRJTV9ZID0gNDAwO1xuICAgICAgICB0aGlzLk5VTV9QRVJTT05TID0gMTAwO1xuICAgICAgICB0aGlzLmRlbnNpdHkgPSBkZW5zaXR5O1xuICAgICAgICB0aGlzLnNvY2lhbERpc3RhbmNpbmdSYXRlID0gc29jaWFsRGlzdGFuY2luZ1JhdGU7XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbkluZmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGVyc29ucyA9IFtdO1xuICAgICAgICB0aGlzLnNpbXVsYXRpb25JbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5mZWN0aW9uTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5hZGRQZXJzb25zKCk7XG4gICAgICAgIHRoaXMuYWRkUGF0aWVudFplcm8oKTtcbiAgICAgICAgdGhpcy5hZGRDb25zY2lvdXNDaXRpemVuKCk7XG4gICAgICAgIHRoaXMuZHJhdyhjdHgpO1xuICAgIH1cblxuICAgIC8vIGhhbmRsZURlbnNpdHkoKSB7XG5cbiAgICAvLyB9XG5cbiAgICBhZGRQZXJzb25zKCkge1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLmRlbnNpdHk7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wZXJzb25zLnB1c2gobmV3IFBlcnNvbih7XG4gICAgICAgICAgICAgICAgcG9zOiB0aGlzLnJhbmRvbVBvc2l0aW9uKCksIFxuICAgICAgICAgICAgICAgIHZlbDogVXRpbC5yYW5kb21WZWMoREVGQVVMVFMuU1BFRUQpLCBcbiAgICAgICAgICAgICAgICBzaW11bGF0aW9uOiB0aGlzfSkpO1xuXG4gICAgICAgICAgICBpZiAoaSE9PTApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucGVyc29ucy5sZW5ndGgtMTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoVXRpbC5kaXN0KHRoaXMucGVyc29uc1tpXS5wb3MsIHRoaXMucGVyc29uc1tqXS5wb3MpIC0gREVGQVVMVFMuUkFESVVTICogMikgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0ucG9zID0gdGhpcy5yYW5kb21Qb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaj0tMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFBhdGllbnRaZXJvKCkge1xuICAgICAgICB0aGlzLnBlcnNvbnNbMF0uY29sb3IgPSAncmVkJztcbiAgICAgICAgdGhpcy5wZXJzb25zWzBdLmluZmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbmZlY3Rpb25OdWJlciA9KyAxO1xuICAgIH1cblxuICAgIGFkZENvbnNjaW91c0NpdGl6ZW4oKSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICBmb3IgKGxldCBpPTE7IGk8dGhpcy5wZXJzb25zLmxlbmd0aCAqIHRoaXMuc29jaWFsRGlzdGFuY2luZ1JhdGUrMTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0uY29uc2Npb3VzQ2l0aXplbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0udmVsID0gWzAsMF07XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0uY29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBcbiAgICByYW5kb21Qb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgcmFkID0gREVGQVVMVFMuUkFESVVTO1xuICAgICAgICBsZXQgeCA9IFV0aWwucmFuZG9tSW50UmFuZ2UocmFkLCB0aGlzLkRJTV9YIC0gcmFkKTtcbiAgICAgICAgbGV0IHkgPSBVdGlsLnJhbmRvbUludFJhbmdlKHJhZCwgdGhpcy5ESU1fWSAtIHJhZCk7XG4gICAgICAgIHJldHVybiBbeCx5XTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuRElNX1gsIHRoaXMuRElNX1kpO1xuICAgICAgICB0aGlzLnBlcnNvbnMuZm9yRWFjaCggcGVyc29uID0+IHBlcnNvbi5kcmF3KGN0eCkpO1xuICAgIH1cblxuICAgIG1vdmVPYmplY3RzKCkge1xuICAgICAgICB0aGlzLnBlcnNvbnMuZm9yRWFjaCgocGVyc29uKSA9PiB7XG4gICAgICAgICAgICBwZXJzb24ubW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVPYmplY3Qob2JqZWN0KSB7XG4gICAgICAgIHRoaXMucGVyc29ucy5zcGxpY2UodGhpcy5wZXJzb25zLmluZGV4T2Yob2JqZWN0KSwgMSlcbiAgICB9XG4gICAgXG5cbiAgICBjaGVja0NvbGxpc2lvbnMoKSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLnBlcnNvbnMubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaj1pKzE7IGo8dGhpcy5wZXJzb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBlcnMxID0gdGhpcy5wZXJzb25zW2ldO1xuICAgICAgICAgICAgICAgIGxldCBwZXJzMiA9IHRoaXMucGVyc29uc1tqXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocGVyczEuaXNDb2xsaWRlZFdpdGgocGVyczIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZXJzMS52ZWwgPSBwZXJzMS5jaGFuZ2VEaXIocGVyczEudmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlcnMxLmNvbG9yID0gJyNmZjAwMDAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGVyczIudmVsID0gcGVyczIuY2hhbmdlRGlyKHBlcnMyLnZlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZXJzMi5jb2xvciA9ICcjZmYwMDAwJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlcnMxLnBvcyA9IHRoaXMuYm91bmNlKHBlcnMxLnZlbCwgcGVyczEucG9zKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGVyczIucG9zID0gdGhpcy5ib3VuY2UocGVyczIudmVsLCBwZXJzMi5wb3MpXG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlsLnJlc29sdmVDb2xsaXNpb24ocGVyczEsIHBlcnMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwZXJzMS5jb2xvciA9PT0gJ3JlZCcgJiYgcGVyczIuY29sb3IgIT09ICdyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzMi5jb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGVyczIuaW5mZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmZlY3Rpb25OdWJlciArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwZXJzMi5jb2xvciA9PT0gJ3JlZCcgJiYgcGVyczEuY29sb3IgIT09ICdyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyczEuY29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzMS5pbmZlY3RlZCA9ICd0cnVlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluZmVjdGlvbk51YmVyICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZW1vdmVPYmplY3QocGVyczEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZW1vdmVPYmplY3QocGVyczIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBib3VuY2UocG9zLCB2ZWwpIHtcbiAgICAgICAgbGV0IHJhZCA9IERFRkFVTFRTLlJBRElVU1xuICAgICAgICBpZiAocG9zWzBdLXJhZCA8IDAgfHwgcG9zWzBdK3JhZCA+IHRoaXMuRElNX1gpIHtcbiAgICAgICAgICAgdmVsWzBdID0gLSB2ZWxbMF0gXG4gICAgICAgIH0gZWxzZSBpZiAocG9zWzFdLXJhZCA8IDAgfHwgcG9zWzFdK3JhZCA+IHRoaXMuRElNX1kpIHtcbiAgICAgICAgICAgIHZlbFsxXSA9IC0gdmVsWzFdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZlbDtcbiAgICB9XG5cbiAgICBoYW5kbGVJbmZlY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmluZmVjdGlvbk51YmVyIC8gdGhpcy5kZW5zaXR5ID4gMC45OSkge1xuICAgICAgICAgICAgdGhpcy5wb3B1bGF0aW9uSW5mZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RlcCgpIHtcblxuICAgICAgICB0aGlzLm1vdmVPYmplY3RzKCk7XG4gICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb25zKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlSW5mZWN0aW9uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW5mZWN0aW9uTnViZXIpO1xuXG4gICAgICAgIC8vIGlmICghdGhpcy5wb3B1bGF0aW9uSW5mZWN0ZWQpIHtcbiAgICAgICAgLy8gICAgIHRoaXMubW92ZU9iamVjdHMoKTtcbiAgICAgICAgLy8gICAgIHRoaXMuY2hlY2tDb2xsaXNpb25zKCk7XG4gICAgICAgIC8vICAgICB0aGlzLmhhbmRsZUluZmVjdGlvbigpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbn1cblxuU2ltdWxhdGlvbi5ESU1fWCA9IDYwMDtcblNpbXVsYXRpb24uRElNX1kgPSA0MDA7XG4vLyBTaW11bGF0aW9uLk5VTV9QRVJTT05TID0gMTAwO1xuIiwiaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnLi9zaW11bGF0aW9uJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW11bGF0aW9uVmlldyB7XG4gICAgY29uc3RydWN0b3Ioc2ltdWxhdGlvbiwgY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnNpbXVsYXRpb24gPSBzaW11bGF0aW9uO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnNpbXVsYXRpb24uc2ltdWxhdGlvbkludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaW11bGF0aW9uLnN0ZXAoKTtcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGlvbi5kcmF3KHRoaXMuY3R4KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbXVsYXRpb24ucG9wdWxhdGlvbkluZmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNpbXVsYXRpb24uc2ltdWxhdGlvbkludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjApO1xuXG4gICAgICAgIFxuICAgIH1cblxuICAgIHN0b3Aoc2ltdWxhdGlvbikge1xuICAgICAgICBcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzaW11bGF0aW9uLnNpbXVsYXRpb25JbnRlcnZhbCk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGNvbnN0IFV0aWwgPSB7XG4gICAvLyBSZXR1cm4gYSByYW5kb21seSBvcmllbnRlZCB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gbGVuZ3RoLlxuICAgcmFuZG9tVmVjKGxlbmd0aCkge1xuICAgICAgY29uc3QgZGVnID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgcmV0dXJuIFV0aWwuc2NhbGUoW01hdGguc2luKGRlZyksIE1hdGguY29zKGRlZyldLCBsZW5ndGgpO1xuICAgfSxcbiAgIC8vIFNjYWxlIHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgYnkgdGhlIGdpdmVuIGFtb3VudC5cbiAgIHNjYWxlKHZlYywgbSkge1xuICAgICAgcmV0dXJuIFt2ZWNbMF0gKiBtLCB2ZWNbMV0gKiBtXTtcbiAgIH0sXG5cbiAgIGRpc3QocG9zMSwgcG9zMikge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgICAgIE1hdGgucG93KHBvczFbMF0gLSBwb3MyWzBdLCAyKSArIE1hdGgucG93KHBvczFbMV0gLSBwb3MyWzFdLCAyKVxuICAgICAgKVxuICAgfSxcbiAgIFxuICAgcmFuZG9tSW50UmFuZ2UobWluLCBtYXgpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICAgfSxcblxuICAgcm90YXRlKHZlbG9jaXR5LCBhbmdsZSkge1xuICAgICAgY29uc3Qgcm90YXRlZFZlbG9jaXRpZXMgPSB7XG4gICAgICAgICB4OiB2ZWxvY2l0eVswXSAqIE1hdGguY29zKGFuZ2xlKSAtIHZlbG9jaXR5WzFdICogTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgeTogdmVsb2NpdHlbMF0gKiBNYXRoLnNpbihhbmdsZSkgKyB2ZWxvY2l0eVsxXSAqIE1hdGguY29zKGFuZ2xlKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdGF0ZWRWZWxvY2l0aWVzO1xuICAgfSxcblxuICAgcmVzb2x2ZUNvbGxpc2lvbihwZXJzLCBvdGhlclBlcnMpIHtcblxuICAgICAgY29uc3QgeFZlbERpZmYgPSBwZXJzLnZlbFswXSAtIG90aGVyUGVycy52ZWxbMF07XG4gICAgICBjb25zdCB5VmVsRGlmZiA9IHBlcnMudmVsWzFdIC0gb3RoZXJQZXJzLnZlbFsxXTtcblxuXG4gICAgICBjb25zdCB4RGlzdCA9IG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXTtcbiAgICAgIGNvbnN0IHlEaXN0ID0gb3RoZXJQZXJzLnBvc1sxXSAtIHBlcnMucG9zWzFdO1xuXG4gICAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgb3ZlcmxhcCBvZiBwZXJzXG4gICAgICBpZiAoeFZlbERpZmYgKiB4RGlzdCArIHlWZWxEaWZmICogeURpc3QgPj0gMCkge1xuXG4gICAgICAgICBwZXJzLnZlbCA9IHBlcnMuY2hhbmdlRGlyKHBlcnMudmVsKTtcbiAgICAgICAgIG90aGVyUGVycy52ZWwgPSBvdGhlclBlcnMuY2hhbmdlRGlyKG90aGVyUGVycy52ZWwpO1xuICAgICAgICAgXG4gICAgICB9XG4gICB9XG4gICAvLyByZXNvbHZlQ29sbGlzaW9uKHBlcnMsIG90aGVyUGVycykge1xuICAgLy8gICAgY29uc3QgeFZlbERpZmYgPSBwZXJzLnZlbFswXSAtIG90aGVyUGVycy52ZWxbMF07XG4gICAvLyAgICBjb25zdCB5VmVsRGlmZiA9IHBlcnMudmVsWzFdIC0gb3RoZXJQZXJzLnZlbFsxXTtcblxuXG4gICAvLyAgICBjb25zdCB4RGlzdCA9IG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXTtcbiAgIC8vICAgIGNvbnN0IHlEaXN0ID0gb3RoZXJQZXJzLnBvc1sxXSAtIHBlcnMucG9zWzFdO1xuXG4gICAvLyAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgb3ZlcmxhcCBvZiBwZXJzXG4gICAvLyAgICBpZiAoeFZlbERpZmYgKiB4RGlzdCArIHlWZWxEaWZmICogeURpc3QgPj0gMCkge1xuXG4gICAvLyAgICAgICAvLyBHcmFiIGFuZ2xlIGJldHdlZW4gdGhlIHR3byBjb2xsaWRpbmcgcGVyc1xuICAgLy8gICAgICAgY29uc3QgYW5nbGUgPSAtTWF0aC5hdGFuMihvdGhlclBlcnMucG9zWzFdIC0gcGVycy5wb3NbMV0sIG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXSk7XG5cbiAgIC8vICAgICAgIC8vIFN0b3JlIG1hc3MgaW4gdmFyIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgaW4gY29sbGlzaW9uIGVxdWF0aW9uXG4gICAvLyAgICAgICBjb25zdCBtMSA9IHBlcnMubWFzcztcbiAgIC8vICAgICAgIGNvbnN0IG0yID0gb3RoZXJQZXJzLm1hc3M7XG5cbiAgIC8vICAgICAgIC8vIHZlbCBiZWZvcmUgZXF1YXRpb25cbiAgIC8vICAgICAgIGNvbnN0IHUxID0gVXRpbC5yb3RhdGUocGVycy52ZWwsIGFuZ2xlKTtcbiAgIC8vICAgICAgIGNvbnN0IHUyID0gVXRpbC5yb3RhdGUob3RoZXJQZXJzLnZlbCwgYW5nbGUpO1xuXG4gICAvLyAgICAgICAvLyB2ZWwgYWZ0ZXIgMWQgY29sbGlzaW9uIGVxdWF0aW9uXG4gICAvLyAgICAgICBjb25zdCB2MSA9IFt1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTEueV07XG4gICAvLyAgICAgICBjb25zdCB2MiA9IFt1Mi54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTEueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTIueV07XG5cbiAgIC8vICAgICAgIC8vIEZpbmFsIHZlbCBhZnRlciByb3RhdGluZyBheGlzIGJhY2sgdG8gb3JpZ2luYWwgbG9jYXRpb25cbiAgIC8vICAgICAgIGNvbnN0IHZGaW5hbDEgPSBVdGlsLnJvdGF0ZSh2MSwgLWFuZ2xlKTtcbiAgIC8vICAgICAgIGNvbnN0IHZGaW5hbDIgPSBVdGlsLnJvdGF0ZSh2MiwgLWFuZ2xlKTtcblxuICAgLy8gICAgICAgLy8gU3dhcCBwZXJzIHZlbG9jaXRpZXMgZm9yIHJlYWxpc3RpYyBib3VuY2UgZWZmZWN0XG4gICAvLyAgICAgICBwZXJzLnZlbFswXSA9IHZGaW5hbDEueDtcbiAgIC8vICAgICAgIHBlcnMudmVsWzFdID0gdkZpbmFsMS55O1xuXG4gICAvLyAgICAgICBvdGhlclBlcnMudmVsWzBdID0gdkZpbmFsMi54O1xuICAgLy8gICAgICAgb3RoZXJQZXJzLnZlbFsxXSA9IHZGaW5hbDIueTtcbiAgIC8vICAgIH1cbiAgIC8vIH1cblxuICAgLy8gcmVzb2x2ZUNvbGxpc2lvbihwZXJzLCBvdGhlclBlcnMpIHtcbiAgIC8vICAgIGNvbnN0IHhWZWxEaWZmID0gcGVycy52ZWxbMF0gLSBvdGhlclBlcnMudmVsWzBdO1xuICAgLy8gICAgY29uc3QgeVZlbERpZmYgPSBwZXJzLnZlbFsxXSAtIG90aGVyUGVycy52ZWxbMV07XG5cbiAgIC8vICAgIGNvbnN0IHhEaXN0ID0gb3RoZXJQZXJzLnBvc1swXSAtIHBlcnMucG9zWzBdO1xuICAgLy8gICAgY29uc3QgeURpc3QgPSBvdGhlclBlcnMucG9zWzFdIC0gcGVycy5wb3NbMV07XG5cbiAgIC8vICAgIC8vIFByZXZlbnQgYWNjaWRlbnRhbCBvdmVybGFwIG9mIHBlcnNcbiAgIC8vICAgIGlmICh4VmVsRGlmZiAqIHhEaXN0ICsgeVZlbERpZmYgKiB5RGlzdCA+PSAwKSB7XG5cbiAgIC8vICAgICAgIC8vIEdyYWIgYW5nbGUgYmV0d2VlbiB0aGUgdHdvIGNvbGxpZGluZyBwZXJzXG4gICAvLyAgICAgICBjb25zdCBhbmdsZSA9IC1NYXRoLmF0YW4yKG90aGVyUGVycy5wb3NbMV0gLSBwZXJzLnBvc1sxXSwgb3RoZXJQZXJzLnBvc1swXSAtIHBlcnMucG9zWzBdKTtcblxuICAgLy8gICAgICAgLy8gU3RvcmUgbWFzcyBpbiB2YXIgZm9yIGJldHRlciByZWFkYWJpbGl0eSBpbiBjb2xsaXNpb24gZXF1YXRpb25cbiAgIC8vICAgICAgIGNvbnN0IG0xID0gcGVycy5tYXNzO1xuICAgLy8gICAgICAgY29uc3QgbTIgPSBvdGhlclBlcnMubWFzcztcblxuICAgLy8gICAgICAgaWYgKHBlcnMuY29uc2Npb3VzQ2l0aXplbiA9PT0gdHJ1ZSkge1xuICAgLy8gICAgICAgICAgLy8gdmVsIGJlZm9yZSBlcXVhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdTEgPSBVdGlsLnJvdGF0ZShwZXJzLnZlbCwgYW5nbGUpO1xuICAgLy8gICAgICAgICAgY29uc3QgdTIgPSBVdGlsLnJvdGF0ZShvdGhlclBlcnMudmVsLCBhbmdsZSk7XG5cbiAgIC8vICAgICAgICAgIC8vIHZlbCBhZnRlciAxZCBjb2xsaXNpb24gZXF1YXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHYxID0gW3UxLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1Mi54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1MS55XTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHYyID0gW3UyLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1MS54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1Mi55XTtcblxuICAgLy8gICAgICAgICAgLy8gRmluYWwgdmVsIGFmdGVyIHJvdGF0aW5nIGF4aXMgYmFjayB0byBvcmlnaW5hbCBsb2NhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdkZpbmFsMSA9IFV0aWwucm90YXRlKHYxLCAtYW5nbGUpO1xuICAgLy8gICAgICAgICAgY29uc3QgdkZpbmFsMiA9IFV0aWwucm90YXRlKHYyLCAtYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyBTd2FwIHBlcnMgdmVsb2NpdGllcyBmb3IgcmVhbGlzdGljIGJvdW5jZSBlZmZlY3RcbiAgIC8vICAgICAgICAgIC8vIHBlcnMudmVsWzBdID0gdkZpbmFsMS54O1xuICAgLy8gICAgICAgICAgLy8gcGVycy52ZWxbMV0gPSB2RmluYWwxLnk7XG4gICAvLyAgICAgICAgICAvLyBwZXJzLnZlbFswXSA9IDA7XG4gICAvLyAgICAgICAgICAvLyBwZXJzLnZlbFsxXSA9IDA7XG5cbiAgIC8vICAgICAgICAgIG90aGVyUGVycy52ZWxbMF0gPSB2RmluYWwyLng7XG4gICAvLyAgICAgICAgICBvdGhlclBlcnMudmVsWzFdID0gdkZpbmFsMi55O1xuXG4gICAvLyAgICAgICB9IGVsc2UgaWYgKG90aGVyUGVycy5jb25zY2lvdXNDaXRpemVuID09PSB0cnVlKXtcbiAgIC8vICAgICAgICAgIC8vIHZlbCBiZWZvcmUgZXF1YXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHUxID0gVXRpbC5yb3RhdGUocGVycy52ZWwsIGFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHUyID0gVXRpbC5yb3RhdGUob3RoZXJQZXJzLnZlbCwgYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyB2ZWwgYWZ0ZXIgMWQgY29sbGlzaW9uIGVxdWF0aW9uXG4gIFxuICAgLy8gICAgICAgICAgY29uc3QgdjEgPSBbdTEueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUyLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUxLnldO1xuICAgLy8gICAgICAgICAgY29uc3QgdjIgPSBbdTIueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUxLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUyLnldO1xuXG4gICAvLyAgICAgICAgICAvLyBGaW5hbCB2ZWwgYWZ0ZXIgcm90YXRpbmcgYXhpcyBiYWNrIHRvIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB2RmluYWwxID0gVXRpbC5yb3RhdGUodjEsIC1hbmdsZSk7XG4gICAvLyAgICAgICAgICBjb25zdCB2RmluYWwyID0gVXRpbC5yb3RhdGUodjIsIC1hbmdsZSk7XG5cbiAgIC8vICAgICAgICAgIC8vIFN3YXAgcGVycyB2ZWxvY2l0aWVzIGZvciByZWFsaXN0aWMgYm91bmNlIGVmZmVjdFxuICAgLy8gICAgICAgICAgcGVycy52ZWxbMF0gPSB2RmluYWwxLng7XG4gICAvLyAgICAgICAgICBwZXJzLnZlbFsxXSA9IHZGaW5hbDEueTtcblxuICAgLy8gICAgICAgICAgLy8gb3RoZXJQZXJzLnZlbFswXSA9IHZGaW5hbDIueDtcbiAgIC8vICAgICAgICAgIC8vIG90aGVyUGVycy52ZWxbMV0gPSB2RmluYWwyLnk7XG4gICAvLyAgICAgICAgICAvLyBvdGhlclBlcnMudmVsWzBdID0gMDtcbiAgIC8vICAgICAgICAgIC8vIG90aGVyUGVycy52ZWxbMV0gPSAwO1xuICAgLy8gICAgICAgfSBlbHNlIHtcbiAgIC8vICAgICAgICAgIC8vIHZlbCBiZWZvcmUgZXF1YXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHUxID0gVXRpbC5yb3RhdGUocGVycy52ZWwsIGFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHUyID0gVXRpbC5yb3RhdGUob3RoZXJQZXJzLnZlbCwgYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyB2ZWwgYWZ0ZXIgMWQgY29sbGlzaW9uIGVxdWF0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB2MSA9IFt1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTEueV07XG4gICAvLyAgICAgICAgICBjb25zdCB2MiA9IFt1Mi54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTEueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTIueV07XG5cbiAgIC8vICAgICAgICAgIC8vIEZpbmFsIHZlbCBhZnRlciByb3RhdGluZyBheGlzIGJhY2sgdG8gb3JpZ2luYWwgbG9jYXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDEgPSBVdGlsLnJvdGF0ZSh2MSwgLWFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDIgPSBVdGlsLnJvdGF0ZSh2MiwgLWFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gU3dhcCBwZXJzIHZlbG9jaXRpZXMgZm9yIHJlYWxpc3RpYyBib3VuY2UgZWZmZWN0XG4gICAvLyAgICAgICAgICBwZXJzLnZlbFswXSA9IHZGaW5hbDEueDtcbiAgIC8vICAgICAgICAgIHBlcnMudmVsWzFdID0gdkZpbmFsMS55O1xuXG4gICAvLyAgICAgICAgICBvdGhlclBlcnMudmVsWzBdID0gdkZpbmFsMi54O1xuICAgLy8gICAgICAgICAgb3RoZXJQZXJzLnZlbFsxXSA9IHZGaW5hbDIueTtcbiAgIC8vICAgICAgIH1cbiAgIC8vICAgIH1cbiAgIC8vIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9