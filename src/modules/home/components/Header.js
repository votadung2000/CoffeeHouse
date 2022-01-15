import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {Text, Button} from '../../../components';
import {scale} from '../../../utils/resolutions';
import {colors} from '../../../constant';

const Header = () => {
  const handleDelivery = () => {
    alert('Giao hàng');
  };

  const handleCarriedAway = () => {
    alert('Mang đi');
  };

  return (
    <View style={styles.header}>
      <Button
        onPress={handleDelivery}
        style={[styles.btnHeader, styles.headerDivide]}>
        <View style={styles.bdImg}>
          <Image source={{uri: 'delivery'}} style={styles.imgHeader} />
        </View>
        <Text>{'Giao hàng'}</Text>
      </Button>
      <Button onPress={handleCarriedAway} style={styles.btnHeader}>
        <View style={styles.bdImg}>
          <Image source={{uri: 'carried_away'}} style={styles.imgHeader} />
        </View>
        <Text>{'Mang đi'}</Text>
      </Button>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    marginTop: scale(20),
    width: '100%',
    aspectRatio: 3.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 0.6,
    borderColor: colors.gray,
    borderRadius: scale(8),
    marginBottom: scale(15),
  },
  btnHeader: {
    width: '50%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerDivide: {
    borderRightWidth: 0.6,
    borderColor: colors.gray,
  },
  bdImg: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(50),
    backgroundColor: colors.lightOrange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgHeader: {
    width: scale(35),
    height: scale(35),
  },
});
