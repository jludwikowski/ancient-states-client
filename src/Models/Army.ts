import {Entity} from './Entity';
import Leader from './Leader';
import UnitReference from "./UnitReference";

export default interface Army extends Entity {
    commander: Leader | null,
    units: UnitReference[]
    owner: number,
    position: string,
    status: string,
    orderDate?: string | null,
    targetId?: number | null,
}
