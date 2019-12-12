import React from 'react';

class Word extends React.Component{

    state = {word: "", id: -1};

    render(){
        return(
            <div id="word">
                <h1>{this.props.word}</h1>
            </div>
        );
    }
}

export default Word;