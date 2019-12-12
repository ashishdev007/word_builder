import React from "react";

class next extends React.Component {
  render() {
    return (
      <button id="next" onClick={this.props.next}>
        Next
      </button>
    );
  }
}

export default next;
