import React from "react";
import Word from "./word.js";
import Options from "./options.jsx";
import "./body.css";

class Body extends React.Component{

    state = {wordId: -1};

    wordAcuired = (id) =>{
        this.setState({wordId: id}, () => {
            console.log("word id: " + this.state.wordId);
        });        
    };

    render(){
        return(
            <div className="mainContainer">
                <div className="container">
                    <Word wordAcuired = {this.wordAcuired}></Word>

                    <Options wordId = {this.state.wordId}></Options>

                    <button id = "next">Next</button>
                </div>
            </div>
        );
    }
}

export default Body;