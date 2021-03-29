import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

const HEADER_MAX_HEIGHT = 120;

const HEADER_MIN_HEIGHT = 70;

const IMAGE_PROFILE_MAX_HEIGHT = 80;

const IMAGE_PROFILE_MIN_HEIGHT = 40;

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: HEADER_MAX_HEIGHT,
          width: "100%",
          backgroundColor: "lightskyblue",
          top: 1,
          right: 0,
          left: 0,
          position: "absolute",
        }}
      ></View>

      <ScrollView>
        <View>
          <Image
            source={{
              uri:
                "https://images.unsplash.com/photo-1541576980233-97577392db9a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            }}
            style={{
              flex: 1,
              height: IMAGE_PROFILE_MAX_HEIGHT,
              width: IMAGE_PROFILE_MAX_HEIGHT,
              borderRadius: IMAGE_PROFILE_MAX_HEIGHT / 2,
              borderWidth: 3,
              borderColor: "white",
              marginTop: 80,
              marginLeft: 20,
            }}
          />
          <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 20 }}>
            Gaurav Shinde
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
