import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import React from "react";
import rocketImg from "../../../assets/rocket.png";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={rocketImg} />
      <Text style={styles.title}>to<Text style={styles.purple}>do</Text></Text>
    </View>
  );
}
