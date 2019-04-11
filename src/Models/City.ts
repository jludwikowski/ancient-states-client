import Building from './Building';
import {Entity} from './Entity';

export default interface City extends Entity {
    buildings: Building[],
    numberOfMen: number,
    numberOfWomen: number,
    numberOfSlaves: number
}
