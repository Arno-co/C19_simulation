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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var DEFAULTS = {
  RADIUS: 2,
  COLOR: "lightgray",
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
      if (this.infectionNumber / this.density > 0.99) {
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
          clearInterval(_this.simulation.simulationInterval); // this.stop(this.simulation)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb3Zpbmdfb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb25fdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbDEiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiU2ltdWxhdGlvbiIsIkRJTV9YIiwiaGVpZ2h0IiwiRElNX1kiLCJjdHgxIiwiZ2V0Q29udGV4dCIsIndpbmRvdyIsIlNpbXVsYXRpb25WaWV3IiwiaW5mZWN0ZWROdW1iZXIiLCJnZXRFbGVtZW50QnlJZCIsImRlbnNpdHkiLCJvdXRwdXREZW5zaXR5IiwiaW5uZXJIVE1MIiwidmFsdWUiLCJvbmlucHV0IiwiczEiLCJzb2NpYWxEaXN0IiwiY29uc29sZSIsImxvZyIsIm91dHB1dFNvY2lhbERpc3QiLCJjdXJyZW50U2ltdWxhdGlvbiIsImN1cnJlbnRTaW11bGF0aW9uVmlldyIsInN0YXJ0U2ltdWxhdGlvbiIsIm9uY2xpY2siLCJzdGFydCIsInN0b3BTaW11bGF0aW9uIiwic3RvcCIsIk1vdmluZ09iamVjdCIsInBhcmFtZXRlcnMiLCJwb3MiLCJ2ZWwiLCJyYWRpdXMiLCJjb2xvciIsIm1hc3MiLCJzaW11bGF0aW9uIiwiY3R4IiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsImJvdW5jZSIsImFicyIsIm90aGVyT2JqZWN0IiwiY2VudGVyRGlzdCIsIlV0aWwiLCJkaXN0IiwicmVtb3ZlIiwiREVGQVVMVFMiLCJSQURJVVMiLCJDT0xPUiIsIlNQRUVEIiwiTUFTUyIsIlBlcnNvbiIsInJhbmRvbVBvc2l0aW9uIiwicmFuZG9tVmVjIiwiY29uc2Npb3VzQ3RpemVuIiwiaW5mZWN0ZWQiLCJzb2NpYWxEaXN0YW5jaW5nUmF0ZSIsIk5VTV9QRVJTT05TIiwicG9wdWxhdGlvbkluZmVjdGVkIiwicGVyc29ucyIsInNpbXVsYXRpb25JbnRlcnZhbCIsImluZmVjdGlvbk51bWJlciIsImFkZFBlcnNvbnMiLCJhZGRQYXRpZW50WmVybyIsImFkZENvbnNjaW91c0NpdGl6ZW4iLCJkcmF3IiwiaSIsInB1c2giLCJqIiwibGVuZ3RoIiwiY29uc2Npb3VzQ2l0aXplbiIsInJhZCIsIngiLCJyYW5kb21JbnRSYW5nZSIsInkiLCJjbGVhclJlY3QiLCJmb3JFYWNoIiwicGVyc29uIiwibW92ZSIsIm9iamVjdCIsInNwbGljZSIsImluZGV4T2YiLCJwZXJzMSIsInBlcnMyIiwiaXNDb2xsaWRlZFdpdGgiLCJyZXNvbHZlQ29sbGlzaW9uIiwibW92ZU9iamVjdHMiLCJjaGVja0NvbGxpc2lvbnMiLCJoYW5kbGVJbmZlY3Rpb24iLCJzZXRJbnRlcnZhbCIsInN0ZXAiLCJjbGVhckludGVydmFsIiwiZGVnIiwicmFuZG9tIiwic2NhbGUiLCJzaW4iLCJjb3MiLCJ2ZWMiLCJtIiwicG9zMSIsInBvczIiLCJzcXJ0IiwicG93IiwibWluIiwibWF4IiwiZmxvb3IiLCJyb3RhdGUiLCJ2ZWxvY2l0eSIsImFuZ2xlIiwicm90YXRlZFZlbG9jaXRpZXMiLCJwZXJzIiwib3RoZXJQZXJzIiwieFZlbERpZmYiLCJ5VmVsRGlmZiIsInhEaXN0IiwieURpc3QiLCJjaGFuZ2VEaXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FB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QTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF2S2lCLENBQWIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBTaW11bGF0aW9uIGZyb20gJy4vc2ltdWxhdGlvbic7XG5pbXBvcnQgU2ltdWxhdGlvblZpZXcgZnJvbSAnLi9zaW11bGF0aW9uX3ZpZXcnO1xuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL21vdmluZ19vYmplY3QnO1xuaW1wb3J0IHtQZXJzb259IGZyb20gJy4vcGVyc29uJztcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzRWwxID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG5cbiAgICBjYW52YXNFbDEud2lkdGggPSBTaW11bGF0aW9uLkRJTV9YO1xuICAgIGNhbnZhc0VsMS5oZWlnaHQgPSBTaW11bGF0aW9uLkRJTV9ZO1xuICAgIGNvbnN0IGN0eDEgPSBjYW52YXNFbDEuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgd2luZG93LlNpbXVsYXRpb24gPSBTaW11bGF0aW9uO1xuICAgIHdpbmRvdy5TaW11bGF0aW9uVmlldyA9IFNpbXVsYXRpb25WaWV3O1xuXG4gICAgXG4gICAgbGV0IGluZmVjdGVkTnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZlY3RlZC1udW1iZXJcIik7XG5cblxuICAgIGxldCBkZW5zaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWRlbnNpdHktcmFuZ2UnKTtcbiAgICBsZXQgb3V0cHV0RGVuc2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZW5zaXR5LXZhbHVlJyk7XG5cbiAgICBvdXRwdXREZW5zaXR5LmlubmVySFRNTCA9IGRlbnNpdHkudmFsdWU7XG5cbiAgICBkZW5zaXR5Lm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFxuICAgICAgICBvdXRwdXREZW5zaXR5LmlubmVySFRNTCA9IHRoaXMudmFsdWU7XG4gICAgICAgIGxldCBzMSA9IG5ldyBTaW11bGF0aW9uKHRoaXMudmFsdWUsIHNvY2lhbERpc3QudmFsdWUgLyAxMDAsIGN0eDEpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkZW5zaXR5LnZhbHVlKTtcblxuICAgIGxldCBzb2NpYWxEaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LXNvY2lhbC1yYW5nZScpO1xuICAgIGxldCBvdXRwdXRTb2NpYWxEaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvY2lhbC12YWx1ZScpO1xuXG4gICAgb3V0cHV0U29jaWFsRGlzdC5pbm5lckhUTUwgPSBzb2NpYWxEaXN0LnZhbHVlO1xuXG4gICAgc29jaWFsRGlzdC5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBvdXRwdXRTb2NpYWxEaXN0LmlubmVySFRNTCA9IHRoaXMudmFsdWU7XG4gICAgICAgIGxldCBzMSA9IG5ldyBTaW11bGF0aW9uKGRlbnNpdHkudmFsdWUsIHRoaXMudmFsdWUgLyAxMDAsIGN0eDEpO1xuICAgICAgICByZXR1cm4gczE7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHNvY2lhbERpc3QudmFsdWUpO1xuXG4gICAgbGV0IGN1cnJlbnRTaW11bGF0aW9uID0gbnVsbDtcbiAgICBsZXQgY3VycmVudFNpbXVsYXRpb25WaWV3ID0gbnVsbDtcbiAgICBcblxuICAgIGxldCBzdGFydFNpbXVsYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKTtcbiAgICBzdGFydFNpbXVsYXRpb24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3VycmVudFNpbXVsYXRpb24gPSBuZXcgU2ltdWxhdGlvbihkZW5zaXR5LnZhbHVlLCBzb2NpYWxEaXN0LnZhbHVlIC8gMTAwLCBjdHgxKTtcbiAgICAgICAgY3VycmVudFNpbXVsYXRpb25WaWV3ID0gbmV3IFNpbXVsYXRpb25WaWV3KGN1cnJlbnRTaW11bGF0aW9uLCBjdHgxKVxuICAgICAgICBjdXJyZW50U2ltdWxhdGlvblZpZXcuc3RhcnQoKTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFNpbXVsYXRpb24pO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIGluZmVjdGVkTnVtYmVyLmlubmVySFRNTCA9IGN1cnJlbnRTaW11bGF0aW9uLmluZmVjdGlvbk51bWJlcjtcbiAgICB9XG5cbiAgICBcbiAgICBsZXQgc3RvcFNpbXVsYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RvcCcpO1xuICAgIHN0b3BTaW11bGF0aW9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN1cnJlbnRTaW11bGF0aW9uVmlldy5zdG9wKGN1cnJlbnRTaW11bGF0aW9uKTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHMxID0gbmV3IFNpbXVsYXRpb24oZGVuc2l0eS52YWx1ZSwgc29jaWFsRGlzdC52YWx1ZSAvIDEwMCwgY3R4MSk7XG4gICAgY29uc29sZS5sb2coczEpO1xuXG4gICAgXG59KTsiLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBTaW11bGF0aW9uIGZyb20gJy4vc2ltdWxhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVycykge1xuICAgIHRoaXMucG9zICA9IHBhcmFtZXRlcnMucG9zO1xuICAgIHRoaXMudmVsICA9IHBhcmFtZXRlcnMudmVsO1xuICAgIHRoaXMucmFkaXVzICA9IHBhcmFtZXRlcnMucmFkaXVzO1xuICAgIHRoaXMuY29sb3IgID0gcGFyYW1ldGVycy5jb2xvcjtcbiAgICB0aGlzLm1hc3MgPSBwYXJhbWV0ZXJzLm1hc3M7XG4gICAgdGhpcy5zaW11bGF0aW9uID0gcGFyYW1ldGVycy5zaW11bGF0aW9uO1xuICAgIH1cblxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIHRoaXMucG9zWzBdLFxuICAgICAgICAgICAgdGhpcy5wb3NbMV0sXG4gICAgICAgICAgICB0aGlzLnJhZGl1cyxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICApO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnBvcyA9IFsodGhpcy5wb3NbMF0gKyB0aGlzLnZlbFswXSksICh0aGlzLnBvc1sxXSArIHRoaXMudmVsWzFdKV1cbiAgICAgICAgdGhpcy52ZWwgPSB0aGlzLnNpbXVsYXRpb24uYm91bmNlKHRoaXMucG9zLCB0aGlzLnZlbCk7XG4gICAgfTtcblxuICAgIGNoYW5nZURpcih2ZWwpIHtcbiAgICAgICAgXG4gICAgICAgIGlmIChNYXRoLmFicyh2ZWxbMF0pID4gTWF0aC5hYnModmVsWzFdKSkge1xuICAgICAgICAgICAgdmVsWzBdID0gLSB2ZWxbMF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZlbFsxXSA9IC0gdmVsWzFdXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB2ZWw7XG4gICAgfVxuICAgIFxuICAgIGlzQ29sbGlkZWRXaXRoKG90aGVyT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGNlbnRlckRpc3QgPSBVdGlsLmRpc3QodGhpcy5wb3MsIG90aGVyT2JqZWN0LnBvcyk7XG4gICAgICAgIGlmIChjZW50ZXJEaXN0IDwgKHRoaXMucmFkaXVzICsgb3RoZXJPYmplY3QucmFkaXVzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbi5yZW1vdmUodGhpcyk7XG4gICAgfVxuXG4gfVxuXG5cbiIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUUyA9IHtcbiAgICBSQURJVVM6IDIsXG4gICAgQ09MT1I6IFwibGlnaHRncmF5XCIsXG4gICAgU1BFRUQ6IDIsXG4gICAgTUFTUzogMVxufVxuXG5leHBvcnQgY2xhc3MgUGVyc29uIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzID0ge30pIHtcbiAgICAgICAgcGFyYW1ldGVycy5jb2xvciA9IERFRkFVTFRTLkNPTE9SO1xuICAgICAgICBwYXJhbWV0ZXJzLnJhZGl1cyA9IERFRkFVTFRTLlJBRElVUztcbiAgICAgICAgcGFyYW1ldGVycy5tYXNzID0gREVGQVVMVFMuTUFTUztcbiAgICAgICAgcGFyYW1ldGVycy5wb3MgPSBwYXJhbWV0ZXJzLnBvcyB8fCBwYXJhbWV0ZXJzLnNpbXVsYXRpb24ucmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgcGFyYW1ldGVycy52ZWwgPSBwYXJhbWV0ZXJzLnZlbCB8fCBVdGlsLnJhbmRvbVZlYyhERUZBVUxUUy5TUEVFRCk7XG4gICAgICAgIHBhcmFtZXRlcnMuY29uc2Npb3VzQ3RpemVuID0gZmFsc2U7XG4gICAgICAgIHBhcmFtZXRlcnMuaW5mZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgc3VwZXIocGFyYW1ldGVycyk7XG4gICAgfVxuXG59IiwiaW1wb3J0IHtQZXJzb24sIERFRkFVTFRTfSBmcm9tICcuL3BlcnNvbic7XG5pbXBvcnQge1V0aWx9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgU2ltdWxhdGlvblZpZXcgZnJvbSAnLi9zaW11bGF0aW9uX3ZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW11bGF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihkZW5zaXR5LCBzb2NpYWxEaXN0YW5jaW5nUmF0ZSwgY3R4KSB7XG4gICAgICAgIHRoaXMuRElNX1ggPSA2MDA7XG4gICAgICAgIHRoaXMuRElNX1kgPSA0MDA7XG4gICAgICAgIHRoaXMuTlVNX1BFUlNPTlMgPSAxMDA7XG4gICAgICAgIHRoaXMuZGVuc2l0eSA9IGRlbnNpdHk7XG4gICAgICAgIHRoaXMuc29jaWFsRGlzdGFuY2luZ1JhdGUgPSBzb2NpYWxEaXN0YW5jaW5nUmF0ZTtcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uSW5mZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wZXJzb25zID0gW107XG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbkludGVydmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbmZlY3Rpb25OdW1iZXIgPSAwO1xuICAgICAgICB0aGlzLmFkZFBlcnNvbnMoKTtcbiAgICAgICAgdGhpcy5hZGRQYXRpZW50WmVybygpO1xuICAgICAgICB0aGlzLmFkZENvbnNjaW91c0NpdGl6ZW4oKTtcbiAgICAgICAgdGhpcy5kcmF3KGN0eCk7XG4gICAgfVxuXG5cblxuICAgIGFkZFBlcnNvbnMoKSB7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMuZGVuc2l0eTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnMucHVzaChuZXcgUGVyc29uKHtcbiAgICAgICAgICAgICAgICBwb3M6IHRoaXMucmFuZG9tUG9zaXRpb24oKSwgXG4gICAgICAgICAgICAgICAgdmVsOiBVdGlsLnJhbmRvbVZlYyhERUZBVUxUUy5TUEVFRCksIFxuICAgICAgICAgICAgICAgIHNpbXVsYXRpb246IHRoaXN9KSk7XG5cbiAgICAgICAgICAgIGlmIChpIT09MCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wZXJzb25zLmxlbmd0aC0xOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChVdGlsLmRpc3QodGhpcy5wZXJzb25zW2ldLnBvcywgdGhpcy5wZXJzb25zW2pdLnBvcykgLSBERUZBVUxUUy5SQURJVVMgKiAyKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc29uc1tpXS5wb3MgPSB0aGlzLnJhbmRvbVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBqPS0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkUGF0aWVudFplcm8oKSB7XG4gICAgICAgIHRoaXMucGVyc29uc1swXS5jb2xvciA9ICdyZWQnO1xuICAgICAgICB0aGlzLnBlcnNvbnNbMF0uaW5mZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmluZmVjdGlvbk51bWJlciA9KyAxO1xuICAgIH1cblxuICAgIGFkZENvbnNjaW91c0NpdGl6ZW4oKSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICBmb3IgKGxldCBpPTE7IGk8dGhpcy5wZXJzb25zLmxlbmd0aCAqIHRoaXMuc29jaWFsRGlzdGFuY2luZ1JhdGUrMTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0uY29uc2Npb3VzQ2l0aXplbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0udmVsID0gWzAsMF07XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0uY29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBcbiAgICByYW5kb21Qb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgcmFkID0gREVGQVVMVFMuUkFESVVTO1xuICAgICAgICBsZXQgeCA9IFV0aWwucmFuZG9tSW50UmFuZ2UocmFkLCB0aGlzLkRJTV9YIC0gcmFkKTtcbiAgICAgICAgbGV0IHkgPSBVdGlsLnJhbmRvbUludFJhbmdlKHJhZCwgdGhpcy5ESU1fWSAtIHJhZCk7XG4gICAgICAgIHJldHVybiBbeCx5XTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuRElNX1gsIHRoaXMuRElNX1kpO1xuICAgICAgICB0aGlzLnBlcnNvbnMuZm9yRWFjaCggcGVyc29uID0+IHBlcnNvbi5kcmF3KGN0eCkpO1xuICAgIH1cblxuICAgIG1vdmVPYmplY3RzKCkge1xuICAgICAgICB0aGlzLnBlcnNvbnMuZm9yRWFjaCgocGVyc29uKSA9PiB7XG4gICAgICAgICAgICBwZXJzb24ubW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVPYmplY3Qob2JqZWN0KSB7XG4gICAgICAgIHRoaXMucGVyc29ucy5zcGxpY2UodGhpcy5wZXJzb25zLmluZGV4T2Yob2JqZWN0KSwgMSlcbiAgICB9XG4gICAgXG5cbiAgICBjaGVja0NvbGxpc2lvbnMoKSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLnBlcnNvbnMubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaj1pKzE7IGo8dGhpcy5wZXJzb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBlcnMxID0gdGhpcy5wZXJzb25zW2ldO1xuICAgICAgICAgICAgICAgIGxldCBwZXJzMiA9IHRoaXMucGVyc29uc1tqXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocGVyczEuaXNDb2xsaWRlZFdpdGgocGVyczIpKSB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWwucmVzb2x2ZUNvbGxpc2lvbihwZXJzMSwgcGVyczIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBlcnMxLmNvbG9yID09PSAncmVkJyAmJiBwZXJzMi5jb2xvciAhPT0gJ3JlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnMyLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzMi5pbmZlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluZmVjdGlvbk51bWJlciArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwZXJzMi5jb2xvciA9PT0gJ3JlZCcgJiYgcGVyczEuY29sb3IgIT09ICdyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyczEuY29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzMS5pbmZlY3RlZCA9ICd0cnVlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluZmVjdGlvbk51bWJlciArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBib3VuY2UocG9zLCB2ZWwpIHtcbiAgICAgICAgbGV0IHJhZCA9IERFRkFVTFRTLlJBRElVU1xuICAgICAgICBpZiAocG9zWzBdLXJhZCA8IDAgfHwgcG9zWzBdK3JhZCA+IHRoaXMuRElNX1gpIHtcbiAgICAgICAgICAgdmVsWzBdID0gLSB2ZWxbMF0gXG4gICAgICAgIH0gZWxzZSBpZiAocG9zWzFdLXJhZCA8IDAgfHwgcG9zWzFdK3JhZCA+IHRoaXMuRElNX1kpIHtcbiAgICAgICAgICAgIHZlbFsxXSA9IC0gdmVsWzFdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZlbDtcbiAgICB9XG5cbiAgICBoYW5kbGVJbmZlY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmluZmVjdGlvbk51bWJlciAvIHRoaXMuZGVuc2l0eSA+IDAuOTkpIHtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGlvbkluZmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSAgIFxuICAgIH1cblxuICAgIHN0ZXAoKSB7XG5cbiAgICAgICAgdGhpcy5tb3ZlT2JqZWN0cygpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9ucygpO1xuICAgICAgICB0aGlzLmhhbmRsZUluZmVjdGlvbigpO1xuXG4gICAgfVxuXG59XG5cblNpbXVsYXRpb24uRElNX1ggPSA2MDA7XG5TaW11bGF0aW9uLkRJTV9ZID0gNDAwO1xuXG4iLCJpbXBvcnQgU2ltdWxhdGlvbiBmcm9tICcuL3NpbXVsYXRpb24nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXVsYXRpb25WaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihzaW11bGF0aW9uLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbiA9IHNpbXVsYXRpb247XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbi5zaW11bGF0aW9uSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNpbXVsYXRpb24uc3RlcCgpO1xuICAgICAgICAgICAgdGhpcy5zaW11bGF0aW9uLmRyYXcodGhpcy5jdHgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2ltdWxhdGlvbi5wb3B1bGF0aW9uSW5mZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuc2ltdWxhdGlvbi5zaW11bGF0aW9uSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RvcCh0aGlzLnNpbXVsYXRpb24pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIwKTtcblxuICAgICAgICBcbiAgICB9XG5cbiAgICBzdG9wKHNpbXVsYXRpb24pIHtcbiAgICAgICAgXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoc2ltdWxhdGlvbi5zaW11bGF0aW9uSW50ZXJ2YWwpO1xuICAgIH1cblxufSIsImV4cG9ydCBjb25zdCBVdGlsID0ge1xuICAgLy8gUmV0dXJuIGEgcmFuZG9tbHkgb3JpZW50ZWQgdmVjdG9yIHdpdGggdGhlIGdpdmVuIGxlbmd0aC5cbiAgIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICAgIGNvbnN0IGRlZyA9IDIgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcbiAgICAgIHJldHVybiBVdGlsLnNjYWxlKFtNYXRoLnNpbihkZWcpLCBNYXRoLmNvcyhkZWcpXSwgbGVuZ3RoKTtcbiAgIH0sXG4gICAvLyBTY2FsZSB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yIGJ5IHRoZSBnaXZlbiBhbW91bnQuXG4gICBzY2FsZSh2ZWMsIG0pIHtcbiAgICAgIHJldHVybiBbdmVjWzBdICogbSwgdmVjWzFdICogbV07XG4gICB9LFxuXG4gICBkaXN0KHBvczEsIHBvczIpIHtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICAgICBNYXRoLnBvdyhwb3MxWzBdIC0gcG9zMlswXSwgMikgKyBNYXRoLnBvdyhwb3MxWzFdIC0gcG9zMlsxXSwgMilcbiAgICAgIClcbiAgIH0sXG4gICBcbiAgIHJhbmRvbUludFJhbmdlKG1pbiwgbWF4KSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgIH0sXG5cbiAgIHJvdGF0ZSh2ZWxvY2l0eSwgYW5nbGUpIHtcbiAgICAgIGNvbnN0IHJvdGF0ZWRWZWxvY2l0aWVzID0ge1xuICAgICAgICAgeDogdmVsb2NpdHlbMF0gKiBNYXRoLmNvcyhhbmdsZSkgLSB2ZWxvY2l0eVsxXSAqIE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgIHk6IHZlbG9jaXR5WzBdICogTWF0aC5zaW4oYW5nbGUpICsgdmVsb2NpdHlbMV0gKiBNYXRoLmNvcyhhbmdsZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiByb3RhdGVkVmVsb2NpdGllcztcbiAgIH0sXG5cbiAgIHJlc29sdmVDb2xsaXNpb24ocGVycywgb3RoZXJQZXJzKSB7XG5cbiAgICAgIGNvbnN0IHhWZWxEaWZmID0gcGVycy52ZWxbMF0gLSBvdGhlclBlcnMudmVsWzBdO1xuICAgICAgY29uc3QgeVZlbERpZmYgPSBwZXJzLnZlbFsxXSAtIG90aGVyUGVycy52ZWxbMV07XG5cblxuICAgICAgY29uc3QgeERpc3QgPSBvdGhlclBlcnMucG9zWzBdIC0gcGVycy5wb3NbMF07XG4gICAgICBjb25zdCB5RGlzdCA9IG90aGVyUGVycy5wb3NbMV0gLSBwZXJzLnBvc1sxXTtcblxuICAgICAgLy8gUHJldmVudCBhY2NpZGVudGFsIG92ZXJsYXAgb2YgcGVyc1xuICAgICAgaWYgKHhWZWxEaWZmICogeERpc3QgKyB5VmVsRGlmZiAqIHlEaXN0ID49IDApIHtcblxuICAgICAgICAgcGVycy52ZWwgPSBwZXJzLmNoYW5nZURpcihwZXJzLnZlbCk7XG4gICAgICAgICBvdGhlclBlcnMudmVsID0gb3RoZXJQZXJzLmNoYW5nZURpcihvdGhlclBlcnMudmVsKTtcbiAgICAgICAgIFxuICAgICAgfVxuICAgfVxuICAgLy8gcmVzb2x2ZUNvbGxpc2lvbihwZXJzLCBvdGhlclBlcnMpIHtcbiAgIC8vICAgIGNvbnN0IHhWZWxEaWZmID0gcGVycy52ZWxbMF0gLSBvdGhlclBlcnMudmVsWzBdO1xuICAgLy8gICAgY29uc3QgeVZlbERpZmYgPSBwZXJzLnZlbFsxXSAtIG90aGVyUGVycy52ZWxbMV07XG5cblxuICAgLy8gICAgY29uc3QgeERpc3QgPSBvdGhlclBlcnMucG9zWzBdIC0gcGVycy5wb3NbMF07XG4gICAvLyAgICBjb25zdCB5RGlzdCA9IG90aGVyUGVycy5wb3NbMV0gLSBwZXJzLnBvc1sxXTtcblxuICAgLy8gICAgLy8gUHJldmVudCBhY2NpZGVudGFsIG92ZXJsYXAgb2YgcGVyc1xuICAgLy8gICAgaWYgKHhWZWxEaWZmICogeERpc3QgKyB5VmVsRGlmZiAqIHlEaXN0ID49IDApIHtcblxuICAgLy8gICAgICAgLy8gR3JhYiBhbmdsZSBiZXR3ZWVuIHRoZSB0d28gY29sbGlkaW5nIHBlcnNcbiAgIC8vICAgICAgIGNvbnN0IGFuZ2xlID0gLU1hdGguYXRhbjIob3RoZXJQZXJzLnBvc1sxXSAtIHBlcnMucG9zWzFdLCBvdGhlclBlcnMucG9zWzBdIC0gcGVycy5wb3NbMF0pO1xuXG4gICAvLyAgICAgICAvLyBTdG9yZSBtYXNzIGluIHZhciBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5IGluIGNvbGxpc2lvbiBlcXVhdGlvblxuICAgLy8gICAgICAgY29uc3QgbTEgPSBwZXJzLm1hc3M7XG4gICAvLyAgICAgICBjb25zdCBtMiA9IG90aGVyUGVycy5tYXNzO1xuXG4gICAvLyAgICAgICAvLyB2ZWwgYmVmb3JlIGVxdWF0aW9uXG4gICAvLyAgICAgICBjb25zdCB1MSA9IFV0aWwucm90YXRlKHBlcnMudmVsLCBhbmdsZSk7XG4gICAvLyAgICAgICBjb25zdCB1MiA9IFV0aWwucm90YXRlKG90aGVyUGVycy52ZWwsIGFuZ2xlKTtcblxuICAgLy8gICAgICAgLy8gdmVsIGFmdGVyIDFkIGNvbGxpc2lvbiBlcXVhdGlvblxuICAgLy8gICAgICAgY29uc3QgdjEgPSBbdTEueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUyLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUxLnldO1xuICAgLy8gICAgICAgY29uc3QgdjIgPSBbdTIueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUxLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUyLnldO1xuXG4gICAvLyAgICAgICAvLyBGaW5hbCB2ZWwgYWZ0ZXIgcm90YXRpbmcgYXhpcyBiYWNrIHRvIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAvLyAgICAgICBjb25zdCB2RmluYWwxID0gVXRpbC5yb3RhdGUodjEsIC1hbmdsZSk7XG4gICAvLyAgICAgICBjb25zdCB2RmluYWwyID0gVXRpbC5yb3RhdGUodjIsIC1hbmdsZSk7XG5cbiAgIC8vICAgICAgIC8vIFN3YXAgcGVycyB2ZWxvY2l0aWVzIGZvciByZWFsaXN0aWMgYm91bmNlIGVmZmVjdFxuICAgLy8gICAgICAgcGVycy52ZWxbMF0gPSB2RmluYWwxLng7XG4gICAvLyAgICAgICBwZXJzLnZlbFsxXSA9IHZGaW5hbDEueTtcblxuICAgLy8gICAgICAgb3RoZXJQZXJzLnZlbFswXSA9IHZGaW5hbDIueDtcbiAgIC8vICAgICAgIG90aGVyUGVycy52ZWxbMV0gPSB2RmluYWwyLnk7XG4gICAvLyAgICB9XG4gICAvLyB9XG5cbiAgIC8vIHJlc29sdmVDb2xsaXNpb24ocGVycywgb3RoZXJQZXJzKSB7XG4gICAvLyAgICBjb25zdCB4VmVsRGlmZiA9IHBlcnMudmVsWzBdIC0gb3RoZXJQZXJzLnZlbFswXTtcbiAgIC8vICAgIGNvbnN0IHlWZWxEaWZmID0gcGVycy52ZWxbMV0gLSBvdGhlclBlcnMudmVsWzFdO1xuXG4gICAvLyAgICBjb25zdCB4RGlzdCA9IG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXTtcbiAgIC8vICAgIGNvbnN0IHlEaXN0ID0gb3RoZXJQZXJzLnBvc1sxXSAtIHBlcnMucG9zWzFdO1xuXG4gICAvLyAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgb3ZlcmxhcCBvZiBwZXJzXG4gICAvLyAgICBpZiAoeFZlbERpZmYgKiB4RGlzdCArIHlWZWxEaWZmICogeURpc3QgPj0gMCkge1xuXG4gICAvLyAgICAgICAvLyBHcmFiIGFuZ2xlIGJldHdlZW4gdGhlIHR3byBjb2xsaWRpbmcgcGVyc1xuICAgLy8gICAgICAgY29uc3QgYW5nbGUgPSAtTWF0aC5hdGFuMihvdGhlclBlcnMucG9zWzFdIC0gcGVycy5wb3NbMV0sIG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXSk7XG5cbiAgIC8vICAgICAgIC8vIFN0b3JlIG1hc3MgaW4gdmFyIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgaW4gY29sbGlzaW9uIGVxdWF0aW9uXG4gICAvLyAgICAgICBjb25zdCBtMSA9IHBlcnMubWFzcztcbiAgIC8vICAgICAgIGNvbnN0IG0yID0gb3RoZXJQZXJzLm1hc3M7XG5cbiAgIC8vICAgICAgIGlmIChwZXJzLmNvbnNjaW91c0NpdGl6ZW4gPT09IHRydWUpIHtcbiAgIC8vICAgICAgICAgIC8vIHZlbCBiZWZvcmUgZXF1YXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHUxID0gVXRpbC5yb3RhdGUocGVycy52ZWwsIGFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHUyID0gVXRpbC5yb3RhdGUob3RoZXJQZXJzLnZlbCwgYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyB2ZWwgYWZ0ZXIgMWQgY29sbGlzaW9uIGVxdWF0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB2MSA9IFt1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTEueV07XG4gICAvLyAgICAgICAgICBjb25zdCB2MiA9IFt1Mi54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTEueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTIueV07XG5cbiAgIC8vICAgICAgICAgIC8vIEZpbmFsIHZlbCBhZnRlciByb3RhdGluZyBheGlzIGJhY2sgdG8gb3JpZ2luYWwgbG9jYXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDEgPSBVdGlsLnJvdGF0ZSh2MSwgLWFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDIgPSBVdGlsLnJvdGF0ZSh2MiwgLWFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gU3dhcCBwZXJzIHZlbG9jaXRpZXMgZm9yIHJlYWxpc3RpYyBib3VuY2UgZWZmZWN0XG4gICAvLyAgICAgICAgICAvLyBwZXJzLnZlbFswXSA9IHZGaW5hbDEueDtcbiAgIC8vICAgICAgICAgIC8vIHBlcnMudmVsWzFdID0gdkZpbmFsMS55O1xuICAgLy8gICAgICAgICAgLy8gcGVycy52ZWxbMF0gPSAwO1xuICAgLy8gICAgICAgICAgLy8gcGVycy52ZWxbMV0gPSAwO1xuXG4gICAvLyAgICAgICAgICBvdGhlclBlcnMudmVsWzBdID0gdkZpbmFsMi54O1xuICAgLy8gICAgICAgICAgb3RoZXJQZXJzLnZlbFsxXSA9IHZGaW5hbDIueTtcblxuICAgLy8gICAgICAgfSBlbHNlIGlmIChvdGhlclBlcnMuY29uc2Npb3VzQ2l0aXplbiA9PT0gdHJ1ZSl7XG4gICAvLyAgICAgICAgICAvLyB2ZWwgYmVmb3JlIGVxdWF0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB1MSA9IFV0aWwucm90YXRlKHBlcnMudmVsLCBhbmdsZSk7XG4gICAvLyAgICAgICAgICBjb25zdCB1MiA9IFV0aWwucm90YXRlKG90aGVyUGVycy52ZWwsIGFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gdmVsIGFmdGVyIDFkIGNvbGxpc2lvbiBlcXVhdGlvblxuICBcbiAgIC8vICAgICAgICAgIGNvbnN0IHYxID0gW3UxLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1Mi54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1MS55XTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHYyID0gW3UyLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1MS54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1Mi55XTtcblxuICAgLy8gICAgICAgICAgLy8gRmluYWwgdmVsIGFmdGVyIHJvdGF0aW5nIGF4aXMgYmFjayB0byBvcmlnaW5hbCBsb2NhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdkZpbmFsMSA9IFV0aWwucm90YXRlKHYxLCAtYW5nbGUpO1xuICAgLy8gICAgICAgICAgY29uc3QgdkZpbmFsMiA9IFV0aWwucm90YXRlKHYyLCAtYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyBTd2FwIHBlcnMgdmVsb2NpdGllcyBmb3IgcmVhbGlzdGljIGJvdW5jZSBlZmZlY3RcbiAgIC8vICAgICAgICAgIHBlcnMudmVsWzBdID0gdkZpbmFsMS54O1xuICAgLy8gICAgICAgICAgcGVycy52ZWxbMV0gPSB2RmluYWwxLnk7XG5cbiAgIC8vICAgICAgICAgIC8vIG90aGVyUGVycy52ZWxbMF0gPSB2RmluYWwyLng7XG4gICAvLyAgICAgICAgICAvLyBvdGhlclBlcnMudmVsWzFdID0gdkZpbmFsMi55O1xuICAgLy8gICAgICAgICAgLy8gb3RoZXJQZXJzLnZlbFswXSA9IDA7XG4gICAvLyAgICAgICAgICAvLyBvdGhlclBlcnMudmVsWzFdID0gMDtcbiAgIC8vICAgICAgIH0gZWxzZSB7XG4gICAvLyAgICAgICAgICAvLyB2ZWwgYmVmb3JlIGVxdWF0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB1MSA9IFV0aWwucm90YXRlKHBlcnMudmVsLCBhbmdsZSk7XG4gICAvLyAgICAgICAgICBjb25zdCB1MiA9IFV0aWwucm90YXRlKG90aGVyUGVycy52ZWwsIGFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gdmVsIGFmdGVyIDFkIGNvbGxpc2lvbiBlcXVhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdjEgPSBbdTEueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUyLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUxLnldO1xuICAgLy8gICAgICAgICAgY29uc3QgdjIgPSBbdTIueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUxLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUyLnldO1xuXG4gICAvLyAgICAgICAgICAvLyBGaW5hbCB2ZWwgYWZ0ZXIgcm90YXRpbmcgYXhpcyBiYWNrIHRvIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB2RmluYWwxID0gVXRpbC5yb3RhdGUodjEsIC1hbmdsZSk7XG4gICAvLyAgICAgICAgICBjb25zdCB2RmluYWwyID0gVXRpbC5yb3RhdGUodjIsIC1hbmdsZSk7XG5cbiAgIC8vICAgICAgICAgIC8vIFN3YXAgcGVycyB2ZWxvY2l0aWVzIGZvciByZWFsaXN0aWMgYm91bmNlIGVmZmVjdFxuICAgLy8gICAgICAgICAgcGVycy52ZWxbMF0gPSB2RmluYWwxLng7XG4gICAvLyAgICAgICAgICBwZXJzLnZlbFsxXSA9IHZGaW5hbDEueTtcblxuICAgLy8gICAgICAgICAgb3RoZXJQZXJzLnZlbFswXSA9IHZGaW5hbDIueDtcbiAgIC8vICAgICAgICAgIG90aGVyUGVycy52ZWxbMV0gPSB2RmluYWwyLnk7XG4gICAvLyAgICAgICB9XG4gICAvLyAgICB9XG4gICAvLyB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==