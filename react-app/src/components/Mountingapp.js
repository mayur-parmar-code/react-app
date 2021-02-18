import React, { Component } from "react";

class MountingApp extends Component {
  constructor(props) {
    super(props);
  }
  static getDerivedStateFromProps(props, state) {
      console.log(props);
      console.log(state);
      console.log("getDerivedStateFromProps method() invoke");
      return null;
  }

  componentDidMount(){
      //get data from server and set data to state
      console.log("componentDidMount method() invoke");
  }

  render() {
      return(
        <div>
        <h1>hello this is mounting</h1>
      </div>
      );
  }
}

export default MountingApp