import {
  Button,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TouchableOpacity,
  KeyboardAvoidingView,
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
import { useState } from "react";
import ImgContainer from "../ImgContainer";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <ImgContainer />
      <FormName>Registration</FormName>
      <InputContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <InputEl
            placeholder="Login"
            name="login"
            autoFocus
            value={name}
            onChangeText={setName}
          />
        </KeyboardAvoidingView>

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
        <BtnText>Sign In</BtnText>
      </ButtonSingIn>
      <LoginLink> Already have an account? Log in.</LoginLink>
    </Container>
  );
};

export default RegistrationForm;
