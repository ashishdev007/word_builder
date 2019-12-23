import React, { Component } from "react";
import { connect } from "react-redux";
import "../body.css";

import { getQuestion } from "../../actions";

class Mcq extends Component {
    componentDidMount() {
        this.getNewWord();
    }

    getNewWord = () => {
        this.props.getQuestion();
    };

    renderOptions = () => {
        var { options } = this.props.question;

        if (!options) {
            return (
                <div className="ui active dimmer">
                    <div className="ui loader"></div>
                </div>
            );
        }

        return options.map(option => {
            return (
                <div className="optionBox" key={option.no}>
                    {option.text}
                </div>
            );
        });
    };

    render() {
        return (
            <div className="mainContainer">
                <div className="container segment">
                    <div id="word">
                        <h1>{this.props.question.word}</h1>
                    </div>
                    <div id="options">{this.renderOptions()}</div>
                    <button id="next" onClick={this.getNewWord}>
                        Next
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { question: state.question };
};

export default connect(mapStateToProps, { getQuestion })(Mcq);
