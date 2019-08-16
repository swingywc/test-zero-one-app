import React, { PureComponent } from 'react';
import { View, TextInput } from 'react-native';
import FontAwesome, { SolidIcons } from 'react-native-fontawesome';

import { styles } from './styles';

class SearchField extends PureComponent {
  render() {
    return (
      <View style={styles.box}>
        <FontAwesome style={styles.icon} icon={SolidIcons.search} />
        <TextInput style={styles.input} returnKeyType="search" />
      </View>
    );
  }
}

export default SearchField;
