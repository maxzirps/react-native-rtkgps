/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, Button, View, StyleSheet} from 'react-native';
import RtkGpsBridge from './RtkGpsBridge';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Button
            style={styles.button}
            onPress={() => {
              RtkGpsBridge.start();
            }}
            title="Start RTKNavi"
            accessibilityLabel="Start the background RTK-navi-service"
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignSelf: 'center',
    marginTop: '50%',
    height: '100%',
  },
});

export default App;
