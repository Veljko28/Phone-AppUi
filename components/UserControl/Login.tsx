import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import logo from '../../assets/logo.png';
import {blue, white} from '../../constants/CustomColors';
import CheckBox from 'react-native-check-box'


const Login = () => {

  const [form, changeForm] = React.useState({username: "", password: "", rememberMe: false});

  return (
    <View style={styles.container}>
        <Image source={logo} resizeMode="contain" style={styles.logoStyles}/>
        <TextInput placeholder="Username / Email" value={form.username}
        onChangeText={text => changeForm({...form, username: text})}
        style={styles.textField}/>
        <TextInput placeholder="Password" value={form.password}
        onChangeText={text => changeForm({...form, password: text})}
        style={styles.textField}/>
        <CheckBox
          checkBoxColor={blue}
          rightTextStyle={{color: '#555'}}
          style={{marginRight: 60, padding: 5}}
          onClick={()=>{
            changeForm({
               ...form, rememberMe: !form.rememberMe
            })
          }}
          isChecked={form.rememberMe}
          rightText={"Remember Me"}
      />
       <TouchableOpacity activeOpacity={0.8} style={styles.submit}>Login</TouchableOpacity>
       <Text style={styles.register}>Don't have an account? 
       <span style={{color: '#000'}}> Register !</span></Text>
       <Text style={styles.forgot}>Forgot Password ?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logoStyles: {
    width: 200,
    height: 100,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textField: {
    borderColor: blue,
    borderWidth: 2,
    borderRadius: 50,
    padding: 10,
    margin: 10,
    outline: 'none',
    width: 200,
  },
  submit: {
    backgroundColor: blue,
    width: 200,
    color: white,
    padding: 7,
    fontSize: 15,
    textAlign: 'center',
    borderRadius: 5,
    fontFamily: "Arial"
  },
  register: {
    margin: 10,
    color: '#999'
  },
  forgot: {
    color: '#999'
  }
});

export default Login;