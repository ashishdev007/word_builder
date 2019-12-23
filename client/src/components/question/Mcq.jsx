import React, { Component } from "react";
import { connect } from "react-redux";
import "../body.css";

import { getQuestion, newSelection, resetSelection } from "../../actions";

class Mcq extends Component {
    componentDidMount() {
        this.getNewWord();
    }

    getNewWord = () => {
        this.props.getQuestion();
        this.props.resetSelection();
    };
    clickHandle = option => {
        if (!this.props.selection) {
            this.props.newSelection(option);
        }
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
            var { selection, question } = this.props;

            var style = { backgroundColor: "white" };
            if (selection && selection.no === option.no) {
                if (option.no === question.answer) {
                    style = { backgroundColor: "green" };
                } else {
                    style = { backgroundColor: "red" };
                }
            }
            return (
                <div
                    className="optionBox"
                    key={option.no}
                    onClick={() => this.clickHandle(option)}
                    style={style}
                >
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
    var { question, selection } = state;
    return { question, selection };
};

export default connect(mapStateToProps, {
    getQuestion,
    newSelection,
    resetSelection
})(Mcq);
