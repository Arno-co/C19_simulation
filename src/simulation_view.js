import Simulation from './simulation';


export default class SimulationView {
    constructor(simulation, ctx) {
        this.ctx = ctx;
        this.simulation = simulation;
    }

    start() {
        let simulationInterval = setInterval(() => {
            this.simulation.step();
            this.simulation.draw(this.ctx);
        }, 20)
    }

    stop() {
        clearInterval(simulationInterval);
    }
}