import React from 'react';
import {View, ImageBackground} from 'react-native';

import {Text, Button} from '../../components';
import {HomeBody} from './components';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.login}>
          <ImageBackground
            source={{uri: 'bg_login_home'}}
            resizeMode="cover"
            style={styles.imgLogin}
          />
          <Text bold style={[styles.txtHeader, styles.txtLoginTitle]}>
            {'Đăng nhập'}
          </Text>
          <Text style={[styles.txtHeader, styles.txtLoginContent]}>
            {
              'Sử dụng app để tích điểm và đổi những ưu đãi chỉ dành riêng cho thành viên bạn nhé !'
            }
          </Text>
          <Button style={styles.btnLogin}>
            <Text bold style={[styles.txtHeader, styles.txtLogin]}>
              {'Đăng nhập'}
            </Text>
          </Button>
        </View>
      </View>
      <HomeBody />
    </View>
  );
};

export default HomeScreen;
