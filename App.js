import React, { Component } from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login';
import Tabs from './src/navigation/tab';

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={'Login'}
        >
          <Stack.Screen name="Login" component={Login} />

          <Stack.Screen name="Home" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
