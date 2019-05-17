import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import BattleReport from "../../../Models/BattleReport";
import { BattleReportCard } from '../BattleReportCard';

describe('BattleReportCard', () => {

    const battleReport:BattleReport = {
        id: 1,
        turnList: [[{id: 7,
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
            ]}]],
        onDisband: (id:number) => {
            console.log('On onDismiss');
        }
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BattleReportCard report={battleReport} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should match snapshot', () => {
        const component = shallow(<BattleReportCard report={battleReport} />);
        expect(component).toMatchSnapshot();
    });
});
