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
  SPEED: 4,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoX3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb3Zpbmdfb2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wZXJzb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpbXVsYXRpb25fdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJHUkFQSF9ERUZBVUxUUyIsIldJRFRIIiwiQ09MT1IiLCJDb2x1bW4iLCJwb3MiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJHcmFwaCIsInNpbXVsYXRpb24iLCJESU1fWCIsIkRJTV9ZIiwiY29sdW1uV2lkdGgiLCJYUGFyYW1ldGVyIiwiY29sdW1ucyIsImdyYXBoSW50ZXJ2YWwiLCJwb3B1bGF0aW9uSW5mZWN0ZWQiLCJkcmF3IiwibmV3Q29sdW1uIiwiZGVuc2l0eSIsImluZmVjdGlvbk51bWJlciIsInB1c2giLCJyZXNpemUiLCJjbGVhclJlY3QiLCJmb3JFYWNoIiwiY29sdW1uIiwiYWRkQ29sdW1uIiwiR3JhcGhWaWV3IiwiZ3JhcGgiLCJzZXRJbnRlcnZhbCIsInN0ZXAiLCJjbGVhckludGVydmFsIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWwxIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjYW52YXNFbDIiLCJTaW11bGF0aW9uIiwiY3R4MSIsImdldENvbnRleHQiLCJjdHgyIiwid2luZG93IiwiU2ltdWxhdGlvblZpZXciLCJpbmZlY3RlZE51bWJlciIsImdldEVsZW1lbnRCeUlkIiwib3V0cHV0RGVuc2l0eSIsImlubmVySFRNTCIsInZhbHVlIiwib25pbnB1dCIsInMxIiwic29jaWFsRGlzdCIsImNvbnNvbGUiLCJsb2ciLCJvdXRwdXRTb2NpYWxEaXN0IiwiY3VycmVudFNpbXVsYXRpb24iLCJjdXJyZW50U2ltdWxhdGlvblZpZXciLCJjdXJyZW50R3JhcGgiLCJjdXJyZW50R3JhcGhWaWV3IiwiaW5mZWN0aW9uUmF0ZSIsInN0YXJ0U2ltdWxhdGlvbiIsIm9uY2xpY2siLCJzdGFydCIsInN0b3BTaW11bGF0aW9uIiwic3RvcCIsIk1vdmluZ09iamVjdCIsInBhcmFtZXRlcnMiLCJ2ZWwiLCJyYWRpdXMiLCJtYXNzIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsImJvdW5jZSIsImFicyIsIm90aGVyT2JqZWN0IiwiY2VudGVyRGlzdCIsIlV0aWwiLCJkaXN0IiwicmVtb3ZlIiwiREVGQVVMVFMiLCJSQURJVVMiLCJTUEVFRCIsIk1BU1MiLCJQZXJzb24iLCJyYW5kb21Qb3NpdGlvbiIsInJhbmRvbVZlYyIsImNvbnNjaW91c0N0aXplbiIsImluZmVjdGVkIiwic29jaWFsRGlzdGFuY2luZ1JhdGUiLCJOVU1fUEVSU09OUyIsInBlcnNvbnMiLCJzaW11bGF0aW9uSW50ZXJ2YWwiLCJhZGRQZXJzb25zIiwiYWRkUGF0aWVudFplcm8iLCJhZGRDb25zY2lvdXNDaXRpemVuIiwiaSIsImoiLCJsZW5ndGgiLCJjb25zY2lvdXNDaXRpemVuIiwicmFkIiwieCIsInJhbmRvbUludFJhbmdlIiwieSIsInBlcnNvbiIsIm1vdmUiLCJvYmplY3QiLCJzcGxpY2UiLCJpbmRleE9mIiwicGVyczEiLCJwZXJzMiIsImlzQ29sbGlkZWRXaXRoIiwicmVzb2x2ZUNvbGxpc2lvbiIsIm1vdmVPYmplY3RzIiwiY2hlY2tDb2xsaXNpb25zIiwiaGFuZGxlSW5mZWN0aW9uIiwiZGVnIiwicmFuZG9tIiwic2NhbGUiLCJzaW4iLCJjb3MiLCJ2ZWMiLCJtIiwicG9zMSIsInBvczIiLCJzcXJ0IiwicG93IiwibWluIiwibWF4IiwiZmxvb3IiLCJyb3RhdGUiLCJ2ZWxvY2l0eSIsImFuZ2xlIiwicm90YXRlZFZlbG9jaXRpZXMiLCJwZXJzIiwib3RoZXJQZXJzIiwieFZlbERpZmYiLCJ5VmVsRGlmZiIsInhEaXN0IiwieURpc3QiLCJjaGFuZ2VEaXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRk8sSUFBTUEsY0FBYyxHQUFHO0FBQzFCQyxPQUFLLEVBQUUsQ0FEbUI7QUFFMUJDLE9BQUssRUFBRTtBQUZtQixDQUF2QjtBQU1BLElBQU1DLE1BQWI7QUFDSSxrQkFBWUMsR0FBWixFQUFpQkMsS0FBakIsRUFBd0JDLE1BQXhCLEVBQWdDO0FBQUE7O0FBQzVCLFNBQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYVAsY0FBYyxDQUFDRSxLQUE1QjtBQUNIOztBQU5MO0FBQUE7QUFBQSx5QkFRU00sR0FSVCxFQVFjO0FBQ05BLFNBQUcsQ0FBQ0MsU0FBSixHQUFnQlQsY0FBYyxDQUFDRSxLQUEvQjtBQUNBTSxTQUFHLENBQUNFLFFBQUosQ0FDSSxLQUFLTixHQUFMLENBQVMsQ0FBVCxDQURKLEVBRUksS0FBS0EsR0FBTCxDQUFTLENBQVQsQ0FGSixFQUdJLEtBQUtDLEtBSFQsRUFJSSxLQUFLQyxNQUpUO0FBTUg7QUFoQkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTs7SUFFcUJLLEs7QUFDakIsaUJBQVlDLFVBQVosRUFBd0JKLEdBQXhCLEVBQTZCO0FBQUE7O0FBQ3pCLFNBQUtLLEtBQUwsR0FBYSxHQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEdBQWI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CZixzREFBYyxDQUFDQyxLQUFsQztBQUNBLFNBQUtlLFVBQUwsR0FBa0JoQixzREFBYyxDQUFDQyxLQUFmLEdBQXVCLENBQXpDO0FBQ0EsU0FBS08sR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS1MsT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsU0FBS04sVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLTyxrQkFBTCxHQUEwQixLQUFLUCxVQUFMLENBQWdCTyxrQkFBMUM7QUFDQSxTQUFLQyxJQUFMLENBQVVaLEdBQVY7QUFFSDs7OztnQ0FFVztBQUNSLFVBQUlhLFNBQVMsR0FBRyxJQUFJbEIsOENBQUosQ0FDWixDQUFDLEtBQUthLFVBQU4sRUFBa0IsS0FBS0YsS0FBdkIsQ0FEWSxFQUVaLEtBQUtDLFdBRk8sRUFHWixFQUFHLEtBQUtELEtBQUwsR0FBYSxLQUFLRixVQUFMLENBQWdCVSxPQUE5QixHQUF5QyxLQUFLVixVQUFMLENBQWdCVyxlQUEzRCxDQUhZLENBQWhCO0FBTUksV0FBS04sT0FBTCxDQUFhTyxJQUFiLENBQWtCSCxTQUFsQjtBQUNBLFdBQUtMLFVBQUwsSUFBbUIsS0FBS0QsV0FBeEI7O0FBQ0EsVUFBSSxLQUFLQyxVQUFMLElBQW1CLEtBQUtILEtBQTVCLEVBQW1DO0FBQy9CLGFBQUtZLE1BQUw7QUFDSDtBQUNKOzs7eUJBRUlqQixHLEVBQUs7QUFDTkEsU0FBRyxDQUFDa0IsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsS0FBS2IsS0FBekIsRUFBZ0MsS0FBS0MsS0FBckM7QUFDSixXQUFLRyxPQUFMLENBQWFVLE9BQWIsQ0FBcUIsVUFBQUMsTUFBTTtBQUFBLGVBQUlBLE1BQU0sQ0FBQ1IsSUFBUCxDQUFZWixHQUFaLENBQUo7QUFBQSxPQUEzQjtBQUNDOzs7NkJBRVE7QUFBQTs7QUFDTCxXQUFLTyxXQUFMLElBQW9CLENBQXBCO0FBQ0EsV0FBS0MsVUFBTCxHQUFrQixLQUFLRCxXQUFMLEdBQW1CLENBQXJDO0FBQ0EsV0FBS0UsT0FBTCxDQUFhVSxPQUFiLENBQXNCLFVBQUFDLE1BQU0sRUFBSTtBQUM1QkEsY0FBTSxDQUFDeEIsR0FBUCxDQUFXLENBQVgsSUFBZ0IsS0FBSSxDQUFDWSxVQUFyQjtBQUNBWSxjQUFNLENBQUN2QixLQUFQLEdBQWUsS0FBSSxDQUFDVSxXQUFwQjtBQUNBLGFBQUksQ0FBQ0MsVUFBTCxJQUFtQixLQUFJLENBQUNELFdBQXhCO0FBQ0gsT0FKRDtBQU1BLFdBQUtLLElBQUwsQ0FBVSxLQUFLWixHQUFmO0FBQ0g7OzsyQkFFRTtBQUNILFdBQUtxQixTQUFMO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDaERnQkMsUztBQUNqQixxQkFBYUMsS0FBYixFQUFvQm5CLFVBQXBCLEVBQWdDSixHQUFoQyxFQUFxQztBQUFBOztBQUNqQyxTQUFLdUIsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS25CLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0osR0FBTCxHQUFXQSxHQUFYO0FBQ0g7Ozs7NEJBRU87QUFBQTs7QUFDSixXQUFLdUIsS0FBTCxDQUFXYixhQUFYLEdBQTJCYyxXQUFXLENBQUMsWUFBTTtBQUN6QyxhQUFJLENBQUNELEtBQUwsQ0FBV0UsSUFBWDs7QUFDQSxhQUFJLENBQUNGLEtBQUwsQ0FBV1gsSUFBWCxDQUFnQixLQUFJLENBQUNaLEdBQXJCOztBQUNBLFlBQUksS0FBSSxDQUFDSSxVQUFMLENBQWdCTyxrQkFBcEIsRUFBd0M7QUFDcENlLHVCQUFhLENBQUMsS0FBSSxDQUFDSCxLQUFMLENBQVdiLGFBQVosQ0FBYixDQURvQyxDQUVwQztBQUNIO0FBQ0osT0FQcUMsRUFPbkMsRUFQbUMsQ0FBdEM7QUFTSDs7O3lCQUVJYSxLLEVBQU87QUFFUkcsbUJBQWEsQ0FBQ0gsS0FBSyxDQUFDYixhQUFQLENBQWI7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUFpQixRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELE1BQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxvQkFBVCxDQUE4QixRQUE5QixFQUF3QyxDQUF4QyxDQUFsQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0osUUFBUSxDQUFDRyxvQkFBVCxDQUE4QixRQUE5QixFQUF3QyxDQUF4QyxDQUFsQjtBQUVBRCxXQUFTLENBQUNoQyxLQUFWLEdBQWtCbUMsbURBQVUsQ0FBQzNCLEtBQTdCO0FBQ0F3QixXQUFTLENBQUMvQixNQUFWLEdBQW1Ca0MsbURBQVUsQ0FBQzFCLEtBQTlCO0FBQ0EsTUFBTTJCLElBQUksR0FBR0osU0FBUyxDQUFDSyxVQUFWLENBQXFCLElBQXJCLENBQWI7QUFFQUgsV0FBUyxDQUFDbEMsS0FBVixHQUFrQm1DLG1EQUFVLENBQUMzQixLQUE3QjtBQUNBMEIsV0FBUyxDQUFDakMsTUFBVixHQUFtQmtDLG1EQUFVLENBQUMxQixLQUFYLEdBQW1CLENBQXRDO0FBQ0EsTUFBTTZCLElBQUksR0FBR0osU0FBUyxDQUFDRyxVQUFWLENBQXFCLElBQXJCLENBQWI7QUFJQUUsUUFBTSxDQUFDSixVQUFQLEdBQW9CQSxtREFBcEI7QUFDQUksUUFBTSxDQUFDQyxjQUFQLEdBQXdCQSx3REFBeEI7QUFDQUQsUUFBTSxDQUFDakMsS0FBUCxHQUFlQSw4Q0FBZjtBQUNBaUMsUUFBTSxDQUFDZCxTQUFQLEdBQW1CQSxtREFBbkI7QUFHQSxNQUFJZ0IsY0FBYyxHQUFHWCxRQUFRLENBQUNZLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXJCO0FBR0EsTUFBSXpCLE9BQU8sR0FBR2EsUUFBUSxDQUFDWSxjQUFULENBQXdCLGtCQUF4QixDQUFkO0FBQ0EsTUFBSUMsYUFBYSxHQUFHYixRQUFRLENBQUNZLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBcEI7QUFFQUMsZUFBYSxDQUFDQyxTQUFkLEdBQTBCM0IsT0FBTyxDQUFDNEIsS0FBbEM7O0FBRUE1QixTQUFPLENBQUM2QixPQUFSLEdBQWtCLFlBQVk7QUFFMUJILGlCQUFhLENBQUNDLFNBQWQsR0FBMEIsS0FBS0MsS0FBL0I7QUFDQSxRQUFJRSxFQUFFLEdBQUcsSUFBSVosbURBQUosQ0FBZSxLQUFLVSxLQUFwQixFQUEyQkcsVUFBVSxDQUFDSCxLQUFYLEdBQW1CLEdBQTlDLEVBQW1EVCxJQUFuRCxDQUFUO0FBQ0gsR0FKRDs7QUFLQWEsU0FBTyxDQUFDQyxHQUFSLENBQVlqQyxPQUFPLENBQUM0QixLQUFwQjtBQUVBLE1BQUlHLFVBQVUsR0FBR2xCLFFBQVEsQ0FBQ1ksY0FBVCxDQUF3QixpQkFBeEIsQ0FBakI7QUFDQSxNQUFJUyxnQkFBZ0IsR0FBR3JCLFFBQVEsQ0FBQ1ksY0FBVCxDQUF3QixjQUF4QixDQUF2QjtBQUVBUyxrQkFBZ0IsQ0FBQ1AsU0FBakIsR0FBNkJJLFVBQVUsQ0FBQ0gsS0FBeEM7O0FBRUFHLFlBQVUsQ0FBQ0YsT0FBWCxHQUFxQixZQUFZO0FBQzdCSyxvQkFBZ0IsQ0FBQ1AsU0FBakIsR0FBNkIsS0FBS0MsS0FBbEM7QUFDQSxRQUFJRSxFQUFFLEdBQUcsSUFBSVosbURBQUosQ0FBZWxCLE9BQU8sQ0FBQzRCLEtBQXZCLEVBQThCLEtBQUtBLEtBQUwsR0FBYSxHQUEzQyxFQUFnRFQsSUFBaEQsQ0FBVDtBQUNBLFdBQU9XLEVBQVA7QUFDSCxHQUpEOztBQUtBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBVSxDQUFDSCxLQUF2QjtBQUVBLE1BQUlPLGlCQUFpQixHQUFHLElBQXhCO0FBQ0FiLFFBQU0sQ0FBQ2EsaUJBQVAsR0FBMkJBLGlCQUEzQjtBQUNBLE1BQUlDLHFCQUFxQixHQUFHLElBQTVCO0FBQ0EsTUFBSUMsWUFBWSxHQUFHLElBQW5CO0FBQ0EsTUFBSUMsZ0JBQWdCLEdBQUcsSUFBdkI7QUFDQSxNQUFJQyxhQUFhLEdBQUcxQixRQUFRLENBQUNZLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQXBCO0FBRUEsTUFBSWUsZUFBZSxHQUFHM0IsUUFBUSxDQUFDWSxjQUFULENBQXdCLE9BQXhCLENBQXRCOztBQUNBZSxpQkFBZSxDQUFDQyxPQUFoQixHQUEwQixZQUFZO0FBQ2xDTixxQkFBaUIsR0FBRyxJQUFJakIsbURBQUosQ0FBZWxCLE9BQU8sQ0FBQzRCLEtBQXZCLEVBQThCRyxVQUFVLENBQUNILEtBQVgsR0FBbUIsR0FBakQsRUFBc0RULElBQXRELENBQXBCO0FBQ0FpQix5QkFBcUIsR0FBRyxJQUFJYix3REFBSixDQUFtQlksaUJBQW5CLEVBQXNDaEIsSUFBdEMsQ0FBeEI7QUFDQWtCLGdCQUFZLEdBQUcsSUFBSWhELDhDQUFKLENBQVc4QyxpQkFBWCxFQUE4QmQsSUFBOUIsQ0FBZjtBQUNBaUIsb0JBQWdCLEdBQUcsSUFBSTlCLG1EQUFKLENBQWM2QixZQUFkLEVBQTRCRixpQkFBNUIsRUFBK0NkLElBQS9DLENBQW5CO0FBQ0FlLHlCQUFxQixDQUFDTSxLQUF0QjtBQUNBSixvQkFBZ0IsQ0FBQ0ksS0FBakI7QUFDQVYsV0FBTyxDQUFDQyxHQUFSLENBQVlFLGlCQUFaO0FBQ0FILFdBQU8sQ0FBQ0MsR0FBUixDQUFZSSxZQUFaLEVBUmtDLENBU2xDO0FBQ0gsR0FWRCxDQXZEc0QsQ0FtRXREOzs7QUFHQSxNQUFJTSxjQUFjLEdBQUc5QixRQUFRLENBQUNZLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBckI7O0FBQ0FrQixnQkFBYyxDQUFDRixPQUFmLEdBQXlCLFlBQVk7QUFDakNMLHlCQUFxQixDQUFDUSxJQUF0QixDQUEyQlQsaUJBQTNCO0FBQ0FHLG9CQUFnQixDQUFDTSxJQUFqQixDQUFzQlAsWUFBdEI7QUFDSCxHQUhEOztBQUtBLE1BQUlQLEVBQUUsR0FBRyxJQUFJWixtREFBSixDQUFlbEIsT0FBTyxDQUFDNEIsS0FBdkIsRUFBOEJHLFVBQVUsQ0FBQ0gsS0FBWCxHQUFtQixHQUFqRCxFQUFzRFQsSUFBdEQsQ0FBVDtBQUNBYSxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsRUFBWjtBQUdILENBaEZELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOztJQUVxQmUsWTtBQUNqQix3QkFBWUMsVUFBWixFQUF3QjtBQUFBOztBQUN4QixTQUFLaEUsR0FBTCxHQUFZZ0UsVUFBVSxDQUFDaEUsR0FBdkI7QUFDQSxTQUFLaUUsR0FBTCxHQUFZRCxVQUFVLENBQUNDLEdBQXZCO0FBQ0EsU0FBS0MsTUFBTCxHQUFlRixVQUFVLENBQUNFLE1BQTFCO0FBQ0EsU0FBSy9ELEtBQUwsR0FBYzZELFVBQVUsQ0FBQzdELEtBQXpCO0FBQ0EsU0FBS2dFLElBQUwsR0FBWUgsVUFBVSxDQUFDRyxJQUF2QjtBQUNBLFNBQUszRCxVQUFMLEdBQWtCd0QsVUFBVSxDQUFDeEQsVUFBN0I7QUFDQzs7Ozt5QkFHSUosRyxFQUFLO0FBQ05BLFNBQUcsQ0FBQ0MsU0FBSixHQUFnQixLQUFLRixLQUFyQjtBQUNBQyxTQUFHLENBQUNnRSxTQUFKO0FBQ0FoRSxTQUFHLENBQUNpRSxHQUFKLENBQ0ksS0FBS3JFLEdBQUwsQ0FBUyxDQUFULENBREosRUFFSSxLQUFLQSxHQUFMLENBQVMsQ0FBVCxDQUZKLEVBR0ksS0FBS2tFLE1BSFQsRUFJSSxDQUpKLEVBS0ksSUFBSUksSUFBSSxDQUFDQyxFQUxiO0FBT0FuRSxTQUFHLENBQUNvRSxJQUFKO0FBQ0Y7OzsyQkFFSztBQUNILFdBQUt4RSxHQUFMLEdBQVcsQ0FBRSxLQUFLQSxHQUFMLENBQVMsQ0FBVCxJQUFjLEtBQUtpRSxHQUFMLENBQVMsQ0FBVCxDQUFoQixFQUErQixLQUFLakUsR0FBTCxDQUFTLENBQVQsSUFBYyxLQUFLaUUsR0FBTCxDQUFTLENBQVQsQ0FBN0MsQ0FBWDtBQUNBLFdBQUtBLEdBQUwsR0FBVyxLQUFLekQsVUFBTCxDQUFnQmlFLE1BQWhCLENBQXVCLEtBQUt6RSxHQUE1QixFQUFpQyxLQUFLaUUsR0FBdEMsQ0FBWDtBQUNIOzs7OEJBRVNBLEcsRUFBSztBQUVYLFVBQUlLLElBQUksQ0FBQ0ksR0FBTCxDQUFTVCxHQUFHLENBQUMsQ0FBRCxDQUFaLElBQW1CSyxJQUFJLENBQUNJLEdBQUwsQ0FBU1QsR0FBRyxDQUFDLENBQUQsQ0FBWixDQUF2QixFQUF5QztBQUNyQ0EsV0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBQUVBLEdBQUcsQ0FBQyxDQUFELENBQWQ7QUFDSCxPQUZELE1BRU87QUFDSEEsV0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLENBQUVBLEdBQUcsQ0FBQyxDQUFELENBQWQ7QUFDSDs7QUFFRCxhQUFPQSxHQUFQO0FBQ0g7OzttQ0FFY1UsVyxFQUFhO0FBQ3hCLFVBQU1DLFVBQVUsR0FBR0MsMENBQUksQ0FBQ0MsSUFBTCxDQUFVLEtBQUs5RSxHQUFmLEVBQW9CMkUsV0FBVyxDQUFDM0UsR0FBaEMsQ0FBbkI7O0FBQ0EsVUFBSTRFLFVBQVUsR0FBSSxLQUFLVixNQUFMLEdBQWNTLFdBQVcsQ0FBQ1QsTUFBNUMsRUFBcUQ7QUFDakQsZUFBTyxJQUFQO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsZUFBTyxLQUFQO0FBQ0g7O0FBQUE7QUFFSjs7OzZCQUVRO0FBQ0wsV0FBSzFELFVBQUwsQ0FBZ0J1RSxNQUFoQixDQUF1QixJQUF2QjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZETDtBQUNBO0FBRU8sSUFBTUMsUUFBUSxHQUFHO0FBQ3BCQyxRQUFNLEVBQUUsQ0FEWTtBQUVwQm5GLE9BQUssRUFBRSxXQUZhO0FBR3BCb0YsT0FBSyxFQUFFLENBSGE7QUFJcEJDLE1BQUksRUFBRTtBQUpjLENBQWpCO0FBT0EsSUFBTUMsTUFBYjtBQUFBOztBQUFBOztBQUNJLG9CQUE2QjtBQUFBLFFBQWpCcEIsVUFBaUIsdUVBQUosRUFBSTs7QUFBQTs7QUFDekJBLGNBQVUsQ0FBQzdELEtBQVgsR0FBbUI2RSxRQUFRLENBQUNsRixLQUE1QjtBQUNBa0UsY0FBVSxDQUFDRSxNQUFYLEdBQW9CYyxRQUFRLENBQUNDLE1BQTdCO0FBQ0FqQixjQUFVLENBQUNHLElBQVgsR0FBa0JhLFFBQVEsQ0FBQ0csSUFBM0I7QUFDQW5CLGNBQVUsQ0FBQ2hFLEdBQVgsR0FBaUJnRSxVQUFVLENBQUNoRSxHQUFYLElBQWtCZ0UsVUFBVSxDQUFDeEQsVUFBWCxDQUFzQjZFLGNBQXRCLEVBQW5DO0FBQ0FyQixjQUFVLENBQUNDLEdBQVgsR0FBaUJELFVBQVUsQ0FBQ0MsR0FBWCxJQUFrQlksMENBQUksQ0FBQ1MsU0FBTCxDQUFlTixRQUFRLENBQUNFLEtBQXhCLENBQW5DO0FBQ0FsQixjQUFVLENBQUN1QixlQUFYLEdBQTZCLEtBQTdCO0FBQ0F2QixjQUFVLENBQUN3QixRQUFYLEdBQXNCLEtBQXRCO0FBUHlCLDZCQVFuQnhCLFVBUm1CO0FBUzVCOztBQVZMO0FBQUEsRUFBNEJELHNEQUE1QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTs7SUFFcUIzQixVO0FBQ2pCLHNCQUFZbEIsT0FBWixFQUFxQnVFLG9CQUFyQixFQUEyQ3JGLEdBQTNDLEVBQWdEO0FBQUE7O0FBQzVDLFNBQUtLLEtBQUwsR0FBYSxHQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEdBQWI7QUFDQSxTQUFLZ0YsV0FBTCxHQUFtQixHQUFuQjtBQUNBLFNBQUt4RSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLdUUsb0JBQUwsR0FBNEJBLG9CQUE1QjtBQUNBLFNBQUsxRSxrQkFBTCxHQUEwQixLQUExQjtBQUNBLFNBQUs0RSxPQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCLElBQTFCO0FBQ0EsU0FBS3pFLGVBQUwsR0FBdUIsQ0FBdkI7QUFDQSxTQUFLMEUsVUFBTDtBQUNBLFNBQUtDLGNBQUw7QUFDQSxTQUFLQyxtQkFBTDtBQUNBLFNBQUsvRSxJQUFMLENBQVVaLEdBQVY7QUFDSDs7OztpQ0FJWTtBQUNULFdBQUksSUFBSTRGLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQyxLQUFLOUUsT0FBcEIsRUFBNkI4RSxDQUFDLEVBQTlCLEVBQWtDO0FBQzlCLGFBQUtMLE9BQUwsQ0FBYXZFLElBQWIsQ0FBa0IsSUFBSWdFLDhDQUFKLENBQVc7QUFDekJwRixhQUFHLEVBQUUsS0FBS3FGLGNBQUwsRUFEb0I7QUFFekJwQixhQUFHLEVBQUVZLDBDQUFJLENBQUNTLFNBQUwsQ0FBZU4sZ0RBQVEsQ0FBQ0UsS0FBeEIsQ0FGb0I7QUFHekIxRSxvQkFBVSxFQUFFO0FBSGEsU0FBWCxDQUFsQjs7QUFLQSxZQUFJd0YsQ0FBQyxLQUFHLENBQVIsRUFBVztBQUNQLGVBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLTixPQUFMLENBQWFPLE1BQWIsR0FBb0IsQ0FBeEMsRUFBMkNELENBQUMsRUFBNUMsRUFBZ0Q7QUFDNUMsZ0JBQUtwQiwwQ0FBSSxDQUFDQyxJQUFMLENBQVUsS0FBS2EsT0FBTCxDQUFhSyxDQUFiLEVBQWdCaEcsR0FBMUIsRUFBK0IsS0FBSzJGLE9BQUwsQ0FBYU0sQ0FBYixFQUFnQmpHLEdBQS9DLElBQXNEZ0YsZ0RBQVEsQ0FBQ0MsTUFBVCxHQUFrQixDQUF6RSxHQUE4RSxDQUFsRixFQUFxRjtBQUNqRixtQkFBS1UsT0FBTCxDQUFhSyxDQUFiLEVBQWdCaEcsR0FBaEIsR0FBc0IsS0FBS3FGLGNBQUwsRUFBdEI7QUFDQVksZUFBQyxHQUFDLENBQUMsQ0FBSDtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ0o7OztxQ0FFZ0I7QUFDYixXQUFLTixPQUFMLENBQWEsQ0FBYixFQUFnQnhGLEtBQWhCLEdBQXdCLEtBQXhCO0FBQ0EsV0FBS3dGLE9BQUwsQ0FBYSxDQUFiLEVBQWdCSCxRQUFoQixHQUEyQixJQUEzQjtBQUNBLFdBQUtyRSxlQUFMLEdBQXNCLENBQUUsQ0FBeEI7QUFDSDs7OzBDQUVxQjtBQUNsQixXQUFLLElBQUk2RSxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUMsS0FBS0wsT0FBTCxDQUFhTyxNQUFiLEdBQXNCLEtBQUtULG9CQUEzQixHQUFnRCxDQUFoRSxFQUFtRU8sQ0FBQyxFQUFwRSxFQUF3RTtBQUNwRSxhQUFLTCxPQUFMLENBQWFLLENBQWIsRUFBZ0JHLGdCQUFoQixHQUFtQyxJQUFuQztBQUNBLGFBQUtSLE9BQUwsQ0FBYUssQ0FBYixFQUFnQi9CLEdBQWhCLEdBQXNCLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBdEI7QUFDQSxhQUFLMEIsT0FBTCxDQUFhSyxDQUFiLEVBQWdCN0YsS0FBaEIsR0FBd0IsT0FBeEI7QUFDSDtBQUNKOzs7cUNBSWdCO0FBQ2IsVUFBTWlHLEdBQUcsR0FBR3BCLGdEQUFRLENBQUNDLE1BQXJCO0FBQ0EsVUFBSW9CLENBQUMsR0FBR3hCLDBDQUFJLENBQUN5QixjQUFMLENBQW9CRixHQUFwQixFQUF5QixLQUFLM0YsS0FBTCxHQUFhMkYsR0FBdEMsQ0FBUjtBQUNBLFVBQUlHLENBQUMsR0FBRzFCLDBDQUFJLENBQUN5QixjQUFMLENBQW9CRixHQUFwQixFQUF5QixLQUFLMUYsS0FBTCxHQUFhMEYsR0FBdEMsQ0FBUjtBQUNBLGFBQU8sQ0FBQ0MsQ0FBRCxFQUFHRSxDQUFILENBQVA7QUFDSDs7O3lCQUVJbkcsRyxFQUFLO0FBQ05BLFNBQUcsQ0FBQ2tCLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLEtBQUtiLEtBQXpCLEVBQWdDLEtBQUtDLEtBQXJDO0FBQ0EsV0FBS2lGLE9BQUwsQ0FBYXBFLE9BQWIsQ0FBc0IsVUFBQWlGLE1BQU07QUFBQSxlQUFJQSxNQUFNLENBQUN4RixJQUFQLENBQVlaLEdBQVosQ0FBSjtBQUFBLE9BQTVCO0FBQ0g7OztrQ0FFYTtBQUNWLFdBQUt1RixPQUFMLENBQWFwRSxPQUFiLENBQXFCLFVBQUNpRixNQUFELEVBQVk7QUFDN0JBLGNBQU0sQ0FBQ0MsSUFBUDtBQUNILE9BRkQ7QUFHSDs7O2lDQUVZQyxNLEVBQVE7QUFDakIsV0FBS2YsT0FBTCxDQUFhZ0IsTUFBYixDQUFvQixLQUFLaEIsT0FBTCxDQUFhaUIsT0FBYixDQUFxQkYsTUFBckIsQ0FBcEIsRUFBa0QsQ0FBbEQ7QUFDSDs7O3NDQUdpQjtBQUNkLFdBQUssSUFBSVYsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDLEtBQUtMLE9BQUwsQ0FBYU8sTUFBN0IsRUFBb0NGLENBQUMsRUFBckMsRUFBeUM7QUFDckMsYUFBSyxJQUFJQyxDQUFDLEdBQUNELENBQUMsR0FBQyxDQUFiLEVBQWdCQyxDQUFDLEdBQUMsS0FBS04sT0FBTCxDQUFhTyxNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUE0QztBQUN4QyxjQUFJWSxLQUFLLEdBQUcsS0FBS2xCLE9BQUwsQ0FBYUssQ0FBYixDQUFaO0FBQ0EsY0FBSWMsS0FBSyxHQUFHLEtBQUtuQixPQUFMLENBQWFNLENBQWIsQ0FBWjs7QUFFQSxjQUFJWSxLQUFLLENBQUNFLGNBQU4sQ0FBcUJELEtBQXJCLENBQUosRUFBaUM7QUFFekJqQyxzREFBSSxDQUFDbUMsZ0JBQUwsQ0FBc0JILEtBQXRCLEVBQTZCQyxLQUE3Qjs7QUFDQSxnQkFBSUQsS0FBSyxDQUFDMUcsS0FBTixLQUFnQixLQUFoQixJQUF5QjJHLEtBQUssQ0FBQzNHLEtBQU4sS0FBZ0IsS0FBN0MsRUFBb0Q7QUFDcEQyRyxtQkFBSyxDQUFDM0csS0FBTixHQUFjLEtBQWQ7QUFDQTJHLG1CQUFLLENBQUN0QixRQUFOLEdBQWlCLElBQWpCO0FBQ0EsbUJBQUtyRSxlQUFMLElBQXdCLENBQXhCO0FBQ0MsYUFKRCxNQUlPLElBQUkyRixLQUFLLENBQUMzRyxLQUFOLEtBQWdCLEtBQWhCLElBQXlCMEcsS0FBSyxDQUFDMUcsS0FBTixLQUFnQixLQUE3QyxFQUFvRDtBQUN2RDBHLG1CQUFLLENBQUMxRyxLQUFOLEdBQWMsS0FBZDtBQUNBMEcsbUJBQUssQ0FBQ3JCLFFBQU4sR0FBaUIsTUFBakI7QUFDQSxtQkFBS3JFLGVBQUwsSUFBd0IsQ0FBeEI7QUFDSDs7QUFBQTtBQUdSO0FBQ0o7QUFDSjtBQUNKOzs7MkJBR01uQixHLEVBQUtpRSxHLEVBQUs7QUFDYixVQUFJbUMsR0FBRyxHQUFHcEIsZ0RBQVEsQ0FBQ0MsTUFBbkI7O0FBQ0EsVUFBSWpGLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBT29HLEdBQVAsR0FBYSxDQUFiLElBQWtCcEcsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFPb0csR0FBUCxHQUFhLEtBQUszRixLQUF4QyxFQUErQztBQUM1Q3dELFdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUFFQSxHQUFHLENBQUMsQ0FBRCxDQUFkO0FBQ0YsT0FGRCxNQUVPLElBQUlqRSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQU9vRyxHQUFQLEdBQWEsQ0FBYixJQUFrQnBHLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBT29HLEdBQVAsR0FBYSxLQUFLMUYsS0FBeEMsRUFBK0M7QUFDbER1RCxXQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBRUEsR0FBRyxDQUFDLENBQUQsQ0FBZDtBQUNIOztBQUNELGFBQU9BLEdBQVA7QUFDSDs7O3NDQUVpQjtBQUNkLFVBQUksS0FBSzlDLGVBQUwsR0FBdUIsS0FBS0QsT0FBNUIsR0FBc0MsSUFBMUMsRUFBZ0Q7QUFDNUMsYUFBS0gsa0JBQUwsR0FBMEIsSUFBMUI7QUFDSDtBQUNKOzs7MkJBRU07QUFFSCxXQUFLa0csV0FBTDtBQUNBLFdBQUtDLGVBQUw7QUFDQSxXQUFLQyxlQUFMO0FBRUg7Ozs7Ozs7QUFJTC9FLFVBQVUsQ0FBQzNCLEtBQVgsR0FBbUIsR0FBbkI7QUFDQTJCLFVBQVUsQ0FBQzFCLEtBQVgsR0FBbUIsR0FBbkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsSXFCK0IsYztBQUNqQiwwQkFBWWpDLFVBQVosRUFBd0JKLEdBQXhCLEVBQTZCO0FBQUE7O0FBQ3pCLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtJLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0g7Ozs7NEJBRU87QUFBQTs7QUFDSixXQUFLQSxVQUFMLENBQWdCb0Ysa0JBQWhCLEdBQXFDaEUsV0FBVyxDQUFDLFlBQU07QUFDbkQsYUFBSSxDQUFDcEIsVUFBTCxDQUFnQnFCLElBQWhCOztBQUNBLGFBQUksQ0FBQ3JCLFVBQUwsQ0FBZ0JRLElBQWhCLENBQXFCLEtBQUksQ0FBQ1osR0FBMUI7O0FBQ0EsWUFBSSxLQUFJLENBQUNJLFVBQUwsQ0FBZ0JPLGtCQUFwQixFQUF3QztBQUNwQ2UsdUJBQWEsQ0FBQyxLQUFJLENBQUN0QixVQUFMLENBQWdCb0Ysa0JBQWpCLENBQWIsQ0FEb0MsQ0FFcEM7QUFDSDtBQUNKLE9BUCtDLEVBTzdDLEVBUDZDLENBQWhEO0FBVUg7Ozt5QkFFSXBGLFUsRUFBWTtBQUVic0IsbUJBQWEsQ0FBQ3RCLFVBQVUsQ0FBQ29GLGtCQUFaLENBQWI7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJMO0FBQUE7QUFBTyxJQUFNZixJQUFJLEdBQUc7QUFDakI7QUFDQVMsV0FGaUIscUJBRVBZLE1BRk8sRUFFQztBQUNmLFFBQU1rQixHQUFHLEdBQUcsSUFBSTlDLElBQUksQ0FBQ0MsRUFBVCxHQUFjRCxJQUFJLENBQUMrQyxNQUFMLEVBQTFCO0FBQ0EsV0FBT3hDLElBQUksQ0FBQ3lDLEtBQUwsQ0FBVyxDQUFDaEQsSUFBSSxDQUFDaUQsR0FBTCxDQUFTSCxHQUFULENBQUQsRUFBZ0I5QyxJQUFJLENBQUNrRCxHQUFMLENBQVNKLEdBQVQsQ0FBaEIsQ0FBWCxFQUEyQ2xCLE1BQTNDLENBQVA7QUFDRixHQUxnQjtBQU1qQjtBQUNBb0IsT0FQaUIsaUJBT1hHLEdBUFcsRUFPTkMsQ0FQTSxFQU9IO0FBQ1gsV0FBTyxDQUFDRCxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNDLENBQVYsRUFBYUQsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTQyxDQUF0QixDQUFQO0FBQ0YsR0FUZ0I7QUFXakI1QyxNQVhpQixnQkFXWjZDLElBWFksRUFXTkMsSUFYTSxFQVdBO0FBQ2QsV0FBT3RELElBQUksQ0FBQ3VELElBQUwsQ0FDSnZELElBQUksQ0FBQ3dELEdBQUwsQ0FBU0gsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVQyxJQUFJLENBQUMsQ0FBRCxDQUF2QixFQUE0QixDQUE1QixJQUFpQ3RELElBQUksQ0FBQ3dELEdBQUwsQ0FBU0gsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVQyxJQUFJLENBQUMsQ0FBRCxDQUF2QixFQUE0QixDQUE1QixDQUQ3QixDQUFQO0FBR0YsR0FmZ0I7QUFpQmpCdEIsZ0JBakJpQiwwQkFpQkZ5QixHQWpCRSxFQWlCR0MsR0FqQkgsRUFpQlE7QUFDdEIsV0FBTzFELElBQUksQ0FBQzJELEtBQUwsQ0FBVzNELElBQUksQ0FBQytDLE1BQUwsTUFBaUJXLEdBQUcsR0FBR0QsR0FBTixHQUFZLENBQTdCLElBQWtDQSxHQUE3QyxDQUFQO0FBQ0YsR0FuQmdCO0FBcUJqQkcsUUFyQmlCLGtCQXFCVkMsUUFyQlUsRUFxQkFDLEtBckJBLEVBcUJPO0FBQ3JCLFFBQU1DLGlCQUFpQixHQUFHO0FBQ3ZCaEMsT0FBQyxFQUFFOEIsUUFBUSxDQUFDLENBQUQsQ0FBUixHQUFjN0QsSUFBSSxDQUFDa0QsR0FBTCxDQUFTWSxLQUFULENBQWQsR0FBZ0NELFFBQVEsQ0FBQyxDQUFELENBQVIsR0FBYzdELElBQUksQ0FBQ2lELEdBQUwsQ0FBU2EsS0FBVCxDQUQxQjtBQUV2QjdCLE9BQUMsRUFBRTRCLFFBQVEsQ0FBQyxDQUFELENBQVIsR0FBYzdELElBQUksQ0FBQ2lELEdBQUwsQ0FBU2EsS0FBVCxDQUFkLEdBQWdDRCxRQUFRLENBQUMsQ0FBRCxDQUFSLEdBQWM3RCxJQUFJLENBQUNrRCxHQUFMLENBQVNZLEtBQVQ7QUFGMUIsS0FBMUI7QUFJQSxXQUFPQyxpQkFBUDtBQUNGLEdBM0JnQjtBQTZCakJyQixrQkE3QmlCLDRCQTZCQXNCLElBN0JBLEVBNkJNQyxTQTdCTixFQTZCaUI7QUFFL0IsUUFBTUMsUUFBUSxHQUFHRixJQUFJLENBQUNyRSxHQUFMLENBQVMsQ0FBVCxJQUFjc0UsU0FBUyxDQUFDdEUsR0FBVixDQUFjLENBQWQsQ0FBL0I7QUFDQSxRQUFNd0UsUUFBUSxHQUFHSCxJQUFJLENBQUNyRSxHQUFMLENBQVMsQ0FBVCxJQUFjc0UsU0FBUyxDQUFDdEUsR0FBVixDQUFjLENBQWQsQ0FBL0I7QUFHQSxRQUFNeUUsS0FBSyxHQUFHSCxTQUFTLENBQUN2SSxHQUFWLENBQWMsQ0FBZCxJQUFtQnNJLElBQUksQ0FBQ3RJLEdBQUwsQ0FBUyxDQUFULENBQWpDO0FBQ0EsUUFBTTJJLEtBQUssR0FBR0osU0FBUyxDQUFDdkksR0FBVixDQUFjLENBQWQsSUFBbUJzSSxJQUFJLENBQUN0SSxHQUFMLENBQVMsQ0FBVCxDQUFqQyxDQVArQixDQVMvQjs7QUFDQSxRQUFJd0ksUUFBUSxHQUFHRSxLQUFYLEdBQW1CRCxRQUFRLEdBQUdFLEtBQTlCLElBQXVDLENBQTNDLEVBQThDO0FBRTNDTCxVQUFJLENBQUNyRSxHQUFMLEdBQVdxRSxJQUFJLENBQUNNLFNBQUwsQ0FBZU4sSUFBSSxDQUFDckUsR0FBcEIsQ0FBWDtBQUNBc0UsZUFBUyxDQUFDdEUsR0FBVixHQUFnQnNFLFNBQVMsQ0FBQ0ssU0FBVixDQUFvQkwsU0FBUyxDQUFDdEUsR0FBOUIsQ0FBaEI7QUFFRjtBQUNILEdBN0NnQixDQThDakI7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF2S2lCLENBQWIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuXG5leHBvcnQgY29uc3QgR1JBUEhfREVGQVVMVFMgPSB7XG4gICAgV0lEVEg6IDEsXG4gICAgQ09MT1I6ICdyZWQnXG5cbn1cblxuZXhwb3J0IGNsYXNzIENvbHVtbiB7XG4gICAgY29uc3RydWN0b3IocG9zLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMucG9zID0gcG9zO1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLmNvbG9yID0gR1JBUEhfREVGQVVMVFMuQ09MT1JcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gR1JBUEhfREVGQVVMVFMuQ09MT1I7XG4gICAgICAgIGN0eC5maWxsUmVjdChcbiAgICAgICAgICAgIHRoaXMucG9zWzBdLFxuICAgICAgICAgICAgdGhpcy5wb3NbMV0sXG4gICAgICAgICAgICB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdGhpcy5oZWlnaHRcbiAgICAgICAgKVxuICAgIH1cblxuXG59IiwiaW1wb3J0IHsgQ29sdW1uLCBHUkFQSF9ERUZBVUxUU30gZnJvbSAnLi9jb2x1bW4nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCB7XG4gICAgY29uc3RydWN0b3Ioc2ltdWxhdGlvbiwgY3R4KSB7XG4gICAgICAgIHRoaXMuRElNX1ggPSA2MDA7XG4gICAgICAgIHRoaXMuRElNX1kgPSAyMDA7XG4gICAgICAgIHRoaXMuY29sdW1uV2lkdGggPSBHUkFQSF9ERUZBVUxUUy5XSURUSFxuICAgICAgICB0aGlzLlhQYXJhbWV0ZXIgPSBHUkFQSF9ERUZBVUxUUy5XSURUSCAvIDI7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXTtcbiAgICAgICAgdGhpcy5ncmFwaEludGVydmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uID0gc2ltdWxhdGlvbjtcbiAgICAgICAgdGhpcy5wb3B1bGF0aW9uSW5mZWN0ZWQgPSB0aGlzLnNpbXVsYXRpb24ucG9wdWxhdGlvbkluZmVjdGVkXG4gICAgICAgIHRoaXMuZHJhdyhjdHgpO1xuXG4gICAgfVxuXG4gICAgYWRkQ29sdW1uKCkge1xuICAgICAgICBsZXQgbmV3Q29sdW1uID0gbmV3IENvbHVtbihcbiAgICAgICAgICAgIFt0aGlzLlhQYXJhbWV0ZXIsIHRoaXMuRElNX1ldLFxuICAgICAgICAgICAgdGhpcy5jb2x1bW5XaWR0aCxcbiAgICAgICAgICAgIC0oKHRoaXMuRElNX1kgLyB0aGlzLnNpbXVsYXRpb24uZGVuc2l0eSkgKiB0aGlzLnNpbXVsYXRpb24uaW5mZWN0aW9uTnVtYmVyKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaChuZXdDb2x1bW4pO1xuICAgICAgICAgICAgdGhpcy5YUGFyYW1ldGVyICs9IHRoaXMuY29sdW1uV2lkdGg7XG4gICAgICAgICAgICBpZiAodGhpcy5YUGFyYW1ldGVyID49IHRoaXMuRElNX1gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGRyYXcoY3R4KSB7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuRElNX1gsIHRoaXMuRElNX1kpO1xuICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4gY29sdW1uLmRyYXcoY3R4KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXNpemUoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbldpZHRoIC89IDI7XG4gICAgICAgICAgICB0aGlzLlhQYXJhbWV0ZXIgPSB0aGlzLmNvbHVtbldpZHRoIC8gMlxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goIGNvbHVtbiA9PiB7XG4gICAgICAgICAgICAgICAgY29sdW1uLnBvc1swXSA9IHRoaXMuWFBhcmFtZXRlcjtcbiAgICAgICAgICAgICAgICBjb2x1bW4ud2lkdGggPSB0aGlzLmNvbHVtbldpZHRoO1xuICAgICAgICAgICAgICAgIHRoaXMuWFBhcmFtZXRlciArPSB0aGlzLmNvbHVtbldpZHRoO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5kcmF3KHRoaXMuY3R4KVxuICAgICAgICB9XG5cbiAgICBzdGVwKCkge1xuICAgICAgICB0aGlzLmFkZENvbHVtbigpO1xuICAgIH1cblxufSIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaFZpZXcge1xuICAgIGNvbnN0cnVjdG9yIChncmFwaCwgc2ltdWxhdGlvbiwgY3R4KSB7XG4gICAgICAgIHRoaXMuZ3JhcGggPSBncmFwaDtcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uID0gc2ltdWxhdGlvbjtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7IFxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmdyYXBoLmdyYXBoSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdyYXBoLnN0ZXAoKTtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGguZHJhdyh0aGlzLmN0eCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zaW11bGF0aW9uLnBvcHVsYXRpb25JbmZlY3RlZCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5ncmFwaC5ncmFwaEludGVydmFsKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0b3AodGhpcy5ncmFwaClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNDApO1xuXG4gICAgfVxuXG4gICAgc3RvcChncmFwaCkge1xuXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZ3JhcGguZ3JhcGhJbnRlcnZhbCk7XG4gICAgfVxuXG5cbn1cblxuXG4iLCJpbXBvcnQgU2ltdWxhdGlvbiBmcm9tICcuL3NpbXVsYXRpb24nO1xuaW1wb3J0IFNpbXVsYXRpb25WaWV3IGZyb20gJy4vc2ltdWxhdGlvbl92aWV3JztcbmltcG9ydCBHcmFwaCBmcm9tICcuL2dyYXBoJztcbmltcG9ydCBHcmFwaFZpZXcgZnJvbSAnLi9ncmFwaF92aWV3JztcbmltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9tb3Zpbmdfb2JqZWN0JztcbmltcG9ydCB7UGVyc29ufSBmcm9tICcuL3BlcnNvbic7XG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzRWwxID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gICAgY29uc3QgY2FudmFzRWwyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMV07XG5cbiAgICBjYW52YXNFbDEud2lkdGggPSBTaW11bGF0aW9uLkRJTV9YO1xuICAgIGNhbnZhc0VsMS5oZWlnaHQgPSBTaW11bGF0aW9uLkRJTV9ZO1xuICAgIGNvbnN0IGN0eDEgPSBjYW52YXNFbDEuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgY2FudmFzRWwyLndpZHRoID0gU2ltdWxhdGlvbi5ESU1fWDtcbiAgICBjYW52YXNFbDIuaGVpZ2h0ID0gU2ltdWxhdGlvbi5ESU1fWSAvIDI7XG4gICAgY29uc3QgY3R4MiA9IGNhbnZhc0VsMi5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBcblxuICAgIHdpbmRvdy5TaW11bGF0aW9uID0gU2ltdWxhdGlvbjtcbiAgICB3aW5kb3cuU2ltdWxhdGlvblZpZXcgPSBTaW11bGF0aW9uVmlldztcbiAgICB3aW5kb3cuR3JhcGggPSBHcmFwaDtcbiAgICB3aW5kb3cuR3JhcGhWaWV3ID0gR3JhcGhWaWV3O1xuXG4gICAgXG4gICAgbGV0IGluZmVjdGVkTnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZlY3RlZC1udW1iZXJcIik7XG5cblxuICAgIGxldCBkZW5zaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWRlbnNpdHktcmFuZ2UnKTtcbiAgICBsZXQgb3V0cHV0RGVuc2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZW5zaXR5LXZhbHVlJyk7XG5cbiAgICBvdXRwdXREZW5zaXR5LmlubmVySFRNTCA9IGRlbnNpdHkudmFsdWU7XG5cbiAgICBkZW5zaXR5Lm9uaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFxuICAgICAgICBvdXRwdXREZW5zaXR5LmlubmVySFRNTCA9IHRoaXMudmFsdWU7XG4gICAgICAgIGxldCBzMSA9IG5ldyBTaW11bGF0aW9uKHRoaXMudmFsdWUsIHNvY2lhbERpc3QudmFsdWUgLyAxMDAsIGN0eDEpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkZW5zaXR5LnZhbHVlKTtcblxuICAgIGxldCBzb2NpYWxEaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LXNvY2lhbC1yYW5nZScpO1xuICAgIGxldCBvdXRwdXRTb2NpYWxEaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvY2lhbC12YWx1ZScpO1xuXG4gICAgb3V0cHV0U29jaWFsRGlzdC5pbm5lckhUTUwgPSBzb2NpYWxEaXN0LnZhbHVlO1xuXG4gICAgc29jaWFsRGlzdC5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBvdXRwdXRTb2NpYWxEaXN0LmlubmVySFRNTCA9IHRoaXMudmFsdWU7XG4gICAgICAgIGxldCBzMSA9IG5ldyBTaW11bGF0aW9uKGRlbnNpdHkudmFsdWUsIHRoaXMudmFsdWUgLyAxMDAsIGN0eDEpO1xuICAgICAgICByZXR1cm4gczE7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHNvY2lhbERpc3QudmFsdWUpO1xuXG4gICAgbGV0IGN1cnJlbnRTaW11bGF0aW9uID0gbnVsbDtcbiAgICB3aW5kb3cuY3VycmVudFNpbXVsYXRpb24gPSBjdXJyZW50U2ltdWxhdGlvbjtcbiAgICBsZXQgY3VycmVudFNpbXVsYXRpb25WaWV3ID0gbnVsbDtcbiAgICBsZXQgY3VycmVudEdyYXBoID0gbnVsbDtcbiAgICBsZXQgY3VycmVudEdyYXBoVmlldyA9IG51bGw7XG4gICAgbGV0IGluZmVjdGlvblJhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mZWN0aW9uLXJhdGUnKTtcbiAgICBcbiAgICBsZXQgc3RhcnRTaW11bGF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Jyk7XG4gICAgc3RhcnRTaW11bGF0aW9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN1cnJlbnRTaW11bGF0aW9uID0gbmV3IFNpbXVsYXRpb24oZGVuc2l0eS52YWx1ZSwgc29jaWFsRGlzdC52YWx1ZSAvIDEwMCwgY3R4MSk7XG4gICAgICAgIGN1cnJlbnRTaW11bGF0aW9uVmlldyA9IG5ldyBTaW11bGF0aW9uVmlldyhjdXJyZW50U2ltdWxhdGlvbiwgY3R4MSk7XG4gICAgICAgIGN1cnJlbnRHcmFwaCA9IG5ldyBHcmFwaCAoY3VycmVudFNpbXVsYXRpb24sIGN0eDIpO1xuICAgICAgICBjdXJyZW50R3JhcGhWaWV3ID0gbmV3IEdyYXBoVmlldyhjdXJyZW50R3JhcGgsIGN1cnJlbnRTaW11bGF0aW9uLCBjdHgyKTtcbiAgICAgICAgY3VycmVudFNpbXVsYXRpb25WaWV3LnN0YXJ0KCk7XG4gICAgICAgIGN1cnJlbnRHcmFwaFZpZXcuc3RhcnQoKTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFNpbXVsYXRpb24pO1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50R3JhcGgpO1xuICAgICAgICAvLyBpbmZlY3RlZE51bWJlci5pbm5lckhUTUwgPSBjdXJyZW50U2ltdWxhdGlvbi5pbmZlY3Rpb25OdW1iZXI7XG4gICAgfVxuXG4gICAgLy8gaW5mZWN0aW9uUmF0ZS5pbm5lckhUTUwgPSBjdXJyZW50U2ltdWxhdGlvbi5pbmZlY3Rpb25OdW1iZXIgfHwgMFxuICAgIFxuICAgIFxuICAgIGxldCBzdG9wU2ltdWxhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9wJyk7XG4gICAgc3RvcFNpbXVsYXRpb24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3VycmVudFNpbXVsYXRpb25WaWV3LnN0b3AoY3VycmVudFNpbXVsYXRpb24pO1xuICAgICAgICBjdXJyZW50R3JhcGhWaWV3LnN0b3AoY3VycmVudEdyYXBoKVxuICAgIH1cbiAgICBcbiAgICBsZXQgczEgPSBuZXcgU2ltdWxhdGlvbihkZW5zaXR5LnZhbHVlLCBzb2NpYWxEaXN0LnZhbHVlIC8gMTAwLCBjdHgxKTtcbiAgICBjb25zb2xlLmxvZyhzMSk7XG5cbiAgICBcbn0pOyIsImltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnLi9zaW11bGF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aW5nT2JqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5wb3MgID0gcGFyYW1ldGVycy5wb3M7XG4gICAgdGhpcy52ZWwgID0gcGFyYW1ldGVycy52ZWw7XG4gICAgdGhpcy5yYWRpdXMgID0gcGFyYW1ldGVycy5yYWRpdXM7XG4gICAgdGhpcy5jb2xvciAgPSBwYXJhbWV0ZXJzLmNvbG9yO1xuICAgIHRoaXMubWFzcyA9IHBhcmFtZXRlcnMubWFzcztcbiAgICB0aGlzLnNpbXVsYXRpb24gPSBwYXJhbWV0ZXJzLnNpbXVsYXRpb247XG4gICAgfVxuXG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKFxuICAgICAgICAgICAgdGhpcy5wb3NbMF0sXG4gICAgICAgICAgICB0aGlzLnBvc1sxXSxcbiAgICAgICAgICAgIHRoaXMucmFkaXVzLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDIgKiBNYXRoLlBJXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMucG9zID0gWyh0aGlzLnBvc1swXSArIHRoaXMudmVsWzBdKSwgKHRoaXMucG9zWzFdICsgdGhpcy52ZWxbMV0pXVxuICAgICAgICB0aGlzLnZlbCA9IHRoaXMuc2ltdWxhdGlvbi5ib3VuY2UodGhpcy5wb3MsIHRoaXMudmVsKTtcbiAgICB9O1xuXG4gICAgY2hhbmdlRGlyKHZlbCkge1xuICAgICAgICBcbiAgICAgICAgaWYgKE1hdGguYWJzKHZlbFswXSkgPiBNYXRoLmFicyh2ZWxbMV0pKSB7XG4gICAgICAgICAgICB2ZWxbMF0gPSAtIHZlbFswXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmVsWzFdID0gLSB2ZWxbMV1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHZlbDtcbiAgICB9XG4gICAgXG4gICAgaXNDb2xsaWRlZFdpdGgob3RoZXJPYmplY3QpIHtcbiAgICAgICAgY29uc3QgY2VudGVyRGlzdCA9IFV0aWwuZGlzdCh0aGlzLnBvcywgb3RoZXJPYmplY3QucG9zKTtcbiAgICAgICAgaWYgKGNlbnRlckRpc3QgPCAodGhpcy5yYWRpdXMgKyBvdGhlck9iamVjdC5yYWRpdXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uLnJlbW92ZSh0aGlzKTtcbiAgICB9XG5cbiB9XG5cblxuIiwiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRTID0ge1xuICAgIFJBRElVUzogMixcbiAgICBDT0xPUjogXCJsaWdodGdyYXlcIixcbiAgICBTUEVFRDogNCxcbiAgICBNQVNTOiAxXG59XG5cbmV4cG9ydCBjbGFzcyBQZXJzb24gZXh0ZW5kcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMgPSB7fSkge1xuICAgICAgICBwYXJhbWV0ZXJzLmNvbG9yID0gREVGQVVMVFMuQ09MT1I7XG4gICAgICAgIHBhcmFtZXRlcnMucmFkaXVzID0gREVGQVVMVFMuUkFESVVTO1xuICAgICAgICBwYXJhbWV0ZXJzLm1hc3MgPSBERUZBVUxUUy5NQVNTO1xuICAgICAgICBwYXJhbWV0ZXJzLnBvcyA9IHBhcmFtZXRlcnMucG9zIHx8IHBhcmFtZXRlcnMuc2ltdWxhdGlvbi5yYW5kb21Qb3NpdGlvbigpO1xuICAgICAgICBwYXJhbWV0ZXJzLnZlbCA9IHBhcmFtZXRlcnMudmVsIHx8IFV0aWwucmFuZG9tVmVjKERFRkFVTFRTLlNQRUVEKTtcbiAgICAgICAgcGFyYW1ldGVycy5jb25zY2lvdXNDdGl6ZW4gPSBmYWxzZTtcbiAgICAgICAgcGFyYW1ldGVycy5pbmZlY3RlZCA9IGZhbHNlO1xuICAgICAgICBzdXBlcihwYXJhbWV0ZXJzKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQge1BlcnNvbiwgREVGQVVMVFN9IGZyb20gJy4vcGVyc29uJztcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBTaW11bGF0aW9uVmlldyBmcm9tICcuL3NpbXVsYXRpb25fdmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXVsYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGRlbnNpdHksIHNvY2lhbERpc3RhbmNpbmdSYXRlLCBjdHgpIHtcbiAgICAgICAgdGhpcy5ESU1fWCA9IDYwMDtcbiAgICAgICAgdGhpcy5ESU1fWSA9IDQwMDtcbiAgICAgICAgdGhpcy5OVU1fUEVSU09OUyA9IDEwMDtcbiAgICAgICAgdGhpcy5kZW5zaXR5ID0gZGVuc2l0eTtcbiAgICAgICAgdGhpcy5zb2NpYWxEaXN0YW5jaW5nUmF0ZSA9IHNvY2lhbERpc3RhbmNpbmdSYXRlO1xuICAgICAgICB0aGlzLnBvcHVsYXRpb25JbmZlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBlcnNvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB0aGlzLmluZmVjdGlvbk51bWJlciA9IDA7XG4gICAgICAgIHRoaXMuYWRkUGVyc29ucygpO1xuICAgICAgICB0aGlzLmFkZFBhdGllbnRaZXJvKCk7XG4gICAgICAgIHRoaXMuYWRkQ29uc2Npb3VzQ2l0aXplbigpO1xuICAgICAgICB0aGlzLmRyYXcoY3R4KTtcbiAgICB9XG5cblxuXG4gICAgYWRkUGVyc29ucygpIHtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5kZW5zaXR5OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGVyc29ucy5wdXNoKG5ldyBQZXJzb24oe1xuICAgICAgICAgICAgICAgIHBvczogdGhpcy5yYW5kb21Qb3NpdGlvbigpLCBcbiAgICAgICAgICAgICAgICB2ZWw6IFV0aWwucmFuZG9tVmVjKERFRkFVTFRTLlNQRUVEKSwgXG4gICAgICAgICAgICAgICAgc2ltdWxhdGlvbjogdGhpc30pKTtcblxuICAgICAgICAgICAgaWYgKGkhPT0wKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnBlcnNvbnMubGVuZ3RoLTE7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKFV0aWwuZGlzdCh0aGlzLnBlcnNvbnNbaV0ucG9zLCB0aGlzLnBlcnNvbnNbal0ucG9zKSAtIERFRkFVTFRTLlJBRElVUyAqIDIpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzb25zW2ldLnBvcyA9IHRoaXMucmFuZG9tUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGo9LTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRQYXRpZW50WmVybygpIHtcbiAgICAgICAgdGhpcy5wZXJzb25zWzBdLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgIHRoaXMucGVyc29uc1swXS5pbmZlY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5mZWN0aW9uTnVtYmVyID0rIDE7XG4gICAgfVxuXG4gICAgYWRkQ29uc2Npb3VzQ2l0aXplbigpIHtcbiAgICAgICAgZm9yIChsZXQgaT0xOyBpPHRoaXMucGVyc29ucy5sZW5ndGggKiB0aGlzLnNvY2lhbERpc3RhbmNpbmdSYXRlKzE7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wZXJzb25zW2ldLmNvbnNjaW91c0NpdGl6ZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wZXJzb25zW2ldLnZlbCA9IFswLDBdO1xuICAgICAgICAgICAgdGhpcy5wZXJzb25zW2ldLmNvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgXG4gICAgcmFuZG9tUG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IHJhZCA9IERFRkFVTFRTLlJBRElVUztcbiAgICAgICAgbGV0IHggPSBVdGlsLnJhbmRvbUludFJhbmdlKHJhZCwgdGhpcy5ESU1fWCAtIHJhZCk7XG4gICAgICAgIGxldCB5ID0gVXRpbC5yYW5kb21JbnRSYW5nZShyYWQsIHRoaXMuRElNX1kgLSByYWQpO1xuICAgICAgICByZXR1cm4gW3gseV07XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLkRJTV9YLCB0aGlzLkRJTV9ZKTtcbiAgICAgICAgdGhpcy5wZXJzb25zLmZvckVhY2goIHBlcnNvbiA9PiBwZXJzb24uZHJhdyhjdHgpKTtcbiAgICB9XG5cbiAgICBtb3ZlT2JqZWN0cygpIHtcbiAgICAgICAgdGhpcy5wZXJzb25zLmZvckVhY2goKHBlcnNvbikgPT4ge1xuICAgICAgICAgICAgcGVyc29uLm1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlT2JqZWN0KG9iamVjdCkge1xuICAgICAgICB0aGlzLnBlcnNvbnMuc3BsaWNlKHRoaXMucGVyc29ucy5pbmRleE9mKG9iamVjdCksIDEpXG4gICAgfVxuICAgIFxuXG4gICAgY2hlY2tDb2xsaXNpb25zKCkge1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5wZXJzb25zLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGo9aSsxOyBqPHRoaXMucGVyc29ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBwZXJzMSA9IHRoaXMucGVyc29uc1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgcGVyczIgPSB0aGlzLnBlcnNvbnNbal07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHBlcnMxLmlzQ29sbGlkZWRXaXRoKHBlcnMyKSkge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlsLnJlc29sdmVDb2xsaXNpb24ocGVyczEsIHBlcnMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwZXJzMS5jb2xvciA9PT0gJ3JlZCcgJiYgcGVyczIuY29sb3IgIT09ICdyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJzMi5jb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGVyczIuaW5mZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmZlY3Rpb25OdW1iZXIgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGVyczIuY29sb3IgPT09ICdyZWQnICYmIHBlcnMxLmNvbG9yICE9PSAncmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnMxLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyczEuaW5mZWN0ZWQgPSAndHJ1ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmZlY3Rpb25OdW1iZXIgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYm91bmNlKHBvcywgdmVsKSB7XG4gICAgICAgIGxldCByYWQgPSBERUZBVUxUUy5SQURJVVNcbiAgICAgICAgaWYgKHBvc1swXS1yYWQgPCAwIHx8IHBvc1swXStyYWQgPiB0aGlzLkRJTV9YKSB7XG4gICAgICAgICAgIHZlbFswXSA9IC0gdmVsWzBdIFxuICAgICAgICB9IGVsc2UgaWYgKHBvc1sxXS1yYWQgPCAwIHx8IHBvc1sxXStyYWQgPiB0aGlzLkRJTV9ZKSB7XG4gICAgICAgICAgICB2ZWxbMV0gPSAtIHZlbFsxXVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2ZWw7XG4gICAgfVxuXG4gICAgaGFuZGxlSW5mZWN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5pbmZlY3Rpb25OdW1iZXIgLyB0aGlzLmRlbnNpdHkgPiAwLjk5KSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRpb25JbmZlY3RlZCA9IHRydWU7XG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICBzdGVwKCkge1xuXG4gICAgICAgIHRoaXMubW92ZU9iamVjdHMoKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbnMoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVJbmZlY3Rpb24oKTtcblxuICAgIH1cblxufVxuXG5TaW11bGF0aW9uLkRJTV9YID0gNjAwO1xuU2ltdWxhdGlvbi5ESU1fWSA9IDQwMDtcblxuIiwiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvblZpZXcge1xuICAgIGNvbnN0cnVjdG9yKHNpbXVsYXRpb24sIGN0eCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uID0gc2ltdWxhdGlvbjtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uLnNpbXVsYXRpb25JbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2ltdWxhdGlvbi5zdGVwKCk7XG4gICAgICAgICAgICB0aGlzLnNpbXVsYXRpb24uZHJhdyh0aGlzLmN0eCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zaW11bGF0aW9uLnBvcHVsYXRpb25JbmZlY3RlZCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zaW11bGF0aW9uLnNpbXVsYXRpb25JbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdG9wKHRoaXMuc2ltdWxhdGlvbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjApO1xuXG4gICAgICAgIFxuICAgIH1cblxuICAgIHN0b3Aoc2ltdWxhdGlvbikge1xuICAgICAgICBcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzaW11bGF0aW9uLnNpbXVsYXRpb25JbnRlcnZhbCk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGNvbnN0IFV0aWwgPSB7XG4gICAvLyBSZXR1cm4gYSByYW5kb21seSBvcmllbnRlZCB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gbGVuZ3RoLlxuICAgcmFuZG9tVmVjKGxlbmd0aCkge1xuICAgICAgY29uc3QgZGVnID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgcmV0dXJuIFV0aWwuc2NhbGUoW01hdGguc2luKGRlZyksIE1hdGguY29zKGRlZyldLCBsZW5ndGgpO1xuICAgfSxcbiAgIC8vIFNjYWxlIHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgYnkgdGhlIGdpdmVuIGFtb3VudC5cbiAgIHNjYWxlKHZlYywgbSkge1xuICAgICAgcmV0dXJuIFt2ZWNbMF0gKiBtLCB2ZWNbMV0gKiBtXTtcbiAgIH0sXG5cbiAgIGRpc3QocG9zMSwgcG9zMikge1xuICAgICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgICAgIE1hdGgucG93KHBvczFbMF0gLSBwb3MyWzBdLCAyKSArIE1hdGgucG93KHBvczFbMV0gLSBwb3MyWzFdLCAyKVxuICAgICAgKVxuICAgfSxcbiAgIFxuICAgcmFuZG9tSW50UmFuZ2UobWluLCBtYXgpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICAgfSxcblxuICAgcm90YXRlKHZlbG9jaXR5LCBhbmdsZSkge1xuICAgICAgY29uc3Qgcm90YXRlZFZlbG9jaXRpZXMgPSB7XG4gICAgICAgICB4OiB2ZWxvY2l0eVswXSAqIE1hdGguY29zKGFuZ2xlKSAtIHZlbG9jaXR5WzFdICogTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgeTogdmVsb2NpdHlbMF0gKiBNYXRoLnNpbihhbmdsZSkgKyB2ZWxvY2l0eVsxXSAqIE1hdGguY29zKGFuZ2xlKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdGF0ZWRWZWxvY2l0aWVzO1xuICAgfSxcblxuICAgcmVzb2x2ZUNvbGxpc2lvbihwZXJzLCBvdGhlclBlcnMpIHtcblxuICAgICAgY29uc3QgeFZlbERpZmYgPSBwZXJzLnZlbFswXSAtIG90aGVyUGVycy52ZWxbMF07XG4gICAgICBjb25zdCB5VmVsRGlmZiA9IHBlcnMudmVsWzFdIC0gb3RoZXJQZXJzLnZlbFsxXTtcblxuXG4gICAgICBjb25zdCB4RGlzdCA9IG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXTtcbiAgICAgIGNvbnN0IHlEaXN0ID0gb3RoZXJQZXJzLnBvc1sxXSAtIHBlcnMucG9zWzFdO1xuXG4gICAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgb3ZlcmxhcCBvZiBwZXJzXG4gICAgICBpZiAoeFZlbERpZmYgKiB4RGlzdCArIHlWZWxEaWZmICogeURpc3QgPj0gMCkge1xuXG4gICAgICAgICBwZXJzLnZlbCA9IHBlcnMuY2hhbmdlRGlyKHBlcnMudmVsKTtcbiAgICAgICAgIG90aGVyUGVycy52ZWwgPSBvdGhlclBlcnMuY2hhbmdlRGlyKG90aGVyUGVycy52ZWwpO1xuICAgICAgICAgXG4gICAgICB9XG4gICB9XG4gICAvLyByZXNvbHZlQ29sbGlzaW9uKHBlcnMsIG90aGVyUGVycykge1xuICAgLy8gICAgY29uc3QgeFZlbERpZmYgPSBwZXJzLnZlbFswXSAtIG90aGVyUGVycy52ZWxbMF07XG4gICAvLyAgICBjb25zdCB5VmVsRGlmZiA9IHBlcnMudmVsWzFdIC0gb3RoZXJQZXJzLnZlbFsxXTtcblxuXG4gICAvLyAgICBjb25zdCB4RGlzdCA9IG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXTtcbiAgIC8vICAgIGNvbnN0IHlEaXN0ID0gb3RoZXJQZXJzLnBvc1sxXSAtIHBlcnMucG9zWzFdO1xuXG4gICAvLyAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgb3ZlcmxhcCBvZiBwZXJzXG4gICAvLyAgICBpZiAoeFZlbERpZmYgKiB4RGlzdCArIHlWZWxEaWZmICogeURpc3QgPj0gMCkge1xuXG4gICAvLyAgICAgICAvLyBHcmFiIGFuZ2xlIGJldHdlZW4gdGhlIHR3byBjb2xsaWRpbmcgcGVyc1xuICAgLy8gICAgICAgY29uc3QgYW5nbGUgPSAtTWF0aC5hdGFuMihvdGhlclBlcnMucG9zWzFdIC0gcGVycy5wb3NbMV0sIG90aGVyUGVycy5wb3NbMF0gLSBwZXJzLnBvc1swXSk7XG5cbiAgIC8vICAgICAgIC8vIFN0b3JlIG1hc3MgaW4gdmFyIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgaW4gY29sbGlzaW9uIGVxdWF0aW9uXG4gICAvLyAgICAgICBjb25zdCBtMSA9IHBlcnMubWFzcztcbiAgIC8vICAgICAgIGNvbnN0IG0yID0gb3RoZXJQZXJzLm1hc3M7XG5cbiAgIC8vICAgICAgIC8vIHZlbCBiZWZvcmUgZXF1YXRpb25cbiAgIC8vICAgICAgIGNvbnN0IHUxID0gVXRpbC5yb3RhdGUocGVycy52ZWwsIGFuZ2xlKTtcbiAgIC8vICAgICAgIGNvbnN0IHUyID0gVXRpbC5yb3RhdGUob3RoZXJQZXJzLnZlbCwgYW5nbGUpO1xuXG4gICAvLyAgICAgICAvLyB2ZWwgYWZ0ZXIgMWQgY29sbGlzaW9uIGVxdWF0aW9uXG4gICAvLyAgICAgICBjb25zdCB2MSA9IFt1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTEueV07XG4gICAvLyAgICAgICBjb25zdCB2MiA9IFt1Mi54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTEueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTIueV07XG5cbiAgIC8vICAgICAgIC8vIEZpbmFsIHZlbCBhZnRlciByb3RhdGluZyBheGlzIGJhY2sgdG8gb3JpZ2luYWwgbG9jYXRpb25cbiAgIC8vICAgICAgIGNvbnN0IHZGaW5hbDEgPSBVdGlsLnJvdGF0ZSh2MSwgLWFuZ2xlKTtcbiAgIC8vICAgICAgIGNvbnN0IHZGaW5hbDIgPSBVdGlsLnJvdGF0ZSh2MiwgLWFuZ2xlKTtcblxuICAgLy8gICAgICAgLy8gU3dhcCBwZXJzIHZlbG9jaXRpZXMgZm9yIHJlYWxpc3RpYyBib3VuY2UgZWZmZWN0XG4gICAvLyAgICAgICBwZXJzLnZlbFswXSA9IHZGaW5hbDEueDtcbiAgIC8vICAgICAgIHBlcnMudmVsWzFdID0gdkZpbmFsMS55O1xuXG4gICAvLyAgICAgICBvdGhlclBlcnMudmVsWzBdID0gdkZpbmFsMi54O1xuICAgLy8gICAgICAgb3RoZXJQZXJzLnZlbFsxXSA9IHZGaW5hbDIueTtcbiAgIC8vICAgIH1cbiAgIC8vIH1cblxuICAgLy8gcmVzb2x2ZUNvbGxpc2lvbihwZXJzLCBvdGhlclBlcnMpIHtcbiAgIC8vICAgIGNvbnN0IHhWZWxEaWZmID0gcGVycy52ZWxbMF0gLSBvdGhlclBlcnMudmVsWzBdO1xuICAgLy8gICAgY29uc3QgeVZlbERpZmYgPSBwZXJzLnZlbFsxXSAtIG90aGVyUGVycy52ZWxbMV07XG5cbiAgIC8vICAgIGNvbnN0IHhEaXN0ID0gb3RoZXJQZXJzLnBvc1swXSAtIHBlcnMucG9zWzBdO1xuICAgLy8gICAgY29uc3QgeURpc3QgPSBvdGhlclBlcnMucG9zWzFdIC0gcGVycy5wb3NbMV07XG5cbiAgIC8vICAgIC8vIFByZXZlbnQgYWNjaWRlbnRhbCBvdmVybGFwIG9mIHBlcnNcbiAgIC8vICAgIGlmICh4VmVsRGlmZiAqIHhEaXN0ICsgeVZlbERpZmYgKiB5RGlzdCA+PSAwKSB7XG5cbiAgIC8vICAgICAgIC8vIEdyYWIgYW5nbGUgYmV0d2VlbiB0aGUgdHdvIGNvbGxpZGluZyBwZXJzXG4gICAvLyAgICAgICBjb25zdCBhbmdsZSA9IC1NYXRoLmF0YW4yKG90aGVyUGVycy5wb3NbMV0gLSBwZXJzLnBvc1sxXSwgb3RoZXJQZXJzLnBvc1swXSAtIHBlcnMucG9zWzBdKTtcblxuICAgLy8gICAgICAgLy8gU3RvcmUgbWFzcyBpbiB2YXIgZm9yIGJldHRlciByZWFkYWJpbGl0eSBpbiBjb2xsaXNpb24gZXF1YXRpb25cbiAgIC8vICAgICAgIGNvbnN0IG0xID0gcGVycy5tYXNzO1xuICAgLy8gICAgICAgY29uc3QgbTIgPSBvdGhlclBlcnMubWFzcztcblxuICAgLy8gICAgICAgaWYgKHBlcnMuY29uc2Npb3VzQ2l0aXplbiA9PT0gdHJ1ZSkge1xuICAgLy8gICAgICAgICAgLy8gdmVsIGJlZm9yZSBlcXVhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdTEgPSBVdGlsLnJvdGF0ZShwZXJzLnZlbCwgYW5nbGUpO1xuICAgLy8gICAgICAgICAgY29uc3QgdTIgPSBVdGlsLnJvdGF0ZShvdGhlclBlcnMudmVsLCBhbmdsZSk7XG5cbiAgIC8vICAgICAgICAgIC8vIHZlbCBhZnRlciAxZCBjb2xsaXNpb24gZXF1YXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHYxID0gW3UxLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1Mi54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1MS55XTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHYyID0gW3UyLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1MS54ICogMiAqIG0yIC8gKG0xICsgbTIpLCB1Mi55XTtcblxuICAgLy8gICAgICAgICAgLy8gRmluYWwgdmVsIGFmdGVyIHJvdGF0aW5nIGF4aXMgYmFjayB0byBvcmlnaW5hbCBsb2NhdGlvblxuICAgLy8gICAgICAgICAgY29uc3QgdkZpbmFsMSA9IFV0aWwucm90YXRlKHYxLCAtYW5nbGUpO1xuICAgLy8gICAgICAgICAgY29uc3QgdkZpbmFsMiA9IFV0aWwucm90YXRlKHYyLCAtYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyBTd2FwIHBlcnMgdmVsb2NpdGllcyBmb3IgcmVhbGlzdGljIGJvdW5jZSBlZmZlY3RcbiAgIC8vICAgICAgICAgIC8vIHBlcnMudmVsWzBdID0gdkZpbmFsMS54O1xuICAgLy8gICAgICAgICAgLy8gcGVycy52ZWxbMV0gPSB2RmluYWwxLnk7XG4gICAvLyAgICAgICAgICAvLyBwZXJzLnZlbFswXSA9IDA7XG4gICAvLyAgICAgICAgICAvLyBwZXJzLnZlbFsxXSA9IDA7XG5cbiAgIC8vICAgICAgICAgIG90aGVyUGVycy52ZWxbMF0gPSB2RmluYWwyLng7XG4gICAvLyAgICAgICAgICBvdGhlclBlcnMudmVsWzFdID0gdkZpbmFsMi55O1xuXG4gICAvLyAgICAgICB9IGVsc2UgaWYgKG90aGVyUGVycy5jb25zY2lvdXNDaXRpemVuID09PSB0cnVlKXtcbiAgIC8vICAgICAgICAgIC8vIHZlbCBiZWZvcmUgZXF1YXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHUxID0gVXRpbC5yb3RhdGUocGVycy52ZWwsIGFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHUyID0gVXRpbC5yb3RhdGUob3RoZXJQZXJzLnZlbCwgYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyB2ZWwgYWZ0ZXIgMWQgY29sbGlzaW9uIGVxdWF0aW9uXG4gIFxuICAgLy8gICAgICAgICAgY29uc3QgdjEgPSBbdTEueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUyLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUxLnldO1xuICAgLy8gICAgICAgICAgY29uc3QgdjIgPSBbdTIueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUxLnggKiAyICogbTIgLyAobTEgKyBtMiksIHUyLnldO1xuXG4gICAvLyAgICAgICAgICAvLyBGaW5hbCB2ZWwgYWZ0ZXIgcm90YXRpbmcgYXhpcyBiYWNrIHRvIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB2RmluYWwxID0gVXRpbC5yb3RhdGUodjEsIC1hbmdsZSk7XG4gICAvLyAgICAgICAgICBjb25zdCB2RmluYWwyID0gVXRpbC5yb3RhdGUodjIsIC1hbmdsZSk7XG5cbiAgIC8vICAgICAgICAgIC8vIFN3YXAgcGVycyB2ZWxvY2l0aWVzIGZvciByZWFsaXN0aWMgYm91bmNlIGVmZmVjdFxuICAgLy8gICAgICAgICAgcGVycy52ZWxbMF0gPSB2RmluYWwxLng7XG4gICAvLyAgICAgICAgICBwZXJzLnZlbFsxXSA9IHZGaW5hbDEueTtcblxuICAgLy8gICAgICAgICAgLy8gb3RoZXJQZXJzLnZlbFswXSA9IHZGaW5hbDIueDtcbiAgIC8vICAgICAgICAgIC8vIG90aGVyUGVycy52ZWxbMV0gPSB2RmluYWwyLnk7XG4gICAvLyAgICAgICAgICAvLyBvdGhlclBlcnMudmVsWzBdID0gMDtcbiAgIC8vICAgICAgICAgIC8vIG90aGVyUGVycy52ZWxbMV0gPSAwO1xuICAgLy8gICAgICAgfSBlbHNlIHtcbiAgIC8vICAgICAgICAgIC8vIHZlbCBiZWZvcmUgZXF1YXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHUxID0gVXRpbC5yb3RhdGUocGVycy52ZWwsIGFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHUyID0gVXRpbC5yb3RhdGUob3RoZXJQZXJzLnZlbCwgYW5nbGUpO1xuXG4gICAvLyAgICAgICAgICAvLyB2ZWwgYWZ0ZXIgMWQgY29sbGlzaW9uIGVxdWF0aW9uXG4gICAvLyAgICAgICAgICBjb25zdCB2MSA9IFt1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTEueV07XG4gICAvLyAgICAgICAgICBjb25zdCB2MiA9IFt1Mi54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTEueCAqIDIgKiBtMiAvIChtMSArIG0yKSwgdTIueV07XG5cbiAgIC8vICAgICAgICAgIC8vIEZpbmFsIHZlbCBhZnRlciByb3RhdGluZyBheGlzIGJhY2sgdG8gb3JpZ2luYWwgbG9jYXRpb25cbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDEgPSBVdGlsLnJvdGF0ZSh2MSwgLWFuZ2xlKTtcbiAgIC8vICAgICAgICAgIGNvbnN0IHZGaW5hbDIgPSBVdGlsLnJvdGF0ZSh2MiwgLWFuZ2xlKTtcblxuICAgLy8gICAgICAgICAgLy8gU3dhcCBwZXJzIHZlbG9jaXRpZXMgZm9yIHJlYWxpc3RpYyBib3VuY2UgZWZmZWN0XG4gICAvLyAgICAgICAgICBwZXJzLnZlbFswXSA9IHZGaW5hbDEueDtcbiAgIC8vICAgICAgICAgIHBlcnMudmVsWzFdID0gdkZpbmFsMS55O1xuXG4gICAvLyAgICAgICAgICBvdGhlclBlcnMudmVsWzBdID0gdkZpbmFsMi54O1xuICAgLy8gICAgICAgICAgb3RoZXJQZXJzLnZlbFsxXSA9IHZGaW5hbDIueTtcbiAgIC8vICAgICAgIH1cbiAgIC8vICAgIH1cbiAgIC8vIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9