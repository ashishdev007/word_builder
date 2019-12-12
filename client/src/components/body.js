import React from "react";
import Word from "./word.js";
import Options from "./options.jsx";
import Next from "./next.jsx";
import "./body.css";

class Body extends React.Component{

    state = {wordId: -1};

    wordAcuired = (id) =>{
        console.log("Triggered")
        this.setState({wordId: id}, () => {
            console.log("word id: " + this.state.wordId);
        });        
    };

    getNext = () =>{
        this.setState({wordId: -1});
    }

    render(){
        return(
            <div className="mainContainer">
                <div className="container">
                    <Word wordAcuired = {this.wordAcuired} wordId = {this.state.wordId}></Word>

                    <Options wordId = {this.state.wordId}></Options>

                    <Next getNext = {this.getNext}></Next>                    
                </div>
            </div>
        );
    }
}

export default Body;