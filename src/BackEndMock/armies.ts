import Army from '../Models/Army';

export const defaultArmies:Army[] = [
    {
        id: 1,
        name: 'garrison',
        description: 'These men defend your lands',
        commander: null,
        units: [{
                baseUnit: 1,
                level: 1,
                number: 5,
            }, {
                baseUnit: 2,
                level: 1,
                number: 10,
            }
        ]
    }
]
