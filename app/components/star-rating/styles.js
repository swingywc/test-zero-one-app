import { StyleSheet } from 'react-native';

import { COLORS } from '@config/colors';

export const STAR_SIZE = 14;

export const styles = StyleSheet.create({
  ratingBox: {
    marginTop: 5,
    flexDirection: 'row',
  },
  starBox: {
    flexDirection: 'row'
  },
  star: {
    width: STAR_SIZE,
    height: STAR_SIZE
  },
  starBackground: {
    position: 'absolute',
    width: '100%',
    height: STAR_SIZE,
    backgroundColor: COLORS.STAR_RATING
  },
  userCount: {
    marginLeft: 5,
    fontSize: 12,
    color: COLORS.USER_COUNT
  }
});
