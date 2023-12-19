import styled from "@emotion/native";
// import Icon from "react-native-vector-icons/Feather";

export const Container = styled.View`
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 92px 16px 45px 16px;
  background-color: white;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

export const FormName = styled.Text`
  font-size: 30px;
  font-weight: 500;
  color: #212121;
  margin-bottom: 32px;
  text-align: center;
`;

export const InputEl = styled.TextInput`
  position: relative;
  width: 100%;
  background-color: #f6f6f6;
  border: 1px solid #e8e8e8;
  padding: 16px 0px 15px 16px;
  border-radius: 10px;

  /* &:focus {
    border: #ff6c00;
  } */
`;

export const ButtonSingIn = styled.TouchableOpacity`
  padding: 16px 32px;
  background-color: #ff6c00;
  border-radius: 100px;
  margin-bottom: 16px;
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 43px;

  &::placeholder {
    font-size: 16px;
    color: #bdbdbd;
  }
`;

export const LastInput = styled.View`
  position: relative;
  display: block;
  width: 100%;
`;

export const InfoText = styled.Text`
  position: absolute;
  right: 16px;
  top: 30%;
  font-size: 16px;
  color: #1b4371;
`;

export const LoginLink = styled.Text`
  font-size: 16px;
  color: #1b4371;
  text-align: center;
`;

export const BtnText = styled.Text`
  font-size: 16px;
  color: #ffffff;
  text-align: center;
`;

export const ImageWrapper = styled.View`
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-40px);
  background-color: #f6f6f6;
  width: 120px;
  height: 120px;
  border-radius: 16px;
  z-index: 100;
`;

export const IconWrapper = styled.TouchableOpacity`
  position: absolute;
  bottom: 12px;
  right: -12px;
  width: 25px;
  height: 25px;
  background-color: #f6f6f6;
  border-radius: 50px;
`;
