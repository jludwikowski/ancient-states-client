import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import Building from "../../../Models/Building";
import { BuildingBrowser } from '../BuildingBrowser';

describe('BuildingBrowser', () => {

    const buildings:Building[] =  [
            {
                baseBuildingTime: 120,
                baseCost: 100,
                description: 'You recruit standard units here',
                id: 1,
                imageUrl: 'images/icons/icons8-military-base-100.png',
                level: 10,
                name: 'barracks'
            },
            {
                baseBuildingTime: 150,
                baseCost: 250,
                description: 'This building let you upgrade weapons',
                id: 2,
                imageUrl: 'images/icons/icons8-military-base-100.png',
                level: 10,
                name: 'forge'
            },
            {
                baseBuildingTime: 150,
                baseCost: 60,
                description: 'This building produce food',
                id: 3,
                imageUrl: 'images/icons/icons8-military-base-100.png',
                level: 30,
                name: 'fields'
            },
            ];

    const onBuild = (id:number) => {
        console.log('On onDismiss');
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BuildingBrowser buildingList={buildings} onBuild={onBuild} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should match snapshot', () => {
        const component = shallow(<BuildingBrowser buildingList={buildings} onBuild={onBuild} />);
        expect(component).toMatchSnapshot();
    });
});
