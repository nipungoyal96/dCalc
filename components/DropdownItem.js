import React from 'react';
import {Picker,View,Text,StyleSheet} from 'react-native';

const DropdownItem = (props) =>{
    let pickerItem = props.data.map((val,index)=>(
        <Picker.Item label={val} value={val} key={index} />
    ))

    console.log(props.data)
    return(
        <View style={styles.field}> 
            <Text style={{marginTop:5}}>{props.text}</Text>
            <View style={styles.inputText}>
                    <Picker
                    
                    style={{ height: 50, width: 130,marginTop:-14}}
                    
                    >
                    {pickerItem}
                    </Picker>
                  
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    field:{
        flexDirection:'row',
      marginBottom:10,
      justifyContent:'space-between'
    },
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
      }
})

export default DropdownItem;