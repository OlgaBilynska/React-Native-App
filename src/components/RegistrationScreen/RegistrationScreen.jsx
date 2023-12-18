import React from "react";
import { ImageBackground, View } from "react-native";
import RegistrationForm from "../RegistrationForm";
import image from "../../../assets/background.jpg";

const RegistrationScreen = () => {
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <ImageBackground
        source={image}
        style={{
          position: "absolute",
          flex: 1,
          resizeMode: "cover",
          width: "100%",
          height: "100%",
        }}
      >
        <RegistrationForm />
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;
