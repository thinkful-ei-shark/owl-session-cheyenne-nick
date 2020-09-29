import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TheStage from './TheStage'

describe('<TheStage />', () => {
    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');
        const participants = [{
          id: 1,
          name: 'Koren Templeton',
          avatar:
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
          inSession: true,
          onStage: true
        },
        {
          id: 2,
          name: 'Caty Flucker',
          avatar:
            'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
          inSession: true,
          onStage: false
        }]

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<TheStage participants={participants} avatar={participants[0].avatar} 
          name={participants[0].name} />, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
      const participants = [{
        id: 1,
        name: 'Koren Templeton',
        avatar:
          'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
      },
      {
        id: 2,
        name: 'Caty Flucker',
        avatar:
          'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: false
      }];

      const stage = renderer
          .create(<TheStage participants={participants} avatar={participants[0].avatar} name={participants[0].name} />)
          .toJSON();
      
      expect(stage).toMatchSnapshot();
    });
});
