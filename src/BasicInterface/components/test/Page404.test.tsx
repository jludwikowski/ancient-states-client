import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { Page404 } from '../Page404';

describe('Page404', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Page404 />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should match snapshot', () => {
        const component = shallow(<Page404/>);
        expect(component).toMatchSnapshot();
    });
});
