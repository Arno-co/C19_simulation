import MovingObject from "./moving_object";
import { Util } from './util';

export const DEFAULTS = {
    RADIUS: 20,
    COLOR: "#000066",
    SPEED: 1,
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
        // parameters.pos = parameters.pos;
        // parameters.vel = parameters.vel;
        super(parameters);
    }

}