import React from "react";

class next extends React.Component{

    next = () =>{
        this.props.getNext();
    }

    render(){
        return(
            <button id = "next" onClick = {this.next}>Next</button>
        );
    }
}

export default next;