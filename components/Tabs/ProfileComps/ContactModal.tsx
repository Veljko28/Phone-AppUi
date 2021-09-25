import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';
import { blue } from '../../../constants/CustomColors';
import Modal from "react-native-modal";


const ContanctModal = ({modal, changeModal} : {modal: boolean, changeModal: any}) => {

  return (
      <Modal
        isVisible={modal}
      >
        <View>
          <View style={styles.modal}>

            <View style={styles.header}>
              <Text style={styles.title}>Contact</Text>
              <View></View>
              <TouchableOpacity activeOpacity={0.8} onPress={() => changeModal(false)}><MaterialIcons name="clear" size={20} color="black" /></TouchableOpacity>
            </View>
          
            <TouchableOpacity activeOpacity={0.9}>
              <Text style={styles.optionText}><MaterialIcons name="email" size={18} color={blue} /> Email</Text>
              <Text style={styles.text}>admin@mobistore.com</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={() => changeModal(false)}>
              <Text style={styles.optionText}><MaterialIcons name="local-phone" size={18} color={blue} /> Phone Num</Text>
              <Text style={styles.text}>+381 (064) 800-3471</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#eee',
    padding: 20
  },
  title: {
    textAlign: "center",
    color: blue,
    fontSize: 30
  },
  optionText: {
    fontSize: 18,
    margin: 10,
  },
  text: {
    color: '#999',
    fontSize: 15
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default ContanctModal;