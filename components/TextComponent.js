import React from 'react';

import {Text,TextInput,StyleSheet,View} from 'react-native';

const TextComponent = (props) => {
    console.log("in text")
    return(
        <View style={styles.field}>
            <Text style={{marginTop:4}}>{props.text}</Text>
            <TextInput editable={props.editable} style={styles.inputText}/>
        </View>
    )
}

const styles=StyleSheet.create({
    inputText:{
        textAlign:'center',
        height:30,
        width:130,
        borderWidth:2,
        borderColor:'#FF5722',
        borderRadius:20,
        marginTop:0,
        marginLeft:5,
        marginBottom:5,
        backgroundColor:'#fff'
      },
      field:{
        flexDirection:'row',
        marginBottom:10,
        justifyContent:'space-between'
      },
})

export default TextComponent;