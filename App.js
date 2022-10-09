import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from './redux/index';
import Navigator from './navigation';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar 
        backgroundColor="#fff"
      />
      <View style={styles.container}>
        <Navigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
});
