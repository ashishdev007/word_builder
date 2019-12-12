import React from 'react';
import OptionBox from './optionBox.jsx';


class options extends React.Component{

    state = {id: -1, option1 : "", option2 : "", option3 : "", flag: true};

    componentDidUpdate(){
       
        if(this.state.flag){
            this.setState({flag: false});
            var id = this.props.wordId;
            this.fetchDefs(id);
        }

    }

    fetchDefs = (id)=>{

        if(id !== -1){
            fetch(`/getdefs/${id}`).then(res => res.json())
            .then(defs => {
                this.setState({id: id, option1: defs[0], option2: defs[1], option3: defs[2]});
                console.log(this.state);
            });
        }

    }

    render(){

        return(
            <div id="options">
                <OptionBox text = {this.state.option1}></OptionBox>
                <OptionBox text = {this.state.option2}></OptionBox>
                <OptionBox text = {this.state.option3}></OptionBox>
            </div>
        );
    }
}

export default options;