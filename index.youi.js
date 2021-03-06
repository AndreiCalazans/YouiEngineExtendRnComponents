/**
 * Basic You.i RN app
 */
import React, { Component } from "react";
import { AppRegistry, Button, StyleSheet, View, ScrollView } from "react-native";
import { FormFactor } from "@youi/react-native-youi";
import { CounterpartExtender } from './CounterpartExtender';

export default class YiReactApp extends Component {
  render() {
    return (
      <View 
        style={styles.mainContainer}
      >
        <CounterpartExtender
          component={View} 
          onListLostFocus={(e) => console.log('Lost Focus', e)}
          onListGainedFocus={(e) => console.log('Gained Focus', e)}
          onFocusChanged={(e) => console.log('Changed Focus', e)}
          style={{ backgroundColor: 'lightblue' }}
        >
          <Button title="Button One" />
          <Button title="Button Two" />
        </CounterpartExtender>
        <CounterpartExtender
          component={ScrollView} 
          onListLostFocus={(e) => console.log('2 Lost Focus', e)}
          onListGainedFocus={(e) => console.log('2 Gained Focus', e)}
          onFocusChanged={(e) => console.log('2 Changed Focus', e)}
          style={{ backgroundColor: 'yellow' }}
        >
          <Button title="Button three" />
          <Button title="Button four" />
        </CounterpartExtender>
          <Button title="Outside box" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#e6e7e7",
    flex: 1
  },
  headerContainer: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    flex: 2
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2
  },
  image: {
    height: FormFactor.isTV ? 225 : 75,
    width: FormFactor.isTV ? 225 : 75,
    resizeMode: "contain"
  },
  bodyContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  headlineText: {
    marginBottom: 10,
    color: "#333333",
    textAlign: "center"
  },
  bodyText: {
    color: "#333333",
    textAlign: "center"
  }
});

AppRegistry.registerComponent("YiReactApp", () => YiReactApp);
