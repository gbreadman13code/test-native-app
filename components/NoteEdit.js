import { StyleSheet, TextInput, View, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import AddNoteHeader from './AddNoteHeader';
import {
  addNewNoteAction,
  updateNoteAction,
} from "../redux/Reducers/notesReducer";

const NoteEdit = ({ route, navigation }) => {
  const [title, setTitle] = useState(
    route.params.title ? route.params.title : ""
  );
  const [text, setText] = useState(route.params.text ? route.params.text : "");
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const changeTitle = (text) => {
    setTitle(text);
    setIsEdit(true);
  };
  const changeText = (text) => {
    setText(text);
    setIsEdit(true);
  };

  const safeEdit = () => {
    const date = new Date();
    const id = route.params.id
      ? route.params.id
      : Number((Math.random() + Math.random()).toString().replace(".", ""));
    const pin = route.params.pin ? route.params.pin : false;
    const newNote = {
      id: id,
      pin: pin,
      createTime: Date.parse(date),
      title: title,
      text: text,
    };
    if (route.params.id) {
      dispatch(updateNoteAction(newNote));
    } else {
      dispatch(addNewNoteAction(newNote));
    }
    navigation.navigate("Home");
  };
  return (
    <View style={styles.editContainer}>
      <AddNoteHeader navigation={navigation} goback={true} />

      <TextInput
        style={[styles.input, styles.title]}
        value={title}
        onChangeText={changeTitle}
        placeholder="Введите название"
        placeholderTextColor="grey"
      />
      <TextInput
        style={[styles.input, styles.text]}
        value={text}
        multiline={true}
        onChangeText={changeText}
        placeholder="Введите текст"
        placeholderTextColor="grey"
      />
      {isEdit && (
        <View style={styles.safeButtonContainer}>
          <TouchableOpacity style={styles.safeButton} onPress={safeEdit}>
            <Image source={require("../assets/save.png")} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default NoteEdit;

const styles = StyleSheet.create({
  editContainer: {
    width: "100%",
    flex: 1,
    // alignItems: "center",
    backgroundColor: "black",
  },
  input: {
    width: "95%",
    color: "#ffffff",
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 150,
  },
  safeButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingRight: 15,
    paddingBottom: 20,
  },
  safeButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'black',
    padding: 30,
    borderTopLeftRadius: 50
  },
});
