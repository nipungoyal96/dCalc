import {ADD_TEXT_INPUT} from '../actions/createScreenAction';




const intialState={
    data:[]
}

export default (state=intialState,action)=>{
    switch(action.type){
        case ADD_TEXT_INPUT:
            const item=action.fieldData;
            return{
                ...state,
                data:state.data.concat(item)
            }
        default:
            return state

    }
}