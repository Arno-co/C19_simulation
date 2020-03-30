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
  canvasEl1.width = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_X;
  canvasEl1.height = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_Y;
  var ctx1 = canvasEl1.getContext("2d");
  console.log('webpack is working');
  window.Simulation = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"];
  window.SimulationView = _simulation_view__WEBPACK_IMPORTED_MODULE_1__["default"];
  var infectedNumber = document.getElementById("infected-number");
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
    console.log(currentSimulation); // infectedNumber.innerHTML = currentSimulation.infectionNumber;
  };

  var stopSimulation = document.getElementById('stop');

  stopSimulation.onclick = function () {
    currentSimulationView.stop(currentSimulation);
  };

  var s1 = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"](density.value, socialDist.value / 100, ctx1);
  console.log(s1);
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
      ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }, {
    key: "move",
    value: function move() {
      this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
      this.vel = this.simulation.bounce(this.pos, this.vel);
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
    parameters.infected = false;
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
  }

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
      this.infectionNumber = +1;
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
            _util__WEBPACK_IMPORTED_MODULE_1__["Util"].resolveCollision(pers1, pers2);

            if (pers1.color === 'red' && pers2.color !== 'red') {
              pers2.color = 'red';
              pers2.infected = true;
              this.infectionNumber += 1;
            } else if (pers2.color === 'red' && pers1.color !== 'red') {
              pers1.color = 'red';
              pers1.infected = 'true';
              this.infectionNumber += 1;
            }

            ;
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
    }
  }]);

  return Simulation;
}();


Simulation.DIM_X = 600;
Simulation.DIM_Y = 400;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb3Zpbmdfb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb25fdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbDEiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiU2ltdWxhdGlvbiIsIkRJTV9YIiwiaGVpZ2h0IiwiRElNX1kiLCJjdHgxIiwiZ2V0Q29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJTaW11bGF0aW9uVmlldyIsImluZmVjdGVkTnVtYmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJkZW5zaXR5Iiwib3V0cHV0RGVuc2l0eSIsImlubmVySFRNTCIsInZhbHVlIiwib25pbnB1dCIsInMxIiwic29jaWFsRGlzdCIsIm91dHB1dFNvY2lhbERpc3QiLCJjdXJyZW50U2ltdWxhdGlvbiIsImN1cnJlbnRTaW11bGF0aW9uVmlldyIsInN0YXJ0U2ltdWxhdGlvbiIsIm9uY2xpY2siLCJzdGFydCIsInN0b3BTaW11bGF0aW9uIiwic3RvcCIsIk1vdmluZ09iamVjdCIsInBhcmFtZXRlcnMiLCJwb3MiLCJ2ZWwiLCJyYWRpdXMiLCJjb2xvciIsIm1hc3MiLCJzaW11bGF0aW9uIiwiY3R4Iiwic3Ryb2tlU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJzdHJva2UiLCJib3VuY2UiLCJhYnMiLCJvdGhlck9iamVjdCIsImNlbnRlckRpc3QiLCJVdGlsIiwiZGlzdCIsInJlbW92ZSIsIkRFRkFVTFRTIiwiUkFESVVTIiwiQ09MT1IiLCJTUEVFRCIsIk1BU1MiLCJQZXJzb24iLCJyYW5kb21Qb3NpdGlvbiIsInJhbmRvbVZlYyIsImNvbnNjaW91c0N0aXplbiIsImluZmVjdGVkIiwic29jaWFsRGlzdGFuY2luZ1JhdGUiLCJOVU1fUEVSU09OUyIsInBvcHVsYXRpb25JbmZlY3RlZCIsInBlcnNvbnMiLCJzaW11bGF0aW9uSW50ZXJ2YWwiLCJpbmZlY3Rpb25OdW1iZXIiLCJhZGRQZXJzb25zIiwiYWRkUGF0aWVudFplcm8iLCJhZGRDb25zY2lvdXNDaXRpemVuIiwiZHJhdyIsImkiLCJwdXNoIiwiaiIsImxlbmd0aCIsImNvbnNjaW91c0NpdGl6ZW4iLCJyYWQiLCJ4IiwicmFuZG9tSW50UmFuZ2UiLCJ5IiwiY2xlYXJSZWN0IiwiZm9yRWFjaCIsInBlcnNvbiIsIm1vdmUiLCJvYmplY3QiLCJzcGxpY2UiLCJpbmRleE9mIiwicGVyczEiLCJwZXJzMiIsImlzQ29sbGlkZWRXaXRoIiwicmVzb2x2ZUNvbGxpc2lvbiIsImluZmVjdGlvbk51YmVyIiwibW92ZU9iamVjdHMiLCJjaGVja0NvbGxpc2lvbnMiLCJoYW5kbGVJbmZlY3Rpb24iLCJzZXRJbnRlcnZhbCIsInN0ZXAiLCJjbGVhckludGVydmFsIiwiZGVnIiwicmFuZG9tIiwic2NhbGUiLCJzaW4iLCJjb3MiLCJ2ZWMiLCJtIiwicG9zMSIsInBvczIiLCJzcXJ0IiwicG93IiwibWluIiwibWF4IiwiZmxvb3IiLCJyb3RhdGUiLCJ2ZWxvY2l0eSIsImFuZ2xlIiwicm90YXRlZFZlbG9jaXRpZXMiLCJwZXJzIiwib3RoZXJQZXJzIiwieFZlbERpZmYiLCJ5VmVsRGlmZiIsInhEaXN0IiwieURpc3QiLCJjaGFuZ2VEaXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXZLaUIsQ0FBYixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnLi9zaW11bGF0aW9uJztcbmltcG9ydCBTaW11bGF0aW9uVmlldyBmcm9tICcuL3NpbXVsYXRpb25fdmlldyc7XG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQge1BlcnNvbn0gZnJvbSAnLi9wZXJzb24nO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXNFbDEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcblxuICAgIGNhbnZhc0VsMS53aWR0aCA9IFNpbXVsYXRpb24uRElNX1g7XG4gICAgY2FudmFzRWwxLmhlaWdodCA9IFNpbXVsYXRpb24uRElNX1k7XG4gICAgY29uc3QgY3R4MSA9IGNhbnZhc0VsMS5nZXRDb250ZXh0KFwiMmRcIik7XG5cblxuXG4gICAgY29uc29sZS5sb2coJ3dlYnBhY2sgaXMgd29ya2luZycpO1xuXG5cbiAgICB3aW5kb3cuU2ltdWxhdGlvbiA9IFNpbXVsYXRpb247XG4gICAgd2luZG93LlNpbXVsYXRpb25WaWV3ID0gU2ltdWxhdGlvblZpZXc7XG5cbiAgICBcbiAgICBsZXQgaW5mZWN0ZWROdW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZmVjdGVkLW51bWJlclwiKTtcblxuXG4gICAgbGV0IGRlbnNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktZGVuc2l0eS1yYW5nZScpO1xuICAgIGxldCBvdXRwdXREZW5zaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbnNpdHktdmFsdWUnKTtcblxuICAgIG91dHB1dERlbnNpdHkuaW5uZXJIVE1MID0gZGVuc2l0eS52YWx1ZTtcblxuICAgIGRlbnNpdHkub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXG4gICAgICAgIG91dHB1dERlbnNpdHkuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcbiAgICAgICAgbGV0IHMxID0gbmV3IFNpbXVsYXRpb24odGhpcy52YWx1ZSwgc29jaWFsRGlzdC52YWx1ZSAvIDEwMCwgY3R4MSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRlbnNpdHkudmFsdWUpO1xuXG4gICAgbGV0IHNvY2lhbERpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktc29jaWFsLXJhbmdlJyk7XG4gICAgbGV0IG91dHB1dFNvY2lhbERpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29jaWFsLXZhbHVlJyk7XG5cbiAgICBvdXRwdXRTb2NpYWxEaXN0LmlubmVySFRNTCA9IHNvY2lhbERpc3QudmFsdWU7XG5cbiAgICBzb2NpYWxEaXN0Lm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG91dHB1dFNvY2lhbERpc3QuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcbiAgICAgICAgbGV0IHMxID0gbmV3IFNpbXVsYXRpb24oZGVuc2l0eS52YWx1ZSwgdGhpcy52YWx1ZSAvIDEwMCwgY3R4MSk7XG4gICAgICAgIHJldHVybiBzMTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coc29jaWFsRGlzdC52YWx1ZSk7XG5cbiAgICBsZXQgY3VycmVudFNpbXVsYXRpb24gPSBudWxsO1xuICAgIGxldCBjdXJyZW50U2ltdWxhdGlvblZpZXcgPSBudWxsO1xuICAgIFxuXG4gICAgbGV0IHN0YXJ0U2ltdWxhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpO1xuICAgIHN0YXJ0U2ltdWxhdGlvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjdXJyZW50U2ltdWxhdGlvbiA9IG5ldyBTaW11bGF0aW9uKGRlbnNpdHkudmFsdWUsIHNvY2lhbERpc3QudmFsdWUgLyAxMDAsIGN0eDEpO1xuICAgICAgICBjdXJyZW50U2ltdWxhdGlvblZpZXcgPSBuZXcgU2ltdWxhdGlvblZpZXcoY3VycmVudFNpbXVsYXRpb24sIGN0eDEpXG4gICAgICAgIGN1cnJlbnRTaW11bGF0aW9uVmlldy5zdGFydCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50U2ltdWxhdGlvbik7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8gaW5mZWN0ZWROdW1iZXIuaW5uZXJIVE1MID0gY3VycmVudFNpbXVsYXRpb24uaW5mZWN0aW9uTnVtYmVyO1xuICAgIH1cblxuICAgIFxuICAgIGxldCBzdG9wU2ltdWxhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9wJyk7XG4gICAgc3RvcFNpbXVsYXRpb24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3VycmVudFNpbXVsYXRpb25WaWV3LnN0b3AoY3VycmVudFNpbXVsYXRpb24pO1xuICAgIH1cbiAgICBcbiAgICBsZXQgczEgPSBuZXcgU2ltdWxhdGlvbihkZW5zaXR5LnZhbHVlLCBzb2NpYWxEaXN0LnZhbHVlIC8gMTAwLCBjdHgxKTtcbiAgICBjb25zb2xlLmxvZyhzMSk7XG4gICBcblxuICAgIFxufSk7IiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgU2ltdWxhdGlvbiBmcm9tICcuL3NpbXVsYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnBvcyAgPSBwYXJhbWV0ZXJzLnBvcztcbiAgICB0aGlzLnZlbCAgPSBwYXJhbWV0ZXJzLnZlbDtcbiAgICB0aGlzLnJhZGl1cyAgPSBwYXJhbWV0ZXJzLnJhZGl1cztcbiAgICB0aGlzLmNvbG9yICA9IHBhcmFtZXRlcnMuY29sb3I7XG4gICAgdGhpcy5tYXNzID0gcGFyYW1ldGVycy5tYXNzO1xuICAgIHRoaXMuc2ltdWxhdGlvbiA9IHBhcmFtZXRlcnMuc2ltdWxhdGlvbjtcbiAgICB9XG5cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIHRoaXMucG9zWzBdLFxuICAgICAgICAgICAgdGhpcy5wb3NbMV0sXG4gICAgICAgICAgICB0aGlzLnJhZGl1cyxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICApO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMucG9zID0gWyh0aGlzLnBvc1swXSArIHRoaXMudmVsWzBdKSwgKHRoaXMucG9zWzFdICsgdGhpcy52ZWxbMV0pXVxuICAgICAgICB0aGlzLnZlbCA9IHRoaXMuc2ltdWxhdGlvbi5ib3VuY2UodGhpcy5wb3MsIHRoaXMudmVsKTtcbiAgICB9O1xuXG4gICAgY2hhbmdlRGlyKHZlbCkge1xuICAgICAgICBcbiAgICAgICAgaWYgKE1hdGguYWJzKHZlbFswXSkgPiBNYXRoLmFicyh2ZWxbMV0pKSB7XG4gICAgICAgICAgICB2ZWxbMF0gPSAtIHZlbFswXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmVsWzFdID0gLSB2ZWxbMV1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHZlbDtcbiAgICB9XG4gICAgXG4gICAgaXNDb2xsaWRlZFdpdGgob3RoZXJPYmplY3QpIHtcbiAgICAgICAgY29uc3QgY2VudGVyRGlzdCA9IFV0aWwuZGlzdCh0aGlzLnBvcywgb3RoZXJPYmplY3QucG9zKTtcbiAgICAgICAgaWYgKGNlbnRlckRpc3QgPCAodGhpcy5yYWRpdXMgKyBvdGhlck9iamVjdC5yYWRpdXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uLnJlbW92ZSh0aGlzKTtcbiAgICB9XG5cbiB9XG5cblxuIiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRTID0ge1xuICAgIFJBRElVUzogMixcbiAgICBDT0xPUjogXCIjMDAwMDY2XCIsXG4gICAgU1BFRUQ6IDIsXG4gICAgTUFTUzogMVxufVxuXG5leHBvcnQgY2xhc3MgUGVyc29uIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzID0ge30pIHtcbiAgICAgICAgcGFyYW1ldGVycy5jb2xvciA9IERFRkFVTFRTLkNPTE9SO1xuICAgICAgICBwYXJhbWV0ZXJzLnJhZGl1cyA9IERFRkFVTFRTLlJBRElVUztcbiAgICAgICAgcGFyYW1ldGVycy5tYXNzID0gREVGQVVMVFMuTUFTUztcbiAgICAgICAgcGFyYW1ldGVycy5wb3MgPSBwYXJhbWV0ZXJzLnBvcyB8fCBwYXJhbWV0ZXJzLnNpbXVsYXRpb24ucmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgcGFyYW1ldGVycy52ZWwgPSBwYXJhbWV0ZXJzLnZlbCB8fCBVdGlsLnJhbmRvbVZlYyhERUZBVUxUUy5TUEVFRCk7XG4gICAgICAgIHBhcmFtZXRlcnMuY29uc2Npb3VzQ3RpemVuID0gZmFsc2U7XG4gICAgICAgIHBhcmFtZXRlcnMuaW5mZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgc3VwZXIocGFyYW1ldGVycyk7XG4gICAgfVxuXG59IiwiaW1wb3J0IHtQZXJzb24sIERFRkFVTFRTfSBmcm9tICcuL3BlcnNvbic7XG5pbXBvcnQge1V0aWx9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgU2ltdWxhdGlvblZpZXcgZnJvbSAnLi9zaW11bGF0aW9uX3ZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW11bGF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihkZW5zaXR5LCBzb2NpYWxEaXN0YW5jaW5nUmF0ZSwgY3R4KSB7XG4gICAgICAgIHRoaXMuRElNX1ggPSA2MDA7XG4gICAgICAgIHRoaXMuRElNX1kgPSA0MDA7XG4gICAgICAgIHRoaXMuTlVNX1BFUlNPTlMgPSAxMDA7XG4gICAgICAgIHRoaXMuZGVuc2l0eSA9IGRlbnNpdHk7XG4gICAgICAgIHRoaXMuc29jaWFsRGlzdGFuY2luZ1JhdGUgPSBzb2NpYWxEaXN0YW5jaW5nUmF0ZTtcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uSW5mZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wZXJzb25zID0gW107XG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbkludGVydmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbmZlY3Rpb25OdW1iZXIgPSAwO1xuICAgICAgICB0aGlzLmFkZFBlcnNvbnMoKTtcbiAgICAgICAgdGhpcy5hZGRQYXRpZW50WmVybygpO1xuICAgICAgICB0aGlzLmFkZENvbnNjaW91c0NpdGl6ZW4oKTtcbiAgICAgICAgdGhpcy5kcmF3KGN0eCk7XG4gICAgfVxuXG5cblxuICAgIGFkZFBlcnNvbnMoKSB7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMuZGVuc2l0eTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnMucHVzaChuZXcgUGVyc29uKHtcbiAgICAgICAgICAgICAgICBwb3M6IHRoaXMucmFuZG9tUG9zaXRpb24oKSwgXG4gICAgICAgICAgICAgICAgdmVsOiBVdGlsLnJhbmRvbVZlYyhERUZBVUxUUy5TUEVFRCksIFxuICAgICAgICAgICAgICAgIHNpbXVsYXRpb246IHRoaXN9KSk7XG5cbiAgICAgICAgICAgIGlmIChpIT09MCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wZXJzb25zLmxlbmd0aC0xOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChVdGlsLmRpc3QodGhpcy5wZXJzb25zW2ldLnBvcywgdGhpcy5wZXJzb25zW2pdLnBvcykgLSBERUZBVUxUUy5SQURJVVMgKiAyKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc29uc1tpXS5wb3MgPSB0aGlzLnJhbmRvbVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBqPS0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkUGF0aWVudFplcm8oKSB7XG4gICAgICAgIHRoaXMucGVyc29uc1swXS5jb2xvciA9ICdyZWQnO1xuICAgICAgICB0aGlzLnBlcnNvbnNbMF0uaW5mZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmluZmVjdGlvbk51bWJlciA9KyAxO1xuICAgIH1cblxuICAgIGFkZENvbnNjaW91c0NpdGl6ZW4oKSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICBmb3IgKGxldCBpPTE7IGk8dGhpcy5wZXJzb25zLmxlbmd0aCAqIHRoaXMuc29jaWFsRGlzdGFuY2luZ1JhdGUrMTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0uY29uc2Npb3VzQ2l0aXplbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0udmVsID0gWzAsMF07XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0uY29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBcbiAgICByYW5kb21Qb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgcmFkID0gREVGQVVMVFMuUkFESVVTO1xuICAgICAgICBsZXQgeCA9IFV0aWwucmFuZG9tSW50UmFuZ2UocmFkLCB0aGlzLkRJTV9YIC0gcmFkKTtcbiAgICAgICAgbGV0IHkgPSBVdGlsLnJhbmRvbUludFJhbmdlKHJhZCwgdGhpcy5ESU1fWSAtIHJhZCk7XG4gICAgICAgIHJldHVybiBbeCx5XTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuRElNX1gsIHRoaXMuRElNX1kpO1xuICAgICAgICB0aGlzLnBlcnNvbnMuZm9yRWFjaCggcGVyc29uID0+IHBlcnNvbi5kcmF3KGN0eCkpO1xuICAgIH1cblxuICAgIG1vdmVPYmplY3RzKCkge1xuICAgICAgICB0aGlzLnBlcnNvbnMuZm9yRWFjaCgocGVyc29uKSA9PiB7XG4gICAgICAgICAgICBwZXJzb24ubW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVPYmplY3Qob2JqZWN0KSB7XG4gICAgICAgIHRoaXMucGVyc29ucy5zcGxpY2UodGhpcy5wZXJzb25zLmluZGV4T2Yob2JqZWN0KSwgMSlcbiAgICB9XG4gICAgXG5cbiAgICBjaGVja0NvbGxpc2lvbnMoKSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLnBlcnNvbnMubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaj1pKzE7IGo8dGhpcy5wZXJzb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBlcnMxID0gdGhpcy5wZXJzb25zW2ldO1xuICAgICAgICAgICAgICAgIGxldCBwZXJzMiA9IHRoaXMucGVyc29uc1tqXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocGVyczEuaXNDb2xsaWRlZFdpdGgocGVyczIpKSB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWwucmVzb2x2ZUNvbGxpc2lvbihwZXJzMSwgcGVyczIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBlcnMxLmNvbG9yID09PSAncmVkJyAmJiBwZXJzMi5jb2xvciAhPT0gJ3JlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnMyLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzMi5pbmZlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluZmVjdGlvbk51bWJlciArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwZXJzMi5jb2xvciA9PT0gJ3JlZCcgJiYgcGVyczEuY29sb3IgIT09ICdyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyczEuY29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzMS5pbmZlY3RlZCA9ICd0cnVlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluZmVjdGlvbk51bWJlciArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBib3VuY2UocG9zLCB2ZWwpIHtcbiAgICAgICAgbGV0IHJhZCA9IERFRkFVTFRTLlJBRElVU1xuICAgICAgICBpZiAocG9zWzBdLXJhZCA8IDAgfHwgcG9zWzBdK3JhZCA+IHRoaXMuRElNX1gpIHtcbiAgICAgICAgICAgdmVsWzBdID0gLSB2ZWxbMF0gXG4gICAgICAgIH0gZWxzZSBpZiAocG9zWzFdLXJhZCA8IDAgfHwgcG9zWzFdK3JhZCA+IHRoaXMuRElNX1kpIHtcbiAgICAgICAgICAgIHZlbFsxXSA9IC0gdmVsWzFdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZlbDtcbiAgICB9XG5cbiAgICBoYW5kbGVJbmZlY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmluZmVjdGlvbk51YmVyIC8gdGhpcy5kZW5zaXR5ID4gMC45OSkge1xuICAgICAgICAgICAgdGhpcy5wb3B1bGF0aW9uSW5mZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RlcCgpIHtcblxuICAgICAgICB0aGlzLm1vdmVPYmplY3RzKCk7XG4gICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb25zKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlSW5mZWN0aW9uKCk7XG5cbiAgICB9XG5cbn1cblxuU2ltdWxhdGlvbi5ESU1fWCA9IDYwMDtcblNpbXVsYXRpb24uRElNX1kgPSA0MDA7XG5cbiIsImltcG9ydCBTaW11bGF0aW9uIGZyb20gJy4vc2ltdWxhdGlvbic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvblZpZXcge1xuICAgIGNvbnN0cnVjdG9yKHNpbXVsYXRpb24sIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uID0gc2ltdWxhdGlvbjtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uLnNpbXVsYXRpb25JbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGlvbi5zdGVwKCk7XG4gICAgICAgICAgICB0aGlzLnNpbXVsYXRpb24uZHJhdyh0aGlzLmN0eCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zaW11bGF0aW9uLnBvcHVsYXRpb25JbmZlY3RlZCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zaW11bGF0aW9uLnNpbXVsYXRpb25JbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIwKTtcblxuICAgICAgICBcbiAgICB9XG5cbiAgICBzdG9wKHNpbXVsYXRpb24pIHtcbiAgICAgICAgXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoc2ltdWxhdGlvbi5zaW11bGF0aW9uSW50ZXJ2YWwpO1xuICAgIH1cblxufSIsImV4cG9ydCBjb25zdCBVdGlsID0ge1xuICAgLy8gUmV0dXJuIGEgcmFuZG9tbHkgb3JpZW50ZWQgdmVjdG9yIHdpdGggdGhlIGdpdmVuIGxlbmd0aC5cbiAgIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICAgIGNvbnN0IGRlZyA9IDIgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcbiAgICAgIHJldHVybiBVdGlsLnNjYWxlKFtNYXRoLnNpbihkZWcpLCBNYXRoLmNvcyhkZWcpXSwgbGVuZ3RoKTtcbiAgIH0sXG4gICAvLyBTY2FsZSB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yIGJ5IHRoZSBnaXZlbiBhbW91bnQuXG4gICBzY2FsZSh2ZWMsIG0pIHtcbiAgICAgIHJldHVybiBbdmVjWzBdICogbSwgdmVjWzFdICogbV07XG4gICB9LFxuXG4gICBkaXN0KHBvczEsIHBvczIpIHtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICAgICBNYXRoLnBvdyhwb3MxWzBdIC0gcG9zMlswXSwgMikgKyBNYXRoLnBvdyhwb3MxWzFdIC0gcG9zMlsxXSwgMilcbiAgICAgIClcbiAgIH0sXG4gICBcbiAgIHJhbmRvbUludFJhbmdlKG1pbiwgbWF4KSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgIH0sXG5cbiAgIHJvdGF0ZSh2ZWxvY2l0eSwgYW5nbGUpIHtcbiAgICAgIGNvbnN0IHJvdGF0ZWRWZWxvY2l0aWVzID0ge1xuICAgICAgICAgeDogdmVsb2NpdHlbMF0gKiBNYXRoLmNvcyhhbmdsZSkgLSB2ZWxvY2l0eVsxXSAqIE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgIHk6IHZlbG9jaXR5WzBdICogTWF0aC5zaW4oYW5nbGUpICsgdmVsb2NpdHlbMV0gKiBNYXRoLmNvcyhhbmdsZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiByb3RhdGVkVmVsb2NpdGllcztcbiAgIH0sXG5cbiAgIHJlc29sdmVDb2xsaXNpb24ocGVycywgb3RoZXJQZXJzKSB7XG5cbiAgICAgIGNvbnN0IHhWZWxEaWZmID0gcGVycy52ZWxbMF0gLSBvdGhlclBlcnMudmVsWzBdO1xuICAgICAgY29uc3QgeVZlbERpZmYgPSBwZXJzLnZlbFsxXSAtIG90aGVyUGVycy52ZWxbMV07XG5cblxuICAgICAgY29uc3QgeERpc3QgPSBvdGhlclBlcnMucG9zWzBdIC0gcGVycy5wb3NbMF07XG4gICAgICBjb25zdCB5RGlzdCA9IG90aGVyUGVycy5wb3NbMV0gLSBwZXJzLnBvc1sxXTtcblxuICAgICAgLy8gUHJldmVudCBhY2NpZGVudGFsIG92ZXJsYXAgb2YgcGVyc1xuICAgICAgaWYgKHhWZWxEaWZmICogeERpc3QgKyB5VmVsRGlmZiAqIHlEaXN0ID49IDApIHtcblxuICAgICAgICAgcGVycy52ZWwgPSBwZXJzLmNoYW5nZURpcihwZXJzLnZlbCk7XG4gICAgICAgICBvdGhlclBlcnMudmVsID0gb3RoZXJQZXJzLmNoYW5nZURpcihvdGhlclBlcnMudmVsKTtcbiAgICAgICAgIFxuICAgICAgfVxuICAgfVxuICAgLy8gcmVzb2x2ZUNvbGxpc2lvbihwZXJzLCBvdGhlclBlcnMpIHtcbiAgIC8vICAgIGNvbnN0IHhWZWxEaWZmID0gcGVycy52ZWxbMF0gLSBvdGhlclBlcnMudmVsWzBdO1xuICAgLy8gICAgY29uc3QgeVZlbERpZmYgPSBwZXJzLnZlbFsxXSAtIG90aGVyUGVycy52ZWxbMV07XG5cblxuICAgLy8gICAgY29uc3QgeERpc3QgPSBvdGhlclBlcnMucG9zWzBdIC0gcGVycy5wb3NbMF07XG4gICAvLyAgICBjb25zdCB5RGlzdCA9IG90aGVyUGVycy5wb3NbMV0gLSBwZXJzLnBvc1sxXTtcblxuICAgLy8gICAgLy8gUHJldmVudCBhY2NpZGVudGFsIG92ZXJsYXAgb2YgcGVyc1xuICAgLy8gICAgaWYgKHhWZWxEaWZmICogeERpc3QgKyB5VmVsRGlmZiAqIHlEaXN0ID49IDApIHtcblxuICAgLy8gICAgICAgLy8gR3JhYiBhbmdsZSBiZXR3ZWVuIHRoZSB0d28gY29sbGlkaW5nIHBlcnNcbiAgIC8vICAgICAgIGNvbnN0IGFuZ2xlID0gLU1hdGguYXRhbjIob3RoZXJQZXJzLnBvc1sxXSAtIHBlcnMucG9zWzFdLCBvdGhlclBlcnMucG9zWzBdIC0gcGVycy5wb3NbMF0pO1xuXG4gICAvLyAgICAgICAvLyBTdG9yZSBtYXNzIGluIHZhciBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5IGluIGNvbGxpc2lvbiBlcXVhdGlvblxuICAgLy8gICAgICAgY29uc3QgbTEgPSBwZXJzLm1hc3M7XG4gICAvLyAgICAgICBjb25zdCBtMiA9IG90aGVyUGVycy5tYXNzO1xuXG4gICAvLyAgICAgICAvLyB2ZWwgYmVmb3JlIGVxdWF0aW9uXG4gICAvLyAgICAgICBjb25zdCB1MSA9IFV0aWwucm90YXRlKHBlcnMudmVsLCBhbmdsZSk7XG4gICAvLyAgICAgICBjb25zdCB1MiA9IFV0aWwucm90YXRlKG90aGVyUGVycy52ZWwsIGFuZ2xlKTtcblxuICAgLy8gICAgICAgLy8gdmVsIGFmdGVyIDFkIGNvbGxpc2lvbiBlcXVhdGlvblxuICAgLy8gICAgICAgY29uc3QgdjEgPSBbdTEueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUyLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUxLnldO1xuICAgLy8gICAgICAgY29uc3QgdjIgPSBbdTIueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUxLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUyLnldO1xuXG4gICAvLyAgICAgICAvLyBGaW5hbCB2ZWwgYWZ0ZXIgcm90YXRpbmcgYXhpcyBiYWNrIHRvIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAvLyAgICAgICBjb25zdCB2RmluYWwxID0gVXRpbC5yb3RhdGUodjEsIC1hbmdsZSk7XG4gICAvLyAgICAgICBjb25zdCB2RmluYWwyID0gVXRpbC5yb3RhdGUodjIsIC1hbmdsZSk7XG5cbiAgIC8vICAgICAgIC8vIFN3YXAgcGVycyB2ZWxvY2l0aWVzIGZvciByZWFsaXN0aWMgYm91bmNlIGVmZmVjdFxuICAgLy8gICAgICAgcGVycy52ZWxbMF0gPSB2RmluYWwxLng7XG4gICAvLyAgICAgICBwZXJzLnZlbFsxXSA9IHZGaW5hbDEueTtcblxuICAgLy8gICAgICAgb3RoZXJQZXJzLnZlbFswXSA9IHZGaW5hbDIueDtcbiAgIC8vICAgICAgIG90aGVyUGVycy52ZWxbMV0gPSB2RmluYWwyLnk7XG4gICAvLyAgICB9XG4gICAvLyB9XG5cbiAgIC8vIHJlc29sdmVDb2xsaXNpb24ocGVycywgb3RoZXJQZXJzKSB7XG4gICAvLyAgICBjb25zdCB4VmVsRGlmZiA9IHBlcnMudmVsWzBdIC0gb3RoZXJQZXJzLnZlbFswXTtcbiAgIC8vICAgIGNvbnN0IHlWZWxEaWZmID0gcGVycy52ZWxbMV0gLSBvdGhlclBlcnMudmVsWzFdO1xuXG4gICAvLyAgICBjb25zdCB4RGlzdCA9IG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXTtcbiAgIC8vICAgIGNvbnN0IHlEaXN0ID0gb3RoZXJQZXJzLnBvc1sxXSAtIHBlcnMucG9zWzFdO1xuXG4gICAvLyAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgb3ZlcmxhcCBvZiBwZXJzXG4gICAvLyAgICBpZiAoeFZlbERpZmYgKiB4RGlzdCArIHlWZWxEaWZmICogeURpc3QgPj0gMCkge1xuXG4gICAvLyAgICAgICAvLyBHcmFiIGFuZ2xlIGJldHdlZW4gdGhlIHR3byBjb2xsaWRpbmcgcGVyc1xuICAgLy8gICAgICAgY29uc3QgYW5nbGUgPSAtTWF0aC5hdGFuMihvdGhlclBlcnMucG9zWzFdIC0gcGVycy5wb3NbMV0sIG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXSk7XG5cbiAgIC8vICAgICAgIC8vIFN0b3JlIG1hc3MgaW4gdmFyIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgaW4gY29sbGlzaW9uIGVxdWF0aW9uXG4gICAvLyAgICAgICBjb25zdCBtMSA9IHBlcnMubWFzcztcbiAgIC8vICAgICAgIGNvbnN0IG0yID0gb3RoZXJQZXJzLm1hc3M7XG5cbiAgIC8vICAgICAgIGlmIChwZXJzLmNvbnNjaW91c0NpdGl6ZW4gPT09IHRydWUpIHtcbiAgIC8vICAgICAgICAgIC8vIHZlbCBiZWZvcmUgZXF1YXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHUxID0gVXRpbC5yb3RhdGUocGVycy52ZWwsIGFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHUyID0gVXRpbC5yb3RhdGUob3RoZXJQZXJzLnZlbCwgYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyB2ZWwgYWZ0ZXIgMWQgY29sbGlzaW9uIGVxdWF0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB2MSA9IFt1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTEueV07XG4gICAvLyAgICAgICAgICBjb25zdCB2MiA9IFt1Mi54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTEueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTIueV07XG5cbiAgIC8vICAgICAgICAgIC8vIEZpbmFsIHZlbCBhZnRlciByb3RhdGluZyBheGlzIGJhY2sgdG8gb3JpZ2luYWwgbG9jYXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDEgPSBVdGlsLnJvdGF0ZSh2MSwgLWFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDIgPSBVdGlsLnJvdGF0ZSh2MiwgLWFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gU3dhcCBwZXJzIHZlbG9jaXRpZXMgZm9yIHJlYWxpc3RpYyBib3VuY2UgZWZmZWN0XG4gICAvLyAgICAgICAgICAvLyBwZXJzLnZlbFswXSA9IHZGaW5hbDEueDtcbiAgIC8vICAgICAgICAgIC8vIHBlcnMudmVsWzFdID0gdkZpbmFsMS55O1xuICAgLy8gICAgICAgICAgLy8gcGVycy52ZWxbMF0gPSAwO1xuICAgLy8gICAgICAgICAgLy8gcGVycy52ZWxbMV0gPSAwO1xuXG4gICAvLyAgICAgICAgICBvdGhlclBlcnMudmVsWzBdID0gdkZpbmFsMi54O1xuICAgLy8gICAgICAgICAgb3RoZXJQZXJzLnZlbFsxXSA9IHZGaW5hbDIueTtcblxuICAgLy8gICAgICAgfSBlbHNlIGlmIChvdGhlclBlcnMuY29uc2Npb3VzQ2l0aXplbiA9PT0gdHJ1ZSl7XG4gICAvLyAgICAgICAgICAvLyB2ZWwgYmVmb3JlIGVxdWF0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB1MSA9IFV0aWwucm90YXRlKHBlcnMudmVsLCBhbmdsZSk7XG4gICAvLyAgICAgICAgICBjb25zdCB1MiA9IFV0aWwucm90YXRlKG90aGVyUGVycy52ZWwsIGFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gdmVsIGFmdGVyIDFkIGNvbGxpc2lvbiBlcXVhdGlvblxuICBcbiAgIC8vICAgICAgICAgIGNvbnN0IHYxID0gW3UxLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1Mi54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1MS55XTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHYyID0gW3UyLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1MS54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1Mi55XTtcblxuICAgLy8gICAgICAgICAgLy8gRmluYWwgdmVsIGFmdGVyIHJvdGF0aW5nIGF4aXMgYmFjayB0byBvcmlnaW5hbCBsb2NhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdkZpbmFsMSA9IFV0aWwucm90YXRlKHYxLCAtYW5nbGUpO1xuICAgLy8gICAgICAgICAgY29uc3QgdkZpbmFsMiA9IFV0aWwucm90YXRlKHYyLCAtYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyBTd2FwIHBlcnMgdmVsb2NpdGllcyBmb3IgcmVhbGlzdGljIGJvdW5jZSBlZmZlY3RcbiAgIC8vICAgICAgICAgIHBlcnMudmVsWzBdID0gdkZpbmFsMS54O1xuICAgLy8gICAgICAgICAgcGVycy52ZWxbMV0gPSB2RmluYWwxLnk7XG5cbiAgIC8vICAgICAgICAgIC8vIG90aGVyUGVycy52ZWxbMF0gPSB2RmluYWwyLng7XG4gICAvLyAgICAgICAgICAvLyBvdGhlclBlcnMudmVsWzFdID0gdkZpbmFsMi55O1xuICAgLy8gICAgICAgICAgLy8gb3RoZXJQZXJzLnZlbFswXSA9IDA7XG4gICAvLyAgICAgICAgICAvLyBvdGhlclBlcnMudmVsWzFdID0gMDtcbiAgIC8vICAgICAgIH0gZWxzZSB7XG4gICAvLyAgICAgICAgICAvLyB2ZWwgYmVmb3JlIGVxdWF0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB1MSA9IFV0aWwucm90YXRlKHBlcnMudmVsLCBhbmdsZSk7XG4gICAvLyAgICAgICAgICBjb25zdCB1MiA9IFV0aWwucm90YXRlKG90aGVyUGVycy52ZWwsIGFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gdmVsIGFmdGVyIDFkIGNvbGxpc2lvbiBlcXVhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdjEgPSBbdTEueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUyLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUxLnldO1xuICAgLy8gICAgICAgICAgY29uc3QgdjIgPSBbdTIueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUxLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUyLnldO1xuXG4gICAvLyAgICAgICAgICAvLyBGaW5hbCB2ZWwgYWZ0ZXIgcm90YXRpbmcgYXhpcyBiYWNrIHRvIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB2RmluYWwxID0gVXRpbC5yb3RhdGUodjEsIC1hbmdsZSk7XG4gICAvLyAgICAgICAgICBjb25zdCB2RmluYWwyID0gVXRpbC5yb3RhdGUodjIsIC1hbmdsZSk7XG5cbiAgIC8vICAgICAgICAgIC8vIFN3YXAgcGVycyB2ZWxvY2l0aWVzIGZvciByZWFsaXN0aWMgYm91bmNlIGVmZmVjdFxuICAgLy8gICAgICAgICAgcGVycy52ZWxbMF0gPSB2RmluYWwxLng7XG4gICAvLyAgICAgICAgICBwZXJzLnZlbFsxXSA9IHZGaW5hbDEueTtcblxuICAgLy8gICAgICAgICAgb3RoZXJQZXJzLnZlbFswXSA9IHZGaW5hbDIueDtcbiAgIC8vICAgICAgICAgIG90aGVyUGVycy52ZWxbMV0gPSB2RmluYWwyLnk7XG4gICAvLyAgICAgICB9XG4gICAvLyAgICB9XG4gICAvLyB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==