import React, { PureComponent } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import { styles, appStyles } from './styles';

class GrossingAppsSection extends PureComponent {
  render() {
    return (
      <View style={styles.section}>
        <Text style={styles.title}>好鴨推介</Text>
        <Text style={styles.description}>今期流行</Text>
        <FlatList
          style={styles.flatList}
          data={this.props.apps}
          keyExtractor={(app, index) => `recommend-app-${app.id}`}
          renderItem={(app) => (<GrossingApp app={app.item} />)}
          horizontal={true}
        />
      </View>
    );
  }
}

class GrossingApp extends PureComponent {
  render() {
    const { icon, name, categories, userRating, userRatingCount, price } = this.props.app;

    return (
      <View style={appStyles.appBox}>
        <TouchableOpacity onPress={() => {}}>
          <View style={appStyles.iconShadow}>
            <Image style={appStyles.icon} source={{uri: icon}} />
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

export default GrossingAppsSection;
