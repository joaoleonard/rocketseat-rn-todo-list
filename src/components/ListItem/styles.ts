import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#333333",
    backgroundColor: "#262626",
    borderRadius: 8,
    padding: 5,
    marginBottom: 7,
    paddingLeft: 15,
  },
  completed: {
    borderColor: "#262626",
  },
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 25,
    height: 25,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#4EA8DE",
    marginRight: 10,
    position: "relative",
  },
  checkboxCompleted: {
    backgroundColor: "#5E60CE",
    borderColor: "#5E60CE",
  },
  checkmark: {
    position: "absolute",
    left: 2,
    top: 1
  },
  title: {
    color: "#f2f2f2",
    fontSize: 16,
  },
  completedTitle: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
  deleteButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    padding: 10,
  },
  buttonPressed: {
    backgroundColor: "#333333",
  }
});