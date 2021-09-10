import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import logo from '../../assets/logo.png';
import {blue, white} from '../../constants/CustomColors';


const Register = ({ navigation: { navigate, dispatch, state } }) => {

  const [form, changeForm] = React.useState({username: "",email: "", 
  password: "", confirmPassword: "", rememberMe: false});

  return (
    <View style={styles.container}>
        <Image source={logo} resizeMode="contain" style={styles.logoStyles}/>
        <TextInput placeholder="Username" value={form.username}
        onChangeText={text => changeForm({...form, username: text})}
        style={styles.textField}/>
        <TextInput placeholder="Email" value={form.email}
        onChangeText={text => changeForm({...form, email: text})}
        style={styles.textField}/>
        <TextInput placeholder="Password" value={form.password}
        onChangeText={text => changeForm({...form, password: text})}
        style={styles.textField}/>
        <TextInput placeholder="Confirm Password" value={form.confirmPassword}
        onChangeText={text => changeForm({...form, confirmPassword: text})}
        style={styles.textField}/>
       <TouchableOpacity activeOpacity={0.8} style={styles.submit}>Register</TouchableOpacity>
       <Text style={styles.register}>Already have an account?
       <Text style={{color: '#000'}} onPress={() => navigate("Profile")}> Login !</Text></Text>
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
    fontFamily: "Arial",
    marginTop: 5
  },
  register: {
    margin: 10,
    color: '#999'
  },
});

export default Register;