/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import {pxToDp} from '@/utils/dimension';
import TabBottomBar from '@/components/TabBottomBar';
//tabbar
import Task from '@/pages/Task';
import Practice from '@/pages/Practice';
import Mine from '@/pages/Mine';
//page
import TaskInfo from '@/pages/TaskInfo';
import PracticeInfo from '@/pages/PracticeInfo';
import Login from '@/pages/Login';
//icon
const practiceIcon = require('@/assets/images/practiceIcon.png');
const practiceSelectedIcon = require('@/assets/images/practiceSelectedIcon.png');
const taskIcon = require('@/assets/images/taskIcon.png');
const taskSelectedIcon = require('@/assets/images/taskSelectedIcon.png');
const mineIcon = require('@/assets/images/mineIcon.png');
const mineSelectedIcon = require('@/assets/images/mineSelectedIcon.png');
const Scenes = Actions.create(
  <Scene
    key="root"
    headerLayoutPreset="center"
    navigationBarStyle={{backgroundColor: '#FFD948'}}
    titleStyle={{fontSize: pxToDp(34)}}>
    <Scene
      key="tabBar"
      tabs
      legacy
      lazy
      hideNavBar
      initial
      tabBarPosition="bottom"
      labelStyle={{color: '#333333', fontSize: pxToDp(20)}}
      //component={TabBottomBar}
    >
      <Scene
        key="practice"
        component={Practice}
        title="远程项目实习"
        tabBarLabel="实习"
        tabBarIcon={(props) => {
          return props.focused ? (
            <Image
              source={practiceSelectedIcon}
              style={{width: pxToDp(35.8), height: pxToDp(40.8)}}
            />
          ) : (
            <Image
              source={practiceIcon}
              style={{width: pxToDp(33.8), height: pxToDp(39.9)}}
            />
          );
        }}
        navigationBarStyle={{backgroundColor: '#ffffff'}}
      />
      <Scene
        key="task"
        component={Task}
        title="任务大厅"
        tabBarLabel="任务"
        tabBarIcon={(props) => {
          return props.focused ? (
            <Image
              source={taskSelectedIcon}
              style={{width: pxToDp(44), height: pxToDp(37)}}
            />
          ) : (
            <Image
              source={taskIcon}
              style={{width: pxToDp(41), height: pxToDp(37)}}
            />
          );
        }}
      />
      <Scene
        key="mine"
        component={Mine}
        title="我的"
        tabBarLabel="我的"
        tabBarIcon={(props) => {
          return props.focused ? (
            <Image
              source={mineSelectedIcon}
              style={{width: pxToDp(40), height: pxToDp(37)}}
            />
          ) : (
            <Image
              source={mineIcon}
              style={{width: pxToDp(37), height: pxToDp(37)}}
            />
          );
        }}
      />
    </Scene>
    <Scene key="login" component={Login} title="Login" />
    <Scene key="taskInfo" component={TaskInfo} title="TaskInfo" />
    <Scene key="practiceInfo" component={PracticeInfo} title="PracticeInfo" />
  </Scene>,
);

const Routers = () => {
  return <Router scenes={Scenes} />;
};
export default Routers;
