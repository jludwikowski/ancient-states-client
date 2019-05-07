import {Entity} from './Entity';

export default interface BuildingPrototype extends Entity{
    baseCost: number,
    baseBuildingTime: number,
    imageUrl: string,
}
