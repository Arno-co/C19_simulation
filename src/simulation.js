import Person from './person';
import {Util} from './util';

export default class Simulation {
    constructor() {
        this.DIM_X = 600;
        this.DIM_Y = 400;
        this.NUM_PERSONS = 100;
        this.persons = [];
        this.addPersons();
    }

    // handleDensity() {

    // }

    addPersons() {
        for(let i=0; i<this.NUM_PERSONS; i++) {
            this.persons.push(new Person({pos: this.randomPosition(), simulation: this}));
        }
    }

    randomPosition() {
        return [(Math.random() * (this.DIM_X)), (Math.random() * (this.DIM_Y))]
    }

    draw(ctx) {
        ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
        this.persons.forEach( person => person.draw(ctx));
    }

    moveObjects() {
        this.persons.forEach((person) => {
            person.move();
        })
    }

    checkCollisions() {
        for (let i=0; i<this.persons.length;i++) {
            for (let j=1; j>1 && j<this.persons.length; j++) {
                const pers1 = this.persons[i];
                const pers2 = this.persons[j];

                if (pers1.isCollidedWith(pers2)) {
                    pers1.changeDir(pers1.vel);
                    pers2.changeDir(pers2.vel);
                }
            }
        }
    }

    changeDir(vel) {
        if (vel[0] > vel [1]) {
            vel[0] = - vel[0]
        } else {
            vel[1] = - vel[1]
        }
        return vel;
    }

    bounce(pos, vel) {
        if (pos[0] <= 0 || pos [0]>= this.DIM_X) {
           vel[0] = - vel[0] 
        } else if (pos[1] <= 0 || pos[1] >= this.DIM_Y) {
            vel[1] = - vel[1]
        }
        return vel;
    }

}

Simulation.DIM_X = 600;
Simulation.DIM_Y = 400;
// Simulation.NUM_PERSONS = 100;
