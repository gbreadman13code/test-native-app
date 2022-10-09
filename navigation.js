import React from "react";
import ApplicationContainer from "./components/ApplicationContainer";
import NoteEdit from "./components/NoteEdit";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default Navigator = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={ApplicationContainer} />
          <Stack.Screen name="Edit" component={NoteEdit} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
