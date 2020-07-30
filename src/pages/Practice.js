import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button,StatusBar} from 'react-native';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
export default class Practice extends React.Component {
  render() {
    return (
      <View>
        <Text>this is Practice</Text>
        <Button
          onPress={() => Actions.push('practiceInfo')}
          title="go PracticeInfo"
        />
      </View>
    );
  }
}
