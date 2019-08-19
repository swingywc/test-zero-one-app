import React, { PureComponent } from 'react';
import { SafeAreaView, View, ActivityIndicator } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import { COLORS } from '@config/colors';
import MobileApp from '@models/mobile-app';

import SearchField from './screen-components/search-field';
import GrossingAppsSection from './screen-components/grossing-apps-section';
import FreeAppsSection from './screen-components/free-apps-section';
import { styles } from './styles';

class HomeScreen extends PureComponent {
  static navigationOptions = { title: '好鴨排行榜' };
  state = {
    loading: true,
    searchKeyword: '',
    freeApps: [],
    grossingApps: []
  };

  topFreeApps = [];
  topGrossingApps = [];

  async componentDidMount() {
    try {
      this.topFreeApps = await MobileApp.getTopFree();
      this.topGrossingApps = await MobileApp.getTopGrossing();

      if (this.topFreeApps == null || this.topGrossingApps == null) {
        throw new Error('Network request failed');
      }

      this.setState({
        loading: false,
        freeApps: this.topFreeApps,
        grossingApps: this.topGrossingApps
      });
    } catch(error) {
      if (error.message != 'Network request failed') {
        console.log("Unexpected error detected. Sent to firebase: ", error.message);
      }

      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'NetworkError' })],
      });
      this.props.navigation.dispatch(resetAction);

      return false;
    }
  }

  filterByKeyword(keyword) {
    if (keyword != "") {
      let filterFreeApps = this.topFreeApps.filter((app) => {
        return JSON.stringify(app)
                   .replace(/[\{\"\:\}]/g, "")
                   .indexOf(keyword) > 0;
      });
      let filterGrossingApps = this.topGrossingApps.filter((app) => {
        return JSON.stringify(app)
                   .replace(/[\{\"\:\}]/g, "")
                   .indexOf(keyword) > 0;
      });

      console.log("free app filter ", filterFreeApps);

      this.setState({
        freeApps: filterFreeApps,
        grossingApps: filterGrossingApps
      });
    } else {
      this.setState({
        freeApps: this.topFreeApps,
        grossingApps: this.topGrossingApps
      });
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.screen}>
          <View style={styles.searchInputSection}>
            <SearchField keyword={this.state.searchKeyword} onChangeText={this.filterByKeyword.bind(this)} />
          </View>

          { this.state.loading ? (
              <View style={styles.indicatorBox}>
                <ActivityIndicator size="large" color={COLORS.THEME.PRIMARY} />
              </View>
            ) : (
              <FreeAppsSection
                headerComponent={(<GrossingAppsSection apps={this.state.grossingApps} />)}
                apps={this.state.freeApps}
              />
            )
          }
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
