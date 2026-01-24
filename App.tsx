import { useEffect, useState } from 'react';
import { View, Text,Button,StyleSheet} from 'react-native';


const App=() =>{
  const [count,setCount]=useState(0);
  useEffect(()=>{
    console.log(`useffect countered ${count}`)
  },[count])
  return(
    <View>
      <Text style={style.textStyle}>USEEFECT HOOK </Text>
      <Text style={style.textStyle}>COUNTER {count}</Text>
      <Button title="press" onPress={()=>setCount(count+1) } color={'orange'} />
 
    </View>
  )
}

const style=StyleSheet.create({
  textStyle:{
  color:'green',
  fontSize:20,
  textAlign:'center',
  margin:20
  }
})



export default App;



//-------- form making----------
// const App = () => {
//   const [name,setName]=useState('');
//   const [password, setPassword]=useState('');
//   const [passwordVisible,setPasswordVisible]=useState(false)
//   const [email,setEmail]=useState('');
//   const [display,setDisplay]=useState(false)

//   const resetForm = ()=> {
//     setDisplay(false);
//     setName("");
//     setEmail("");
//     setPassword("");
//   }

//   return (
//     <View>
//       <Text style={{fontSize:30,textAlign:'center'}}> Form Making</Text>
//       <TextInput 
//       style = {style.textInputStyle} 
//        placeholder='Enter User Name' 
//        value={name} 
//        onChangeText={(text)=> setName(text)} 
//         />

//       <TextInput 
//       style = {style.textInputStyle} 
//        placeholder='Enter Password' 
//        secureTextEntry={!passwordVisible}
//        value={password} 
//        onChangeText={(text)=> setPassword(text)} 
//         />
//        <Button color={"white"} 
//        title={passwordVisible ? '🐵' : '🙈'} 
//        onPress={
//         passwordVisible?
//         () => setPasswordVisible(false)
//         : ()=> setPasswordVisible(true)
//         } 
//        />

//       <TextInput 
//       style = {style.textInputStyle} 
//        placeholder='Enter User Email' 
//        value={email} 
//        onChangeText={(text)=> setEmail(text)} 
//         />

//     <View style={{margin:10}}>
//         <Button color={"green"}
//         title="Submit Details" 
//         onPress={()=>{setDisplay(true)}} />

//        <Button  color={"blue"}
//        title='Clear Form'
//        onPress={resetForm} />

//        <View>
//         { display ?
//         (<View style={{marginTop:20,padding:5}}>
//         <Text>User Name is: {name} </Text>
//         <Text>User password is: {password} </Text>
//         <Text>User Email is: {email} </Text>
//         </View>)
//         :null }
//        </View>
//      </View>
    
   
//     </View>
       
//   )
// }

// const style =StyleSheet.create({
//   textInputStyle:{
//     fontSize:20,
//     margin:5,
//     borderWidth:2,
//     borderColor:'Black',
//     padding:3,
//     backgroundColor:'orange',
//     height:50,
//     textAlign:'center',
//     textAlignVertical:'center'

//   }
// })