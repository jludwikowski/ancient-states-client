import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from '../Navbar';

describe('Navbar', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Navbar />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should match snapshot', () => {
        const component = shallow(<Navbar/>);
        expect(component).toMatchSnapshot();
    });
});
