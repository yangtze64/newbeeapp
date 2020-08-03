/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {pxToDp} from '@/utils/dimension';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  StatusBar,
} from 'react-native';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
export default class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swiperImgs: [],
    };
  }
  componentDidMount() {
    this._navListener = this.props.navigation.addListener(
      'willFocus',
      this._setStatusBar,
    );
  }

  _setStatusBar() {
    StatusBar.setBackgroundColor('#ffffff');
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  render() {
    return (
      <View style={styles.main}>
        {this._renderBanner()}
        {this._renderLable()}
        <View>
          <View>
            <Text>这是图片</Text>
          </View>
          <View>
            <View>
              <Text>这是标题</Text>
            </View>
            <View>
              <Text>这是简介</Text>
            </View>
            <View>
              <View>
                <Text>这是项目标签</Text>
              </View>
              <View>
                <Text>这是项目标签</Text>
              </View>
              <View>
                <Text>这是项目标签</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  _renderBanner() {
    return (
      <View style={styles.swiper}>
        <Swiper showsButtons={false} autoplay removeClippedSubviews={false}>
          <Image
            source={require('@/assets/images/swiper1.png')}
            style={styles.swiper_image}
          />
          <Image
            source={require('@/assets/images/swiper2.png')}
            style={styles.swiper_image}
          />
          <Image
            source={require('@/assets/images/swiper3.png')}
            style={styles.swiper_image}
          />
        </Swiper>
      </View>
    );
  }

  _renderLable() {
    return (
      <View style={styles.lable_box}>
        <View style={styles.lable_dot} />
        <View style={styles.lable_text_view}>
          <Text style={styles.lable_text}>实习项目</Text>
        </View>
      </View>
    );
  }
  // goPracticeInfo() {
  //   Actions.push('practiceInfo');
  //   //this.props.navigation.push('practiceInfo');
  // }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  swiper: {
    width: pxToDp(750),
    height: pxToDp(389),
  },
  swiper_image: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    //paddingHorizontal: pxToDp(5),
    //paddingVertical: 0,
    width: pxToDp(750),
    height: pxToDp(389),
    //borderRadius: pxToDp(20),
  },
  lable_box: {
    flex: 1,
    flexDirection: 'row',
    height: pxToDp(36),
    marginTop: pxToDp(40),
    marginLeft: pxToDp(25),
    marginBottom: pxToDp(34),
  },
  lable_dot: {
    width: pxToDp(9),
    height: pxToDp(36),
    backgroundColor: '#FBD750',
    borderRadius: pxToDp(5),
    marginRight: pxToDp(22),
  },
  lable_text_view: {
    height: pxToDp(36),
  },
  lable_text: {
    fontSize: pxToDp(32),
    lineHeight: pxToDp(36),
    fontWeight: '500',
    color: '#000',
  },
});
