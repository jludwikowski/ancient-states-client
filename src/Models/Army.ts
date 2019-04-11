import {Entity} from "./Entity";
import Leade from "./Leader";
import Unit from "./Unit";

export default interface Army extends Entity {
    commander: Leade | null,
    units: [{
        unitId: number,
        number: number
    }]
}
