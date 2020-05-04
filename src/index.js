import Simulation from './simulation';
import SimulationView from './simulation_view';
import Graph from './graph';
import GraphView from './graph_view';
import MovingObject from './moving_object';
import {Person} from './person';



document.addEventListener("DOMContentLoaded", function () {
    const canvasEl1 = document.getElementsByTagName("canvas")[0];
    const canvasEl2 = document.getElementsByTagName("canvas")[1];

    canvasEl1.width = Simulation.DIM_X;
    canvasEl1.height = Simulation.DIM_Y;
    const ctx1 = canvasEl1.getContext("2d");

    canvasEl2.width = Simulation.DIM_X;
    canvasEl2.height = Simulation.DIM_Y / 2;
    const ctx2 = canvasEl2.getContext("2d");

    

    window.Simulation = Simulation;
    window.SimulationView = SimulationView;
    window.Graph = Graph;
    window.GraphView = GraphView;

    
    // let infectedNumber = document.getElementById("infected-number");


    let density = document.getElementById('my-density-range');
    let outputDensity = document.getElementById('density-value');

    outputDensity.innerHTML = density.value;

    density.oninput = function () {
        
        outputDensity.innerHTML = this.value;
        let s1 = new Simulation(this.value, socialDist.value / 100, ctx1);
    }

    let socialDist = document.getElementById('my-social-range');
    let outputSocialDist = document.getElementById('social-value');

    outputSocialDist.innerHTML = socialDist.value;

    socialDist.oninput = function () {
        outputSocialDist.innerHTML = this.value;
        let s1 = new Simulation(density.value, this.value / 100, ctx1);
        return s1;
    }

    let currentSimulation = null;
    let currentSimulationView = null;
    let currentGraph = null;
    let currentGraphView = null;

    
    let startSimulation = document.getElementById('start');
    startSimulation.onclick = function () {
        if (!currentSimulation) {
            currentSimulation = new Simulation(density.value, socialDist.value / 100, ctx1);
            currentSimulationView = new SimulationView(currentSimulation, ctx1);
            currentGraph = new Graph(currentSimulation, ctx2);
            currentGraphView = new GraphView(currentGraph, currentSimulation, ctx2);
            currentSimulationView.start();
            currentGraphView.start();
        } else {
            return null;
        }
    }

    
    
    let stopSimulation = document.getElementById('stop');
    stopSimulation.onclick = function () {
        if (currentSimulation) {
            currentSimulationView.stop(currentSimulation);
            currentGraphView.stop(currentGraph)
            currentSimulation = null;
            currentGraph = null;
        } else {
            return null;
        }
    }
    
    let s1 = new Simulation(density.value, socialDist.value / 100, ctx1);
    
    
    let clearSimulation = document.getElementById('clear');
    clearSimulation.onclick = function () {
        if (!currentSimulation || currentSimulation.populationInfected) {
            let s2 = new Simulation(density.value, socialDist.value / 100, ctx1);
            let g2 = new Graph (s2, ctx2)
        } else {
            return null;
        }
    }
});