import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import UnitPrototype from "../../../Models/UnitPrototype";
import UnitReference from "../../../Models/UnitReference";
import { SingleUnitForm } from '../SingleUnitForm';

describe('SingleUnitForm', () => {

    const unit:UnitReference = {
                number: 9802,
                level: 1,
                baseUnit: 1,
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

    const getUnit = (event:React.ChangeEvent<HTMLInputElement>) => {
        console.log('On onDismiss');
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SingleUnitForm unit={unit} unitPrototypes={baseUnits} getUnit={getUnit} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should match snapshot', () => {
        const component = shallow(<SingleUnitForm unit={unit} unitPrototypes={baseUnits} getUnit={getUnit} />);
        expect(component).toMatchSnapshot();
    });
});
