import React, { createRef } from "react";

class Option extends React.Component{

    constructor(props){
        super(props);

        this.state = {no: this.props.no, checked : false};

        this.divRef = new createRef();

        this.callCheck = () =>{
            this.setState({ checked: true }, () => {
                this.props.check({element: this.divRef.current, no: this.state.no});
            });
            
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.text !== this.props.text){

            this.divRef.current.style.background = "white";
            this.divRef.current.style.color = "black";

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