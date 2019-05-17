import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import Building from "../../../Models/Building";
import { BuildingCard } from '../BuildingCard';

describe('BuildingCard', () => {

    const building:Building = {
            baseBuildingTime: 120,
            baseCost: 100,
            description: 'You recruit standard units here',
            id: 1,
            imageUrl: 'images/icons/icons8-military-base-100.png',
            level: 10,
            name: 'barracks'
        };

    const onBuild = (id:number) => {
        console.log('On onDismiss');
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BuildingCard building={building} onBuild={onBuild} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should match snapshot', () => {
        const component = shallow(<BuildingCard building={building} onBuild={onBuild} />);
        expect(component).toMatchSnapshot();
    });
});
