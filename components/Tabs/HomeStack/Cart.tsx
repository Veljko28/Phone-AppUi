import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import image from '../../../assets/phone.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../../redux/reduxTypes';
import { addCartForm, clearCart } from '../../../redux/actions/cartActions';
import { CartForm } from '../../../constants/CustomTypes';

import {blue, white} from '../../../constants/CustomColors';

import CartItemMap from './CartComps/CartItemMap';
import Delivery from './CartComps/Delivery';
import OrderSummary from './CartComps/OrderSummary';
import PaymentMethod from './CartComps/PaymentMethod';
import Finish from './CartComps/Finish';
import EmptyCart from './CartComps/EmptyCart';



import StepIndicator from 'react-native-step-indicator';
import customStyles from './CartComps/StepIndicatorSettings';
 
const labels = ["Cart","Delivery Address","Order Summary","Payment Method","Finish"];
const icons = ["shopping-cart", "location-on", "insert-chart", "credit-card", "check"]

const Cart = ({navigation} : {navigation: any}) => {

 const dispatch = useDispatch();


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



  const [step, changeStep] = React.useState(0);
  const cartItems = useSelector((state: State) => state.cart.cartItems);

  return (
    <View style={styles.container}> 
    
       <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()} style={{marginTop: 10}} >
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

      {cartItems.length === 0 ? <EmptyCart /> : step === 0 ? <CartItemMap itemsInCart={cartItems} /> : step === 1 ? <Delivery form={form} changeForm={(value: CartForm) => changeForm(value)}/> : step === 2 ? <OrderSummary 
      total={ itemsInCart.reduce((tot, record) =>  tot + record.price,0) }/> : step === 3 ? <PaymentMethod/> : 
      <Finish/>}

      <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => {
            if (cartItems.length === 0 ) {
              navigation.navigate("Home");
              return;
            }


            if (step === 4) {
              changeStep(0);
              navigation.navigate("Home");
              dispatch(clearCart());
              return;
            }


            changeStep(step+1);
            if (step === 1) dispatch(addCartForm(form));
        }}>
        <Text style={styles.buttonText}>{cartItems.length === 0 ? "Back To Home " : step !== 4 ? "Next " : "Finish "} 
        <MaterialIcons name={cartItems.length === 0 ? "home" : step !== 4 ? "arrow-forward-ios" : "check"} size={15} color={white} /></Text>
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