import { StyleSheet } from 'react-native';

import { COLORS } from '@config/colors';
import { GROSSING_SECTION_HORIZONTAL_PADDING, APP_WIDTH, APP_HORIZONTAL_MARGIN } from '@config/dimensions';

export const styles = StyleSheet.create({
  section: {
    width: '100%',
    paddingVertical: GROSSING_SECTION_HORIZONTAL_PADDING + APP_HORIZONTAL_MARGIN
  },
  title: {
    marginLeft: GROSSING_SECTION_HORIZONTAL_PADDING + APP_HORIZONTAL_MARGIN,
    fontSize: 22,
    fontWeight: 'bold'
  },
  description: {
    marginTop: 5,
    marginLeft: 15,
    fontSize: 16,
    color: '#555'
  },
  flatList: {
    paddingVertical: 15,
    paddingHorizontal: GROSSING_SECTION_HORIZONTAL_PADDING
  }
});

export const appStyles = StyleSheet.create({
  appBox: {
    width: APP_WIDTH,
    marginHorizontal: APP_HORIZONTAL_MARGIN
  },
  iconShadow: {
    shadowColor: COLORS.APP_ICON_SHADOW,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  icon: {
    width: APP_WIDTH,
    height: APP_WIDTH,
    borderRadius: 15
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.APP_NAME,
    minHeight: 40
  },
  category: {
    marginTop: 5,
    fontSize: 14,
    color: COLORS.APP_CATEGORY
  },
  button: {
    marginTop: 10,
    paddingVertical: 7,
    width: '100%',
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
