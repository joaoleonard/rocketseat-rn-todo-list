import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Ionicons } from '@expo/vector-icons';

export default function ListEmptyMessage() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Ionicons name="list-circle" size={80} color="#808080" />
        <Text style={[styles.message, styles.bold]}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.message}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
