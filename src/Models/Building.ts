import BuildingPrototype from './BuildingPrototype';

export default interface Building extends BuildingPrototype{
    finalCost: number,
    finalBuildingTime: number,
    level: number
}
