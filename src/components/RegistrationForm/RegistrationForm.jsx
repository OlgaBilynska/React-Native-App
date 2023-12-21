import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Container,
  FormName,
  InputEl,
  ButtonSingIn,
  InputContainer,
  InfoText,
  LoginLink,
  BtnText,
  LastInput,
} from "./RegistrationForm.styled";
import { useState, useEffect } from "react";
import ImgContainer from "../ImgContainer";

const RegistrationForm = () => {
  // console.log("isFocused", isFocused);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isFocused, setIsFocused] = useState(false);

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

  // const handleFocus = () => {
  //   setIsFocused(true);
  // };

  // const handleBlur = () => {
  //   setIsFocused(false);
  // };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container isShowKeyboard={isShowKeyboard}>
        <ImgContainer />
        <FormName>Registration</FormName>
        <InputContainer>
          {/* <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          > */}
          <InputEl
            placeholder="Login"
            name="login"
            autoFocus
            value={name}
            onChangeText={setName}
            // onFocus={handleFocus}
            // onBlur={handleBlur}
            // isFocused={isFocused}
          />
          {/* </KeyboardAvoidingView> */}

          {/* <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          > */}
          <InputEl
            placeholder="Email"
            name="email"
            value={email}
            onChangeText={setEmail}
            // onFocus={handleFocus}
            // onBlur={handleBlur}
            // isFocused={isFocused}
          />
          {/* </KeyboardAvoidingView> */}
          {/* <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          > */}
          <LastInput>
            <InputEl
              placeholder="Password"
              name="password"
              value={password}
              onChangeText={setPassword}
              // onFocus={handleFocus}
              // onBlur={handleBlur}
              // isFocused={isFocused}
            />
            <InfoText>Show</InfoText>
          </LastInput>
          {/* </KeyboardAvoidingView> */}
        </InputContainer>
        <ButtonSingIn>
          <BtnText>Sign In</BtnText>
        </ButtonSingIn>
        <LoginLink> Already have an account? Log in.</LoginLink>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationForm;
