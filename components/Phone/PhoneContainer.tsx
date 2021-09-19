import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import {Phone} from '../../constants/CustomTypes';
import PhoneCard from '../PhoneCard';
import { blue } from '../../constants/CustomColors';
import ColoredLine from '../../constants/ColoredLine';

const PhoneContainer = ({phones, title}: {phones: Phone[], title: string}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={{marginTop: 5}}>
          <ColoredLine/>
        </View>
      <View style={styles.container}>
        {phones.map(x => <PhoneCard/>)}
      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  title: {
    color: blue,
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
    paddingBottom: 10
  }
});

export default PhoneContainer;