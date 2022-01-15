import {StyleSheet} from 'react-native';

import {colors, fontSize} from '../../constant';
import {scale} from '../../utils/resolutions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightOrange,
  },
  header: {
    paddingHorizontal: scale(15),
    marginTop: scale(20),
    zIndex: -9999,
  },
  login: {
    width: '100%',
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
    paddingVertical: scale(25),
    justifyContent: 'center',
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
    fontSize: fontSize.large,
    marginBottom: scale(25),
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
    fontSize: fontSize.large,
    color: colors.white,
  },
  txtLoginContent: {
    marginBottom: scale(25),
    lineHeight: scale(18),
    fontSize: fontSize.normal,
  },
});
