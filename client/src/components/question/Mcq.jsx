import React, { Component } from "react";
import { connect } from "react-redux";
import "../body.css";

class Mcq extends Component {
    render() {
        return (
            <div className="mainContainer">
                <div className="container">
                    <div id="word">
                        <h1>WORD</h1>
                    </div>
                    <div id="options">
                        <div class="optionBox">Option</div>
                        <div class="optionBox">Option</div>
                        <div class="optionBox">Option</div>
                    </div>
                    <button id="next">Next</button>
                </div>
            </div>
        );
    }
}

export default connect(null)(Mcq);
