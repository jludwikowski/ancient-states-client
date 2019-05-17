import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import Army from '../../../Models/Army';
import { BattleTurn } from '../BattleTurn';

describe('BattleTurn', () => {

    const armiesList:Army[] = [{
        id: 7,
        name: 'New Army',
        description: '',
        status: 'camp',
        orderDate: null,
        targetId: null,
        position: '0,0',
        owner: 1,
        commander: null,
        units: [
            {
                number: 9802,
                level: 1,
                baseUnit: 1,
            }
        ]
    },{
        id: 1,
        name: 'New Army',
        description: '',
        status: 'camp',
        orderDate: null,
        targetId: null,
        position: '0,0',
        owner: 2,
        commander: null,
        units: [
            {
                number: 300,
                level: 1,
                baseUnit: 1,
            }
        ]
    },
    ];

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BattleTurn armiesList={armiesList} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should match snapshot', () => {
        const component = shallow(<BattleTurn armiesList={armiesList} />);
        expect(component).toMatchSnapshot();
    });
});
