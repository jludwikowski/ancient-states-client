import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { LeadersView } from '../LeadersView';

describe('LeadersView', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LeadersView />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should match snapshot', () => {
        const component = shallow(<LeadersView/>);
        expect(component).toMatchSnapshot();
    });
});
