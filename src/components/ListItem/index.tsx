import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type ListItemProps = {
  title: string;
  done: boolean;
  onMarkAsDone: (title: string) => void;
  onDelete: (title: string) => void;
};

export default function ListItem({ title, done, onMarkAsDone, onDelete }: ListItemProps) {
  return (
    <View style={[styles.container, done && styles.completed]}>
      <View style={styles.leftSide}>
        <Pressable onPress={() => onMarkAsDone(title)}>
          <View style={[styles.checkbox, done && styles.checkboxCompleted]}>
            {done && (
              <Ionicons
                style={styles.checkmark}
                name="checkmark"
                size={18}
                color="#fff"
              />
            )}
          </View>
        </Pressable>
        <Text style={[styles.title, done && styles.completedTitle]}>
          {title}
        </Text>
      </View>
      <Pressable style={({pressed}) => pressed ? [styles.deleteButton, styles.buttonPressed] : styles.deleteButton} onPress={() => onDelete(title)}>
        <Ionicons name="trash-outline" size={25} color="#808080" />
      </Pressable>
    </View>
  );
}
