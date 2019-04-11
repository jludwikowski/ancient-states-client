import {Entity} from './Entity';
import Leader from './Leader';

export default interface Army extends Entity {
    commander: Leader | null,
    units: [{
        unitId: number,
        number: number
    }]
}
