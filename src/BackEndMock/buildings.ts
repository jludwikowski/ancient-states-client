import Building from '../Models/Building'

export const defaultBuildingList:Building[] = [
    {
        id:1,
        name: 'barracks',
        baseCost: 100,
        baseBuildingTime: 120,
        level: 1,
        imageUrl: '',
        description: 'You recruit standard units here',
    },
    {
        id:2,
        name: 'forge',
        baseCost: 250,
        baseBuildingTime: 150,
        level: 0,
        imageUrl: '',
        description: 'This building let you upgrade weapons',
    },
    {
        id:3,
        name: 'field',
        baseCost: 60,
        baseBuildingTime: 150,
        level: 1,
        imageUrl: '',
        description: 'This building produce food',
    },
    {
        id:4,
        name: 'wall',
        baseCost: 100,
        baseBuildingTime: 150,
        level: 0,
        imageUrl: '',
        description: 'Increase your defences',
    }
]
