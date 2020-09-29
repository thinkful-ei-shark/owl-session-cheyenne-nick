import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import store from './STORE'
import SideBar from './SideBar'

describe('<SideBar />', () => {
    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<SideBar participants={store.participants} chatEvents={store.chatEvents} />, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {

      const sideBar = renderer
          .create(<SideBar participants={store.participants} chatEvents={store.chatEvents} />)
          .toJSON();
      
      expect(sideBar).toMatchSnapshot();
    });
});
