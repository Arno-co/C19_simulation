import { Column, GRAPH_DEFAULTS} from './column';

export default class Graph {
    constructor(simulation, ctx) {
        this.DIM_X = 600;
        this.DIM_Y = 200;
        this.columnWidth = GRAPH_DEFAULTS.WIDTH
        this.XParameter = GRAPH_DEFAULTS.WIDTH / 2;
        this.ctx = ctx;
        this.columns = [];
        this.graphInterval = null;
        this.simulation = simulation;
        this.timeUnits = 0;
        this.populationInfected = this.simulation.populationInfected
        this.draw(ctx);

    }

    addColumn() {
        let newColumn = new Column(
            [this.XParameter, this.DIM_Y],
            this.columnWidth,
            -((this.DIM_Y / this.simulation.density) * this.simulation.infectionNumber)
            )
            
            this.columns.push(newColumn);
            this.XParameter += this.columnWidth;
            if (this.XParameter >= this.DIM_X) {
                this.resize()
            }
    }
    
    draw(ctx) {
        ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.columns.forEach(column => column.draw(ctx));
    }

    resize() {
        this.columnWidth /= 2;
        this.XParameter = this.columnWidth / 2
        this.columns.forEach( column => {
            column.pos[0] = this.XParameter;
            column.width = this.columnWidth;
            this.XParameter += this.columnWidth;
        })

        this.draw(this.ctx)
    }

    updateInfectionRate() {
        let infectionRate = document.getElementById('infection-rate');
        infectionRate.innerHTML = Math.floor(this.simulation.infectionNumber / this.simulation.density * 100)
        let infectionTime = document.getElementById('infection-time');
        infectionTime.innerHTML = this.timeUnits / 100
    }

    step() {
        this.addColumn();
        this.updateInfectionRate();
        this.timeUnits += 1;
    }

}