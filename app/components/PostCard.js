import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

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
import { AuthContext } from "../auth/AuthContextProvider";

dayjs.extend(relativeTime);

const PostCard = ({ item, onDelete, onPress }) => {
  const { user, avatar } = useContext(AuthContext);
  const [liked, setLiked] = useState(false);

  return (
    <Spacer p={20} pb={10}>
      <Card key={item.id}>
        <UserInfo>
          <UserImg source={{ uri: item.userImg }} />
          <UserInfoText>
            <TouchableOpacity onPress={onPress}>
              <UserName>{item.userName}</UserName>
            </TouchableOpacity>
            <PostTime>{dayjs(item.time.toDate()).fromNow()}</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>{item.text}</PostText>
        {item.image ? <PostImg source={{ uri: item.image }} /> : <Divider />}
        <InteractionWrapper>
          <Interaction active={liked} onPress={() => setLiked(!liked)}>
            <LikeButton active={liked} />
            <InteractionText active={liked}>
              {item.likes > 0 ? `${item.likes} Like` : "Like"}
            </InteractionText>
          </Interaction>
          <Interaction>
            <Ionicons name="md-chatbubble-outline" size={25} />
            <InteractionText>Comment</InteractionText>
          </Interaction>
          {user.uid === item.userId && (
            <Interaction onPress={() => onDelete(item.id)}>
              <Ionicons name="md-trash-bin" size={25} />
            </Interaction>
          )}
        </InteractionWrapper>
      </Card>
    </Spacer>
  );
};

export default PostCard;
