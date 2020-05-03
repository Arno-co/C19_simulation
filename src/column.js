

export const GRAPH_DEFAULTS = {
    WIDTH: 1,
    COLOR: 'red'

}

export class Column {
    constructor(pos, width, height) {
        this.pos = pos;
        this.width = width;
        this.height = height;
        this.color = GRAPH_DEFAULTS.COLOR
    }

    draw(ctx) {
        ctx.fillStyle = GRAPH_DEFAULTS.COLOR;
        ctx.fillRect(
            this.pos[0],
            this.pos[1],
            this.width,
            this.height
        )
    }


}