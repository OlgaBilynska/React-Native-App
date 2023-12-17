import styled from "@emotion/native";

export const Container = styled.View`
  position: fixed;
  top: 30%;
  width: 100%;
  padding: 92px 16px 45px 16px;
`;

export const FormName = styled.Text`
  font-size: 30px;
  font-weight: 500;
  color: #212121;
  margin-bottom: 32px;
  text-align: center;
`;

export const InputEl = styled.TextInput`
  display: block;
  width: 100%;
  background-color: #f6f6f6;
  border: 1px solid #e8e8e8;
  padding: 16px 0px 15px 16px;
  border-radius: 10px;

  &:last-child {
    position: relative;
  }
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
    line-height: 1.17;
    color: #bdbdbd;
  }
`;

export const LastInput = styled.View`
  position: relative;
  display: block;
`;

export const InfoText = styled.Text`
  position: absolute;
  right: 0px;
  font-size: 16px;
  color: #1b4371;
`;

export const LoginLink = styled.Text`
  font-size: 16px;
  line-height: 1.17;
  color: #1b4371;
  text-align: center;
`;

export const BtnText = styled.Text`
  font-size: 16px;
  color: #ffffff;
  text-align: center;
`;
