import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import ImgContainer from "../ImgContainer";
import {
  Container,
  FormName,
  InputContainer,
  InputEl,
  ButtonSingIn,
  BtnText,
  LastInput,
  InfoText,
  LoginLink,
} from "./LoginForm.styled";
import { useState, useEffect } from "react";

const LoginForm = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsShowKeyboard(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsShowKeyboard(false);
      }
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container isShowKeyboard={isShowKeyboard}>
        <ImgContainer />
        <FormName>Login</FormName>
        <InputContainer>
          {/* <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        > */}
          <InputEl
            placeholder="Email"
            name="email"
            value={email}
            onChangeText={setEmail}
          />
          {/* </KeyboardAvoidingView> */}
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <LastInput>
              <InputEl
                placeholder="Password"
                name="password"
                value={password}
                onChangeText={setPassword}
              />
              <InfoText>Show</InfoText>
            </LastInput>
          </KeyboardAvoidingView>
        </InputContainer>
        <ButtonSingIn>
          <BtnText>Log In</BtnText>
        </ButtonSingIn>
        <LoginLink> Don't have an account yet? Sign in</LoginLink>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default LoginForm;
