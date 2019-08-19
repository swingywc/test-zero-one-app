import { StyleSheet } from 'react-native';

import { APP_WIDTH } from '@config/dimensions';
import { COLORS } from '@config/colors';

export const styles = StyleSheet.create({
  header: {
    marginBottom: 15
  },
  title: {
    marginLeft: 15,
    fontSize: 22,
    fontWeight: 'bold'
  },
  description: {
    marginTop: 5,
    marginLeft: 15,
    fontSize: 16,
    color: '#555'
  },
});

export const appStyles = StyleSheet.create({
  appBox: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  indexingBox: {
    width: 46,
    alignItems: 'center',
    justifyContent: 'center'
  },
  indexing: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.INDEXING
  },
  iconBox: {
    shadowColor: COLORS.APP_ICON_SHADOW,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  icon: {
    width: APP_WIDTH,
    height: APP_WIDTH
  },
  oddIcon: {
    borderRadius: 20
  },
  evenIcon: {
    borderRadius: 100
  },
  appDetails: {
    flex: 1,
    marginHorizontal: 10
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.APP_NAME
  },
  category: {
    marginTop: 10,
    fontSize: 14,
    color: COLORS.APP_CATEGORY
  },
  buttonBox: {
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    paddingVertical: 7,
    width: 80,
    backgroundColor: COLORS.THEME.PRIMARY,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 14
  }
});













