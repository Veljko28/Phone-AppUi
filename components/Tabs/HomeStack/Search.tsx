import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { blue, white } from '../../../constants/CustomColors';


const Search = ({navigation, changeRemoveTabsOnSearch} : {navigation: any, changeRemoveTabsOnSearch: any}) => {

  const history = [
    'iphone 7+', "redmi note 8", "samsung galaxy s10", "pocophone f2"
  ]

  React.useEffect( () => {
    changeRemoveTabsOnSearch(true);
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.9} onPress={() => {  changeRemoveTabsOnSearch(false); navigation.navigate("Home") }} style={{marginTop: 10}} >
          <MaterialIcons name="arrow-back" size={20} color={blue} />
        </TouchableOpacity>
        <View>
          <TextInput placeholder="What are you looking for?" style={styles.search} />
        </View>
        <TouchableOpacity activeOpacity={0.9} style={{marginTop: 10}}>
          <MaterialIcons name="mic" size={20} color={blue} />
        </TouchableOpacity>
      </View>

     <ScrollView>
        {/* PREVIOUS SEARCHES */}
        {history.map((x) => {
          return (
            <TouchableOpacity activeOpacity={0.7}  style={styles.historyItem}>
              <MaterialIcons name="history" size={20} color="#999" />
              <Text style={styles.historyText}>{x}</Text>
              <MaterialIcons name="close" size={20} color="#999" />
            </TouchableOpacity>
          );
        })}
      </ScrollView>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1
  },
  search: {
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 3,
    color: '#000',
    width: 225,
    padding: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingBottom: 0,
    marginTop: Constants.statusBarHeight
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#dedede',
    marginTop: 10
  },
  historyText: {
    color: '#000',
    marginLeft: 10,
    fontSize: 17,
  },
});

export default Search;