import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import City from '../../../Models/City';
import { CityView } from '../CityView';



describe('CityView', () => {

    const city:City = {
        name: 'Persepolis',
        description: 'Greatest City in the World',
        numberOfSlaves: 100000,
        numberOfWomen: 30000,
        numberOfMen: 30000,
        id: 1,
        constructing: null,
        constructionTimeLeft: null,
        barracksLevel: 10,
        forgeLevel: 10,
        fieldsLevel: 30,
        wallLevel: 30,
        position: '0,0',
        owner: 1,
        buildings: [
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
        ],
};

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CityView {...city} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should match snapshot', () => {
        const component = shallow(<CityView {...city} />);
        expect(component).toMatchSnapshot();
    });
});
