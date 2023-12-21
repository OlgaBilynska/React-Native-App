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
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [name, setName] = useState("");
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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container isShowKeyboard={isShowKeyboard}>
        <ImgContainer />
        <FormName>Registration</FormName>
        <InputContainer>
          <InputEl
            placeholder="Login"
            name="login"
            value={name}
            onChangeText={setName}
            isFocused={focusedInput === "1"}
            onFocus={() => handleFocus("1")}
            onBlur={handleBlur}
            id="1"
            type="text"
          />
          <InputEl
            placeholder="Email"
            name="email"
            value={email}
            onChangeText={setEmail}
            onFocus={() => handleFocus("2")}
            onBlur={handleBlur}
            isFocused={focusedInput === "2"}
            id="2"
            type="email"
          />
          <LastInput>
            <InputEl
              placeholder="Password"
              name="password"
              value={password}
              onChangeText={setPassword}
              isFocused={focusedInput === "3"}
              onBlur={handleBlur}
              onFocus={() => handleFocus("3")}
              id="3"
              type="password"
            />
            <InfoText>Show</InfoText>
          </LastInput>
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
