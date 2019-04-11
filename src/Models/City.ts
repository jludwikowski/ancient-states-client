import {Entity} from "./Entity";
import Building from "./Building";

export default interface City extends Entity {
    buildings: Building[],
    numberOfMen: number,
    numberOfWomen: number,
    numberOfSlaves: number
}
