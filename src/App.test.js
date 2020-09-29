import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import store from './STORE';

describe('<App />', () => {
  it('renders without crashing', () => {
      // Create a DOM element to render the component into
      const div = document.createElement('div');

      // Render the component
      // If something is wrong it will fail here
      ReactDOM.render(<App participants={store.participants} chatEvents={store.chatEvents}
        user={{name:'name', avatar:'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1'}}/>, div);

      // Clean up
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {

    const app = renderer
        .create(<App participants={store.participants} chatEvents={store.chatEvents}
          user={{name:'name', avatar:'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1'}}/>)
        .toJSON();
    
    expect(app).toMatchSnapshot();
  });
});
