import React, { Component } from 'react';
class Welcome extends Component{
    render(){
        return(
            <h1>{this.props.x}</h1>
        )
    }
}
export default Welcome