import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Deck from "./src/Deck";
// import Element from "./src/Element";

export default function App() {
  return (
    <View style={styles.container}>
      <Deck />
      {/* <Element /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
