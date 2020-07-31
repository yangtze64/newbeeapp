import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
export default class Practice extends React.Component {
  render() {
    return (
      <View>
        <Text>this is Practice</Text>
        <Button onPress={() => this.goPracticeInfo()} title="go PracticeInfo" />
      </View>
    );
  }
  goPracticeInfo() {
    Actions.push('practiceInfo');
    //this.props.navigation.push('practiceInfo');
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
}
