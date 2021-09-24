import React from 'react';
import {View, Text, Image,  StyleSheet, Dimensions, TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import phone from '../../../assets/phone.jpg';
import { blue, green, white, red } from '../../../constants/CustomColors';
import ImageCarousel from '../../Display/ImageCarousel';
import { MaterialIcons, Ionicons, MaterialCommunityIcons  } from '@expo/vector-icons'; 
import SellerInfo from '../../Display/SellerInfo';
import PhoneContainer from '../../Phone/PhoneContainer'
import ColoredLine from '../../../constants/ColoredLine';
import CustomModal from '../CustomModal';
import Constants from 'expo-constants';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/actions/cartActions';
import { State } from '../../../redux/reduxTypes';
import { Phone } from '../../../constants/CustomTypes';

const PhoneDisplay = ({navigation, route} : {navigation: any, route: any}) => {

  const [modal,changeModal] = React.useState(false);
  const id = route.params.id;
  
  const phoneModel = {
    id,
    name: "Pixel XL 2",
    price: "350$",
    image: phone
  };
  const dispatch = useDispatch();
  const cartItems = useSelector((state: State) => state.cart.cartItems);
  const [inCart, changeInCart] = React.useState(false);

  React.useEffect( () =>  changeInCart( cartItems.filter((x: Phone) => x.id === id).length > 0 ), [cartItems, id])

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate("List")} >
          <MaterialIcons name="arrow-back" size={24} color={blue} />
        </TouchableOpacity>
          <View></View>
        <TouchableOpacity activeOpacity={0.9} onPress={() => changeModal(true)} >
          <MaterialIcons name="settings" size={24} color={blue} />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
      <StatusBar barStyle="dark-content" />


        <ImageCarousel />

        <View style={styles.infoRow}> 
          <Text style={styles.phoneName}>{phoneModel.name}</Text>
          <View></View>
          <Text style={{color: green, fontSize: 25}}>{phoneModel.price}</Text>
        </View>
        <Text style={{color: '#999', fontSize: 12, margin: 5, marginLeft: 20}}>Display 6.00-inch (1440x2880) · Processor Qualcomm Snapdragon 835 
          · Front Camera 8MP · Rear Camera 12.2MP · RAM 4GB · Storage 64GB · Battery 3520mAh</Text>

        <Text style={{color: blue, fontSize: 17, marginTop: 5, marginBottom: 8, alignSelf: 'flex-start', marginLeft: 20}}>
        <Ionicons name="heart" size={17} color={blue} style={{marginRight: 5}} /> Added to wish list: 4 times</Text>

        {inCart ? (

          <TouchableOpacity style={styles.cartButtonRemove} activeOpacity={0.9}
            onPress={() => {
              dispatch(removeFromCart(id));
            }}>
                  <MaterialCommunityIcons name="cart-off" size={20} color="white" />
                  <Text style={{color: white, fontSize: 15, marginLeft: 5}}>REMOVE FROM CART</Text>
            </TouchableOpacity>  

        ) : (

            <TouchableOpacity style={styles.cartButton} activeOpacity={0.9}
            onPress={() => {
              dispatch(addToCart(phoneModel));
            }}>
                  <Ionicons name="cart" size={20} color="white" />
                  <Text style={{color: white, fontSize: 15, marginLeft: 5}}>ADD TO CART</Text>
            </TouchableOpacity>  

        )}


        <View style={styles.categoryButtons}>
            <TouchableOpacity style={styles.categoryButton} activeOpacity={0.9}>
              <MaterialIcons name="category" size={20} color="white" />
              <Text style={{color: white, fontSize: 15, marginLeft: 5}}>Andorid</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton} activeOpacity={0.9}>
              <MaterialIcons name="star" size={20} color="white" />
              <Text style={{color: white, fontSize: 15, marginLeft: 5}}>Google</Text>
            </TouchableOpacity>
        </View>

        <Text style={{color: blue, fontSize: 15, marginTop: 30}}>About The Seller</Text>
        <View style={{marginTop: 5}}>
          <ColoredLine/>
        </View>
        <SellerInfo/>

        <PhoneContainer phones={[{image: "", name: "", description: "", price: ""},
        {image: "", name: "", description: "", price: ""},{image: "", name: "", description: "", price: ""}]} title="Related Phones" />
      </View>

      <CustomModal modal={modal} changeModal={(value: boolean) => changeModal(value)}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center'
  },
  phoneName: {
    color: blue,
    fontSize: 25,
    marginRight: (Dimensions.get('window').width / 2)-20
  },
  infoRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  categoryButtons: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },
  categoryButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: blue,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    height: 25
  },
  cartButton: {
    backgroundColor: green,
    width: Dimensions.get('window').width-20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10
  },
  cartButtonRemove: {
    backgroundColor: red,
    width: Dimensions.get('window').width-20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingBottom: 0,
    marginTop: Constants.statusBarHeight
  }
});


export default PhoneDisplay;
