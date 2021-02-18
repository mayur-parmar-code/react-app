import React, { Component } from "react";

class EventHandlername extends Component {
  constructor(props) {
    super(props);
    console.log("constructor() invoke");
    this.state = { name: "" };
  }
  componentWillMount() {
      console.log("componentWillmount() invoke");
      return false;
  }
  componentDidMount() {
    console.log("componentDidMount() invoke");
  }
  changeText = (e) => {
    this.setState({ name: e.target.value });
  };
  shouldComponentUpdate(){
      console.log("shouldComponentUpdate() invoke")
      return null;
  }
  componentWillUpdate(){
      console.log("componentWillUpdate() invoke");  
  }
  render() {
    console.log("render() invoke");
    return (
      <form>
        <h1>hello {this.state.name}</h1>
        Enter Name: <input type="text" onChange={this.changeText} />
      </form>
    );
  }
  componentDidUpdate(){
      console.log("componentDidUpdate() invoke");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount() invoke");
  }
}

export default EventHandlername;
