import React, { Component, PropTypes } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import Greeting from '../components/Greeting';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  greetingText: {
    margin: 20,
    fontSize: 22,
    letterSpacing: 2
  }
});

export default Specific = () => (
  <View style={styles.container}>
    <Greeting style={styles.greetingText} />
  </View>
);