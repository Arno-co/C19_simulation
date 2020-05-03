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
  }
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoX3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb3Zpbmdfb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb25fdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJHUkFQSF9ERUZBVUxUUyIsIldJRFRIIiwiQ09MT1IiLCJDb2x1bW4iLCJwb3MiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJHcmFwaCIsInNpbXVsYXRpb24iLCJESU1fWCIsIkRJTV9ZIiwiY29sdW1uV2lkdGgiLCJYUGFyYW1ldGVyIiwiY29sdW1ucyIsImdyYXBoSW50ZXJ2YWwiLCJ0aW1lVW5pdHMiLCJwb3B1bGF0aW9uSW5mZWN0ZWQiLCJkcmF3IiwibmV3Q29sdW1uIiwiZGVuc2l0eSIsImluZmVjdGlvbk51bWJlciIsInB1c2giLCJyZXNpemUiLCJjbGVhclJlY3QiLCJmb3JFYWNoIiwiY29sdW1uIiwiaW5mZWN0aW9uUmF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJNYXRoIiwiZmxvb3IiLCJpbmZlY3Rpb25UaW1lIiwiYWRkQ29sdW1uIiwidXBkYXRlSW5mZWN0aW9uUmF0ZSIsIkdyYXBoVmlldyIsImdyYXBoIiwic2V0SW50ZXJ2YWwiLCJzdGVwIiwiY2xlYXJJbnRlcnZhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbDEiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNhbnZhc0VsMiIsIlNpbXVsYXRpb24iLCJjdHgxIiwiZ2V0Q29udGV4dCIsImN0eDIiLCJ3aW5kb3ciLCJTaW11bGF0aW9uVmlldyIsImluZmVjdGVkTnVtYmVyIiwib3V0cHV0RGVuc2l0eSIsInZhbHVlIiwib25pbnB1dCIsInMxIiwic29jaWFsRGlzdCIsImNvbnNvbGUiLCJsb2ciLCJvdXRwdXRTb2NpYWxEaXN0IiwiY3VycmVudFNpbXVsYXRpb24iLCJjdXJyZW50U2ltdWxhdGlvblZpZXciLCJjdXJyZW50R3JhcGgiLCJjdXJyZW50R3JhcGhWaWV3Iiwic3RhcnRTaW11bGF0aW9uIiwib25jbGljayIsInN0YXJ0Iiwic3RvcFNpbXVsYXRpb24iLCJzdG9wIiwiTW92aW5nT2JqZWN0IiwicGFyYW1ldGVycyIsInZlbCIsInJhZGl1cyIsIm1hc3MiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsImZpbGwiLCJib3VuY2UiLCJhYnMiLCJvdGhlck9iamVjdCIsImNlbnRlckRpc3QiLCJVdGlsIiwiZGlzdCIsInJlbW92ZSIsIkRFRkFVTFRTIiwiUkFESVVTIiwiU1BFRUQiLCJNQVNTIiwiUGVyc29uIiwicmFuZG9tUG9zaXRpb24iLCJyYW5kb21WZWMiLCJjb25zY2lvdXNDdGl6ZW4iLCJpbmZlY3RlZCIsInNvY2lhbERpc3RhbmNpbmdSYXRlIiwiTlVNX1BFUlNPTlMiLCJwZXJzb25zIiwic2ltdWxhdGlvbkludGVydmFsIiwiYWRkUGVyc29ucyIsImFkZFBhdGllbnRaZXJvIiwiYWRkQ29uc2Npb3VzQ2l0aXplbiIsImkiLCJqIiwibGVuZ3RoIiwiY29uc2Npb3VzQ2l0aXplbiIsInJhZCIsIngiLCJyYW5kb21JbnRSYW5nZSIsInkiLCJwZXJzb24iLCJtb3ZlIiwib2JqZWN0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInBlcnMxIiwicGVyczIiLCJpc0NvbGxpZGVkV2l0aCIsInJlc29sdmVDb2xsaXNpb24iLCJtb3ZlT2JqZWN0cyIsImNoZWNrQ29sbGlzaW9ucyIsImhhbmRsZUluZmVjdGlvbiIsImRlZyIsInJhbmRvbSIsInNjYWxlIiwic2luIiwiY29zIiwidmVjIiwibSIsInBvczEiLCJwb3MyIiwic3FydCIsInBvdyIsIm1pbiIsIm1heCIsInJvdGF0ZSIsInZlbG9jaXR5IiwiYW5nbGUiLCJyb3RhdGVkVmVsb2NpdGllcyIsInBlcnMiLCJvdGhlclBlcnMiLCJ4VmVsRGlmZiIsInlWZWxEaWZmIiwieERpc3QiLCJ5RGlzdCIsImNoYW5nZURpciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGTyxJQUFNQSxjQUFjLEdBQUc7QUFDMUJDLE9BQUssRUFBRSxDQURtQjtBQUUxQkMsT0FBSyxFQUFFO0FBRm1CLENBQXZCO0FBTUEsSUFBTUMsTUFBYjtBQUNJLGtCQUFZQyxHQUFaLEVBQWlCQyxLQUFqQixFQUF3QkMsTUFBeEIsRUFBZ0M7QUFBQTs7QUFDNUIsU0FBS0YsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsS0FBTCxH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QixDQVMvQjs7QUFDQSxRQUFJMkksUUFBUSxHQUFHRSxLQUFYLEdBQW1CRCxRQUFRLEdBQUdFLEtBQTlCLElBQXVDLENBQTNDLEVBQThDO0FBRTNDTCxVQUFJLENBQUNuRSxHQUFMLEdBQVdtRSxJQUFJLENBQUNNLFNBQUwsQ0FBZU4sSUFBSSxDQUFDbkUsR0FBcEIsQ0FBWDtBQUNBb0UsZUFBUyxDQUFDcEUsR0FBVixHQUFnQm9FLFNBQVMsQ0FBQ0ssU0FBVixDQUFvQkwsU0FBUyxDQUFDcEUsR0FBOUIsQ0FBaEI7QUFFRjtBQUNIO0FBN0NnQixDQUFiLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcblxuZXhwb3J0IGNvbnN0IEdSQVBIX0RFRkFVTFRTID0ge1xuICAgIFdJRFRIOiAxLFxuICAgIENPTE9SOiAncmVkJ1xuXG59XG5cbmV4cG9ydCBjbGFzcyBDb2x1bW4ge1xuICAgIGNvbnN0cnVjdG9yKHBvcywgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLnBvcyA9IHBvcztcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5jb2xvciA9IEdSQVBIX0RFRkFVTFRTLkNPTE9SXG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IEdSQVBIX0RFRkFVTFRTLkNPTE9SO1xuICAgICAgICBjdHguZmlsbFJlY3QoXG4gICAgICAgICAgICB0aGlzLnBvc1swXSxcbiAgICAgICAgICAgIHRoaXMucG9zWzFdLFxuICAgICAgICAgICAgdGhpcy53aWR0aCxcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0XG4gICAgICAgIClcbiAgICB9XG5cblxufSIsImltcG9ydCB7IENvbHVtbiwgR1JBUEhfREVGQVVMVFN9IGZyb20gJy4vY29sdW1uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGgge1xuICAgIGNvbnN0cnVjdG9yKHNpbXVsYXRpb24sIGN0eCkge1xuICAgICAgICB0aGlzLkRJTV9YID0gNjAwO1xuICAgICAgICB0aGlzLkRJTV9ZID0gMjAwO1xuICAgICAgICB0aGlzLmNvbHVtbldpZHRoID0gR1JBUEhfREVGQVVMVFMuV0lEVEhcbiAgICAgICAgdGhpcy5YUGFyYW1ldGVyID0gR1JBUEhfREVGQVVMVFMuV0lEVEggLyAyO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gW107XG4gICAgICAgIHRoaXMuZ3JhcGhJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbiA9IHNpbXVsYXRpb247XG4gICAgICAgIHRoaXMudGltZVVuaXRzID0gMDtcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uSW5mZWN0ZWQgPSB0aGlzLnNpbXVsYXRpb24ucG9wdWxhdGlvbkluZmVjdGVkXG4gICAgICAgIHRoaXMuZHJhdyhjdHgpO1xuXG4gICAgfVxuXG4gICAgYWRkQ29sdW1uKCkge1xuICAgICAgICBsZXQgbmV3Q29sdW1uID0gbmV3IENvbHVtbihcbiAgICAgICAgICAgIFt0aGlzLlhQYXJhbWV0ZXIsIHRoaXMuRElNX1ldLFxuICAgICAgICAgICAgdGhpcy5jb2x1bW5XaWR0aCxcbiAgICAgICAgICAgIC0oKHRoaXMuRElNX1kgLyB0aGlzLnNpbXVsYXRpb24uZGVuc2l0eSkgKiB0aGlzLnNpbXVsYXRpb24uaW5mZWN0aW9uTnVtYmVyKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaChuZXdDb2x1bW4pO1xuICAgICAgICAgICAgdGhpcy5YUGFyYW1ldGVyICs9IHRoaXMuY29sdW1uV2lkdGg7XG4gICAgICAgICAgICBpZiAodGhpcy5YUGFyYW1ldGVyID49IHRoaXMuRElNX1gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZSgpXG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5ESU1fWCwgdGhpcy5ESU1fWSk7XG4gICAgdGhpcy5jb2x1bW5zLmZvckVhY2goY29sdW1uID0+IGNvbHVtbi5kcmF3KGN0eCkpO1xuICAgIH1cblxuICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5jb2x1bW5XaWR0aCAvPSAyO1xuICAgICAgICB0aGlzLlhQYXJhbWV0ZXIgPSB0aGlzLmNvbHVtbldpZHRoIC8gMlxuICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaCggY29sdW1uID0+IHtcbiAgICAgICAgICAgIGNvbHVtbi5wb3NbMF0gPSB0aGlzLlhQYXJhbWV0ZXI7XG4gICAgICAgICAgICBjb2x1bW4ud2lkdGggPSB0aGlzLmNvbHVtbldpZHRoO1xuICAgICAgICAgICAgdGhpcy5YUGFyYW1ldGVyICs9IHRoaXMuY29sdW1uV2lkdGg7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5kcmF3KHRoaXMuY3R4KVxuICAgIH1cblxuICAgIHVwZGF0ZUluZmVjdGlvblJhdGUoKSB7XG4gICAgICAgIGxldCBpbmZlY3Rpb25SYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZmVjdGlvbi1yYXRlJyk7XG4gICAgICAgIGluZmVjdGlvblJhdGUuaW5uZXJIVE1MID0gTWF0aC5mbG9vcih0aGlzLnNpbXVsYXRpb24uaW5mZWN0aW9uTnVtYmVyIC8gdGhpcy5zaW11bGF0aW9uLmRlbnNpdHkgKiAxMDApXG4gICAgICAgIGxldCBpbmZlY3Rpb25UaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZmVjdGlvbi10aW1lJyk7XG4gICAgICAgIGluZmVjdGlvblRpbWUuaW5uZXJIVE1MID0gdGhpcy50aW1lVW5pdHMgLyAxMDBcbiAgICB9XG5cbiAgICBzdGVwKCkge1xuICAgICAgICB0aGlzLmFkZENvbHVtbigpO1xuICAgICAgICB0aGlzLnVwZGF0ZUluZmVjdGlvblJhdGUoKTtcbiAgICAgICAgdGhpcy50aW1lVW5pdHMgKz0gMTtcbiAgICB9XG5cbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoZ3JhcGgsIHNpbXVsYXRpb24sIGN0eCkge1xuICAgICAgICB0aGlzLmdyYXBoID0gZ3JhcGg7XG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbiA9IHNpbXVsYXRpb247XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4OyBcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5ncmFwaC5ncmFwaEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ncmFwaC5zdGVwKCk7XG4gICAgICAgICAgICB0aGlzLmdyYXBoLmRyYXcodGhpcy5jdHgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2ltdWxhdGlvbi5wb3B1bGF0aW9uSW5mZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZ3JhcGguZ3JhcGhJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdG9wKHRoaXMuZ3JhcGgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDQwKTtcblxuICAgIH1cblxuICAgIHN0b3AoZ3JhcGgpIHtcblxuICAgICAgICBjbGVhckludGVydmFsKGdyYXBoLmdyYXBoSW50ZXJ2YWwpO1xuICAgIH1cblxuXG59XG5cblxuIiwiaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnLi9zaW11bGF0aW9uJztcbmltcG9ydCBTaW11bGF0aW9uVmlldyBmcm9tICcuL3NpbXVsYXRpb25fdmlldyc7XG5pbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5pbXBvcnQgR3JhcGhWaWV3IGZyb20gJy4vZ3JhcGhfdmlldyc7XG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQge1BlcnNvbn0gZnJvbSAnLi9wZXJzb24nO1xuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhc0VsMSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xuICAgIGNvbnN0IGNhbnZhc0VsMiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzFdO1xuXG4gICAgY2FudmFzRWwxLndpZHRoID0gU2ltdWxhdGlvbi5ESU1fWDtcbiAgICBjYW52YXNFbDEuaGVpZ2h0ID0gU2ltdWxhdGlvbi5ESU1fWTtcbiAgICBjb25zdCBjdHgxID0gY2FudmFzRWwxLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIGNhbnZhc0VsMi53aWR0aCA9IFNpbXVsYXRpb24uRElNX1g7XG4gICAgY2FudmFzRWwyLmhlaWdodCA9IFNpbXVsYXRpb24uRElNX1kgLyAyO1xuICAgIGNvbnN0IGN0eDIgPSBjYW52YXNFbDIuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgXG5cbiAgICB3aW5kb3cuU2ltdWxhdGlvbiA9IFNpbXVsYXRpb247XG4gICAgd2luZG93LlNpbXVsYXRpb25WaWV3ID0gU2ltdWxhdGlvblZpZXc7XG4gICAgd2luZG93LkdyYXBoID0gR3JhcGg7XG4gICAgd2luZG93LkdyYXBoVmlldyA9IEdyYXBoVmlldztcblxuICAgIFxuICAgIGxldCBpbmZlY3RlZE51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mZWN0ZWQtbnVtYmVyXCIpO1xuXG5cbiAgICBsZXQgZGVuc2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1kZW5zaXR5LXJhbmdlJyk7XG4gICAgbGV0IG91dHB1dERlbnNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVuc2l0eS12YWx1ZScpO1xuXG4gICAgb3V0cHV0RGVuc2l0eS5pbm5lckhUTUwgPSBkZW5zaXR5LnZhbHVlO1xuXG4gICAgZGVuc2l0eS5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBcbiAgICAgICAgb3V0cHV0RGVuc2l0eS5pbm5lckhUTUwgPSB0aGlzLnZhbHVlO1xuICAgICAgICBsZXQgczEgPSBuZXcgU2ltdWxhdGlvbih0aGlzLnZhbHVlLCBzb2NpYWxEaXN0LnZhbHVlIC8gMTAwLCBjdHgxKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coZGVuc2l0eS52YWx1ZSk7XG5cbiAgICBsZXQgc29jaWFsRGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1zb2NpYWwtcmFuZ2UnKTtcbiAgICBsZXQgb3V0cHV0U29jaWFsRGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb2NpYWwtdmFsdWUnKTtcblxuICAgIG91dHB1dFNvY2lhbERpc3QuaW5uZXJIVE1MID0gc29jaWFsRGlzdC52YWx1ZTtcblxuICAgIHNvY2lhbERpc3Qub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3V0cHV0U29jaWFsRGlzdC5pbm5lckhUTUwgPSB0aGlzLnZhbHVlO1xuICAgICAgICBsZXQgczEgPSBuZXcgU2ltdWxhdGlvbihkZW5zaXR5LnZhbHVlLCB0aGlzLnZhbHVlIC8gMTAwLCBjdHgxKTtcbiAgICAgICAgcmV0dXJuIHMxO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzb2NpYWxEaXN0LnZhbHVlKTtcblxuICAgIGxldCBjdXJyZW50U2ltdWxhdGlvbiA9IG51bGw7XG4gICAgd2luZG93LmN1cnJlbnRTaW11bGF0aW9uID0gY3VycmVudFNpbXVsYXRpb247XG4gICAgbGV0IGN1cnJlbnRTaW11bGF0aW9uVmlldyA9IG51bGw7XG4gICAgbGV0IGN1cnJlbnRHcmFwaCA9IG51bGw7XG4gICAgbGV0IGN1cnJlbnRHcmFwaFZpZXcgPSBudWxsO1xuICAgIGxldCBpbmZlY3Rpb25SYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZmVjdGlvbi1yYXRlJyk7XG4gICAgXG4gICAgbGV0IHN0YXJ0U2ltdWxhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpO1xuICAgIHN0YXJ0U2ltdWxhdGlvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjdXJyZW50U2ltdWxhdGlvbiA9IG5ldyBTaW11bGF0aW9uKGRlbnNpdHkudmFsdWUsIHNvY2lhbERpc3QudmFsdWUgLyAxMDAsIGN0eDEpO1xuICAgICAgICBjdXJyZW50U2ltdWxhdGlvblZpZXcgPSBuZXcgU2ltdWxhdGlvblZpZXcoY3VycmVudFNpbXVsYXRpb24sIGN0eDEpO1xuICAgICAgICBjdXJyZW50R3JhcGggPSBuZXcgR3JhcGggKGN1cnJlbnRTaW11bGF0aW9uLCBjdHgyKTtcbiAgICAgICAgY3VycmVudEdyYXBoVmlldyA9IG5ldyBHcmFwaFZpZXcoY3VycmVudEdyYXBoLCBjdXJyZW50U2ltdWxhdGlvbiwgY3R4Mik7XG4gICAgICAgIGN1cnJlbnRTaW11bGF0aW9uVmlldy5zdGFydCgpO1xuICAgICAgICBjdXJyZW50R3JhcGhWaWV3LnN0YXJ0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTaW11bGF0aW9uKTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudEdyYXBoKTtcbiAgICAgICAgLy8gaW5mZWN0ZWROdW1iZXIuaW5uZXJIVE1MID0gY3VycmVudFNpbXVsYXRpb24uaW5mZWN0aW9uTnVtYmVyO1xuICAgIH1cblxuICAgIC8vIGluZmVjdGlvblJhdGUuaW5uZXJIVE1MID0gY3VycmVudFNpbXVsYXRpb24uaW5mZWN0aW9uTnVtYmVyIHx8IDBcbiAgICBcbiAgICBcbiAgICBsZXQgc3RvcFNpbXVsYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RvcCcpO1xuICAgIHN0b3BTaW11bGF0aW9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN1cnJlbnRTaW11bGF0aW9uVmlldy5zdG9wKGN1cnJlbnRTaW11bGF0aW9uKTtcbiAgICAgICAgY3VycmVudEdyYXBoVmlldy5zdG9wKGN1cnJlbnRHcmFwaClcbiAgICB9XG4gICAgXG4gICAgbGV0IHMxID0gbmV3IFNpbXVsYXRpb24oZGVuc2l0eS52YWx1ZSwgc29jaWFsRGlzdC52YWx1ZSAvIDEwMCwgY3R4MSk7XG4gICAgY29uc29sZS5sb2coczEpO1xuXG4gICAgXG59KTsiLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBTaW11bGF0aW9uIGZyb20gJy4vc2ltdWxhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ09iamVjdCB7XG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVycykge1xuICAgIHRoaXMucG9zICA9IHBhcmFtZXRlcnMucG9zO1xuICAgIHRoaXMudmVsICA9IHBhcmFtZXRlcnMudmVsO1xuICAgIHRoaXMucmFkaXVzICA9IHBhcmFtZXRlcnMucmFkaXVzO1xuICAgIHRoaXMuY29sb3IgID0gcGFyYW1ldGVycy5jb2xvcjtcbiAgICB0aGlzLm1hc3MgPSBwYXJhbWV0ZXJzLm1hc3M7XG4gICAgdGhpcy5zaW11bGF0aW9uID0gcGFyYW1ldGVycy5zaW11bGF0aW9uO1xuICAgIH1cblxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIHRoaXMucG9zWzBdLFxuICAgICAgICAgICAgdGhpcy5wb3NbMV0sXG4gICAgICAgICAgICB0aGlzLnJhZGl1cyxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICApO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLnBvcyA9IFsodGhpcy5wb3NbMF0gKyB0aGlzLnZlbFswXSksICh0aGlzLnBvc1sxXSArIHRoaXMudmVsWzFdKV1cbiAgICAgICAgdGhpcy52ZWwgPSB0aGlzLnNpbXVsYXRpb24uYm91bmNlKHRoaXMucG9zLCB0aGlzLnZlbCk7XG4gICAgfTtcblxuICAgIGNoYW5nZURpcih2ZWwpIHtcbiAgICAgICAgXG4gICAgICAgIGlmIChNYXRoLmFicyh2ZWxbMF0pID4gTWF0aC5hYnModmVsWzFdKSkge1xuICAgICAgICAgICAgdmVsWzBdID0gLSB2ZWxbMF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZlbFsxXSA9IC0gdmVsWzFdXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB2ZWw7XG4gICAgfVxuICAgIFxuICAgIGlzQ29sbGlkZWRXaXRoKG90aGVyT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGNlbnRlckRpc3QgPSBVdGlsLmRpc3QodGhpcy5wb3MsIG90aGVyT2JqZWN0LnBvcyk7XG4gICAgICAgIGlmIChjZW50ZXJEaXN0IDwgKHRoaXMucmFkaXVzICsgb3RoZXJPYmplY3QucmFkaXVzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbi5yZW1vdmUodGhpcyk7XG4gICAgfVxuXG4gfVxuXG5cbiIsImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUUyA9IHtcbiAgICBSQURJVVM6IDIsXG4gICAgQ09MT1I6IFwibGlnaHRncmF5XCIsXG4gICAgU1BFRUQ6IDIsXG4gICAgTUFTUzogMVxufVxuXG5leHBvcnQgY2xhc3MgUGVyc29uIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzID0ge30pIHtcbiAgICAgICAgcGFyYW1ldGVycy5jb2xvciA9IERFRkFVTFRTLkNPTE9SO1xuICAgICAgICBwYXJhbWV0ZXJzLnJhZGl1cyA9IERFRkFVTFRTLlJBRElVUztcbiAgICAgICAgcGFyYW1ldGVycy5tYXNzID0gREVGQVVMVFMuTUFTUztcbiAgICAgICAgcGFyYW1ldGVycy5wb3MgPSBwYXJhbWV0ZXJzLnBvcyB8fCBwYXJhbWV0ZXJzLnNpbXVsYXRpb24ucmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgcGFyYW1ldGVycy52ZWwgPSBwYXJhbWV0ZXJzLnZlbCB8fCBVdGlsLnJhbmRvbVZlYyhERUZBVUxUUy5TUEVFRCk7XG4gICAgICAgIHBhcmFtZXRlcnMuY29uc2Npb3VzQ3RpemVuID0gZmFsc2U7XG4gICAgICAgIHBhcmFtZXRlcnMuaW5mZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgc3VwZXIocGFyYW1ldGVycyk7XG4gICAgfVxuXG59IiwiaW1wb3J0IHtQZXJzb24sIERFRkFVTFRTfSBmcm9tICcuL3BlcnNvbic7XG5pbXBvcnQge1V0aWx9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgU2ltdWxhdGlvblZpZXcgZnJvbSAnLi9zaW11bGF0aW9uX3ZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW11bGF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihkZW5zaXR5LCBzb2NpYWxEaXN0YW5jaW5nUmF0ZSwgY3R4KSB7XG4gICAgICAgIHRoaXMuRElNX1ggPSA2MDA7XG4gICAgICAgIHRoaXMuRElNX1kgPSA0MDA7XG4gICAgICAgIHRoaXMuTlVNX1BFUlNPTlMgPSAxMDA7XG4gICAgICAgIHRoaXMuZGVuc2l0eSA9IGRlbnNpdHk7XG4gICAgICAgIHRoaXMuc29jaWFsRGlzdGFuY2luZ1JhdGUgPSBzb2NpYWxEaXN0YW5jaW5nUmF0ZTtcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uSW5mZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wZXJzb25zID0gW107XG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbkludGVydmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbmZlY3Rpb25OdW1iZXIgPSAwO1xuICAgICAgICB0aGlzLmFkZFBlcnNvbnMoKTtcbiAgICAgICAgdGhpcy5hZGRQYXRpZW50WmVybygpO1xuICAgICAgICB0aGlzLmFkZENvbnNjaW91c0NpdGl6ZW4oKTtcbiAgICAgICAgdGhpcy5kcmF3KGN0eCk7XG4gICAgfVxuXG5cblxuICAgIGFkZFBlcnNvbnMoKSB7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMuZGVuc2l0eTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbnMucHVzaChuZXcgUGVyc29uKHtcbiAgICAgICAgICAgICAgICBwb3M6IHRoaXMucmFuZG9tUG9zaXRpb24oKSwgXG4gICAgICAgICAgICAgICAgdmVsOiBVdGlsLnJhbmRvbVZlYyhERUZBVUxUUy5TUEVFRCksIFxuICAgICAgICAgICAgICAgIHNpbXVsYXRpb246IHRoaXN9KSk7XG5cbiAgICAgICAgICAgIGlmIChpIT09MCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wZXJzb25zLmxlbmd0aC0xOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChVdGlsLmRpc3QodGhpcy5wZXJzb25zW2ldLnBvcywgdGhpcy5wZXJzb25zW2pdLnBvcykgLSBERUZBVUxUUy5SQURJVVMgKiAyKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc29uc1tpXS5wb3MgPSB0aGlzLnJhbmRvbVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBqPS0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkUGF0aWVudFplcm8oKSB7XG4gICAgICAgIHRoaXMucGVyc29uc1swXS5jb2xvciA9ICdyZWQnO1xuICAgICAgICB0aGlzLnBlcnNvbnNbMF0uaW5mZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmluZmVjdGlvbk51bWJlciA9KyAxO1xuICAgIH1cblxuICAgIGFkZENvbnNjaW91c0NpdGl6ZW4oKSB7XG4gICAgICAgIGZvciAobGV0IGk9MTsgaTx0aGlzLnBlcnNvbnMubGVuZ3RoICogdGhpcy5zb2NpYWxEaXN0YW5jaW5nUmF0ZSsxOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGVyc29uc1tpXS5jb25zY2lvdXNDaXRpemVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucGVyc29uc1tpXS52ZWwgPSBbMCwwXTtcbiAgICAgICAgICAgIHRoaXMucGVyc29uc1tpXS5jb2xvciA9ICdncmVlbic7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIFxuICAgIHJhbmRvbVBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCByYWQgPSBERUZBVUxUUy5SQURJVVM7XG4gICAgICAgIGxldCB4ID0gVXRpbC5yYW5kb21JbnRSYW5nZShyYWQsIHRoaXMuRElNX1ggLSByYWQpO1xuICAgICAgICBsZXQgeSA9IFV0aWwucmFuZG9tSW50UmFuZ2UocmFkLCB0aGlzLkRJTV9ZIC0gcmFkKTtcbiAgICAgICAgcmV0dXJuIFt4LHldO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5ESU1fWCwgdGhpcy5ESU1fWSk7XG4gICAgICAgIHRoaXMucGVyc29ucy5mb3JFYWNoKCBwZXJzb24gPT4gcGVyc29uLmRyYXcoY3R4KSk7XG4gICAgfVxuXG4gICAgbW92ZU9iamVjdHMoKSB7XG4gICAgICAgIHRoaXMucGVyc29ucy5mb3JFYWNoKChwZXJzb24pID0+IHtcbiAgICAgICAgICAgIHBlcnNvbi5tb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbW92ZU9iamVjdChvYmplY3QpIHtcbiAgICAgICAgdGhpcy5wZXJzb25zLnNwbGljZSh0aGlzLnBlcnNvbnMuaW5kZXhPZihvYmplY3QpLCAxKVxuICAgIH1cbiAgICBcblxuICAgIGNoZWNrQ29sbGlzaW9ucygpIHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMucGVyc29ucy5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqPWkrMTsgajx0aGlzLnBlcnNvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcGVyczEgPSB0aGlzLnBlcnNvbnNbaV07XG4gICAgICAgICAgICAgICAgbGV0IHBlcnMyID0gdGhpcy5wZXJzb25zW2pdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChwZXJzMS5pc0NvbGxpZGVkV2l0aChwZXJzMikpIHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbC5yZXNvbHZlQ29sbGlzaW9uKHBlcnMxLCBwZXJzMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGVyczEuY29sb3IgPT09ICdyZWQnICYmIHBlcnMyLmNvbG9yICE9PSAncmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGVyczIuY29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnMyLmluZmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5mZWN0aW9uTnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBlcnMyLmNvbG9yID09PSAncmVkJyAmJiBwZXJzMS5jb2xvciAhPT0gJ3JlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzMS5jb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnMxLmluZmVjdGVkID0gJ3RydWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5mZWN0aW9uTnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGJvdW5jZShwb3MsIHZlbCkge1xuICAgICAgICBsZXQgcmFkID0gREVGQVVMVFMuUkFESVVTXG4gICAgICAgIGlmIChwb3NbMF0tcmFkIDwgMCB8fCBwb3NbMF0rcmFkID4gdGhpcy5ESU1fWCkge1xuICAgICAgICAgICB2ZWxbMF0gPSAtIHZlbFswXSBcbiAgICAgICAgfSBlbHNlIGlmIChwb3NbMV0tcmFkIDwgMCB8fCBwb3NbMV0rcmFkID4gdGhpcy5ESU1fWSkge1xuICAgICAgICAgICAgdmVsWzFdID0gLSB2ZWxbMV1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmVsO1xuICAgIH1cblxuICAgIGhhbmRsZUluZmVjdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5mZWN0aW9uTnVtYmVyIC8gdGhpcy5kZW5zaXR5ID4gMC45OSkge1xuICAgICAgICAgICAgdGhpcy5wb3B1bGF0aW9uSW5mZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9ICAgXG4gICAgfVxuXG4gICAgc3RlcCgpIHtcblxuICAgICAgICB0aGlzLm1vdmVPYmplY3RzKCk7XG4gICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb25zKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlSW5mZWN0aW9uKCk7XG5cbiAgICB9XG5cbn1cblxuU2ltdWxhdGlvbi5ESU1fWCA9IDYwMDtcblNpbXVsYXRpb24uRElNX1kgPSA0MDA7XG5cbiIsIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXVsYXRpb25WaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihzaW11bGF0aW9uLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbiA9IHNpbXVsYXRpb247XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbi5zaW11bGF0aW9uSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNpbXVsYXRpb24uc3RlcCgpO1xuICAgICAgICAgICAgdGhpcy5zaW11bGF0aW9uLmRyYXcodGhpcy5jdHgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2ltdWxhdGlvbi5wb3B1bGF0aW9uSW5mZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuc2ltdWxhdGlvbi5zaW11bGF0aW9uSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RvcCh0aGlzLnNpbXVsYXRpb24pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIwKTtcblxuICAgICAgICBcbiAgICB9XG5cbiAgICBzdG9wKHNpbXVsYXRpb24pIHtcbiAgICAgICAgXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoc2ltdWxhdGlvbi5zaW11bGF0aW9uSW50ZXJ2YWwpO1xuICAgIH1cblxufSIsImV4cG9ydCBjb25zdCBVdGlsID0ge1xuICAgLy8gUmV0dXJuIGEgcmFuZG9tbHkgb3JpZW50ZWQgdmVjdG9yIHdpdGggdGhlIGdpdmVuIGxlbmd0aC5cbiAgIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICAgIGNvbnN0IGRlZyA9IDIgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcbiAgICAgIHJldHVybiBVdGlsLnNjYWxlKFtNYXRoLnNpbihkZWcpLCBNYXRoLmNvcyhkZWcpXSwgbGVuZ3RoKTtcbiAgIH0sXG4gICAvLyBTY2FsZSB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yIGJ5IHRoZSBnaXZlbiBhbW91bnQuXG4gICBzY2FsZSh2ZWMsIG0pIHtcbiAgICAgIHJldHVybiBbdmVjWzBdICogbSwgdmVjWzFdICogbV07XG4gICB9LFxuXG4gICBkaXN0KHBvczEsIHBvczIpIHtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICAgICBNYXRoLnBvdyhwb3MxWzBdIC0gcG9zMlswXSwgMikgKyBNYXRoLnBvdyhwb3MxWzFdIC0gcG9zMlsxXSwgMilcbiAgICAgIClcbiAgIH0sXG4gICBcbiAgIHJhbmRvbUludFJhbmdlKG1pbiwgbWF4KSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgIH0sXG5cbiAgIHJvdGF0ZSh2ZWxvY2l0eSwgYW5nbGUpIHtcbiAgICAgIGNvbnN0IHJvdGF0ZWRWZWxvY2l0aWVzID0ge1xuICAgICAgICAgeDogdmVsb2NpdHlbMF0gKiBNYXRoLmNvcyhhbmdsZSkgLSB2ZWxvY2l0eVsxXSAqIE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgIHk6IHZlbG9jaXR5WzBdICogTWF0aC5zaW4oYW5nbGUpICsgdmVsb2NpdHlbMV0gKiBNYXRoLmNvcyhhbmdsZSlcbiAgICAgIH1cbiAgICAgIHJldHVybiByb3RhdGVkVmVsb2NpdGllcztcbiAgIH0sXG5cbiAgIHJlc29sdmVDb2xsaXNpb24ocGVycywgb3RoZXJQZXJzKSB7XG5cbiAgICAgIGNvbnN0IHhWZWxEaWZmID0gcGVycy52ZWxbMF0gLSBvdGhlclBlcnMudmVsWzBdO1xuICAgICAgY29uc3QgeVZlbERpZmYgPSBwZXJzLnZlbFsxXSAtIG90aGVyUGVycy52ZWxbMV07XG5cblxuICAgICAgY29uc3QgeERpc3QgPSBvdGhlclBlcnMucG9zWzBdIC0gcGVycy5wb3NbMF07XG4gICAgICBjb25zdCB5RGlzdCA9IG90aGVyUGVycy5wb3NbMV0gLSBwZXJzLnBvc1sxXTtcblxuICAgICAgLy8gUHJldmVudCBhY2NpZGVudGFsIG92ZXJsYXAgb2YgcGVyc1xuICAgICAgaWYgKHhWZWxEaWZmICogeERpc3QgKyB5VmVsRGlmZiAqIHlEaXN0ID49IDApIHtcblxuICAgICAgICAgcGVycy52ZWwgPSBwZXJzLmNoYW5nZURpcihwZXJzLnZlbCk7XG4gICAgICAgICBvdGhlclBlcnMudmVsID0gb3RoZXJQZXJzLmNoYW5nZURpcihvdGhlclBlcnMudmVsKTtcbiAgICAgICAgIFxuICAgICAgfVxuICAgfVxuICAgXG59Il0sInNvdXJjZVJvb3QiOiIifQ==