import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ActionButton from "react-native-action-button";

import {
  ActionIcon,
  Avatar,
  InputContainer,
  InputText,
  PostHeader,
  PostImg,
  PostImgContainer,
} from "../styles/PostStyles";
import SafeArea from "../styles/SafeArea";
import Text from "../styles/Text";
import { useFocusEffect } from "@react-navigation/native";
import { colors } from "../config/theme/colors";

const PostScreen = () => {
  const inputTextRef = useRef(null);
  useFocusEffect(() => {
    inputTextRef.current.focus();
  });

  return (
    <SafeArea>
      <PostHeader>
        <TouchableOpacity>
          <Ionicons name="md-arrow-back" size={24} color={colors.lightGray} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text w6>Post</Text>
        </TouchableOpacity>
      </PostHeader>

      <InputContainer>
        <Avatar source={require("../assets/users/user-3.jpg")} />
        <InputText ref={inputTextRef} placeholder="Want to share something?" />
      </InputContainer>

      <PostImgContainer>
        <PostImg source={require("../assets/posts/post-img-3.jpg")} />
      </PostImgContainer>

      <ActionButton buttonColor={colors.primary}>
        <ActionButton.Item buttonColor="#9b59b6" title="Take Photo">
          <ActionIcon name="camera-outline" />
        </ActionButton.Item>
        <ActionButton.Item buttonColor="#3498db" title="Choose Photo">
          <ActionIcon name="md-images-outline" />
        </ActionButton.Item>
      </ActionButton>
    </SafeArea>
  );
};

export default PostScreen;
