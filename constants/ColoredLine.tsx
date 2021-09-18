import React from 'react';
import { View, Dimensions } from 'react-native';

const ColoredLine = () => {
  return (
    <View style={{width: Dimensions.get('window').width, height: 1, backgroundColor: '#eee'}}></View>
  );
}

export default ColoredLine;
