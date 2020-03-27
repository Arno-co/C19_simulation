import Simulation from './simulation';
import SimulationView from './simulation_view';
import MovingObject from './moving_object';
import {Person} from './person';


document.addEventListener("DOMContentLoaded", function () {
    const canvasEl1 = document.getElementsByTagName("canvas")[0];
    const canvasEl2 = document.getElementsByTagName("canvas")[1];

    canvasEl1.width = Simulation.DIM_X;
    canvasEl1.height = Simulation.DIM_Y;
    const ctx1 = canvasEl1.getContext("2d");

    canvasEl2.width = Simulation.DIM_X;
    canvasEl2.height = Simulation.DIM_Y;
    const ctx2 = canvasEl2.getContext("2d");
  
    console.log('webpack is working');


    window.Simulation = Simulation;
    window.SimulationView = SimulationView;

    let s1 = new Simulation(200, 0.75);
    
    // let np = new Person({ 
    //     pos: [90, 90], 
    //     vel: [20, 20]
    // });
    // console.log(np);
    // np.draw(ctx1);

    console.log(s1);

    let sv1 = new SimulationView(s1, ctx1)
    // console.log(sv1);
    sv1.start();


    let s2 = new Simulation(200, 0.25);
    
    // let np = new Person({ 
    //     pos: [90, 90], 
    //     vel: [20, 20]
    // });
    // console.log(np);
    // np.draw(ctx1);

    console.log(s2);

    let sv2 = new SimulationView(s2, ctx2)
    // console.log(sv1);
    sv2.start();

    
});