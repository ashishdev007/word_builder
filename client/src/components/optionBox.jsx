import React from "react";

class Option extends React.Component{
    render(){
        return(
            <div class="optionBox">
                {this.props.text}
            </div>
        );
    }
}

export default Option;