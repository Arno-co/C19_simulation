import Simulation from './simulation';
import SimulationView from './simulation_view';
import MovingObject from './moving_object';
import {Person} from './person';


document.addEventListener("DOMContentLoaded", function () {
    const canvasEl1 = document.getElementsByTagName("canvas")[0];
    // const canvasEl2 = document.getElementsByTagName("canvas")[1];

    canvasEl1.width = Simulation.DIM_X;
    canvasEl1.height = Simulation.DIM_Y;
    const ctx1 = canvasEl1.getContext("2d");

    // canvasEl2.width = Simulation.DIM_X;
    // canvasEl2.height = Simulation.DIM_Y;
    // const ctx2 = canvasEl2.getContext("2d");

    console.log('webpack is working');


    window.Simulation = Simulation;
    window.SimulationView = SimulationView;

    


    let density = document.getElementById('my-density-range');
    let outputDensity = document.getElementById('density-value');

    outputDensity.innerHTML = density.value;

    density.oninput = function () {
        
        outputDensity.innerHTML = this.value;
        let s1 = new Simulation(this.value, socialDist.value / 100, ctx1);
    }
    console.log(density.value);

    let socialDist = document.getElementById('my-social-range');
    let outputSocialDist = document.getElementById('social-value');

    outputSocialDist.innerHTML = socialDist.value;

    socialDist.oninput = function () {
        outputSocialDist.innerHTML = this.value;
        let s1 = new Simulation(density.value, this.value / 100, ctx1);
        return s1;
    }
    console.log(socialDist.value);

    let currentSimulation = null;
    let currentSimulationView = null;

    let startSimulation = document.getElementById('start');
    startSimulation.onclick = function () {
        currentSimulation = new Simulation(density.value, socialDist.value / 100, ctx1);
        currentSimulationView = new SimulationView(currentSimulation, ctx1)
        currentSimulationView.start();
        console.log(currentSimulation);
    
    }
    
    let stopSimulation = document.getElementById('stop');
    stopSimulation.onclick = function () {
        currentSimulationView.stop(currentSimulation);
    }
    
    let s1 = new Simulation(density.value, socialDist.value / 100, ctx1);
    console.log(s1);
    // let sv1 = new SimulationView(s1, ctx1)

    
    // sv1.start();


    // let s2 = new Simulation(50, 0.8);
    // console.log(s2);
    // let sv2 = new SimulationView(s2, ctx2)
    // sv2.start();



    
});