import React from 'react';
import {Button,View,StyleSheet} from 'react-native';

const ButtonCompoent = (props) =>{
    return(
        <View style={styles.field}>
                <Button title={props.text}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    field:{
        flexDirection:'row',
        marginBottom:10,
        justifyContent:'space-between'
    }
})

export default ButtonCompoent;