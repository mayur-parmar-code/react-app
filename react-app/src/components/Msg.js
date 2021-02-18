import React, { Component } from 'react'

class Msg extends Component
{
    constructor(){
        super()
        this.state={
            message: 'welcome visitor'
        }
    }

    render(){
        return (
            this.state.message
        )
    }
}

export default Msg