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

/***/ "./src/column.js":
/*!***********************!*\
  !*** ./src/column.js ***!
  \***********************/
/*! exports provided: GRAPH_DEFAULTS, Column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAPH_DEFAULTS", function() { return GRAPH_DEFAULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GRAPH_DEFAULTS = {
  WIDTH: 1,
  COLOR: 'red'
};
var Column = /*#__PURE__*/function () {
  function Column(pos, width, height) {
    _classCallCheck(this, Column);

    this.pos = pos;
    this.width = width;
    this.height = height;
    this.color = GRAPH_DEFAULTS.COLOR;
  }

  _createClass(Column, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = GRAPH_DEFAULTS.COLOR;
      ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }
  }]);

  return Column;
}();

/***/ }),

/***/ "./src/graph.js":
/*!**********************!*\
  !*** ./src/graph.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Graph; });
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column */ "./src/column.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Graph = /*#__PURE__*/function () {
  function Graph(simulation, ctx) {
    _classCallCheck(this, Graph);

    this.DIM_X = 600;
    this.DIM_Y = 200;
    this.XParameter = _column__WEBPACK_IMPORTED_MODULE_0__["GRAPH_DEFAULTS"].WIDTH / 2;
    this.columns = [];
    this.graphInterval = null;
    this.simulation = simulation;
    this.populationInfected = this.simulation.populationInfected;
    this.draw(ctx);
  }

  _createClass(Graph, [{
    key: "addColumn",
    value: function addColumn() {
      var newColumn = new _column__WEBPACK_IMPORTED_MODULE_0__["Column"]([this.XParameter, this.DIM_Y], _column__WEBPACK_IMPORTED_MODULE_0__["GRAPH_DEFAULTS"].WIDTH, -(this.DIM_Y / this.simulation.density * this.simulation.infectionNumber));
      this.columns.push(newColumn);
      this.XParameter += _column__WEBPACK_IMPORTED_MODULE_0__["GRAPH_DEFAULTS"].WIDTH;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
      this.columns.forEach(function (column) {
        return column.draw(ctx);
      });
    }
  }, {
    key: "step",
    value: function step() {
      this.addColumn();
    }
  }]);

  return Graph;
}();



/***/ }),

/***/ "./src/graph_view.js":
/*!***************************!*\
  !*** ./src/graph_view.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphView; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GraphView = /*#__PURE__*/function () {
  function GraphView(graph, simulation, ctx) {
    _classCallCheck(this, GraphView);

    this.graph = graph;
    this.simulation = simulation;
    this.ctx = ctx;
  }

  _createClass(GraphView, [{
    key: "start",
    value: function start() {
      var _this = this;

      this.graph.graphInterval = setInterval(function () {
        _this.graph.step();

        _this.graph.draw(_this.ctx);

        if (_this.simulation.populationInfected) {
          clearInterval(_this.graph.graphInterval); // this.stop(this.graph)
        }
      }, 40);
    }
  }, {
    key: "stop",
    value: function stop(graph) {
      clearInterval(graph.graphInterval);
    }
  }]);

  return GraphView;
}();



/***/ }),

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
/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graph */ "./src/graph.js");
/* harmony import */ var _graph_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graph_view */ "./src/graph_view.js");
/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moving_object */ "./src/moving_object.js");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./person */ "./src/person.js");






document.addEventListener("DOMContentLoaded", function () {
  var canvasEl1 = document.getElementsByTagName("canvas")[0];
  var canvasEl2 = document.getElementsByTagName("canvas")[1];
  canvasEl1.width = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_X;
  canvasEl1.height = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_Y;
  var ctx1 = canvasEl1.getContext("2d");
  canvasEl2.width = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_X;
  canvasEl2.height = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"].DIM_Y / 2;
  var ctx2 = canvasEl2.getContext("2d");
  window.Simulation = _simulation__WEBPACK_IMPORTED_MODULE_0__["default"];
  window.SimulationView = _simulation_view__WEBPACK_IMPORTED_MODULE_1__["default"];
  window.Graph = _graph__WEBPACK_IMPORTED_MODULE_2__["default"];
  window.GraphView = _graph_view__WEBPACK_IMPORTED_MODULE_3__["default"];
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
  window.currentSimulation = currentSimulation;
  var currentSimulationView = null;
  var currentGraph = null;
  var currentGraphView = null;
  var infectionRate = document.getElementById('infection-rate');
  var startSimulation = document.getElementById('start');

  startSimulation.onclick = function () {
    currentSimulation = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"](density.value, socialDist.value / 100, ctx1);
    currentSimulationView = new _simulation_view__WEBPACK_IMPORTED_MODULE_1__["default"](currentSimulation, ctx1);
    currentGraph = new _graph__WEBPACK_IMPORTED_MODULE_2__["default"](currentSimulation, ctx2);
    currentGraphView = new _graph_view__WEBPACK_IMPORTED_MODULE_3__["default"](currentGraph, currentSimulation, ctx2);
    currentSimulationView.start();
    currentGraphView.start();
    console.log(currentSimulation);
    console.log(currentGraph); // infectedNumber.innerHTML = currentSimulation.infectionNumber;
  }; // infectionRate.innerHTML = currentSimulation.infectionNumber || 0


  var stopSimulation = document.getElementById('stop');

  stopSimulation.onclick = function () {
    currentSimulationView.stop(currentSimulation);
    currentGraphView.stop(currentGraph);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoX3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb3Zpbmdfb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb25fdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJHUkFQSF9ERUZBVUxUUyIsIldJRFRIIiwiQ09MT1IiLCJDb2x1bW4iLCJwb3MiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJHcmFwaCIsInNpbXVsYXRpb24iLCJESU1fWCIsIkRJTV9ZIiwiWFBhcmFtZXRlciIsImNvbHVtbnMiLCJncmFwaEludGVydmFsIiwicG9wdWxhdGlvbkluZmVjdGVkIiwiZHJhdyIsIm5ld0NvbHVtbiIsImRlbnNpdHkiLCJpbmZlY3Rpb25OdW1iZXIiLCJwdXNoIiwiY2xlYXJSZWN0IiwiZm9yRWFjaCIsImNvbHVtbiIsImFkZENvbHVtbiIsIkdyYXBoVmlldyIsImdyYXBoIiwic2V0SW50ZXJ2YWwiLCJzdGVwIiwiY2xlYXJJbnRlcnZhbCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsMSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY2FudmFzRWwyIiwiU2ltdWxhdGlvbiIsImN0eDEiLCJnZXRDb250ZXh0IiwiY3R4MiIsIndpbmRvdyIsIlNpbXVsYXRpb25WaWV3IiwiaW5mZWN0ZWROdW1iZXIiLCJnZXRFbGVtZW50QnlJZCIsIm91dHB1dERlbnNpdHkiLCJpbm5lckhUTUwiLCJ2YWx1ZSIsIm9uaW5wdXQiLCJzMSIsInNvY2lhbERpc3QiLCJjb25zb2xlIiwibG9nIiwib3V0cHV0U29jaWFsRGlzdCIsImN1cnJlbnRTaW11bGF0aW9uIiwiY3VycmVudFNpbXVsYXRpb25WaWV3IiwiY3VycmVudEdyYXBoIiwiY3VycmVudEdyYXBoVmlldyIsImluZmVjdGlvblJhdGUiLCJzdGFydFNpbXVsYXRpb24iLCJvbmNsaWNrIiwic3RhcnQiLCJzdG9wU2ltdWxhdGlvbiIsInN0b3AiLCJNb3ZpbmdPYmplY3QiLCJwYXJhbWV0ZXJzIiwidmVsIiwicmFkaXVzIiwibWFzcyIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGwiLCJib3VuY2UiLCJhYnMiLCJvdGhlck9iamVjdCIsImNlbnRlckRpc3QiLCJVdGlsIiwiZGlzdCIsInJlbW92ZSIsIkRFRkFVTFRTIiwiUkFESVVTIiwiU1BFRUQiLCJNQVNTIiwiUGVyc29uIiwicmFuZG9tUG9zaXRpb24iLCJyYW5kb21WZWMiLCJjb25zY2lvdXNDdGl6ZW4iLCJpbmZlY3RlZCIsInNvY2lhbERpc3RhbmNpbmdSYXRlIiwiTlVNX1BFUlNPTlMiLCJwZXJzb25zIiwic2ltdWxhdGlvbkludGVydmFsIiwiYWRkUGVyc29ucyIsImFkZFBhdGllbnRaZXJvIiwiYWRkQ29uc2Npb3VzQ2l0aXplbiIsImkiLCJqIiwibGVuZ3RoIiwiY29uc2Npb3VzQ2l0aXplbiIsInJhZCIsIngiLCJyYW5kb21JbnRSYW5nZSIsInkiLCJwZXJzb24iLCJtb3ZlIiwib2JqZWN0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInBlcnMxIiwicGVyczIiLCJpc0NvbGxpZGVkV2l0aCIsInJlc29sdmVDb2xsaXNpb24iLCJtb3ZlT2JqZWN0cyIsImNoZWNrQ29sbGlzaW9ucyIsImhhbmRsZUluZmVjdGlvbiIsImRlZyIsInJhbmRvbSIsInNjYWxlIiwic2luIiwiY29zIiwidmVjIiwibSIsInBvczEiLCJwb3MyIiwic3FydCIsInBvdyIsIm1pbiIsIm1heCIsImZsb29yIiwicm90YXRlIiwidmVsb2NpdHkiLCJhbmdsZSIsInJvdGF0ZWRWZWxvY2l0aWVzIiwicGVycyIsIm90aGVyUGVycyIsInhWZWxEaWZmIiwieVZlbERpZmYiLCJ4RGlzdCIsInlEaXN0IiwiY2hhbmdlRGlyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZPLElBQU1BLGNBQWMsR0FBRztBQUMxQkMsT0FBSyxFQUFFLENBRG1CO0FBRTFCQyxPQUFLLEVBQUU7QUFGbUIsQ0FBdkI7QUFNQSxJQUFNQyxNQUFiO0FBQ0ksa0JBQVlDLEdBQVosRUFBaUJDLEtBQWpCLEVBQXdCQyxNQUF4QixFQUFnQztBQUFBOztBQUM1QixTQUFLRixHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWFQLGNBQWMsQ0FBQ0UsS0FBNUI7QUFDSDs7QUFOTDtBQUFBO0FBQUEseUJBUVNNLEdBUlQsRUFRYztBQUNOQSxTQUFHLENBQUNDLFNBQUosR0FBZ0JULGNBQWMsQ0FBQ0UsS0FBL0I7QUFDQU0sU0FBRyxDQUFDRSxRQUFKLENBQ0ksS0FBS04sR0FBTCxDQUFTLENBQVQsQ0FESixFQUVJLEtBQUtBLEdBQUwsQ0FBUyxDQUFULENBRkosRUFHSSxLQUFLQyxLQUhULEVBSUksS0FBS0MsTUFKVDtBQU1IO0FBaEJMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7O0lBRXFCSyxLO0FBQ2pCLGlCQUFZQyxVQUFaLEVBQXdCSixHQUF4QixFQUE2QjtBQUFBOztBQUN6QixTQUFLSyxLQUFMLEdBQWEsR0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxHQUFiO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQmYsc0RBQWMsQ0FBQ0MsS0FBZixHQUF1QixDQUF6QztBQUNBLFNBQUtlLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUNBLFNBQUtMLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS00sa0JBQUwsR0FBMEIsS0FBS04sVUFBTCxDQUFnQk0sa0JBQTFDO0FBQ0EsU0FBS0MsSUFBTCxDQUFVWCxHQUFWO0FBRUg7Ozs7Z0NBRVc7QUFDUixVQUFJWSxTQUFTLEdBQUcsSUFBSWpCLDhDQUFKLENBQ1osQ0FBQyxLQUFLWSxVQUFOLEVBQWtCLEtBQUtELEtBQXZCLENBRFksRUFFWmQsc0RBQWMsQ0FBQ0MsS0FGSCxFQUdaLEVBQUcsS0FBS2EsS0FBTCxHQUFhLEtBQUtGLFVBQUwsQ0FBZ0JTLE9BQTlCLEdBQXlDLEtBQUtULFVBQUwsQ0FBZ0JVLGVBQTNELENBSFksQ0FBaEI7QUFNSSxXQUFLTixPQUFMLENBQWFPLElBQWIsQ0FBa0JILFNBQWxCO0FBQ0EsV0FBS0wsVUFBTCxJQUFtQmYsc0RBQWMsQ0FBQ0MsS0FBbEM7QUFDSDs7O3lCQUVJTyxHLEVBQUs7QUFDTkEsU0FBRyxDQUFDZ0IsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsS0FBS1gsS0FBekIsRUFBZ0MsS0FBS0MsS0FBckM7QUFDSixXQUFLRSxPQUFMLENBQWFTLE9BQWIsQ0FBcUIsVUFBQUMsTUFBTTtBQUFBLGVBQUlBLE1BQU0sQ0FBQ1AsSUFBUCxDQUFZWCxHQUFaLENBQUo7QUFBQSxPQUEzQjtBQUNIOzs7MkJBRU07QUFDSCxXQUFLbUIsU0FBTDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQy9CZ0JDLFM7QUFDakIscUJBQWFDLEtBQWIsRUFBb0JqQixVQUFwQixFQUFnQ0osR0FBaEMsRUFBcUM7QUFBQTs7QUFDakMsU0FBS3FCLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtqQixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtKLEdBQUwsR0FBV0EsR0FBWDtBQUNIOzs7OzRCQUVPO0FBQUE7O0FBQ0osV0FBS3FCLEtBQUwsQ0FBV1osYUFBWCxHQUEyQmEsV0FBVyxDQUFDLFlBQU07QUFDekMsYUFBSSxDQUFDRCxLQUFMLENBQVdFLElBQVg7O0FBQ0EsYUFBSSxDQUFDRixLQUFMLENBQVdWLElBQVgsQ0FBZ0IsS0FBSSxDQUFDWCxHQUFyQjs7QUFDQSxZQUFJLEtBQUksQ0FBQ0ksVUFBTCxDQUFnQk0sa0JBQXBCLEVBQXdDO0FBQ3BDYyx1QkFBYSxDQUFDLEtBQUksQ0FBQ0gsS0FBTCxDQUFXWixhQUFaLENBQWIsQ0FEb0MsQ0FFcEM7QUFDSDtBQUNKLE9BUHFDLEVBT25DLEVBUG1DLENBQXRDO0FBU0g7Ozt5QkFFSVksSyxFQUFPO0FBRVJHLG1CQUFhLENBQUNILEtBQUssQ0FBQ1osYUFBUCxDQUFiO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBZ0IsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN0RCxNQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csb0JBQVQsQ0FBOEIsUUFBOUIsRUFBd0MsQ0FBeEMsQ0FBbEI7QUFDQSxNQUFNQyxTQUFTLEdBQUdKLFFBQVEsQ0FBQ0csb0JBQVQsQ0FBOEIsUUFBOUIsRUFBd0MsQ0FBeEMsQ0FBbEI7QUFFQUQsV0FBUyxDQUFDOUIsS0FBVixHQUFrQmlDLG1EQUFVLENBQUN6QixLQUE3QjtBQUNBc0IsV0FBUyxDQUFDN0IsTUFBVixHQUFtQmdDLG1EQUFVLENBQUN4QixLQUE5QjtBQUNBLE1BQU15QixJQUFJLEdBQUdKLFNBQVMsQ0FBQ0ssVUFBVixDQUFxQixJQUFyQixDQUFiO0FBRUFILFdBQVMsQ0FBQ2hDLEtBQVYsR0FBa0JpQyxtREFBVSxDQUFDekIsS0FBN0I7QUFDQXdCLFdBQVMsQ0FBQy9CLE1BQVYsR0FBbUJnQyxtREFBVSxDQUFDeEIsS0FBWCxHQUFtQixDQUF0QztBQUNBLE1BQU0yQixJQUFJLEdBQUdKLFNBQVMsQ0FBQ0csVUFBVixDQUFxQixJQUFyQixDQUFiO0FBSUFFLFFBQU0sQ0FBQ0osVUFBUCxHQUFvQkEsbURBQXBCO0FBQ0FJLFFBQU0sQ0FBQ0MsY0FBUCxHQUF3QkEsd0RBQXhCO0FBQ0FELFFBQU0sQ0FBQy9CLEtBQVAsR0FBZUEsOENBQWY7QUFDQStCLFFBQU0sQ0FBQ2QsU0FBUCxHQUFtQkEsbURBQW5CO0FBR0EsTUFBSWdCLGNBQWMsR0FBR1gsUUFBUSxDQUFDWSxjQUFULENBQXdCLGlCQUF4QixDQUFyQjtBQUdBLE1BQUl4QixPQUFPLEdBQUdZLFFBQVEsQ0FBQ1ksY0FBVCxDQUF3QixrQkFBeEIsQ0FBZDtBQUNBLE1BQUlDLGFBQWEsR0FBR2IsUUFBUSxDQUFDWSxjQUFULENBQXdCLGVBQXhCLENBQXBCO0FBRUFDLGVBQWEsQ0FBQ0MsU0FBZCxHQUEwQjFCLE9BQU8sQ0FBQzJCLEtBQWxDOztBQUVBM0IsU0FBTyxDQUFDNEIsT0FBUixHQUFrQixZQUFZO0FBRTFCSCxpQkFBYSxDQUFDQyxTQUFkLEdBQTBCLEtBQUtDLEtBQS9CO0FBQ0EsUUFBSUUsRUFBRSxHQUFHLElBQUlaLG1EQUFKLENBQWUsS0FBS1UsS0FBcEIsRUFBMkJHLFVBQVUsQ0FBQ0gsS0FBWCxHQUFtQixHQUE5QyxFQUFtRFQsSUFBbkQsQ0FBVDtBQUNILEdBSkQ7O0FBS0FhLFNBQU8sQ0FBQ0MsR0FBUixDQUFZaEMsT0FBTyxDQUFDMkIsS0FBcEI7QUFFQSxNQUFJRyxVQUFVLEdBQUdsQixRQUFRLENBQUNZLGNBQVQsQ0FBd0IsaUJBQXhCLENBQWpCO0FBQ0EsTUFBSVMsZ0JBQWdCLEdBQUdyQixRQUFRLENBQUNZLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBdkI7QUFFQVMsa0JBQWdCLENBQUNQLFNBQWpCLEdBQTZCSSxVQUFVLENBQUNILEtBQXhDOztBQUVBRyxZQUFVLENBQUNGLE9BQVgsR0FBcUIsWUFBWTtBQUM3Qkssb0JBQWdCLENBQUNQLFNBQWpCLEdBQTZCLEtBQUtDLEtBQWxDO0FBQ0EsUUFBSUUsRUFBRSxHQUFHLElBQUlaLG1EQUFKLENBQWVqQixPQUFPLENBQUMyQixLQUF2QixFQUE4QixLQUFLQSxLQUFMLEdBQWEsR0FBM0MsRUFBZ0RULElBQWhELENBQVQ7QUFDQSxXQUFPVyxFQUFQO0FBQ0gsR0FKRDs7QUFLQUUsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFVBQVUsQ0FBQ0gsS0FBdkI7QUFFQSxNQUFJTyxpQkFBaUIsR0FBRyxJQUF4QjtBQUNBYixRQUFNLENBQUNhLGlCQUFQLEdBQTJCQSxpQkFBM0I7QUFDQSxNQUFJQyxxQkFBcUIsR0FBRyxJQUE1QjtBQUNBLE1BQUlDLFlBQVksR0FBRyxJQUFuQjtBQUNBLE1BQUlDLGdCQUFnQixHQUFHLElBQXZCO0FBQ0EsTUFBSUMsYUFBYSxHQUFHMUIsUUFBUSxDQUFDWSxjQUFULENBQXdCLGdCQUF4QixDQUFwQjtBQUVBLE1BQUllLGVBQWUsR0FBRzNCLFFBQVEsQ0FBQ1ksY0FBVCxDQUF3QixPQUF4QixDQUF0Qjs7QUFDQWUsaUJBQWUsQ0FBQ0MsT0FBaEIsR0FBMEIsWUFBWTtBQUNsQ04scUJBQWlCLEdBQUcsSUFBSWpCLG1EQUFKLENBQWVqQixPQUFPLENBQUMyQixLQUF2QixFQUE4QkcsVUFBVSxDQUFDSCxLQUFYLEdBQW1CLEdBQWpELEVBQXNEVCxJQUF0RCxDQUFwQjtBQUNBaUIseUJBQXFCLEdBQUcsSUFBSWIsd0RBQUosQ0FBbUJZLGlCQUFuQixFQUFzQ2hCLElBQXRDLENBQXhCO0FBQ0FrQixnQkFBWSxHQUFHLElBQUk5Qyw4Q0FBSixDQUFXNEMsaUJBQVgsRUFBOEJkLElBQTlCLENBQWY7QUFDQWlCLG9CQUFnQixHQUFHLElBQUk5QixtREFBSixDQUFjNkIsWUFBZCxFQUE0QkYsaUJBQTVCLEVBQStDZCxJQUEvQyxDQUFuQjtBQUNBZSx5QkFBcUIsQ0FBQ00sS0FBdEI7QUFDQUosb0JBQWdCLENBQUNJLEtBQWpCO0FBQ0FWLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRSxpQkFBWjtBQUNBSCxXQUFPLENBQUNDLEdBQVIsQ0FBWUksWUFBWixFQVJrQyxDQVNsQztBQUNILEdBVkQsQ0F2RHNELENBbUV0RDs7O0FBR0EsTUFBSU0sY0FBYyxHQUFHOUIsUUFBUSxDQUFDWSxjQUFULENBQXdCLE1BQXhCLENBQXJCOztBQUNBa0IsZ0JBQWMsQ0FBQ0YsT0FBZixHQUF5QixZQUFZO0FBQ2pDTCx5QkFBcUIsQ0FBQ1EsSUFBdEIsQ0FBMkJULGlCQUEzQjtBQUNBRyxvQkFBZ0IsQ0FBQ00sSUFBakIsQ0FBc0JQLFlBQXRCO0FBQ0gsR0FIRDs7QUFLQSxNQUFJUCxFQUFFLEdBQUcsSUFBSVosbURBQUosQ0FBZWpCLE9BQU8sQ0FBQzJCLEtBQXZCLEVBQThCRyxVQUFVLENBQUNILEtBQVgsR0FBbUIsR0FBakQsRUFBc0RULElBQXRELENBQVQ7QUFDQWEsU0FBTyxDQUFDQyxHQUFSLENBQVlILEVBQVo7QUFHSCxDQWhGRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTs7SUFFcUJlLFk7QUFDakIsd0JBQVlDLFVBQVosRUFBd0I7QUFBQTs7QUFDeEIsU0FBSzlELEdBQUwsR0FBWThELFVBQVUsQ0FBQzlELEdBQXZCO0FBQ0EsU0FBSytELEdBQUwsR0FBWUQsVUFBVSxDQUFDQyxHQUF2QjtBQUNBLFNBQUtDLE1BQUwsR0FBZUYsVUFBVSxDQUFDRSxNQUExQjtBQUNBLFNBQUs3RCxLQUFMLEdBQWMyRCxVQUFVLENBQUMzRCxLQUF6QjtBQUNBLFNBQUs4RCxJQUFMLEdBQVlILFVBQVUsQ0FBQ0csSUFBdkI7QUFDQSxTQUFLekQsVUFBTCxHQUFrQnNELFVBQVUsQ0FBQ3RELFVBQTdCO0FBQ0M7Ozs7eUJBR0lKLEcsRUFBSztBQUNOQSxTQUFHLENBQUNDLFNBQUosR0FBZ0IsS0FBS0YsS0FBckI7QUFDQUMsU0FBRyxDQUFDOEQsU0FBSjtBQUNBOUQsU0FBRyxDQUFDK0QsR0FBSixDQUNJLEtBQUtuRSxHQUFMLENBQVMsQ0FBVCxDQURKLEVBRUksS0FBS0EsR0FBTCxDQUFTLENBQVQsQ0FGSixFQUdJLEtBQUtnRSxNQUhULEVBSUksQ0FKSixFQUtJLElBQUlJLElBQUksQ0FBQ0MsRUFMYjtBQU9BakUsU0FBRyxDQUFDa0UsSUFBSjtBQUNGOzs7MkJBRUs7QUFDSCxXQUFLdEUsR0FBTCxHQUFXLENBQUUsS0FBS0EsR0FBTCxDQUFTLENBQVQsSUFBYyxLQUFLK0QsR0FBTCxDQUFTLENBQVQsQ0FBaEIsRUFBK0IsS0FBSy9ELEdBQUwsQ0FBUyxDQUFULElBQWMsS0FBSytELEdBQUwsQ0FBUyxDQUFULENBQTdDLENBQVg7QUFDQSxXQUFLQSxHQUFMLEdBQVcsS0FBS3ZELFVBQUwsQ0FBZ0IrRCxNQUFoQixDQUF1QixLQUFLdkUsR0FBNUIsRUFBaUMsS0FBSytELEdBQXRDLENBQVg7QUFDSDs7OzhCQUVTQSxHLEVBQUs7QUFFWCxVQUFJSyxJQUFJLENBQUNJLEdBQUwsQ0FBU1QsR0FBRyxDQUFDLENBQUQsQ0FBWixJQUFtQkssSUFBSSxDQUFDSSxHQUFMLENBQVNULEdBQUcsQ0FBQyxDQUFELENBQVosQ0FBdkIsRUFBeUM7QUFDckNBLFdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUFFQSxHQUFHLENBQUMsQ0FBRCxDQUFkO0FBQ0gsT0FGRCxNQUVPO0FBQ0hBLFdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUFFQSxHQUFHLENBQUMsQ0FBRCxDQUFkO0FBQ0g7O0FBRUQsYUFBT0EsR0FBUDtBQUNIOzs7bUNBRWNVLFcsRUFBYTtBQUN4QixVQUFNQyxVQUFVLEdBQUdDLDBDQUFJLENBQUNDLElBQUwsQ0FBVSxLQUFLNUUsR0FBZixFQUFvQnlFLFdBQVcsQ0FBQ3pFLEdBQWhDLENBQW5COztBQUNBLFVBQUkwRSxVQUFVLEdBQUksS0FBS1YsTUFBTCxHQUFjUyxXQUFXLENBQUNULE1BQTVDLEVBQXFEO0FBQ2pELGVBQU8sSUFBUDtBQUNILE9BRkQsTUFFTztBQUNILGVBQU8sS0FBUDtBQUNIOztBQUFBO0FBRUo7Ozs2QkFFUTtBQUNMLFdBQUt4RCxVQUFMLENBQWdCcUUsTUFBaEIsQ0FBdUIsSUFBdkI7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REw7QUFDQTtBQUVPLElBQU1DLFFBQVEsR0FBRztBQUNwQkMsUUFBTSxFQUFFLENBRFk7QUFFcEJqRixPQUFLLEVBQUUsV0FGYTtBQUdwQmtGLE9BQUssRUFBRSxDQUhhO0FBSXBCQyxNQUFJLEVBQUU7QUFKYyxDQUFqQjtBQU9BLElBQU1DLE1BQWI7QUFBQTs7QUFBQTs7QUFDSSxvQkFBNkI7QUFBQSxRQUFqQnBCLFVBQWlCLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3pCQSxjQUFVLENBQUMzRCxLQUFYLEdBQW1CMkUsUUFBUSxDQUFDaEYsS0FBNUI7QUFDQWdFLGNBQVUsQ0FBQ0UsTUFBWCxHQUFvQmMsUUFBUSxDQUFDQyxNQUE3QjtBQUNBakIsY0FBVSxDQUFDRyxJQUFYLEdBQWtCYSxRQUFRLENBQUNHLElBQTNCO0FBQ0FuQixjQUFVLENBQUM5RCxHQUFYLEdBQWlCOEQsVUFBVSxDQUFDOUQsR0FBWCxJQUFrQjhELFVBQVUsQ0FBQ3RELFVBQVgsQ0FBc0IyRSxjQUF0QixFQUFuQztBQUNBckIsY0FBVSxDQUFDQyxHQUFYLEdBQWlCRCxVQUFVLENBQUNDLEdBQVgsSUFBa0JZLDBDQUFJLENBQUNTLFNBQUwsQ0FBZU4sUUFBUSxDQUFDRSxLQUF4QixDQUFuQztBQUNBbEIsY0FBVSxDQUFDdUIsZUFBWCxHQUE2QixLQUE3QjtBQUNBdkIsY0FBVSxDQUFDd0IsUUFBWCxHQUFzQixLQUF0QjtBQVB5Qiw2QkFRbkJ4QixVQVJtQjtBQVM1Qjs7QUFWTDtBQUFBLEVBQTRCRCxzREFBNUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7O0lBRXFCM0IsVTtBQUNqQixzQkFBWWpCLE9BQVosRUFBcUJzRSxvQkFBckIsRUFBMkNuRixHQUEzQyxFQUFnRDtBQUFBOztBQUM1QyxTQUFLSyxLQUFMLEdBQWEsR0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxHQUFiO0FBQ0EsU0FBSzhFLFdBQUwsR0FBbUIsR0FBbkI7QUFDQSxTQUFLdkUsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS3NFLG9CQUFMLEdBQTRCQSxvQkFBNUI7QUFDQSxTQUFLekUsa0JBQUwsR0FBMEIsS0FBMUI7QUFDQSxTQUFLMkUsT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixJQUExQjtBQUNBLFNBQUt4RSxlQUFMLEdBQXVCLENBQXZCO0FBQ0EsU0FBS3lFLFVBQUw7QUFDQSxTQUFLQyxjQUFMO0FBQ0EsU0FBS0MsbUJBQUw7QUFDQSxTQUFLOUUsSUFBTCxDQUFVWCxHQUFWO0FBQ0g7Ozs7aUNBSVk7QUFDVCxXQUFJLElBQUkwRixDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUMsS0FBSzdFLE9BQXBCLEVBQTZCNkUsQ0FBQyxFQUE5QixFQUFrQztBQUM5QixhQUFLTCxPQUFMLENBQWF0RSxJQUFiLENBQWtCLElBQUkrRCw4Q0FBSixDQUFXO0FBQ3pCbEYsYUFBRyxFQUFFLEtBQUttRixjQUFMLEVBRG9CO0FBRXpCcEIsYUFBRyxFQUFFWSwwQ0FBSSxDQUFDUyxTQUFMLENBQWVOLGdEQUFRLENBQUNFLEtBQXhCLENBRm9CO0FBR3pCeEUsb0JBQVUsRUFBRTtBQUhhLFNBQVgsQ0FBbEI7O0FBS0EsWUFBSXNGLENBQUMsS0FBRyxDQUFSLEVBQVc7QUFDUCxlQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS04sT0FBTCxDQUFhTyxNQUFiLEdBQW9CLENBQXhDLEVBQTJDRCxDQUFDLEVBQTVDLEVBQWdEO0FBQzVDLGdCQUFLcEIsMENBQUksQ0FBQ0MsSUFBTCxDQUFVLEtBQUthLE9BQUwsQ0FBYUssQ0FBYixFQUFnQjlGLEdBQTFCLEVBQStCLEtBQUt5RixPQUFMLENBQWFNLENBQWIsRUFBZ0IvRixHQUEvQyxJQUFzRDhFLGdEQUFRLENBQUNDLE1BQVQsR0FBa0IsQ0FBekUsR0FBOEUsQ0FBbEYsRUFBcUY7QUFDakYsbUJBQUtVLE9BQUwsQ0FBYUssQ0FBYixFQUFnQjlGLEdBQWhCLEdBQXNCLEtBQUttRixjQUFMLEVBQXRCO0FBQ0FZLGVBQUMsR0FBQyxDQUFDLENBQUg7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNKOzs7cUNBRWdCO0FBQ2IsV0FBS04sT0FBTCxDQUFhLENBQWIsRUFBZ0J0RixLQUFoQixHQUF3QixLQUF4QjtBQUNBLFdBQUtzRixPQUFMLENBQWEsQ0FBYixFQUFnQkgsUUFBaEIsR0FBMkIsSUFBM0I7QUFDQSxXQUFLcEUsZUFBTCxHQUFzQixDQUFFLENBQXhCO0FBQ0g7OzswQ0FFcUI7QUFDbEIsV0FBSyxJQUFJNEUsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDLEtBQUtMLE9BQUwsQ0FBYU8sTUFBYixHQUFzQixLQUFLVCxvQkFBM0IsR0FBZ0QsQ0FBaEUsRUFBbUVPLENBQUMsRUFBcEUsRUFBd0U7QUFDcEUsYUFBS0wsT0FBTCxDQUFhSyxDQUFiLEVBQWdCRyxnQkFBaEIsR0FBbUMsSUFBbkM7QUFDQSxhQUFLUixPQUFMLENBQWFLLENBQWIsRUFBZ0IvQixHQUFoQixHQUFzQixDQUFDLENBQUQsRUFBRyxDQUFILENBQXRCO0FBQ0EsYUFBSzBCLE9BQUwsQ0FBYUssQ0FBYixFQUFnQjNGLEtBQWhCLEdBQXdCLE9BQXhCO0FBQ0g7QUFDSjs7O3FDQUlnQjtBQUNiLFVBQU0rRixHQUFHLEdBQUdwQixnREFBUSxDQUFDQyxNQUFyQjtBQUNBLFVBQUlvQixDQUFDLEdBQUd4QiwwQ0FBSSxDQUFDeUIsY0FBTCxDQUFvQkYsR0FBcEIsRUFBeUIsS0FBS3pGLEtBQUwsR0FBYXlGLEdBQXRDLENBQVI7QUFDQSxVQUFJRyxDQUFDLEdBQUcxQiwwQ0FBSSxDQUFDeUIsY0FBTCxDQUFvQkYsR0FBcEIsRUFBeUIsS0FBS3hGLEtBQUwsR0FBYXdGLEdBQXRDLENBQVI7QUFDQSxhQUFPLENBQUNDLENBQUQsRUFBR0UsQ0FBSCxDQUFQO0FBQ0g7Ozt5QkFFSWpHLEcsRUFBSztBQUNOQSxTQUFHLENBQUNnQixTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixLQUFLWCxLQUF6QixFQUFnQyxLQUFLQyxLQUFyQztBQUNBLFdBQUsrRSxPQUFMLENBQWFwRSxPQUFiLENBQXNCLFVBQUFpRixNQUFNO0FBQUEsZUFBSUEsTUFBTSxDQUFDdkYsSUFBUCxDQUFZWCxHQUFaLENBQUo7QUFBQSxPQUE1QjtBQUNIOzs7a0NBRWE7QUFDVixXQUFLcUYsT0FBTCxDQUFhcEUsT0FBYixDQUFxQixVQUFDaUYsTUFBRCxFQUFZO0FBQzdCQSxjQUFNLENBQUNDLElBQVA7QUFDSCxPQUZEO0FBR0g7OztpQ0FFWUMsTSxFQUFRO0FBQ2pCLFdBQUtmLE9BQUwsQ0FBYWdCLE1BQWIsQ0FBb0IsS0FBS2hCLE9BQUwsQ0FBYWlCLE9BQWIsQ0FBcUJGLE1BQXJCLENBQXBCLEVBQWtELENBQWxEO0FBQ0g7OztzQ0FHaUI7QUFDZCxXQUFLLElBQUlWLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBQyxLQUFLTCxPQUFMLENBQWFPLE1BQTdCLEVBQW9DRixDQUFDLEVBQXJDLEVBQXlDO0FBQ3JDLGFBQUssSUFBSUMsQ0FBQyxHQUFDRCxDQUFDLEdBQUMsQ0FBYixFQUFnQkMsQ0FBQyxHQUFDLEtBQUtOLE9BQUwsQ0FBYU8sTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDeEMsY0FBSVksS0FBSyxHQUFHLEtBQUtsQixPQUFMLENBQWFLLENBQWIsQ0FBWjtBQUNBLGNBQUljLEtBQUssR0FBRyxLQUFLbkIsT0FBTCxDQUFhTSxDQUFiLENBQVo7O0FBRUEsY0FBSVksS0FBSyxDQUFDRSxjQUFOLENBQXFCRCxLQUFyQixDQUFKLEVBQWlDO0FBRXpCakMsc0RBQUksQ0FBQ21DLGdCQUFMLENBQXNCSCxLQUF0QixFQUE2QkMsS0FBN0I7O0FBQ0EsZ0JBQUlELEtBQUssQ0FBQ3hHLEtBQU4sS0FBZ0IsS0FBaEIsSUFBeUJ5RyxLQUFLLENBQUN6RyxLQUFOLEtBQWdCLEtBQTdDLEVBQW9EO0FBQ3BEeUcsbUJBQUssQ0FBQ3pHLEtBQU4sR0FBYyxLQUFkO0FBQ0F5RyxtQkFBSyxDQUFDdEIsUUFBTixHQUFpQixJQUFqQjtBQUNBLG1CQUFLcEUsZUFBTCxJQUF3QixDQUF4QjtBQUNDLGFBSkQsTUFJTyxJQUFJMEYsS0FBSyxDQUFDekcsS0FBTixLQUFnQixLQUFoQixJQUF5QndHLEtBQUssQ0FBQ3hHLEtBQU4sS0FBZ0IsS0FBN0MsRUFBb0Q7QUFDdkR3RyxtQkFBSyxDQUFDeEcsS0FBTixHQUFjLEtBQWQ7QUFDQXdHLG1CQUFLLENBQUNyQixRQUFOLEdBQWlCLE1BQWpCO0FBQ0EsbUJBQUtwRSxlQUFMLElBQXdCLENBQXhCO0FBQ0g7O0FBQUE7QUFHUjtBQUNKO0FBQ0o7QUFDSjs7OzJCQUdNbEIsRyxFQUFLK0QsRyxFQUFLO0FBQ2IsVUFBSW1DLEdBQUcsR0FBR3BCLGdEQUFRLENBQUNDLE1BQW5COztBQUNBLFVBQUkvRSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQU9rRyxHQUFQLEdBQWEsQ0FBYixJQUFrQmxHLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBT2tHLEdBQVAsR0FBYSxLQUFLekYsS0FBeEMsRUFBK0M7QUFDNUNzRCxXQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBRUEsR0FBRyxDQUFDLENBQUQsQ0FBZDtBQUNGLE9BRkQsTUFFTyxJQUFJL0QsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFPa0csR0FBUCxHQUFhLENBQWIsSUFBa0JsRyxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQU9rRyxHQUFQLEdBQWEsS0FBS3hGLEtBQXhDLEVBQStDO0FBQ2xEcUQsV0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBQUVBLEdBQUcsQ0FBQyxDQUFELENBQWQ7QUFDSDs7QUFDRCxhQUFPQSxHQUFQO0FBQ0g7OztzQ0FFaUI7QUFDZCxVQUFJLEtBQUs3QyxlQUFMLEdBQXVCLEtBQUtELE9BQTVCLEdBQXNDLElBQTFDLEVBQWdEO0FBQzVDLGFBQUtILGtCQUFMLEdBQTBCLElBQTFCO0FBQ0g7QUFDSjs7OzJCQUVNO0FBRUgsV0FBS2lHLFdBQUw7QUFDQSxXQUFLQyxlQUFMO0FBQ0EsV0FBS0MsZUFBTDtBQUVIOzs7Ozs7O0FBSUwvRSxVQUFVLENBQUN6QixLQUFYLEdBQW1CLEdBQW5CO0FBQ0F5QixVQUFVLENBQUN4QixLQUFYLEdBQW1CLEdBQW5CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbElxQjZCLGM7QUFDakIsMEJBQVkvQixVQUFaLEVBQXdCSixHQUF4QixFQUE2QjtBQUFBOztBQUN6QixTQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLSSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNIOzs7OzRCQUVPO0FBQUE7O0FBQ0osV0FBS0EsVUFBTCxDQUFnQmtGLGtCQUFoQixHQUFxQ2hFLFdBQVcsQ0FBQyxZQUFNO0FBQ25ELGFBQUksQ0FBQ2xCLFVBQUwsQ0FBZ0JtQixJQUFoQjs7QUFDQSxhQUFJLENBQUNuQixVQUFMLENBQWdCTyxJQUFoQixDQUFxQixLQUFJLENBQUNYLEdBQTFCOztBQUNBLFlBQUksS0FBSSxDQUFDSSxVQUFMLENBQWdCTSxrQkFBcEIsRUFBd0M7QUFDcENjLHVCQUFhLENBQUMsS0FBSSxDQUFDcEIsVUFBTCxDQUFnQmtGLGtCQUFqQixDQUFiLENBRG9DLENBRXBDO0FBQ0g7QUFDSixPQVArQyxFQU83QyxFQVA2QyxDQUFoRDtBQVVIOzs7eUJBRUlsRixVLEVBQVk7QUFFYm9CLG1CQUFhLENBQUNwQixVQUFVLENBQUNrRixrQkFBWixDQUFiO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCTDtBQUFBO0FBQU8sSUFBTWYsSUFBSSxHQUFHO0FBQ2pCO0FBQ0FTLFdBRmlCLHFCQUVQWSxNQUZPLEVBRUM7QUFDZixRQUFNa0IsR0FBRyxHQUFHLElBQUk5QyxJQUFJLENBQUNDLEVBQVQsR0FBY0QsSUFBSSxDQUFDK0MsTUFBTCxFQUExQjtBQUNBLFdBQU94QyxJQUFJLENBQUN5QyxLQUFMLENBQVcsQ0FBQ2hELElBQUksQ0FBQ2lELEdBQUwsQ0FBU0gsR0FBVCxDQUFELEVBQWdCOUMsSUFBSSxDQUFDa0QsR0FBTCxDQUFTSixHQUFULENBQWhCLENBQVgsRUFBMkNsQixNQUEzQyxDQUFQO0FBQ0YsR0FMZ0I7QUFNakI7QUFDQW9CLE9BUGlCLGlCQU9YRyxHQVBXLEVBT05DLENBUE0sRUFPSDtBQUNYLFdBQU8sQ0FBQ0QsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTQyxDQUFWLEVBQWFELEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU0MsQ0FBdEIsQ0FBUDtBQUNGLEdBVGdCO0FBV2pCNUMsTUFYaUIsZ0JBV1o2QyxJQVhZLEVBV05DLElBWE0sRUFXQTtBQUNkLFdBQU90RCxJQUFJLENBQUN1RCxJQUFMLENBQ0p2RCxJQUFJLENBQUN3RCxHQUFMLENBQVNILElBQUksQ0FBQyxDQUFELENBQUosR0FBVUMsSUFBSSxDQUFDLENBQUQsQ0FBdkIsRUFBNEIsQ0FBNUIsSUFBaUN0RCxJQUFJLENBQUN3RCxHQUFMLENBQVNILElBQUksQ0FBQyxDQUFELENBQUosR0FBVUMsSUFBSSxDQUFDLENBQUQsQ0FBdkIsRUFBNEIsQ0FBNUIsQ0FEN0IsQ0FBUDtBQUdGLEdBZmdCO0FBaUJqQnRCLGdCQWpCaUIsMEJBaUJGeUIsR0FqQkUsRUFpQkdDLEdBakJILEVBaUJRO0FBQ3RCLFdBQU8xRCxJQUFJLENBQUMyRCxLQUFMLENBQVczRCxJQUFJLENBQUMrQyxNQUFMLE1BQWlCVyxHQUFHLEdBQUdELEdBQU4sR0FBWSxDQUE3QixJQUFrQ0EsR0FBN0MsQ0FBUDtBQUNGLEdBbkJnQjtBQXFCakJHLFFBckJpQixrQkFxQlZDLFFBckJVLEVBcUJBQyxLQXJCQSxFQXFCTztBQUNyQixRQUFNQyxpQkFBaUIsR0FBRztBQUN2QmhDLE9BQUMsRUFBRThCLFFBQVEsQ0FBQyxDQUFELENBQVIsR0FBYzdELElBQUksQ0FBQ2tELEdBQUwsQ0FBU1ksS0FBVCxDQUFkLEdBQWdDRCxRQUFRLENBQUMsQ0FBRCxDQUFSLEdBQWM3RCxJQUFJLENBQUNpRCxHQUFMLENBQVNhLEtBQVQsQ0FEMUI7QUFFdkI3QixPQUFDLEVBQUU0QixRQUFRLENBQUMsQ0FBRCxDQUFSLEdBQWM3RCxJQUFJLENBQUNpRCxHQUFMLENBQVNhLEtBQVQsQ0FBZCxHQUFnQ0QsUUFBUSxDQUFDLENBQUQsQ0FBUixHQUFjN0QsSUFBSSxDQUFDa0QsR0FBTCxDQUFTWSxLQUFUO0FBRjFCLEtBQTFCO0FBSUEsV0FBT0MsaUJBQVA7QUFDRixHQTNCZ0I7QUE2QmpCckIsa0JBN0JpQiw0QkE2QkFzQixJQTdCQSxFQTZCTUMsU0E3Qk4sRUE2QmlCO0FBRS9CLFFBQU1DLFFBQVEsR0FBR0YsSUFBSSxDQUFDckUsR0FBTCxDQUFTLENBQVQsSUFBY3NFLFNBQVMsQ0FBQ3RFLEdBQVYsQ0FBYyxDQUFkLENBQS9CO0FBQ0EsUUFBTXdFLFFBQVEsR0FBR0gsSUFBSSxDQUFDckUsR0FBTCxDQUFTLENBQVQsSUFBY3NFLFNBQVMsQ0FBQ3RFLEdBQVYsQ0FBYyxDQUFkLENBQS9CO0FBR0EsUUFBTXlFLEtBQUssR0FBR0gsU0FBUyxDQUFDckksR0FBVixDQUFjLENBQWQsSUFBbUJvSSxJQUFJLENBQUNwSSxHQUFMLENBQVMsQ0FBVCxDQUFqQztBQUNBLFFBQU15SSxLQUFLLEdBQUdKLFNBQVMsQ0FBQ3JJLEdBQVYsQ0FBYyxDQUFkLElBQW1Cb0ksSUFBSSxDQUFDcEksR0FBTCxDQUFTLENBQVQsQ0FBakMsQ0FQK0IsQ0FTL0I7O0FBQ0EsUUFBSXNJLFFBQVEsR0FBR0UsS0FBWCxHQUFtQkQsUUFBUSxHQUFHRSxLQUE5QixJQUF1QyxDQUEzQyxFQUE4QztBQUUzQ0wsVUFBSSxDQUFDckUsR0FBTCxHQUFXcUUsSUFBSSxDQUFDTSxTQUFMLENBQWVOLElBQUksQ0FBQ3JFLEdBQXBCLENBQVg7QUFDQXNFLGVBQVMsQ0FBQ3RFLEdBQVYsR0FBZ0JzRSxTQUFTLENBQUNLLFNBQVYsQ0FBb0JMLFNBQVMsQ0FBQ3RFLEdBQTlCLENBQWhCO0FBRUY7QUFDSCxHQTdDZ0IsQ0E4Q2pCO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBdktpQixDQUFiLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcblxuZXhwb3J0IGNvbnN0IEdSQVBIX0RFRkFVTFRTID0ge1xuICAgIFdJRFRIOiAxLFxuICAgIENPTE9SOiAncmVkJ1xuXG59XG5cbmV4cG9ydCBjbGFzcyBDb2x1bW4ge1xuICAgIGNvbnN0cnVjdG9yKHBvcywgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLnBvcyA9IHBvcztcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5jb2xvciA9IEdSQVBIX0RFRkFVTFRTLkNPTE9SXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IEdSQVBIX0RFRkFVTFRTLkNPTE9SO1xuICAgICAgICBjdHguZmlsbFJlY3QoXG4gICAgICAgICAgICB0aGlzLnBvc1swXSxcbiAgICAgICAgICAgIHRoaXMucG9zWzFdLFxuICAgICAgICAgICAgdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0XG4gICAgICAgIClcbiAgICB9XG5cblxufSIsImltcG9ydCB7IENvbHVtbiwgR1JBUEhfREVGQVVMVFN9IGZyb20gJy4vY29sdW1uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGgge1xuICAgIGNvbnN0cnVjdG9yKHNpbXVsYXRpb24sIGN0eCkge1xuICAgICAgICB0aGlzLkRJTV9YID0gNjAwO1xuICAgICAgICB0aGlzLkRJTV9ZID0gMjAwO1xuICAgICAgICB0aGlzLlhQYXJhbWV0ZXIgPSBHUkFQSF9ERUZBVUxUUy5XSURUSCAvIDI7XG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtdO1xuICAgICAgICB0aGlzLmdyYXBoSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB0aGlzLnNpbXVsYXRpb24gPSBzaW11bGF0aW9uO1xuICAgICAgICB0aGlzLnBvcHVsYXRpb25JbmZlY3RlZCA9IHRoaXMuc2ltdWxhdGlvbi5wb3B1bGF0aW9uSW5mZWN0ZWRcbiAgICAgICAgdGhpcy5kcmF3KGN0eCk7XG5cbiAgICB9XG5cbiAgICBhZGRDb2x1bW4oKSB7XG4gICAgICAgIGxldCBuZXdDb2x1bW4gPSBuZXcgQ29sdW1uKFxuICAgICAgICAgICAgW3RoaXMuWFBhcmFtZXRlciwgdGhpcy5ESU1fWV0sXG4gICAgICAgICAgICBHUkFQSF9ERUZBVUxUUy5XSURUSCxcbiAgICAgICAgICAgIC0oKHRoaXMuRElNX1kgLyB0aGlzLnNpbXVsYXRpb24uZGVuc2l0eSkgKiB0aGlzLnNpbXVsYXRpb24uaW5mZWN0aW9uTnVtYmVyKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaChuZXdDb2x1bW4pO1xuICAgICAgICAgICAgdGhpcy5YUGFyYW1ldGVyICs9IEdSQVBIX0RFRkFVTFRTLldJRFRIO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkcmF3KGN0eCkge1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLkRJTV9YLCB0aGlzLkRJTV9ZKTtcbiAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goY29sdW1uID0+IGNvbHVtbi5kcmF3KGN0eCkpO1xuICAgIH1cblxuICAgIHN0ZXAoKSB7XG4gICAgICAgIHRoaXMuYWRkQ29sdW1uKCk7XG4gICAgfVxuXG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoVmlldyB7XG4gICAgY29uc3RydWN0b3IgKGdyYXBoLCBzaW11bGF0aW9uLCBjdHgpIHtcbiAgICAgICAgdGhpcy5ncmFwaCA9IGdyYXBoO1xuICAgICAgICB0aGlzLnNpbXVsYXRpb24gPSBzaW11bGF0aW9uO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDsgXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZ3JhcGguZ3JhcGhJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGguc3RlcCgpO1xuICAgICAgICAgICAgdGhpcy5ncmFwaC5kcmF3KHRoaXMuY3R4KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbXVsYXRpb24ucG9wdWxhdGlvbkluZmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmdyYXBoLmdyYXBoSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RvcCh0aGlzLmdyYXBoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCA0MCk7XG5cbiAgICB9XG5cbiAgICBzdG9wKGdyYXBoKSB7XG5cbiAgICAgICAgY2xlYXJJbnRlcnZhbChncmFwaC5ncmFwaEludGVydmFsKTtcbiAgICB9XG5cblxufVxuXG5cbiIsImltcG9ydCBTaW11bGF0aW9uIGZyb20gJy4vc2ltdWxhdGlvbic7XG5pbXBvcnQgU2ltdWxhdGlvblZpZXcgZnJvbSAnLi9zaW11bGF0aW9uX3ZpZXcnO1xuaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuaW1wb3J0IEdyYXBoVmlldyBmcm9tICcuL2dyYXBoX3ZpZXcnO1xuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL21vdmluZ19vYmplY3QnO1xuaW1wb3J0IHtQZXJzb259IGZyb20gJy4vcGVyc29uJztcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXNFbDEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgICBjb25zdCBjYW52YXNFbDIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVsxXTtcblxuICAgIGNhbnZhc0VsMS53aWR0aCA9IFNpbXVsYXRpb24uRElNX1g7XG4gICAgY2FudmFzRWwxLmhlaWdodCA9IFNpbXVsYXRpb24uRElNX1k7XG4gICAgY29uc3QgY3R4MSA9IGNhbnZhc0VsMS5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBjYW52YXNFbDIud2lkdGggPSBTaW11bGF0aW9uLkRJTV9YO1xuICAgIGNhbnZhc0VsMi5oZWlnaHQgPSBTaW11bGF0aW9uLkRJTV9ZIC8gMjtcbiAgICBjb25zdCBjdHgyID0gY2FudmFzRWwyLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIFxuXG4gICAgd2luZG93LlNpbXVsYXRpb24gPSBTaW11bGF0aW9uO1xuICAgIHdpbmRvdy5TaW11bGF0aW9uVmlldyA9IFNpbXVsYXRpb25WaWV3O1xuICAgIHdpbmRvdy5HcmFwaCA9IEdyYXBoO1xuICAgIHdpbmRvdy5HcmFwaFZpZXcgPSBHcmFwaFZpZXc7XG5cbiAgICBcbiAgICBsZXQgaW5mZWN0ZWROdW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZmVjdGVkLW51bWJlclwiKTtcblxuXG4gICAgbGV0IGRlbnNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktZGVuc2l0eS1yYW5nZScpO1xuICAgIGxldCBvdXRwdXREZW5zaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbnNpdHktdmFsdWUnKTtcblxuICAgIG91dHB1dERlbnNpdHkuaW5uZXJIVE1MID0gZGVuc2l0eS52YWx1ZTtcblxuICAgIGRlbnNpdHkub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXG4gICAgICAgIG91dHB1dERlbnNpdHkuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcbiAgICAgICAgbGV0IHMxID0gbmV3IFNpbXVsYXRpb24odGhpcy52YWx1ZSwgc29jaWFsRGlzdC52YWx1ZSAvIDEwMCwgY3R4MSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRlbnNpdHkudmFsdWUpO1xuXG4gICAgbGV0IHNvY2lhbERpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktc29jaWFsLXJhbmdlJyk7XG4gICAgbGV0IG91dHB1dFNvY2lhbERpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29jaWFsLXZhbHVlJyk7XG5cbiAgICBvdXRwdXRTb2NpYWxEaXN0LmlubmVySFRNTCA9IHNvY2lhbERpc3QudmFsdWU7XG5cbiAgICBzb2NpYWxEaXN0Lm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG91dHB1dFNvY2lhbERpc3QuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcbiAgICAgICAgbGV0IHMxID0gbmV3IFNpbXVsYXRpb24oZGVuc2l0eS52YWx1ZSwgdGhpcy52YWx1ZSAvIDEwMCwgY3R4MSk7XG4gICAgICAgIHJldHVybiBzMTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coc29jaWFsRGlzdC52YWx1ZSk7XG5cbiAgICBsZXQgY3VycmVudFNpbXVsYXRpb24gPSBudWxsO1xuICAgIHdpbmRvdy5jdXJyZW50U2ltdWxhdGlvbiA9IGN1cnJlbnRTaW11bGF0aW9uO1xuICAgIGxldCBjdXJyZW50U2ltdWxhdGlvblZpZXcgPSBudWxsO1xuICAgIGxldCBjdXJyZW50R3JhcGggPSBudWxsO1xuICAgIGxldCBjdXJyZW50R3JhcGhWaWV3ID0gbnVsbDtcbiAgICBsZXQgaW5mZWN0aW9uUmF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZlY3Rpb24tcmF0ZScpO1xuICAgIFxuICAgIGxldCBzdGFydFNpbXVsYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKTtcbiAgICBzdGFydFNpbXVsYXRpb24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3VycmVudFNpbXVsYXRpb24gPSBuZXcgU2ltdWxhdGlvbihkZW5zaXR5LnZhbHVlLCBzb2NpYWxEaXN0LnZhbHVlIC8gMTAwLCBjdHgxKTtcbiAgICAgICAgY3VycmVudFNpbXVsYXRpb25WaWV3ID0gbmV3IFNpbXVsYXRpb25WaWV3KGN1cnJlbnRTaW11bGF0aW9uLCBjdHgxKTtcbiAgICAgICAgY3VycmVudEdyYXBoID0gbmV3IEdyYXBoIChjdXJyZW50U2ltdWxhdGlvbiwgY3R4Mik7XG4gICAgICAgIGN1cnJlbnRHcmFwaFZpZXcgPSBuZXcgR3JhcGhWaWV3KGN1cnJlbnRHcmFwaCwgY3VycmVudFNpbXVsYXRpb24sIGN0eDIpO1xuICAgICAgICBjdXJyZW50U2ltdWxhdGlvblZpZXcuc3RhcnQoKTtcbiAgICAgICAgY3VycmVudEdyYXBoVmlldy5zdGFydCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50U2ltdWxhdGlvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRHcmFwaCk7XG4gICAgICAgIC8vIGluZmVjdGVkTnVtYmVyLmlubmVySFRNTCA9IGN1cnJlbnRTaW11bGF0aW9uLmluZmVjdGlvbk51bWJlcjtcbiAgICB9XG5cbiAgICAvLyBpbmZlY3Rpb25SYXRlLmlubmVySFRNTCA9IGN1cnJlbnRTaW11bGF0aW9uLmluZmVjdGlvbk51bWJlciB8fCAwXG4gICAgXG4gICAgXG4gICAgbGV0IHN0b3BTaW11bGF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0b3AnKTtcbiAgICBzdG9wU2ltdWxhdGlvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjdXJyZW50U2ltdWxhdGlvblZpZXcuc3RvcChjdXJyZW50U2ltdWxhdGlvbik7XG4gICAgICAgIGN1cnJlbnRHcmFwaFZpZXcuc3RvcChjdXJyZW50R3JhcGgpXG4gICAgfVxuICAgIFxuICAgIGxldCBzMSA9IG5ldyBTaW11bGF0aW9uKGRlbnNpdHkudmFsdWUsIHNvY2lhbERpc3QudmFsdWUgLyAxMDAsIGN0eDEpO1xuICAgIGNvbnNvbGUubG9nKHMxKTtcblxuICAgIFxufSk7IiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgU2ltdWxhdGlvbiBmcm9tICcuL3NpbXVsYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnBvcyAgPSBwYXJhbWV0ZXJzLnBvcztcbiAgICB0aGlzLnZlbCAgPSBwYXJhbWV0ZXJzLnZlbDtcbiAgICB0aGlzLnJhZGl1cyAgPSBwYXJhbWV0ZXJzLnJhZGl1cztcbiAgICB0aGlzLmNvbG9yICA9IHBhcmFtZXRlcnMuY29sb3I7XG4gICAgdGhpcy5tYXNzID0gcGFyYW1ldGVycy5tYXNzO1xuICAgIHRoaXMuc2ltdWxhdGlvbiA9IHBhcmFtZXRlcnMuc2ltdWxhdGlvbjtcbiAgICB9XG5cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICB0aGlzLnBvc1swXSxcbiAgICAgICAgICAgIHRoaXMucG9zWzFdLFxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBbKHRoaXMucG9zWzBdICsgdGhpcy52ZWxbMF0pLCAodGhpcy5wb3NbMV0gKyB0aGlzLnZlbFsxXSldXG4gICAgICAgIHRoaXMudmVsID0gdGhpcy5zaW11bGF0aW9uLmJvdW5jZSh0aGlzLnBvcywgdGhpcy52ZWwpO1xuICAgIH07XG5cbiAgICBjaGFuZ2VEaXIodmVsKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoTWF0aC5hYnModmVsWzBdKSA+IE1hdGguYWJzKHZlbFsxXSkpIHtcbiAgICAgICAgICAgIHZlbFswXSA9IC0gdmVsWzBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2ZWxbMV0gPSAtIHZlbFsxXVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdmVsO1xuICAgIH1cbiAgICBcbiAgICBpc0NvbGxpZGVkV2l0aChvdGhlck9iamVjdCkge1xuICAgICAgICBjb25zdCBjZW50ZXJEaXN0ID0gVXRpbC5kaXN0KHRoaXMucG9zLCBvdGhlck9iamVjdC5wb3MpO1xuICAgICAgICBpZiAoY2VudGVyRGlzdCA8ICh0aGlzLnJhZGl1cyArIG90aGVyT2JqZWN0LnJhZGl1cykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICB0aGlzLnNpbXVsYXRpb24ucmVtb3ZlKHRoaXMpO1xuICAgIH1cblxuIH1cblxuXG4iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL21vdmluZ19vYmplY3RcIjtcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVFMgPSB7XG4gICAgUkFESVVTOiAyLFxuICAgIENPTE9SOiBcImxpZ2h0Z3JheVwiLFxuICAgIFNQRUVEOiAyLFxuICAgIE1BU1M6IDFcbn1cblxuZXhwb3J0IGNsYXNzIFBlcnNvbiBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVycyA9IHt9KSB7XG4gICAgICAgIHBhcmFtZXRlcnMuY29sb3IgPSBERUZBVUxUUy5DT0xPUjtcbiAgICAgICAgcGFyYW1ldGVycy5yYWRpdXMgPSBERUZBVUxUUy5SQURJVVM7XG4gICAgICAgIHBhcmFtZXRlcnMubWFzcyA9IERFRkFVTFRTLk1BU1M7XG4gICAgICAgIHBhcmFtZXRlcnMucG9zID0gcGFyYW1ldGVycy5wb3MgfHwgcGFyYW1ldGVycy5zaW11bGF0aW9uLnJhbmRvbVBvc2l0aW9uKCk7XG4gICAgICAgIHBhcmFtZXRlcnMudmVsID0gcGFyYW1ldGVycy52ZWwgfHwgVXRpbC5yYW5kb21WZWMoREVGQVVMVFMuU1BFRUQpO1xuICAgICAgICBwYXJhbWV0ZXJzLmNvbnNjaW91c0N0aXplbiA9IGZhbHNlO1xuICAgICAgICBwYXJhbWV0ZXJzLmluZmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHN1cGVyKHBhcmFtZXRlcnMpO1xuICAgIH1cblxufSIsImltcG9ydCB7UGVyc29uLCBERUZBVUxUU30gZnJvbSAnLi9wZXJzb24nO1xuaW1wb3J0IHtVdGlsfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFNpbXVsYXRpb25WaWV3IGZyb20gJy4vc2ltdWxhdGlvbl92aWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvbiB7XG4gICAgY29uc3RydWN0b3IoZGVuc2l0eSwgc29jaWFsRGlzdGFuY2luZ1JhdGUsIGN0eCkge1xuICAgICAgICB0aGlzLkRJTV9YID0gNjAwO1xuICAgICAgICB0aGlzLkRJTV9ZID0gNDAwO1xuICAgICAgICB0aGlzLk5VTV9QRVJTT05TID0gMTAwO1xuICAgICAgICB0aGlzLmRlbnNpdHkgPSBkZW5zaXR5O1xuICAgICAgICB0aGlzLnNvY2lhbERpc3RhbmNpbmdSYXRlID0gc29jaWFsRGlzdGFuY2luZ1JhdGU7XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbkluZmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGVyc29ucyA9IFtdO1xuICAgICAgICB0aGlzLnNpbXVsYXRpb25JbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5mZWN0aW9uTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5hZGRQZXJzb25zKCk7XG4gICAgICAgIHRoaXMuYWRkUGF0aWVudFplcm8oKTtcbiAgICAgICAgdGhpcy5hZGRDb25zY2lvdXNDaXRpemVuKCk7XG4gICAgICAgIHRoaXMuZHJhdyhjdHgpO1xuICAgIH1cblxuXG5cbiAgICBhZGRQZXJzb25zKCkge1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLmRlbnNpdHk7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wZXJzb25zLnB1c2gobmV3IFBlcnNvbih7XG4gICAgICAgICAgICAgICAgcG9zOiB0aGlzLnJhbmRvbVBvc2l0aW9uKCksIFxuICAgICAgICAgICAgICAgIHZlbDogVXRpbC5yYW5kb21WZWMoREVGQVVMVFMuU1BFRUQpLCBcbiAgICAgICAgICAgICAgICBzaW11bGF0aW9uOiB0aGlzfSkpO1xuXG4gICAgICAgICAgICBpZiAoaSE9PTApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucGVyc29ucy5sZW5ndGgtMTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoVXRpbC5kaXN0KHRoaXMucGVyc29uc1tpXS5wb3MsIHRoaXMucGVyc29uc1tqXS5wb3MpIC0gREVGQVVMVFMuUkFESVVTICogMikgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0ucG9zID0gdGhpcy5yYW5kb21Qb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaj0tMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFBhdGllbnRaZXJvKCkge1xuICAgICAgICB0aGlzLnBlcnNvbnNbMF0uY29sb3IgPSAncmVkJztcbiAgICAgICAgdGhpcy5wZXJzb25zWzBdLmluZmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbmZlY3Rpb25OdW1iZXIgPSsgMTtcbiAgICB9XG5cbiAgICBhZGRDb25zY2lvdXNDaXRpemVuKCkge1xuICAgICAgICBmb3IgKGxldCBpPTE7IGk8dGhpcy5wZXJzb25zLmxlbmd0aCAqIHRoaXMuc29jaWFsRGlzdGFuY2luZ1JhdGUrMTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0uY29uc2Npb3VzQ2l0aXplbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0udmVsID0gWzAsMF07XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0uY29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBcbiAgICByYW5kb21Qb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgcmFkID0gREVGQVVMVFMuUkFESVVTO1xuICAgICAgICBsZXQgeCA9IFV0aWwucmFuZG9tSW50UmFuZ2UocmFkLCB0aGlzLkRJTV9YIC0gcmFkKTtcbiAgICAgICAgbGV0IHkgPSBVdGlsLnJhbmRvbUludFJhbmdlKHJhZCwgdGhpcy5ESU1fWSAtIHJhZCk7XG4gICAgICAgIHJldHVybiBbeCx5XTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuRElNX1gsIHRoaXMuRElNX1kpO1xuICAgICAgICB0aGlzLnBlcnNvbnMuZm9yRWFjaCggcGVyc29uID0+IHBlcnNvbi5kcmF3KGN0eCkpO1xuICAgIH1cblxuICAgIG1vdmVPYmplY3RzKCkge1xuICAgICAgICB0aGlzLnBlcnNvbnMuZm9yRWFjaCgocGVyc29uKSA9PiB7XG4gICAgICAgICAgICBwZXJzb24ubW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVPYmplY3Qob2JqZWN0KSB7XG4gICAgICAgIHRoaXMucGVyc29ucy5zcGxpY2UodGhpcy5wZXJzb25zLmluZGV4T2Yob2JqZWN0KSwgMSlcbiAgICB9XG4gICAgXG5cbiAgICBjaGVja0NvbGxpc2lvbnMoKSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLnBlcnNvbnMubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaj1pKzE7IGo8dGhpcy5wZXJzb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBlcnMxID0gdGhpcy5wZXJzb25zW2ldO1xuICAgICAgICAgICAgICAgIGxldCBwZXJzMiA9IHRoaXMucGVyc29uc1tqXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocGVyczEuaXNDb2xsaWRlZFdpdGgocGVyczIpKSB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWwucmVzb2x2ZUNvbGxpc2lvbihwZXJzMSwgcGVyczIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBlcnMxLmNvbG9yID09PSAncmVkJyAmJiBwZXJzMi5jb2xvciAhPT0gJ3JlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnMyLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzMi5pbmZlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluZmVjdGlvbk51bWJlciArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwZXJzMi5jb2xvciA9PT0gJ3JlZCcgJiYgcGVyczEuY29sb3IgIT09ICdyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyczEuY29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzMS5pbmZlY3RlZCA9ICd0cnVlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluZmVjdGlvbk51bWJlciArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBib3VuY2UocG9zLCB2ZWwpIHtcbiAgICAgICAgbGV0IHJhZCA9IERFRkFVTFRTLlJBRElVU1xuICAgICAgICBpZiAocG9zWzBdLXJhZCA8IDAgfHwgcG9zWzBdK3JhZCA+IHRoaXMuRElNX1gpIHtcbiAgICAgICAgICAgdmVsWzBdID0gLSB2ZWxbMF0gXG4gICAgICAgIH0gZWxzZSBpZiAocG9zWzFdLXJhZCA8IDAgfHwgcG9zWzFdK3JhZCA+IHRoaXMuRElNX1kpIHtcbiAgICAgICAgICAgIHZlbFsxXSA9IC0gdmVsWzFdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZlbDtcbiAgICB9XG5cbiAgICBoYW5kbGVJbmZlY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmluZmVjdGlvbk51bWJlciAvIHRoaXMuZGVuc2l0eSA+IDAuOTkpIHtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGlvbkluZmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSAgIFxuICAgIH1cblxuICAgIHN0ZXAoKSB7XG5cbiAgICAgICAgdGhpcy5tb3ZlT2JqZWN0cygpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9ucygpO1xuICAgICAgICB0aGlzLmhhbmRsZUluZmVjdGlvbigpO1xuXG4gICAgfVxuXG59XG5cblNpbXVsYXRpb24uRElNX1ggPSA2MDA7XG5TaW11bGF0aW9uLkRJTV9ZID0gNDAwO1xuXG4iLCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW11bGF0aW9uVmlldyB7XG4gICAgY29uc3RydWN0b3Ioc2ltdWxhdGlvbiwgY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnNpbXVsYXRpb24gPSBzaW11bGF0aW9uO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnNpbXVsYXRpb24uc2ltdWxhdGlvbkludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaW11bGF0aW9uLnN0ZXAoKTtcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGlvbi5kcmF3KHRoaXMuY3R4KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbXVsYXRpb24ucG9wdWxhdGlvbkluZmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNpbXVsYXRpb24uc2ltdWxhdGlvbkludGVydmFsKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0b3AodGhpcy5zaW11bGF0aW9uKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyMCk7XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgc3RvcChzaW11bGF0aW9uKSB7XG4gICAgICAgIFxuICAgICAgICBjbGVhckludGVydmFsKHNpbXVsYXRpb24uc2ltdWxhdGlvbkludGVydmFsKTtcbiAgICB9XG5cbn0iLCJleHBvcnQgY29uc3QgVXRpbCA9IHtcbiAgIC8vIFJldHVybiBhIHJhbmRvbWx5IG9yaWVudGVkIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBsZW5ndGguXG4gICByYW5kb21WZWMobGVuZ3RoKSB7XG4gICAgICBjb25zdCBkZWcgPSAyICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCk7XG4gICAgICByZXR1cm4gVXRpbC5zY2FsZShbTWF0aC5zaW4oZGVnKSwgTWF0aC5jb3MoZGVnKV0sIGxlbmd0aCk7XG4gICB9LFxuICAgLy8gU2NhbGUgdGhlIGxlbmd0aCBvZiBhIHZlY3RvciBieSB0aGUgZ2l2ZW4gYW1vdW50LlxuICAgc2NhbGUodmVjLCBtKSB7XG4gICAgICByZXR1cm4gW3ZlY1swXSAqIG0sIHZlY1sxXSAqIG1dO1xuICAgfSxcblxuICAgZGlzdChwb3MxLCBwb3MyKSB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgICAgTWF0aC5wb3cocG9zMVswXSAtIHBvczJbMF0sIDIpICsgTWF0aC5wb3cocG9zMVsxXSAtIHBvczJbMV0sIDIpXG4gICAgICApXG4gICB9LFxuICAgXG4gICByYW5kb21JbnRSYW5nZShtaW4sIG1heCkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG4gICB9LFxuXG4gICByb3RhdGUodmVsb2NpdHksIGFuZ2xlKSB7XG4gICAgICBjb25zdCByb3RhdGVkVmVsb2NpdGllcyA9IHtcbiAgICAgICAgIHg6IHZlbG9jaXR5WzBdICogTWF0aC5jb3MoYW5nbGUpIC0gdmVsb2NpdHlbMV0gKiBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgICB5OiB2ZWxvY2l0eVswXSAqIE1hdGguc2luKGFuZ2xlKSArIHZlbG9jaXR5WzFdICogTWF0aC5jb3MoYW5nbGUpXG4gICAgICB9XG4gICAgICByZXR1cm4gcm90YXRlZFZlbG9jaXRpZXM7XG4gICB9LFxuXG4gICByZXNvbHZlQ29sbGlzaW9uKHBlcnMsIG90aGVyUGVycykge1xuXG4gICAgICBjb25zdCB4VmVsRGlmZiA9IHBlcnMudmVsWzBdIC0gb3RoZXJQZXJzLnZlbFswXTtcbiAgICAgIGNvbnN0IHlWZWxEaWZmID0gcGVycy52ZWxbMV0gLSBvdGhlclBlcnMudmVsWzFdO1xuXG5cbiAgICAgIGNvbnN0IHhEaXN0ID0gb3RoZXJQZXJzLnBvc1swXSAtIHBlcnMucG9zWzBdO1xuICAgICAgY29uc3QgeURpc3QgPSBvdGhlclBlcnMucG9zWzFdIC0gcGVycy5wb3NbMV07XG5cbiAgICAgIC8vIFByZXZlbnQgYWNjaWRlbnRhbCBvdmVybGFwIG9mIHBlcnNcbiAgICAgIGlmICh4VmVsRGlmZiAqIHhEaXN0ICsgeVZlbERpZmYgKiB5RGlzdCA+PSAwKSB7XG5cbiAgICAgICAgIHBlcnMudmVsID0gcGVycy5jaGFuZ2VEaXIocGVycy52ZWwpO1xuICAgICAgICAgb3RoZXJQZXJzLnZlbCA9IG90aGVyUGVycy5jaGFuZ2VEaXIob3RoZXJQZXJzLnZlbCk7XG4gICAgICAgICBcbiAgICAgIH1cbiAgIH1cbiAgIC8vIHJlc29sdmVDb2xsaXNpb24ocGVycywgb3RoZXJQZXJzKSB7XG4gICAvLyAgICBjb25zdCB4VmVsRGlmZiA9IHBlcnMudmVsWzBdIC0gb3RoZXJQZXJzLnZlbFswXTtcbiAgIC8vICAgIGNvbnN0IHlWZWxEaWZmID0gcGVycy52ZWxbMV0gLSBvdGhlclBlcnMudmVsWzFdO1xuXG5cbiAgIC8vICAgIGNvbnN0IHhEaXN0ID0gb3RoZXJQZXJzLnBvc1swXSAtIHBlcnMucG9zWzBdO1xuICAgLy8gICAgY29uc3QgeURpc3QgPSBvdGhlclBlcnMucG9zWzFdIC0gcGVycy5wb3NbMV07XG5cbiAgIC8vICAgIC8vIFByZXZlbnQgYWNjaWRlbnRhbCBvdmVybGFwIG9mIHBlcnNcbiAgIC8vICAgIGlmICh4VmVsRGlmZiAqIHhEaXN0ICsgeVZlbERpZmYgKiB5RGlzdCA+PSAwKSB7XG5cbiAgIC8vICAgICAgIC8vIEdyYWIgYW5nbGUgYmV0d2VlbiB0aGUgdHdvIGNvbGxpZGluZyBwZXJzXG4gICAvLyAgICAgICBjb25zdCBhbmdsZSA9IC1NYXRoLmF0YW4yKG90aGVyUGVycy5wb3NbMV0gLSBwZXJzLnBvc1sxXSwgb3RoZXJQZXJzLnBvc1swXSAtIHBlcnMucG9zWzBdKTtcblxuICAgLy8gICAgICAgLy8gU3RvcmUgbWFzcyBpbiB2YXIgZm9yIGJldHRlciByZWFkYWJpbGl0eSBpbiBjb2xsaXNpb24gZXF1YXRpb25cbiAgIC8vICAgICAgIGNvbnN0IG0xID0gcGVycy5tYXNzO1xuICAgLy8gICAgICAgY29uc3QgbTIgPSBvdGhlclBlcnMubWFzcztcblxuICAgLy8gICAgICAgLy8gdmVsIGJlZm9yZSBlcXVhdGlvblxuICAgLy8gICAgICAgY29uc3QgdTEgPSBVdGlsLnJvdGF0ZShwZXJzLnZlbCwgYW5nbGUpO1xuICAgLy8gICAgICAgY29uc3QgdTIgPSBVdGlsLnJvdGF0ZShvdGhlclBlcnMudmVsLCBhbmdsZSk7XG5cbiAgIC8vICAgICAgIC8vIHZlbCBhZnRlciAxZCBjb2xsaXNpb24gZXF1YXRpb25cbiAgIC8vICAgICAgIGNvbnN0IHYxID0gW3UxLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1Mi54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1MS55XTtcbiAgIC8vICAgICAgIGNvbnN0IHYyID0gW3UyLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1MS54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1Mi55XTtcblxuICAgLy8gICAgICAgLy8gRmluYWwgdmVsIGFmdGVyIHJvdGF0aW5nIGF4aXMgYmFjayB0byBvcmlnaW5hbCBsb2NhdGlvblxuICAgLy8gICAgICAgY29uc3QgdkZpbmFsMSA9IFV0aWwucm90YXRlKHYxLCAtYW5nbGUpO1xuICAgLy8gICAgICAgY29uc3QgdkZpbmFsMiA9IFV0aWwucm90YXRlKHYyLCAtYW5nbGUpO1xuXG4gICAvLyAgICAgICAvLyBTd2FwIHBlcnMgdmVsb2NpdGllcyBmb3IgcmVhbGlzdGljIGJvdW5jZSBlZmZlY3RcbiAgIC8vICAgICAgIHBlcnMudmVsWzBdID0gdkZpbmFsMS54O1xuICAgLy8gICAgICAgcGVycy52ZWxbMV0gPSB2RmluYWwxLnk7XG5cbiAgIC8vICAgICAgIG90aGVyUGVycy52ZWxbMF0gPSB2RmluYWwyLng7XG4gICAvLyAgICAgICBvdGhlclBlcnMudmVsWzFdID0gdkZpbmFsMi55O1xuICAgLy8gICAgfVxuICAgLy8gfVxuXG4gICAvLyByZXNvbHZlQ29sbGlzaW9uKHBlcnMsIG90aGVyUGVycykge1xuICAgLy8gICAgY29uc3QgeFZlbERpZmYgPSBwZXJzLnZlbFswXSAtIG90aGVyUGVycy52ZWxbMF07XG4gICAvLyAgICBjb25zdCB5VmVsRGlmZiA9IHBlcnMudmVsWzFdIC0gb3RoZXJQZXJzLnZlbFsxXTtcblxuICAgLy8gICAgY29uc3QgeERpc3QgPSBvdGhlclBlcnMucG9zWzBdIC0gcGVycy5wb3NbMF07XG4gICAvLyAgICBjb25zdCB5RGlzdCA9IG90aGVyUGVycy5wb3NbMV0gLSBwZXJzLnBvc1sxXTtcblxuICAgLy8gICAgLy8gUHJldmVudCBhY2NpZGVudGFsIG92ZXJsYXAgb2YgcGVyc1xuICAgLy8gICAgaWYgKHhWZWxEaWZmICogeERpc3QgKyB5VmVsRGlmZiAqIHlEaXN0ID49IDApIHtcblxuICAgLy8gICAgICAgLy8gR3JhYiBhbmdsZSBiZXR3ZWVuIHRoZSB0d28gY29sbGlkaW5nIHBlcnNcbiAgIC8vICAgICAgIGNvbnN0IGFuZ2xlID0gLU1hdGguYXRhbjIob3RoZXJQZXJzLnBvc1sxXSAtIHBlcnMucG9zWzFdLCBvdGhlclBlcnMucG9zWzBdIC0gcGVycy5wb3NbMF0pO1xuXG4gICAvLyAgICAgICAvLyBTdG9yZSBtYXNzIGluIHZhciBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5IGluIGNvbGxpc2lvbiBlcXVhdGlvblxuICAgLy8gICAgICAgY29uc3QgbTEgPSBwZXJzLm1hc3M7XG4gICAvLyAgICAgICBjb25zdCBtMiA9IG90aGVyUGVycy5tYXNzO1xuXG4gICAvLyAgICAgICBpZiAocGVycy5jb25zY2lvdXNDaXRpemVuID09PSB0cnVlKSB7XG4gICAvLyAgICAgICAgICAvLyB2ZWwgYmVmb3JlIGVxdWF0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB1MSA9IFV0aWwucm90YXRlKHBlcnMudmVsLCBhbmdsZSk7XG4gICAvLyAgICAgICAgICBjb25zdCB1MiA9IFV0aWwucm90YXRlKG90aGVyUGVycy52ZWwsIGFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gdmVsIGFmdGVyIDFkIGNvbGxpc2lvbiBlcXVhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdjEgPSBbdTEueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUyLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUxLnldO1xuICAgLy8gICAgICAgICAgY29uc3QgdjIgPSBbdTIueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUxLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUyLnldO1xuXG4gICAvLyAgICAgICAgICAvLyBGaW5hbCB2ZWwgYWZ0ZXIgcm90YXRpbmcgYXhpcyBiYWNrIHRvIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB2RmluYWwxID0gVXRpbC5yb3RhdGUodjEsIC1hbmdsZSk7XG4gICAvLyAgICAgICAgICBjb25zdCB2RmluYWwyID0gVXRpbC5yb3RhdGUodjIsIC1hbmdsZSk7XG5cbiAgIC8vICAgICAgICAgIC8vIFN3YXAgcGVycyB2ZWxvY2l0aWVzIGZvciByZWFsaXN0aWMgYm91bmNlIGVmZmVjdFxuICAgLy8gICAgICAgICAgLy8gcGVycy52ZWxbMF0gPSB2RmluYWwxLng7XG4gICAvLyAgICAgICAgICAvLyBwZXJzLnZlbFsxXSA9IHZGaW5hbDEueTtcbiAgIC8vICAgICAgICAgIC8vIHBlcnMudmVsWzBdID0gMDtcbiAgIC8vICAgICAgICAgIC8vIHBlcnMudmVsWzFdID0gMDtcblxuICAgLy8gICAgICAgICAgb3RoZXJQZXJzLnZlbFswXSA9IHZGaW5hbDIueDtcbiAgIC8vICAgICAgICAgIG90aGVyUGVycy52ZWxbMV0gPSB2RmluYWwyLnk7XG5cbiAgIC8vICAgICAgIH0gZWxzZSBpZiAob3RoZXJQZXJzLmNvbnNjaW91c0NpdGl6ZW4gPT09IHRydWUpe1xuICAgLy8gICAgICAgICAgLy8gdmVsIGJlZm9yZSBlcXVhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdTEgPSBVdGlsLnJvdGF0ZShwZXJzLnZlbCwgYW5nbGUpO1xuICAgLy8gICAgICAgICAgY29uc3QgdTIgPSBVdGlsLnJvdGF0ZShvdGhlclBlcnMudmVsLCBhbmdsZSk7XG5cbiAgIC8vICAgICAgICAgIC8vIHZlbCBhZnRlciAxZCBjb2xsaXNpb24gZXF1YXRpb25cbiAgXG4gICAvLyAgICAgICAgICBjb25zdCB2MSA9IFt1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTEueV07XG4gICAvLyAgICAgICAgICBjb25zdCB2MiA9IFt1Mi54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTEueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTIueV07XG5cbiAgIC8vICAgICAgICAgIC8vIEZpbmFsIHZlbCBhZnRlciByb3RhdGluZyBheGlzIGJhY2sgdG8gb3JpZ2luYWwgbG9jYXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDEgPSBVdGlsLnJvdGF0ZSh2MSwgLWFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDIgPSBVdGlsLnJvdGF0ZSh2MiwgLWFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gU3dhcCBwZXJzIHZlbG9jaXRpZXMgZm9yIHJlYWxpc3RpYyBib3VuY2UgZWZmZWN0XG4gICAvLyAgICAgICAgICBwZXJzLnZlbFswXSA9IHZGaW5hbDEueDtcbiAgIC8vICAgICAgICAgIHBlcnMudmVsWzFdID0gdkZpbmFsMS55O1xuXG4gICAvLyAgICAgICAgICAvLyBvdGhlclBlcnMudmVsWzBdID0gdkZpbmFsMi54O1xuICAgLy8gICAgICAgICAgLy8gb3RoZXJQZXJzLnZlbFsxXSA9IHZGaW5hbDIueTtcbiAgIC8vICAgICAgICAgIC8vIG90aGVyUGVycy52ZWxbMF0gPSAwO1xuICAgLy8gICAgICAgICAgLy8gb3RoZXJQZXJzLnZlbFsxXSA9IDA7XG4gICAvLyAgICAgICB9IGVsc2Uge1xuICAgLy8gICAgICAgICAgLy8gdmVsIGJlZm9yZSBlcXVhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdTEgPSBVdGlsLnJvdGF0ZShwZXJzLnZlbCwgYW5nbGUpO1xuICAgLy8gICAgICAgICAgY29uc3QgdTIgPSBVdGlsLnJvdGF0ZShvdGhlclBlcnMudmVsLCBhbmdsZSk7XG5cbiAgIC8vICAgICAgICAgIC8vIHZlbCBhZnRlciAxZCBjb2xsaXNpb24gZXF1YXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHYxID0gW3UxLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1Mi54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1MS55XTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHYyID0gW3UyLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1MS54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1Mi55XTtcblxuICAgLy8gICAgICAgICAgLy8gRmluYWwgdmVsIGFmdGVyIHJvdGF0aW5nIGF4aXMgYmFjayB0byBvcmlnaW5hbCBsb2NhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdkZpbmFsMSA9IFV0aWwucm90YXRlKHYxLCAtYW5nbGUpO1xuICAgLy8gICAgICAgICAgY29uc3QgdkZpbmFsMiA9IFV0aWwucm90YXRlKHYyLCAtYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyBTd2FwIHBlcnMgdmVsb2NpdGllcyBmb3IgcmVhbGlzdGljIGJvdW5jZSBlZmZlY3RcbiAgIC8vICAgICAgICAgIHBlcnMudmVsWzBdID0gdkZpbmFsMS54O1xuICAgLy8gICAgICAgICAgcGVycy52ZWxbMV0gPSB2RmluYWwxLnk7XG5cbiAgIC8vICAgICAgICAgIG90aGVyUGVycy52ZWxbMF0gPSB2RmluYWwyLng7XG4gICAvLyAgICAgICAgICBvdGhlclBlcnMudmVsWzFdID0gdkZpbmFsMi55O1xuICAgLy8gICAgICAgfVxuICAgLy8gICAgfVxuICAgLy8gfVxufSJdLCJzb3VyY2VSb290IjoiIn0=