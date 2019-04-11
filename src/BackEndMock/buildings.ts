import Building from "../Models/Building"

export const defaultBuildingList:Building[] = [
    {
        id:1,
        name: "barracks",
        cost: 100,
        buildingTime: 120,
        level: 1,
        imageUrl: "",
        description: "You recruit standard units here",
        finalBuildingTime: 140,
        finalCost: 120
    },
    {
        id:2,
        name: "forge",
        cost: 250,
        buildingTime: 150,
        level: 0,
        imageUrl: "",
        description: "This building let you upgrade weapons",
        finalCost: 250,
        finalBuildingTime: 150
    },
    {
        id:3,
        name: "field",
        cost: 60,
        buildingTime: 150,
        level: 1,
        imageUrl: "",
        description: "This building produce food",
        finalCost: 80,
        finalBuildingTime: 150
    }
]
