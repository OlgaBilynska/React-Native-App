// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import { Text } from "react-native";
import RegistrationScreen from "./src/components/RegistrationScreen";
// import PostsScreen from "./src/Screens/PostsScreen";
// import LoginScreen from "./src/Screens/LoginScreen";

export default function App() {
  console.log("Hello start");
  return (
    <>
      <Text>Hello!</Text>
      {/* <View style={styles.container}> */}
      <RegistrationScreen />
      {/* <StatusBar style="auto" /> */}
      {/* </View> */}
    </>
  );
}
