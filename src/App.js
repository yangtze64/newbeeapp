import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import Routers from '@/router';
import {themeColor, statusBarStyle} from '@/app.json';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor={themeColor} barStyle={statusBarStyle} />
      <SafeAreaView style={styles.safeArea}>
        <Routers />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;
