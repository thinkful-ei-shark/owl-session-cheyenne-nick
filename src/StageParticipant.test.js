import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StageParticipant from './StageParticipant'

describe('<StageParticipant />', () => {
    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<StageParticipant key = {1} name = "name" avatar = 'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'/>, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const participant = renderer
            .create(<StageParticipant key = {1} name = "name" avatar = 'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'/>)
            .toJSON();
        
        expect(participant).toMatchSnapshot();
    });
});
