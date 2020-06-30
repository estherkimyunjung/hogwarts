import React, { Component } from "react";

export default class HogTile extends Component {

  state = {
    detail: false,
    display: true
  }

  detailHog = (hogId) => {
    // console.log("HOGHANDLERID", hogId)
    // console.log("HOGHANDLERS Obj", this.props.hog)
    this.setState({
      detail: !this.state.detail
    })
  }

  hideHog = (hog) => {
    // console.log("HIDEHOG BF", this.state.display)
    this.setState({
      display: !this.state.display
    })
  }

  render() {
    // console.log("HOG", this.props)
    if(this.state.detail === true){
      return (
        <section style={{border: 'solid blue', margin: '10px', padding: '10px', display: 'inline-block'}}>
          <div className="hogTile" 
          onClick={() => this.detailHog(this.props.hog.id)} 
          style={{display:(this.state.display ? null : 'none')}}>
            <h3 style={{color: "green"}}> {this.props.hog.name}</h3>
            <div className="content">
              <img src={this.props.hog.image} alt="" />
            </div>
            <div className="detail content">
                <h4>Specialty: {this.props.hog.specialty}</h4>
                <h4>Greased: {this.props.hog.greased ? "Greased" : "Not Greased"}</h4>
                <h4>Weight: {this.props.hog.weight}</h4>
                <h4>Highest Medal Achieved: {this.props.hog.highestMedalAchieved}</h4>
            </div>
          </div>
          <button onClick={() => this.hideHog(this.props.hog)}>Show / Hide Hog</button>
        </section>
      )
    } else {
      return (
        <section style={{border: 'solid blue', margin: '10px', padding: '10px', display: 'inline-block'}}>
          <div className="hogTile" 
          onClick={() => this.detailHog(this.props.hog.id)} 
          style={{display:(this.state.display ? null : 'none')}}>
            <h3 style={{color: "green"}}> {this.props.hog.name}</h3>
            <div className="content">
              <img src={this.props.hog.image} alt="" />
            </div>
          </div>
          <button onClick={() => this.hideHog(this.props.hog)}>Show / Hide Hog</button>
        </section>
      )
    }
  } 
}
