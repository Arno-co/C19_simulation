import Simulation from './simulation';
import SimulationView from './simulation_view';


document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementsByTagName("canvas")[0];
    canvasEl.width = Game.DIM_X;
    canvasEl.height = Game.DIM_Y;

    const ctx = canvasEl.getContext("2d");
    const Simulation = new Simulation();
    new SimulationView(game, ctx).start();
});