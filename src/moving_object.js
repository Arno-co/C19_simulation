import { Util } from './util';
import Simulation from './simulation';

export default class MovingObject {
    constructor(parameters) {
    this.pos  = parameters.pos;
    this.vel  = parameters.vel;
    this.radius  = parameters.radius;
    this.color  = parameters.color;
    this.mass = parameters.mass;
    this.simulation = parameters.simulation;
    }


    draw(ctx) {
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.arc(
            this.pos[0],
            this.pos[1],
            this.radius,
            0,
            2 * Math.PI
            // false
        );
        ctx.stroke();
     }

    move() {
        this.pos = [(this.pos[0] + this.vel[0]), (this.pos[1] + this.vel[1])]
        this.vel = this.simulation.bounce(this.pos, this.vel);
        // console.log(this.pos);
    };

    changeDir(vel) {
        
        if (Math.abs(vel[0]) > Math.abs(vel[1])) {
            vel[0] = - vel[0]
        } else {
            vel[1] = - vel[1]
        }
        
        return vel;
    }
    
    isCollidedWith(otherObject) {
        const centerDist = Util.dist(this.pos, otherObject.pos);
        if (centerDist < (this.radius + otherObject.radius)) {
            return true;
        } else {
            return false;
        };

    }

    remove() {
        this.simulation.remove(this);
    }

 }


