/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from "react-native";

const { Button } = require('react-native-ui-lib');

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

import { Navigation } from "react-native-navigation";
import Two from './src/Two';


export default class App extends Component {

    constructor(props) {
        super(props);
//        this.pop = this.pop.bind(this);
        this.openRNView = this.openRNView.bind(this);
      }

  openRNView(){
      Navigation.push(this.props.componentId, {
            component: {
              name: 'navigation.Two'
            }
          });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world App!</Text>
        <TouchableOpacity onPress={this.openRNView}>
            <Navigation.Element elementId={'title2'}>
                <Text style={[{color: 'red', textAlign: 'center'}]}>{`Custom Transition Screen`}</Text>
            </Navigation.Element>
        </TouchableOpacity>
        <Button label='Show Modal' onPress={this.openRNView} />
      </View>
    );
  }
}
