import React from 'react';

class Word extends React.Component{

    state = {word: ""};

    componentDidMount(){
        fetch("/getword")
        .then(res => res.json())
        .then(word => this.setState({word: word.name.toUpperCase()}));
    }

    render(){
        return(
            <div id="word">
                <h1>{this.state.word}</h1>
            </div>
        );
    }
}

export default Word;