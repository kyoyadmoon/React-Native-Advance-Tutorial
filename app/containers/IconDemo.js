import React, { Component, PropTypes } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
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
  icon: {
    backgroundColor: '#AAEE',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  row: {
    flexDirection: 'row'
  }
});

export default class Home extends Component {
  state = {
    iconName: 'rocket'
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TextInput onChangeText={(iconName) => this.setState({ iconName })}
            placeholder="Enter icon name here..."
            style={styles.textInput} />
        </View>
        <Icon name={this.state.iconName} size={25} style={styles.icon} />
      </View>
    )
  }
}