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
    this.columnWidth = _column__WEBPACK_IMPORTED_MODULE_0__["GRAPH_DEFAULTS"].WIDTH;
    this.XParameter = _column__WEBPACK_IMPORTED_MODULE_0__["GRAPH_DEFAULTS"].WIDTH / 2;
    this.ctx = ctx;
    this.columns = [];
    this.graphInterval = null;
    this.simulation = simulation;
    this.timeUnits = 0;
    this.populationInfected = this.simulation.populationInfected;
    this.draw(ctx);
  }

  _createClass(Graph, [{
    key: "addColumn",
    value: function addColumn() {
      var newColumn = new _column__WEBPACK_IMPORTED_MODULE_0__["Column"]([this.XParameter, this.DIM_Y], this.columnWidth, -(this.DIM_Y / this.simulation.density * this.simulation.infectionNumber));
      this.columns.push(newColumn);
      this.XParameter += this.columnWidth;

      if (this.XParameter >= this.DIM_X) {
        this.resize();
      }
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
    key: "clear",
    value: function clear(ctx) {
      ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    }
  }, {
    key: "resize",
    value: function resize() {
      var _this = this;

      this.columnWidth /= 2;
      this.XParameter = this.columnWidth / 2;
      this.columns.forEach(function (column) {
        column.pos[0] = _this.XParameter;
        column.width = _this.columnWidth;
        _this.XParameter += _this.columnWidth;
      });
      this.draw(this.ctx);
    }
  }, {
    key: "updateInfectionRate",
    value: function updateInfectionRate() {
      var infectionRate = document.getElementById('infection-rate');
      infectionRate.innerHTML = Math.floor(this.simulation.infectionNumber / this.simulation.density * 100);
      var infectionTime = document.getElementById('infection-time');
      infectionTime.innerHTML = this.timeUnits / 100;
    }
  }, {
    key: "step",
    value: function step() {
      this.addColumn();
      this.updateInfectionRate();
      this.timeUnits += 1;
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
  window.GraphView = _graph_view__WEBPACK_IMPORTED_MODULE_3__["default"]; // let infectedNumber = document.getElementById("infected-number");

  var density = document.getElementById('my-density-range');
  var outputDensity = document.getElementById('density-value');
  outputDensity.innerHTML = density.value;

  density.oninput = function () {
    outputDensity.innerHTML = this.value;
    var s1 = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"](this.value, socialDist.value / 100, ctx1);
  };

  var socialDist = document.getElementById('my-social-range');
  var outputSocialDist = document.getElementById('social-value');
  outputSocialDist.innerHTML = socialDist.value;

  socialDist.oninput = function () {
    outputSocialDist.innerHTML = this.value;
    var s1 = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"](density.value, this.value / 100, ctx1);
    return s1;
  };

  var currentSimulation = null;
  var currentSimulationView = null;
  var currentGraph = null;
  var currentGraphView = null;
  var startSimulation = document.getElementById('start');

  startSimulation.onclick = function () {
    if (!currentSimulation) {
      currentSimulation = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"](density.value, socialDist.value / 100, ctx1);
      currentSimulationView = new _simulation_view__WEBPACK_IMPORTED_MODULE_1__["default"](currentSimulation, ctx1);
      currentGraph = new _graph__WEBPACK_IMPORTED_MODULE_2__["default"](currentSimulation, ctx2);
      currentGraphView = new _graph_view__WEBPACK_IMPORTED_MODULE_3__["default"](currentGraph, currentSimulation, ctx2);
      currentSimulationView.start();
      currentGraphView.start();
    } else {
      return null;
    }
  };

  var stopSimulation = document.getElementById('stop');

  stopSimulation.onclick = function () {
    if (currentSimulation) {
      currentSimulationView.stop(currentSimulation);
      currentGraphView.stop(currentGraph);
      currentSimulation = null;
      currentGraph = null;
    } else {
      return null;
    }
  };

  var s1 = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"](density.value, socialDist.value / 100, ctx1);
  var clearSimulation = document.getElementById('clear');

  clearSimulation.onclick = function () {
    if (!currentSimulation || currentSimulation.populationInfected) {
      var s2 = new _simulation__WEBPACK_IMPORTED_MODULE_0__["default"](density.value, socialDist.value / 100, ctx1);
      var g2 = new _graph__WEBPACK_IMPORTED_MODULE_2__["default"](s2, ctx2);
    } else {
      return null;
    }
  };
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
    key: "clear",
    value: function clear(ctx) {
      ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
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
  }
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoX3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb3Zpbmdfb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb25fdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJHUkFQSF9ERUZBVUxUUyIsIldJRFRIIiwiQ09MT1IiLCJDb2x1bW4iLCJwb3MiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJHcmFwaCIsInNpbXVsYXRpb24iLCJESU1fWCIsIkRJTV9ZIiwiY29sdW1uV2lkdGgiLCJYUGFyYW1ldGVyIiwiY29sdW1ucyIsImdyYXBoSW50ZXJ2YWwiLCJ0aW1lVW5pdHMiLCJwb3B1bGF0aW9uSW5mZWN0ZWQiLCJkcmF3IiwibmV3Q29sdW1uIiwiZGVuc2l0eSIsImluZmVjdGlvbk51bWJlciIsInB1c2giLCJyZXNpemUiLCJjbGVhclJlY3QiLCJmb3JFYWNoIiwiY29sdW1uIiwiaW5mZWN0aW9uUmF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJNYXRoIiwiZmxvb3IiLCJpbmZlY3Rpb25UaW1lIiwiYWRkQ29sdW1uIiwidXBkYXRlSW5mZWN0aW9uUmF0ZSIsIkdyYXBoVmlldyIsImdyYXBoIiwic2V0SW50ZXJ2YWwiLCJzdGVwIiwiY2xlYXJJbnRlcnZhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbDEiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNhbnZhc0VsMiIsIlNpbXVsYXRpb24iLCJjdHgxIiwiZ2V0Q29udGV4dCIsImN0eDIiLCJ3aW5kb3ciLCJTaW11bGF0aW9uVmlldyIsIm91dHB1dERlbnNpdHkiLCJ2YWx1ZSIsIm9uaW5wdXQiLCJzMSIsInNvY2lhbERpc3QiLCJvdXRwdXRTb2NpYWxEaXN0IiwiY3VycmVudFNpbXVsYXRpb24iLCJjdXJyZW50U2ltdWxhdGlvblZpZXciLCJjdXJyZW50R3JhcGgiLCJjdXJyZW50R3JhcGhWaWV3Iiwic3RhcnRTaW11bGF0aW9uIiwib25jbGljayIsInN0YXJ0Iiwic3RvcFNpbXVsYXRpb24iLCJzdG9wIiwiY2xlYXJTaW11bGF0aW9uIiwiczIiLCJnMiIsIk1vdmluZ09iamVjdCIsInBhcmFtZXRlcnMiLCJ2ZWwiLCJyYWRpdXMiLCJtYXNzIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsIiwiYm91bmNlIiwiYWJzIiwib3RoZXJPYmplY3QiLCJjZW50ZXJEaXN0IiwiVXRpbCIsImRpc3QiLCJyZW1vdmUiLCJERUZBVUxUUyIsIlJBRElVUyIsIlNQRUVEIiwiTUFTUyIsIlBlcnNvbiIsInJhbmRvbVBvc2l0aW9uIiwicmFuZG9tVmVjIiwiY29uc2Npb3VzQ3RpemVuIiwiaW5mZWN0ZWQiLCJzb2NpYWxEaXN0YW5jaW5nUmF0ZSIsIk5VTV9QRVJTT05TIiwicGVyc29ucyIsInNpbXVsYXRpb25JbnRlcnZhbCIsImFkZFBlcnNvbnMiLCJhZGRQYXRpZW50WmVybyIsImFkZENvbnNjaW91c0NpdGl6ZW4iLCJpIiwiaiIsImxlbmd0aCIsImNvbnNjaW91c0NpdGl6ZW4iLCJyYWQiLCJ4IiwicmFuZG9tSW50UmFuZ2UiLCJ5IiwicGVyc29uIiwibW92ZSIsIm9iamVjdCIsInNwbGljZSIsImluZGV4T2YiLCJwZXJzMSIsInBlcnMyIiwiaXNDb2xsaWRlZFdpdGgiLCJyZXNvbHZlQ29sbGlzaW9uIiwibW92ZU9iamVjdHMiLCJjaGVja0NvbGxpc2lvbnMiLCJoYW5kbGVJbmZlY3Rpb24iLCJkZWciLCJyYW5kb20iLCJzY2FsZSIsInNpbiIsImNvcyIsInZlYyIsIm0iLCJwb3MxIiwicG9zMiIsInNxcnQiLCJwb3ciLCJtaW4iLCJtYXgiLCJyb3RhdGUiLCJ2ZWxvY2l0eSIsImFuZ2xlIiwicm90YXRlZFZlbG9jaXRpZXMiLCJwZXJzIiwib3RoZXJQZXJzIiwieFZlbERpZmYiLCJ5VmVsRGlmZiIsInhEaXN0IiwieURpc3QiLCJjaGFuZ2VEaXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRk8sSUFBTUEsY0FBYyxHQUFHO0FBQzFCQyxPQUFLLEVBQUUsQ0FEbUI7QUFFMUJDLE9BQUssRUFBRTtBQUZtQixDQUF2QjtBQU1BLElBQU1DLE1BQWI7QUFDSSxrQkFBWUMsR0FBWixFQUFpQkMsS0FBakIsRUFBd0JDLE1BQXhCLEVBQWdDO0FBQUE7O0FBQzVCLFNBQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEs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RUE2Qk1DLFNBN0JOLEVBNkJpQjtBQUUvQixRQUFNQyxRQUFRLEdBQUdGLElBQUksQ0FBQ25FLEdBQUwsQ0FBUyxDQUFULElBQWNvRSxTQUFTLENBQUNwRSxHQUFWLENBQWMsQ0FBZCxDQUEvQjtBQUNBLFFBQU1zRSxRQUFRLEdBQUdILElBQUksQ0FBQ25FLEdBQUwsQ0FBUyxDQUFULElBQWNvRSxTQUFTLENBQUNwRSxHQUFWLENBQWMsQ0FBZCxDQUEvQjtBQUdBLFFBQU11RSxLQUFLLEdBQUdILFNBQVMsQ0FBQzFJLEdBQVYsQ0FBYyxDQUFkLElBQW1CeUksSUFBSSxDQUFDekksR0FBTCxDQUFTLENBQVQsQ0FBakM7QUFDQSxRQUFNOEksS0FBSyxHQUFHSixTQUFTLENBQUMxSSxHQUFWLENBQWMsQ0FBZCxJQUFtQnlJLElBQUksQ0FBQ3pJLEdBQUwsQ0FBUyxDQUFULENBQWpDLENBUCtCLENBUy9COztBQUNBLFFBQUkySSxRQUFRLEdBQUdFLEtBQVgsR0FBbUJELFFBQVEsR0FBR0UsS0FBOUIsSUFBdUMsQ0FBM0MsRUFBOEM7QUFFM0NMLFVBQUksQ0FBQ25FLEdBQUwsR0FBV21FLElBQUksQ0FBQ00sU0FBTCxDQUFlTixJQUFJLENBQUNuRSxHQUFwQixDQUFYO0FBQ0FvRSxlQUFTLENBQUNwRSxHQUFWLEdBQWdCb0UsU0FBUyxDQUFDSyxTQUFWLENBQW9CTCxTQUFTLENBQUNwRSxHQUE5QixDQUFoQjtBQUVGO0FBQ0g7QUE3Q2dCLENBQWIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuXG5leHBvcnQgY29uc3QgR1JBUEhfREVGQVVMVFMgPSB7XG4gICAgV0lEVEg6IDEsXG4gICAgQ09MT1I6ICdyZWQnXG5cbn1cblxuZXhwb3J0IGNsYXNzIENvbHVtbiB7XG4gICAgY29uc3RydWN0b3IocG9zLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMucG9zID0gcG9zO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmNvbG9yID0gR1JBUEhfREVGQVVMVFMuQ09MT1JcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gR1JBUEhfREVGQVVMVFMuQ09MT1I7XG4gICAgICAgIGN0eC5maWxsUmVjdChcbiAgICAgICAgICAgIHRoaXMucG9zWzBdLFxuICAgICAgICAgICAgdGhpcy5wb3NbMV0sXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdGhpcy5oZWlnaHRcbiAgICAgICAgKVxuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgQ29sdW1uLCBHUkFQSF9ERUZBVUxUU30gZnJvbSAnLi9jb2x1bW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCB7XG4gICAgY29uc3RydWN0b3Ioc2ltdWxhdGlvbiwgY3R4KSB7XG4gICAgICAgIHRoaXMuRElNX1ggPSA2MDA7XG4gICAgICAgIHRoaXMuRElNX1kgPSAyMDA7XG4gICAgICAgIHRoaXMuY29sdW1uV2lkdGggPSBHUkFQSF9ERUZBVUxUUy5XSURUSFxuICAgICAgICB0aGlzLlhQYXJhbWV0ZXIgPSBHUkFQSF9ERUZBVUxUUy5XSURUSCAvIDI7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXTtcbiAgICAgICAgdGhpcy5ncmFwaEludGVydmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uID0gc2ltdWxhdGlvbjtcbiAgICAgICAgdGhpcy50aW1lVW5pdHMgPSAwO1xuICAgICAgICB0aGlzLnBvcHVsYXRpb25JbmZlY3RlZCA9IHRoaXMuc2ltdWxhdGlvbi5wb3B1bGF0aW9uSW5mZWN0ZWRcbiAgICAgICAgdGhpcy5kcmF3KGN0eCk7XG5cbiAgICB9XG5cbiAgICBhZGRDb2x1bW4oKSB7XG4gICAgICAgIGxldCBuZXdDb2x1bW4gPSBuZXcgQ29sdW1uKFxuICAgICAgICAgICAgW3RoaXMuWFBhcmFtZXRlciwgdGhpcy5ESU1fWV0sXG4gICAgICAgICAgICB0aGlzLmNvbHVtbldpZHRoLFxuICAgICAgICAgICAgLSgodGhpcy5ESU1fWSAvIHRoaXMuc2ltdWxhdGlvbi5kZW5zaXR5KSAqIHRoaXMuc2ltdWxhdGlvbi5pbmZlY3Rpb25OdW1iZXIpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKG5ld0NvbHVtbik7XG4gICAgICAgICAgICB0aGlzLlhQYXJhbWV0ZXIgKz0gdGhpcy5jb2x1bW5XaWR0aDtcbiAgICAgICAgICAgIGlmICh0aGlzLlhQYXJhbWV0ZXIgPj0gdGhpcy5ESU1fWCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplKClcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLkRJTV9YLCB0aGlzLkRJTV9ZKTtcbiAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4gY29sdW1uLmRyYXcoY3R4KSk7XG4gICAgfVxuXG4gICAgY2xlYXIoY3R4KSB7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5ESU1fWCwgdGhpcy5ESU1fWSk7XG4gICAgfVxuXG4gICAgcmVzaXplKCkge1xuICAgICAgICB0aGlzLmNvbHVtbldpZHRoIC89IDI7XG4gICAgICAgIHRoaXMuWFBhcmFtZXRlciA9IHRoaXMuY29sdW1uV2lkdGggLyAyXG4gICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKCBjb2x1bW4gPT4ge1xuICAgICAgICAgICAgY29sdW1uLnBvc1swXSA9IHRoaXMuWFBhcmFtZXRlcjtcbiAgICAgICAgICAgIGNvbHVtbi53aWR0aCA9IHRoaXMuY29sdW1uV2lkdGg7XG4gICAgICAgICAgICB0aGlzLlhQYXJhbWV0ZXIgKz0gdGhpcy5jb2x1bW5XaWR0aDtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmRyYXcodGhpcy5jdHgpXG4gICAgfVxuXG4gICAgdXBkYXRlSW5mZWN0aW9uUmF0ZSgpIHtcbiAgICAgICAgbGV0IGluZmVjdGlvblJhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mZWN0aW9uLXJhdGUnKTtcbiAgICAgICAgaW5mZWN0aW9uUmF0ZS5pbm5lckhUTUwgPSBNYXRoLmZsb29yKHRoaXMuc2ltdWxhdGlvbi5pbmZlY3Rpb25OdW1iZXIgLyB0aGlzLnNpbXVsYXRpb24uZGVuc2l0eSAqIDEwMClcbiAgICAgICAgbGV0IGluZmVjdGlvblRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mZWN0aW9uLXRpbWUnKTtcbiAgICAgICAgaW5mZWN0aW9uVGltZS5pbm5lckhUTUwgPSB0aGlzLnRpbWVVbml0cyAvIDEwMFxuICAgIH1cblxuICAgIHN0ZXAoKSB7XG4gICAgICAgIHRoaXMuYWRkQ29sdW1uKCk7XG4gICAgICAgIHRoaXMudXBkYXRlSW5mZWN0aW9uUmF0ZSgpO1xuICAgICAgICB0aGlzLnRpbWVVbml0cyArPSAxO1xuICAgIH1cblxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaFZpZXcge1xuICAgIGNvbnN0cnVjdG9yIChncmFwaCwgc2ltdWxhdGlvbiwgY3R4KSB7XG4gICAgICAgIHRoaXMuZ3JhcGggPSBncmFwaDtcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uID0gc2ltdWxhdGlvbjtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7IFxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmdyYXBoLmdyYXBoSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdyYXBoLnN0ZXAoKTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGguZHJhdyh0aGlzLmN0eCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zaW11bGF0aW9uLnBvcHVsYXRpb25JbmZlY3RlZCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5ncmFwaC5ncmFwaEludGVydmFsKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0b3AodGhpcy5ncmFwaClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNDApO1xuXG4gICAgfVxuXG4gICAgc3RvcChncmFwaCkge1xuXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZ3JhcGguZ3JhcGhJbnRlcnZhbCk7XG4gICAgfVxuXG5cbn1cblxuXG4iLCJpbXBvcnQgU2ltdWxhdGlvbiBmcm9tICcuL3NpbXVsYXRpb24nO1xuaW1wb3J0IFNpbXVsYXRpb25WaWV3IGZyb20gJy4vc2ltdWxhdGlvbl92aWV3JztcbmltcG9ydCBHcmFwaCBmcm9tICcuL2dyYXBoJztcbmltcG9ydCBHcmFwaFZpZXcgZnJvbSAnLi9ncmFwaF92aWV3JztcbmltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCB7UGVyc29ufSBmcm9tICcuL3BlcnNvbic7XG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzRWwxID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gICAgY29uc3QgY2FudmFzRWwyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMV07XG5cbiAgICBjYW52YXNFbDEud2lkdGggPSBTaW11bGF0aW9uLkRJTV9YO1xuICAgIGNhbnZhc0VsMS5oZWlnaHQgPSBTaW11bGF0aW9uLkRJTV9ZO1xuICAgIGNvbnN0IGN0eDEgPSBjYW52YXNFbDEuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgY2FudmFzRWwyLndpZHRoID0gU2ltdWxhdGlvbi5ESU1fWDtcbiAgICBjYW52YXNFbDIuaGVpZ2h0ID0gU2ltdWxhdGlvbi5ESU1fWSAvIDI7XG4gICAgY29uc3QgY3R4MiA9IGNhbnZhc0VsMi5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBcblxuICAgIHdpbmRvdy5TaW11bGF0aW9uID0gU2ltdWxhdGlvbjtcbiAgICB3aW5kb3cuU2ltdWxhdGlvblZpZXcgPSBTaW11bGF0aW9uVmlldztcbiAgICB3aW5kb3cuR3JhcGggPSBHcmFwaDtcbiAgICB3aW5kb3cuR3JhcGhWaWV3ID0gR3JhcGhWaWV3O1xuXG4gICAgXG4gICAgLy8gbGV0IGluZmVjdGVkTnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZlY3RlZC1udW1iZXJcIik7XG5cblxuICAgIGxldCBkZW5zaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWRlbnNpdHktcmFuZ2UnKTtcbiAgICBsZXQgb3V0cHV0RGVuc2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZW5zaXR5LXZhbHVlJyk7XG5cbiAgICBvdXRwdXREZW5zaXR5LmlubmVySFRNTCA9IGRlbnNpdHkudmFsdWU7XG5cbiAgICBkZW5zaXR5Lm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFxuICAgICAgICBvdXRwdXREZW5zaXR5LmlubmVySFRNTCA9IHRoaXMudmFsdWU7XG4gICAgICAgIGxldCBzMSA9IG5ldyBTaW11bGF0aW9uKHRoaXMudmFsdWUsIHNvY2lhbERpc3QudmFsdWUgLyAxMDAsIGN0eDEpO1xuICAgIH1cblxuICAgIGxldCBzb2NpYWxEaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LXNvY2lhbC1yYW5nZScpO1xuICAgIGxldCBvdXRwdXRTb2NpYWxEaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvY2lhbC12YWx1ZScpO1xuXG4gICAgb3V0cHV0U29jaWFsRGlzdC5pbm5lckhUTUwgPSBzb2NpYWxEaXN0LnZhbHVlO1xuXG4gICAgc29jaWFsRGlzdC5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBvdXRwdXRTb2NpYWxEaXN0LmlubmVySFRNTCA9IHRoaXMudmFsdWU7XG4gICAgICAgIGxldCBzMSA9IG5ldyBTaW11bGF0aW9uKGRlbnNpdHkudmFsdWUsIHRoaXMudmFsdWUgLyAxMDAsIGN0eDEpO1xuICAgICAgICByZXR1cm4gczE7XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnRTaW11bGF0aW9uID0gbnVsbDtcbiAgICBsZXQgY3VycmVudFNpbXVsYXRpb25WaWV3ID0gbnVsbDtcbiAgICBsZXQgY3VycmVudEdyYXBoID0gbnVsbDtcbiAgICBsZXQgY3VycmVudEdyYXBoVmlldyA9IG51bGw7XG5cbiAgICBcbiAgICBsZXQgc3RhcnRTaW11bGF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Jyk7XG4gICAgc3RhcnRTaW11bGF0aW9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghY3VycmVudFNpbXVsYXRpb24pIHtcbiAgICAgICAgICAgIGN1cnJlbnRTaW11bGF0aW9uID0gbmV3IFNpbXVsYXRpb24oZGVuc2l0eS52YWx1ZSwgc29jaWFsRGlzdC52YWx1ZSAvIDEwMCwgY3R4MSk7XG4gICAgICAgICAgICBjdXJyZW50U2ltdWxhdGlvblZpZXcgPSBuZXcgU2ltdWxhdGlvblZpZXcoY3VycmVudFNpbXVsYXRpb24sIGN0eDEpO1xuICAgICAgICAgICAgY3VycmVudEdyYXBoID0gbmV3IEdyYXBoKGN1cnJlbnRTaW11bGF0aW9uLCBjdHgyKTtcbiAgICAgICAgICAgIGN1cnJlbnRHcmFwaFZpZXcgPSBuZXcgR3JhcGhWaWV3KGN1cnJlbnRHcmFwaCwgY3VycmVudFNpbXVsYXRpb24sIGN0eDIpO1xuICAgICAgICAgICAgY3VycmVudFNpbXVsYXRpb25WaWV3LnN0YXJ0KCk7XG4gICAgICAgICAgICBjdXJyZW50R3JhcGhWaWV3LnN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuICAgIFxuICAgIGxldCBzdG9wU2ltdWxhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9wJyk7XG4gICAgc3RvcFNpbXVsYXRpb24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRTaW11bGF0aW9uKSB7XG4gICAgICAgICAgICBjdXJyZW50U2ltdWxhdGlvblZpZXcuc3RvcChjdXJyZW50U2ltdWxhdGlvbik7XG4gICAgICAgICAgICBjdXJyZW50R3JhcGhWaWV3LnN0b3AoY3VycmVudEdyYXBoKVxuICAgICAgICAgICAgY3VycmVudFNpbXVsYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgY3VycmVudEdyYXBoID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGxldCBzMSA9IG5ldyBTaW11bGF0aW9uKGRlbnNpdHkudmFsdWUsIHNvY2lhbERpc3QudmFsdWUgLyAxMDAsIGN0eDEpO1xuICAgIFxuICAgIFxuICAgIGxldCBjbGVhclNpbXVsYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXInKTtcbiAgICBjbGVhclNpbXVsYXRpb24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFjdXJyZW50U2ltdWxhdGlvbiB8fCBjdXJyZW50U2ltdWxhdGlvbi5wb3B1bGF0aW9uSW5mZWN0ZWQpIHtcbiAgICAgICAgICAgIGxldCBzMiA9IG5ldyBTaW11bGF0aW9uKGRlbnNpdHkudmFsdWUsIHNvY2lhbERpc3QudmFsdWUgLyAxMDAsIGN0eDEpO1xuICAgICAgICAgICAgbGV0IGcyID0gbmV3IEdyYXBoIChzMiwgY3R4MilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufSk7IiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgU2ltdWxhdGlvbiBmcm9tICcuL3NpbXVsYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnBvcyAgPSBwYXJhbWV0ZXJzLnBvcztcbiAgICB0aGlzLnZlbCAgPSBwYXJhbWV0ZXJzLnZlbDtcbiAgICB0aGlzLnJhZGl1cyAgPSBwYXJhbWV0ZXJzLnJhZGl1cztcbiAgICB0aGlzLmNvbG9yICA9IHBhcmFtZXRlcnMuY29sb3I7XG4gICAgdGhpcy5tYXNzID0gcGFyYW1ldGVycy5tYXNzO1xuICAgIHRoaXMuc2ltdWxhdGlvbiA9IHBhcmFtZXRlcnMuc2ltdWxhdGlvbjtcbiAgICB9XG5cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICB0aGlzLnBvc1swXSxcbiAgICAgICAgICAgIHRoaXMucG9zWzFdLFxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBbKHRoaXMucG9zWzBdICsgdGhpcy52ZWxbMF0pLCAodGhpcy5wb3NbMV0gKyB0aGlzLnZlbFsxXSldXG4gICAgICAgIHRoaXMudmVsID0gdGhpcy5zaW11bGF0aW9uLmJvdW5jZSh0aGlzLnBvcywgdGhpcy52ZWwpO1xuICAgIH07XG5cbiAgICBjaGFuZ2VEaXIodmVsKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoTWF0aC5hYnModmVsWzBdKSA+IE1hdGguYWJzKHZlbFsxXSkpIHtcbiAgICAgICAgICAgIHZlbFswXSA9IC0gdmVsWzBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2ZWxbMV0gPSAtIHZlbFsxXVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdmVsO1xuICAgIH1cbiAgICBcbiAgICBpc0NvbGxpZGVkV2l0aChvdGhlck9iamVjdCkge1xuICAgICAgICBjb25zdCBjZW50ZXJEaXN0ID0gVXRpbC5kaXN0KHRoaXMucG9zLCBvdGhlck9iamVjdC5wb3MpO1xuICAgICAgICBpZiAoY2VudGVyRGlzdCA8ICh0aGlzLnJhZGl1cyArIG90aGVyT2JqZWN0LnJhZGl1cykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICB0aGlzLnNpbXVsYXRpb24ucmVtb3ZlKHRoaXMpO1xuICAgIH1cblxuIH1cblxuXG4iLCJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL21vdmluZ19vYmplY3RcIjtcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVFMgPSB7XG4gICAgUkFESVVTOiAyLFxuICAgIENPTE9SOiBcImxpZ2h0Z3JheVwiLFxuICAgIFNQRUVEOiAyLFxuICAgIE1BU1M6IDFcbn1cblxuZXhwb3J0IGNsYXNzIFBlcnNvbiBleHRlbmRzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVycyA9IHt9KSB7XG4gICAgICAgIHBhcmFtZXRlcnMuY29sb3IgPSBERUZBVUxUUy5DT0xPUjtcbiAgICAgICAgcGFyYW1ldGVycy5yYWRpdXMgPSBERUZBVUxUUy5SQURJVVM7XG4gICAgICAgIHBhcmFtZXRlcnMubWFzcyA9IERFRkFVTFRTLk1BU1M7XG4gICAgICAgIHBhcmFtZXRlcnMucG9zID0gcGFyYW1ldGVycy5wb3MgfHwgcGFyYW1ldGVycy5zaW11bGF0aW9uLnJhbmRvbVBvc2l0aW9uKCk7XG4gICAgICAgIHBhcmFtZXRlcnMudmVsID0gcGFyYW1ldGVycy52ZWwgfHwgVXRpbC5yYW5kb21WZWMoREVGQVVMVFMuU1BFRUQpO1xuICAgICAgICBwYXJhbWV0ZXJzLmNvbnNjaW91c0N0aXplbiA9IGZhbHNlO1xuICAgICAgICBwYXJhbWV0ZXJzLmluZmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHN1cGVyKHBhcmFtZXRlcnMpO1xuICAgIH1cblxufSIsImltcG9ydCB7UGVyc29uLCBERUZBVUxUU30gZnJvbSAnLi9wZXJzb24nO1xuaW1wb3J0IHtVdGlsfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFNpbXVsYXRpb25WaWV3IGZyb20gJy4vc2ltdWxhdGlvbl92aWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvbiB7XG4gICAgY29uc3RydWN0b3IoZGVuc2l0eSwgc29jaWFsRGlzdGFuY2luZ1JhdGUsIGN0eCkge1xuICAgICAgICB0aGlzLkRJTV9YID0gNjAwO1xuICAgICAgICB0aGlzLkRJTV9ZID0gNDAwO1xuICAgICAgICB0aGlzLk5VTV9QRVJTT05TID0gMTAwO1xuICAgICAgICB0aGlzLmRlbnNpdHkgPSBkZW5zaXR5O1xuICAgICAgICB0aGlzLnNvY2lhbERpc3RhbmNpbmdSYXRlID0gc29jaWFsRGlzdGFuY2luZ1JhdGU7XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbkluZmVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGVyc29ucyA9IFtdO1xuICAgICAgICB0aGlzLnNpbXVsYXRpb25JbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5mZWN0aW9uTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5hZGRQZXJzb25zKCk7XG4gICAgICAgIHRoaXMuYWRkUGF0aWVudFplcm8oKTtcbiAgICAgICAgdGhpcy5hZGRDb25zY2lvdXNDaXRpemVuKCk7XG4gICAgICAgIHRoaXMuZHJhdyhjdHgpO1xuICAgIH1cblxuXG5cbiAgICBhZGRQZXJzb25zKCkge1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0aGlzLmRlbnNpdHk7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wZXJzb25zLnB1c2gobmV3IFBlcnNvbih7XG4gICAgICAgICAgICAgICAgcG9zOiB0aGlzLnJhbmRvbVBvc2l0aW9uKCksIFxuICAgICAgICAgICAgICAgIHZlbDogVXRpbC5yYW5kb21WZWMoREVGQVVMVFMuU1BFRUQpLCBcbiAgICAgICAgICAgICAgICBzaW11bGF0aW9uOiB0aGlzfSkpO1xuXG4gICAgICAgICAgICBpZiAoaSE9PTApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucGVyc29ucy5sZW5ndGgtMTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoVXRpbC5kaXN0KHRoaXMucGVyc29uc1tpXS5wb3MsIHRoaXMucGVyc29uc1tqXS5wb3MpIC0gREVGQVVMVFMuUkFESVVTICogMikgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0ucG9zID0gdGhpcy5yYW5kb21Qb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaj0tMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZFBhdGllbnRaZXJvKCkge1xuICAgICAgICB0aGlzLnBlcnNvbnNbMF0uY29sb3IgPSAncmVkJztcbiAgICAgICAgdGhpcy5wZXJzb25zWzBdLmluZmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbmZlY3Rpb25OdW1iZXIgPSsgMTtcbiAgICB9XG5cbiAgICBhZGRDb25zY2lvdXNDaXRpemVuKCkge1xuICAgICAgICBmb3IgKGxldCBpPTE7IGk8dGhpcy5wZXJzb25zLmxlbmd0aCAqIHRoaXMuc29jaWFsRGlzdGFuY2luZ1JhdGUrMTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0uY29uc2Npb3VzQ2l0aXplbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0udmVsID0gWzAsMF07XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnNbaV0uY29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBcbiAgICByYW5kb21Qb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgcmFkID0gREVGQVVMVFMuUkFESVVTO1xuICAgICAgICBsZXQgeCA9IFV0aWwucmFuZG9tSW50UmFuZ2UocmFkLCB0aGlzLkRJTV9YIC0gcmFkKTtcbiAgICAgICAgbGV0IHkgPSBVdGlsLnJhbmRvbUludFJhbmdlKHJhZCwgdGhpcy5ESU1fWSAtIHJhZCk7XG4gICAgICAgIHJldHVybiBbeCx5XTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuRElNX1gsIHRoaXMuRElNX1kpO1xuICAgICAgICB0aGlzLnBlcnNvbnMuZm9yRWFjaCggcGVyc29uID0+IHBlcnNvbi5kcmF3KGN0eCkpO1xuICAgIH1cblxuICAgIGNsZWFyKGN0eCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuRElNX1gsIHRoaXMuRElNX1kpO1xuICAgIH1cblxuICAgIG1vdmVPYmplY3RzKCkge1xuICAgICAgICB0aGlzLnBlcnNvbnMuZm9yRWFjaCgocGVyc29uKSA9PiB7XG4gICAgICAgICAgICBwZXJzb24ubW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVPYmplY3Qob2JqZWN0KSB7XG4gICAgICAgIHRoaXMucGVyc29ucy5zcGxpY2UodGhpcy5wZXJzb25zLmluZGV4T2Yob2JqZWN0KSwgMSlcbiAgICB9XG4gICAgXG5cbiAgICBjaGVja0NvbGxpc2lvbnMoKSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0aGlzLnBlcnNvbnMubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaj1pKzE7IGo8dGhpcy5wZXJzb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBlcnMxID0gdGhpcy5wZXJzb25zW2ldO1xuICAgICAgICAgICAgICAgIGxldCBwZXJzMiA9IHRoaXMucGVyc29uc1tqXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAocGVyczEuaXNDb2xsaWRlZFdpdGgocGVyczIpKSB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWwucmVzb2x2ZUNvbGxpc2lvbihwZXJzMSwgcGVyczIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBlcnMxLmNvbG9yID09PSAncmVkJyAmJiBwZXJzMi5jb2xvciAhPT0gJ3JlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnMyLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzMi5pbmZlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluZmVjdGlvbk51bWJlciArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwZXJzMi5jb2xvciA9PT0gJ3JlZCcgJiYgcGVyczEuY29sb3IgIT09ICdyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyczEuY29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzMS5pbmZlY3RlZCA9ICd0cnVlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluZmVjdGlvbk51bWJlciArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBib3VuY2UocG9zLCB2ZWwpIHtcbiAgICAgICAgbGV0IHJhZCA9IERFRkFVTFRTLlJBRElVU1xuICAgICAgICBpZiAocG9zWzBdLXJhZCA8IDAgfHwgcG9zWzBdK3JhZCA+IHRoaXMuRElNX1gpIHtcbiAgICAgICAgICAgdmVsWzBdID0gLSB2ZWxbMF0gXG4gICAgICAgIH0gZWxzZSBpZiAocG9zWzFdLXJhZCA8IDAgfHwgcG9zWzFdK3JhZCA+IHRoaXMuRElNX1kpIHtcbiAgICAgICAgICAgIHZlbFsxXSA9IC0gdmVsWzFdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZlbDtcbiAgICB9XG5cbiAgICBoYW5kbGVJbmZlY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmluZmVjdGlvbk51bWJlciAvIHRoaXMuZGVuc2l0eSA+IDAuOTkpIHtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGlvbkluZmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSAgIFxuICAgIH1cblxuICAgIHN0ZXAoKSB7XG5cbiAgICAgICAgdGhpcy5tb3ZlT2JqZWN0cygpO1xuICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9ucygpO1xuICAgICAgICB0aGlzLmhhbmRsZUluZmVjdGlvbigpO1xuXG4gICAgfVxuXG59XG5cblNpbXVsYXRpb24uRElNX1ggPSA2MDA7XG5TaW11bGF0aW9uLkRJTV9ZID0gNDAwO1xuXG4iLCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW11bGF0aW9uVmlldyB7XG4gICAgY29uc3RydWN0b3Ioc2ltdWxhdGlvbiwgY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnNpbXVsYXRpb24gPSBzaW11bGF0aW9uO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnNpbXVsYXRpb24uc2ltdWxhdGlvbkludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaW11bGF0aW9uLnN0ZXAoKTtcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGlvbi5kcmF3KHRoaXMuY3R4KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbXVsYXRpb24ucG9wdWxhdGlvbkluZmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNpbXVsYXRpb24uc2ltdWxhdGlvbkludGVydmFsKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0b3AodGhpcy5zaW11bGF0aW9uKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyMCk7XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgc3RvcChzaW11bGF0aW9uKSB7XG4gICAgICAgIFxuICAgICAgICBjbGVhckludGVydmFsKHNpbXVsYXRpb24uc2ltdWxhdGlvbkludGVydmFsKTtcbiAgICB9XG5cbn0iLCJleHBvcnQgY29uc3QgVXRpbCA9IHtcbiAgIC8vIFJldHVybiBhIHJhbmRvbWx5IG9yaWVudGVkIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBsZW5ndGguXG4gICByYW5kb21WZWMobGVuZ3RoKSB7XG4gICAgICBjb25zdCBkZWcgPSAyICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCk7XG4gICAgICByZXR1cm4gVXRpbC5zY2FsZShbTWF0aC5zaW4oZGVnKSwgTWF0aC5jb3MoZGVnKV0sIGxlbmd0aCk7XG4gICB9LFxuICAgLy8gU2NhbGUgdGhlIGxlbmd0aCBvZiBhIHZlY3RvciBieSB0aGUgZ2l2ZW4gYW1vdW50LlxuICAgc2NhbGUodmVjLCBtKSB7XG4gICAgICByZXR1cm4gW3ZlY1swXSAqIG0sIHZlY1sxXSAqIG1dO1xuICAgfSxcblxuICAgZGlzdChwb3MxLCBwb3MyKSB7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgICAgTWF0aC5wb3cocG9zMVswXSAtIHBvczJbMF0sIDIpICsgTWF0aC5wb3cocG9zMVsxXSAtIHBvczJbMV0sIDIpXG4gICAgICApXG4gICB9LFxuICAgXG4gICByYW5kb21JbnRSYW5nZShtaW4sIG1heCkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG4gICB9LFxuXG4gICByb3RhdGUodmVsb2NpdHksIGFuZ2xlKSB7XG4gICAgICBjb25zdCByb3RhdGVkVmVsb2NpdGllcyA9IHtcbiAgICAgICAgIHg6IHZlbG9jaXR5WzBdICogTWF0aC5jb3MoYW5nbGUpIC0gdmVsb2NpdHlbMV0gKiBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgICB5OiB2ZWxvY2l0eVswXSAqIE1hdGguc2luKGFuZ2xlKSArIHZlbG9jaXR5WzFdICogTWF0aC5jb3MoYW5nbGUpXG4gICAgICB9XG4gICAgICByZXR1cm4gcm90YXRlZFZlbG9jaXRpZXM7XG4gICB9LFxuXG4gICByZXNvbHZlQ29sbGlzaW9uKHBlcnMsIG90aGVyUGVycykge1xuXG4gICAgICBjb25zdCB4VmVsRGlmZiA9IHBlcnMudmVsWzBdIC0gb3RoZXJQZXJzLnZlbFswXTtcbiAgICAgIGNvbnN0IHlWZWxEaWZmID0gcGVycy52ZWxbMV0gLSBvdGhlclBlcnMudmVsWzFdO1xuXG5cbiAgICAgIGNvbnN0IHhEaXN0ID0gb3RoZXJQZXJzLnBvc1swXSAtIHBlcnMucG9zWzBdO1xuICAgICAgY29uc3QgeURpc3QgPSBvdGhlclBlcnMucG9zWzFdIC0gcGVycy5wb3NbMV07XG5cbiAgICAgIC8vIFByZXZlbnQgYWNjaWRlbnRhbCBvdmVybGFwIG9mIHBlcnNcbiAgICAgIGlmICh4VmVsRGlmZiAqIHhEaXN0ICsgeVZlbERpZmYgKiB5RGlzdCA+PSAwKSB7XG5cbiAgICAgICAgIHBlcnMudmVsID0gcGVycy5jaGFuZ2VEaXIocGVycy52ZWwpO1xuICAgICAgICAgb3RoZXJQZXJzLnZlbCA9IG90aGVyUGVycy5jaGFuZ2VEaXIob3RoZXJQZXJzLnZlbCk7XG4gICAgICAgICBcbiAgICAgIH1cbiAgIH1cbiAgIFxufSJdLCJzb3VyY2VSb290IjoiIn0=