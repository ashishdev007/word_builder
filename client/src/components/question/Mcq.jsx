import React, { Component } from "react";
import { connect } from "react-redux";
import "../body.css";

import { getQuestion, newSelection, resetSelection } from "../../actions";
import Option from "./optionBox.jsx";
import LoaderModal from "../LoaderModal.jsx";

class Mcq extends Component {
    componentDidMount() {
        this.getNewWord();
    }

    getNewWord = () => {
        this.props.getQuestion();
        this.props.resetSelection();
    };

    renderOptions = () => {
        var { options } = this.props.question;

        return options.map(option => {
            var { question } = this.props;
            var isAnswer = question.answer === option.no;
            return (
                <Option
                    answer={question.answer}
                    isAnswer={isAnswer}
                    option={option}
                />
            );
        });
    };

    render() {
        if (!this.props.question.word) {
            return <LoaderModal />;
        }

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
    var { question } = state;
    return { question };
};

export default connect(mapStateToProps, {
    getQuestion,
    newSelection,
    resetSelection
})(Mcq);
