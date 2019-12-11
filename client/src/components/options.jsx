import React from 'react';
import OptionBox from './optionBox.jsx';


class options extends React.Component{
    render(){
        return(
            <div id="options">
                <OptionBox></OptionBox>
                <OptionBox></OptionBox>
                <OptionBox></OptionBox>
            </div>
        );
    }
}

export default options;