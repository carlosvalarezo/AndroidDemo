/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const { Button } = require('react-native-ui-lib');

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ToastExample from './ToastExample';
import ImagePicker from './ImagePicker';

export default class Two extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello, world Two!</Text>
        <Button
          label="Show toast"
          onPress={() => ToastExample.show('Awesome', ToastExample.SHORT)}
        />
        <Button
          label="Show ImagePicker"
          onPress={() =>
            ImagePicker.openSelectDialog(
              {},
              uri => {
                console.log(uri);
              },
              error => {
                console.log(error);
              }
            )
          }
        />

        <Button
          label="Open java camera"
          onPress={() => ImagePicker.navigateToExample()}
        />
        <Button
          label="Show java activity"
          onPress={() => ImagePicker.openActivity()}
        />
        <Button
          label="Show another activity"
          onPress={() => ImagePicker.openOtherActivity()}
        />
      </View>
    );
  }
}
