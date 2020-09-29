import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import BottomBar from './BottomBar'

describe('<BottomBar />', () => {
    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<BottomBar />, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {

      const bottomBar = renderer
          .create(<BottomBar />)
          .toJSON();
      
      expect(bottomBar).toMatchSnapshot();
    });
});
