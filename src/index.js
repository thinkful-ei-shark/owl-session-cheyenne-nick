import React from 'react';
import ReactDOM from 'react-dom';
import store from './STORE';
import App from './App';
import './index.css';

ReactDOM.render(
  <App participants={store.participants} chatEvents={store.chatEvents} user={{name: "Joe Turner", 
    avatar: "https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set4"}
  }/>
  ,
  document.getElementById('root')
);