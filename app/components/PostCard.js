import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
  PostImg,
  LikeButton,
} from "../styles/FeedStyles";
import Spacer from "../styles/Spacer";

const PostCard = ({ item, onDelete, onPress }) => {
  return (
    <Spacer p={20} pb={10}>
      <Card key={item.id}>
        <UserInfo>
          <UserImg source={item.userImg} />
          <UserInfoText>
            <TouchableOpacity onPress={onPress}>
              <UserName>{item.userName}</UserName>
            </TouchableOpacity>
            <PostTime>{item.postTime}</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>{item.post}</PostText>
        {item.postImg !== "none" ? (
          <PostImg source={item.postImg} />
        ) : (
          <Divider />
        )}

        <InteractionWrapper>
          <Interaction active={item.liked}>
            <LikeButton active={item.liked} />
            <InteractionText active={item.liked}>1 like</InteractionText>
          </Interaction>
          <Interaction>
            <Ionicons name="md-chatbubble-outline" size={25} />
            <InteractionText>commentText</InteractionText>
          </Interaction>
          <Interaction onPress={() => onDelete(item.id)}>
            <Ionicons name="md-trash-bin" size={25} />
          </Interaction>
        </InteractionWrapper>
      </Card>
    </Spacer>
  );
};

export default PostCard;
