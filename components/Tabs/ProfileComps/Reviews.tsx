import React from 'react';
import {View, Text} from 'react-native';
import MapReview from './MapReview';

const Reviews = () => {

  const list = [
    {userName: "testin123", rating: 4, date: "06/09/2021", description: "First user review, this review is really long for absolutelly no reason and also for testing 123"},
    {userName: "likeune", rating: 5, date: "04/09/2021", description: "Second user review, this review is really long for absolutelly no reason and also for testing 123"},
    {userName: "testin123", rating: 5, date: "03/09/2021", description: "Third user review, this review is really long for absolutelly no reason and also for testing 123"},
    {userName: "quebec", rating: 5, date: "01/09/2021", description: "Fourth user review, this review is really long for absolutelly no reason and also for testing 123"},
  ]

  return (
    <View>
      {list.map(x => MapReview(x))}
    </View>
  );
}

export default Reviews;