import {
  Button,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TouchableOpacity,
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
  ImageWrapper,
  PlusIcon,
  IconWrapper,
} from "./RegistrationForm.styled";
import Icon from "react-native-vector-icons/AntDesign";
import { useState } from "react";

const RegistrationForm = () => {
  const [text, setText] = useState("");
  return (
    <Container>
      <ImageWrapper>
        <IconWrapper>
          <Icon name="pluscircleo" size={25} color="orange" />
        </IconWrapper>
      </ImageWrapper>
      <FormName>Registration</FormName>
      <InputContainer>
        <InputEl
          placeholder="Login"
          name="login"
          autoFocus
          value={text}
          onChangeText={setText}
        />
        <InputEl
          placeholder="Email"
          name="email"
          value={text}
          onChangeText={setText}
        />
        <LastInput>
          <InputEl
            placeholder="Password"
            name="password"
            value={text}
            onChangeText={setText}
          />
          <InfoText>Show</InfoText>
        </LastInput>
      </InputContainer>
      <ButtonSingIn>
        <BtnText>Sign In</BtnText>
      </ButtonSingIn>
      <LoginLink> Already have an account? Log in.</LoginLink>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    color: "#ff6c00",
    backgroundColor: "orange",
    borderRadius: 100,
    marginBottom: 16,
  },

  plus: {
    border: "1px solid black",
    padding: "10px",
    fill: "red",
  },
});

export default RegistrationForm;
