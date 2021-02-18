import React, { Component } from "react";

class Passarginevent extends Component {
  state = {
    id: 1,
    name: "mayur",
  };
  handleClick = (id, e) => {
    console.log(id);
    console.log(e);
  };

  handlerBind = (e,id) =>{
    console.log(id);
    console.log(e);
  }

  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.handleClick(this.state.id, e);
          }}
        >
          Delete
        </button>

        <button onClick={this.handlerBind.bind(this,this.state.id)}>to bind click here</button>

      </div>
    );
  }
}

export default Passarginevent;
