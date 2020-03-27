import Simulation from './simulation';
import SimulationView from './simulation_view';
import MovingObject from './moving_object';
import {Person} from './person';


document.addEventListener("DOMContentLoaded", function () {
    const canvasEl1 = document.getElementsByTagName("canvas")[0];
    const canvasEl2 = document.getElementsByTagName("canvas")[1];
    // canvasEl1.width = window.innerWidth;
    // canvasEl1.height = window.innerHeight;
    canvasEl1.width = Simulation.DIM_X;
    canvasEl1.height = Simulation.DIM_Y;
    const ctx1 = canvasEl1.getContext("2d");
    canvasEl2.width = Simulation.DIM_X;
    canvasEl2.height = Simulation.DIM_Y;
    const ctx2 = canvasEl2.getContext("2d");
    // canvasEl1.width = Game.DIM_X;
    // canvasEl1.height = Game.DIM_Y;
    console.log('webpack is working');

    // window.MovingObject = MovingObject;
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
    
    
    let s1 = new Simulation();
    
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


    let s2 = new Simulation();
    
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