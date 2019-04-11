import Army from "../Models/Army";

export const defaultArmies:Army[] = [
    {
        id: 1,
        name: "garrison",
        description: "These men defend your lands",
        commander: null,
        units: [{
            unitId: 1,
            number: 5
        }]
    }
]
