import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';
import { blue } from '../../constants/CustomColors';
import Modal from "react-native-modal";


const CustomModal = ({modal, changeModal} : {modal: boolean, changeModal: any}) => {

  return (
      <Modal
        isVisible={modal}
      >
        <View>
          <View style={styles.modal}>
            <Text style={styles.title}>Options</Text>
            <TouchableOpacity activeOpacity={0.9}>
              <Text style={styles.optionText}><MaterialIcons name="report" size={25} color={"red"} /> Report</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={() => changeModal(false)}>
              <Text style={styles.optionText}><MaterialIcons name="cancel" size={25} color={"red"} /> Close</Text>
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
    fontSize: 25,
    margin: 10,
    marginLeft: 15
  }
});

export default CustomModal;