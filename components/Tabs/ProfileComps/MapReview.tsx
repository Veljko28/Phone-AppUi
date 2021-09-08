import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';
import { ReviewItem } from '../../../constants/CustomTypes';
import { blue } from '../../../constants/CustomColors';

const MapReview = (props: ReviewItem) => {
  return (
    <View
      style={{ borderBottomWidth: 2, borderBottomColor: '#eee', padding: 5 }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={styles.header}>
          <View style={{ color: blue }}>{props.userName}</View> on{' '}
          <View style={{ color: blue }}>{props.date}</View>
        </Text>
        <Rating
          readonly={true}
          type="star"
          ratingCount={5}
          imageSize={10}
          startingValue={props.rating}
          style={{ paddingVertical: 10 }}
        />
      </View>
      <Text style={{ marginLeft: 10, color: '#999' }}>{props.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 14,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 8,
  },
});

export default MapReview;
