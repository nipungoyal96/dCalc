import React from 'react';
import {TouchableOpacity,Text,StyleSheet,View} from 'react-native';

const CustomButton = (props) =>{
    return(
        <TouchableOpacity onPress={props.onSelect} style={{...styles.appButtonContainer,...props.button}}>
    <Text style={styles.appButtonText}>{props.text}</Text>
  </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    appButtonContainer: {
        margin:5,
        elevation: 8,
        
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})

export default CustomButton;