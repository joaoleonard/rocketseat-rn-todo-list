import React, { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

type AddTaskInputProps = {
  onAddTask: (task: string) => void;
};

export default function AddTaskInput({ onAddTask }: AddTaskInputProps) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (!task.trim()) return;
    onAddTask(task);
    setTask("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        style={styles.input}
        placeholderTextColor={"#808080"}
        value={task}
        onChangeText={setTask}
      />
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [
                styles.button,
                task.trim().length === 0 && styles.disabled,
                styles.buttonPressed,
              ]
            : [styles.button, task.trim().length === 0 && styles.disabled]
        }
        onPress={handleAddTask}
      >
        <View style={styles.textButtonContainer}>
          <Ionicons name="add-circle-outline" size={26} color="#FFFFFF" />
        </View>
      </Pressable>
    </View>
  );
}
