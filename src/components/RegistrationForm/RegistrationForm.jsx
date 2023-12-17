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
} from "./RegistrationForm.styled";

const RegistrationForm = () => {
  return (
    <Container>
      <FormName>Registration</FormName>
      <InputContainer>
        <InputEl placeholder="Login" />
        <InputEl placeholder="Email" />

        <InputEl placeholder="Password">
          {/* <InfoText>Show</InfoText> */}
        </InputEl>
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
