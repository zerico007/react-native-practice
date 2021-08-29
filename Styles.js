import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  input: {
    width: 300,
    height: 55,
    borderColor: "grey",
    borderWidth: 1,
    margin: 12,
    borderRadius: 30,
    color: "black",
    backgroundColor: "#fff",
    padding: 10,
  },
  button: {
    borderWidth: 1,
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333d51",
    borderRadius: 30,
  },
  btnSmall: {
    borderWidth: 1,
    width: 100,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFCC00",
    borderRadius: 5,
    borderColor: "white",
    marginBottom: 15,
  },
  shadow: {
    fontWeight: "bold",
    textShadowColor: "white",
    textShadowOffset: { width: 0.8, height: 0.8 },
    textShadowRadius: 2,
  },
});

export default commonStyles;
