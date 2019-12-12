import React, { createRef } from "react";

class Option extends React.Component{

    constructor(props){
        super(props);

        this.state = {no: this.props.no};

        this.divRef = new createRef();

        this.callCheck = () =>{
            this.props.check({element: this.divRef.current, no: this.state.no});
        }

    }

    

    render(){
        return(
            <div class="optionBox" onClick={this.callCheck} ref={this.divRef}>
                {this.props.text}
            </div>
        );
    }
}

export default Option;