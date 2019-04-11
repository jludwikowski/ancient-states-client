import {Entity} from "./Entity";
import {UnitType} from "./UnitType";

export default interface Unit extends Entity {
    trainTime: number,
    damage: number,
    activeTurns: number[],
    health: number,
    type: UnitType,
    imageUrl: string
}
