import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { blue, white } from '../../../constants/CustomColors';
import Constants from 'expo-constants';

const ProfileSettings = ({navigation} : {navigation: any}) => {

  const userInfoInit = {
    userName: "Artisoft",
    email: "admin@mobistore.com"
  }

  const [userInfo, changeUserInfo] = React.useState(userInfoInit);

  return (
    <View style={{flex: 1}}>

        <View style={styles.header}>
          <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()} style={{marginTop: 10}} >
            <MaterialIcons name="arrow-back" size={20} color={blue} />
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>Settings</Text>
          </View>
          <View> </View>
        </View>


      <ScrollView>

        <View style={{margin: 10}}>
          <Text style={styles.text}>UserName: </Text>
          <TextInput placeholder="UserName" value={userInfo.userName} onChangeText={text => changeUserInfo({...userInfo, userName: text})} style={styles.input}/>
        </View>

        <View style={{margin: 10}}>
          <Text style={styles.text}>Email: </Text>
          <TextInput placeholder="Email" value={userInfo.email} onChangeText={text => changeUserInfo({...userInfo, email: text})} style={styles.input}/>
        </View>
        
      </ScrollView>

      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Submit </Text>  
          <MaterialIcons name="check" size={22} color={white} />
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingBottom: 0,
    marginTop: Constants.statusBarHeight,
    marginBottom: 10
  },
  title: {
    color: blue,
    fontSize: 25,
  },
  text: {
    color: blue,
    fontSize: 20,
    marginBottom: 10
  },
  input: {
    borderWidth: 2,
    borderColor: '#999',
    width: Dimensions.get('window').width - 20,
    padding: 10
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    backgroundColor: blue,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonText: {
    color: white,
    fontSize: 20
  }
}); 

export default ProfileSettings;