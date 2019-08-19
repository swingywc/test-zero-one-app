import React, { PureComponent } from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

import StarRating from '@components/star-rating';
import { COLORS } from '@config/colors';

import { styles, appStyles } from './styles';

class FreeAppsSection extends PureComponent {
  _appsPerPage = 10;
  _initialPageIndex = 1;
  _onEndReachedCalledDuringMomentum = true;
  appsList = this.props.apps.filter((app) => app != null);

  state = {
    loading: true,
    page: 0,
    isFullListRendered: false,
    renderList: []
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: true });

    this.appsList = nextProps.apps.filter((app) => app != null);
    this.setState({
      loading: false,
      isFullListRendered: nextProps.apps.length <= this._appsPerPage,
      page: this._initialPageIndex,
      renderList: this._getListSlice(this._initialPageIndex)
    });
  }

  componentDidMount() {
    this.setState({
      loading: false,
      page: this._initialPageIndex,
      renderList: this._getListSlice(this._initialPageIndex)
    });
  }

  _onEndReached() {
    if (!this.appsList || this.appsList.length == 0) { return false; } // prevent running _onEndReached() when apps data is not ready

    if (!this._onEndReachedCalledDuringMomentum) {
      let nextPageIndex = this.state.page + 1,
        isFullListRendered = nextPageIndex * this._appsPerPage >= this.appsList.length,
        nextAddListArray = this._getListSlice(nextPageIndex);
      this._onEndReachedCalledDuringMomentum = true;

      this.setState({
        page: nextPageIndex,
        isFullListRendered: isFullListRendered,
        renderList: [...this.state.renderList, ...nextAddListArray]
      });
    }
  }

  _getListSlice(index) {
    let indexOfFirstAddItem = (index - 1) * this._appsPerPage,
        listSlice = this.appsList.slice(indexOfFirstAddItem, (indexOfFirstAddItem + this._appsPerPage));
    return listSlice;
  }

  _renderHeaderComponent() {
    return (
      <View>
        {this.props.headerComponent}
        <View style={styles.header}>
          <Text style={styles.title}>免費好鴨</Text>
          <Text style={styles.description}>唔駛錢，請隨便</Text>
        </View>
      </View>
    );
  }

  _renderFooterComponent() {
    return (
      <View style={styles.footer}>
        {this.state.isFullListRendered ?
          (<Text style={styles.endStatement}>已顯示全部好鴨。</Text>) :
          (<ActivityIndicator size="large" color={COLORS.THEME.PRIMARY} />)
        }
      </View>
    );
  }

  render() {
    if (this.state.loading) {
      return (<ActivityIndicator size="large" color={COLORS.THEME.PRIMARY} />);
    }

    return (
      <FlatList
        ListHeaderComponent={this._renderHeaderComponent.bind(this)}
        ListFooterComponent={this._renderFooterComponent.bind(this)}
        data={this.state.renderList}
        keyExtractor={(app, index) => `free-app-${app.id}`}
        renderItem={(app) => (<FreeApp indexing={app.index + 1} app={app.item} />)}
        onEndReached={this._onEndReached.bind(this)}
        onEndReachedThreshold={0.5}
        onMomentumScrollBegin={() => { this._onEndReachedCalledDuringMomentum = false; }}
        removeClippedSubviews
      />
    );
  }
}


class FreeApp extends PureComponent {
  render() {
    const { icon, name, categories, userRating, userRatingCount, price } = this.props.app;
    const { indexing } = this.props;

    return (
      <View style={appStyles.appBox}>
        <TouchableOpacity style={appStyles.touchable} onPress={() => {}}>
          <View style={appStyles.indexingBox}>
            <Text style={appStyles.indexing}>{indexing}</Text>
          </View>
          <View style={appStyles.iconBox}>
            <Image
              style={[
                appStyles.icon,
                (indexing % 2 != 0) ? appStyles.oddIcon : appStyles.evenIcon]}
              source={{uri: icon}}
            />
          </View>
          <View style={appStyles.appDetails}>
            <View>
              <Text style={appStyles.name} numberOfLines={2}>{name}</Text>
              <Text style={appStyles.category}>{categories[0]}</Text>
            </View>
            <StarRating userRating={userRating} userCount={userRatingCount} />
          </View>
        </TouchableOpacity>
        <View style={appStyles.buttonBox}>
          <TouchableOpacity style={appStyles.button} onPress={() => {}}>
            <Text style={appStyles.buttonText}>{price == 0 ? '取得' : `$${price}`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default FreeAppsSection;
