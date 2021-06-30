import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

export const PostHeader = styled.View`
  flex-direction: row;
  padding: 0 32px 12px 32px;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #d8d9db;
`;

export const Avatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: 16px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  margin: 32px;
`;

export const InputText = styled.TextInput.attrs({
  autoFocus: true,
  multiline: true,
  numberOfLines: 4,
})`
  flex: 1;
`;

export const PostImgContainer = styled.View`
  margin: 0 32px;
  height: 150px;
`;

export const PostImg = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ActionIcon = styled(Ionicons)`
  font-size: 20px;
  height: 22px;
  color: ${({ theme }) => theme.colors.white};
`;
