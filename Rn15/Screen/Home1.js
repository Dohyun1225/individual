
import React, { Component,useState } from 'react'
import { View, TextInput, Button,StyleSheet,Text } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import  {db}  from '../firebaseConfig';
import { 
  addDoc, 
  collection, 
  getDocs,
  doc,
  updateDoc,
  deleteDoc,  
  where,
  query } from "firebase/firestore"; 


function Sample3() {
    const [addName, setAddName] = useState('');
    const [idx, setidx] = useState('');
    const [addAge, setAddAge] = useState('');
    const [id, setID] = useState('');
    const [users, setUsers] = useState();
      const updateDB = async ()=>{
        try{
          const docRef = doc(db, "user", idx)
          await updateDoc(docRef, {
            addName: addName,
            addAge: addAge
          });
          alert("Updated!!")
          readfromDB()
        }catch(error){
          console.log(error.message)
        }
      }
    
      const queryDB = async ()=>{
        try{
          const q = await query(collection(db, "user" ), where('addName',"==","test23"))
          const singleDoc = await getDocs(q);
          console.log(singleDoc)
        }catch(error){
          console.log(error.message)
        }
      }
    
      const readfromDB = async ()=>{
        try{
          const data = await getDocs(collection(db, "user" ))
          setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        }catch(error){
          console.log(error.message)
        }
      }
    
      const addtoDB = async ()=>{
        try{
          await addDoc(collection(db, "user" ), {
            addName: addName,
            addAge: addAge,
            createdAt: new Date(),
          });
          alert("Added!!")
          setAddName("")
          setAddAge("")
        }catch(error){
          console.log(error.message)
        }
        const deletefromDB = async ()=>{
    try{
      const docRef = doc(db, "user", id);
      await deleteDoc(docRef);
      alert("Deleted!!")
      readfromDB()
    }catch(error){
      console.log(error.message)
    }
  }
    }
    
      return (
        <View style={StyleSheet.fixToText}>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text>Todo ????????? ????????????</Text>
            <Text>Todo ????????? ????????? ????????? ??? ????????????</Text>
          <Button 
           color="#2c2c2c"
            title="????????? ????????????" onPress={readfromDB} />
          {users?.map((row, idx) => {
           
            return <Text>User- {idx}{row.addName},{row.addAge}</Text>;
          })}

<Button  color="#2c2c2c" title="????????????" onPress={updateDB} />
<Text>????????? ????????? ????????? ???????????????!</Text>
      
  <TextInput
        placeholder="????????? ??????"
        value={idx}
        onChangeText={setidx}
      />
      
      <TextInput
        placeholder="??????"
        value={addName}
        onChangeText={setAddName}
      />
      <TextInput
        placeholder="??? ???"
        value={addAge}
        onChangeText={setAddAge}
      />
      

        </View>);
    }

    const style = StyleSheet.create(
      {

        fixToText:{
          flexDirection: 'row',
          justifyContent: 'spece-between',
        }
      }
    )
    

    export default Sample3;