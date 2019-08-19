import React, { PureComponent } from 'react';
import { View, TextInput } from 'react-native';
import FontAwesome, { SolidIcons } from 'react-native-fontawesome';

import { styles } from './styles';

class SearchField extends PureComponent {
  state = { value: '' };

  _onChangeText(value) {
    this.setState({ value: value });
    this.props.onChangeText(value);
  }

  render() {
    return (
      <View style={styles.box}>
        <FontAwesome style={styles.icon} icon={SolidIcons.search} />
        <TextInput
          style={styles.input}
          returnKeyType="search"
          autoCapitalize="none"
          placeholder={this.props.placeholder}
          onChangeText={this._onChangeText.bind(this)}
          value={this.state.value}
        />
      </View>
    );
  }
}

export default SearchField;
