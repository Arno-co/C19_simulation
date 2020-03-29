import MovingObject from "./moving_object";
import { Util } from './util';

export const DEFAULTS = {
    RADIUS: 2,
    COLOR: "#000066",
    SPEED: 2,
    MASS: 1
}

export class Person extends MovingObject {
    constructor(parameters = {}) {
        parameters.color = DEFAULTS.COLOR;
        parameters.radius = DEFAULTS.RADIUS;
        parameters.mass = DEFAULTS.MASS;
        parameters.pos = parameters.pos || parameters.simulation.randomPosition();
        parameters.vel = parameters.vel || Util.randomVec(DEFAULTS.SPEED);
        parameters.consciousCtizen = false;
        parameters.infected = false;
        // parameters.pos = parameters.pos;
        // parameters.vel = parameters.vel;
        super(parameters);
    }

}