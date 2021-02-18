import React, { Component } from 'react';

class Testlifecyle extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {favoritecolor: "red"};
    //   }
    //   shouldComponentUpdate() {
    //     return true;
    //   }
    //   changeColor = () => {
    //     this.setState({favoritecolor: "blue"});
    //   }
    //   render() {
    //     return (
    //       <div>
    //       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    //       <button type="button" onClick={this.changeColor}>Change color</button>
    //       </div>
    //     );
    //   }

    // constructor(props) {
    //     super(props);
    //     this.state = {favoritecolor: "red"};
    //   }
    //   static getDerivedStateFromProps(props, state) {
    //     return {favoritecolor: props.favcol };
    //   }
    //   changeColor = () => {
    //     this.setState({favoritecolor: "blue"});
    //   }
    //   render() {
    //     return (
    //       <div>
    //       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    //       <button type="button" onClick={this.changeColor}>Change color</button>
    //       </div>
    //     );
    //   }

    // constructor(props) {
    //     super(props);
    //     this.state = {favoritecolor: "red"};
    //   }
    //   componentDidMount() {
    //     setTimeout(() => {
    //       this.setState({favoritecolor: "yellow"})
    //     }, 3000)
    //   }
    //   shouldComponentUpdate(){
    //       return true;
    //   }
    //   componentDidUpdate() {
    //     document.getElementById("mydiv").innerHTML =
    //     "The updated favorite is " + this.state.favoritecolor;
    //   }
    //   render() {
    //     return (
    //       <div>
    //       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    //       <div id="mydiv"></div>
    //       </div>
    //     );
    //   }


    constructor(props) {
        super(props);
        this.state = {show: true};
      }
      delHeader = () => {
        this.setState({show: false});
      }
      render() {
        let myheader;
        if (this.state.show) {
          myheader = <Child />;
        };
        return (
          <div>
          {myheader}
          <button type="button" onClick={this.delHeader}>Delete Header</button>
          </div>
        );
      }
    }
    
    class Child extends React.Component {
      componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
      }
      render() {
        return (
          <h1>Hello World!</h1>
        );
      }

}
export default Testlifecyle