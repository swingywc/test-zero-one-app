import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[
        styles.button,
        props.bgColor ? { backgroundColor: props.bgColor } : {},
        props.borderColor ? { borderWidth: 1, borderColor: props.borderColor } : {}
      ]}>
        <Text style={[
          styles.title,
          props.bgColor ? styles.whiteText : ( props.borderColor ? { color: props.borderColor } : {})
        ]}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;
