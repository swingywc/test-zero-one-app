import { AppRegistry } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { COLORS } from '@config/colors';
import HomeScreen from '@screens/home';
import NetworkErrorScreen from '@screens/network-error';

import { name as appName } from './app.json';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  NetworkError: NetworkErrorScreen
},{
  initialRouteName: "Home",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: COLORS.THEME.PRIMARY,
    },
    headerTintColor: COLORS.APPBAR_TITLE,
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
});

const App = createAppContainer(AppNavigator);

AppRegistry.registerComponent(appName, () => App);
