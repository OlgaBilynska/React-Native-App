import { Text, View, KeyboardAvoidingView } from "react-native";
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
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <ImgContainer />
      <FormName>Login</FormName>
      <InputContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <InputEl
            placeholder="Email"
            name="email"
            value={email}
            onChangeText={setEmail}
          />
        </KeyboardAvoidingView>
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
  );
};

export default LoginForm;
