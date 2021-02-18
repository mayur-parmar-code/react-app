import React, { Component } from 'react';

class Welcome extends Component{
    constructor(props){
        super(props);
        this.state={
            name: this.props.name
        };    
    }
    
    render(){
        return <h1>hello {this.state.name}</h1>;
    }
}

export default Welcome