import {Platform} from 'react-native';
import {deviceWidth, deviceHeight} from '@/utils/dimension';

export default class platformOS {
  /**
   * 判断是否为iphonex
   * @returns {boolean}
   */
  static isIphoneX = () => {
    let iphoneX = deviceWidth === 375 && deviceHeight === 812;
    let iphoneXR = deviceWidth === 414 && deviceHeight === 896;
    return platformOS.isIOS() && (iphoneX || iphoneXR);
  };

  /**
   * web
   * @returns {boolean}
   */
  static isWeb = () => {
    return Platform.OS === 'web';
  };

  /**
   * 判断当前系统是否为android
   * @returns {boolean}
   */
  static isAndroid = () => {
    return Platform.OS === 'android';
  };

  /**
   * 判断当前系统是否为IOS
   * @returns {boolean}
   */
  static isIOS = () => {
    return Platform.OS === 'ios';
  };
}
