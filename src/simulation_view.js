import Simulation from './simulation';


export default class SimulationView {
    constructor(simulation, ctx) {
        this.ctx = ctx;
        this.simulation = simulation;
    }

    start() {
        setInterval(() => {
            this.simulation.moveObjects();
            this.simulation.draw(this.ctx);
        }, 20)
    }
}