import { StyleSheet } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
`;

export const HeaderImage = styled.Image.attrs({
  source: require("../assets/authHeader.png"),
})`
  margin-top: -176px;
  margin-left: -50px;
`;

export const FooterImage = styled.Image.attrs({
  source: require("../assets/authFooter.png"),
})`
  position: absolute;
  bottom: -325px;
  right: -225px;
`;

export const LoginLogo = styled.Image.attrs({
  source: require("../assets/loginLogo.png"),
})`
  margin-top: -110px;
  align-self: center;
`;

export const GreetingText = styled.Text`
  margin-top: -32px;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
`;

export const ErrorContainer = styled.View`
  height: 72px;
  justify-content: center;
`;

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  margin-top: ${({ mt = 0 }) => mt}px;
`;

const Form = styled.View`
  margin: 0 30px 48px 30px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.medium};
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const InputField = styled.TextInput`
  height: 40px;
  border-bottom-color: ${({ theme }) => theme.colors.lightGray};
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 15px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  height: 52px;
  margin: 0 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const SubmitBtnText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
`;

export const SubButton = styled.TouchableOpacity`
  align-self: center;
`;

export const SubText = styled.Text`
  color: ${({ color = "black" }) => color};
  font-size: 13px;
`;

export const RegisterHeaderImg = styled.Image.attrs({
  source: require("../assets/authHeader.png"),
})`
  margin-top: -116px;
  margin-left: -50px;
`;

export const AddImage = styled.Image`
  margin-top: -116px;
  margin-left: -50px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 48px;
  left: 18px;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: rgba(21, 22, 48, 0.1);
  align-items: center;
  justify-content: center;
`;

export const GreetingContainer = styled.View`
  position: absolute;
  top: 64px;
  align-items: center;
  width: 100%;
`;

export const RegisterGreeting = styled.Text`
  margin-top: 32px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const AvatarPlaceholder = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: #e1e2e6;
  border-radius: 50px;
  margin-top: 48px;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const BackIcon = styled(Ionicons).attrs(({ theme }) => ({
  name: "ios-arrow-back",
  size: 30,
  color: theme.colors.white,
}))``;

export const AddIcon = styled(Ionicons).attrs(({ theme }) => ({
  name: "ios-add",
  size: 40,
  color: theme.colors.white,
}))`
  margin-top: 6px;
  margin-left: 2px;
`;
