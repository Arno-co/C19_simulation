import Simulation from './simulation';
import SimulationView from './simulation_view';
import MovingObject from './moving_object';
import Person from './person';


document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementsByTagName("canvas")[0];
    // canvasEl.width = window.innerWidth;
    // canvasEl.height = window.innerHeight;
    canvasEl.width = Simulation.DIM_X;
    canvasEl.height = Simulation.DIM_Y;
    const ctx = canvasEl.getContext("2d");
    // canvasEl.width = Game.DIM_X;
    // canvasEl.height = Game.DIM_Y;
    console.log('webpack is working');

    window.MovingObject = MovingObject;
    window.Person = Person;
    window.Simulation = Simulation;
    window.SimulationView = SimulationView;

    // const Simulation = new Simulation();
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
    
    
    let s1 = new Simulation();
    
    // let np = new Person({ 
    //     pos: [90, 90], 
    //     vel: [20, 20]
    // });
    // console.log(np);
    // np.draw(ctx);

    console.log(s1);

    let sv1 = new SimulationView(s1, ctx)
    // console.log(sv1);
    sv1.start();
});