import React from 'react';
import { View, Text, TextInput, StyleSheet, Picker } from 'react-native';
import { CartForm } from '../../../../constants/CustomTypes';

const Delievry = ({form, changeForm} : {form: CartForm, changeForm: any}) => {

  const [country,changeCountry] = React.useState("SRB");
 
  
  return (
    <View style={{marginTop: 10}}>
      <View style={{flexDirection: 'row', margin: 10}}>
        <TextInput placeholder="First Name" style={styles.smallInput}  onChangeText={text => changeForm({...form, firstName: text})}/>
        <TextInput placeholder="Last Name" style={styles.smallInput} onChangeText={text => changeForm({...form, lastName: text})} />
      </View>

      <View style={{margin: 10}}>
        <TextInput placeholder="Address Line" style={styles.fullInput} onChangeText={text => changeForm({...form, address: text})} />
      </View>

      <View style={{flexDirection: 'row', margin: 10}}>
        <TextInput placeholder="Town / City" style={styles.smallInput} onChangeText={text => changeForm({...form, town: text})} />
        <TextInput placeholder="Post Code" style={styles.smallInput}  onChangeText={text => changeForm({...form, postCode: text})}/>
      </View>

      <View style={{flexDirection: 'row', margin: 10}}>
        <Text style={styles.country}>Country: </Text>
        <Picker
        selectedValue={country}
        style={{ height: 50, width: 250, borderColor: '#eee', color: '#999' }}
        onValueChange={(itemValue, itemIndex) => changeCountry(itemValue)}
      >
        <Picker.Item label=" 🇷🇸 Serbia" value="SRB" />
        <Picker.Item label=" 🇬🇧 United Kingdom" value="UK" />
        <Picker.Item label=" 🇷🇺 Russia" value="RU" />
        <Picker.Item label=" 🇺🇸 United States" value="USA" />
      </Picker>
      </View>

      <View style={{margin: 10}}>
        <TextInput placeholder="Phone Number (*optional)" style={styles.fullInput} onChangeText={text => changeForm({...form, phoneNum: text})} />
      </View>

    </View>
  )
} 

const styles = StyleSheet.create({
  smallInput: {
    borderColor: '#eee',
    borderWidth: 2,
    width: '50%',
    padding: 10
  },
  fullInput: {
    borderColor: '#eee',
    borderWidth: 2,
    width: '100%',
    padding: 10
  },
  country: {
    marginTop: 10,
    marginRight: 10,
    fontSize: 15,
    color: '#999'
  }
});

export default Delievry;

