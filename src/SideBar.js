import React, { Component } from 'react';
import SideBarPerson from './SideBarPerson';
import './SideBar.css';

class SideBar extends Component {
  findById(id) {
    return this.props.participants.find(participant => participant.id === id);
  }

  render() {
    const eventShoutouts = {
      'thumbs-up': ' gave a thumbs up 👍',
      'thumbs-down': ' gave a thumbs down 👎',
      'raise-hand': ' raised their hand ✋',
      'clap': ' clapped 👏',
      'join': ' joined',
      'leave': ' left',
      'join-stage': ' joined the stage',
      'leave-stage': ' left the stage'
    };

    const chatEvents = this.props.chatEvents.map(event => {
      const currentParticipant = this.findById(event.participantId);
      if (event.type === "message") {
        return (
          <SideBarPerson key={event.participantId + event.timestamp}
            name={currentParticipant.name} time={event.time} 
            messages={[event.message]} avatar={currentParticipant.avatar}
            isInChat={true} />
        );
      } else {
        return (
          <p key={event.participantId + event.timestamp} className="chat-event item">
            <span className="user-name">{currentParticipant.name}</span>
            {eventShoutouts[event.type]}
          </p>
        );
      }
    });

    let participantsList = this.props.participants.map(participant => {
      if (participant.inSession) {
        return (
          <SideBarPerson key={participant.id} name={participant.name}
            avatar={[participant.avatar]} onStage={participant.onStage}
            inSession={participant.inSession} isInChat={false} />
        );
      }
    });
    // Loop for participants not in session
    participantsList.concat(this.props.participants.map(participant => {
      if (!participant.inSession) {
        return (
          <SideBarPerson key={participant.id} name={participant.name}
            avatar={[participant.avatar]} onStage={participant.onStage}
            inSession={participant.inSession} isInChat={false} />
        );
      }
    }));


    return (
      <section className="side-bar item group-column">
        <div className="actions-header group-row">
          <button type="button" className="item">Chat</button>
          <button type="button" className="item">Participants {this.props.participants.length}</button>
          <button type="button" className="item">⚙️</button>
          <button type="button" className="item">🔗</button>
          <button type="button" className="item">?</button>
        </div>

        <ul className="chat-log item">
          {chatEvents}
        </ul>

        <ul className="participant-list hidden item">
          {participantsList}
        </ul>

        <textarea placeholder="Chat"></textarea>
      </section>
    );
  }
}

export default SideBar;