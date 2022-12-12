import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from './components/Navigation';
import TabB from './components/Navigation';
import fristScreen from './Screen/firstScreen';
import MyDrawer from './components/DrawerNa';
import B1 from './Screen/DrawerScreen';
export default function App() {
  return (
    <NavigationContainer>
      <TabB></TabB>
    </NavigationContainer>
  );
}