import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import Leader from "../../../Models/Leader";
import { LeaderCard } from '../LeaderCard';

describe('LeaderCard', () => {

    const leader:Leader = {
        name: 'Alcibiades',
        description: 'All fall for Alcibiades',
        leadership: 100,
        wisdom: 0,
        cunning: 100,
        willpower: 0,
        imageUrl: '',
    };

    const onDismiss = (id:number) => {
        console.log('On onDismiss');
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LeaderCard leader={leader} onDismiss={onDismiss} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should match snapshot', () => {
        const component = shallow(<LeaderCard leader={leader} onDismiss={onDismiss} />);
        expect(component).toMatchSnapshot();
    });
});
