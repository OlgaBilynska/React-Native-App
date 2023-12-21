import React from "react";
import {
  ImageBackground,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import RegistrationForm from "../../components/RegistrationForm";
import image from "../../../assets/background.jpg";
import { ImageBackgroundStyled } from "./RegistrationScreen.styled";

const imageStyle = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
  flexDirection: "column-reverse",
};

const RegistrationScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackgroundStyled
        source={image}
        resizeMode="cover"
        style={imageStyle}
      >
        <RegistrationForm />
      </ImageBackgroundStyled>
      <RegistrationForm />
    </View>
  );
};

export default RegistrationScreen;
