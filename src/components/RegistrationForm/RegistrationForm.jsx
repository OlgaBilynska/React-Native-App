import {
  Button,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import ImgContainer from "../ImgContainer/ImgContainer";
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
} from "./RegistrationForm.styled";

const RegistrationForm = () => {
  return (
    <Container>
      <ImageWrapper></ImageWrapper>
      <FormName>Registration</FormName>
      <InputContainer>
        <InputEl placeholder="Login" />
        <InputEl placeholder="Email" />
        <LastInput>
          <InputEl placeholder="Password" />
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
});

export default RegistrationForm;
