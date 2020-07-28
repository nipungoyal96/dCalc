import React,{useState, useEffect} from 'react';

import {View,StyleSheet,Modal,Text,TextInput,Picker,CheckBox,FlatList, Alert} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import ActionButton from 'react-native-action-button';

import * as createScreenAction from '../store/actions/createScreenAction';
import CustomButton from './CustomButton';
import DisplayedComponents from './DisplayedComponents';



const CreateScreen = (props) =>{
    const addOptions=()=>{
        setModalVisible(true);
    }
    const dispatch =useDispatch();
    const [step,setStep] = useState(1);
    const [modalVisible,setModalVisible] = useState(false);
    const [action,setAction] = useState('display output')
    const [required,setRequired] = useState(false)
    const [dataType,setDataType] = useState('number');
    const [text,setText] =useState('');
    const [variable,setVariable] = useState('');
    const [defaultVal,setDefaultVal]=useState();
    const [lastOrder,setLastOrder] = useState(0);
    const [values,setValues]=useState('0');
    const [dropdown,setDropdown]=useState([]);
    const [formula,setFormula] = useState('');
    const [output,setOutput]= useState(false);
    const [display,setDisplay]=useState(true);
    const [selectedVariable,setSelectedVariable] = useState('')
    
    let intialData=useSelector(state => state.createScreen.data)
    
    const [outputFields,setOutputFields] = useState([]); 
    
    const [fieldsValue,setFieldsValue] = useState([]);
    

    useEffect(()=>{
      setFieldsValue(intialData);
    },[intialData])

   
    

    let textInputs=[];
    const saveDropDownList = () =>{

      console.log("save drop list");
            let object;
          object={
            type:'input',
            field:'drop down',
            text:text,
            variable:variable,
            dataType:dataType,
            required:false,
            order:lastOrder+1,
            data:dropdown
          }
          dispatch(createScreenAction.addTextInput(object));
        setLastOrder(lastOrder+1)
        setModalVisible(!modalVisible);
        setStep(1)
  
      }
  
    let dropItem
    if(step==412) {
      for(let i=1;i<=values;i++){
        let  data={};
        data.id=i-1;
        textInputs.push(data); 
    }

    dropItem=
    <View>
    <View style={{marginTop:30,...styles.field}}>
      <Text>Values       </Text>
      <FlatList data={textInputs} keyExtractor={item => item.id.toString()}  renderItem={itemData =>
      <TextInput style={{...styles.inputText,marginTop:0}} onChangeText={(text)=>{
        let drop=dropdown;
        drop[itemData.item.id]=text
        setDropdown(drop);
      }}/>
      
      }
    />
    </View>

    <View style={styles.field}>
                    <CustomButton  text="Save" onSelect={saveDropDownList} button={{width:145,marginTop:30,backgroundColor: "#0069FF"}}/>
                    <CustomButton  text="Cancel" onSelect={()=>console.log(dropdown)} button={{width:145,marginTop:30,backgroundColor: "#FF0000"}}/>
    </View>
    </View>
          
    }

    const saveFormulaTextField = () =>{
      if(text.length === 0){
        Alert.alert('Text field cannot be empty!!')
      }
      else if(variable.length === 0){
        Alert.alert('Variable field cannot be empty')
      }
      else if(formula.length === 0){
        Alert.alert('formula cannot be empty');
      }
      else{
      let object;
      object={
        type:'formula',
        field:'text box',
        text:text,
        variable:variable,
        display:display,
        output:output,
        formula:formula,
        order:lastOrder+1
      }
      dispatch(createScreenAction.addTextInput(object));
      setLastOrder(lastOrder+1)
      setModalVisible(!modalVisible);
      setStep(1)
    } 
    }
    const saveButtonField = () =>{
      if(text.length === 0){
        Alert.alert("Text field cannot be empty!!")
      }
      else{
        let object;
        object={
          type:'button',
          field:action,
          text:text,
          selectedVariable:variable,
          order:lastOrder+1
        }
        dispatch(createScreenAction.addTextInput(object));
        setLastOrder(lastOrder+1)
        setModalVisible(!modalVisible);
        setStep(1)
          
      }
    }

    const saveTextField=()=>{
      if(text.length === 0){
        Alert.alert('Text field cannot be empty!!')
      }
      else if(variable.length === 0){
        Alert.alert('Variable field cannot be empty')
      }
      else{
      let object;
      object={
        type:'input',
        field:'text box',
        text:text,
        variable:variable,
        dataType:dataType,
        defaultVal:defaultVal,
        required:required,
        order:lastOrder+1
      }
      dispatch(createScreenAction.addTextInput(object));
      setLastOrder(lastOrder+1)
      setModalVisible(!modalVisible);
      setStep(1)
    }
    }
    let pickerItem
    if(step === 33){
      console.log("outside if")
      console.log(outputFields)
      pickerItem=outputFields.map((field,index) => (
        <Picker.Item label={field.variable} value={field.variable} key={index} />
      )    
    )
    console.log(pickerItem)
    }
    return(
        <View style={styles.container}>
          <CustomButton text="play" onSelect={()=> props.navigation.navigate('PlayScreen')} button={{width:120,marginTop:50,backgroundColor: "#0069FF"}}/>
          <View style={{marginTop:150,alignItems:"center"}}>
            
          <FlatList data={fieldsValue} keyExtractor={item => item.order.toString()} renderItem={itemData=>
            <DisplayedComponents data={itemData.item}/>
          }/>
          </View>

             <ActionButton
         buttonColor="rgba(231,76,60,1)"
        onPress={addOptions}
        />
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <Text style={{fontSize:30}}>Add Field</Text>
                {step===1 ? <View>
                    <CustomButton  text="Input Field" onSelect={()=>{setStep(21)}} button={{width:300,marginTop:30,backgroundColor: "#0069FF"}}/>
                    <CustomButton  text="Formula Field"  onSelect={()=>{setStep(22)}} button={{width:300,backgroundColor: "#0069FF"}}/>
                    <CustomButton  text="Button Field" onSelect={()=>{setStep(23)}} button={{width:300,backgroundColor: "#0069FF"}}/>
                 
                    <CustomButton  text="Cancel" onSelect={()=>{setModalVisible(false)}} button={{width:300,marginTop:30,backgroundColor: "#FF0000"}}/>
                    </View>
                  
                :null}
                { step===21 ? <View>
                  <CustomButton  text="Text Box" onSelect={()=>{setStep(311)}} button={{width:300,marginTop:30,backgroundColor: "#0069FF"}}/>
                  <CustomButton  text="Drop Down" onSelect={()=>{setStep(312)}} button={{width:300,backgroundColor: "#0069FF"}}/>
                  <CustomButton  text="Date Field" onSelect={()=>{setStep(2)}} button={{width:300,backgroundColor: "#0069FF"}}/>
                  <CustomButton  text="CheckBox" onSelect={()=>{setStep(2)}} button={{width:300,backgroundColor: "#0069FF"}}/>
                  <View style={styles.field}>
                  <CustomButton  text="Back" onSelect={()=>{setStep(1)}} button={{width:145,marginTop:30,backgroundColor: "#0069FF"}}/>
                  <CustomButton  text="Cancel" onSelect={()=>{setModalVisible(false)}} button={{width:145,marginTop:30,backgroundColor: "#FF0000"}}/>
                  </View>
                </View>:null}
                
                { step===22 ? <View >
                  <CustomButton  text="Text Box" onSelect={()=>{setStep(321)}} button={{width:300,marginTop:30,backgroundColor: "#0069FF"}}/>
                  <CustomButton  text="Auto Number" onSelect={()=>{setStep(2)}} button={{width:300,backgroundColor: "#0069FF"}}/>
                  <CustomButton  text="Date Field" onSelect={()=>{setStep(2)}} button={{width:300,backgroundColor: "#0069FF"}}/>
                  <View style={styles.field}>
                  <CustomButton  text="Back" onSelect={()=>{setStep(1)}} button={{width:145,marginTop:30,backgroundColor: "#0069FF"}}/>
                  <CustomButton  text="Cancel" onSelect={()=>{setModalVisible(false)}} button={{width:145,marginTop:30,backgroundColor: "#FF0000"}}/>
                  </View>
                </View>:null}
                { step===23 ? <View >
                  <View style={{marginTop:15,...styles.field}}>
                  <Text>Text                 </Text>
                  <TextInput style={styles.inputText}/>
                  </View>
                  <View style={styles.field}>
                    <Text>Action              </Text>
                    <View style={styles.inputText}>
                    <Picker
                    selectedValue={action}
                    style={{ height: 50, width: 130,marginTop:-14}}
                    onValueChange={(itemValue, itemIndex) => setAction(itemValue)}
                    >
                    <Picker.Item label="Display output" value="display output" />
                    <Picker.Item label="Add Field" value="add field"/>
                    </Picker>
                    
                    </View>
                    
                  </View>
                  <View style={styles.field}><CustomButton  text="Back" onSelect={()=>{setStep(1)}} button={{width:100,marginTop:30,backgroundColor: "#FF0000"}}/>
                     <CustomButton  text="Next" onSelect={()=>{setStep(33)
                            let a=[];
                            fieldsValue.map(field=>{
                              
                              if(field.output === true){
                                a.push(field)
                              }
                            })

                            setOutputFields(a)
                            setSelectedVariable(a[0].variable)
                    }} button={{width:100,marginTop:30,backgroundColor: "#0069FF"}}/>
                  </View>
                </View>:null}
                { step===311 ? <View >
                  <View style={{marginTop:15,...styles.field}}>
                  <Text>Text                 </Text>
                  <TextInput onChangeText={val=>setText(val)} style={styles.inputText}/>
                  </View>
                  <View style={styles.field}>
                  <Text>Variable           </Text>
                  <TextInput onChangeText={val=>setVariable(val)} style={styles.inputText}/>
                  <Text>    Check</Text>
                  </View>
                  <View style={styles.field}>
                  <Text>Type                 </Text>
                  <View style={styles.inputText}>
                    <Picker
                    selectedValue={dataType}
                    style={{ height: 50, width: 130,marginTop:-14}}
                    onValueChange={(itemValue) => setDataType(itemValue)}
                    >
                    <Picker.Item label="Number" value="number" />
                    <Picker.Item label="String" value="string"/>
                    </Picker>
                  
                    </View>
                    
                  </View>
                  <View style={styles.field}>
                  <Text >Default Value  </Text>
                  <TextInput onChangeText={val=>setDefaultVal(val)} style={styles.inputText}/>
                  
                  </View>
                  <View style={styles.field}>
                    <Text style={{marginTop:5}}>Required           </Text>
                  <CheckBox value={required} onValueChange={setRequired}/>                
                  </View>
                  
                  <View style={styles.field}><CustomButton  text="Back" onSelect={()=>{setStep(1)}} button={{width:120,marginTop:30,backgroundColor: "#FF0000"}}/>
                     <CustomButton  text="Save" onSelect={saveTextField} button={{width:120,marginTop:30,backgroundColor: "#0069FF"}}/>
                  </View>
                </View>:null}

                {step === 312 ? <View>
                  <View style={{marginTop:15,...styles.field}}>
                  <Text>Text                 </Text>
                  <TextInput style={styles.inputText} onChangeText={val => setText(val)}/>
                  </View>
                    <View style={styles.field}>
                          <Text>No. Of Values  </Text>
                          <TextInput keyboardType="numeric"  style={styles.inputText} onChangeText={val => setValues(val)}/>
                          </View>
                          <View style={styles.field}>
                  <Text>Type                 </Text>
                  <View style={styles.inputText}>
                    <Picker
                    selectedValue={dataType}
                    style={{ height: 50, width: 130,marginTop:-14}}
                    onValueChange={(itemValue, itemIndex) => setDataType(itemValue)}
                    >
                    <Picker.Item label="Number" value="number" />
                    <Picker.Item label="String" value="string"/>
                    </Picker>
                  
                    </View>
                    </View>
                          <View style={styles.field}><CustomButton  text="Back" onSelect={()=>{setStep(21)}} button={{width:120,marginTop:30,backgroundColor: "#FF0000"}}/>
                     <CustomButton  text="Next" onSelect={()=>{
                       if(values===0){
                        Alert.alert('No.of Values cannot be empty!!!')  
                       }
                       else{
                       setStep(412)}}} button={{width:120,marginTop:30,backgroundColor: "#0069FF"}}/>
                  </View>
                    
                </View>:null}
                {step === 412 ? dropItem:null}
                {step === 321 ? <View>
                  <View style={styles.field}>
                  <Text>Text   </Text>
                  <TextInput style={styles.inputText} onChangeText={val => setText(val)}/>
                 </View>
                 <View style={styles.field}>
                  <Text>Variable </Text>
                  <TextInput style={styles.inputText} onChangeText={val => setVariable(val)}/>
                  </View>
                  <View style={styles.field}>
                  <Text>Formula </Text>
                  <TextInput style={styles.inputText} onChangeText={val => setFormula(val)}/>
                  </View>
                  <View style={{flexDirection:'row'}}>
                      <Text style={{marginTop:5}}>         output Field</Text>
                  <CheckBox value={output} onValueChange={setOutput}/>
                 </View>
                 <View style={{flexDirection:'row'}}>
                  <Text style={{marginTop:5}}>                  display</Text>
                  <CheckBox value={display} onValueChange={setDisplay}/>
                   </View>
                   <View style={styles.field}>
                     <CustomButton  text="Back" onSelect={()=>{setStep(1)}} button={{width:120,marginTop:30,backgroundColor: "#FF0000"}}/>
                     <CustomButton  text="Save" onSelect={saveFormulaTextField} button={{width:120,marginTop:30,backgroundColor: "#0069FF"}}/>
                  </View>
                   </View>:null }
                   {
                     step === 33 ? action === 'display output' ?<View>
                       <View style={styles.field}>
                       <Text>Text</Text>
                       <TextInput style={styles.inputText} onChangeText={val => setText(val)}/>
                       </View>
                       <View style={styles.field}>
                       <Text>Select Variable</Text>
                       <View style={styles.inputText}>
                       <Picker value={selectedVariable} onValueChange={(itemValue) => setSelectedVariable(itemValue)} style={{ height: 50, width: 130,marginTop:-14}} >
                         {pickerItem}
                       </Picker>
                       </View>
                      </View>
                      <View style={styles.field}>
                     <CustomButton  text="Back" onSelect={()=>{setStep(1)}} button={{width:120,marginTop:30,backgroundColor: "#FF0000"}}/>
                     <CustomButton  text="Save" onSelect={saveButtonField} button={{width:120,marginTop:30,backgroundColor: "#0069FF"}}/>
                  </View>
                      </View> 
                        :<View></View>
                      :null
                   }
                
                    
        </View>
        </View>
      </Modal>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1
    }, 
    field:{
      flexDirection:'row',
      marginBottom:10,
      justifyContent:'space-around'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      inputText:{
        textAlign:'center',
        height:30,
        width:130,
        borderWidth:2,
        borderColor:'#FF5722',
        borderRadius:20,
        marginTop:-5,
        marginLeft:5,
        marginBottom:5,
        backgroundColor:'#fff'
      }
})

export default CreateScreen;