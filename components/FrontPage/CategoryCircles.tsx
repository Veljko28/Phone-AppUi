import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {blue} from '../../constants/CustomColors';

import appleLogo from '../../assets/category/apple_logo.png';
import googleLogo from '../../assets/category/google_logo.png';
import huaweiLogo from '../../assets/category/huawei_logo.png';
import samsungLogo from '../../assets/category/samsung_logo.png';
import redmiLogo from '../../assets/category/redmi_logo.png';
import honorLogo from '../../assets/category/honor_logo.png';





const CategoryCircles = () => {

  const CircleMap = ({image, title} : {image: any, title: string}) => {
     return (
       <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.circle}>
            <Image source={image} resizeMode="contain" style={styles.imageStyles}/>
          </View>
          <Text style={{marginLeft: 15, color: blue}}>{title}</Text>
       </TouchableOpacity>
     )
  }


  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.circleContainer}>
      {
        [{image: appleLogo, title: "Apple"},{image: googleLogo, title: "Google"},{image: huaweiLogo, title: "Huawei"},
        {image: samsungLogo, title: "Samsung"},{image: redmiLogo, title: "Redmi"},{image: honorLogo, title: "Honor"}].map(x => CircleMap(x))
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