import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import NoteItem from "./NoteItem";
import AddNoteHeader from "./AddNoteHeader";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { deleteNoteAction, pinNoteAction } from "../redux/Reducers/notesReducer";

const ApplicationContainer = ({ navigation }) => {
  const [notes, setNotes] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isSwipe, setIsSwipe] = useState([false, 0]);
  const notesList = useSelector((state) => state.notes.notesList);

  const dispatch = useDispatch();

    useEffect(() => {
        console.log(isSwipe)
    }, [isSwipe])

  const deleteNote = (item) => {
    dispatch(deleteNoteAction(item.id));
  };
  const pinNote = (item) => {
    dispatch(pinNoteAction(item.id));
  };

  const leftSwipre = (item) => {
    return (
      <TouchableOpacity onPress={() => pinNote(item)}>
        <View style={styles.pinBox}>
          <Image
            style={styles.swipeIcon}
            source={require("../assets/pin.png")}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const rightSwipre = (item) => {
    return (
      <TouchableOpacity onPress={() => deleteNote(item)}>
        <View style={styles.deleteBox}>
          <Image
            style={styles.swipeIcon}
            source={require("../assets/delete.png")}
          />
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (notesList.length > 0) {
      const pinNotes = [];
      const notPinNotes = [];

      for (let i = 0; i < notesList.length; i++) {
        if (notesList[i].pin) {
            pinNotes.push(notesList[i])
        } else {
            notPinNotes.push(notesList[i])
        }
      }
      const pinSorted = pinNotes.sort(function (a, b) {
        return b.pinTime - a.pinTime;
      });

      const notPinSorted = notPinNotes.sort(function (a, b) {
        return b.createTime - a.createTime;
      });
      
      setNotes(pinSorted.concat(notPinSorted));
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [notesList]);

  return (
    <View className={styles.wrapper} style={{ backgroundColor: 'black', alignItems: 'center' }}>
      <AddNoteHeader navigation={navigation} />
      <View>
        {isEmpty ? (
          <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: false, title: '', text: ''})}>
            <Text style={{ color: 'white' }}>Добавьте свою первую заметку</Text>
          </TouchableOpacity>
        ) : (
          notes.length > 0 && (
            <FlatList
              data={notes}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Swipeable
                  renderLeftActions={() => leftSwipre(item)}
                  renderRightActions={() => rightSwipre(item)}
                  onSwipeableLeftWillOpen={() => setIsSwipe([true, item.id])}
                  onSwipeableRightWillOpen={() => setIsSwipe([true, item.id])}
                  onSwipeableWillClose={() => setIsSwipe([false, 0])}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Edit", item)}
                    activeOpacity={0.9}
                  >
                    {<NoteItem id={item.id} title={item.title} text={item.text} pin={item.pin} isSwipe={isSwipe} />}
                  </TouchableOpacity>
                </Swipeable>
              )}
            />
          )
        )}
      </View>
    </View>
  );
};

export default ApplicationContainer;

const styles = StyleSheet.create({
  wrapper: {
  },
  pinBox: {
    backgroundColor: "#f19737",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 66,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  deleteBox: {
    backgroundColor: "#ec5746",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 66,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
});
