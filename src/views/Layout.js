import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';

import {colors} from '../constant';
import {scale} from '../utils/resolutions';

const Layout = ({children}) => {
  return (
    <View style={styles.container}>
      <StatusBar animated barStyle="dark-content" />
      {children}
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: scale(isIphoneX() ? 30 : 0),
  },
});
