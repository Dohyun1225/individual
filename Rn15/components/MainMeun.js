import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { View,Button, Text } from 'react-native';
import Home from '../Screen/HoChart';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const MainMeun = (props) => {
    return(
        
        <View style ={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}>
        <Text> 로그인하여야 함.</Text>
        <Button
            title= '회원가입'
            onPress={()=>{
                props.navigation.navigate("Home")
            }}
        />
        <Button
            title= '로그인'
            onPress={()=>{
                props.navigation.navigate("Home")
            }}
        />

        </View>
    );
};


export default MainMeun;