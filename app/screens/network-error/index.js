import React, { PureComponent } from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import { COLORS } from '@config/colors';
import Button from '@components/button';

import { styles } from './styles';

class NetworkErrorScreen extends PureComponent {
  static navigationOptions = { title: '連線問題' };

  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <View style={styles.contentSection}>
          <Text style={styles.description}>收到收唔到，唔係靠彩數～{'\n'}你無網絡丫喂！</Text>
          <Button
            onPress={this.tryReconnectNetwork.bind(this)}
            title="重試連線"
            borderColor={COLORS.THEME.PRIMARY}
          />
        </View>
      </SafeAreaView>
    );
  }

  tryReconnectNetwork() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    this.props.navigation.dispatch(resetAction);
  }
}

export default NetworkErrorScreen;
