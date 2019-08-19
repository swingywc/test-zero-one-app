import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';

import { STAR_SIZE, styles } from './styles';

class StarRating extends PureComponent {
  render() {
    const backgroundWidth = (this.props.userRating > 0) ?
      STAR_SIZE * this.props.userRating :
      STAR_SIZE * 0.1; // if set width to 0, will lead to error in RCTView

    return (
      <View style={styles.ratingBox}>
        <View style={styles.starBox}>
          <View style={[styles.starBackground, {width: backgroundWidth}]} />
          <Image style={styles.star} source={require('./star-unfilled.png')} />
          <Image style={styles.star} source={require('./star-unfilled.png')} />
          <Image style={styles.star} source={require('./star-unfilled.png')} />
          <Image style={styles.star} source={require('./star-unfilled.png')} />
          <Image style={styles.star} source={require('./star-unfilled.png')} />
        </View>
        <Text style={styles.userCount}>({this.props.userCount ? this.props.userCount : 0})</Text>
      </View>
    );
  }
}

export default StarRating;
