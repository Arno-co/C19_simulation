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
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
      ctx.fill();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb3Zpbmdfb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb25fdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbDEiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiU2ltdWxhdGlvbiIsIkRJTV9YIiwiaGVpZ2h0IiwiRElNX1kiLCJjdHgxIiwiZ2V0Q29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJTaW11bGF0aW9uVmlldyIsImluZmVjdGVkTnVtYmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJkZW5zaXR5Iiwib3V0cHV0RGVuc2l0eSIsImlubmVySFRNTCIsInZhbHVlIiwib25pbnB1dCIsInMxIiwic29jaWFsRGlzdCIsIm91dHB1dFNvY2lhbERpc3QiLCJjdXJyZW50U2ltdWxhdGlvbiIsImN1cnJlbnRTaW11bGF0aW9uVmlldyIsInN0YXJ0U2ltdWxhdGlvbiIsIm9uY2xpY2siLCJzdGFydCIsInN0b3BTaW11bGF0aW9uIiwic3RvcCIsIk1vdmluZ09iamVjdCIsInBhcmFtZXRlcnMiLCJwb3MiLCJ2ZWwiLCJyYWRpdXMiLCJjb2xvciIsIm1hc3MiLCJzaW11bGF0aW9uIiwiY3R4IiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsImJvdW5jZSIsImFicyIsIm90aGVyT2JqZWN0IiwiY2VudGVyRGlzdCIsIlV0aWwiLCJkaXN0IiwicmVtb3ZlIiwiREVGQVVMVFMiLCJSQURJVVMiLCJDT0xPUiIsIlNQRUVEIiwiTUFTUyIsIlBlcnNvbiIsInJhbmRvbVBvc2l0aW9uIiwicmFuZG9tVmVjIiwiY29uc2Npb3VzQ3RpemVuIiwiaW5mZWN0ZWQiLCJzb2NpYWxEaXN0YW5jaW5nUmF0ZSIsIk5VTV9QRVJTT05TIiwicG9wdWxhdGlvbkluZmVjdGVkIiwicGVyc29ucyIsInNpbXVsYXRpb25JbnRlcnZhbCIsImluZmVjdGlvbk51bWJlciIsImFkZFBlcnNvbnMiLCJhZGRQYXRpZW50WmVybyIsImFkZENvbnNjaW91c0NpdGl6ZW4iLCJkcmF3IiwiaSIsInB1c2giLCJqIiwibGVuZ3RoIiwiY29uc2Npb3VzQ2l0aXplbiIsInJhZCIsIngiLCJyYW5kb21JbnRSYW5nZSIsInkiLCJjbGVhclJlY3QiLCJmb3JFYWNoIiwicGVyc29uIiwibW92ZSIsIm9iamVjdCIsInNwbGljZSIsImluZGV4T2YiLCJwZXJzMSIsInBlcnMyIiwiaXNDb2xsaWRlZFdpdGgiLCJyZXNvbHZlQ29sbGlzaW9uIiwiaW5mZWN0aW9uTnViZXIiLCJtb3ZlT2JqZWN0cyIsImNoZWNrQ29sbGlzaW9ucyIsImhhbmRsZUluZmVjdGlvbiIsInNldEludGVydmFsIiwic3RlcCIsImNsZWFySW50ZXJ2YWwiLCJkZWciLCJyYW5kb20iLCJzY2FsZSIsInNpbiIsImNvcyIsInZlYyIsIm0iLCJwb3MxIiwicG9zMiIsInNxcnQiLCJwb3ciLCJtaW4iLCJtYXgiLCJmbG9vciIsInJvdGF0ZSIsInZlbG9jaXR5IiwiYW5nbGUiLCJyb3RhdGVkVmVsb2NpdGllcyIsInBlcnMiLCJvdGhlclBlcnMiLCJ4VmVsRGlmZiIsInlWZWxEaWZmIiwieERpc3QiLCJ5RGlzdCIsImNoYW5nZURpciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBdktpQixDQUFiLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgU2ltdWxhdGlvbiBmcm9tICcuL3NpbXVsYXRpb24nO1xuaW1wb3J0IFNpbXVsYXRpb25WaWV3IGZyb20gJy4vc2ltdWxhdGlvbl92aWV3JztcbmltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCB7UGVyc29ufSBmcm9tICcuL3BlcnNvbic7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhc0VsMSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuXG4gICAgY2FudmFzRWwxLndpZHRoID0gU2ltdWxhdGlvbi5ESU1fWDtcbiAgICBjYW52YXNFbDEuaGVpZ2h0ID0gU2ltdWxhdGlvbi5ESU1fWTtcbiAgICBjb25zdCBjdHgxID0gY2FudmFzRWwxLmdldENvbnRleHQoXCIyZFwiKTtcblxuXG5cbiAgICBjb25zb2xlLmxvZygnd2VicGFjayBpcyB3b3JraW5nJyk7XG5cblxuICAgIHdpbmRvdy5TaW11bGF0aW9uID0gU2ltdWxhdGlvbjtcbiAgICB3aW5kb3cuU2ltdWxhdGlvblZpZXcgPSBTaW11bGF0aW9uVmlldztcblxuICAgIFxuICAgIGxldCBpbmZlY3RlZE51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mZWN0ZWQtbnVtYmVyXCIpO1xuXG5cbiAgICBsZXQgZGVuc2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1kZW5zaXR5LXJhbmdlJyk7XG4gICAgbGV0IG91dHB1dERlbnNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVuc2l0eS12YWx1ZScpO1xuXG4gICAgb3V0cHV0RGVuc2l0eS5pbm5lckhUTUwgPSBkZW5zaXR5LnZhbHVlO1xuXG4gICAgZGVuc2l0eS5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBcbiAgICAgICAgb3V0cHV0RGVuc2l0eS5pbm5lckhUTUwgPSB0aGlzLnZhbHVlO1xuICAgICAgICBsZXQgczEgPSBuZXcgU2ltdWxhdGlvbih0aGlzLnZhbHVlLCBzb2NpYWxEaXN0LnZhbHVlIC8gMTAwLCBjdHgxKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coZGVuc2l0eS52YWx1ZSk7XG5cbiAgICBsZXQgc29jaWFsRGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1zb2NpYWwtcmFuZ2UnKTtcbiAgICBsZXQgb3V0cHV0U29jaWFsRGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb2NpYWwtdmFsdWUnKTtcblxuICAgIG91dHB1dFNvY2lhbERpc3QuaW5uZXJIVE1MID0gc29jaWFsRGlzdC52YWx1ZTtcblxuICAgIHNvY2lhbERpc3Qub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3V0cHV0U29jaWFsRGlzdC5pbm5lckhUTUwgPSB0aGlzLnZhbHVlO1xuICAgICAgICBsZXQgczEgPSBuZXcgU2ltdWxhdGlvbihkZW5zaXR5LnZhbHVlLCB0aGlzLnZhbHVlIC8gMTAwLCBjdHgxKTtcbiAgICAgICAgcmV0dXJuIHMxO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzb2NpYWxEaXN0LnZhbHVlKTtcblxuICAgIGxldCBjdXJyZW50U2ltdWxhdGlvbiA9IG51bGw7XG4gICAgbGV0IGN1cnJlbnRTaW11bGF0aW9uVmlldyA9IG51bGw7XG4gICAgXG5cbiAgICBsZXQgc3RhcnRTaW11bGF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Jyk7XG4gICAgc3RhcnRTaW11bGF0aW9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN1cnJlbnRTaW11bGF0aW9uID0gbmV3IFNpbXVsYXRpb24oZGVuc2l0eS52YWx1ZSwgc29jaWFsRGlzdC52YWx1ZSAvIDEwMCwgY3R4MSk7XG4gICAgICAgIGN1cnJlbnRTaW11bGF0aW9uVmlldyA9IG5ldyBTaW11bGF0aW9uVmlldyhjdXJyZW50U2ltdWxhdGlvbiwgY3R4MSlcbiAgICAgICAgY3VycmVudFNpbXVsYXRpb25WaWV3LnN0YXJ0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTaW11bGF0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvLyBpbmZlY3RlZE51bWJlci5pbm5lckhUTUwgPSBjdXJyZW50U2ltdWxhdGlvbi5pbmZlY3Rpb25OdW1iZXI7XG4gICAgfVxuXG4gICAgXG4gICAgbGV0IHN0b3BTaW11bGF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0b3AnKTtcbiAgICBzdG9wU2ltdWxhdGlvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjdXJyZW50U2ltdWxhdGlvblZpZXcuc3RvcChjdXJyZW50U2ltdWxhdGlvbik7XG4gICAgfVxuICAgIFxuICAgIGxldCBzMSA9IG5ldyBTaW11bGF0aW9uKGRlbnNpdHkudmFsdWUsIHNvY2lhbERpc3QudmFsdWUgLyAxMDAsIGN0eDEpO1xuICAgIGNvbnNvbGUubG9nKHMxKTtcblxuICAgIFxufSk7IiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgU2ltdWxhdGlvbiBmcm9tICcuL3NpbXVsYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnBvcyAgPSBwYXJhbWV0ZXJzLnBvcztcbiAgICB0aGlzLnZlbCAgPSBwYXJhbWV0ZXJzLnZlbDtcbiAgICB0aGlzLnJhZGl1cyAgPSBwYXJhbWV0ZXJzLnJhZGl1cztcbiAgICB0aGlzLmNvbG9yICA9IHBhcmFtZXRlcnMuY29sb3I7XG4gICAgdGhpcy5tYXNzID0gcGFyYW1ldGVycy5tYXNzO1xuICAgIHRoaXMuc2ltdWxhdGlvbiA9IHBhcmFtZXRlcnMuc2ltdWxhdGlvbjtcbiAgICB9XG5cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICB0aGlzLnBvc1swXSxcbiAgICAgICAgICAgIHRoaXMucG9zWzFdLFxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBbKHRoaXMucG9zWzBdICsgdGhpcy52ZWxbMF0pLCAodGhpcy5wb3NbMV0gKyB0aGlzLnZlbFsxXSldXG4gICAgICAgIHRoaXMudmVsID0gdGhpcy5zaW11bGF0aW9uLmJvdW5jZSh0aGlzLnBvcywgdGhpcy52ZWwpO1xuICAgIH07XG5cbiAgICBjaGFuZ2VEaXIodmVsKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoTWF0aC5hYnModmVsWzBdKSA+IE1hdGguYWJzKHZlbFsxXSkpIHtcbiAgICAgICAgICAgIHZlbFswXSA9IC0gdmVsWzBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2ZWxbMV0gPSAtIHZlbFsxXVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdmVsO1xuICAgIH1cbiAgICBcbiAgICBpc0NvbGxpZGVkV2l0aChvdGhlck9iamVjdCkge1xuICAgICAgICBjb25zdCBjZW50ZXJEaXN0ID0gVXRpbC5kaXN0KHRoaXMucG9zLCBvdGhlck9iamVjdC5wb3MpO1xuICAgICAgICBpZiAoY2VudGVyRGlzdCA8ICh0aGlzLnJhZGl1cyArIG90aGVyT2JqZWN0LnJhZGl1cykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICB0aGlzLnNpbXVsYXRpb24ucmVtb3ZlKHRoaXMpO1xuICAgIH1cblxuIH1cblxuXG4iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL21vdmluZ19vYmplY3RcIjtcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVFMgPSB7XG4gICAgUkFESVVTOiAyLFxuICAgIENPTE9SOiBcIiMwMDAwNjZcIixcbiAgICBTUEVFRDogMixcbiAgICBNQVNTOiAxXG59XG5cbmV4cG9ydCBjbGFzcyBQZXJzb24gZXh0ZW5kcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMgPSB7fSkge1xuICAgICAgICBwYXJhbWV0ZXJzLmNvbG9yID0gREVGQVVMVFMuQ09MT1I7XG4gICAgICAgIHBhcmFtZXRlcnMucmFkaXVzID0gREVGQVVMVFMuUkFESVVTO1xuICAgICAgICBwYXJhbWV0ZXJzLm1hc3MgPSBERUZBVUxUUy5NQVNTO1xuICAgICAgICBwYXJhbWV0ZXJzLnBvcyA9IHBhcmFtZXRlcnMucG9zIHx8IHBhcmFtZXRlcnMuc2ltdWxhdGlvbi5yYW5kb21Qb3NpdGlvbigpO1xuICAgICAgICBwYXJhbWV0ZXJzLnZlbCA9IHBhcmFtZXRlcnMudmVsIHx8IFV0aWwucmFuZG9tVmVjKERFRkFVTFRTLlNQRUVEKTtcbiAgICAgICAgcGFyYW1ldGVycy5jb25zY2lvdXNDdGl6ZW4gPSBmYWxzZTtcbiAgICAgICAgcGFyYW1ldGVycy5pbmZlY3RlZCA9IGZhbHNlO1xuICAgICAgICBzdXBlcihwYXJhbWV0ZXJzKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQge1BlcnNvbiwgREVGQVVMVFN9IGZyb20gJy4vcGVyc29uJztcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBTaW11bGF0aW9uVmlldyBmcm9tICcuL3NpbXVsYXRpb25fdmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXVsYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGRlbnNpdHksIHNvY2lhbERpc3RhbmNpbmdSYXRlLCBjdHgpIHtcbiAgICAgICAgdGhpcy5ESU1fWCA9IDYwMDtcbiAgICAgICAgdGhpcy5ESU1fWSA9IDQwMDtcbiAgICAgICAgdGhpcy5OVU1fUEVSU09OUyA9IDEwMDtcbiAgICAgICAgdGhpcy5kZW5zaXR5ID0gZGVuc2l0eTtcbiAgICAgICAgdGhpcy5zb2NpYWxEaXN0YW5jaW5nUmF0ZSA9IHNvY2lhbERpc3RhbmNpbmdSYXRlO1xuICAgICAgICB0aGlzLnBvcHVsYXRpb25JbmZlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBlcnNvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB0aGlzLmluZmVjdGlvbk51bWJlciA9IDA7XG4gICAgICAgIHRoaXMuYWRkUGVyc29ucygpO1xuICAgICAgICB0aGlzLmFkZFBhdGllbnRaZXJvKCk7XG4gICAgICAgIHRoaXMuYWRkQ29uc2Npb3VzQ2l0aXplbigpO1xuICAgICAgICB0aGlzLmRyYXcoY3R4KTtcbiAgICB9XG5cblxuXG4gICAgYWRkUGVyc29ucygpIHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5kZW5zaXR5OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGVyc29ucy5wdXNoKG5ldyBQZXJzb24oe1xuICAgICAgICAgICAgICAgIHBvczogdGhpcy5yYW5kb21Qb3NpdGlvbigpLCBcbiAgICAgICAgICAgICAgICB2ZWw6IFV0aWwucmFuZG9tVmVjKERFRkFVTFRTLlNQRUVEKSwgXG4gICAgICAgICAgICAgICAgc2ltdWxhdGlvbjogdGhpc30pKTtcblxuICAgICAgICAgICAgaWYgKGkhPT0wKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnBlcnNvbnMubGVuZ3RoLTE7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKFV0aWwuZGlzdCh0aGlzLnBlcnNvbnNbaV0ucG9zLCB0aGlzLnBlcnNvbnNbal0ucG9zKSAtIERFRkFVTFRTLlJBRElVUyAqIDIpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzb25zW2ldLnBvcyA9IHRoaXMucmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGo9LTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRQYXRpZW50WmVybygpIHtcbiAgICAgICAgdGhpcy5wZXJzb25zWzBdLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgIHRoaXMucGVyc29uc1swXS5pbmZlY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5mZWN0aW9uTnVtYmVyID0rIDE7XG4gICAgfVxuXG4gICAgYWRkQ29uc2Npb3VzQ2l0aXplbigpIHtcbiAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgIGZvciAobGV0IGk9MTsgaTx0aGlzLnBlcnNvbnMubGVuZ3RoICogdGhpcy5zb2NpYWxEaXN0YW5jaW5nUmF0ZSsxOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGVyc29uc1tpXS5jb25zY2lvdXNDaXRpemVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucGVyc29uc1tpXS52ZWwgPSBbMCwwXTtcbiAgICAgICAgICAgIHRoaXMucGVyc29uc1tpXS5jb2xvciA9ICdncmVlbic7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIFxuICAgIHJhbmRvbVBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCByYWQgPSBERUZBVUxUUy5SQURJVVM7XG4gICAgICAgIGxldCB4ID0gVXRpbC5yYW5kb21JbnRSYW5nZShyYWQsIHRoaXMuRElNX1ggLSByYWQpO1xuICAgICAgICBsZXQgeSA9IFV0aWwucmFuZG9tSW50UmFuZ2UocmFkLCB0aGlzLkRJTV9ZIC0gcmFkKTtcbiAgICAgICAgcmV0dXJuIFt4LHldO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5ESU1fWCwgdGhpcy5ESU1fWSk7XG4gICAgICAgIHRoaXMucGVyc29ucy5mb3JFYWNoKCBwZXJzb24gPT4gcGVyc29uLmRyYXcoY3R4KSk7XG4gICAgfVxuXG4gICAgbW92ZU9iamVjdHMoKSB7XG4gICAgICAgIHRoaXMucGVyc29ucy5mb3JFYWNoKChwZXJzb24pID0+IHtcbiAgICAgICAgICAgIHBlcnNvbi5tb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbW92ZU9iamVjdChvYmplY3QpIHtcbiAgICAgICAgdGhpcy5wZXJzb25zLnNwbGljZSh0aGlzLnBlcnNvbnMuaW5kZXhPZihvYmplY3QpLCAxKVxuICAgIH1cbiAgICBcblxuICAgIGNoZWNrQ29sbGlzaW9ucygpIHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMucGVyc29ucy5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqPWkrMTsgajx0aGlzLnBlcnNvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcGVyczEgPSB0aGlzLnBlcnNvbnNbaV07XG4gICAgICAgICAgICAgICAgbGV0IHBlcnMyID0gdGhpcy5wZXJzb25zW2pdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChwZXJzMS5pc0NvbGxpZGVkV2l0aChwZXJzMikpIHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbC5yZXNvbHZlQ29sbGlzaW9uKHBlcnMxLCBwZXJzMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGVyczEuY29sb3IgPT09ICdyZWQnICYmIHBlcnMyLmNvbG9yICE9PSAncmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGVyczIuY29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnMyLmluZmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5mZWN0aW9uTnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBlcnMyLmNvbG9yID09PSAncmVkJyAmJiBwZXJzMS5jb2xvciAhPT0gJ3JlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzMS5jb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnMxLmluZmVjdGVkID0gJ3RydWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5mZWN0aW9uTnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGJvdW5jZShwb3MsIHZlbCkge1xuICAgICAgICBsZXQgcmFkID0gREVGQVVMVFMuUkFESVVTXG4gICAgICAgIGlmIChwb3NbMF0tcmFkIDwgMCB8fCBwb3NbMF0rcmFkID4gdGhpcy5ESU1fWCkge1xuICAgICAgICAgICB2ZWxbMF0gPSAtIHZlbFswXSBcbiAgICAgICAgfSBlbHNlIGlmIChwb3NbMV0tcmFkIDwgMCB8fCBwb3NbMV0rcmFkID4gdGhpcy5ESU1fWSkge1xuICAgICAgICAgICAgdmVsWzFdID0gLSB2ZWxbMV1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmVsO1xuICAgIH1cblxuICAgIGhhbmRsZUluZmVjdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5mZWN0aW9uTnViZXIgLyB0aGlzLmRlbnNpdHkgPiAwLjk5KSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRpb25JbmZlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGVwKCkge1xuXG4gICAgICAgIHRoaXMubW92ZU9iamVjdHMoKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbnMoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVJbmZlY3Rpb24oKTtcblxuICAgIH1cblxufVxuXG5TaW11bGF0aW9uLkRJTV9YID0gNjAwO1xuU2ltdWxhdGlvbi5ESU1fWSA9IDQwMDtcblxuIiwiaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnLi9zaW11bGF0aW9uJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW11bGF0aW9uVmlldyB7XG4gICAgY29uc3RydWN0b3Ioc2ltdWxhdGlvbiwgY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnNpbXVsYXRpb24gPSBzaW11bGF0aW9uO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnNpbXVsYXRpb24uc2ltdWxhdGlvbkludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaW11bGF0aW9uLnN0ZXAoKTtcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGlvbi5kcmF3KHRoaXMuY3R4KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbXVsYXRpb24ucG9wdWxhdGlvbkluZmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNpbXVsYXRpb24uc2ltdWxhdGlvbkludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjApO1xuXG4gICAgICAgIFxuICAgIH1cblxuICAgIHN0b3Aoc2ltdWxhdGlvbikge1xuICAgICAgICBcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzaW11bGF0aW9uLnNpbXVsYXRpb25JbnRlcnZhbCk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGNvbnN0IFV0aWwgPSB7XG4gICAvLyBSZXR1cm4gYSByYW5kb21seSBvcmllbnRlZCB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gbGVuZ3RoLlxuICAgcmFuZG9tVmVjKGxlbmd0aCkge1xuICAgICAgY29uc3QgZGVnID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgcmV0dXJuIFV0aWwuc2NhbGUoW01hdGguc2luKGRlZyksIE1hdGguY29zKGRlZyldLCBsZW5ndGgpO1xuICAgfSxcbiAgIC8vIFNjYWxlIHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgYnkgdGhlIGdpdmVuIGFtb3VudC5cbiAgIHNjYWxlKHZlYywgbSkge1xuICAgICAgcmV0dXJuIFt2ZWNbMF0gKiBtLCB2ZWNbMV0gKiBtXTtcbiAgIH0sXG5cbiAgIGRpc3QocG9zMSwgcG9zMikge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgICAgIE1hdGgucG93KHBvczFbMF0gLSBwb3MyWzBdLCAyKSArIE1hdGgucG93KHBvczFbMV0gLSBwb3MyWzFdLCAyKVxuICAgICAgKVxuICAgfSxcbiAgIFxuICAgcmFuZG9tSW50UmFuZ2UobWluLCBtYXgpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICAgfSxcblxuICAgcm90YXRlKHZlbG9jaXR5LCBhbmdsZSkge1xuICAgICAgY29uc3Qgcm90YXRlZFZlbG9jaXRpZXMgPSB7XG4gICAgICAgICB4OiB2ZWxvY2l0eVswXSAqIE1hdGguY29zKGFuZ2xlKSAtIHZlbG9jaXR5WzFdICogTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgeTogdmVsb2NpdHlbMF0gKiBNYXRoLnNpbihhbmdsZSkgKyB2ZWxvY2l0eVsxXSAqIE1hdGguY29zKGFuZ2xlKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdGF0ZWRWZWxvY2l0aWVzO1xuICAgfSxcblxuICAgcmVzb2x2ZUNvbGxpc2lvbihwZXJzLCBvdGhlclBlcnMpIHtcblxuICAgICAgY29uc3QgeFZlbERpZmYgPSBwZXJzLnZlbFswXSAtIG90aGVyUGVycy52ZWxbMF07XG4gICAgICBjb25zdCB5VmVsRGlmZiA9IHBlcnMudmVsWzFdIC0gb3RoZXJQZXJzLnZlbFsxXTtcblxuXG4gICAgICBjb25zdCB4RGlzdCA9IG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXTtcbiAgICAgIGNvbnN0IHlEaXN0ID0gb3RoZXJQZXJzLnBvc1sxXSAtIHBlcnMucG9zWzFdO1xuXG4gICAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgb3ZlcmxhcCBvZiBwZXJzXG4gICAgICBpZiAoeFZlbERpZmYgKiB4RGlzdCArIHlWZWxEaWZmICogeURpc3QgPj0gMCkge1xuXG4gICAgICAgICBwZXJzLnZlbCA9IHBlcnMuY2hhbmdlRGlyKHBlcnMudmVsKTtcbiAgICAgICAgIG90aGVyUGVycy52ZWwgPSBvdGhlclBlcnMuY2hhbmdlRGlyKG90aGVyUGVycy52ZWwpO1xuICAgICAgICAgXG4gICAgICB9XG4gICB9XG4gICAvLyByZXNvbHZlQ29sbGlzaW9uKHBlcnMsIG90aGVyUGVycykge1xuICAgLy8gICAgY29uc3QgeFZlbERpZmYgPSBwZXJzLnZlbFswXSAtIG90aGVyUGVycy52ZWxbMF07XG4gICAvLyAgICBjb25zdCB5VmVsRGlmZiA9IHBlcnMudmVsWzFdIC0gb3RoZXJQZXJzLnZlbFsxXTtcblxuXG4gICAvLyAgICBjb25zdCB4RGlzdCA9IG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXTtcbiAgIC8vICAgIGNvbnN0IHlEaXN0ID0gb3RoZXJQZXJzLnBvc1sxXSAtIHBlcnMucG9zWzFdO1xuXG4gICAvLyAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgb3ZlcmxhcCBvZiBwZXJzXG4gICAvLyAgICBpZiAoeFZlbERpZmYgKiB4RGlzdCArIHlWZWxEaWZmICogeURpc3QgPj0gMCkge1xuXG4gICAvLyAgICAgICAvLyBHcmFiIGFuZ2xlIGJldHdlZW4gdGhlIHR3byBjb2xsaWRpbmcgcGVyc1xuICAgLy8gICAgICAgY29uc3QgYW5nbGUgPSAtTWF0aC5hdGFuMihvdGhlclBlcnMucG9zWzFdIC0gcGVycy5wb3NbMV0sIG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXSk7XG5cbiAgIC8vICAgICAgIC8vIFN0b3JlIG1hc3MgaW4gdmFyIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgaW4gY29sbGlzaW9uIGVxdWF0aW9uXG4gICAvLyAgICAgICBjb25zdCBtMSA9IHBlcnMubWFzcztcbiAgIC8vICAgICAgIGNvbnN0IG0yID0gb3RoZXJQZXJzLm1hc3M7XG5cbiAgIC8vICAgICAgIC8vIHZlbCBiZWZvcmUgZXF1YXRpb25cbiAgIC8vICAgICAgIGNvbnN0IHUxID0gVXRpbC5yb3RhdGUocGVycy52ZWwsIGFuZ2xlKTtcbiAgIC8vICAgICAgIGNvbnN0IHUyID0gVXRpbC5yb3RhdGUob3RoZXJQZXJzLnZlbCwgYW5nbGUpO1xuXG4gICAvLyAgICAgICAvLyB2ZWwgYWZ0ZXIgMWQgY29sbGlzaW9uIGVxdWF0aW9uXG4gICAvLyAgICAgICBjb25zdCB2MSA9IFt1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTEueV07XG4gICAvLyAgICAgICBjb25zdCB2MiA9IFt1Mi54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTEueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTIueV07XG5cbiAgIC8vICAgICAgIC8vIEZpbmFsIHZlbCBhZnRlciByb3RhdGluZyBheGlzIGJhY2sgdG8gb3JpZ2luYWwgbG9jYXRpb25cbiAgIC8vICAgICAgIGNvbnN0IHZGaW5hbDEgPSBVdGlsLnJvdGF0ZSh2MSwgLWFuZ2xlKTtcbiAgIC8vICAgICAgIGNvbnN0IHZGaW5hbDIgPSBVdGlsLnJvdGF0ZSh2MiwgLWFuZ2xlKTtcblxuICAgLy8gICAgICAgLy8gU3dhcCBwZXJzIHZlbG9jaXRpZXMgZm9yIHJlYWxpc3RpYyBib3VuY2UgZWZmZWN0XG4gICAvLyAgICAgICBwZXJzLnZlbFswXSA9IHZGaW5hbDEueDtcbiAgIC8vICAgICAgIHBlcnMudmVsWzFdID0gdkZpbmFsMS55O1xuXG4gICAvLyAgICAgICBvdGhlclBlcnMudmVsWzBdID0gdkZpbmFsMi54O1xuICAgLy8gICAgICAgb3RoZXJQZXJzLnZlbFsxXSA9IHZGaW5hbDIueTtcbiAgIC8vICAgIH1cbiAgIC8vIH1cblxuICAgLy8gcmVzb2x2ZUNvbGxpc2lvbihwZXJzLCBvdGhlclBlcnMpIHtcbiAgIC8vICAgIGNvbnN0IHhWZWxEaWZmID0gcGVycy52ZWxbMF0gLSBvdGhlclBlcnMudmVsWzBdO1xuICAgLy8gICAgY29uc3QgeVZlbERpZmYgPSBwZXJzLnZlbFsxXSAtIG90aGVyUGVycy52ZWxbMV07XG5cbiAgIC8vICAgIGNvbnN0IHhEaXN0ID0gb3RoZXJQZXJzLnBvc1swXSAtIHBlcnMucG9zWzBdO1xuICAgLy8gICAgY29uc3QgeURpc3QgPSBvdGhlclBlcnMucG9zWzFdIC0gcGVycy5wb3NbMV07XG5cbiAgIC8vICAgIC8vIFByZXZlbnQgYWNjaWRlbnRhbCBvdmVybGFwIG9mIHBlcnNcbiAgIC8vICAgIGlmICh4VmVsRGlmZiAqIHhEaXN0ICsgeVZlbERpZmYgKiB5RGlzdCA+PSAwKSB7XG5cbiAgIC8vICAgICAgIC8vIEdyYWIgYW5nbGUgYmV0d2VlbiB0aGUgdHdvIGNvbGxpZGluZyBwZXJzXG4gICAvLyAgICAgICBjb25zdCBhbmdsZSA9IC1NYXRoLmF0YW4yKG90aGVyUGVycy5wb3NbMV0gLSBwZXJzLnBvc1sxXSwgb3RoZXJQZXJzLnBvc1swXSAtIHBlcnMucG9zWzBdKTtcblxuICAgLy8gICAgICAgLy8gU3RvcmUgbWFzcyBpbiB2YXIgZm9yIGJldHRlciByZWFkYWJpbGl0eSBpbiBjb2xsaXNpb24gZXF1YXRpb25cbiAgIC8vICAgICAgIGNvbnN0IG0xID0gcGVycy5tYXNzO1xuICAgLy8gICAgICAgY29uc3QgbTIgPSBvdGhlclBlcnMubWFzcztcblxuICAgLy8gICAgICAgaWYgKHBlcnMuY29uc2Npb3VzQ2l0aXplbiA9PT0gdHJ1ZSkge1xuICAgLy8gICAgICAgICAgLy8gdmVsIGJlZm9yZSBlcXVhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdTEgPSBVdGlsLnJvdGF0ZShwZXJzLnZlbCwgYW5nbGUpO1xuICAgLy8gICAgICAgICAgY29uc3QgdTIgPSBVdGlsLnJvdGF0ZShvdGhlclBlcnMudmVsLCBhbmdsZSk7XG5cbiAgIC8vICAgICAgICAgIC8vIHZlbCBhZnRlciAxZCBjb2xsaXNpb24gZXF1YXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHYxID0gW3UxLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1Mi54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1MS55XTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHYyID0gW3UyLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1MS54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1Mi55XTtcblxuICAgLy8gICAgICAgICAgLy8gRmluYWwgdmVsIGFmdGVyIHJvdGF0aW5nIGF4aXMgYmFjayB0byBvcmlnaW5hbCBsb2NhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdkZpbmFsMSA9IFV0aWwucm90YXRlKHYxLCAtYW5nbGUpO1xuICAgLy8gICAgICAgICAgY29uc3QgdkZpbmFsMiA9IFV0aWwucm90YXRlKHYyLCAtYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyBTd2FwIHBlcnMgdmVsb2NpdGllcyBmb3IgcmVhbGlzdGljIGJvdW5jZSBlZmZlY3RcbiAgIC8vICAgICAgICAgIC8vIHBlcnMudmVsWzBdID0gdkZpbmFsMS54O1xuICAgLy8gICAgICAgICAgLy8gcGVycy52ZWxbMV0gPSB2RmluYWwxLnk7XG4gICAvLyAgICAgICAgICAvLyBwZXJzLnZlbFswXSA9IDA7XG4gICAvLyAgICAgICAgICAvLyBwZXJzLnZlbFsxXSA9IDA7XG5cbiAgIC8vICAgICAgICAgIG90aGVyUGVycy52ZWxbMF0gPSB2RmluYWwyLng7XG4gICAvLyAgICAgICAgICBvdGhlclBlcnMudmVsWzFdID0gdkZpbmFsMi55O1xuXG4gICAvLyAgICAgICB9IGVsc2UgaWYgKG90aGVyUGVycy5jb25zY2lvdXNDaXRpemVuID09PSB0cnVlKXtcbiAgIC8vICAgICAgICAgIC8vIHZlbCBiZWZvcmUgZXF1YXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHUxID0gVXRpbC5yb3RhdGUocGVycy52ZWwsIGFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHUyID0gVXRpbC5yb3RhdGUob3RoZXJQZXJzLnZlbCwgYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyB2ZWwgYWZ0ZXIgMWQgY29sbGlzaW9uIGVxdWF0aW9uXG4gIFxuICAgLy8gICAgICAgICAgY29uc3QgdjEgPSBbdTEueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUyLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUxLnldO1xuICAgLy8gICAgICAgICAgY29uc3QgdjIgPSBbdTIueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUxLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUyLnldO1xuXG4gICAvLyAgICAgICAgICAvLyBGaW5hbCB2ZWwgYWZ0ZXIgcm90YXRpbmcgYXhpcyBiYWNrIHRvIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB2RmluYWwxID0gVXRpbC5yb3RhdGUodjEsIC1hbmdsZSk7XG4gICAvLyAgICAgICAgICBjb25zdCB2RmluYWwyID0gVXRpbC5yb3RhdGUodjIsIC1hbmdsZSk7XG5cbiAgIC8vICAgICAgICAgIC8vIFN3YXAgcGVycyB2ZWxvY2l0aWVzIGZvciByZWFsaXN0aWMgYm91bmNlIGVmZmVjdFxuICAgLy8gICAgICAgICAgcGVycy52ZWxbMF0gPSB2RmluYWwxLng7XG4gICAvLyAgICAgICAgICBwZXJzLnZlbFsxXSA9IHZGaW5hbDEueTtcblxuICAgLy8gICAgICAgICAgLy8gb3RoZXJQZXJzLnZlbFswXSA9IHZGaW5hbDIueDtcbiAgIC8vICAgICAgICAgIC8vIG90aGVyUGVycy52ZWxbMV0gPSB2RmluYWwyLnk7XG4gICAvLyAgICAgICAgICAvLyBvdGhlclBlcnMudmVsWzBdID0gMDtcbiAgIC8vICAgICAgICAgIC8vIG90aGVyUGVycy52ZWxbMV0gPSAwO1xuICAgLy8gICAgICAgfSBlbHNlIHtcbiAgIC8vICAgICAgICAgIC8vIHZlbCBiZWZvcmUgZXF1YXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHUxID0gVXRpbC5yb3RhdGUocGVycy52ZWwsIGFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHUyID0gVXRpbC5yb3RhdGUob3RoZXJQZXJzLnZlbCwgYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyB2ZWwgYWZ0ZXIgMWQgY29sbGlzaW9uIGVxdWF0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB2MSA9IFt1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTEueV07XG4gICAvLyAgICAgICAgICBjb25zdCB2MiA9IFt1Mi54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTEueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTIueV07XG5cbiAgIC8vICAgICAgICAgIC8vIEZpbmFsIHZlbCBhZnRlciByb3RhdGluZyBheGlzIGJhY2sgdG8gb3JpZ2luYWwgbG9jYXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDEgPSBVdGlsLnJvdGF0ZSh2MSwgLWFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDIgPSBVdGlsLnJvdGF0ZSh2MiwgLWFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gU3dhcCBwZXJzIHZlbG9jaXRpZXMgZm9yIHJlYWxpc3RpYyBib3VuY2UgZWZmZWN0XG4gICAvLyAgICAgICAgICBwZXJzLnZlbFswXSA9IHZGaW5hbDEueDtcbiAgIC8vICAgICAgICAgIHBlcnMudmVsWzFdID0gdkZpbmFsMS55O1xuXG4gICAvLyAgICAgICAgICBvdGhlclBlcnMudmVsWzBdID0gdkZpbmFsMi54O1xuICAgLy8gICAgICAgICAgb3RoZXJQZXJzLnZlbFsxXSA9IHZGaW5hbDIueTtcbiAgIC8vICAgICAgIH1cbiAgIC8vICAgIH1cbiAgIC8vIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9