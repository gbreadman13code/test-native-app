import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const AddNoteHeader = ({ navigation, goback }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.button}>
      {goback ? (
        <TouchableOpacity
          onPress={goBack}
          activeOpacity={1}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Image
            style={{ marginRight: 15 }}
            source={require("../assets/left-arrow.png")}
          />
          <Text style={styles.headerText}>Notes</Text>
        </TouchableOpacity>
      ) : (
        <>
          <Text style={styles.headerText}>Notes</Text>
          <TouchableOpacity
            style={styles.buttonTextWrapper}
            onPress={() =>
              navigation.navigate("Edit", { id: false, title: "", text: "" })
            }
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default AddNoteHeader;

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ffffff",
  },
  buttonTextWrapper: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 50,
    borderColor: "#4b68a3",
  },
  buttonText: {
    color: "#4b68a3",
    fontWeight: "bold",
    fontSize: 15,
    margin: 0,
    padding: 0,
  },
});
