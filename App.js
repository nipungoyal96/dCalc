import React from 'react';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import { StyleSheet, Text, View,TextInput } from 'react-native';

import CreateScreen from './components/CreateScreen';
import createScreenReducer from './store/reducer/createScreenReducer'

const rootReducer=combineReducers({
  createScreen:createScreenReducer
});

const store=createStore(rootReducer);

export default function App() {
  let val
  return (
    <Provider store={store}>
    <View style={styles.container}>
        <CreateScreen/>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
