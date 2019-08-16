import React, { PureComponent } from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, View, ScrollView, Text } from 'react-native';

import SearchField from './screen-components/search-field';
import { styles } from './styles';

class HomeScreen extends PureComponent {
  static navigationOptions = { title: '好鴨排行榜' };
  state = { searchKeyword: '' };

  render() {
    return (
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.screen}>
            <View style={styles.searchInputSection}>
              <SearchField keyword={this.state.searchKeyword} onTextChange={() => {}} />
            </View>

            <ScrollView>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
