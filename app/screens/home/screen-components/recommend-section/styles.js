import { StyleSheet } from 'react-native';

import { COLORS } from '@config/colors';

export const SIZE = {
  SECTION_HORIZONTAL_PADDING: 5,
  APP_HORIZONTAL_MARGIN: 10
};

export const styles = StyleSheet.create({
  section: {
    width: '100%',
    paddingVertical: SIZE.SECTION_HORIZONTAL_PADDING + SIZE.APP_HORIZONTAL_MARGIN
  },
  title: {
    marginLeft: SIZE.SECTION_HORIZONTAL_PADDING + SIZE.APP_HORIZONTAL_MARGIN,
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
    paddingHorizontal: SIZE.SECTION_HORIZONTAL_PADDING
  }
});

export const appStyles = StyleSheet.create({
  appBox: {
    marginHorizontal: SIZE.APP_HORIZONTAL_MARGIN
  },
  iconShadow: {
    shadowColor: COLORS.APP_ICON_SHADOW,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  icon: {
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
