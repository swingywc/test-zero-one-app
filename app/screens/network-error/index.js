import React, { PureComponent } from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';

import { COLORS } from '@config/colors';
import Button from '@components/button';

import { styles } from './styles';

class NetworkErrorScreen extends PureComponent {
  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <View style={styles.contentSection}>
          <Text style={styles.description}>收到收唔到，唔係靠彩數～{'\n'}你無網絡丫喂！</Text>
          <Button
            onPress={() => {}}
            title="重試連線"
            borderColor={COLORS.THEME.PRIMARY}
          />
        </View>
      </SafeAreaView>
    );
  }

}

export default NetworkErrorScreen;
