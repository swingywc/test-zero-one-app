import React, { PureComponent } from 'react';
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native';

import { styles, appStyles } from './styles';

class FreeAppsSection extends PureComponent {
  _renderHeaderComponent() {
    return (
      <View>
        {this.props.headerComponent}
        <View style={styles.header}>
          <Text style={styles.title}>免費好鴨</Text>
          <Text style={styles.description}>唔駛錢，隨便</Text>
        </View>
      </View>
    );
  }

  render() {
    console.log("free apps list: ", this.props.apps);

    return (
      <FlatList
        ListHeaderComponent={this._renderHeaderComponent.bind(this)}
        data={this.props.apps.filter((app) => app != null)}
        keyExtractor={(app, index) => `free-app-${app.id}`}
        renderItem={(app) => (<FreeApp indexing={app.index + 1} app={app.item} />)}
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
            <Text style={appStyles.name} numberOfLines={2}>{name}</Text>
            <Text style={appStyles.category}>{categories[0]}</Text>
            {/*<View>{userRating}</View>*/}
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
