import React from "react";
import {
  ScrollView,
  Animated,
  Text,
  Title,
  PanResponder,
  View,
} from "react-native";
import { Card, Button, Paragraph } from "react-native-paper";

const NoMoreCard = () => {
  return (
    <View style={{ alignContent: "center" }}>
      <Card>
        <Card.Content>
          <Text style={{ margin: 40, textAlign: "center" }}>
            No More Card Present
          </Text>
          <Button mode="contained">Get More Card</Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default NoMoreCard;
