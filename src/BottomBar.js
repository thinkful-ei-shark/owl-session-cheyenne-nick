import React, { Component } from 'react';
import './BottomBar.css';

class BottomBar extends Component {
  render() {
    return (
      <section className="bottom-bar item group-row">
        <div className="actions-header group-row item">
          <button type="button" className="item">{'<'}</button>
          <button type="button" className="item">👍</button>
          <button type="button" className="item">👎</button>
          <button type="button" className="item">✋</button>
          <button type="button" className="item">👏</button>
        </div>

        <div className="actions-header group-row item">
          <button type="button" className="item">📹</button>
          <button type="button" className="item">🔊</button>
          <button type="button" className="item">💻</button>
          <button type="button" className="item">Leave stage</button>
        </div>
      </section>
    );
  }
}

export default BottomBar;