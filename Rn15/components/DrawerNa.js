import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler'
import { StyleSheet,View, Text, Image, Button } from "react-native";
import { BottomTab} from './Navigation';
import Home from "../Screen/HoChart";
import About from "../Screen/About";
import LoginScreen from "../Screen/Login";
import Home1 from "../Screen/Home1";
import { StackTab } from "./Navigation";
import DrawerUserScreen from "../Screen/DrawerScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabB from "./Navigation";
import Todo from "../Screen/Home1";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
function MyDrawer(){
    return(
        <Drawer.Navigator initialRouteName="Home"
        drawerPosition='Left'
        >
            <Drawer.Screen name="Home" component={Todo}/> 
      <Drawer.Screen name="InformationScreen" component={About} />

     
        </Drawer.Navigator>
    );
}

export default MyDrawer;