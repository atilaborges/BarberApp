import { StatusBar } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStack from './src/stacks/MainStack'
import { NavigationContainer } from '@react-navigation/native';
import UserContextProvider from './src/contexts/UserContext';

export default function App() {
  return (
    <UserContextProvider>
      <StatusBar barStyle="dark-content"
        backgroundColor="#C4C4CC"

      />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>

  );
}

