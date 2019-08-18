import React, { PureComponent } from 'react';
import { SafeAreaView, View, ActivityIndicator } from 'react-native';
import { Navigator } from 'react-navigation';

import { COLORS } from '@config/colors';
import MobileApp from '@models/mobile-app';

import SearchField from './screen-components/search-field';
import RecommendSection from './screen-components/recommend-section';
import { styles } from './styles';

class HomeScreen extends PureComponent {
  static navigationOptions = { title: '好鴨排行榜' };
  state = {
    loading: true,
    searchKeyword: ''
  };

  topFreeApps = [];
  topGrossingApps = [];

  async componentDidMount() {
    try {
      this.topFreeApps = await MobileApp.getTopFree();
      this.topGrossingApps = await MobileApp.getTopGrossing();

      this.setState({ loading: false });
    } catch(error) {
      if (error.message != 'Network request failed') {
        console.log("Unexpected error detected. Sent to firebase: ", error.message);

        // Navigator.reset("/network-error");
        return false;
      }
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.screen}>
          <View style={styles.searchInputSection}>
            <SearchField keyword={this.state.searchKeyword} onTextChange={() => {}} />
          </View>

          { this.state.loading ? (
              <View style={styles.indicatorBox}>
                <ActivityIndicator size="large" color={COLORS.THEME.PRIMARY} />
              </View>
            ) : (
              <RecommendSection apps={this.topGrossingApps} />
            )
          }
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
