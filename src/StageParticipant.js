import React, { Component } from 'react';

class StageParticipant extends Component {
    render() {
        return (
            <div className="stage-participant item group-column">
                <div className="stage-settings item group-column">
                    <h3 className='stage-name'>this.props.name</h3>
                    <div className="audio-bar"></div>
                    <div className="icons group-row">
                        <button className="speaker">🔊</button>
                        <button className="mag-glass">🔍</button>
                    </div>
                </div>
                <img src={this.props.img.src} alt={this.props.name} className="profile-pic item" />
            </div>
        )
    }
} 

export default StageParticipant;