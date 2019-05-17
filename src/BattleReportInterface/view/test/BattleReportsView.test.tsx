import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { BattleReportsView } from '../BattleReportsView';

describe('BattleReportsView', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BattleReportsView />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should match snapshot', () => {
        const component = shallow(<BattleReportsView/>);
        expect(component).toMatchSnapshot();
    });
});
