import MovingObject from "./moving_object";
import { Util } from './util';

const DEFAULTS = {
    RADIUS: 2,
    COLOR: "#000066",
    SPEED: 2
}

export default class Person extends MovingObject {
    constructor(parameters = {}) {
        parameters.color = DEFAULTS.COLOR;
        parameters.radius = DEFAULTS.RADIUS;
        parameters.pos = parameters.pos || parameters.simulation.randomPosition();
        parameters.vel = parameters.vel || Util.randomVec(DEFAULTS.SPEED);
        super(parameters);
    }

}