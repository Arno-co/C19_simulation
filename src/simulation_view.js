


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
                // this.stop(this.simulation)
            }
        }, 20);

        
    }

    stop(simulation) {
        
        clearInterval(simulation.simulationInterval);
    }

}