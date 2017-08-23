import React, { Component, PropTypes } from "react";
import { Animated, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import Greeting from '../components/Greeting';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: '#AAEE',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
});

export default class AnimationDemo extends Component {
  state = {
    fadeAnim: new Animated.Value(1),  // Initial value for opacity: 0
    fontSizeAnim: new Animated.Value(15)
  }

  fadeIn = () => {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1500,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  fadeOut = () => {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: 1500,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  increaseFontSize = () => {
    Animated.timing(                  // Animate over time
      this.state.fontSizeAnim,            // The animated value to drive
      {
        toValue: 40,                   // Animate to opacity: 1 (opaque)
        duration: 1500,              // Make it take a while
      }
    ).start();
  }

  decreaseFontSize = () => {
    Animated.timing(                  // Animate over time
      this.state.fontSizeAnim,        // The animated value to drive
      {
        toValue: 12,                  // Animate to opacity: 1 (opaque)
        duration: 1500,              // Make it take a while
      }
    ).start();
  }

  smallerFadeOut = () => {
    Animated.parallel([
      Animated.timing(                  // Animate over time
        this.state.fadeAnim,            // The animated value to drive
        {
          toValue: 0,                   // Animate to opacity: 1 (opaque)
          duration: 1500,              // Make it take a while
        }
      ),
      Animated.timing(                  // Animate over time
        this.state.fontSizeAnim,        // The animated value to drive
        {
          toValue: 12,                  // Animate to opacity: 1 (opaque)
          duration: 1500,              // Make it take a while
        }
      )
    ]).start();
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{ opacity: this.state.fadeAnim }}>
          <Animated.Text style={{ fontSize: this.state.fontSizeAnim }}>Magic Word</Animated.Text>
        </Animated.View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.btn]} onPress={this.fadeIn}>
            <Text>Show</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn]} onPress={this.fadeOut}>
            <Text>Hide</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn]} onPress={this.increaseFontSize}>
            <Text>Bigger</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn]} onPress={this.decreaseFontSize}>
            <Text>Smaller</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.btn]} onPress={this.smallerFadeOut}>
          <Text>Smaller & FadeOut</Text>
        </TouchableOpacity>
      </View>
    );
  }
}