import React from "react";
import Word from "./word.js";
import Options from "./options.jsx";
import "./body.css";

class Body extends React.Component{

    state = {word: "", wordId: -1};

    getWord = () => {

        fetch("/getword")
        .then(res => res.json())
        .then(word => this.setState({word: word.name.toUpperCase(), wordId: word.id}, () => {
            console.log(this.state);
        }));
    }

    componentDidMount(){
        this.getWord();
    }

    render(){
        return(
            <div className="mainContainer">
                <div className="container">
                    <Word word = {this.state.word}></Word>

                    <Options wordId = {this.state.wordId}></Options>

                    <button id = "next">Next</button>
                </div>
            </div>
        );
    }
}

export default Body;