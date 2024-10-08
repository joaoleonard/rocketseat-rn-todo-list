import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type CounterProps = {
  text: string;
  count: number;
  color?: string;
};

export default function Counter({ text, count, color }: CounterProps) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: color,
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        {text}
      </Text>
      <View style={styles.counterContainer}>
        <Text style={styles.counter}>{count}</Text>
      </View>
    </View>
  );
}
