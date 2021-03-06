import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

export const FeedHeader = styled.View`
  padding-bottom: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #ebecf4;
  box-shadow: 5px 0 15px #454d65;
  z-index: 1;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgLight};
`;

export const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  border-radius: 10px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px;
`;

export const UserImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const UserInfoText = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const UserName = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const PostTime = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const PostText = styled.Text`
  font-size: 14px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 15px;
`;

export const PostImg = styled.Image`
  width: 100%;
  height: 250px;
`;

export const Divider = styled.View`
  border-bottom-color: #dddddd;
  border-bottom-width: 1px;
  width: 92%;
  align-self: center;
  margin-top: 15px;
`;

export const InteractionWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 15px;
`;

export const Interaction = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
  padding: 2px 5px;
  background-color: ${({ active }) => (active ? "#2e64e515" : "transparent")};
`;

export const InteractionText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${({ active }) => (active ? "#2e64e5" : "#333")};
  margin-top: 5px;
  margin-left: 5px;
`;

export const LikeButton = styled(Ionicons).attrs(({ active, theme }) => ({
  name: active ? "heart" : "heart-outline",
  size: 25,
  color: active ? theme.colors.primary : theme.colors.black,
}))``;
