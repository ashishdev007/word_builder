import React from "react";
import Word from "./word.js";
import OptionBox from "./optionBox.jsx";
import "./body.css";

class Body extends React.Component{

    render(){
        return(
            <div className="mainContainer">
                <div className="container">
                    <Word></Word>

                    <div id="options">
                        <OptionBox></OptionBox>
                        <OptionBox></OptionBox>
                        <OptionBox></OptionBox>
                    </div>

                    <button id = "next">Next</button>
                </div>
            </div>
        );
    }
}

export default Body;