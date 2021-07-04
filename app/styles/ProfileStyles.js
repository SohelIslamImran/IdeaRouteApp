import styled from "styled-components";

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
`;

export const ProfilePic = styled.Image`
  height: 130px;
  width: 130px;
  border-radius: 75px;
`;

export const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`;

export const AboutUser = styled.Text`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #666;
  text-align: center;
`;

export const UserBtnContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const UserBtn = styled.TouchableOpacity`
  background-color: ${({ theme, outline }) =>
    outline ? theme.colors.white : theme.colors.primary};
  border: 2px solid
    ${({ theme, outline }) =>
      outline ? theme.colors.primary : theme.colors.white};
  border-radius: 5px;
  padding: 10px 34px;
  margin: 8px;
`;

export const UserBtnTxt = styled.Text`
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.white};
  font-weight: 600;
`;

export const UserInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin: 20px 0;
`;

export const UserInfoItem = styled.View`
  justify-content: center;
`;

export const UserInfoTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
`;

export const UserInfoSubTitle = styled.Text`
  font-size: 12px;
  color: #666;
  text-align: center;
`;
