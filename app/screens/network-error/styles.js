import { StyleSheet } from 'react-native';

import { COLORS } from '@config/colors';

export const styles = StyleSheet.create({
  contentSection: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  description: {
    fontSize: 18,
    lineHeight: 28,
    color: COLORS.DESCRIPTION,
    textAlign: 'center',
    marginBottom: 30
  }
});
