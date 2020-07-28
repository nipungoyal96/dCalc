import React from 'react';
import {Button,View,StyleSheet} from 'react-native';

import CustomButton from './CustomButton';

const ButtonCompoent = (props) =>{
    return(
        <View style={styles.field}>
                <CustomButton text={[props.text]} button={{width:165,marginTop:10   ,backgroundColor: "#0069FF"}}/>
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