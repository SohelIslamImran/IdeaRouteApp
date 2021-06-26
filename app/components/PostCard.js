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
} from "../styles/FeedStyles";

const PostCard = ({ item, onDelete, onPress }) => {
  return (
    <Card key={item.id}>
      <UserInfo>
        <UserImg
          source={{
            uri: "https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg",
          }}
        />
        <UserInfoText>
          <TouchableOpacity onPress={onPress}>
            <UserName>{item.userName}</UserName>
          </TouchableOpacity>
          <PostTime>{item.postTime}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostText>{item.post}</PostText>
      {item.postImg ? <PostImg source={item.postImg} /> : <Divider />}

      <InteractionWrapper>
        <Interaction active={item.liked}>
          <Ionicons name="heart-outline" size={25} />
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
  );
};

export default PostCard;
