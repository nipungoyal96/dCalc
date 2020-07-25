export const ADD_TEXT_INPUT ='TEXT INPUT';

export const addTextInput = (fieldData)=>{
    console.log(fieldData);
    return{
        type:ADD_TEXT_INPUT,
        fieldData:fieldData
    }
}