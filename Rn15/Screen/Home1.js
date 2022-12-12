
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
    const [addAge, setAddAge] = useState('');
    const [id, setID] = useState('');
    const [users, setUsers] = useState();
      const updateDB = async ()=>{
        try{
          const docRef = doc(db, "user", id);
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
        <View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text>Todo 데이터 불러오기</Text>
            <Text>Todo 저장한 내용을 확인할 수 있습니다</Text>
          <Button title="데이터 불러오기" onPress={readfromDB} />
          {users?.map((row, idx) => {
            
            return <Text>{row.addName},{row.addAge}</Text>;
          })}

<Button title="변경하기" onPress={updateDB} />
<Text>날짜는 정확히 기입해야해요!</Text>
      
      <TextInput
        placeholder="날짜"
        value={addName}
        onChangeText={setAddName}
      />
      <TextInput
        placeholder="할 일"
        value={addAge}
        onChangeText={setAddAge}
      />


        </View>);
    }
    

    export default Sample3;