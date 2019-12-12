import React from 'react';

class Word extends React.Component{

    state = {word: "", id: -1, trigger: false};

    getWord = () => {
        fetch("/getword")
        .then(res => res.json())
        .then(word => this.setState({word: word.name.toUpperCase(), id: word.id}, () => {
            this.props.wordAcuired(this.state.id);
        }));

        console.log("Got a new Word");
    }

    componentDidMount(){
        console.log("Word Mounted");
        this.setState({trigger: !this.state.trigger});
        
    }

    componentDidUpdate(){
        console.log("Word updated with id  "+ this.props.wordId);
        if(this.props.wordId === -1){
            this.getWord();
        }
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