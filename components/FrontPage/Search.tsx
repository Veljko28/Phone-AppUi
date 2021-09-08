import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { IconButton } from 'react-native-paper';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Search(props: any) {
  const [history, changeHistory] = React.useState([
    'BMW X5',
    'AUDI Q7',
    'VOLKWAGEN SHARK',
    'FIAT PUNTO',
    'VOLKSWAGEN ATLAS',
  ]);

  React.useEffect(() => {
    // axios code for fetching history
  }, []);
  return (
    <View style={{ paddingTop: Constants.statusBarHeight, backgroundColor: '#fff', flex: 1 }}>
      {/* SEARCH BAR AND ICONS */}
      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: '#dedede',
          borderBottomWidth: 2,
        }}>
        <IconButton
          icon={() => (
            <Ionicons
              name="arrow-back"
              style={{ color: '#45a3f5' }}
              size={20}
            />
          )}
          size={30}
          onPress={() => props.goBack()}
        /> 
        <TextInput placeholder="CAR NAME..." style={styles.carSearch} />
        <IconButton
          style={styles.iconButton}
          icon={() => (
            <Ionicons name="mic" style={{ color: '#45a3f5' }} size={20} />
          )}
          size={30}
        />
      </View>

      <ScrollView>
        {/* PREVIOUS SEARCHES */}
        {history.map((x) => {
          return (
            <View style={styles.historyItem}>
              <FontAwesome5 name="history" size={20} color="#999" />
              <Text style={styles.historyText}>{x}</Text>
              <Ionicons name="close" size={20} style={{ color: '#999' }} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: '#dedede',
    marginTop: 7,
    margin: 5,
  },
  carSearch: {
    width: '65%',
    height: 40,
    backgroundColor: '#dedede',
    borderRadius: 3,
    marginTop: 10,
    padding: 5,
    color: '#000',
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#dedede',
  },
  historyText: {
    color: '#000',
    marginLeft: 10,
    fontSize: 17,
  },
});
