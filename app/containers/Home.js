import React, { Component, PropTypes } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import Greeting from '../components/Greeting';
import Icon from 'react-native-vector-icons/FontAwesome';

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
  },
  btn: {
    backgroundColor: '#AAEE',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Home = () => (
  <View style={styles.container}>
    <View>
      <TouchableOpacity style={styles.btn} onPress={() => { Actions.home() }}>
        <Text style={styles.btnText}><Icon name="rocket" size={20} />Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => { Actions.iconDemo() }}>
        <Text style={styles.btnText}>Icon Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => { Actions.specific() }}>
        <Text style={styles.btnText}>Specific Code</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => {
        Actions['asyncStorage-save']()
      }}>
        < Text style={styles.btnText} > AsyncStorage</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => { Actions.tabbar() }}>
        <Text style={styles.btnText}>Tab View</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => { Actions.animation() }}>
        <Text style={styles.btnText}>Animation</Text>
      </TouchableOpacity>
    </View>
  </View >
);