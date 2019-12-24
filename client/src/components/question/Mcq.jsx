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
            <div className="ui container">
                <div className="ui grid">
                    <div class="ui row">
                        <div class="two wide column center aligned"></div>
                        <div class="twelve wide column left aligned">
                            <h3 id="word" class="ui huge header test">
                                {this.props.question.word}
                            </h3>
                            <div class="ui divider"></div>

                            <div className="optionBox">
                                {this.renderOptions()}
                            </div>
                            <button
                                class="ui primary large button"
                                onClick={this.getNewWord}
                            >
                                Next
                            </button>
                        </div>
                        <div class="two wide column center aligned"></div>
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
