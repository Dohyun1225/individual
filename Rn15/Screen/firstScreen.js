import React from 'react'
import { StyleSheet ,View, Text, TouchableOpacity,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationAction } from '@react-navigation/native';

const fristScreen = ({Navigation})=>{
    function onSignIn() {
        Navigation.navigate("SignIn");
    }
    
    function onSignUp() {
        Navigation.navigate("SignUp");
    }
    return (
        <SafeAreaView>
        <View>
            <Text> Mobile App</Text>
        </View>
        
        <View>
            <TouchableOpacity onPress={onSignIn}>
            <Text>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={onSignUp}>
            <Text>Join Membership</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>


    );
};





export default fristScreen;