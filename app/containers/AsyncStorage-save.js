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
  btn: {
    backgroundColor: '#AAEE',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  row: {
    flexDirection: 'row'
  }
});

export default class AsyncStorageSave extends Component {
  state = {
    userName: 'DMoon'
  }

  saveToAsyncStorage = async () => {
    try {
      /* set data */
      await AsyncStorage.setItem('@MySuperStore:userName', this.state.userName);
    } catch (error) {
      // Error saving data
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TextInput onChangeText={(userName) => this.setState({ userName })}
            placeholder="Enter name here..."
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.btn} onPress={this.saveToAsyncStorage}>
            <Text>
              Save
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => { Actions['asyncStorage-read']() }}>
          <Text>
            Navigate to read page
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}