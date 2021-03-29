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

const CardComponent = ({ item }) => {
  //   console.log(item);
  return (
    <View style={{ marginTop: 15 }}>
      <Card style={{ margin: 10 }}>
        <Card.Cover
          source={{ uri: `https://source.unsplash.com/random/${item.id}` }}
        />
        <Card.Content>
          <Text style={{ textAlign: "center", fontSize: 30 }}>{item.text}</Text>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque,
            saepe earum consequatur dignissimos perferendis est quod, qui
            ducimus laboriosam vero unde exercitationem amet blanditiis corporis
            neque cumque, aliquid enim molestias.
          </Paragraph>
          <Button style={{ margin: 10 }} mode="contained">
            Read More
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default CardComponent;
