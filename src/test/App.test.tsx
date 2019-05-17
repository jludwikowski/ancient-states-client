import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Should match snapshot', () => {
    const component = shallow(<App/>);
    expect(component).toMatchSnapshot();
  });
});


