import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogsContainer from './HogsContainer'

class App extends Component {

  state = {
    hogwarts: null
  }

  componentDidMount() {
    fetch('http://localhost:3001/hogs')
      .then(res => res.json())
      .then(hogwarts => this.setState({hogwarts: hogwarts}))
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < HogsContainer hogwarts={this.state.hogwarts}/>
      </div>
    )
  }
}

export default App;
