import React, { Component } from "react";
import { View, Text } from "react-native";

class Comp extends Component {
  render() {
    return (
      <View>
        <Text>name is: {this.props.name}</Text>
      </View>
    );
  }
}

export default Comp;
