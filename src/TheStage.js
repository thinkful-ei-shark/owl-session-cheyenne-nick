import React, { Component } from 'react';
import 'TheStage.css'
import StageParticipant from 'StageParticipant.js'

class TheStage extends Component {
    render(){
        const participants = this.props.participants.map(participant =>{
            return < StageParticipant key = {participant.id} name = {participant.name} avatar = {participant.avatar}/>
        });

        return(
           <div className="the-stage item-three">
               <div className="stage-paricipants group-row">
                   {participants}
                   <div className = "stage-screen">
                       <div className = "audio-bar"></div>
                       <img  src={this.props.img.src} alt={this.props.name} className="profile-pic item" />

                   </div>
               </div>
           </div>
        )
    }
}

export default TheStage;