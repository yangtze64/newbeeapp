import {Dimensions, PixelRatio} from 'react-native';

const DEVICE_WIDTH_DP = Dimensions.get('window').width;
const DEVICE_HEIGHT_DP = Dimensions.get('window').height;

//UI设计图的宽度
const designWidth = 750;
//UI设计图的高度
const designHeight = 1334;

//手机屏幕的宽度
export const deviceWidth = DEVICE_WIDTH_DP;
//手机屏幕的高度
export const deviceHeight = DEVICE_HEIGHT_DP;
//计算手机屏幕宽度对应设计图宽度的单位宽度
export const unitWidth = deviceWidth / designWidth;
//计算手机屏幕高度对应设计图高度的单位高度
export const unitHeight = deviceHeight / designHeight;

//字体缩放比例，一般情况下不用考虑。
// 当应用中的字体需要根据手机设置中字体大小改变的话需要用到缩放比例
export const fontscale = PixelRatio.getFontScale();
//像素密度
export const pixelRatio = PixelRatio.get();
//px 转 dp
export function pxToDp(px) {
  return px * unitWidth;
}
