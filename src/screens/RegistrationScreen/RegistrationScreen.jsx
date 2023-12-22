import React from "react";
import {
  ImageBackground,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackgroundStyled
          source={image}
          resizeMode="cover"
          style={imageStyle}
        >
          <RegistrationForm />
        </ImageBackgroundStyled>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default RegistrationScreen;
