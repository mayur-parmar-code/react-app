import React, { Component } from "react";
import Eventfun from "./Eventhandlerfuncom";

class Eventhandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "mayur",
      roll: this.props.roll,
    };

    //     this.handleclick=this.handleclick.bind(this)
  }
  //     handleclick(){
  //         console.log("button clicked",this);
  //     }

  handleclick = () => {
    // console.log("button clicked",this)
    this.setState({ name: "jay", roll: "105" });
  };

  handleClickforsetstate = () => {
    this.setState(function (state, props) {
      console.log(state);
      console.log(props.roll);
    });
  };

  render() {
    return (
      <div>
        <h1>Hello Click here</h1>
        <h2>
          name:{this.state.name} roll : {this.state.roll}
        </h2>
        <button onClick={this.handleclick}>Click me</button>
        <button onClick={this.handleClickforsetstate}>Click here</button>
        <Eventfun />
      </div>
    );
  }
}

export default Eventhandler;
