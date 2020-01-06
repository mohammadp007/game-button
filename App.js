/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StatusBar,
  View, Text
} from 'react-native';
import GameBtn from './components/GameBtn';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{padding: 5, backgroundColor: '#9DF02C', height: 50}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', color:'#FFFFFF', fontSize: 20}}>Made by Mohammad Pakivand</Text>
      </View>
      <View style={{backgroundColor: '#FFBE33', flex: 1}}>
        <GameBtn />
      </View>
    </>
  );
};

export default App;
