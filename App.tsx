import { StyleSheet, View, StatusBar, FlatList, Text } from "react-native";
import Header from "./src/components/Header";
import AddTaskInput from "./src/components/AddTaskInput";
import Counter from "./src/components/Counter";
import { useState } from "react";
import ListEmptyMessage from "./src/components/ListEmptyMessage";
import ListItem from "./src/components/ListItem";

type Task = {
  title: string;
  done: boolean;
};

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  let tasksConcluded = tasks.filter((item) => item.done).length;

  const handleAddTask = (task: string) => {
    const newTask: Task = {
      title: task,
      done: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleMarkAsDone = (task: string) => {
    const newTasks = tasks.map((item) => {
      if (item.title === task) {
        item.done = !item.done;
      }
      return item;
    });

    setTasks(newTasks);
  };

  const handleDeleteTask = (task: string) => {
    const newTasks = tasks.filter((item) => item.title !== task);
    setTasks(newTasks);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Header />
        <AddTaskInput onAddTask={handleAddTask} />
        <View style={styles.counters}>
          <Counter text="Criadas" count={tasks.length} color="#4EA8DE" />
          <Counter text="Concluídas" count={tasksConcluded} color="#8284FA" />
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => String(item.title)}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              done={item.done}
              onMarkAsDone={handleMarkAsDone}
              onDelete={handleDeleteTask}
            />
          )}
          ListEmptyComponent={() => <ListEmptyMessage />}
          style={styles.list}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    fontFamily: "Inter",
  },
  counters: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  list: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
});
