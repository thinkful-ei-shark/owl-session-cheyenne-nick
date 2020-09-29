import React, { Component } from 'react';
import SideBar from './SideBar';
import TheStage from './TheStage';
import BottomBar from './BottomBar';

class App extends Component {
  render() {
    let participantsOnStage = this.props.participants.filter(participant => {
      if (participant.onStage) return participant;
    });
    return (
      <main className='App'>
        <article class="group-column">
          <div class="item group-row">
            <SideBar participants={this.props.participants} chatEvents={this.props.chatEvents}/>
            <TheStage participants={participantsOnStage} avatar={this.props.user.avatar} 
              name={this.props.user.name}/>
          </div>
          <BottomBar />
        </article>
      </main>
    )
  }
}

export default App;