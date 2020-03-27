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
  window.Person = _person__WEBPACK_IMPORTED_MODULE_3__["Person"];
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
  RADIUS: 20,
  COLOR: "#000066",
  SPEED: 1,
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
    this.NUM_PERSONS = 10;
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
      for (var i = 0; i < this.persons.length * 0.25; i++) {
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
  //       // vel before equation
  //       const u1 = Util.rotate(pers.vel, angle);
  //       const u2 = Util.rotate(otherPers.vel, angle);
  //       // vel after 1d collision equation
  //       // const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
  //       // const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };
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

};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb3Zpbmdfb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb25fdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2lkdGgiLCJTaW11bGF0aW9uIiwiRElNX1giLCJoZWlnaHQiLCJESU1fWSIsImN0eCIsImdldENvbnRleHQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiTW92aW5nT2JqZWN0IiwiUGVyc29uIiwiU2ltdWxhdGlvblZpZXciLCJzMSIsInN2MSIsInN0YXJ0IiwicGFyYW1ldGVycyIsInBvcyIsInZlbCIsInJhZGl1cyIsImNvbG9yIiwibWFzcyIsInNpbXVsYXRpb24iLCJzdHJva2VTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsInN0cm9rZSIsImJvdW5jZSIsImFicyIsIm90aGVyT2JqZWN0IiwiY2VudGVyRGlzdCIsIlV0aWwiLCJkaXN0IiwicmVtb3ZlIiwiREVGQVVMVFMiLCJSQURJVVMiLCJDT0xPUiIsIlNQRUVEIiwiTUFTUyIsInJhbmRvbVBvc2l0aW9uIiwicmFuZG9tVmVjIiwiY29uc2Npb3VzQ3RpemVuIiwiTlVNX1BFUlNPTlMiLCJwZXJzb25zIiwiYWRkUGVyc29ucyIsImFkZFBhdGllbnRaZXJvIiwiYWRkQ29uc2Npb3VzQ2l0aXplbiIsImkiLCJwdXNoIiwiaiIsImxlbmd0aCIsImNvbnNjaW91c0NpdGl6ZW4iLCJyYWQiLCJ4IiwicmFuZG9tSW50UmFuZ2UiLCJ5IiwiY2xlYXJSZWN0IiwiZm9yRWFjaCIsInBlcnNvbiIsImRyYXciLCJtb3ZlIiwib2JqZWN0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInBlcnMxIiwicGVyczIiLCJpc0NvbGxpZGVkV2l0aCIsInJlc29sdmVDb2xsaXNpb24iLCJtb3ZlT2JqZWN0cyIsImNoZWNrQ29sbGlzaW9ucyIsInNldEludGVydmFsIiwic3RlcCIsImRlZyIsInJhbmRvbSIsInNjYWxlIiwic2luIiwiY29zIiwidmVjIiwibSIsInBvczEiLCJwb3MyIiwic3FydCIsInBvdyIsIm1pbiIsIm1heCIsImZsb29yIiwicm90YXRlIiwidmVsb2NpdHkiLCJhbmdsZSIsInJvdGF0ZWRWZWxvY2l0aWVzIiwicGVycyIsIm90aGVyUGVycyIsInhWZWxEaWZmIiwieVZlbERpZmYiLCJ4RGlzdCIsInlEaXN0IiwiYXRhbjIiLCJtMSIsIm0yIiwidTEiLCJ1MiIsInYxIiwidjIiLCJ2RmluYWwxIiwidkZpbmFsMiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFD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QUUsQ0FBQy9DLENBQUgsSUFBUTRDLEVBQUUsR0FBR0MsRUFBYixLQUFvQkQsRUFBRSxHQUFHQyxFQUF6QixJQUErQkMsRUFBRSxDQUFDOUMsQ0FBSCxHQUFPLENBQVAsR0FBVzZDLEVBQVgsSUFBaUJELEVBQUUsR0FBR0MsRUFBdEIsQ0FBaEMsRUFBMkRFLEVBQUUsQ0FBQzdDLENBQTlELENBQVgsQ0FqQjJDLENBbUIzQzs7QUFDQSxVQUFNZ0QsT0FBTyxHQUFHeEUsSUFBSSxDQUFDdUQsTUFBTCxDQUFZZSxFQUFaLEVBQWdCLENBQUNiLEtBQWpCLENBQWhCO0FBQ0EsVUFBTWdCLE9BQU8sR0FBR3pFLElBQUksQ0FBQ3VELE1BQUwsQ0FBWWdCLEVBQVosRUFBZ0IsQ0FBQ2QsS0FBakIsQ0FBaEIsQ0FyQjJDLENBdUIzQzs7QUFDQUUsVUFBSSxDQUFDMUUsR0FBTCxDQUFTLENBQVQsSUFBY3VGLE9BQU8sQ0FBQ2xELENBQXRCO0FBQ0FxQyxVQUFJLENBQUMxRSxHQUFMLENBQVMsQ0FBVCxJQUFjdUYsT0FBTyxDQUFDaEQsQ0FBdEI7QUFFQW9DLGVBQVMsQ0FBQzNFLEdBQVYsQ0FBYyxDQUFkLElBQW1Cd0YsT0FBTyxDQUFDbkQsQ0FBM0I7QUFDQXNDLGVBQVMsQ0FBQzNFLEdBQVYsQ0FBYyxDQUFkLElBQW1Cd0YsT0FBTyxDQUFDakQsQ0FBM0I7QUFDRjtBQUNILEdBbkVnQixDQXFFakI7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQTNHaUIsQ0FBYixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnLi9zaW11bGF0aW9uJztcbmltcG9ydCBTaW11bGF0aW9uVmlldyBmcm9tICcuL3NpbXVsYXRpb25fdmlldyc7XG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQge1BlcnNvbn0gZnJvbSAnLi9wZXJzb24nO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICAgIC8vIGNhbnZhc0VsLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgLy8gY2FudmFzRWwuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNhbnZhc0VsLndpZHRoID0gU2ltdWxhdGlvbi5ESU1fWDtcbiAgICBjYW52YXNFbC5oZWlnaHQgPSBTaW11bGF0aW9uLkRJTV9ZO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAvLyBjYW52YXNFbC53aWR0aCA9IEdhbWUuRElNX1g7XG4gICAgLy8gY2FudmFzRWwuaGVpZ2h0ID0gR2FtZS5ESU1fWTtcbiAgICBjb25zb2xlLmxvZygnd2VicGFjayBpcyB3b3JraW5nJyk7XG5cbiAgICB3aW5kb3cuTW92aW5nT2JqZWN0ID0gTW92aW5nT2JqZWN0O1xuICAgIHdpbmRvdy5QZXJzb24gPSBQZXJzb247XG4gICAgd2luZG93LlNpbXVsYXRpb24gPSBTaW11bGF0aW9uO1xuICAgIHdpbmRvdy5TaW11bGF0aW9uVmlldyA9IFNpbXVsYXRpb25WaWV3O1xuXG4gICAgLy8gY29uc3QgU2ltdWxhdGlvbiA9IG5ldyBTaW11bGF0aW9uKCk7XG4gICAgLy8gbmV3IFNpbXVsYXRpb25WaWV3KGdhbWUsIGN0eCkuc3RhcnQoKTtcblxuXG4gICAgLy8gbGV0IG1vID0gbmV3IE1vdmluZ09iamVjdCh7XG4gICAgLy8gICAgIHBvczogWzMwLCAzMF0sXG4gICAgLy8gICAgIHZlbDogWzIwLCAyMF0sXG4gICAgLy8gICAgIHJhZGl1czogMSxcbiAgICAvLyAgICAgY29sb3I6IFwiIzAwZmYwMFwiXG4gICAgLy8gfSk7XG4gICAgLy8gY29uc29sZS5sb2cobW8pO1xuICAgIC8vIG1vLmRyYXcoY3R4KTtcbiAgICAvLyBtby5tb3ZlKCk7XG4gICAgXG4gICAgXG4gICAgbGV0IHMxID0gbmV3IFNpbXVsYXRpb24oKTtcbiAgICBcbiAgICAvLyBsZXQgbnAgPSBuZXcgUGVyc29uKHsgXG4gICAgLy8gICAgIHBvczogWzkwLCA5MF0sIFxuICAgIC8vICAgICB2ZWw6IFsyMCwgMjBdXG4gICAgLy8gfSk7XG4gICAgLy8gY29uc29sZS5sb2cobnApO1xuICAgIC8vIG5wLmRyYXcoY3R4KTtcblxuICAgIGNvbnNvbGUubG9nKHMxKTtcblxuICAgIGxldCBzdjEgPSBuZXcgU2ltdWxhdGlvblZpZXcoczEsIGN0eClcbiAgICAvLyBjb25zb2xlLmxvZyhzdjEpO1xuICAgIHN2MS5zdGFydCgpO1xufSk7IiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgU2ltdWxhdGlvbiBmcm9tICcuL3NpbXVsYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnBvcyAgPSBwYXJhbWV0ZXJzLnBvcztcbiAgICB0aGlzLnZlbCAgPSBwYXJhbWV0ZXJzLnZlbDtcbiAgICB0aGlzLnJhZGl1cyAgPSBwYXJhbWV0ZXJzLnJhZGl1cztcbiAgICB0aGlzLmNvbG9yICA9IHBhcmFtZXRlcnMuY29sb3I7XG4gICAgdGhpcy5tYXNzID0gcGFyYW1ldGVycy5tYXNzO1xuICAgIHRoaXMuc2ltdWxhdGlvbiA9IHBhcmFtZXRlcnMuc2ltdWxhdGlvbjtcbiAgICB9XG5cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIHRoaXMucG9zWzBdLFxuICAgICAgICAgICAgdGhpcy5wb3NbMV0sXG4gICAgICAgICAgICB0aGlzLnJhZGl1cyxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICAgICAgLy8gZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnBvcyA9IFsodGhpcy5wb3NbMF0gKyB0aGlzLnZlbFswXSksICh0aGlzLnBvc1sxXSArIHRoaXMudmVsWzFdKV1cbiAgICAgICAgdGhpcy52ZWwgPSB0aGlzLnNpbXVsYXRpb24uYm91bmNlKHRoaXMucG9zLCB0aGlzLnZlbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9zKTtcbiAgICB9O1xuXG4gICAgY2hhbmdlRGlyKHZlbCkge1xuICAgICAgICBcbiAgICAgICAgaWYgKE1hdGguYWJzKHZlbFswXSkgPiBNYXRoLmFicyh2ZWxbMV0pKSB7XG4gICAgICAgICAgICB2ZWxbMF0gPSAtIHZlbFswXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmVsWzFdID0gLSB2ZWxbMV1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHZlbDtcbiAgICB9XG4gICAgXG4gICAgaXNDb2xsaWRlZFdpdGgob3RoZXJPYmplY3QpIHtcbiAgICAgICAgY29uc3QgY2VudGVyRGlzdCA9IFV0aWwuZGlzdCh0aGlzLnBvcywgb3RoZXJPYmplY3QucG9zKTtcbiAgICAgICAgaWYgKGNlbnRlckRpc3QgPCAodGhpcy5yYWRpdXMgKyBvdGhlck9iamVjdC5yYWRpdXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uLnJlbW92ZSh0aGlzKTtcbiAgICB9XG5cbiB9XG5cblxuIiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRTID0ge1xuICAgIFJBRElVUzogMjAsXG4gICAgQ09MT1I6IFwiIzAwMDA2NlwiLFxuICAgIFNQRUVEOiAxLFxuICAgIE1BU1M6IDFcbn1cblxuZXhwb3J0IGNsYXNzIFBlcnNvbiBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVycyA9IHt9KSB7XG4gICAgICAgIHBhcmFtZXRlcnMuY29sb3IgPSBERUZBVUxUUy5DT0xPUjtcbiAgICAgICAgcGFyYW1ldGVycy5yYWRpdXMgPSBERUZBVUxUUy5SQURJVVM7XG4gICAgICAgIHBhcmFtZXRlcnMubWFzcyA9IERFRkFVTFRTLk1BU1M7XG4gICAgICAgIHBhcmFtZXRlcnMucG9zID0gcGFyYW1ldGVycy5wb3MgfHwgcGFyYW1ldGVycy5zaW11bGF0aW9uLnJhbmRvbVBvc2l0aW9uKCk7XG4gICAgICAgIHBhcmFtZXRlcnMudmVsID0gcGFyYW1ldGVycy52ZWwgfHwgVXRpbC5yYW5kb21WZWMoREVGQVVMVFMuU1BFRUQpO1xuICAgICAgICBwYXJhbWV0ZXJzLmNvbnNjaW91c0N0aXplbiA9IGZhbHNlO1xuICAgICAgICAvLyBwYXJhbWV0ZXJzLnBvcyA9IHBhcmFtZXRlcnMucG9zO1xuICAgICAgICAvLyBwYXJhbWV0ZXJzLnZlbCA9IHBhcmFtZXRlcnMudmVsO1xuICAgICAgICBzdXBlcihwYXJhbWV0ZXJzKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQge1BlcnNvbiwgREVGQVVMVFN9IGZyb20gJy4vcGVyc29uJztcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuRElNX1ggPSA2MDA7XG4gICAgICAgIHRoaXMuRElNX1kgPSA0MDA7XG4gICAgICAgIHRoaXMuTlVNX1BFUlNPTlMgPSAxMDtcbiAgICAgICAgdGhpcy5wZXJzb25zID0gW107XG4gICAgICAgIHRoaXMuYWRkUGVyc29ucygpO1xuICAgICAgICB0aGlzLmFkZFBhdGllbnRaZXJvKCk7XG4gICAgICAgIHRoaXMuYWRkQ29uc2Npb3VzQ2l0aXplbigpO1xuICAgIH1cblxuICAgIC8vIGhhbmRsZURlbnNpdHkoKSB7XG5cbiAgICAvLyB9XG5cbiAgICBhZGRQZXJzb25zKCkge1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLk5VTV9QRVJTT05TOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGVyc29ucy5wdXNoKG5ldyBQZXJzb24oe1xuICAgICAgICAgICAgICAgIHBvczogdGhpcy5yYW5kb21Qb3NpdGlvbigpLCBcbiAgICAgICAgICAgICAgICB2ZWw6IFV0aWwucmFuZG9tVmVjKERFRkFVTFRTLlNQRUVEKSwgXG4gICAgICAgICAgICAgICAgc2ltdWxhdGlvbjogdGhpc30pKTtcblxuICAgICAgICAgICAgaWYgKGkhPT0wKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnBlcnNvbnMubGVuZ3RoLTE7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKFV0aWwuZGlzdCh0aGlzLnBlcnNvbnNbaV0ucG9zLCB0aGlzLnBlcnNvbnNbal0ucG9zKSAtIERFRkFVTFRTLlJBRElVUyAqIDIpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzb25zW2ldLnBvcyA9IHRoaXMucmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGo9LTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRQYXRpZW50WmVybygpIHtcbiAgICAgICAgdGhpcy5wZXJzb25zW3RoaXMucGVyc29ucy5sZW5ndGgtMV0uY29sb3IgPSAncmVkJztcbiAgICB9XG5cbiAgICBhZGRDb25zY2lvdXNDaXRpemVuKCkge1xuICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMucGVyc29ucy5sZW5ndGggKiAwLjI1OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGVyc29uc1tpXS5jb25zY2lvdXNDaXRpemVuID0gdHJ1ZSA7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0udmVsID0gWzAsMF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmFuZG9tUG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IHJhZCA9IERFRkFVTFRTLlJBRElVUztcbiAgICAgICAgbGV0IHggPSBVdGlsLnJhbmRvbUludFJhbmdlKHJhZCwgdGhpcy5ESU1fWCAtIHJhZCk7XG4gICAgICAgIGxldCB5ID0gVXRpbC5yYW5kb21JbnRSYW5nZShyYWQsIHRoaXMuRElNX1kgLSByYWQpO1xuICAgICAgICByZXR1cm4gW3gseV07XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLkRJTV9YLCB0aGlzLkRJTV9ZKTtcbiAgICAgICAgdGhpcy5wZXJzb25zLmZvckVhY2goIHBlcnNvbiA9PiBwZXJzb24uZHJhdyhjdHgpKTtcbiAgICB9XG5cbiAgICBtb3ZlT2JqZWN0cygpIHtcbiAgICAgICAgdGhpcy5wZXJzb25zLmZvckVhY2goKHBlcnNvbikgPT4ge1xuICAgICAgICAgICAgcGVyc29uLm1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlT2JqZWN0KG9iamVjdCkge1xuICAgICAgICB0aGlzLnBlcnNvbnMuc3BsaWNlKHRoaXMucGVyc29ucy5pbmRleE9mKG9iamVjdCksIDEpXG4gICAgfVxuICAgIFxuXG4gICAgY2hlY2tDb2xsaXNpb25zKCkge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5wZXJzb25zLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGo9aSsxOyBqPHRoaXMucGVyc29ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBwZXJzMSA9IHRoaXMucGVyc29uc1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgcGVyczIgPSB0aGlzLnBlcnNvbnNbal07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgaWYgKHBlcnMxLmlzQ29sbGlkZWRXaXRoKHBlcnMyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGVyczEudmVsID0gcGVyczEuY2hhbmdlRGlyKHBlcnMxLnZlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZXJzMS5jb2xvciA9ICcjZmYwMDAwJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlcnMyLnZlbCA9IHBlcnMyLmNoYW5nZURpcihwZXJzMi52ZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGVyczIuY29sb3IgPSAnI2ZmMDAwMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwZXJzMS5wb3MgPSB0aGlzLmJvdW5jZShwZXJzMS52ZWwsIHBlcnMxLnBvcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlcnMyLnBvcyA9IHRoaXMuYm91bmNlKHBlcnMyLnZlbCwgcGVyczIucG9zKVxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbC5yZXNvbHZlQ29sbGlzaW9uKHBlcnMxLCBwZXJzMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGVyczEuY29sb3IgPT09ICdyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzMi5jb2xvciA9ICdyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBlcnMyLmNvbG9yID09PSAncmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnMxLmNvbG9yID0gJ3JlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbW92ZU9iamVjdChwZXJzMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbW92ZU9iamVjdChwZXJzMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGJvdW5jZShwb3MsIHZlbCkge1xuICAgICAgICBsZXQgcmFkID0gREVGQVVMVFMuUkFESVVTXG4gICAgICAgIGlmIChwb3NbMF0tcmFkIDw9IDAgfHwgcG9zWzBdK3JhZD49IHRoaXMuRElNX1gpIHtcbiAgICAgICAgICAgdmVsWzBdID0gLSB2ZWxbMF0gXG4gICAgICAgIH0gZWxzZSBpZiAocG9zWzFdLXJhZCA8PSAwIHx8IHBvc1sxXStyYWQgPj0gdGhpcy5ESU1fWSkge1xuICAgICAgICAgICAgdmVsWzFdID0gLSB2ZWxbMV1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmVsO1xuICAgIH1cblxuICAgIHN0ZXAoKSB7XG4gICAgICAgIHRoaXMubW92ZU9iamVjdHMoKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbnMoKTtcbiAgICB9XG5cbn1cblxuU2ltdWxhdGlvbi5ESU1fWCA9IDYwMDtcblNpbXVsYXRpb24uRElNX1kgPSA0MDA7XG4vLyBTaW11bGF0aW9uLk5VTV9QRVJTT05TID0gMTAwO1xuIiwiaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnLi9zaW11bGF0aW9uJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW11bGF0aW9uVmlldyB7XG4gICAgY29uc3RydWN0b3Ioc2ltdWxhdGlvbiwgY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnNpbXVsYXRpb24gPSBzaW11bGF0aW9uO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNpbXVsYXRpb24uc3RlcCgpO1xuICAgICAgICAgICAgdGhpcy5zaW11bGF0aW9uLmRyYXcodGhpcy5jdHgpO1xuICAgICAgICB9LCAyMClcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IFV0aWwgPSB7XG4gICAvLyBSZXR1cm4gYSByYW5kb21seSBvcmllbnRlZCB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gbGVuZ3RoLlxuICAgcmFuZG9tVmVjKGxlbmd0aCkge1xuICAgICAgY29uc3QgZGVnID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgcmV0dXJuIFV0aWwuc2NhbGUoW01hdGguc2luKGRlZyksIE1hdGguY29zKGRlZyldLCBsZW5ndGgpO1xuICAgfSxcbiAgIC8vIFNjYWxlIHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgYnkgdGhlIGdpdmVuIGFtb3VudC5cbiAgIHNjYWxlKHZlYywgbSkge1xuICAgICAgcmV0dXJuIFt2ZWNbMF0gKiBtLCB2ZWNbMV0gKiBtXTtcbiAgIH0sXG5cbiAgIGRpc3QocG9zMSwgcG9zMikge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgICAgIE1hdGgucG93KHBvczFbMF0gLSBwb3MyWzBdLCAyKSArIE1hdGgucG93KHBvczFbMV0gLSBwb3MyWzFdLCAyKVxuICAgICAgKVxuICAgfSxcbiAgIFxuICAgcmFuZG9tSW50UmFuZ2UobWluLCBtYXgpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICAgfSxcblxuICAgcm90YXRlKHZlbG9jaXR5LCBhbmdsZSkge1xuICAgICAgY29uc3Qgcm90YXRlZFZlbG9jaXRpZXMgPSB7XG4gICAgICAgICB4OiB2ZWxvY2l0eVswXSAqIE1hdGguY29zKGFuZ2xlKSAtIHZlbG9jaXR5WzFdICogTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgeTogdmVsb2NpdHlbMF0gKiBNYXRoLnNpbihhbmdsZSkgKyB2ZWxvY2l0eVsxXSAqIE1hdGguY29zKGFuZ2xlKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdGF0ZWRWZWxvY2l0aWVzO1xuICAgfSxcblxuICAgcmVzb2x2ZUNvbGxpc2lvbihwZXJzLCBvdGhlclBlcnMpIHtcbiAgICAgIGNvbnN0IHhWZWxEaWZmID0gcGVycy52ZWxbMF0gLSBvdGhlclBlcnMudmVsWzBdO1xuICAgICAgY29uc3QgeVZlbERpZmYgPSBwZXJzLnZlbFsxXSAtIG90aGVyUGVycy52ZWxbMV07XG5cbiAgICAgIGNvbnN0IHhEaXN0ID0gb3RoZXJQZXJzLnBvc1swXSAtIHBlcnMucG9zWzBdO1xuICAgICAgY29uc3QgeURpc3QgPSBvdGhlclBlcnMucG9zWzFdIC0gcGVycy5wb3NbMV07XG5cbiAgICAgIC8vIFByZXZlbnQgYWNjaWRlbnRhbCBvdmVybGFwIG9mIHBlcnNcbiAgICAgIGlmICh4VmVsRGlmZiAqIHhEaXN0ICsgeVZlbERpZmYgKiB5RGlzdCA+PSAwKSB7XG5cbiAgICAgICAgIC8vIEdyYWIgYW5nbGUgYmV0d2VlbiB0aGUgdHdvIGNvbGxpZGluZyBwZXJzXG4gICAgICAgICBjb25zdCBhbmdsZSA9IC1NYXRoLmF0YW4yKG90aGVyUGVycy5wb3NbMV0gLSBwZXJzLnBvc1sxXSwgb3RoZXJQZXJzLnBvc1swXSAtIHBlcnMucG9zWzBdKTtcblxuICAgICAgICAgLy8gU3RvcmUgbWFzcyBpbiB2YXIgZm9yIGJldHRlciByZWFkYWJpbGl0eSBpbiBjb2xsaXNpb24gZXF1YXRpb25cbiAgICAgICAgIGNvbnN0IG0xID0gcGVycy5tYXNzO1xuICAgICAgICAgY29uc3QgbTIgPSBvdGhlclBlcnMubWFzcztcblxuICAgICAgICAgLy8gdmVsIGJlZm9yZSBlcXVhdGlvblxuICAgICAgICAgY29uc3QgdTEgPSBVdGlsLnJvdGF0ZShwZXJzLnZlbCwgYW5nbGUpO1xuICAgICAgICAgY29uc3QgdTIgPSBVdGlsLnJvdGF0ZShvdGhlclBlcnMudmVsLCBhbmdsZSk7XG5cbiAgICAgICAgIC8vIHZlbCBhZnRlciAxZCBjb2xsaXNpb24gZXF1YXRpb25cbiAgICAgICAgIC8vIGNvbnN0IHYxID0geyB4OiB1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgeTogdTEueSB9O1xuICAgICAgICAgLy8gY29uc3QgdjIgPSB7IHg6IHUyLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1MS54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB5OiB1Mi55IH07XG4gICAgICAgICBjb25zdCB2MSA9IFt1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTEueV07XG4gICAgICAgICBjb25zdCB2MiA9IFt1Mi54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTEueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTIueV07XG5cbiAgICAgICAgIC8vIEZpbmFsIHZlbCBhZnRlciByb3RhdGluZyBheGlzIGJhY2sgdG8gb3JpZ2luYWwgbG9jYXRpb25cbiAgICAgICAgIGNvbnN0IHZGaW5hbDEgPSBVdGlsLnJvdGF0ZSh2MSwgLWFuZ2xlKTtcbiAgICAgICAgIGNvbnN0IHZGaW5hbDIgPSBVdGlsLnJvdGF0ZSh2MiwgLWFuZ2xlKTtcblxuICAgICAgICAgLy8gU3dhcCBwZXJzIHZlbG9jaXRpZXMgZm9yIHJlYWxpc3RpYyBib3VuY2UgZWZmZWN0XG4gICAgICAgICBwZXJzLnZlbFswXSA9IHZGaW5hbDEueDtcbiAgICAgICAgIHBlcnMudmVsWzFdID0gdkZpbmFsMS55O1xuXG4gICAgICAgICBvdGhlclBlcnMudmVsWzBdID0gdkZpbmFsMi54O1xuICAgICAgICAgb3RoZXJQZXJzLnZlbFsxXSA9IHZGaW5hbDIueTtcbiAgICAgIH1cbiAgIH1cblxuICAgLy8gcmVzb2x2ZUNvbGxpc2lvbihwZXJzLCBvdGhlclBlcnMpIHtcbiAgIC8vICAgIGNvbnN0IHhWZWxEaWZmID0gcGVycy52ZWxbMF0gLSBvdGhlclBlcnMudmVsWzBdO1xuICAgLy8gICAgY29uc3QgeVZlbERpZmYgPSBwZXJzLnZlbFsxXSAtIG90aGVyUGVycy52ZWxbMV07XG5cbiAgIC8vICAgIGNvbnN0IHhEaXN0ID0gb3RoZXJQZXJzLnBvc1swXSAtIHBlcnMucG9zWzBdO1xuICAgLy8gICAgY29uc3QgeURpc3QgPSBvdGhlclBlcnMucG9zWzFdIC0gcGVycy5wb3NbMV07XG5cbiAgIC8vICAgIC8vIFByZXZlbnQgYWNjaWRlbnRhbCBvdmVybGFwIG9mIHBlcnNcbiAgIC8vICAgIGlmICh4VmVsRGlmZiAqIHhEaXN0ICsgeVZlbERpZmYgKiB5RGlzdCA+PSAwKSB7XG5cbiAgIC8vICAgICAgIC8vIEdyYWIgYW5nbGUgYmV0d2VlbiB0aGUgdHdvIGNvbGxpZGluZyBwZXJzXG4gICAvLyAgICAgICBjb25zdCBhbmdsZSA9IC1NYXRoLmF0YW4yKG90aGVyUGVycy5wb3NbMV0gLSBwZXJzLnBvc1sxXSwgb3RoZXJQZXJzLnBvc1swXSAtIHBlcnMucG9zWzBdKTtcblxuICAgLy8gICAgICAgLy8gU3RvcmUgbWFzcyBpbiB2YXIgZm9yIGJldHRlciByZWFkYWJpbGl0eSBpbiBjb2xsaXNpb24gZXF1YXRpb25cbiAgIC8vICAgICAgIGNvbnN0IG0xID0gcGVycy5tYXNzO1xuICAgLy8gICAgICAgY29uc3QgbTIgPSBvdGhlclBlcnMubWFzcztcblxuICAgLy8gICAgICAgLy8gdmVsIGJlZm9yZSBlcXVhdGlvblxuICAgLy8gICAgICAgY29uc3QgdTEgPSBVdGlsLnJvdGF0ZShwZXJzLnZlbCwgYW5nbGUpO1xuICAgLy8gICAgICAgY29uc3QgdTIgPSBVdGlsLnJvdGF0ZShvdGhlclBlcnMudmVsLCBhbmdsZSk7XG5cbiAgIC8vICAgICAgIC8vIHZlbCBhZnRlciAxZCBjb2xsaXNpb24gZXF1YXRpb25cbiAgIC8vICAgICAgIC8vIGNvbnN0IHYxID0geyB4OiB1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgeTogdTEueSB9O1xuICAgLy8gICAgICAgLy8gY29uc3QgdjIgPSB7IHg6IHUyLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1MS54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB5OiB1Mi55IH07XG4gICAvLyAgICAgICBjb25zdCB2MSA9IFt1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTEueV07XG4gICAvLyAgICAgICBjb25zdCB2MiA9IFt1Mi54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTEueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTIueV07XG5cbiAgIC8vICAgICAgIC8vIEZpbmFsIHZlbCBhZnRlciByb3RhdGluZyBheGlzIGJhY2sgdG8gb3JpZ2luYWwgbG9jYXRpb25cbiAgIC8vICAgICAgIGNvbnN0IHZGaW5hbDEgPSBVdGlsLnJvdGF0ZSh2MSwgLWFuZ2xlKTtcbiAgIC8vICAgICAgIGNvbnN0IHZGaW5hbDIgPSBVdGlsLnJvdGF0ZSh2MiwgLWFuZ2xlKTtcblxuICAgLy8gICAgICAgLy8gU3dhcCBwZXJzIHZlbG9jaXRpZXMgZm9yIHJlYWxpc3RpYyBib3VuY2UgZWZmZWN0XG4gICAvLyAgICAgICBwZXJzLnZlbFswXSA9IHZGaW5hbDEueDtcbiAgIC8vICAgICAgIHBlcnMudmVsWzFdID0gdkZpbmFsMS55O1xuXG4gICAvLyAgICAgICBvdGhlclBlcnMudmVsWzBdID0gdkZpbmFsMi54O1xuICAgLy8gICAgICAgb3RoZXJQZXJzLnZlbFsxXSA9IHZGaW5hbDIueTtcbiAgIC8vICAgIH1cbiAgIC8vIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9