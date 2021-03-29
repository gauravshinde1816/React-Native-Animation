import React, { useEffect } from "react";
import { View, Animated } from "react-native";

const Element = () => {
  let position = new Animated.ValueXY(0, 0);
  Animated.spring(position, {
    toValue: { x: 250, y: 320 },
    useNativeDriver: false,
    bounciness: 40,
    speed: 2,
  }).start();

  return (
    <Animated.View style={position.getLayout()}>
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
};

export default Element;
