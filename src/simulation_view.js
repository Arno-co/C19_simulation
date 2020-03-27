import Simulation from './simulation';


export default class SimulationView {
    constructor(simulation, ctx) {
        this.ctx = ctx;
        this.simulation = simulation;
    }

    start() {
        setInterval(() => {
            this.simulation.step();
            this.simulation.draw(this.ctx);
        }, 20)
    }
}