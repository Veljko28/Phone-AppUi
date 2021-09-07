import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {blue} from '../../constants/CustomColors';
import image from '../../assets/phone.jpg';


const CategoryCircles = () => {

  const CircleMap = ({image, title} : {image: any, title: string}) => {
     return (
       <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.circle}>
            <Image source={image} resizeMode="contain" style={styles.imageStyles}/>
          </View>
          <Text style={{marginLeft: 15}}>{title}</Text>
       </TouchableOpacity>
     )
  }


  return (
    <ScrollView>
      <View style={styles.circleContainer}>
      {
        [{image, title: "Apple"},{image, title: "Google"},{image, title: "Huawei"},
        {image, title: "Samsung"},{image, title: "Redmi"},{image, title: "Honor"}].map(x => CircleMap(x))
      }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageStyles: {
    width: 50,
    height: 50
  },
  circle: {
    borderWidth: 3,
    borderColor: blue,
    borderRadius: 50,
    width: 70,
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  circleContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10
  }
});

export default CategoryCircles;