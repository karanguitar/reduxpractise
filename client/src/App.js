import React, { Component } from 'react';
import './App.scss';
import Posts from './components/Posts'
import Postform from './components/Postform'

class App extends Component {


  render() {

    return (
      <div className="App">
          <Postform />
          <Posts /> 
      </div>
    );
  }
}

export default App;
