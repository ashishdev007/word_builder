import React from "react";

class Word extends React.Component {
  state = { word: "", id: -1 };
  componentDidUpdate(prevProps, prevState) {
    // console.log(this.state.word);
    if (prevProps.word === this.props.word) {
      console.log("Same!");
    }
  }

  render() {
    return (
      <div id="word">
        <h1>{this.props.word}</h1>
      </div>
    );
  }
}

export default Word;
