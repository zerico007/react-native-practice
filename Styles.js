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
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFCC00",
    borderRadius: 30,
    shadowColor: "#171717",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  btnSmall: {
    width: 100,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFCC00",
    borderRadius: 5,
    marginBottom: 15,
    shadowColor: "#171717",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  shadow: {
    fontWeight: "bold",
    textShadowColor: "white",
    textShadowOffset: { width: 0.8, height: 0.8 },
    textShadowRadius: 2,
  },
});

export default commonStyles;
