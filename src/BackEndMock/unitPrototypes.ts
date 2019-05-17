import UnitPrototype from '../Models/UnitPrototype';
import {UnitType} from "../Models/UnitType";

export const defaultUnitList:UnitPrototype[] = [
    {
        id: 1,
        name: 'Tribal Warriors',
        description: 'Strongest men of the tribe armed with clubs and spears',
        baseTrainTime: 100,
        baseDamage: 11,
        activeTurns: [6,7,8,9,10,11,12],
        baseHealth: 40,
        baseCost: 100,
        type: 'Melee',
        imageUrl: ''
    },
    {
        id: 2,
        name: 'Peasant',
        description: 'Just Peasant armed with whatever he had on hands',
        baseTrainTime: 30,
        baseDamage: 4,
        baseCost: 20,
        activeTurns: [6,7,8,9,10,11,12],
        baseHealth: 20,
        type: 'Melee',
        imageUrl: ''
    }
];
