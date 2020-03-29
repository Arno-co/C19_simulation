import {Person, DEFAULTS} from './person';
import {Util} from './util';
import SimulationView from './simulation_view';

export default class Simulation {
    constructor(density, socialDistancingRate, ctx) {
        this.DIM_X = 600;
        this.DIM_Y = 400;
        this.NUM_PERSONS = 100;
        this.density = density;
        this.socialDistancingRate = socialDistancingRate;
        this.populationInfected = false;
        this.persons = [];
        this.simulationInterval = null;
        this.infectionNumber = 0;
        this.addPersons();
        this.addPatientZero();
        this.addConsciousCitizen();
        this.draw(ctx);
    }

    // handleDensity() {

    // }

    addPersons() {
        for(let i=0; i<this.density; i++) {
            this.persons.push(new Person({
                pos: this.randomPosition(), 
                vel: Util.randomVec(DEFAULTS.SPEED), 
                simulation: this}));

            if (i!==0) {
                for (let j = 0; j < this.persons.length-1; j++) {
                    if ((Util.dist(this.persons[i].pos, this.persons[j].pos) - DEFAULTS.RADIUS * 2) < 0) {
                        this.persons[i].pos = this.randomPosition();
                        j=-1;
                    }
                }
            }
        }
    }

    addPatientZero() {
        this.persons[0].color = 'red';
        this.persons[0].infected = true;
        this.infectionNuber =+ 1;
    }

    addConsciousCitizen() {
        // debugger;
        for (let i=1; i<this.persons.length * this.socialDistancingRate+1; i++) {
            this.persons[i].consciousCitizen = true;
            this.persons[i].vel = [0,0];
            this.persons[i].color = 'green';
        }
    }


    
    randomPosition() {
        const rad = DEFAULTS.RADIUS;
        let x = Util.randomIntRange(rad, this.DIM_X - rad);
        let y = Util.randomIntRange(rad, this.DIM_Y - rad);
        return [x,y];
    }

    draw(ctx) {
        ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
        this.persons.forEach( person => person.draw(ctx));
    }

    moveObjects() {
        this.persons.forEach((person) => {
            person.move();
        });
    }

    removeObject(object) {
        this.persons.splice(this.persons.indexOf(object), 1)
    }
    

    checkCollisions() {
        for (let i=0; i<this.persons.length;i++) {
            for (let j=i+1; j<this.persons.length; j++) {
                let pers1 = this.persons[i];
                let pers2 = this.persons[j];
                
                if (pers1.isCollidedWith(pers2)) {
                        // pers1.vel = pers1.changeDir(pers1.vel);
                        // pers1.color = '#ff0000';
                        // pers2.vel = pers2.changeDir(pers2.vel);
                        // pers2.color = '#ff0000';
                        // pers1.pos = this.bounce(pers1.vel, pers1.pos)
                        // pers2.pos = this.bounce(pers2.vel, pers2.pos)
                        Util.resolveCollision(pers1, pers2);
                        if (pers1.color === 'red' && pers2.color !== 'red') {
                        pers2.color = 'red';
                        pers2.infected = true;
                        this.infectionNuber += 1;
                        } else if (pers2.color === 'red' && pers1.color !== 'red') {
                            pers1.color = 'red';
                            pers1.infected = 'true';
                            this.infectionNuber += 1;
                        };
                        // this.removeObject(pers1);
                        // this.removeObject(pers2);
                        
                }
            }
        }
    }


    bounce(pos, vel) {
        let rad = DEFAULTS.RADIUS
        if (pos[0]-rad < 0 || pos[0]+rad > this.DIM_X) {
           vel[0] = - vel[0] 
        } else if (pos[1]-rad < 0 || pos[1]+rad > this.DIM_Y) {
            vel[1] = - vel[1]
        }
        return vel;
    }

    handleInfection() {
        if (this.infectionNuber / this.density > 0.99) {
            this.populationInfected = true;
        }
    }

    step() {

        this.moveObjects();
        this.checkCollisions();
        this.handleInfection();
        console.log(this.infectionNuber);

        // if (!this.populationInfected) {
        //     this.moveObjects();
        //     this.checkCollisions();
        //     this.handleInfection();
        // } else {
        //     return null;
        // }
    }

}

Simulation.DIM_X = 600;
Simulation.DIM_Y = 400;
// Simulation.NUM_PERSONS = 100;
