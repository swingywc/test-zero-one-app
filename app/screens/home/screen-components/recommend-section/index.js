import React, { PureComponent } from 'react';
import { View, Text, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';

import { SIZE, styles, appStyles } from './styles';

class RecommendSection extends PureComponent {
  render() {
    const APPS_IN_SCREEN = 3.5;
    const appWidth = ((Dimensions.get('window').width - SIZE.SECTION_HORIZONTAL_PADDING) / APPS_IN_SCREEN)
      - SIZE.APP_HORIZONTAL_MARGIN * 2; // NOTE: make half of the forth app appear on the screen, can let user know they can scroll the section

    return (
      <View style={styles.section}>
        <Text style={styles.title}>好鴨推介</Text>
        <Text style={styles.description}>今期流行</Text>
        <FlatList
          style={styles.flatList}
          data={this.props.apps}
          keyExtractor={(app, index) => `recommend-app-${index}`}
          renderItem={(app) => (<RecommendApp iconWidth={appWidth} app={app.item} />)}
          horizontal={true}
        />
      </View>
    );
  }
}

class RecommendApp extends PureComponent {
  render() {
    const { icon, name, categories, userRating, userRatingCount, price } = this.props.app;
    const { iconWidth } = this.props;

    return (
      <View style={[appStyles.appBox, {width: iconWidth}]}>
        <TouchableOpacity onPress={() => {}}>
          <View style={appStyles.iconShadow}>
            <Image style={[appStyles.icon, {width: iconWidth, height: iconWidth}]} source={{uri: icon}} />
          </View>
          <Text style={appStyles.name} numberOfLines={2}>{name}</Text>
          <Text style={appStyles.category}>{categories[0]}</Text>
         </TouchableOpacity>
         <TouchableOpacity style={appStyles.button} onPress={() => {}}>
           <Text style={appStyles.buttonText}>{price == 0 ? '取得' : `$${price}`}</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

export default RecommendSection;
