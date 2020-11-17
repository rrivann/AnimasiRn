import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Anim1, Anim2, Home} from '../Page';
const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Anim1"
        component={Anim1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Anim2"
        component={Anim2}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
