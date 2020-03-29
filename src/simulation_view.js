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
            if (this.simulation.populationInfected) {
                clearInterval(simulationInterval);
            }
        }, 20);

        
    }

}