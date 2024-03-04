import LottieView from "lottie-react-native";
import styled from "styled-components";
import cubicAnimation from "../../assets/cubicAnimation.json";

export const HeartAnimatedStyle = styled(LottieView).attrs({
  source: cubicAnimation,
  autoPlay: true,
  loop: true,
})`
  width: 400px;
  height: 300px;
`;

export const ContainerLottieStyle = styled.View`
  width: 400px;
  height: 300px;
`;
