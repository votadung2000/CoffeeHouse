import React, {useRef} from 'react';
import {View, ImageBackground} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import {Text, Button} from '../../components';
import styles from './styles';

const HomeScreen = () => {
  const bottomSheetRef = useRef(null);

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
              'Sử dụng app để tích điểm và đổi những ưu đãi chỉ\ndành riêng cho thành viên bạn nhé !'
            }
          </Text>
          <Button style={styles.btnLogin}>
            <Text bold style={[styles.txtHeader, styles.txtLogin]}>
              {'Đăng nhập'}
            </Text>
          </Button>
        </View>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={['25%', '100%']}
        style={styles.btmContainer}>
        <View style={styles.contentContainer}>
          {/* <Text>Awesome 🎉</Text> */}
        </View>
      </BottomSheet>
    </View>
  );
};

export default HomeScreen;
