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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);

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

  const handleFocus = (inputId) => {
    setFocusedInput(inputId);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleSubmit = (email, password) => {
    console.log("email", email);
    console.log("password", password);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container isShowKeyboard={isShowKeyboard}>
        <ImgContainer />
        <FormName>Login</FormName>
        <InputContainer>
          <InputEl
            placeholder="Email"
            name="email"
            value={email}
            onChangeText={setEmail}
            type="email"
            id="1"
            isFocused={focusedInput === "1"}
            onFocus={() => handleFocus("1")}
            onBlur={handleBlur}
          />
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <LastInput>
              <InputEl
                placeholder="Password"
                name="password"
                value={password}
                onChangeText={setPassword}
                type="password"
                id="2"
                isFocused={focusedInput === "2"}
                onFocus={() => handleFocus("2")}
                onBlur={handleBlur}
              />
              <InfoText>Show</InfoText>
            </LastInput>
          </KeyboardAvoidingView>
        </InputContainer>
        <ButtonSingIn
          onPress={() => {
            handleSubmit(email, password);
          }}
        >
          <BtnText>Log In</BtnText>
        </ButtonSingIn>
        <LoginLink> Don't have an account yet? Sign in</LoginLink>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default LoginForm;
