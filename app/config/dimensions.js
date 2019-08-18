import { Dimensions } from 'react-native';

const APPS_IN_ROW_OF_SCREEN = 3.5;

export const GROSSING_SECTION_HORIZONTAL_PADDING = 5;

export const APP_HORIZONTAL_MARGIN = 10;

export const APP_WIDTH = ((Dimensions.get('window').width - GROSSING_SECTION_HORIZONTAL_PADDING) / APPS_IN_ROW_OF_SCREEN)
  - APP_HORIZONTAL_MARGIN * 2; // NOTE: make half of the forth app appear on the screen, can let user know they can scroll the section
