import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home1 from "../Screen/Home1";
import Home2 from "../Screen/Home2";
import Home from "../Screen/HoChart";
import About from "../Screen/About";
import Todo from "../Screen/Home1";
import Sample1 from "../Screen/SampleSc";
import Sample2 from "../Screen/Home2";
import Sample3 from "../Screen/Home1";

const Stack = createStackNavigator(); //네비를 사용하기 위해서 사용.
const Tab = createBottomTabNavigator();

function TabB(){
    return(
        <Tab.Navigator initialRouteName="Home"
        drawerPosition='right'
        screenOptions={{headerShown: false}}    >
            <Tab.Screen name="Home" component={Sample1}/> 
      <Tab.Screen name="Cal" component={Sample2} />
      <Tab.Screen name="Todo" component={Sample3} />


     
        </Tab.Navigator>
    );
}

export default TabB;


export const StackTab = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name = '샘플1' component={ About }/>
            <Stack.Screen name = '샘플2' component={ Home2 }/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
