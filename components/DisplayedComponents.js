import React from 'react';
import {View, Button} from 'react-native';

import TextComponent from './TextComponent';
import DropdownItem from './DropdownItem';

import ButtonComponent from './ButtonComponent'

const DisplayedComponent =(props)=>{
    console.log("in disp");
    console.log(props.data)
    return(
        <View>
        {props.data.type === 'input' && props.data.field === 'text box' ? <TextComponent text={props.data.text} editable={true}/>:null }
        {props.data.type === 'input' && props.data.field === 'drop down' ? <DropdownItem data={props.data.data}  text={props.data.text}/>:null}
        {props.data.type === 'formula' && props.data.field === 'text box' ? <TextComponent text={props.data.text} editable={false}/>:null }
        {props.data.type === 'button'  ? <ButtonComponent text={props.data.text}/> :null}
        </View>
    )
}

export default DisplayedComponent;