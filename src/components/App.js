import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogsContainer from './HogsContainer'

class App extends Component {

  state = {
    hogwarts: null,
    isLoading: true
  }

  componentDidMount() {
    fetch('http://localhost:3001/hogs')
      .then(res => res.json())
      .then(hogwarts => this.setState({
        hogwarts: hogwarts,
        isLoading: false
      }))
  }

  render() {
    return (
      <div className="App">
          < Nav />
          {this.state.isLoading
            ? <h4>Loading ... </h4>
            : < HogsContainer hogwarts={this.state.hogwarts}/> 
          }
      </div>
    )
  }
}

export default App;
