import {
  View,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import image from "../../../assets/background.jpg";
import { ImageBackgroundStyled } from "./LoginScreen.styled";

const imageStyle = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

const LoginScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackgroundStyled
          source={image}
          resizeMode="cover"
          style={imageStyle}
        >
          <LoginForm />
        </ImageBackgroundStyled>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default LoginScreen;
