import React from 'react';
import ReactDOM from 'react-dom';
//import renderer from 'react-test-renderer';
import Participants from './participants';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participants participants={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

/*it('render the UI as expected', () => {
    const tree = renderer
        .create(<Participants />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});*/