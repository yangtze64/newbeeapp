import React from 'react';
import {View, Text, Button} from 'react-native';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
export default class PracticeInfo extends React.Component {
  render() {
    return (
      <View>
        <Text>this is PracticeInfo</Text>
        <Button onPress={() => this.goTask()} title="go Task" />
      </View>
    );
  }

  goTask() {
    Actions.jump('task');
    //this.props.navigation.jump('task');
  }
}
