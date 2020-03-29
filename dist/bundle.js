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
  var startSimulation = document.getElementById('start');

  startSimulation.onclick = function () {
    var s1 = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"](density.value, socialDist.value / 100, ctx1);
    var sv1 = new _simulation_view__WEBPACK_IMPORTED_MODULE_1__["default"](s1, ctx1);
    sv1.start();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb3Zpbmdfb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb25fdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbDEiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpZHRoIiwiU2ltdWxhdGlvbiIsIkRJTV9YIiwiaGVpZ2h0IiwiRElNX1kiLCJjdHgxIiwiZ2V0Q29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJTaW11bGF0aW9uVmlldyIsImRlbnNpdHkiLCJnZXRFbGVtZW50QnlJZCIsIm91dHB1dERlbnNpdHkiLCJpbm5lckhUTUwiLCJ2YWx1ZSIsIm9uaW5wdXQiLCJzMSIsInNvY2lhbERpc3QiLCJvdXRwdXRTb2NpYWxEaXN0Iiwic3RhcnRTaW11bGF0aW9uIiwib25jbGljayIsInN2MSIsInN0YXJ0IiwiTW92aW5nT2JqZWN0IiwicGFyYW1ldGVycyIsInBvcyIsInZlbCIsInJhZGl1cyIsImNvbG9yIiwibWFzcyIsInNpbXVsYXRpb24iLCJjdHgiLCJzdHJva2VTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsInN0cm9rZSIsImJvdW5jZSIsImFicyIsIm90aGVyT2JqZWN0IiwiY2VudGVyRGlzdCIsIlV0aWwiLCJkaXN0IiwicmVtb3ZlIiwiREVGQVVMVFMiLCJSQURJVVMiLCJDT0xPUiIsIlNQRUVEIiwiTUFTUyIsIlBlcnNvbiIsInJhbmRvbVBvc2l0aW9uIiwicmFuZG9tVmVjIiwiY29uc2Npb3VzQ3RpemVuIiwic29jaWFsRGlzdGFuY2luZ1JhdGUiLCJOVU1fUEVSU09OUyIsInBvcHVsYXRpb25JbmZlY3RlZCIsInBlcnNvbnMiLCJhZGRQZXJzb25zIiwiYWRkUGF0aWVudFplcm8iLCJhZGRDb25zY2lvdXNDaXRpemVuIiwiZHJhdyIsImkiLCJwdXNoIiwiaiIsImxlbmd0aCIsImNvbnNjaW91c0NpdGl6ZW4iLCJyYWQiLCJ4IiwicmFuZG9tSW50UmFuZ2UiLCJ5IiwiY2xlYXJSZWN0IiwiZm9yRWFjaCIsInBlcnNvbiIsIm1vdmUiLCJvYmplY3QiLCJzcGxpY2UiLCJpbmRleE9mIiwicGVyczEiLCJwZXJzMiIsImlzQ29sbGlkZWRXaXRoIiwicmVzb2x2ZUNvbGxpc2lvbiIsImV2ZXJ5IiwibW92ZU9iamVjdHMiLCJjaGVja0NvbGxpc2lvbnMiLCJoYW5kbGVJbmZlY3Rpb24iLCJzaW11bGF0aW9uSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInN0ZXAiLCJjbGVhckludGVydmFsIiwiZGVnIiwicmFuZG9tIiwic2NhbGUiLCJzaW4iLCJjb3MiLCJ2ZWMiLCJtIiwicG9zMSIsInBvczIiLCJzcXJ0IiwicG93IiwibWluIiwibWF4IiwiZmxvb3IiLCJyb3RhdGUiLCJ2ZWxvY2l0eSIsImFuZ2xlIiwicm90YXRlZFZlbG9jaXRpZXMiLCJwZXJzIiwib3RoZXJQZXJzIiwieFZlbERpZmYiLCJ5VmVsRGlmZiIsInhEaXN0IiwieURpc3QiLCJjaGFuZ2VEaXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0FBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDdEQsTUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLG9CQUFULENBQThCLFFBQTlCLEVBQXdDLENBQXhDLENBQWxCLENBRHNELENBRXREOztBQUVBRCxXQUFTLENBQUNFLEtBQVYsR0FBa0JDLG1EQUFVLENBQUNDLEtBQTdCO0FBQ0FKLFdBQVMsQ0FBQ0ssTUFBVixHQUFtQkYsbURBQVUsQ0FBQ0csS0FBOUI7QUFDQSxNQUFNQyxJQUFJLEdBQUdQLFNBQVMsQ0FBQ1EsVUFBVixDQUFxQixJQUFyQixDQUFiLENBTnNELENBUXREO0FBQ0E7QUFDQTs7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFHQUMsUUFBTSxDQUFDUixVQUFQLEdBQW9CQSxtREFBcEI7QUFDQVEsUUFBTSxDQUFDQyxjQUFQLEdBQXdCQSx3REFBeEI7QUFLQSxNQUFJQyxPQUFPLEdBQUdmLFFBQVEsQ0FBQ2dCLGNBQVQsQ0FBd0Isa0JBQXhCLENBQWQ7QUFDQSxNQUFJQyxhQUFhLEdBQUdqQixRQUFRLENBQUNnQixjQUFULENBQXdCLGVBQXhCLENBQXBCO0FBRUFDLGVBQWEsQ0FBQ0MsU0FBZCxHQUEwQkgsT0FBTyxDQUFDSSxLQUFsQzs7QUFFQUosU0FBTyxDQUFDSyxPQUFSLEdBQWtCLFlBQVk7QUFFMUJILGlCQUFhLENBQUNDLFNBQWQsR0FBMEIsS0FBS0MsS0FBL0I7QUFDQSxRQUFJRSxFQUFFLEdBQUcsSUFBSWhCLG1EQUFKLENBQWUsS0FBS2MsS0FBcEIsRUFBMkJHLFVBQVUsQ0FBQ0gsS0FBWCxHQUFtQixHQUE5QyxFQUFtRFYsSUFBbkQsQ0FBVDtBQUVILEdBTEQ7O0FBTUFFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRyxPQUFPLENBQUNJLEtBQXBCO0FBRUEsTUFBSUcsVUFBVSxHQUFHdEIsUUFBUSxDQUFDZ0IsY0FBVCxDQUF3QixpQkFBeEIsQ0FBakI7QUFDQSxNQUFJTyxnQkFBZ0IsR0FBR3ZCLFFBQVEsQ0FBQ2dCLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBdkI7QUFFQU8sa0JBQWdCLENBQUNMLFNBQWpCLEdBQTZCSSxVQUFVLENBQUNILEtBQXhDOztBQUVBRyxZQUFVLENBQUNGLE9BQVgsR0FBcUIsWUFBWTtBQUM3Qkcsb0JBQWdCLENBQUNMLFNBQWpCLEdBQTZCLEtBQUtDLEtBQWxDO0FBQ0EsUUFBSUUsRUFBRSxHQUFHLElBQUloQixtREFBSixDQUFlVSxPQUFPLENBQUNJLEtBQXZCLEVBQThCLEtBQUtBLEtBQUwsR0FBYSxHQUEzQyxFQUFnRFYsSUFBaEQsQ0FBVDtBQUNBLFdBQU9ZLEVBQVA7QUFDSCxHQUpEOztBQUtBVixTQUFPLENBQUNDLEdBQVIsQ0FBWVUsVUFBVSxDQUFDSCxLQUF2QjtBQUVBLE1BQUlLLGVBQWUsR0FBR3hCLFFBQVEsQ0FBQ2dCLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBdEI7O0FBQ0FRLGlCQUFlLENBQUNDLE9BQWhCLEdBQTBCLFlBQVk7QUFDbEMsUUFBSUosRUFBRSxHQUFHLElBQUloQixtREFBSixDQUFlVSxPQUFPLENBQUNJLEtBQXZCLEVBQThCRyxVQUFVLENBQUNILEtBQVgsR0FBbUIsR0FBakQsRUFBc0RWLElBQXRELENBQVQ7QUFDQSxRQUFJaUIsR0FBRyxHQUFHLElBQUlaLHdEQUFKLENBQW1CTyxFQUFuQixFQUF1QlosSUFBdkIsQ0FBVjtBQUNBaUIsT0FBRyxDQUFDQyxLQUFKO0FBQ0gsR0FKRDs7QUFNQSxNQUFJTixFQUFFLEdBQUcsSUFBSWhCLG1EQUFKLENBQWVVLE9BQU8sQ0FBQ0ksS0FBdkIsRUFBOEJHLFVBQVUsQ0FBQ0gsS0FBWCxHQUFtQixHQUFqRCxFQUFzRFYsSUFBdEQsQ0FBVDtBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWVMsRUFBWixFQXREc0QsQ0F1RHREO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUtILENBckVELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztJQUVxQk8sWTtBQUNqQix3QkFBWUMsVUFBWixFQUF3QjtBQUFBOztBQUN4QixTQUFLQyxHQUFMLEdBQVlELFVBQVUsQ0FBQ0MsR0FBdkI7QUFDQSxTQUFLQyxHQUFMLEdBQVlGLFVBQVUsQ0FBQ0UsR0FBdkI7QUFDQSxTQUFLQyxNQUFMLEdBQWVILFVBQVUsQ0FBQ0csTUFBMUI7QUFDQSxTQUFLQyxLQUFMLEdBQWNKLFVBQVUsQ0FBQ0ksS0FBekI7QUFDQSxTQUFLQyxJQUFMLEdBQVlMLFVBQVUsQ0FBQ0ssSUFBdkI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCTixVQUFVLENBQUNNLFVBQTdCO0FBQ0M7Ozs7eUJBR0lDLEcsRUFBSztBQUNOQSxTQUFHLENBQUNDLFdBQUosR0FBa0IsS0FBS0osS0FBdkI7QUFDQUcsU0FBRyxDQUFDRSxTQUFKO0FBQ0FGLFNBQUcsQ0FBQ0csR0FBSixDQUNJLEtBQUtULEdBQUwsQ0FBUyxDQUFULENBREosRUFFSSxLQUFLQSxHQUFMLENBQVMsQ0FBVCxDQUZKLEVBR0ksS0FBS0UsTUFIVCxFQUlJLENBSkosRUFLSSxJQUFJUSxJQUFJLENBQUNDLEVBTGIsQ0FNSTtBQU5KO0FBUUFMLFNBQUcsQ0FBQ00sTUFBSjtBQUNGOzs7MkJBRUs7QUFDSCxXQUFLWixHQUFMLEdBQVcsQ0FBRSxLQUFLQSxHQUFMLENBQVMsQ0FBVCxJQUFjLEtBQUtDLEdBQUwsQ0FBUyxDQUFULENBQWhCLEVBQStCLEtBQUtELEdBQUwsQ0FBUyxDQUFULElBQWMsS0FBS0MsR0FBTCxDQUFTLENBQVQsQ0FBN0MsQ0FBWDtBQUNBLFdBQUtBLEdBQUwsR0FBVyxLQUFLSSxVQUFMLENBQWdCUSxNQUFoQixDQUF1QixLQUFLYixHQUE1QixFQUFpQyxLQUFLQyxHQUF0QyxDQUFYLENBRkcsQ0FHSDtBQUNIOzs7OEJBRVNBLEcsRUFBSztBQUVYLFVBQUlTLElBQUksQ0FBQ0ksR0FBTCxDQUFTYixHQUFHLENBQUMsQ0FBRCxDQUFaLElBQW1CUyxJQUFJLENBQUNJLEdBQUwsQ0FBU2IsR0FBRyxDQUFDLENBQUQsQ0FBWixDQUF2QixFQUF5QztBQUNyQ0EsV0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBQUVBLEdBQUcsQ0FBQyxDQUFELENBQWQ7QUFDSCxPQUZELE1BRU87QUFDSEEsV0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBQUVBLEdBQUcsQ0FBQyxDQUFELENBQWQ7QUFDSDs7QUFFRCxhQUFPQSxHQUFQO0FBQ0g7OzttQ0FFY2MsVyxFQUFhO0FBQ3hCLFVBQU1DLFVBQVUsR0FBR0MsMENBQUksQ0FBQ0MsSUFBTCxDQUFVLEtBQUtsQixHQUFmLEVBQW9CZSxXQUFXLENBQUNmLEdBQWhDLENBQW5COztBQUNBLFVBQUlnQixVQUFVLEdBQUksS0FBS2QsTUFBTCxHQUFjYSxXQUFXLENBQUNiLE1BQTVDLEVBQXFEO0FBQ2pELGVBQU8sSUFBUDtBQUNILE9BRkQsTUFFTztBQUNILGVBQU8sS0FBUDtBQUNIOztBQUFBO0FBRUo7Ozs2QkFFUTtBQUNMLFdBQUtHLFVBQUwsQ0FBZ0JjLE1BQWhCLENBQXVCLElBQXZCO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRMO0FBQ0E7QUFFTyxJQUFNQyxRQUFRLEdBQUc7QUFDcEJDLFFBQU0sRUFBRSxDQURZO0FBRXBCQyxPQUFLLEVBQUUsU0FGYTtBQUdwQkMsT0FBSyxFQUFFLENBSGE7QUFJcEJDLE1BQUksRUFBRTtBQUpjLENBQWpCO0FBT0EsSUFBTUMsTUFBYjtBQUFBOztBQUFBOztBQUNJLG9CQUE2QjtBQUFBLFFBQWpCMUIsVUFBaUIsdUVBQUosRUFBSTs7QUFBQTs7QUFDekJBLGNBQVUsQ0FBQ0ksS0FBWCxHQUFtQmlCLFFBQVEsQ0FBQ0UsS0FBNUI7QUFDQXZCLGNBQVUsQ0FBQ0csTUFBWCxHQUFvQmtCLFFBQVEsQ0FBQ0MsTUFBN0I7QUFDQXRCLGNBQVUsQ0FBQ0ssSUFBWCxHQUFrQmdCLFFBQVEsQ0FBQ0ksSUFBM0I7QUFDQXpCLGNBQVUsQ0FBQ0MsR0FBWCxHQUFpQkQsVUFBVSxDQUFDQyxHQUFYLElBQWtCRCxVQUFVLENBQUNNLFVBQVgsQ0FBc0JxQixjQUF0QixFQUFuQztBQUNBM0IsY0FBVSxDQUFDRSxHQUFYLEdBQWlCRixVQUFVLENBQUNFLEdBQVgsSUFBa0JnQiwwQ0FBSSxDQUFDVSxTQUFMLENBQWVQLFFBQVEsQ0FBQ0csS0FBeEIsQ0FBbkM7QUFDQXhCLGNBQVUsQ0FBQzZCLGVBQVgsR0FBNkIsS0FBN0IsQ0FOeUIsQ0FPekI7QUFDQTs7QUFSeUIsNkJBU25CN0IsVUFUbUI7QUFVNUI7O0FBWEw7QUFBQSxFQUE0QkQsc0RBQTVCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBOztJQUVxQnZCLFU7QUFDakIsc0JBQVlVLE9BQVosRUFBcUI0QyxvQkFBckIsRUFBMkN2QixHQUEzQyxFQUFnRDtBQUFBOztBQUM1QyxTQUFLOUIsS0FBTCxHQUFhLEdBQWI7QUFDQSxTQUFLRSxLQUFMLEdBQWEsR0FBYjtBQUNBLFNBQUtvRCxXQUFMLEdBQW1CLEdBQW5CO0FBQ0EsU0FBSzdDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUs0QyxvQkFBTCxHQUE0QkEsb0JBQTVCO0FBQ0EsU0FBS0Usa0JBQUwsR0FBMEIsS0FBMUI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUtDLFVBQUw7QUFDQSxTQUFLQyxjQUFMO0FBQ0EsU0FBS0MsbUJBQUw7QUFDQSxTQUFLQyxJQUFMLENBQVU5QixHQUFWO0FBQ0gsRyxDQUVEO0FBRUE7Ozs7O2lDQUVhO0FBQ1QsV0FBSSxJQUFJK0IsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDLEtBQUtwRCxPQUFwQixFQUE2Qm9ELENBQUMsRUFBOUIsRUFBa0M7QUFDOUIsYUFBS0wsT0FBTCxDQUFhTSxJQUFiLENBQWtCLElBQUliLDhDQUFKLENBQVc7QUFDekJ6QixhQUFHLEVBQUUsS0FBSzBCLGNBQUwsRUFEb0I7QUFFekJ6QixhQUFHLEVBQUVnQiwwQ0FBSSxDQUFDVSxTQUFMLENBQWVQLGdEQUFRLENBQUNHLEtBQXhCLENBRm9CO0FBR3pCbEIsb0JBQVUsRUFBRTtBQUhhLFNBQVgsQ0FBbEI7O0FBS0EsWUFBSWdDLENBQUMsS0FBRyxDQUFSLEVBQVc7QUFDUCxlQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1AsT0FBTCxDQUFhUSxNQUFiLEdBQW9CLENBQXhDLEVBQTJDRCxDQUFDLEVBQTVDLEVBQWdEO0FBQzVDLGdCQUFLdEIsMENBQUksQ0FBQ0MsSUFBTCxDQUFVLEtBQUtjLE9BQUwsQ0FBYUssQ0FBYixFQUFnQnJDLEdBQTFCLEVBQStCLEtBQUtnQyxPQUFMLENBQWFPLENBQWIsRUFBZ0J2QyxHQUEvQyxJQUFzRG9CLGdEQUFRLENBQUNDLE1BQVQsR0FBa0IsQ0FBekUsR0FBOEUsQ0FBbEYsRUFBcUY7QUFDakYsbUJBQUtXLE9BQUwsQ0FBYUssQ0FBYixFQUFnQnJDLEdBQWhCLEdBQXNCLEtBQUswQixjQUFMLEVBQXRCO0FBQ0FhLGVBQUMsR0FBQyxDQUFDLENBQUg7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNKOzs7cUNBRWdCO0FBQ2IsV0FBS1AsT0FBTCxDQUFhLEtBQUtBLE9BQUwsQ0FBYVEsTUFBYixHQUFvQixDQUFqQyxFQUFvQ3JDLEtBQXBDLEdBQTRDLEtBQTVDO0FBQ0g7OzswQ0FFcUI7QUFDbEI7QUFDQSxXQUFLLElBQUlrQyxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUMsS0FBS0wsT0FBTCxDQUFhUSxNQUFiLEdBQXNCLEtBQUtYLG9CQUEzQyxFQUFpRVEsQ0FBQyxFQUFsRSxFQUFzRTtBQUNsRSxhQUFLTCxPQUFMLENBQWFLLENBQWIsRUFBZ0JJLGdCQUFoQixHQUFtQyxJQUFuQztBQUNBLGFBQUtULE9BQUwsQ0FBYUssQ0FBYixFQUFnQnBDLEdBQWhCLEdBQXNCLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBdEI7QUFDQSxhQUFLK0IsT0FBTCxDQUFhSyxDQUFiLEVBQWdCbEMsS0FBaEIsR0FBd0IsT0FBeEI7QUFDSDtBQUNKOzs7cUNBRWdCO0FBQ2IsVUFBTXVDLEdBQUcsR0FBR3RCLGdEQUFRLENBQUNDLE1BQXJCO0FBQ0EsVUFBSXNCLENBQUMsR0FBRzFCLDBDQUFJLENBQUMyQixjQUFMLENBQW9CRixHQUFwQixFQUF5QixLQUFLbEUsS0FBTCxHQUFha0UsR0FBdEMsQ0FBUjtBQUNBLFVBQUlHLENBQUMsR0FBRzVCLDBDQUFJLENBQUMyQixjQUFMLENBQW9CRixHQUFwQixFQUF5QixLQUFLaEUsS0FBTCxHQUFhZ0UsR0FBdEMsQ0FBUjtBQUNBLGFBQU8sQ0FBQ0MsQ0FBRCxFQUFHRSxDQUFILENBQVA7QUFDSDs7O3lCQUVJdkMsRyxFQUFLO0FBQ05BLFNBQUcsQ0FBQ3dDLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLEtBQUt0RSxLQUF6QixFQUFnQyxLQUFLRSxLQUFyQztBQUNBLFdBQUtzRCxPQUFMLENBQWFlLE9BQWIsQ0FBc0IsVUFBQUMsTUFBTTtBQUFBLGVBQUlBLE1BQU0sQ0FBQ1osSUFBUCxDQUFZOUIsR0FBWixDQUFKO0FBQUEsT0FBNUI7QUFDSDs7O2tDQUVhO0FBQ1YsV0FBSzBCLE9BQUwsQ0FBYWUsT0FBYixDQUFxQixVQUFDQyxNQUFELEVBQVk7QUFDN0JBLGNBQU0sQ0FBQ0MsSUFBUDtBQUNILE9BRkQ7QUFHSDs7O2lDQUVZQyxNLEVBQVE7QUFDakIsV0FBS2xCLE9BQUwsQ0FBYW1CLE1BQWIsQ0FBb0IsS0FBS25CLE9BQUwsQ0FBYW9CLE9BQWIsQ0FBcUJGLE1BQXJCLENBQXBCLEVBQWtELENBQWxEO0FBQ0g7OztzQ0FHaUI7QUFDZCxXQUFLLElBQUliLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBQyxLQUFLTCxPQUFMLENBQWFRLE1BQTdCLEVBQW9DSCxDQUFDLEVBQXJDLEVBQXlDO0FBQ3JDLGFBQUssSUFBSUUsQ0FBQyxHQUFDRixDQUFDLEdBQUMsQ0FBYixFQUFnQkUsQ0FBQyxHQUFDLEtBQUtQLE9BQUwsQ0FBYVEsTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDeEMsY0FBSWMsS0FBSyxHQUFHLEtBQUtyQixPQUFMLENBQWFLLENBQWIsQ0FBWjtBQUNBLGNBQUlpQixLQUFLLEdBQUcsS0FBS3RCLE9BQUwsQ0FBYU8sQ0FBYixDQUFaLENBRndDLENBSXhDOztBQUNBLGNBQUljLEtBQUssQ0FBQ0UsY0FBTixDQUFxQkQsS0FBckIsQ0FBSixFQUFpQztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQXJDLHNEQUFJLENBQUN1QyxnQkFBTCxDQUFzQkgsS0FBdEIsRUFBNkJDLEtBQTdCOztBQUNBLGdCQUFJRCxLQUFLLENBQUNsRCxLQUFOLEtBQWdCLEtBQXBCLEVBQTJCO0FBQzNCbUQsbUJBQUssQ0FBQ25ELEtBQU4sR0FBYyxLQUFkO0FBQ0MsYUFGRCxNQUVPLElBQUltRCxLQUFLLENBQUNuRCxLQUFOLEtBQWdCLEtBQXBCLEVBQTJCO0FBQzlCa0QsbUJBQUssQ0FBQ2xELEtBQU4sR0FBYyxLQUFkO0FBQ0g7O0FBQUEsYUFad0IsQ0FhekI7QUFDQTtBQUVQO0FBQ0o7QUFDSjtBQUNKOzs7MkJBR01ILEcsRUFBS0MsRyxFQUFLO0FBQ2IsVUFBSXlDLEdBQUcsR0FBR3RCLGdEQUFRLENBQUNDLE1BQW5COztBQUNBLFVBQUlyQixHQUFHLENBQUMsQ0FBRCxDQUFILEdBQU8wQyxHQUFQLEdBQWEsQ0FBYixJQUFrQjFDLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBTzBDLEdBQVAsR0FBYSxLQUFLbEUsS0FBeEMsRUFBK0M7QUFDNUN5QixXQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBRUEsR0FBRyxDQUFDLENBQUQsQ0FBZDtBQUNGLE9BRkQsTUFFTyxJQUFJRCxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQU8wQyxHQUFQLEdBQWEsQ0FBYixJQUFrQjFDLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBTzBDLEdBQVAsR0FBYSxLQUFLaEUsS0FBeEMsRUFBK0M7QUFDbER1QixXQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBRUEsR0FBRyxDQUFDLENBQUQsQ0FBZDtBQUNIOztBQUNELGFBQU9BLEdBQVA7QUFDSDs7O3NDQUVpQjtBQUNkLFVBQUksS0FBSytCLE9BQUwsQ0FBYXlCLEtBQWIsQ0FBbUIsVUFBQVQsTUFBTTtBQUFBLGVBQUlBLE1BQU0sQ0FBQzdDLEtBQVAsS0FBaUIsS0FBckI7QUFBQSxPQUF6QixDQUFKLEVBQTBEO0FBQ3RELGFBQUs0QixrQkFBTCxHQUEwQixJQUExQjtBQUNIO0FBQ0o7OzsyQkFFTTtBQUVILFdBQUsyQixXQUFMO0FBQ0EsV0FBS0MsZUFBTDtBQUNBLFdBQUtDLGVBQUwsR0FKRyxDQU1IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7Ozs7Ozs7QUFJTHJGLFVBQVUsQ0FBQ0MsS0FBWCxHQUFtQixHQUFuQjtBQUNBRCxVQUFVLENBQUNHLEtBQVgsR0FBbUIsR0FBbkIsQyxDQUNBLGdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SUE7O0lBR3FCTSxjO0FBQ2pCLDBCQUFZcUIsVUFBWixFQUF3QkMsR0FBeEIsRUFBNkI7QUFBQTs7QUFDekIsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0QsVUFBTCxHQUFrQkEsVUFBbEI7QUFDSDs7Ozs0QkFFTztBQUFBOztBQUNKLFVBQUl3RCxrQkFBa0IsR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDdkMsYUFBSSxDQUFDekQsVUFBTCxDQUFnQjBELElBQWhCOztBQUNBLGFBQUksQ0FBQzFELFVBQUwsQ0FBZ0IrQixJQUFoQixDQUFxQixLQUFJLENBQUM5QixHQUExQjs7QUFDQSxZQUFJLEtBQUksQ0FBQ0QsVUFBTCxDQUFnQjBCLGtCQUFwQixFQUF3QztBQUNwQ2lDLHVCQUFhLENBQUNILGtCQUFELENBQWI7QUFDSDtBQUNKLE9BTm1DLEVBTWpDLEVBTmlDLENBQXBDO0FBU0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CTDtBQUFBO0FBQU8sSUFBTTVDLElBQUksR0FBRztBQUNqQjtBQUNBVSxXQUZpQixxQkFFUGEsTUFGTyxFQUVDO0FBQ2YsUUFBTXlCLEdBQUcsR0FBRyxJQUFJdkQsSUFBSSxDQUFDQyxFQUFULEdBQWNELElBQUksQ0FBQ3dELE1BQUwsRUFBMUI7QUFDQSxXQUFPakQsSUFBSSxDQUFDa0QsS0FBTCxDQUFXLENBQUN6RCxJQUFJLENBQUMwRCxHQUFMLENBQVNILEdBQVQsQ0FBRCxFQUFnQnZELElBQUksQ0FBQzJELEdBQUwsQ0FBU0osR0FBVCxDQUFoQixDQUFYLEVBQTJDekIsTUFBM0MsQ0FBUDtBQUNGLEdBTGdCO0FBTWpCO0FBQ0EyQixPQVBpQixpQkFPWEcsR0FQVyxFQU9OQyxDQVBNLEVBT0g7QUFDWCxXQUFPLENBQUNELEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU0MsQ0FBVixFQUFhRCxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNDLENBQXRCLENBQVA7QUFDRixHQVRnQjtBQVdqQnJELE1BWGlCLGdCQVdac0QsSUFYWSxFQVdOQyxJQVhNLEVBV0E7QUFDZCxXQUFPL0QsSUFBSSxDQUFDZ0UsSUFBTCxDQUNKaEUsSUFBSSxDQUFDaUUsR0FBTCxDQUFTSCxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVDLElBQUksQ0FBQyxDQUFELENBQXZCLEVBQTRCLENBQTVCLElBQWlDL0QsSUFBSSxDQUFDaUUsR0FBTCxDQUFTSCxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVDLElBQUksQ0FBQyxDQUFELENBQXZCLEVBQTRCLENBQTVCLENBRDdCLENBQVA7QUFHRixHQWZnQjtBQWlCakI3QixnQkFqQmlCLDBCQWlCRmdDLEdBakJFLEVBaUJHQyxHQWpCSCxFQWlCUTtBQUN0QixXQUFPbkUsSUFBSSxDQUFDb0UsS0FBTCxDQUFXcEUsSUFBSSxDQUFDd0QsTUFBTCxNQUFpQlcsR0FBRyxHQUFHRCxHQUFOLEdBQVksQ0FBN0IsSUFBa0NBLEdBQTdDLENBQVA7QUFDRixHQW5CZ0I7QUFxQmpCRyxRQXJCaUIsa0JBcUJWQyxRQXJCVSxFQXFCQUMsS0FyQkEsRUFxQk87QUFDckIsUUFBTUMsaUJBQWlCLEdBQUc7QUFDdkJ2QyxPQUFDLEVBQUVxQyxRQUFRLENBQUMsQ0FBRCxDQUFSLEdBQWN0RSxJQUFJLENBQUMyRCxHQUFMLENBQVNZLEtBQVQsQ0FBZCxHQUFnQ0QsUUFBUSxDQUFDLENBQUQsQ0FBUixHQUFjdEUsSUFBSSxDQUFDMEQsR0FBTCxDQUFTYSxLQUFULENBRDFCO0FBRXZCcEMsT0FBQyxFQUFFbUMsUUFBUSxDQUFDLENBQUQsQ0FBUixHQUFjdEUsSUFBSSxDQUFDMEQsR0FBTCxDQUFTYSxLQUFULENBQWQsR0FBZ0NELFFBQVEsQ0FBQyxDQUFELENBQVIsR0FBY3RFLElBQUksQ0FBQzJELEdBQUwsQ0FBU1ksS0FBVDtBQUYxQixLQUExQjtBQUlBLFdBQU9DLGlCQUFQO0FBQ0YsR0EzQmdCO0FBNkJqQjFCLGtCQTdCaUIsNEJBNkJBMkIsSUE3QkEsRUE2Qk1DLFNBN0JOLEVBNkJpQjtBQUUvQixRQUFNQyxRQUFRLEdBQUdGLElBQUksQ0FBQ2xGLEdBQUwsQ0FBUyxDQUFULElBQWNtRixTQUFTLENBQUNuRixHQUFWLENBQWMsQ0FBZCxDQUEvQjtBQUNBLFFBQU1xRixRQUFRLEdBQUdILElBQUksQ0FBQ2xGLEdBQUwsQ0FBUyxDQUFULElBQWNtRixTQUFTLENBQUNuRixHQUFWLENBQWMsQ0FBZCxDQUEvQjtBQUdBLFFBQU1zRixLQUFLLEdBQUdILFNBQVMsQ0FBQ3BGLEdBQVYsQ0FBYyxDQUFkLElBQW1CbUYsSUFBSSxDQUFDbkYsR0FBTCxDQUFTLENBQVQsQ0FBakM7QUFDQSxRQUFNd0YsS0FBSyxHQUFHSixTQUFTLENBQUNwRixHQUFWLENBQWMsQ0FBZCxJQUFtQm1GLElBQUksQ0FBQ25GLEdBQUwsQ0FBUyxDQUFULENBQWpDLENBUCtCLENBUy9COztBQUNBLFFBQUlxRixRQUFRLEdBQUdFLEtBQVgsR0FBbUJELFFBQVEsR0FBR0UsS0FBOUIsSUFBdUMsQ0FBM0MsRUFBOEM7QUFFM0NMLFVBQUksQ0FBQ2xGLEdBQUwsR0FBV2tGLElBQUksQ0FBQ00sU0FBTCxDQUFlTixJQUFJLENBQUNsRixHQUFwQixDQUFYO0FBQ0FtRixlQUFTLENBQUNuRixHQUFWLEdBQWdCbUYsU0FBUyxDQUFDSyxTQUFWLENBQW9CTCxTQUFTLENBQUNuRixHQUE5QixDQUFoQjtBQUVGO0FBQ0gsR0E3Q2dCLENBOENqQjtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXZLaUIsQ0FBYixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnLi9zaW11bGF0aW9uJztcbmltcG9ydCBTaW11bGF0aW9uVmlldyBmcm9tICcuL3NpbXVsYXRpb25fdmlldyc7XG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQge1BlcnNvbn0gZnJvbSAnLi9wZXJzb24nO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXNFbDEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgICAvLyBjb25zdCBjYW52YXNFbDIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVsxXTtcblxuICAgIGNhbnZhc0VsMS53aWR0aCA9IFNpbXVsYXRpb24uRElNX1g7XG4gICAgY2FudmFzRWwxLmhlaWdodCA9IFNpbXVsYXRpb24uRElNX1k7XG4gICAgY29uc3QgY3R4MSA9IGNhbnZhc0VsMS5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAvLyBjYW52YXNFbDIud2lkdGggPSBTaW11bGF0aW9uLkRJTV9YO1xuICAgIC8vIGNhbnZhc0VsMi5oZWlnaHQgPSBTaW11bGF0aW9uLkRJTV9ZO1xuICAgIC8vIGNvbnN0IGN0eDIgPSBjYW52YXNFbDIuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgY29uc29sZS5sb2coJ3dlYnBhY2sgaXMgd29ya2luZycpO1xuXG5cbiAgICB3aW5kb3cuU2ltdWxhdGlvbiA9IFNpbXVsYXRpb247XG4gICAgd2luZG93LlNpbXVsYXRpb25WaWV3ID0gU2ltdWxhdGlvblZpZXc7XG5cbiAgICBcblxuXG4gICAgbGV0IGRlbnNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktZGVuc2l0eS1yYW5nZScpO1xuICAgIGxldCBvdXRwdXREZW5zaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbnNpdHktdmFsdWUnKTtcblxuICAgIG91dHB1dERlbnNpdHkuaW5uZXJIVE1MID0gZGVuc2l0eS52YWx1ZTtcblxuICAgIGRlbnNpdHkub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXG4gICAgICAgIG91dHB1dERlbnNpdHkuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcbiAgICAgICAgbGV0IHMxID0gbmV3IFNpbXVsYXRpb24odGhpcy52YWx1ZSwgc29jaWFsRGlzdC52YWx1ZSAvIDEwMCwgY3R4MSk7XG4gICAgXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRlbnNpdHkudmFsdWUpO1xuXG4gICAgbGV0IHNvY2lhbERpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktc29jaWFsLXJhbmdlJyk7XG4gICAgbGV0IG91dHB1dFNvY2lhbERpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29jaWFsLXZhbHVlJyk7XG5cbiAgICBvdXRwdXRTb2NpYWxEaXN0LmlubmVySFRNTCA9IHNvY2lhbERpc3QudmFsdWU7XG5cbiAgICBzb2NpYWxEaXN0Lm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG91dHB1dFNvY2lhbERpc3QuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcbiAgICAgICAgbGV0IHMxID0gbmV3IFNpbXVsYXRpb24oZGVuc2l0eS52YWx1ZSwgdGhpcy52YWx1ZSAvIDEwMCwgY3R4MSk7XG4gICAgICAgIHJldHVybiBzMTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coc29jaWFsRGlzdC52YWx1ZSk7XG5cbiAgICBsZXQgc3RhcnRTaW11bGF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Jyk7XG4gICAgc3RhcnRTaW11bGF0aW9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzMSA9IG5ldyBTaW11bGF0aW9uKGRlbnNpdHkudmFsdWUsIHNvY2lhbERpc3QudmFsdWUgLyAxMDAsIGN0eDEpO1xuICAgICAgICBsZXQgc3YxID0gbmV3IFNpbXVsYXRpb25WaWV3KHMxLCBjdHgxKVxuICAgICAgICBzdjEuc3RhcnQoKTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHMxID0gbmV3IFNpbXVsYXRpb24oZGVuc2l0eS52YWx1ZSwgc29jaWFsRGlzdC52YWx1ZSAvIDEwMCwgY3R4MSk7XG4gICAgY29uc29sZS5sb2coczEpO1xuICAgIC8vIGxldCBzdjEgPSBuZXcgU2ltdWxhdGlvblZpZXcoczEsIGN0eDEpXG5cbiAgICBcbiAgICAvLyBzdjEuc3RhcnQoKTtcblxuXG4gICAgLy8gbGV0IHMyID0gbmV3IFNpbXVsYXRpb24oNTAsIDAuOCk7XG4gICAgLy8gY29uc29sZS5sb2coczIpO1xuICAgIC8vIGxldCBzdjIgPSBuZXcgU2ltdWxhdGlvblZpZXcoczIsIGN0eDIpXG4gICAgLy8gc3YyLnN0YXJ0KCk7XG5cblxuXG4gICAgXG59KTsiLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBTaW11bGF0aW9uIGZyb20gJy4vc2ltdWxhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVycykge1xuICAgIHRoaXMucG9zICA9IHBhcmFtZXRlcnMucG9zO1xuICAgIHRoaXMudmVsICA9IHBhcmFtZXRlcnMudmVsO1xuICAgIHRoaXMucmFkaXVzICA9IHBhcmFtZXRlcnMucmFkaXVzO1xuICAgIHRoaXMuY29sb3IgID0gcGFyYW1ldGVycy5jb2xvcjtcbiAgICB0aGlzLm1hc3MgPSBwYXJhbWV0ZXJzLm1hc3M7XG4gICAgdGhpcy5zaW11bGF0aW9uID0gcGFyYW1ldGVycy5zaW11bGF0aW9uO1xuICAgIH1cblxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKFxuICAgICAgICAgICAgdGhpcy5wb3NbMF0sXG4gICAgICAgICAgICB0aGlzLnBvc1sxXSxcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDIgKiBNYXRoLlBJXG4gICAgICAgICAgICAvLyBmYWxzZVxuICAgICAgICApO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMucG9zID0gWyh0aGlzLnBvc1swXSArIHRoaXMudmVsWzBdKSwgKHRoaXMucG9zWzFdICsgdGhpcy52ZWxbMV0pXVxuICAgICAgICB0aGlzLnZlbCA9IHRoaXMuc2ltdWxhdGlvbi5ib3VuY2UodGhpcy5wb3MsIHRoaXMudmVsKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wb3MpO1xuICAgIH07XG5cbiAgICBjaGFuZ2VEaXIodmVsKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoTWF0aC5hYnModmVsWzBdKSA+IE1hdGguYWJzKHZlbFsxXSkpIHtcbiAgICAgICAgICAgIHZlbFswXSA9IC0gdmVsWzBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2ZWxbMV0gPSAtIHZlbFsxXVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdmVsO1xuICAgIH1cbiAgICBcbiAgICBpc0NvbGxpZGVkV2l0aChvdGhlck9iamVjdCkge1xuICAgICAgICBjb25zdCBjZW50ZXJEaXN0ID0gVXRpbC5kaXN0KHRoaXMucG9zLCBvdGhlck9iamVjdC5wb3MpO1xuICAgICAgICBpZiAoY2VudGVyRGlzdCA8ICh0aGlzLnJhZGl1cyArIG90aGVyT2JqZWN0LnJhZGl1cykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICB0aGlzLnNpbXVsYXRpb24ucmVtb3ZlKHRoaXMpO1xuICAgIH1cblxuIH1cblxuXG4iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL21vdmluZ19vYmplY3RcIjtcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVFMgPSB7XG4gICAgUkFESVVTOiAyLFxuICAgIENPTE9SOiBcIiMwMDAwNjZcIixcbiAgICBTUEVFRDogMixcbiAgICBNQVNTOiAxXG59XG5cbmV4cG9ydCBjbGFzcyBQZXJzb24gZXh0ZW5kcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMgPSB7fSkge1xuICAgICAgICBwYXJhbWV0ZXJzLmNvbG9yID0gREVGQVVMVFMuQ09MT1I7XG4gICAgICAgIHBhcmFtZXRlcnMucmFkaXVzID0gREVGQVVMVFMuUkFESVVTO1xuICAgICAgICBwYXJhbWV0ZXJzLm1hc3MgPSBERUZBVUxUUy5NQVNTO1xuICAgICAgICBwYXJhbWV0ZXJzLnBvcyA9IHBhcmFtZXRlcnMucG9zIHx8IHBhcmFtZXRlcnMuc2ltdWxhdGlvbi5yYW5kb21Qb3NpdGlvbigpO1xuICAgICAgICBwYXJhbWV0ZXJzLnZlbCA9IHBhcmFtZXRlcnMudmVsIHx8IFV0aWwucmFuZG9tVmVjKERFRkFVTFRTLlNQRUVEKTtcbiAgICAgICAgcGFyYW1ldGVycy5jb25zY2lvdXNDdGl6ZW4gPSBmYWxzZTtcbiAgICAgICAgLy8gcGFyYW1ldGVycy5wb3MgPSBwYXJhbWV0ZXJzLnBvcztcbiAgICAgICAgLy8gcGFyYW1ldGVycy52ZWwgPSBwYXJhbWV0ZXJzLnZlbDtcbiAgICAgICAgc3VwZXIocGFyYW1ldGVycyk7XG4gICAgfVxuXG59IiwiaW1wb3J0IHtQZXJzb24sIERFRkFVTFRTfSBmcm9tICcuL3BlcnNvbic7XG5pbXBvcnQge1V0aWx9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgU2ltdWxhdGlvblZpZXcgZnJvbSAnLi9zaW11bGF0aW9uX3ZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW11bGF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihkZW5zaXR5LCBzb2NpYWxEaXN0YW5jaW5nUmF0ZSwgY3R4KSB7XG4gICAgICAgIHRoaXMuRElNX1ggPSA2MDA7XG4gICAgICAgIHRoaXMuRElNX1kgPSA0MDA7XG4gICAgICAgIHRoaXMuTlVNX1BFUlNPTlMgPSAxMDA7XG4gICAgICAgIHRoaXMuZGVuc2l0eSA9IGRlbnNpdHk7XG4gICAgICAgIHRoaXMuc29jaWFsRGlzdGFuY2luZ1JhdGUgPSBzb2NpYWxEaXN0YW5jaW5nUmF0ZTtcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uSW5mZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wZXJzb25zID0gW107XG4gICAgICAgIHRoaXMuYWRkUGVyc29ucygpO1xuICAgICAgICB0aGlzLmFkZFBhdGllbnRaZXJvKCk7XG4gICAgICAgIHRoaXMuYWRkQ29uc2Npb3VzQ2l0aXplbigpO1xuICAgICAgICB0aGlzLmRyYXcoY3R4KTtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGVEZW5zaXR5KCkge1xuXG4gICAgLy8gfVxuXG4gICAgYWRkUGVyc29ucygpIHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5kZW5zaXR5OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGVyc29ucy5wdXNoKG5ldyBQZXJzb24oe1xuICAgICAgICAgICAgICAgIHBvczogdGhpcy5yYW5kb21Qb3NpdGlvbigpLCBcbiAgICAgICAgICAgICAgICB2ZWw6IFV0aWwucmFuZG9tVmVjKERFRkFVTFRTLlNQRUVEKSwgXG4gICAgICAgICAgICAgICAgc2ltdWxhdGlvbjogdGhpc30pKTtcblxuICAgICAgICAgICAgaWYgKGkhPT0wKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnBlcnNvbnMubGVuZ3RoLTE7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKFV0aWwuZGlzdCh0aGlzLnBlcnNvbnNbaV0ucG9zLCB0aGlzLnBlcnNvbnNbal0ucG9zKSAtIERFRkFVTFRTLlJBRElVUyAqIDIpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzb25zW2ldLnBvcyA9IHRoaXMucmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGo9LTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRQYXRpZW50WmVybygpIHtcbiAgICAgICAgdGhpcy5wZXJzb25zW3RoaXMucGVyc29ucy5sZW5ndGgtMV0uY29sb3IgPSAncmVkJztcbiAgICB9XG5cbiAgICBhZGRDb25zY2lvdXNDaXRpemVuKCkge1xuICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMucGVyc29ucy5sZW5ndGggKiB0aGlzLnNvY2lhbERpc3RhbmNpbmdSYXRlOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGVyc29uc1tpXS5jb25zY2lvdXNDaXRpemVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucGVyc29uc1tpXS52ZWwgPSBbMCwwXTtcbiAgICAgICAgICAgIHRoaXMucGVyc29uc1tpXS5jb2xvciA9ICdncmVlbic7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmFuZG9tUG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IHJhZCA9IERFRkFVTFRTLlJBRElVUztcbiAgICAgICAgbGV0IHggPSBVdGlsLnJhbmRvbUludFJhbmdlKHJhZCwgdGhpcy5ESU1fWCAtIHJhZCk7XG4gICAgICAgIGxldCB5ID0gVXRpbC5yYW5kb21JbnRSYW5nZShyYWQsIHRoaXMuRElNX1kgLSByYWQpO1xuICAgICAgICByZXR1cm4gW3gseV07XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLkRJTV9YLCB0aGlzLkRJTV9ZKTtcbiAgICAgICAgdGhpcy5wZXJzb25zLmZvckVhY2goIHBlcnNvbiA9PiBwZXJzb24uZHJhdyhjdHgpKTtcbiAgICB9XG5cbiAgICBtb3ZlT2JqZWN0cygpIHtcbiAgICAgICAgdGhpcy5wZXJzb25zLmZvckVhY2goKHBlcnNvbikgPT4ge1xuICAgICAgICAgICAgcGVyc29uLm1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlT2JqZWN0KG9iamVjdCkge1xuICAgICAgICB0aGlzLnBlcnNvbnMuc3BsaWNlKHRoaXMucGVyc29ucy5pbmRleE9mKG9iamVjdCksIDEpXG4gICAgfVxuICAgIFxuXG4gICAgY2hlY2tDb2xsaXNpb25zKCkge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5wZXJzb25zLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGo9aSsxOyBqPHRoaXMucGVyc29ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBwZXJzMSA9IHRoaXMucGVyc29uc1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgcGVyczIgPSB0aGlzLnBlcnNvbnNbal07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgaWYgKHBlcnMxLmlzQ29sbGlkZWRXaXRoKHBlcnMyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGVyczEudmVsID0gcGVyczEuY2hhbmdlRGlyKHBlcnMxLnZlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZXJzMS5jb2xvciA9ICcjZmYwMDAwJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlcnMyLnZlbCA9IHBlcnMyLmNoYW5nZURpcihwZXJzMi52ZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGVyczIuY29sb3IgPSAnI2ZmMDAwMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZXJzMS5wb3MgPSB0aGlzLmJvdW5jZShwZXJzMS52ZWwsIHBlcnMxLnBvcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlcnMyLnBvcyA9IHRoaXMuYm91bmNlKHBlcnMyLnZlbCwgcGVyczIucG9zKVxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbC5yZXNvbHZlQ29sbGlzaW9uKHBlcnMxLCBwZXJzMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGVyczEuY29sb3IgPT09ICdyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzMi5jb2xvciA9ICdyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBlcnMyLmNvbG9yID09PSAncmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnMxLmNvbG9yID0gJ3JlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbW92ZU9iamVjdChwZXJzMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbW92ZU9iamVjdChwZXJzMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGJvdW5jZShwb3MsIHZlbCkge1xuICAgICAgICBsZXQgcmFkID0gREVGQVVMVFMuUkFESVVTXG4gICAgICAgIGlmIChwb3NbMF0tcmFkIDwgMCB8fCBwb3NbMF0rcmFkID4gdGhpcy5ESU1fWCkge1xuICAgICAgICAgICB2ZWxbMF0gPSAtIHZlbFswXSBcbiAgICAgICAgfSBlbHNlIGlmIChwb3NbMV0tcmFkIDwgMCB8fCBwb3NbMV0rcmFkID4gdGhpcy5ESU1fWSkge1xuICAgICAgICAgICAgdmVsWzFdID0gLSB2ZWxbMV1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmVsO1xuICAgIH1cblxuICAgIGhhbmRsZUluZmVjdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucGVyc29ucy5ldmVyeShwZXJzb24gPT4gcGVyc29uLmNvbG9yID09PSAncmVkJykpIHtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGlvbkluZmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0ZXAoKSB7XG5cbiAgICAgICAgdGhpcy5tb3ZlT2JqZWN0cygpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9ucygpO1xuICAgICAgICB0aGlzLmhhbmRsZUluZmVjdGlvbigpO1xuXG4gICAgICAgIC8vIGlmICghdGhpcy5wb3B1bGF0aW9uSW5mZWN0ZWQpIHtcbiAgICAgICAgLy8gICAgIHRoaXMubW92ZU9iamVjdHMoKTtcbiAgICAgICAgLy8gICAgIHRoaXMuY2hlY2tDb2xsaXNpb25zKCk7XG4gICAgICAgIC8vICAgICB0aGlzLmhhbmRsZUluZmVjdGlvbigpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbn1cblxuU2ltdWxhdGlvbi5ESU1fWCA9IDYwMDtcblNpbXVsYXRpb24uRElNX1kgPSA0MDA7XG4vLyBTaW11bGF0aW9uLk5VTV9QRVJTT05TID0gMTAwO1xuIiwiaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnLi9zaW11bGF0aW9uJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW11bGF0aW9uVmlldyB7XG4gICAgY29uc3RydWN0b3Ioc2ltdWxhdGlvbiwgY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnNpbXVsYXRpb24gPSBzaW11bGF0aW9uO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBsZXQgc2ltdWxhdGlvbkludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaW11bGF0aW9uLnN0ZXAoKTtcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGlvbi5kcmF3KHRoaXMuY3R4KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbXVsYXRpb24ucG9wdWxhdGlvbkluZmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzaW11bGF0aW9uSW50ZXJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyMCk7XG5cbiAgICAgICAgXG4gICAgfVxuXG59IiwiZXhwb3J0IGNvbnN0IFV0aWwgPSB7XG4gICAvLyBSZXR1cm4gYSByYW5kb21seSBvcmllbnRlZCB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gbGVuZ3RoLlxuICAgcmFuZG9tVmVjKGxlbmd0aCkge1xuICAgICAgY29uc3QgZGVnID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgcmV0dXJuIFV0aWwuc2NhbGUoW01hdGguc2luKGRlZyksIE1hdGguY29zKGRlZyldLCBsZW5ndGgpO1xuICAgfSxcbiAgIC8vIFNjYWxlIHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgYnkgdGhlIGdpdmVuIGFtb3VudC5cbiAgIHNjYWxlKHZlYywgbSkge1xuICAgICAgcmV0dXJuIFt2ZWNbMF0gKiBtLCB2ZWNbMV0gKiBtXTtcbiAgIH0sXG5cbiAgIGRpc3QocG9zMSwgcG9zMikge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgICAgIE1hdGgucG93KHBvczFbMF0gLSBwb3MyWzBdLCAyKSArIE1hdGgucG93KHBvczFbMV0gLSBwb3MyWzFdLCAyKVxuICAgICAgKVxuICAgfSxcbiAgIFxuICAgcmFuZG9tSW50UmFuZ2UobWluLCBtYXgpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICAgfSxcblxuICAgcm90YXRlKHZlbG9jaXR5LCBhbmdsZSkge1xuICAgICAgY29uc3Qgcm90YXRlZFZlbG9jaXRpZXMgPSB7XG4gICAgICAgICB4OiB2ZWxvY2l0eVswXSAqIE1hdGguY29zKGFuZ2xlKSAtIHZlbG9jaXR5WzFdICogTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgeTogdmVsb2NpdHlbMF0gKiBNYXRoLnNpbihhbmdsZSkgKyB2ZWxvY2l0eVsxXSAqIE1hdGguY29zKGFuZ2xlKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdGF0ZWRWZWxvY2l0aWVzO1xuICAgfSxcblxuICAgcmVzb2x2ZUNvbGxpc2lvbihwZXJzLCBvdGhlclBlcnMpIHtcblxuICAgICAgY29uc3QgeFZlbERpZmYgPSBwZXJzLnZlbFswXSAtIG90aGVyUGVycy52ZWxbMF07XG4gICAgICBjb25zdCB5VmVsRGlmZiA9IHBlcnMudmVsWzFdIC0gb3RoZXJQZXJzLnZlbFsxXTtcblxuXG4gICAgICBjb25zdCB4RGlzdCA9IG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXTtcbiAgICAgIGNvbnN0IHlEaXN0ID0gb3RoZXJQZXJzLnBvc1sxXSAtIHBlcnMucG9zWzFdO1xuXG4gICAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgb3ZlcmxhcCBvZiBwZXJzXG4gICAgICBpZiAoeFZlbERpZmYgKiB4RGlzdCArIHlWZWxEaWZmICogeURpc3QgPj0gMCkge1xuXG4gICAgICAgICBwZXJzLnZlbCA9IHBlcnMuY2hhbmdlRGlyKHBlcnMudmVsKTtcbiAgICAgICAgIG90aGVyUGVycy52ZWwgPSBvdGhlclBlcnMuY2hhbmdlRGlyKG90aGVyUGVycy52ZWwpO1xuICAgICAgICAgXG4gICAgICB9XG4gICB9XG4gICAvLyByZXNvbHZlQ29sbGlzaW9uKHBlcnMsIG90aGVyUGVycykge1xuICAgLy8gICAgY29uc3QgeFZlbERpZmYgPSBwZXJzLnZlbFswXSAtIG90aGVyUGVycy52ZWxbMF07XG4gICAvLyAgICBjb25zdCB5VmVsRGlmZiA9IHBlcnMudmVsWzFdIC0gb3RoZXJQZXJzLnZlbFsxXTtcblxuXG4gICAvLyAgICBjb25zdCB4RGlzdCA9IG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXTtcbiAgIC8vICAgIGNvbnN0IHlEaXN0ID0gb3RoZXJQZXJzLnBvc1sxXSAtIHBlcnMucG9zWzFdO1xuXG4gICAvLyAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgb3ZlcmxhcCBvZiBwZXJzXG4gICAvLyAgICBpZiAoeFZlbERpZmYgKiB4RGlzdCArIHlWZWxEaWZmICogeURpc3QgPj0gMCkge1xuXG4gICAvLyAgICAgICAvLyBHcmFiIGFuZ2xlIGJldHdlZW4gdGhlIHR3byBjb2xsaWRpbmcgcGVyc1xuICAgLy8gICAgICAgY29uc3QgYW5nbGUgPSAtTWF0aC5hdGFuMihvdGhlclBlcnMucG9zWzFdIC0gcGVycy5wb3NbMV0sIG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXSk7XG5cbiAgIC8vICAgICAgIC8vIFN0b3JlIG1hc3MgaW4gdmFyIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgaW4gY29sbGlzaW9uIGVxdWF0aW9uXG4gICAvLyAgICAgICBjb25zdCBtMSA9IHBlcnMubWFzcztcbiAgIC8vICAgICAgIGNvbnN0IG0yID0gb3RoZXJQZXJzLm1hc3M7XG5cbiAgIC8vICAgICAgIC8vIHZlbCBiZWZvcmUgZXF1YXRpb25cbiAgIC8vICAgICAgIGNvbnN0IHUxID0gVXRpbC5yb3RhdGUocGVycy52ZWwsIGFuZ2xlKTtcbiAgIC8vICAgICAgIGNvbnN0IHUyID0gVXRpbC5yb3RhdGUob3RoZXJQZXJzLnZlbCwgYW5nbGUpO1xuXG4gICAvLyAgICAgICAvLyB2ZWwgYWZ0ZXIgMWQgY29sbGlzaW9uIGVxdWF0aW9uXG4gICAvLyAgICAgICBjb25zdCB2MSA9IFt1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTEueV07XG4gICAvLyAgICAgICBjb25zdCB2MiA9IFt1Mi54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTEueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTIueV07XG5cbiAgIC8vICAgICAgIC8vIEZpbmFsIHZlbCBhZnRlciByb3RhdGluZyBheGlzIGJhY2sgdG8gb3JpZ2luYWwgbG9jYXRpb25cbiAgIC8vICAgICAgIGNvbnN0IHZGaW5hbDEgPSBVdGlsLnJvdGF0ZSh2MSwgLWFuZ2xlKTtcbiAgIC8vICAgICAgIGNvbnN0IHZGaW5hbDIgPSBVdGlsLnJvdGF0ZSh2MiwgLWFuZ2xlKTtcblxuICAgLy8gICAgICAgLy8gU3dhcCBwZXJzIHZlbG9jaXRpZXMgZm9yIHJlYWxpc3RpYyBib3VuY2UgZWZmZWN0XG4gICAvLyAgICAgICBwZXJzLnZlbFswXSA9IHZGaW5hbDEueDtcbiAgIC8vICAgICAgIHBlcnMudmVsWzFdID0gdkZpbmFsMS55O1xuXG4gICAvLyAgICAgICBvdGhlclBlcnMudmVsWzBdID0gdkZpbmFsMi54O1xuICAgLy8gICAgICAgb3RoZXJQZXJzLnZlbFsxXSA9IHZGaW5hbDIueTtcbiAgIC8vICAgIH1cbiAgIC8vIH1cblxuICAgLy8gcmVzb2x2ZUNvbGxpc2lvbihwZXJzLCBvdGhlclBlcnMpIHtcbiAgIC8vICAgIGNvbnN0IHhWZWxEaWZmID0gcGVycy52ZWxbMF0gLSBvdGhlclBlcnMudmVsWzBdO1xuICAgLy8gICAgY29uc3QgeVZlbERpZmYgPSBwZXJzLnZlbFsxXSAtIG90aGVyUGVycy52ZWxbMV07XG5cbiAgIC8vICAgIGNvbnN0IHhEaXN0ID0gb3RoZXJQZXJzLnBvc1swXSAtIHBlcnMucG9zWzBdO1xuICAgLy8gICAgY29uc3QgeURpc3QgPSBvdGhlclBlcnMucG9zWzFdIC0gcGVycy5wb3NbMV07XG5cbiAgIC8vICAgIC8vIFByZXZlbnQgYWNjaWRlbnRhbCBvdmVybGFwIG9mIHBlcnNcbiAgIC8vICAgIGlmICh4VmVsRGlmZiAqIHhEaXN0ICsgeVZlbERpZmYgKiB5RGlzdCA+PSAwKSB7XG5cbiAgIC8vICAgICAgIC8vIEdyYWIgYW5nbGUgYmV0d2VlbiB0aGUgdHdvIGNvbGxpZGluZyBwZXJzXG4gICAvLyAgICAgICBjb25zdCBhbmdsZSA9IC1NYXRoLmF0YW4yKG90aGVyUGVycy5wb3NbMV0gLSBwZXJzLnBvc1sxXSwgb3RoZXJQZXJzLnBvc1swXSAtIHBlcnMucG9zWzBdKTtcblxuICAgLy8gICAgICAgLy8gU3RvcmUgbWFzcyBpbiB2YXIgZm9yIGJldHRlciByZWFkYWJpbGl0eSBpbiBjb2xsaXNpb24gZXF1YXRpb25cbiAgIC8vICAgICAgIGNvbnN0IG0xID0gcGVycy5tYXNzO1xuICAgLy8gICAgICAgY29uc3QgbTIgPSBvdGhlclBlcnMubWFzcztcblxuICAgLy8gICAgICAgaWYgKHBlcnMuY29uc2Npb3VzQ2l0aXplbiA9PT0gdHJ1ZSkge1xuICAgLy8gICAgICAgICAgLy8gdmVsIGJlZm9yZSBlcXVhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdTEgPSBVdGlsLnJvdGF0ZShwZXJzLnZlbCwgYW5nbGUpO1xuICAgLy8gICAgICAgICAgY29uc3QgdTIgPSBVdGlsLnJvdGF0ZShvdGhlclBlcnMudmVsLCBhbmdsZSk7XG5cbiAgIC8vICAgICAgICAgIC8vIHZlbCBhZnRlciAxZCBjb2xsaXNpb24gZXF1YXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHYxID0gW3UxLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1Mi54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1MS55XTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHYyID0gW3UyLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1MS54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1Mi55XTtcblxuICAgLy8gICAgICAgICAgLy8gRmluYWwgdmVsIGFmdGVyIHJvdGF0aW5nIGF4aXMgYmFjayB0byBvcmlnaW5hbCBsb2NhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdkZpbmFsMSA9IFV0aWwucm90YXRlKHYxLCAtYW5nbGUpO1xuICAgLy8gICAgICAgICAgY29uc3QgdkZpbmFsMiA9IFV0aWwucm90YXRlKHYyLCAtYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyBTd2FwIHBlcnMgdmVsb2NpdGllcyBmb3IgcmVhbGlzdGljIGJvdW5jZSBlZmZlY3RcbiAgIC8vICAgICAgICAgIC8vIHBlcnMudmVsWzBdID0gdkZpbmFsMS54O1xuICAgLy8gICAgICAgICAgLy8gcGVycy52ZWxbMV0gPSB2RmluYWwxLnk7XG4gICAvLyAgICAgICAgICAvLyBwZXJzLnZlbFswXSA9IDA7XG4gICAvLyAgICAgICAgICAvLyBwZXJzLnZlbFsxXSA9IDA7XG5cbiAgIC8vICAgICAgICAgIG90aGVyUGVycy52ZWxbMF0gPSB2RmluYWwyLng7XG4gICAvLyAgICAgICAgICBvdGhlclBlcnMudmVsWzFdID0gdkZpbmFsMi55O1xuXG4gICAvLyAgICAgICB9IGVsc2UgaWYgKG90aGVyUGVycy5jb25zY2lvdXNDaXRpemVuID09PSB0cnVlKXtcbiAgIC8vICAgICAgICAgIC8vIHZlbCBiZWZvcmUgZXF1YXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHUxID0gVXRpbC5yb3RhdGUocGVycy52ZWwsIGFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHUyID0gVXRpbC5yb3RhdGUob3RoZXJQZXJzLnZlbCwgYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyB2ZWwgYWZ0ZXIgMWQgY29sbGlzaW9uIGVxdWF0aW9uXG4gIFxuICAgLy8gICAgICAgICAgY29uc3QgdjEgPSBbdTEueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUyLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUxLnldO1xuICAgLy8gICAgICAgICAgY29uc3QgdjIgPSBbdTIueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUxLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUyLnldO1xuXG4gICAvLyAgICAgICAgICAvLyBGaW5hbCB2ZWwgYWZ0ZXIgcm90YXRpbmcgYXhpcyBiYWNrIHRvIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB2RmluYWwxID0gVXRpbC5yb3RhdGUodjEsIC1hbmdsZSk7XG4gICAvLyAgICAgICAgICBjb25zdCB2RmluYWwyID0gVXRpbC5yb3RhdGUodjIsIC1hbmdsZSk7XG5cbiAgIC8vICAgICAgICAgIC8vIFN3YXAgcGVycyB2ZWxvY2l0aWVzIGZvciByZWFsaXN0aWMgYm91bmNlIGVmZmVjdFxuICAgLy8gICAgICAgICAgcGVycy52ZWxbMF0gPSB2RmluYWwxLng7XG4gICAvLyAgICAgICAgICBwZXJzLnZlbFsxXSA9IHZGaW5hbDEueTtcblxuICAgLy8gICAgICAgICAgLy8gb3RoZXJQZXJzLnZlbFswXSA9IHZGaW5hbDIueDtcbiAgIC8vICAgICAgICAgIC8vIG90aGVyUGVycy52ZWxbMV0gPSB2RmluYWwyLnk7XG4gICAvLyAgICAgICAgICAvLyBvdGhlclBlcnMudmVsWzBdID0gMDtcbiAgIC8vICAgICAgICAgIC8vIG90aGVyUGVycy52ZWxbMV0gPSAwO1xuICAgLy8gICAgICAgfSBlbHNlIHtcbiAgIC8vICAgICAgICAgIC8vIHZlbCBiZWZvcmUgZXF1YXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHUxID0gVXRpbC5yb3RhdGUocGVycy52ZWwsIGFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHUyID0gVXRpbC5yb3RhdGUob3RoZXJQZXJzLnZlbCwgYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyB2ZWwgYWZ0ZXIgMWQgY29sbGlzaW9uIGVxdWF0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB2MSA9IFt1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTEueV07XG4gICAvLyAgICAgICAgICBjb25zdCB2MiA9IFt1Mi54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTEueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTIueV07XG5cbiAgIC8vICAgICAgICAgIC8vIEZpbmFsIHZlbCBhZnRlciByb3RhdGluZyBheGlzIGJhY2sgdG8gb3JpZ2luYWwgbG9jYXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDEgPSBVdGlsLnJvdGF0ZSh2MSwgLWFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDIgPSBVdGlsLnJvdGF0ZSh2MiwgLWFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gU3dhcCBwZXJzIHZlbG9jaXRpZXMgZm9yIHJlYWxpc3RpYyBib3VuY2UgZWZmZWN0XG4gICAvLyAgICAgICAgICBwZXJzLnZlbFswXSA9IHZGaW5hbDEueDtcbiAgIC8vICAgICAgICAgIHBlcnMudmVsWzFdID0gdkZpbmFsMS55O1xuXG4gICAvLyAgICAgICAgICBvdGhlclBlcnMudmVsWzBdID0gdkZpbmFsMi54O1xuICAgLy8gICAgICAgICAgb3RoZXJQZXJzLnZlbFsxXSA9IHZGaW5hbDIueTtcbiAgIC8vICAgICAgIH1cbiAgIC8vICAgIH1cbiAgIC8vIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9