import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

const Delievry = () => {

  const [countryCode, changeCountryCode] = React.useState("RS");
  const [country,changeCountry] = React.useState(null);

  return (
    <View style={{marginTop: 10}}>
      <View style={{flexDirection: 'row', margin: 10}}>
        <TextInput placeholder="First Name" style={styles.smallInput} />
        <TextInput placeholder="Last Name" style={styles.smallInput} />
      </View>

      <View style={{margin: 10}}>
        <TextInput placeholder="Address Line" style={styles.fullInput} />
      </View>

      <View style={{flexDirection: 'row', margin: 10}}>
        <TextInput placeholder="Town / City" style={styles.smallInput} />
        <TextInput placeholder="Post Code" style={styles.smallInput} />
      </View>

      <View style={{flexDirection: 'row', margin: 10}}>
        <Text style={styles.country}>Country: </Text>
          <CountryPicker
          countryCode={countryCode as any}
          withFilter={true}
          withFlag={true}
          withCountryNameButton={true}
          withEmoji={true}
          onSelect={(country: any) => {
          changeCountryCode(country.cca2); changeCountry(country)}}
          visible
      />
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

