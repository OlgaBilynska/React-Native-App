// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Keyboard } from "react-native";
import { useState, useEffect } from "react";
import RegistrationScreen from "./src/screens/RegistrationScreen/RegistrationScreen";
// import PostsScreen from "./src/screens/PostsScreen";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";

export default function App() {
  console.log("Hello start");

  return (
    <View>
      {/* <View style={styles.container}> */}
      {/* <RegistrationScreen /> */}
      <LoginScreen />
      {/* <StatusBar style="auto" /> */}
      {/* </View> */}
    </View>
  );
}
