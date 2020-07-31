import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

export default class Task extends React.Component {
  render() {
    return (
      <View>
        <Text>this is Task</Text>
      </View>
    );
  }

  componentDidMount() {
    this._navListener = this.props.navigation.addListener(
      'willFocus',
      this._setStatusBar,
    );
  }

  _setStatusBar() {
    StatusBar.setBackgroundColor('#FFD948');
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
}
