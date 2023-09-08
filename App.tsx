/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';

import LoadingDots from './src/Components/LoadingDots/LoadingDots';

function App(): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{marginBottom: 20}}>
        <Text>Loading Dots</Text>
      </View>
      <LoadingDots size={5} />
    </View>
  );
}

export default App;
