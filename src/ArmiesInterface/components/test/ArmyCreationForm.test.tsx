import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import Army from '../../../Models/Army';
import UnitPrototype from "../../../Models/UnitPrototype";
import { ArmyCreationForm } from '../ArmyCreationForm';

describe('ArmyCreationForm', () => {

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
    const baseUnits:UnitPrototype[] = [{
        id: 1,
        name: "Persian Spearman",
        description: "Poorly armed and armor eastern warrior",
        baseTrainTime: 50,
        baseDamage: 8,
        baseHealth: 30,
        baseCost: 40,
        activeTurns: [6, 7, 8, 9, 10, 11, 12],
        type: "Melee",
        imageUrl: "images/icons/icons8-military-base-100.png"
    }];

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ArmyCreationForm army={army} unitPrototypes={baseUnits} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should match snapshot', () => {
        const component = shallow(<ArmyCreationForm army={army} unitPrototypes={baseUnits} />);
        expect(component).toMatchSnapshot();
    });
});
