import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthContextProvider";
import useAuth from "../auth/useAuth";

import PostCard from "../components/PostCard";
import { StoreContext } from "../firestore/StoreContextProvider";
import useStore from "../firestore/useStore";
import { Loader } from "../styles/Loader";
import {
  AboutUser,
  ProfilePic,
  ScrollContainer,
  UserBtn,
  UserBtnContainer,
  UserBtnTxt,
  UserInfoContainer,
  UserInfoItem,
  UserInfoSubTitle,
  UserInfoTitle,
  UserName,
} from "../styles/ProfileStyles";
import SafeArea from "../styles/SafeArea";

const ProfileScreen = () => {
  const { user, avatar } = useContext(AuthContext);
  const { isLoading } = useContext(StoreContext);
  const { getUserPosts, deletePost } = useStore();
  const { logOut } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getUserPosts();
      setPosts(data);
    })();
  }, []);

  return (
    <SafeArea>
      {isLoading && <Loader />}
      <ScrollContainer>
        <ProfilePic source={{ uri: avatar }} />
        <UserName>{user.name}</UserName>
        <AboutUser>{user.email}</AboutUser>

        <UserBtnContainer>
          {null ? (
            <>
              <UserBtn outline onPress={null}>
                <UserBtnTxt color="primary">Message</UserBtnTxt>
              </UserBtn>
              <UserBtn outline onPress={null}>
                <UserBtnTxt color="primary">Follow</UserBtnTxt>
              </UserBtn>
            </>
          ) : (
            <>
              <UserBtn onPress={logOut}>
                <UserBtnTxt>Logout</UserBtnTxt>
              </UserBtn>
            </>
          )}
        </UserBtnContainer>

        <UserInfoContainer>
          <UserInfoItem>
            <UserInfoTitle>{posts.length}</UserInfoTitle>
            <UserInfoSubTitle>Posts</UserInfoSubTitle>
          </UserInfoItem>
          <UserInfoItem>
            <UserInfoTitle>10,000</UserInfoTitle>
            <UserInfoSubTitle>Followers</UserInfoSubTitle>
          </UserInfoItem>
          <UserInfoItem>
            <UserInfoTitle>100</UserInfoTitle>
            <UserInfoSubTitle>Following</UserInfoSubTitle>
          </UserInfoItem>
        </UserInfoContainer>

        {posts.map((item) => (
          <PostCard key={item.id} item={item} onDelete={deletePost} />
        ))}
      </ScrollContainer>
    </SafeArea>
  );
};

export default ProfileScreen;
