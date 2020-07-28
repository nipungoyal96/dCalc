import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import PlayScreen from '../components/PlayScreen';
import CreateScreen from '../components/CreateScreen';

const CreateNavigator = createStackNavigator({
    CreateScreen:CreateScreen,
    PlayScreen:PlayScreen
   

})

export default createAppContainer(CreateNavigator);