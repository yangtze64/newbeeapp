import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import Routers from '@/router';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFD948" barStyle="dark-content" />
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
