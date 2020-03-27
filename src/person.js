import MovingObject from "./moving_object";
import { Util } from './util';

export const DEFAULTS = {
    RADIUS: 20,
    COLOR: "#000066",
    SPEED: 2
}

export class Person extends MovingObject {
    constructor(parameters = {}) {
        parameters.color = DEFAULTS.COLOR;
        parameters.radius = DEFAULTS.RADIUS;
        // parameters.pos = parameters.pos || parameters.simulation.randomPosition();
        // parameters.vel = parameters.vel || Util.randomVec(DEFAULTS.SPEED);
        parameters.pos = parameters.pos;
        parameters.vel = parameters.vel;
        super(parameters);
    }

}