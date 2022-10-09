import { Image, StyleSheet, Text, View } from "react-native";
import React, { useRef, useEffect, useState } from "react";

const NoteItem = ({ title = "", text, pin, isSwipe, id }) => {
  const [isRadius, setIsRadius] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    if (isSwipe[1] === id && isSwipe[0]) {
      setIsRadius(true)
    } else {
      setIsRadius(false)
    }
  }, [isSwipe]);

  return (
    <View style={!isRadius ? styles.noteItemWrapper : styles.noteItemWrapperSwipe}>
      {pin && <Image style={{ marginRight: 10, }} source={require("../assets/pin.png")} />}
      <View style={styles.noteItem}>
        <Text style={styles.title}>{title}</Text>
        <Text
          ref={textRef}
          style={styles.text}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {text}
        </Text>
      </View>
    </View>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  noteItemWrapper: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#363636",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    Width: "100%",
  },
  noteItemWrapperSwipe: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#363636",
    borderRadius: 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "100%",
  },
  noteItem: {
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  text: {
    color: "#ffffff",
  },
});
