import React, { Component } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
class Ball extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);

    Animated.spring(this.position, {
      toValue: { x: 200, y: 400 },
      useNativeDriver: false,
    }).start();
  }
  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View
          style={{
            height: 60,
            width: 60,
            borderColor: "black",
            borderWidth: 30,
            borderRadius: 30,
          }}
        />
      </Animated.View>
    );
  }
}

export default Ball;
