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
  var canvasEl2 = document.getElementsByTagName("canvas")[1]; // canvasEl1.width = window.innerWidth;
  // canvasEl1.height = window.innerHeight;

  canvasEl1.width = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_X;
  canvasEl1.height = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_Y;
  var ctx1 = canvasEl1.getContext("2d");
  canvasEl2.width = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_X;
  canvasEl2.height = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_Y;
  var ctx2 = canvasEl2.getContext("2d"); // canvasEl1.width = Game.DIM_X;
  // canvasEl1.height = Game.DIM_Y;

  console.log('webpack is working'); // window.MovingObject = MovingObject;
  // window.Person = Person;
  // window.Simulation = Simulation;
  // window.SimulationView = SimulationView;
  // const Simulation = new Simulation();
  // new SimulationView(game, ctx1).start();
  // let mo = new MovingObject({
  //     pos: [30, 30],
  //     vel: [20, 20],
  //     radius: 1,
  //     color: "#00ff00"
  // });
  // console.log(mo);
  // mo.draw(ctx1);
  // mo.move();

  var s1 = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"](); // let np = new Person({ 
  //     pos: [90, 90], 
  //     vel: [20, 20]
  // });
  // console.log(np);
  // np.draw(ctx1);

  console.log(s1);
  var sv1 = new _simulation_view__WEBPACK_IMPORTED_MODULE_1__["default"](s1, ctx1); // console.log(sv1);

  sv1.start();
  var s2 = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"](); // let np = new Person({ 
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
  RADIUS: 5,
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
  function Simulation() {
    _classCallCheck(this, Simulation);

    this.DIM_X = 600;
    this.DIM_Y = 400;
    this.NUM_PERSONS = 100;
    this.persons = [];
    this.addPersons();
    this.addPatientZero();
    this.addConsciousCitizen();
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
      for (var i = 0; i < this.persons.length * 0.75; i++) {
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
      // Grab angle between the two colliding pers
      var angle = -Math.atan2(otherPers.pos[1] - pers.pos[1], otherPers.pos[0] - pers.pos[0]); // Store mass in var for better readability in collision equation

      var m1 = pers.mass;
      var m2 = otherPers.mass; // vel before equation

      var u1 = Util.rotate(pers.vel, angle);
      var u2 = Util.rotate(otherPers.vel, angle); // vel after 1d collision equation
      // const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
      // const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

      var v1 = [u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), u1.y];
      var v2 = [u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), u2.y]; // Final vel after rotating axis back to original location

      var vFinal1 = Util.rotate(v1, -angle);
      var vFinal2 = Util.rotate(v2, -angle); // Swap pers velocities for realistic bounce effect

      pers.vel[0] = vFinal1.x;
      pers.vel[1] = vFinal1.y;
      otherPers.vel[0] = vFinal2.x;
      otherPers.vel[1] = vFinal2.y;
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
  //          pers.vel[0] = 0;
  //          pers.vel[1] = 0;
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
  //          // const vFinal2 = Util.rotate(v2, -angle);
  //          // Swap pers velocities for realistic bounce effect
  //          pers.vel[0] = vFinal1.x;
  //          pers.vel[1] = vFinal1.y;
  //          // otherPers.vel[0] = vFinal2.x;
  //          // otherPers.vel[1] = vFinal2.y;
  //          otherPers.vel[0] = 0;
  //          otherPers.vel[1] = 0;
  //       } else {
  //          // vel before equation
  //          const u1 = Util.rotate(pers.vel, angle);
  //          const u2 = Util.rotate(otherPers.vel, angle);
  //          // vel after 1d collision equation
  //          // const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
  //          // const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb3Zpbmdfb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb25fdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbDEiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNhbnZhc0VsMiIsIndpZHRoIiwiU2ltdWxhdGlvbiIsIkRJTV9YIiwiaGVpZ2h0IiwiRElNX1kiLCJjdHgxIiwiZ2V0Q29udGV4dCIsImN0eDIiLCJjb25zb2xlIiwibG9nIiwiczEiLCJzdjEiLCJTaW11bGF0aW9uVmlldyIsInN0YXJ0IiwiczIiLCJzdjIiLCJNb3ZpbmdPYmplY3QiLCJwYXJhbWV0ZXJzIiwicG9zIiwidmVsIiwicmFkaXVzIiwiY29sb3IiLCJtYXNzIiwic2ltdWxhdGlvbiIsImN0eCIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlIiwiYm91bmNlIiwiYWJzIiwib3RoZXJPYmplY3QiLCJjZW50ZXJEaXN0IiwiVXRpbCIsImRpc3QiLCJyZW1vdmUiLCJERUZBVUxUUyIsIlJBRElVUyIsIkNPTE9SIiwiU1BFRUQiLCJNQVNTIiwiUGVyc29uIiwicmFuZG9tUG9zaXRpb24iLCJyYW5kb21WZWMiLCJjb25zY2lvdXNDdGl6ZW4iLCJOVU1fUEVSU09OUyIsInBlcnNvbnMiLCJhZGRQZXJzb25zIiwiYWRkUGF0aWVudFplcm8iLCJhZGRDb25zY2lvdXNDaXRpemVuIiwiaSIsInB1c2giLCJqIiwibGVuZ3RoIiwiY29uc2Npb3VzQ2l0aXplbiIsInJhZCIsIngiLCJyYW5kb21JbnRSYW5nZSIsInkiLCJjbGVhclJlY3QiLCJmb3JFYWNoIiwicGVyc29uIiwiZHJhdyIsIm1vdmUiLCJvYmplY3QiLCJzcGxpY2UiLCJpbmRleE9mIiwicGVyczEiLCJwZXJzMiIsImlzQ29sbGlkZWRXaXRoIiwicmVzb2x2ZUNvbGxpc2lvbiIsIm1vdmVPYmplY3RzIiwiY2hlY2tDb2xsaXNpb25zIiwic2V0SW50ZXJ2YWwiLCJzdGVwIiwiZGVnIiwicmFuZG9tIiwic2NhbGUiLCJzaW4iLCJjb3MiLCJ2ZWMiLCJtIiwicG9zMSIsInBvczIiLCJzcXJ0IiwicG93IiwibWluIiwibWF4IiwiZmxvb3IiLCJyb3RhdGUiLCJ2ZWxvY2l0eSIsImFuZ2xlIiwicm90YXRlZFZlbG9jaXRpZXMiLCJwZXJzIiwib3RoZXJQZXJzIiwieFZlbERpZmYiLCJ5VmVsRGlmZiIsInhEaXN0IiwieURpc3QiLCJhdGFuMiIsIm0xIiwibTIiLCJ1MSIsInUyIiwidjEiLCJ2MiIsInZGaW5hbDEiLCJ2RmluYWwyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7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QU8sQ0FBQ2pELENBQTNCO0FBQ0Y7QUFDSCxHQXBFZ0IsQ0FzRWpCO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUExSmlCLENBQWIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBTaW11bGF0aW9uIGZyb20gJy4vc2ltdWxhdGlvbic7XG5pbXBvcnQgU2ltdWxhdGlvblZpZXcgZnJvbSAnLi9zaW11bGF0aW9uX3ZpZXcnO1xuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL21vdmluZ19vYmplY3QnO1xuaW1wb3J0IHtQZXJzb259IGZyb20gJy4vcGVyc29uJztcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzRWwxID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gICAgY29uc3QgY2FudmFzRWwyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMV07XG4gICAgLy8gY2FudmFzRWwxLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgLy8gY2FudmFzRWwxLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjYW52YXNFbDEud2lkdGggPSBTaW11bGF0aW9uLkRJTV9YO1xuICAgIGNhbnZhc0VsMS5oZWlnaHQgPSBTaW11bGF0aW9uLkRJTV9ZO1xuICAgIGNvbnN0IGN0eDEgPSBjYW52YXNFbDEuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNhbnZhc0VsMi53aWR0aCA9IFNpbXVsYXRpb24uRElNX1g7XG4gICAgY2FudmFzRWwyLmhlaWdodCA9IFNpbXVsYXRpb24uRElNX1k7XG4gICAgY29uc3QgY3R4MiA9IGNhbnZhc0VsMi5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgLy8gY2FudmFzRWwxLndpZHRoID0gR2FtZS5ESU1fWDtcbiAgICAvLyBjYW52YXNFbDEuaGVpZ2h0ID0gR2FtZS5ESU1fWTtcbiAgICBjb25zb2xlLmxvZygnd2VicGFjayBpcyB3b3JraW5nJyk7XG5cbiAgICAvLyB3aW5kb3cuTW92aW5nT2JqZWN0ID0gTW92aW5nT2JqZWN0O1xuICAgIC8vIHdpbmRvdy5QZXJzb24gPSBQZXJzb247XG4gICAgLy8gd2luZG93LlNpbXVsYXRpb24gPSBTaW11bGF0aW9uO1xuICAgIC8vIHdpbmRvdy5TaW11bGF0aW9uVmlldyA9IFNpbXVsYXRpb25WaWV3O1xuXG4gICAgLy8gY29uc3QgU2ltdWxhdGlvbiA9IG5ldyBTaW11bGF0aW9uKCk7XG4gICAgLy8gbmV3IFNpbXVsYXRpb25WaWV3KGdhbWUsIGN0eDEpLnN0YXJ0KCk7XG5cblxuICAgIC8vIGxldCBtbyA9IG5ldyBNb3ZpbmdPYmplY3Qoe1xuICAgIC8vICAgICBwb3M6IFszMCwgMzBdLFxuICAgIC8vICAgICB2ZWw6IFsyMCwgMjBdLFxuICAgIC8vICAgICByYWRpdXM6IDEsXG4gICAgLy8gICAgIGNvbG9yOiBcIiMwMGZmMDBcIlxuICAgIC8vIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKG1vKTtcbiAgICAvLyBtby5kcmF3KGN0eDEpO1xuICAgIC8vIG1vLm1vdmUoKTtcbiAgICBcbiAgICBcbiAgICBsZXQgczEgPSBuZXcgU2ltdWxhdGlvbigpO1xuICAgIFxuICAgIC8vIGxldCBucCA9IG5ldyBQZXJzb24oeyBcbiAgICAvLyAgICAgcG9zOiBbOTAsIDkwXSwgXG4gICAgLy8gICAgIHZlbDogWzIwLCAyMF1cbiAgICAvLyB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyhucCk7XG4gICAgLy8gbnAuZHJhdyhjdHgxKTtcblxuICAgIGNvbnNvbGUubG9nKHMxKTtcblxuICAgIGxldCBzdjEgPSBuZXcgU2ltdWxhdGlvblZpZXcoczEsIGN0eDEpXG4gICAgLy8gY29uc29sZS5sb2coc3YxKTtcbiAgICBzdjEuc3RhcnQoKTtcblxuXG4gICAgbGV0IHMyID0gbmV3IFNpbXVsYXRpb24oKTtcbiAgICBcbiAgICAvLyBsZXQgbnAgPSBuZXcgUGVyc29uKHsgXG4gICAgLy8gICAgIHBvczogWzkwLCA5MF0sIFxuICAgIC8vICAgICB2ZWw6IFsyMCwgMjBdXG4gICAgLy8gfSk7XG4gICAgLy8gY29uc29sZS5sb2cobnApO1xuICAgIC8vIG5wLmRyYXcoY3R4MSk7XG5cbiAgICBjb25zb2xlLmxvZyhzMik7XG5cbiAgICBsZXQgc3YyID0gbmV3IFNpbXVsYXRpb25WaWV3KHMyLCBjdHgyKVxuICAgIC8vIGNvbnNvbGUubG9nKHN2MSk7XG4gICAgc3YyLnN0YXJ0KCk7XG5cbiAgICBcbn0pOyIsImltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnLi9zaW11bGF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5wb3MgID0gcGFyYW1ldGVycy5wb3M7XG4gICAgdGhpcy52ZWwgID0gcGFyYW1ldGVycy52ZWw7XG4gICAgdGhpcy5yYWRpdXMgID0gcGFyYW1ldGVycy5yYWRpdXM7XG4gICAgdGhpcy5jb2xvciAgPSBwYXJhbWV0ZXJzLmNvbG9yO1xuICAgIHRoaXMubWFzcyA9IHBhcmFtZXRlcnMubWFzcztcbiAgICB0aGlzLnNpbXVsYXRpb24gPSBwYXJhbWV0ZXJzLnNpbXVsYXRpb247XG4gICAgfVxuXG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICB0aGlzLnBvc1swXSxcbiAgICAgICAgICAgIHRoaXMucG9zWzFdLFxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgICAgIC8vIGZhbHNlXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBbKHRoaXMucG9zWzBdICsgdGhpcy52ZWxbMF0pLCAodGhpcy5wb3NbMV0gKyB0aGlzLnZlbFsxXSldXG4gICAgICAgIHRoaXMudmVsID0gdGhpcy5zaW11bGF0aW9uLmJvdW5jZSh0aGlzLnBvcywgdGhpcy52ZWwpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBvcyk7XG4gICAgfTtcblxuICAgIGNoYW5nZURpcih2ZWwpIHtcbiAgICAgICAgXG4gICAgICAgIGlmIChNYXRoLmFicyh2ZWxbMF0pID4gTWF0aC5hYnModmVsWzFdKSkge1xuICAgICAgICAgICAgdmVsWzBdID0gLSB2ZWxbMF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZlbFsxXSA9IC0gdmVsWzFdXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB2ZWw7XG4gICAgfVxuICAgIFxuICAgIGlzQ29sbGlkZWRXaXRoKG90aGVyT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGNlbnRlckRpc3QgPSBVdGlsLmRpc3QodGhpcy5wb3MsIG90aGVyT2JqZWN0LnBvcyk7XG4gICAgICAgIGlmIChjZW50ZXJEaXN0IDwgKHRoaXMucmFkaXVzICsgb3RoZXJPYmplY3QucmFkaXVzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbi5yZW1vdmUodGhpcyk7XG4gICAgfVxuXG4gfVxuXG5cbiIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUUyA9IHtcbiAgICBSQURJVVM6IDUsXG4gICAgQ09MT1I6IFwiIzAwMDA2NlwiLFxuICAgIFNQRUVEOiAyLFxuICAgIE1BU1M6IDFcbn1cblxuZXhwb3J0IGNsYXNzIFBlcnNvbiBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVycyA9IHt9KSB7XG4gICAgICAgIHBhcmFtZXRlcnMuY29sb3IgPSBERUZBVUxUUy5DT0xPUjtcbiAgICAgICAgcGFyYW1ldGVycy5yYWRpdXMgPSBERUZBVUxUUy5SQURJVVM7XG4gICAgICAgIHBhcmFtZXRlcnMubWFzcyA9IERFRkFVTFRTLk1BU1M7XG4gICAgICAgIHBhcmFtZXRlcnMucG9zID0gcGFyYW1ldGVycy5wb3MgfHwgcGFyYW1ldGVycy5zaW11bGF0aW9uLnJhbmRvbVBvc2l0aW9uKCk7XG4gICAgICAgIHBhcmFtZXRlcnMudmVsID0gcGFyYW1ldGVycy52ZWwgfHwgVXRpbC5yYW5kb21WZWMoREVGQVVMVFMuU1BFRUQpO1xuICAgICAgICBwYXJhbWV0ZXJzLmNvbnNjaW91c0N0aXplbiA9IGZhbHNlO1xuICAgICAgICAvLyBwYXJhbWV0ZXJzLnBvcyA9IHBhcmFtZXRlcnMucG9zO1xuICAgICAgICAvLyBwYXJhbWV0ZXJzLnZlbCA9IHBhcmFtZXRlcnMudmVsO1xuICAgICAgICBzdXBlcihwYXJhbWV0ZXJzKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQge1BlcnNvbiwgREVGQVVMVFN9IGZyb20gJy4vcGVyc29uJztcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuRElNX1ggPSA2MDA7XG4gICAgICAgIHRoaXMuRElNX1kgPSA0MDA7XG4gICAgICAgIHRoaXMuTlVNX1BFUlNPTlMgPSAxMDA7XG4gICAgICAgIHRoaXMucGVyc29ucyA9IFtdO1xuICAgICAgICB0aGlzLmFkZFBlcnNvbnMoKTtcbiAgICAgICAgdGhpcy5hZGRQYXRpZW50WmVybygpO1xuICAgICAgICB0aGlzLmFkZENvbnNjaW91c0NpdGl6ZW4oKTtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGVEZW5zaXR5KCkge1xuXG4gICAgLy8gfVxuXG4gICAgYWRkUGVyc29ucygpIHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5OVU1fUEVSU09OUzsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnMucHVzaChuZXcgUGVyc29uKHtcbiAgICAgICAgICAgICAgICBwb3M6IHRoaXMucmFuZG9tUG9zaXRpb24oKSwgXG4gICAgICAgICAgICAgICAgdmVsOiBVdGlsLnJhbmRvbVZlYyhERUZBVUxUUy5TUEVFRCksIFxuICAgICAgICAgICAgICAgIHNpbXVsYXRpb246IHRoaXN9KSk7XG5cbiAgICAgICAgICAgIGlmIChpIT09MCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wZXJzb25zLmxlbmd0aC0xOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChVdGlsLmRpc3QodGhpcy5wZXJzb25zW2ldLnBvcywgdGhpcy5wZXJzb25zW2pdLnBvcykgLSBERUZBVUxUUy5SQURJVVMgKiAyKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc29uc1tpXS5wb3MgPSB0aGlzLnJhbmRvbVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBqPS0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkUGF0aWVudFplcm8oKSB7XG4gICAgICAgIHRoaXMucGVyc29uc1t0aGlzLnBlcnNvbnMubGVuZ3RoLTFdLmNvbG9yID0gJ3JlZCc7XG4gICAgfVxuXG4gICAgYWRkQ29uc2Npb3VzQ2l0aXplbigpIHtcbiAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLnBlcnNvbnMubGVuZ3RoICogMC43NTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0uY29uc2Npb3VzQ2l0aXplbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0udmVsID0gWzAsMF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmFuZG9tUG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IHJhZCA9IERFRkFVTFRTLlJBRElVUztcbiAgICAgICAgbGV0IHggPSBVdGlsLnJhbmRvbUludFJhbmdlKHJhZCwgdGhpcy5ESU1fWCAtIHJhZCk7XG4gICAgICAgIGxldCB5ID0gVXRpbC5yYW5kb21JbnRSYW5nZShyYWQsIHRoaXMuRElNX1kgLSByYWQpO1xuICAgICAgICByZXR1cm4gW3gseV07XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLkRJTV9YLCB0aGlzLkRJTV9ZKTtcbiAgICAgICAgdGhpcy5wZXJzb25zLmZvckVhY2goIHBlcnNvbiA9PiBwZXJzb24uZHJhdyhjdHgpKTtcbiAgICB9XG5cbiAgICBtb3ZlT2JqZWN0cygpIHtcbiAgICAgICAgdGhpcy5wZXJzb25zLmZvckVhY2goKHBlcnNvbikgPT4ge1xuICAgICAgICAgICAgcGVyc29uLm1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlT2JqZWN0KG9iamVjdCkge1xuICAgICAgICB0aGlzLnBlcnNvbnMuc3BsaWNlKHRoaXMucGVyc29ucy5pbmRleE9mKG9iamVjdCksIDEpXG4gICAgfVxuICAgIFxuXG4gICAgY2hlY2tDb2xsaXNpb25zKCkge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5wZXJzb25zLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGo9aSsxOyBqPHRoaXMucGVyc29ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBwZXJzMSA9IHRoaXMucGVyc29uc1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgcGVyczIgPSB0aGlzLnBlcnNvbnNbal07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgaWYgKHBlcnMxLmlzQ29sbGlkZWRXaXRoKHBlcnMyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGVyczEudmVsID0gcGVyczEuY2hhbmdlRGlyKHBlcnMxLnZlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZXJzMS5jb2xvciA9ICcjZmYwMDAwJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlcnMyLnZlbCA9IHBlcnMyLmNoYW5nZURpcihwZXJzMi52ZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGVyczIuY29sb3IgPSAnI2ZmMDAwMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZXJzMS5wb3MgPSB0aGlzLmJvdW5jZShwZXJzMS52ZWwsIHBlcnMxLnBvcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlcnMyLnBvcyA9IHRoaXMuYm91bmNlKHBlcnMyLnZlbCwgcGVyczIucG9zKVxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbC5yZXNvbHZlQ29sbGlzaW9uKHBlcnMxLCBwZXJzMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGVyczEuY29sb3IgPT09ICdyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzMi5jb2xvciA9ICdyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBlcnMyLmNvbG9yID09PSAncmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnMxLmNvbG9yID0gJ3JlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbW92ZU9iamVjdChwZXJzMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbW92ZU9iamVjdChwZXJzMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGJvdW5jZShwb3MsIHZlbCkge1xuICAgICAgICBsZXQgcmFkID0gREVGQVVMVFMuUkFESVVTXG4gICAgICAgIGlmIChwb3NbMF0tcmFkIDw9IDAgfHwgcG9zWzBdK3JhZD49IHRoaXMuRElNX1gpIHtcbiAgICAgICAgICAgdmVsWzBdID0gLSB2ZWxbMF0gXG4gICAgICAgIH0gZWxzZSBpZiAocG9zWzFdLXJhZCA8PSAwIHx8IHBvc1sxXStyYWQgPj0gdGhpcy5ESU1fWSkge1xuICAgICAgICAgICAgdmVsWzFdID0gLSB2ZWxbMV1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmVsO1xuICAgIH1cblxuICAgIHN0ZXAoKSB7XG4gICAgICAgIHRoaXMubW92ZU9iamVjdHMoKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbnMoKTtcbiAgICB9XG5cbn1cblxuU2ltdWxhdGlvbi5ESU1fWCA9IDYwMDtcblNpbXVsYXRpb24uRElNX1kgPSA0MDA7XG4vLyBTaW11bGF0aW9uLk5VTV9QRVJTT05TID0gMTAwO1xuIiwiaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnLi9zaW11bGF0aW9uJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW11bGF0aW9uVmlldyB7XG4gICAgY29uc3RydWN0b3Ioc2ltdWxhdGlvbiwgY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnNpbXVsYXRpb24gPSBzaW11bGF0aW9uO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNpbXVsYXRpb24uc3RlcCgpO1xuICAgICAgICAgICAgdGhpcy5zaW11bGF0aW9uLmRyYXcodGhpcy5jdHgpO1xuICAgICAgICB9LCAyMClcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IFV0aWwgPSB7XG4gICAvLyBSZXR1cm4gYSByYW5kb21seSBvcmllbnRlZCB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gbGVuZ3RoLlxuICAgcmFuZG9tVmVjKGxlbmd0aCkge1xuICAgICAgY29uc3QgZGVnID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgcmV0dXJuIFV0aWwuc2NhbGUoW01hdGguc2luKGRlZyksIE1hdGguY29zKGRlZyldLCBsZW5ndGgpO1xuICAgfSxcbiAgIC8vIFNjYWxlIHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgYnkgdGhlIGdpdmVuIGFtb3VudC5cbiAgIHNjYWxlKHZlYywgbSkge1xuICAgICAgcmV0dXJuIFt2ZWNbMF0gKiBtLCB2ZWNbMV0gKiBtXTtcbiAgIH0sXG5cbiAgIGRpc3QocG9zMSwgcG9zMikge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgICAgIE1hdGgucG93KHBvczFbMF0gLSBwb3MyWzBdLCAyKSArIE1hdGgucG93KHBvczFbMV0gLSBwb3MyWzFdLCAyKVxuICAgICAgKVxuICAgfSxcbiAgIFxuICAgcmFuZG9tSW50UmFuZ2UobWluLCBtYXgpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICAgfSxcblxuICAgcm90YXRlKHZlbG9jaXR5LCBhbmdsZSkge1xuICAgICAgY29uc3Qgcm90YXRlZFZlbG9jaXRpZXMgPSB7XG4gICAgICAgICB4OiB2ZWxvY2l0eVswXSAqIE1hdGguY29zKGFuZ2xlKSAtIHZlbG9jaXR5WzFdICogTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgeTogdmVsb2NpdHlbMF0gKiBNYXRoLnNpbihhbmdsZSkgKyB2ZWxvY2l0eVsxXSAqIE1hdGguY29zKGFuZ2xlKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdGF0ZWRWZWxvY2l0aWVzO1xuICAgfSxcblxuICAgcmVzb2x2ZUNvbGxpc2lvbihwZXJzLCBvdGhlclBlcnMpIHtcbiAgICAgIGNvbnN0IHhWZWxEaWZmID0gcGVycy52ZWxbMF0gLSBvdGhlclBlcnMudmVsWzBdO1xuICAgICAgY29uc3QgeVZlbERpZmYgPSBwZXJzLnZlbFsxXSAtIG90aGVyUGVycy52ZWxbMV07XG4gICAgICBcblxuICAgICAgY29uc3QgeERpc3QgPSBvdGhlclBlcnMucG9zWzBdIC0gcGVycy5wb3NbMF07XG4gICAgICBjb25zdCB5RGlzdCA9IG90aGVyUGVycy5wb3NbMV0gLSBwZXJzLnBvc1sxXTtcblxuICAgICAgLy8gUHJldmVudCBhY2NpZGVudGFsIG92ZXJsYXAgb2YgcGVyc1xuICAgICAgaWYgKHhWZWxEaWZmICogeERpc3QgKyB5VmVsRGlmZiAqIHlEaXN0ID49IDApIHtcblxuICAgICAgICAgLy8gR3JhYiBhbmdsZSBiZXR3ZWVuIHRoZSB0d28gY29sbGlkaW5nIHBlcnNcbiAgICAgICAgIGNvbnN0IGFuZ2xlID0gLU1hdGguYXRhbjIob3RoZXJQZXJzLnBvc1sxXSAtIHBlcnMucG9zWzFdLCBvdGhlclBlcnMucG9zWzBdIC0gcGVycy5wb3NbMF0pO1xuXG4gICAgICAgICAvLyBTdG9yZSBtYXNzIGluIHZhciBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5IGluIGNvbGxpc2lvbiBlcXVhdGlvblxuICAgICAgICAgY29uc3QgbTEgPSBwZXJzLm1hc3M7XG4gICAgICAgICBjb25zdCBtMiA9IG90aGVyUGVycy5tYXNzO1xuXG4gICAgICAgICAvLyB2ZWwgYmVmb3JlIGVxdWF0aW9uXG4gICAgICAgICBjb25zdCB1MSA9IFV0aWwucm90YXRlKHBlcnMudmVsLCBhbmdsZSk7XG4gICAgICAgICBjb25zdCB1MiA9IFV0aWwucm90YXRlKG90aGVyUGVycy52ZWwsIGFuZ2xlKTtcblxuICAgICAgICAgLy8gdmVsIGFmdGVyIDFkIGNvbGxpc2lvbiBlcXVhdGlvblxuICAgICAgICAgLy8gY29uc3QgdjEgPSB7IHg6IHUxLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1Mi54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB5OiB1MS55IH07XG4gICAgICAgICAvLyBjb25zdCB2MiA9IHsgeDogdTIueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUxLnggKiAyICogbTIgLyAobTEgKyBtMiksIHk6IHUyLnkgfTtcbiAgICAgICAgIGNvbnN0IHYxID0gW3UxLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1Mi54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1MS55XTtcbiAgICAgICAgIGNvbnN0IHYyID0gW3UyLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1MS54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1Mi55XTtcblxuICAgICAgICAgLy8gRmluYWwgdmVsIGFmdGVyIHJvdGF0aW5nIGF4aXMgYmFjayB0byBvcmlnaW5hbCBsb2NhdGlvblxuICAgICAgICAgY29uc3QgdkZpbmFsMSA9IFV0aWwucm90YXRlKHYxLCAtYW5nbGUpO1xuICAgICAgICAgY29uc3QgdkZpbmFsMiA9IFV0aWwucm90YXRlKHYyLCAtYW5nbGUpO1xuXG4gICAgICAgICAvLyBTd2FwIHBlcnMgdmVsb2NpdGllcyBmb3IgcmVhbGlzdGljIGJvdW5jZSBlZmZlY3RcbiAgICAgICAgIHBlcnMudmVsWzBdID0gdkZpbmFsMS54O1xuICAgICAgICAgcGVycy52ZWxbMV0gPSB2RmluYWwxLnk7XG5cbiAgICAgICAgIG90aGVyUGVycy52ZWxbMF0gPSB2RmluYWwyLng7XG4gICAgICAgICBvdGhlclBlcnMudmVsWzFdID0gdkZpbmFsMi55O1xuICAgICAgfVxuICAgfVxuXG4gICAvLyByZXNvbHZlQ29sbGlzaW9uKHBlcnMsIG90aGVyUGVycykge1xuICAgLy8gICAgY29uc3QgeFZlbERpZmYgPSBwZXJzLnZlbFswXSAtIG90aGVyUGVycy52ZWxbMF07XG4gICAvLyAgICBjb25zdCB5VmVsRGlmZiA9IHBlcnMudmVsWzFdIC0gb3RoZXJQZXJzLnZlbFsxXTtcblxuICAgLy8gICAgY29uc3QgeERpc3QgPSBvdGhlclBlcnMucG9zWzBdIC0gcGVycy5wb3NbMF07XG4gICAvLyAgICBjb25zdCB5RGlzdCA9IG90aGVyUGVycy5wb3NbMV0gLSBwZXJzLnBvc1sxXTtcblxuICAgLy8gICAgLy8gUHJldmVudCBhY2NpZGVudGFsIG92ZXJsYXAgb2YgcGVyc1xuICAgLy8gICAgaWYgKHhWZWxEaWZmICogeERpc3QgKyB5VmVsRGlmZiAqIHlEaXN0ID49IDApIHtcblxuICAgLy8gICAgICAgLy8gR3JhYiBhbmdsZSBiZXR3ZWVuIHRoZSB0d28gY29sbGlkaW5nIHBlcnNcbiAgIC8vICAgICAgIGNvbnN0IGFuZ2xlID0gLU1hdGguYXRhbjIob3RoZXJQZXJzLnBvc1sxXSAtIHBlcnMucG9zWzFdLCBvdGhlclBlcnMucG9zWzBdIC0gcGVycy5wb3NbMF0pO1xuXG4gICAvLyAgICAgICAvLyBTdG9yZSBtYXNzIGluIHZhciBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5IGluIGNvbGxpc2lvbiBlcXVhdGlvblxuICAgLy8gICAgICAgY29uc3QgbTEgPSBwZXJzLm1hc3M7XG4gICAvLyAgICAgICBjb25zdCBtMiA9IG90aGVyUGVycy5tYXNzO1xuXG4gICAvLyAgICAgICBpZiAocGVycy5jb25zY2lvdXNDaXRpemVuID09PSB0cnVlKSB7XG4gICAvLyAgICAgICAgICAvLyB2ZWwgYmVmb3JlIGVxdWF0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB1MSA9IFV0aWwucm90YXRlKHBlcnMudmVsLCBhbmdsZSk7XG4gICAvLyAgICAgICAgICBjb25zdCB1MiA9IFV0aWwucm90YXRlKG90aGVyUGVycy52ZWwsIGFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gdmVsIGFmdGVyIDFkIGNvbGxpc2lvbiBlcXVhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdjEgPSBbdTEueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUyLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUxLnldO1xuICAgLy8gICAgICAgICAgY29uc3QgdjIgPSBbdTIueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUxLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUyLnldO1xuXG4gICAvLyAgICAgICAgICAvLyBGaW5hbCB2ZWwgYWZ0ZXIgcm90YXRpbmcgYXhpcyBiYWNrIHRvIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB2RmluYWwxID0gVXRpbC5yb3RhdGUodjEsIC1hbmdsZSk7XG4gICAvLyAgICAgICAgICBjb25zdCB2RmluYWwyID0gVXRpbC5yb3RhdGUodjIsIC1hbmdsZSk7XG5cbiAgIC8vICAgICAgICAgIC8vIFN3YXAgcGVycyB2ZWxvY2l0aWVzIGZvciByZWFsaXN0aWMgYm91bmNlIGVmZmVjdFxuICAgLy8gICAgICAgICAgLy8gcGVycy52ZWxbMF0gPSB2RmluYWwxLng7XG4gICAvLyAgICAgICAgICAvLyBwZXJzLnZlbFsxXSA9IHZGaW5hbDEueTtcbiAgIC8vICAgICAgICAgIHBlcnMudmVsWzBdID0gMDtcbiAgIC8vICAgICAgICAgIHBlcnMudmVsWzFdID0gMDtcblxuICAgLy8gICAgICAgICAgb3RoZXJQZXJzLnZlbFswXSA9IHZGaW5hbDIueDtcbiAgIC8vICAgICAgICAgIG90aGVyUGVycy52ZWxbMV0gPSB2RmluYWwyLnk7XG5cbiAgIC8vICAgICAgIH0gZWxzZSBpZiAob3RoZXJQZXJzLmNvbnNjaW91c0NpdGl6ZW4gPT09IHRydWUpe1xuICAgLy8gICAgICAgICAgLy8gdmVsIGJlZm9yZSBlcXVhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdTEgPSBVdGlsLnJvdGF0ZShwZXJzLnZlbCwgYW5nbGUpO1xuICAgLy8gICAgICAgICAgY29uc3QgdTIgPSBVdGlsLnJvdGF0ZShvdGhlclBlcnMudmVsLCBhbmdsZSk7XG5cbiAgIC8vICAgICAgICAgIC8vIHZlbCBhZnRlciAxZCBjb2xsaXNpb24gZXF1YXRpb25cbiAgXG4gICAvLyAgICAgICAgICBjb25zdCB2MSA9IFt1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTEueV07XG4gICAvLyAgICAgICAgICBjb25zdCB2MiA9IFt1Mi54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTEueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTIueV07XG5cbiAgIC8vICAgICAgICAgIC8vIEZpbmFsIHZlbCBhZnRlciByb3RhdGluZyBheGlzIGJhY2sgdG8gb3JpZ2luYWwgbG9jYXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDEgPSBVdGlsLnJvdGF0ZSh2MSwgLWFuZ2xlKTtcbiAgIC8vICAgICAgICAgIC8vIGNvbnN0IHZGaW5hbDIgPSBVdGlsLnJvdGF0ZSh2MiwgLWFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gU3dhcCBwZXJzIHZlbG9jaXRpZXMgZm9yIHJlYWxpc3RpYyBib3VuY2UgZWZmZWN0XG4gICAvLyAgICAgICAgICBwZXJzLnZlbFswXSA9IHZGaW5hbDEueDtcbiAgIC8vICAgICAgICAgIHBlcnMudmVsWzFdID0gdkZpbmFsMS55O1xuXG4gICAvLyAgICAgICAgICAvLyBvdGhlclBlcnMudmVsWzBdID0gdkZpbmFsMi54O1xuICAgLy8gICAgICAgICAgLy8gb3RoZXJQZXJzLnZlbFsxXSA9IHZGaW5hbDIueTtcbiAgIC8vICAgICAgICAgIG90aGVyUGVycy52ZWxbMF0gPSAwO1xuICAgLy8gICAgICAgICAgb3RoZXJQZXJzLnZlbFsxXSA9IDA7XG4gICAvLyAgICAgICB9IGVsc2Uge1xuICAgLy8gICAgICAgICAgLy8gdmVsIGJlZm9yZSBlcXVhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdTEgPSBVdGlsLnJvdGF0ZShwZXJzLnZlbCwgYW5nbGUpO1xuICAgLy8gICAgICAgICAgY29uc3QgdTIgPSBVdGlsLnJvdGF0ZShvdGhlclBlcnMudmVsLCBhbmdsZSk7XG5cbiAgIC8vICAgICAgICAgIC8vIHZlbCBhZnRlciAxZCBjb2xsaXNpb24gZXF1YXRpb25cbiAgIC8vICAgICAgICAgIC8vIGNvbnN0IHYxID0geyB4OiB1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgeTogdTEueSB9O1xuICAgLy8gICAgICAgICAgLy8gY29uc3QgdjIgPSB7IHg6IHUyLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1MS54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB5OiB1Mi55IH07XG4gICAvLyAgICAgICAgICBjb25zdCB2MSA9IFt1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTEueV07XG4gICAvLyAgICAgICAgICBjb25zdCB2MiA9IFt1Mi54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTEueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTIueV07XG5cbiAgIC8vICAgICAgICAgIC8vIEZpbmFsIHZlbCBhZnRlciByb3RhdGluZyBheGlzIGJhY2sgdG8gb3JpZ2luYWwgbG9jYXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDEgPSBVdGlsLnJvdGF0ZSh2MSwgLWFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDIgPSBVdGlsLnJvdGF0ZSh2MiwgLWFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gU3dhcCBwZXJzIHZlbG9jaXRpZXMgZm9yIHJlYWxpc3RpYyBib3VuY2UgZWZmZWN0XG4gICAvLyAgICAgICAgICBwZXJzLnZlbFswXSA9IHZGaW5hbDEueDtcbiAgIC8vICAgICAgICAgIHBlcnMudmVsWzFdID0gdkZpbmFsMS55O1xuXG4gICAvLyAgICAgICAgICBvdGhlclBlcnMudmVsWzBdID0gdkZpbmFsMi54O1xuICAgLy8gICAgICAgICAgb3RoZXJQZXJzLnZlbFsxXSA9IHZGaW5hbDIueTtcbiAgIC8vICAgICAgIH1cbiAgIC8vICAgIH1cbiAgIC8vIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9