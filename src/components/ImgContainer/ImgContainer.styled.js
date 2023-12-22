import styled from "@emotion/native";

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
