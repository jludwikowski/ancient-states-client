import UnitPrototype from "../Models/UnitPrototype";

export const defaultUnitList:UnitPrototype[] = [
    {
        id: 1,
        name: "Tribal Warriors",
        description: "Strongest men of the tribe armed with clubs and spears",
        trainTime: 100,
        damage: 11,
        activeTurns: [6,7,8,9,10,11,12],
        health: 40,
        type: "Melee",
        imageUrl: ""
    }
]
