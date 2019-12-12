import React from 'react';
import OptionBox from './optionBox.jsx';


class options extends React.Component{

    constructor(props){
        super(props);
        this.state = {id: -1, option1 : "", option2 : "", option3 : "", flag: true, correct:1};

        this.fetchDefs = (id)=>{

            if(id !== -1){
                fetch(`/getdefs/${id}`).then(res => res.json())
                .then(defs => {
                    this.setState({id: id, option1: defs[0], option2: defs[1], option3: defs[2]});
                    console.log(this.state);
                });
            }
    
        }

        this.showVerdict = (element, correct) => {
            element.style.color = "white";
            if(correct){
                console.log(element.style);
                element.style.background = "green";
            }
            else{
                element.style.background = "red";
            }
        }
    
        this.check = (option) =>{
            if(option.no === this.state.correct){
                this.showVerdict(option.element, true);
            }else{
                this.showVerdict(option.element, false);
            }
        }
    
        

    }


    componentDidUpdate(prevProps){
       
        if(this.props.wordId !== prevProps.wordId){
            this.setState({flag: false});
            var id = this.props.wordId;
            this.fetchDefs(id);
        }

    }

    render(){

        return(
            <div id="options">
                <OptionBox text = {this.state.option1} check = {this.check} no = {1}></OptionBox>
                <OptionBox text = {this.state.option2} check = {this.check} no = {2}></OptionBox>
                <OptionBox text = {this.state.option3} check = {this.check} no = {3}></OptionBox>
            </div>
        );
    }
}

export default options;