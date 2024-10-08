import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 15,
    top: -27,
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    color: "#fff",
    fontSize: 16,
    padding: 18,
    borderRadius: 6,
    height: 54,
  },
  button: {
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    alignItems: "center",
    marginLeft: 10,
    width: 54,
    height: 54,
  },
  textButtonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  disabled: {
    backgroundColor: "#333333",
    opacity: 0.8,
  },
  buttonPressed: {
    backgroundColor: "#4EA8DE",
  },
});
