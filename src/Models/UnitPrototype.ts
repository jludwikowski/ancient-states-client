import {Entity} from './Entity';
import {UnitType} from './UnitType';

export default interface UnitPrototype extends Entity {
    baseTrainTime: number,
    baseDamage: number,
    activeTurns: number[],
    baseHealth: number,
    baseCost: number,
    type: UnitType,
    imageUrl: string
}
