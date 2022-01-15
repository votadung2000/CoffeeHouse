import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import {scale} from '../../../utils/resolutions';
import {colors} from '../../../constant';
import Header from './Header';
import Slide from './Slide';

const HomeBody = ({}) => {
  const snapPoints = useMemo(() => ['65%', '100%'], []);

  return (
    <BottomSheet index={0} snapPoints={snapPoints} style={styles.btmContainer}>
      <BottomSheetScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        <Header />
        <Slide />
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default HomeBody;

const styles = StyleSheet.create({
  btmContainer: {
    flex: 1,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: scale(8),
    paddingHorizontal: scale(15),
    paddingVertical: scale(5),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
