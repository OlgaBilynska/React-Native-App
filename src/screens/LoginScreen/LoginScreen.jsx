import { View, Text, Dimensions, KeyboardAvoidingView } from "react-native";
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
      <ImageBackgroundStyled
        source={image}
        resizeMode="cover"
        style={imageStyle}
      >
        <LoginForm />
      </ImageBackgroundStyled>
    </View>
  );
};

export default LoginScreen;
