import { ImageWrapper, IconWrapper } from "./ImgContainer.styled";
import Icon from "react-native-vector-icons/Feather";

const ImgContainer = () => {
  return (
    <ImageWrapper>
      <IconWrapper>
        <Icon name="plus-circle" size={25} color="orange" />
      </IconWrapper>
    </ImageWrapper>
  );
};

export default ImgContainer;
