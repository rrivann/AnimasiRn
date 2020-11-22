import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Anim1, Anim2, Anim3, Anim4, Anim5, Home} from '../Page';
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
      <Stack.Screen
        name="Anim3"
        component={Anim3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Anim4"
        component={Anim4}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Anim5"
        component={Anim5}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
