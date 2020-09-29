import React, { Component } from 'react';
import './SideBarPerson.css';

class SideBarPerson extends Component {
  render() {
    const isInChat = this.props.isInChat;
    let content = null;
    let personHeader = null;
    let messages = null;
    
    // If chat bar is showing
    if (isInChat) {
      // Person Header
      personHeader = (
        <div class="group-row">
          <h3 class="item">this.props.name</h3>
          <p class="item">this.props.time</p>
        </div>
      );

      // Person Content
      messages = this.props.messages.map(message => {
        return <p className='item'>{message}</p>;
      });
      content = (
        <div className="person-data-content group-vertical">
          {messages}
        </div>
      );
    // Else if participants bar is showing
    } else {
      // Person Header
      personHeader = <h3 class="item">this.props.name</h3>;

      // Person Content
      content = (
        <div className="person-data-content group-row">
          <div className="circle item"></div>
          {this.props.onStage ? <p className="stage-status">on stage</p> : ''}
          {this.props.inSession ? <button className="boot">• Boot</button> : ''}
        </div>
      );
    }

    return (
      <li className="side-bar-person group-row">
        <img src={this.props.avatar} alt={this.props.name} className="profile-pic item" />
        <div className="person-data group-vertical item">
          {personHeader}
          {content}
        </div>
      </li>
    )
  }
}

export default SideBarPerson;