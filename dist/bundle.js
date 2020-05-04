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
    if (!currentSimulation || currentSimulation === s1 || currentSimulation.populationInfected) {
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
      g2.updateInfectionRate();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoX3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb3Zpbmdfb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb25fdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJHUkFQSF9ERUZBVUxUUyIsIldJRFRIIiwiQ09MT1IiLCJDb2x1bW4iLCJwb3MiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJHcmFwaCIsInNpbXVsYXRpb24iLCJESU1fWCIsIkRJTV9ZIiwiY29sdW1uV2lkdGgiLCJYUGFyYW1ldGVyIiwiY29sdW1ucyIsImdyYXBoSW50ZXJ2YWwiLCJ0aW1lVW5pdHMiLCJwb3B1bGF0aW9uSW5mZWN0ZWQiLCJkcmF3IiwibmV3Q29sdW1uIiwiZGVuc2l0eSIsImluZmVjdGlvbk51bWJlciIsInB1c2giLCJyZXNpemUiLCJjbGVhclJlY3QiLCJmb3JFYWNoIiwiY29sdW1uIiwiaW5mZWN0aW9uUmF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJNYXRoIiwiZmxvb3IiLCJpbmZlY3Rpb25UaW1lIiwiYWRkQ29sdW1uIiwidXBkYXRlSW5mZWN0aW9uUmF0ZSIsIkdyYXBoVmlldyIsImdyYXBoIiwic2V0SW50ZXJ2YWwiLCJzdGVwIiwiY2xlYXJJbnRlcnZhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbDEiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNhbnZhc0VsMiIsIlNpbXVsYXRpb24iLCJjdHgxIiwiZ2V0Q29udGV4dCIsImN0eDIiLCJ3aW5kb3ciLCJTaW11bGF0aW9uVmlldyIsIm91dHB1dERlbnNpdHkiLCJ2YWx1ZSIsIm9uaW5wdXQiLCJzMSIsInNvY2lhbERpc3QiLCJvdXRwdXRTb2NpYWxEaXN0IiwiY3VycmVudFNpbXVsYXRpb24iLCJjdXJyZW50U2ltdWxhdGlvblZpZXciLCJjdXJyZW50R3JhcGgiLCJjdXJyZW50R3JhcGhWaWV3Iiwic3RhcnRTaW11bGF0aW9uIiwib25jbGljayIsInN0YXJ0Iiwic3RvcFNpbXVsYXRpb24iLCJzdG9wIiwiY2xlYXJTaW11bGF0aW9uIiwiczIiLCJnMiIsIk1vdmluZ09iamVjdCIsInBhcmFtZXRlcnMiLCJ2ZWwiLCJyYWRpdXMiLCJtYXNzIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsIiwiYm91bmNlIiwiYWJzIiwib3RoZXJPYmplY3QiLCJjZW50ZXJEaXN0IiwiVXRpbCIsImRpc3QiLCJyZW1vdmUiLCJERUZBVUxUUyIsIlJBRElVUyIsIlNQRUVEIiwiTUFTUyIsIlBlcnNvbiIsInJhbmRvbVBvc2l0aW9uIiwicmFuZG9tVmVjIiwiY29uc2Npb3VzQ3RpemVuIiwiaW5mZWN0ZWQiLCJzb2NpYWxEaXN0YW5jaW5nUmF0ZSIsIk5VTV9QRVJTT05TIiwicGVyc29ucyIsInNpbXVsYXRpb25JbnRlcnZhbCIsImFkZFBlcnNvbnMiLCJhZGRQYXRpZW50WmVybyIsImFkZENvbnNjaW91c0NpdGl6ZW4iLCJpIiwiaiIsImxlbmd0aCIsImNvbnNjaW91c0NpdGl6ZW4iLCJyYWQiLCJ4IiwicmFuZG9tSW50UmFuZ2UiLCJ5IiwicGVyc29uIiwibW92ZSIsIm9iamVjdCIsInNwbGljZSIsImluZGV4T2YiLCJwZXJzMSIsInBlcnMyIiwiaXNDb2xsaWRlZFdpdGgiLCJyZXNvbHZlQ29sbGlzaW9uIiwibW92ZU9iamVjdHMiLCJjaGVja0NvbGxpc2lvbnMiLCJoYW5kbGVJbmZlY3Rpb24iLCJkZWciLCJyYW5kb20iLCJzY2FsZSIsInNpbiIsImNvcyIsInZlYyIsIm0iLCJwb3MxIiwicG9zMiIsInNxcnQiLCJwb3ciLCJtaW4iLCJtYXgiLCJyb3RhdGUiLCJ2ZWxvY2l0eSIsImFuZ2xlIiwicm90YXRlZFZlbG9jaXRpZXMiLCJwZXJzIiwib3RoZXJQZXJzIiwieFZlbERpZmYiLCJ5VmVsRGlmZiIsInhEaXN0IiwieURpc3QiLCJjaGFuZ2VEaXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRk8sSUFBTUEsY0FBYyxHQUFHO0FBQzFCQyxPQUFLLEVBQUUsQ0FEbUI7QUFFMUJDLE9BQUssRUFBRTtBQUZtQixDQUF2QjtBQU1BLElBQU1DLE1BQWI7QUFDSSxrQkFBWUMsR0FBWixFQUFpQkMsS0FBakIsRUFBd0JDLE1BQXhCLEVBQWdDO0FBQUE7O0FBQzVCLFNBQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEs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VyxLQUFUO0FBRjFCLEtBQTFCO0FBSUEsV0FBT0MsaUJBQVA7QUFDRixHQTNCZ0I7QUE2QmpCcEIsa0JBN0JpQiw0QkE2QkFxQixJQTdCQSxFQTZCTUMsU0E3Qk4sRUE2QmlCO0FBRS9CLFFBQU1DLFFBQVEsR0FBR0YsSUFBSSxDQUFDbkUsR0FBTCxDQUFTLENBQVQsSUFBY29FLFNBQVMsQ0FBQ3BFLEdBQVYsQ0FBYyxDQUFkLENBQS9CO0FBQ0EsUUFBTXNFLFFBQVEsR0FBR0gsSUFBSSxDQUFDbkUsR0FBTCxDQUFTLENBQVQsSUFBY29FLFNBQVMsQ0FBQ3BFLEdBQVYsQ0FBYyxDQUFkLENBQS9CO0FBR0EsUUFBTXVFLEtBQUssR0FBR0gsU0FBUyxDQUFDMUksR0FBVixDQUFjLENBQWQsSUFBbUJ5SSxJQUFJLENBQUN6SSxHQUFMLENBQVMsQ0FBVCxDQUFqQztBQUNBLFFBQU04SSxLQUFLLEdBQUdKLFNBQVMsQ0FBQzFJLEdBQVYsQ0FBYyxDQUFkLElBQW1CeUksSUFBSSxDQUFDekksR0FBTCxDQUFTLENBQVQsQ0FBakMsQ0FQK0IsQ0FTL0I7O0FBQ0EsUUFBSTJJLFFBQVEsR0FBR0UsS0FBWCxHQUFtQkQsUUFBUSxHQUFHRSxLQUE5QixJQUF1QyxDQUEzQyxFQUE4QztBQUUzQ0wsVUFBSSxDQUFDbkUsR0FBTCxHQUFXbUUsSUFBSSxDQUFDTSxTQUFMLENBQWVOLElBQUksQ0FBQ25FLEdBQXBCLENBQVg7QUFDQW9FLGVBQVMsQ0FBQ3BFLEdBQVYsR0FBZ0JvRSxTQUFTLENBQUNLLFNBQVYsQ0FBb0JMLFNBQVMsQ0FBQ3BFLEdBQTlCLENBQWhCO0FBRUY7QUFDSDtBQTdDZ0IsQ0FBYixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5cbmV4cG9ydCBjb25zdCBHUkFQSF9ERUZBVUxUUyA9IHtcbiAgICBXSURUSDogMSxcbiAgICBDT0xPUjogJ3JlZCdcblxufVxuXG5leHBvcnQgY2xhc3MgQ29sdW1uIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3MsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuY29sb3IgPSBHUkFQSF9ERUZBVUxUUy5DT0xPUlxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBHUkFQSF9ERUZBVUxUUy5DT0xPUjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KFxuICAgICAgICAgICAgdGhpcy5wb3NbMF0sXG4gICAgICAgICAgICB0aGlzLnBvc1sxXSxcbiAgICAgICAgICAgIHRoaXMud2lkdGgsXG4gICAgICAgICAgICB0aGlzLmhlaWdodFxuICAgICAgICApXG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBDb2x1bW4sIEdSQVBIX0RFRkFVTFRTfSBmcm9tICcuL2NvbHVtbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIHtcbiAgICBjb25zdHJ1Y3RvcihzaW11bGF0aW9uLCBjdHgpIHtcbiAgICAgICAgdGhpcy5ESU1fWCA9IDYwMDtcbiAgICAgICAgdGhpcy5ESU1fWSA9IDIwMDtcbiAgICAgICAgdGhpcy5jb2x1bW5XaWR0aCA9IEdSQVBIX0RFRkFVTFRTLldJRFRIXG4gICAgICAgIHRoaXMuWFBhcmFtZXRlciA9IEdSQVBIX0RFRkFVTFRTLldJRFRIIC8gMjtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtdO1xuICAgICAgICB0aGlzLmdyYXBoSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB0aGlzLnNpbXVsYXRpb24gPSBzaW11bGF0aW9uO1xuICAgICAgICB0aGlzLnRpbWVVbml0cyA9IDA7XG4gICAgICAgIHRoaXMucG9wdWxhdGlvbkluZmVjdGVkID0gdGhpcy5zaW11bGF0aW9uLnBvcHVsYXRpb25JbmZlY3RlZFxuICAgICAgICB0aGlzLmRyYXcoY3R4KTtcblxuICAgIH1cblxuICAgIGFkZENvbHVtbigpIHtcbiAgICAgICAgbGV0IG5ld0NvbHVtbiA9IG5ldyBDb2x1bW4oXG4gICAgICAgICAgICBbdGhpcy5YUGFyYW1ldGVyLCB0aGlzLkRJTV9ZXSxcbiAgICAgICAgICAgIHRoaXMuY29sdW1uV2lkdGgsXG4gICAgICAgICAgICAtKCh0aGlzLkRJTV9ZIC8gdGhpcy5zaW11bGF0aW9uLmRlbnNpdHkpICogdGhpcy5zaW11bGF0aW9uLmluZmVjdGlvbk51bWJlcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2gobmV3Q29sdW1uKTtcbiAgICAgICAgICAgIHRoaXMuWFBhcmFtZXRlciArPSB0aGlzLmNvbHVtbldpZHRoO1xuICAgICAgICAgICAgaWYgKHRoaXMuWFBhcmFtZXRlciA+PSB0aGlzLkRJTV9YKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemUoKVxuICAgICAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuRElNX1gsIHRoaXMuRElNX1kpO1xuICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiBjb2x1bW4uZHJhdyhjdHgpKTtcbiAgICB9XG5cbiAgICBjbGVhcihjdHgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLkRJTV9YLCB0aGlzLkRJTV9ZKTtcbiAgICB9XG5cbiAgICByZXNpemUoKSB7XG4gICAgICAgIHRoaXMuY29sdW1uV2lkdGggLz0gMjtcbiAgICAgICAgdGhpcy5YUGFyYW1ldGVyID0gdGhpcy5jb2x1bW5XaWR0aCAvIDJcbiAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goIGNvbHVtbiA9PiB7XG4gICAgICAgICAgICBjb2x1bW4ucG9zWzBdID0gdGhpcy5YUGFyYW1ldGVyO1xuICAgICAgICAgICAgY29sdW1uLndpZHRoID0gdGhpcy5jb2x1bW5XaWR0aDtcbiAgICAgICAgICAgIHRoaXMuWFBhcmFtZXRlciArPSB0aGlzLmNvbHVtbldpZHRoO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZHJhdyh0aGlzLmN0eClcbiAgICB9XG5cbiAgICB1cGRhdGVJbmZlY3Rpb25SYXRlKCkge1xuICAgICAgICBsZXQgaW5mZWN0aW9uUmF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZlY3Rpb24tcmF0ZScpO1xuICAgICAgICBpbmZlY3Rpb25SYXRlLmlubmVySFRNTCA9IE1hdGguZmxvb3IodGhpcy5zaW11bGF0aW9uLmluZmVjdGlvbk51bWJlciAvIHRoaXMuc2ltdWxhdGlvbi5kZW5zaXR5ICogMTAwKVxuICAgICAgICBsZXQgaW5mZWN0aW9uVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZlY3Rpb24tdGltZScpO1xuICAgICAgICBpbmZlY3Rpb25UaW1lLmlubmVySFRNTCA9IHRoaXMudGltZVVuaXRzIC8gMTAwXG4gICAgfVxuXG4gICAgc3RlcCgpIHtcbiAgICAgICAgdGhpcy5hZGRDb2x1bW4oKTtcbiAgICAgICAgdGhpcy51cGRhdGVJbmZlY3Rpb25SYXRlKCk7XG4gICAgICAgIHRoaXMudGltZVVuaXRzICs9IDE7XG4gICAgfVxuXG59IiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoVmlldyB7XG4gICAgY29uc3RydWN0b3IgKGdyYXBoLCBzaW11bGF0aW9uLCBjdHgpIHtcbiAgICAgICAgdGhpcy5ncmFwaCA9IGdyYXBoO1xuICAgICAgICB0aGlzLnNpbXVsYXRpb24gPSBzaW11bGF0aW9uO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDsgXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZ3JhcGguZ3JhcGhJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGguc3RlcCgpO1xuICAgICAgICAgICAgdGhpcy5ncmFwaC5kcmF3KHRoaXMuY3R4KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbXVsYXRpb24ucG9wdWxhdGlvbkluZmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmdyYXBoLmdyYXBoSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RvcCh0aGlzLmdyYXBoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCA0MCk7XG5cbiAgICB9XG5cbiAgICBzdG9wKGdyYXBoKSB7XG5cbiAgICAgICAgY2xlYXJJbnRlcnZhbChncmFwaC5ncmFwaEludGVydmFsKTtcbiAgICB9XG5cblxufVxuXG5cbiIsImltcG9ydCBTaW11bGF0aW9uIGZyb20gJy4vc2ltdWxhdGlvbic7XG5pbXBvcnQgU2ltdWxhdGlvblZpZXcgZnJvbSAnLi9zaW11bGF0aW9uX3ZpZXcnO1xuaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuaW1wb3J0IEdyYXBoVmlldyBmcm9tICcuL2dyYXBoX3ZpZXcnO1xuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tICcuL21vdmluZ19vYmplY3QnO1xuaW1wb3J0IHtQZXJzb259IGZyb20gJy4vcGVyc29uJztcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXNFbDEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbiAgICBjb25zdCBjYW52YXNFbDIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVsxXTtcblxuICAgIGNhbnZhc0VsMS53aWR0aCA9IFNpbXVsYXRpb24uRElNX1g7XG4gICAgY2FudmFzRWwxLmhlaWdodCA9IFNpbXVsYXRpb24uRElNX1k7XG4gICAgY29uc3QgY3R4MSA9IGNhbnZhc0VsMS5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBjYW52YXNFbDIud2lkdGggPSBTaW11bGF0aW9uLkRJTV9YO1xuICAgIGNhbnZhc0VsMi5oZWlnaHQgPSBTaW11bGF0aW9uLkRJTV9ZIC8gMjtcbiAgICBjb25zdCBjdHgyID0gY2FudmFzRWwyLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIFxuXG4gICAgd2luZG93LlNpbXVsYXRpb24gPSBTaW11bGF0aW9uO1xuICAgIHdpbmRvdy5TaW11bGF0aW9uVmlldyA9IFNpbXVsYXRpb25WaWV3O1xuICAgIHdpbmRvdy5HcmFwaCA9IEdyYXBoO1xuICAgIHdpbmRvdy5HcmFwaFZpZXcgPSBHcmFwaFZpZXc7XG5cbiAgICBcbiAgICAvLyBsZXQgaW5mZWN0ZWROdW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZmVjdGVkLW51bWJlclwiKTtcblxuXG4gICAgbGV0IGRlbnNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktZGVuc2l0eS1yYW5nZScpO1xuICAgIGxldCBvdXRwdXREZW5zaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbnNpdHktdmFsdWUnKTtcblxuICAgIG91dHB1dERlbnNpdHkuaW5uZXJIVE1MID0gZGVuc2l0eS52YWx1ZTtcblxuICAgIGRlbnNpdHkub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXG4gICAgICAgIG91dHB1dERlbnNpdHkuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcbiAgICAgICAgbGV0IHMxID0gbmV3IFNpbXVsYXRpb24odGhpcy52YWx1ZSwgc29jaWFsRGlzdC52YWx1ZSAvIDEwMCwgY3R4MSk7XG4gICAgfVxuXG4gICAgbGV0IHNvY2lhbERpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktc29jaWFsLXJhbmdlJyk7XG4gICAgbGV0IG91dHB1dFNvY2lhbERpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29jaWFsLXZhbHVlJyk7XG5cbiAgICBvdXRwdXRTb2NpYWxEaXN0LmlubmVySFRNTCA9IHNvY2lhbERpc3QudmFsdWU7XG5cbiAgICBzb2NpYWxEaXN0Lm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG91dHB1dFNvY2lhbERpc3QuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcbiAgICAgICAgbGV0IHMxID0gbmV3IFNpbXVsYXRpb24oZGVuc2l0eS52YWx1ZSwgdGhpcy52YWx1ZSAvIDEwMCwgY3R4MSk7XG4gICAgICAgIHJldHVybiBzMTtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudFNpbXVsYXRpb24gPSBudWxsO1xuICAgIGxldCBjdXJyZW50U2ltdWxhdGlvblZpZXcgPSBudWxsO1xuICAgIGxldCBjdXJyZW50R3JhcGggPSBudWxsO1xuICAgIGxldCBjdXJyZW50R3JhcGhWaWV3ID0gbnVsbDtcblxuICAgIFxuICAgIGxldCBzdGFydFNpbXVsYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKTtcbiAgICBzdGFydFNpbXVsYXRpb24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFjdXJyZW50U2ltdWxhdGlvbiB8fCBjdXJyZW50U2ltdWxhdGlvbiA9PT0gczEgfHwgY3VycmVudFNpbXVsYXRpb24ucG9wdWxhdGlvbkluZmVjdGVkKSB7XG4gICAgICAgICAgICBjdXJyZW50U2ltdWxhdGlvbiA9IG5ldyBTaW11bGF0aW9uKGRlbnNpdHkudmFsdWUsIHNvY2lhbERpc3QudmFsdWUgLyAxMDAsIGN0eDEpO1xuICAgICAgICAgICAgY3VycmVudFNpbXVsYXRpb25WaWV3ID0gbmV3IFNpbXVsYXRpb25WaWV3KGN1cnJlbnRTaW11bGF0aW9uLCBjdHgxKTtcbiAgICAgICAgICAgIGN1cnJlbnRHcmFwaCA9IG5ldyBHcmFwaChjdXJyZW50U2ltdWxhdGlvbiwgY3R4Mik7XG4gICAgICAgICAgICBjdXJyZW50R3JhcGhWaWV3ID0gbmV3IEdyYXBoVmlldyhjdXJyZW50R3JhcGgsIGN1cnJlbnRTaW11bGF0aW9uLCBjdHgyKTtcbiAgICAgICAgICAgIGN1cnJlbnRTaW11bGF0aW9uVmlldy5zdGFydCgpO1xuICAgICAgICAgICAgY3VycmVudEdyYXBoVmlldy5zdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICBcbiAgICBsZXQgc3RvcFNpbXVsYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RvcCcpO1xuICAgIHN0b3BTaW11bGF0aW9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjdXJyZW50U2ltdWxhdGlvbikge1xuICAgICAgICAgICAgY3VycmVudFNpbXVsYXRpb25WaWV3LnN0b3AoY3VycmVudFNpbXVsYXRpb24pO1xuICAgICAgICAgICAgY3VycmVudEdyYXBoVmlldy5zdG9wKGN1cnJlbnRHcmFwaClcbiAgICAgICAgICAgIGN1cnJlbnRTaW11bGF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIGN1cnJlbnRHcmFwaCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBsZXQgczEgPSBuZXcgU2ltdWxhdGlvbihkZW5zaXR5LnZhbHVlLCBzb2NpYWxEaXN0LnZhbHVlIC8gMTAwLCBjdHgxKTtcbiAgICBcbiAgICBcbiAgICBsZXQgY2xlYXJTaW11bGF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyJyk7XG4gICAgY2xlYXJTaW11bGF0aW9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghY3VycmVudFNpbXVsYXRpb24gfHwgY3VycmVudFNpbXVsYXRpb24ucG9wdWxhdGlvbkluZmVjdGVkKSB7XG4gICAgICAgICAgICBsZXQgczIgPSBuZXcgU2ltdWxhdGlvbihkZW5zaXR5LnZhbHVlLCBzb2NpYWxEaXN0LnZhbHVlIC8gMTAwLCBjdHgxKTtcbiAgICAgICAgICAgIGxldCBnMiA9IG5ldyBHcmFwaCAoczIsIGN0eDIpO1xuICAgICAgICAgICAgZzIudXBkYXRlSW5mZWN0aW9uUmF0ZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn0pOyIsImltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnLi9zaW11bGF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5wb3MgID0gcGFyYW1ldGVycy5wb3M7XG4gICAgdGhpcy52ZWwgID0gcGFyYW1ldGVycy52ZWw7XG4gICAgdGhpcy5yYWRpdXMgID0gcGFyYW1ldGVycy5yYWRpdXM7XG4gICAgdGhpcy5jb2xvciAgPSBwYXJhbWV0ZXJzLmNvbG9yO1xuICAgIHRoaXMubWFzcyA9IHBhcmFtZXRlcnMubWFzcztcbiAgICB0aGlzLnNpbXVsYXRpb24gPSBwYXJhbWV0ZXJzLnNpbXVsYXRpb247XG4gICAgfVxuXG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKFxuICAgICAgICAgICAgdGhpcy5wb3NbMF0sXG4gICAgICAgICAgICB0aGlzLnBvc1sxXSxcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDIgKiBNYXRoLlBJXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMucG9zID0gWyh0aGlzLnBvc1swXSArIHRoaXMudmVsWzBdKSwgKHRoaXMucG9zWzFdICsgdGhpcy52ZWxbMV0pXVxuICAgICAgICB0aGlzLnZlbCA9IHRoaXMuc2ltdWxhdGlvbi5ib3VuY2UodGhpcy5wb3MsIHRoaXMudmVsKTtcbiAgICB9O1xuXG4gICAgY2hhbmdlRGlyKHZlbCkge1xuICAgICAgICBcbiAgICAgICAgaWYgKE1hdGguYWJzKHZlbFswXSkgPiBNYXRoLmFicyh2ZWxbMV0pKSB7XG4gICAgICAgICAgICB2ZWxbMF0gPSAtIHZlbFswXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmVsWzFdID0gLSB2ZWxbMV1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHZlbDtcbiAgICB9XG4gICAgXG4gICAgaXNDb2xsaWRlZFdpdGgob3RoZXJPYmplY3QpIHtcbiAgICAgICAgY29uc3QgY2VudGVyRGlzdCA9IFV0aWwuZGlzdCh0aGlzLnBvcywgb3RoZXJPYmplY3QucG9zKTtcbiAgICAgICAgaWYgKGNlbnRlckRpc3QgPCAodGhpcy5yYWRpdXMgKyBvdGhlck9iamVjdC5yYWRpdXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uLnJlbW92ZSh0aGlzKTtcbiAgICB9XG5cbiB9XG5cblxuIiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRTID0ge1xuICAgIFJBRElVUzogMixcbiAgICBDT0xPUjogXCJsaWdodGdyYXlcIixcbiAgICBTUEVFRDogMixcbiAgICBNQVNTOiAxXG59XG5cbmV4cG9ydCBjbGFzcyBQZXJzb24gZXh0ZW5kcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMgPSB7fSkge1xuICAgICAgICBwYXJhbWV0ZXJzLmNvbG9yID0gREVGQVVMVFMuQ09MT1I7XG4gICAgICAgIHBhcmFtZXRlcnMucmFkaXVzID0gREVGQVVMVFMuUkFESVVTO1xuICAgICAgICBwYXJhbWV0ZXJzLm1hc3MgPSBERUZBVUxUUy5NQVNTO1xuICAgICAgICBwYXJhbWV0ZXJzLnBvcyA9IHBhcmFtZXRlcnMucG9zIHx8IHBhcmFtZXRlcnMuc2ltdWxhdGlvbi5yYW5kb21Qb3NpdGlvbigpO1xuICAgICAgICBwYXJhbWV0ZXJzLnZlbCA9IHBhcmFtZXRlcnMudmVsIHx8IFV0aWwucmFuZG9tVmVjKERFRkFVTFRTLlNQRUVEKTtcbiAgICAgICAgcGFyYW1ldGVycy5jb25zY2lvdXNDdGl6ZW4gPSBmYWxzZTtcbiAgICAgICAgcGFyYW1ldGVycy5pbmZlY3RlZCA9IGZhbHNlO1xuICAgICAgICBzdXBlcihwYXJhbWV0ZXJzKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQge1BlcnNvbiwgREVGQVVMVFN9IGZyb20gJy4vcGVyc29uJztcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBTaW11bGF0aW9uVmlldyBmcm9tICcuL3NpbXVsYXRpb25fdmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXVsYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGRlbnNpdHksIHNvY2lhbERpc3RhbmNpbmdSYXRlLCBjdHgpIHtcbiAgICAgICAgdGhpcy5ESU1fWCA9IDYwMDtcbiAgICAgICAgdGhpcy5ESU1fWSA9IDQwMDtcbiAgICAgICAgdGhpcy5OVU1fUEVSU09OUyA9IDEwMDtcbiAgICAgICAgdGhpcy5kZW5zaXR5ID0gZGVuc2l0eTtcbiAgICAgICAgdGhpcy5zb2NpYWxEaXN0YW5jaW5nUmF0ZSA9IHNvY2lhbERpc3RhbmNpbmdSYXRlO1xuICAgICAgICB0aGlzLnBvcHVsYXRpb25JbmZlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBlcnNvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB0aGlzLmluZmVjdGlvbk51bWJlciA9IDA7XG4gICAgICAgIHRoaXMuYWRkUGVyc29ucygpO1xuICAgICAgICB0aGlzLmFkZFBhdGllbnRaZXJvKCk7XG4gICAgICAgIHRoaXMuYWRkQ29uc2Npb3VzQ2l0aXplbigpO1xuICAgICAgICB0aGlzLmRyYXcoY3R4KTtcbiAgICB9XG5cblxuXG4gICAgYWRkUGVyc29ucygpIHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5kZW5zaXR5OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGVyc29ucy5wdXNoKG5ldyBQZXJzb24oe1xuICAgICAgICAgICAgICAgIHBvczogdGhpcy5yYW5kb21Qb3NpdGlvbigpLCBcbiAgICAgICAgICAgICAgICB2ZWw6IFV0aWwucmFuZG9tVmVjKERFRkFVTFRTLlNQRUVEKSwgXG4gICAgICAgICAgICAgICAgc2ltdWxhdGlvbjogdGhpc30pKTtcblxuICAgICAgICAgICAgaWYgKGkhPT0wKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnBlcnNvbnMubGVuZ3RoLTE7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKFV0aWwuZGlzdCh0aGlzLnBlcnNvbnNbaV0ucG9zLCB0aGlzLnBlcnNvbnNbal0ucG9zKSAtIERFRkFVTFRTLlJBRElVUyAqIDIpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzb25zW2ldLnBvcyA9IHRoaXMucmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGo9LTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRQYXRpZW50WmVybygpIHtcbiAgICAgICAgdGhpcy5wZXJzb25zWzBdLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgIHRoaXMucGVyc29uc1swXS5pbmZlY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5mZWN0aW9uTnVtYmVyID0rIDE7XG4gICAgfVxuXG4gICAgYWRkQ29uc2Npb3VzQ2l0aXplbigpIHtcbiAgICAgICAgZm9yIChsZXQgaT0xOyBpPHRoaXMucGVyc29ucy5sZW5ndGggKiB0aGlzLnNvY2lhbERpc3RhbmNpbmdSYXRlKzE7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wZXJzb25zW2ldLmNvbnNjaW91c0NpdGl6ZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wZXJzb25zW2ldLnZlbCA9IFswLDBdO1xuICAgICAgICAgICAgdGhpcy5wZXJzb25zW2ldLmNvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgXG4gICAgcmFuZG9tUG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IHJhZCA9IERFRkFVTFRTLlJBRElVUztcbiAgICAgICAgbGV0IHggPSBVdGlsLnJhbmRvbUludFJhbmdlKHJhZCwgdGhpcy5ESU1fWCAtIHJhZCk7XG4gICAgICAgIGxldCB5ID0gVXRpbC5yYW5kb21JbnRSYW5nZShyYWQsIHRoaXMuRElNX1kgLSByYWQpO1xuICAgICAgICByZXR1cm4gW3gseV07XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLkRJTV9YLCB0aGlzLkRJTV9ZKTtcbiAgICAgICAgdGhpcy5wZXJzb25zLmZvckVhY2goIHBlcnNvbiA9PiBwZXJzb24uZHJhdyhjdHgpKTtcbiAgICB9XG5cbiAgICBjbGVhcihjdHgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLkRJTV9YLCB0aGlzLkRJTV9ZKTtcbiAgICB9XG5cbiAgICBtb3ZlT2JqZWN0cygpIHtcbiAgICAgICAgdGhpcy5wZXJzb25zLmZvckVhY2goKHBlcnNvbikgPT4ge1xuICAgICAgICAgICAgcGVyc29uLm1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlT2JqZWN0KG9iamVjdCkge1xuICAgICAgICB0aGlzLnBlcnNvbnMuc3BsaWNlKHRoaXMucGVyc29ucy5pbmRleE9mKG9iamVjdCksIDEpXG4gICAgfVxuICAgIFxuXG4gICAgY2hlY2tDb2xsaXNpb25zKCkge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5wZXJzb25zLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGo9aSsxOyBqPHRoaXMucGVyc29ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBwZXJzMSA9IHRoaXMucGVyc29uc1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgcGVyczIgPSB0aGlzLnBlcnNvbnNbal07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHBlcnMxLmlzQ29sbGlkZWRXaXRoKHBlcnMyKSkge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlsLnJlc29sdmVDb2xsaXNpb24ocGVyczEsIHBlcnMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwZXJzMS5jb2xvciA9PT0gJ3JlZCcgJiYgcGVyczIuY29sb3IgIT09ICdyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzMi5jb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGVyczIuaW5mZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmZlY3Rpb25OdW1iZXIgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGVyczIuY29sb3IgPT09ICdyZWQnICYmIHBlcnMxLmNvbG9yICE9PSAncmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnMxLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyczEuaW5mZWN0ZWQgPSAndHJ1ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmZlY3Rpb25OdW1iZXIgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYm91bmNlKHBvcywgdmVsKSB7XG4gICAgICAgIGxldCByYWQgPSBERUZBVUxUUy5SQURJVVNcbiAgICAgICAgaWYgKHBvc1swXS1yYWQgPCAwIHx8IHBvc1swXStyYWQgPiB0aGlzLkRJTV9YKSB7XG4gICAgICAgICAgIHZlbFswXSA9IC0gdmVsWzBdIFxuICAgICAgICB9IGVsc2UgaWYgKHBvc1sxXS1yYWQgPCAwIHx8IHBvc1sxXStyYWQgPiB0aGlzLkRJTV9ZKSB7XG4gICAgICAgICAgICB2ZWxbMV0gPSAtIHZlbFsxXVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2ZWw7XG4gICAgfVxuXG4gICAgaGFuZGxlSW5mZWN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5pbmZlY3Rpb25OdW1iZXIgLyB0aGlzLmRlbnNpdHkgPiAwLjk5KSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRpb25JbmZlY3RlZCA9IHRydWU7XG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICBzdGVwKCkge1xuXG4gICAgICAgIHRoaXMubW92ZU9iamVjdHMoKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbnMoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVJbmZlY3Rpb24oKTtcblxuICAgIH1cblxufVxuXG5TaW11bGF0aW9uLkRJTV9YID0gNjAwO1xuU2ltdWxhdGlvbi5ESU1fWSA9IDQwMDtcblxuIiwiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvblZpZXcge1xuICAgIGNvbnN0cnVjdG9yKHNpbXVsYXRpb24sIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uID0gc2ltdWxhdGlvbjtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uLnNpbXVsYXRpb25JbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGlvbi5zdGVwKCk7XG4gICAgICAgICAgICB0aGlzLnNpbXVsYXRpb24uZHJhdyh0aGlzLmN0eCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zaW11bGF0aW9uLnBvcHVsYXRpb25JbmZlY3RlZCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zaW11bGF0aW9uLnNpbXVsYXRpb25JbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdG9wKHRoaXMuc2ltdWxhdGlvbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjApO1xuXG4gICAgICAgIFxuICAgIH1cblxuICAgIHN0b3Aoc2ltdWxhdGlvbikge1xuICAgICAgICBcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzaW11bGF0aW9uLnNpbXVsYXRpb25JbnRlcnZhbCk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGNvbnN0IFV0aWwgPSB7XG4gICAvLyBSZXR1cm4gYSByYW5kb21seSBvcmllbnRlZCB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gbGVuZ3RoLlxuICAgcmFuZG9tVmVjKGxlbmd0aCkge1xuICAgICAgY29uc3QgZGVnID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgcmV0dXJuIFV0aWwuc2NhbGUoW01hdGguc2luKGRlZyksIE1hdGguY29zKGRlZyldLCBsZW5ndGgpO1xuICAgfSxcbiAgIC8vIFNjYWxlIHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgYnkgdGhlIGdpdmVuIGFtb3VudC5cbiAgIHNjYWxlKHZlYywgbSkge1xuICAgICAgcmV0dXJuIFt2ZWNbMF0gKiBtLCB2ZWNbMV0gKiBtXTtcbiAgIH0sXG5cbiAgIGRpc3QocG9zMSwgcG9zMikge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgICAgIE1hdGgucG93KHBvczFbMF0gLSBwb3MyWzBdLCAyKSArIE1hdGgucG93KHBvczFbMV0gLSBwb3MyWzFdLCAyKVxuICAgICAgKVxuICAgfSxcbiAgIFxuICAgcmFuZG9tSW50UmFuZ2UobWluLCBtYXgpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICAgfSxcblxuICAgcm90YXRlKHZlbG9jaXR5LCBhbmdsZSkge1xuICAgICAgY29uc3Qgcm90YXRlZFZlbG9jaXRpZXMgPSB7XG4gICAgICAgICB4OiB2ZWxvY2l0eVswXSAqIE1hdGguY29zKGFuZ2xlKSAtIHZlbG9jaXR5WzFdICogTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgeTogdmVsb2NpdHlbMF0gKiBNYXRoLnNpbihhbmdsZSkgKyB2ZWxvY2l0eVsxXSAqIE1hdGguY29zKGFuZ2xlKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdGF0ZWRWZWxvY2l0aWVzO1xuICAgfSxcblxuICAgcmVzb2x2ZUNvbGxpc2lvbihwZXJzLCBvdGhlclBlcnMpIHtcblxuICAgICAgY29uc3QgeFZlbERpZmYgPSBwZXJzLnZlbFswXSAtIG90aGVyUGVycy52ZWxbMF07XG4gICAgICBjb25zdCB5VmVsRGlmZiA9IHBlcnMudmVsWzFdIC0gb3RoZXJQZXJzLnZlbFsxXTtcblxuXG4gICAgICBjb25zdCB4RGlzdCA9IG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXTtcbiAgICAgIGNvbnN0IHlEaXN0ID0gb3RoZXJQZXJzLnBvc1sxXSAtIHBlcnMucG9zWzFdO1xuXG4gICAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgb3ZlcmxhcCBvZiBwZXJzXG4gICAgICBpZiAoeFZlbERpZmYgKiB4RGlzdCArIHlWZWxEaWZmICogeURpc3QgPj0gMCkge1xuXG4gICAgICAgICBwZXJzLnZlbCA9IHBlcnMuY2hhbmdlRGlyKHBlcnMudmVsKTtcbiAgICAgICAgIG90aGVyUGVycy52ZWwgPSBvdGhlclBlcnMuY2hhbmdlRGlyKG90aGVyUGVycy52ZWwpO1xuICAgICAgICAgXG4gICAgICB9XG4gICB9XG4gICBcbn0iXSwic291cmNlUm9vdCI6IiJ9