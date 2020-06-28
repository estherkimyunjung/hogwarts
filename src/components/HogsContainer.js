import React, {Component} from 'react'
import HogTile from './HogTile'

export default class Index extends Component {

  state = {
    sortHogwarts: null,
  }

  sortHogsByName = () => {
    this.setState({
      sortHogwarts: this.props.hogwarts.sort((a,b) => a.name.localeCompare(b.name))
    })
  }

  sortHogsByWeight = () => {
    this.setState({
      sortHogwarts: this.props.hogwarts.sort((a,b) => a.weight - b.weight )
    })
  }

  filterHogsByGrease = () => {
    console.log("GREASE True", this.props.hogwarts.filter(hog => hog.greased === true))
    this.setState({
      sortHogwarts: this.props.hogwarts.filter(hog => hog.greased === true)
    })
    console.log("AFTER", this.props.hogwarts)
  }
  
  render(){
    if(this.props.hogwarts == null){
      return <h1>Lording...</h1>
    }
    console.log("HOGS", this.props.hogwarts)

    return(
      <div className='hogwartsList'>
        <button onClick={this.sortHogsByName}>Order By Name</button>
        <button onClick={this.sortHogsByWeight}>Order By Weight</button>
        <button onClick={this.filterHogsByGrease}>Filter By Grease</button>
        <div className='hogwartsContainer'>
          {this.props.hogwarts.map(hog => (
            <HogTile hog={hog} key={hog.id}/>
          ))}
        </div>
      </div>
    )
  }
}
