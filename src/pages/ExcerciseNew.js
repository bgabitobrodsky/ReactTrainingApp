import React from 'react';

export default class ExcerciseNew extends React.Component{
    
    handleClick =()=>{
        console.log(this);
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                Send
            </button>
        )
    }
}