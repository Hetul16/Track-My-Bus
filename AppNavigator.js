// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './components/Onboarding';
import Login from './components/Login';
import signup from './components/signup';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import Home from './components/Home';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="signup" component={signup} options={{ headerShown: false }}/>
          <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>

          <Stack.Screen name="ProfilePage" component={ProfilePage}  />
        </Stack.Navigator>
      );
}

export default AppNavigator;
