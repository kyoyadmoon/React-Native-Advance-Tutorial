import React, { Component, PropTypes } from "react";
import { AsyncStorage, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import Greeting from '../components/Greeting';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    fontSize: 20,
    padding: 5,
    margin: 15,
    borderColor: 'gray',
    borderWidth: 1
  },
  row: {
    flexDirection: 'row'
  }
});

export default class AsyncStorageSave extends Component {
  state = {
    userName: 'DMoon'
  }

  async componentWillMount() {
    try {
      /* get data */
      const value = await AsyncStorage.getItem('@MySuperStore:userName');
      this.setState({ userName: value });
    } catch (error) {
      // Error saving data
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.userName}</Text>
      </View>
    )
  }
}