

export default class GraphView {
    constructor (graph, simulation, ctx) {
        this.graph = graph;
        this.simulation = simulation;
        this.ctx = ctx; 
    }

    start() {
        this.graph.graphInterval = setInterval(() => {
            this.graph.step();
            this.graph.draw(this.ctx);
            if (this.simulation.populationInfected) {
                clearInterval(this.graph.graphInterval);
                // this.stop(this.graph)
            }
        }, 40);

    }

    stop(graph) {

        clearInterval(graph.graphInterval);
    }


}


