import {StyleSheet} from 'react-native';

import {colors, fontSize} from '../../constant';
import {scale} from '../../utils/resolutions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: scale(15),
    marginTop: scale(20),
  },
  login: {
    width: '100%',
    aspectRatio: 1.5,
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
    paddingHorizontal: scale(10),
    paddingVertical: scale(5),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imgLogin: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    opacity: 0.15,
  },
  txtHeader: {
    textAlign: 'center',
  },
  txtLoginTitle: {
    fontSize: fontSize.huge,
  },
  btnLogin: {
    backgroundColor: colors.orange,
    width: '50%',
    aspectRatio: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(8),
  },
  txtLogin: {
    fontSize: fontSize.big,
    color: colors.white,
  },
  txtLoginContent: {
    lineHeight: scale(18),
    fontSize: fontSize.fontSize16,
  },
});
