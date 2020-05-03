import { Column, GRAPH_DEFAULTS} from './column';

export default class Graph {
    constructor(simulation, ctx) {
        this.DIM_X = 600;
        this.DIM_Y = 200;
        this.XParameter = GRAPH_DEFAULTS.WIDTH / 2;
        this.columns = [];
        this.graphInterval = null;
        this.simulation = simulation;
        this.populationInfected = this.simulation.populationInfected
        this.draw(ctx);

    }

    addColumn() {
        let newColumn = new Column(
            [this.XParameter, this.DIM_Y],
            GRAPH_DEFAULTS.WIDTH,
            -((this.DIM_Y / this.simulation.density) * this.simulation.infectionNumber)
            )
            
            this.columns.push(newColumn);
            this.XParameter += GRAPH_DEFAULTS.WIDTH;
        }
        
        draw(ctx) {
            ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
        this.columns.forEach(column => column.draw(ctx));
    }

    step() {
        this.addColumn();
    }

}