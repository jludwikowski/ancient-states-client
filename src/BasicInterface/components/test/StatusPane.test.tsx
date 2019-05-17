import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import Resources from "../../../Models/Resources";
import { StatusPane } from '../StatusPane';

describe('StatusPane', () => {

    const resources:Resources = {
        id: 1,
        food: 10000,
        iron: 1000,
        timber: 1000,
        stone: 1000,
        gold: 10000,
        influence: 100,
        owner: 1,
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<StatusPane {...resources} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should match snapshot', () => {
        const component = shallow(<StatusPane {...resources} />);
        expect(component).toMatchSnapshot();
    });
});
