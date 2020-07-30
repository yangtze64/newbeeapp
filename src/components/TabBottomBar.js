/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import {TabBar} from '@ant-design/react-native';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
//tabs
import Task from '@/pages/Task';
import Practice from '@/pages/Practice';
import Mine from '@/pages/Mine';
//icon
const practiceIcon = require('@/assets/images/practiceIcon.png');
const practiceSelectedIcon = require('@/assets/images/practiceSelectedIcon.png');
const taskIcon = require('@/assets/images/taskIcon.png');
const taskSelectedIcon = require('@/assets/images/taskSelectedIcon.png');
const mineIcon = require('@/assets/images/mineIcon.png');
const mineSelectedIcon = require('@/assets/images/mineSelectedIcon.png');

export default class TabBottomBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currTab: 'practice',
    };
  }
  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5">
        <TabBar.Item
          title="Practice"
          icon={
            <Image source={practiceIcon} style={{width: 15.5, height: 18.5}} />
          }
          selectedIcon={
            <Image
              source={practiceSelectedIcon}
              style={{width: 17.9, height: 20.4}}
            />
          }
          selected={this.selectedTab('practice')}
          onPress={() => this.switchTab('practice')}>
          <Practice />
        </TabBar.Item>
        <TabBar.Item
          title="Task"
          icon={<Image source={taskIcon} style={{width: 20.5, height: 18.5}} />}
          selectedIcon={
            <Image
              source={taskSelectedIcon}
              style={{width: 22, height: 18.5}}
            />
          }
          selected={this.selectedTab('task')}
          onPress={() => this.switchTab('task')}>
          <Task />
        </TabBar.Item>
        <TabBar.Item
          title="Mine"
          icon={<Image source={mineIcon} style={{width: 18.5, height: 18.5}} />}
          selectedIcon={
            <Image
              source={mineSelectedIcon}
              style={{width: 20, height: 18.5}}
            />
          }
          selected={this.selectedTab('mine')}
          onPress={() => this.switchTab('mine')}>
          <Mine />
        </TabBar.Item>
      </TabBar>
    );
  }
  selectedTab(tabName) {
    if (this.state.currTab === tabName) return true;
    return false;
  }
  switchTab(tabName) {
    this.setState({
      currTab: tabName,
    });
    //Actions.popTo(tabName)
  }
}
