import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import Army from '../../../Models/Army';
import { ArmyTurnReport } from '../ArmyTurnReport';

describe('ArmyTurnReport', () => {

    const army:Army = {
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
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ArmyTurnReport army={army} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should match snapshot', () => {
        const component = shallow(<ArmyTurnReport army={army} />);
        expect(component).toMatchSnapshot();
    });
});
