import { Util } from './util';
import Simulation from './simulation';

export default class MovingObject {
    constructor(parameters) {
    this.pos  = parameters.pos;
    this.vel  = parameters.vel;
    this.radius  = parameters.radius;
    this.color  = parameters.color;
    this.simulation = parameters.simulation;
    }


    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(
            this.pos[0],
            this.pos[1],
            this.radius,
            0,
            2 * Math.PI
            // false
        );
        ctx.fill();
     }

    move() {
        this.pos = [(this.pos[0] + this.vel[0]), (this.pos[1] + this.vel[1])]
        this.vel = this.simulation.bounce(this.pos, this.vel);
        // console.log(this.pos);
    };
    
    isCollidedWith(otherPerson) {
        const centerDist = Util.dist(this.pos, otherPerson.pos);
        return centerDist < (this.radius + otherPerson.radius);
    }

 }


