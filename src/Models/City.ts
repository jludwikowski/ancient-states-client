import Building from './Building';
import {Entity} from './Entity';

export default interface City extends Entity {
    buildings: Building[],
    id: number,
    owner: number,
    numberOfMen: number,
    numberOfWomen: number,
    numberOfSlaves: number,
    constructing: string | null,
    constructionTimeLeft: number | null,
    position: string,
    barracksLevel: number,
    forgeLevel: number,
    fieldsLevel: number,
    wallLevel: number,
}
