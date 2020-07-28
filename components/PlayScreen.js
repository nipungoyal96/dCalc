import React,{useReducer} from 'react';
import {FlatList,View} from 'react-native'

import {useSelector} from 'react-redux';



const formReducer = (state,action)=>{
    if(action.type === 'UPDATE'){
        const updatedObj={
            ...state,
            [action.variable]:action.fieldValue
        }
        return {
            updatedObj
        }
    }
 }

const PlayScreen = (props) =>{
    const fieldsValue = useSelector(state => state.createScreen.data);



const obj={}

fieldsValue.map((item,i)=>{
    
    if(item.field === 'text box')
    obj[item.variable]=''
    else if(item.field === 'drop down')
    obj[item.variable]=item.data[0]
    
})



const [formState,dispatchFormState] = useReducer(formReducer,obj);
const onchange = (variable,text) => {
    dispatchFormState({type:"UPDATE",variable : variable , fieldValue: text})
}

    console.log(obj);
    return(
        <View>
            <View style={{marginTop:150,alignItems:"center"}}>
            
            <FlatList data={fieldsValue} keyExtractor={item => item.order.toString()} renderItem={itemData=>
              <DisplayedComponents data={itemData.item} onChange={onchange.bind(this,itemData.item.variable)}/>
            }/>
            </View>

        </View>
    )
}

export default PlayScreen;