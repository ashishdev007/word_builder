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
                    key={option.no}
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
            <div className="ui container">
                <div className="ui grid">
                    <div className="ui row">
                        <div className="two wide column center aligned"></div>
                        <div className="twelve wide column left aligned">
                            <h3 id="word" className="ui huge header test">
                                {this.props.question.word}
                            </h3>
                            <div className="ui divider"></div>

                            <div className="optionBox">
                                {this.renderOptions()}
                            </div>
                            <button
                                className="ui primary large button"
                                onClick={this.getNewWord}
                            >
                                Next
                            </button>
                        </div>
                        <div className="two wide column center aligned"></div>
                    </div>
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
