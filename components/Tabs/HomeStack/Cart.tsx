import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import image from '../../../assets/phone.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../../redux/reduxTypes';
import { addCartForm } from '../../../redux/actions/cartActions';
import { CartForm } from '../../../constants/CustomTypes';

import {blue, white} from '../../../constants/CustomColors';

import CartItemMap from './CartComps/CartItemMap';
import Delivery from './CartComps/Delivery';
import OrderSummary from './CartComps/OrderSummary';
import PaymentMethod from './CartComps/PaymentMethod';


import StepIndicator from 'react-native-step-indicator';
import customStyles from './CartComps/StepIndicatorSettings';
 
const labels = ["Cart","Delivery Address","Order Summary","Payment Method","Finish"];
const icons = ["shopping-cart", "location-on", "insert-chart", "credit-card", "check"]

const Cart = ({navigation, changeRemoveTabsOnSearch} : {navigation: any, changeRemoveTabsOnSearch: any}) => {

 React.useEffect( () => {
    changeRemoveTabsOnSearch(true);
  }, [])


  const itemsInCart = [
    {image, name: "Pixel 2 XL", price: 350},
    {image, name: "Pixel 2 XL", price: 350},
    {image, name: "Pixel 2 XL", price: 350},
  ]
  const [form, changeForm] = React.useState<CartForm>({
    firstName: "",
    lastName: "",
    address: "",
    town: "",
    postCode: "",
    phoneNum: ""
  })



  const [step, changeStep] = React.useState(3);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}> 
    
       <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.9} onPress={() => {  changeRemoveTabsOnSearch(false); navigation.navigate("Home") }} style={{marginTop: 10}} >
          <MaterialIcons name="arrow-back" size={20} color={blue} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Cart</Text>
        </View>
        <View> </View>
      </View>

      <StepIndicator
         customStyles={customStyles}
         currentPosition={step}
         labels={labels}
         renderStepIndicator={({position,stepStatus})=>
         (<MaterialIcons name={icons[position] as any} size={15} 
         color={stepStatus === 'finished' ? white : blue} />)}
    />

      {step === 0 ? <CartItemMap itemsInCart={itemsInCart} /> : step === 1 ? <Delivery form={form} changeForm={(value: CartForm) => changeForm(value)}/> : step === 2 ? <OrderSummary 
      total={ itemsInCart.reduce((tot, record) =>  tot + record.price,0) }/> : <PaymentMethod/>}

      <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => {
            changeStep(step+1);
            if (step === 1) dispatch(addCartForm(form));
        }}>
        <Text style={styles.buttonText}>{step !== 4 ? "Next " : "Finish "} 
        <MaterialIcons name={step !== 4 ? "arrow-forward-ios" : "check"} size={15} color={white} /></Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },
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
  buttonText: {
    color: white,
    fontSize: 20
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    backgroundColor: blue,
    textAlign: 'center'
  }
});

export default Cart;