import {Entity} from './Entity';

export default interface BuildingPrototype extends Entity{
    cost: number,
    buildingTime: number,
    imageUrl: string
}
