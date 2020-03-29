import Simulation from './simulation';


export default class SimulationView {
    constructor(simulation, ctx) {
        this.ctx = ctx;
        this.simulation = simulation;
    }

    start() {
        this.simulation.simulationInterval = setInterval(() => {
            this.simulation.step();
            this.simulation.draw(this.ctx);
            if (this.simulation.populationInfected) {
                clearInterval(this.simulation.simulationInterval);
            }
        }, 20);

        
    }

    stop(simulation) {
        
        clearInterval(simulation.simulationInterval);
    }

}