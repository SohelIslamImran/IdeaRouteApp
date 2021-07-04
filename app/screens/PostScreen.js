import React, { useContext, useEffect, useRef, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ActionButton from "react-native-action-button";
import * as ImagePicker from "expo-image-picker";

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
import { colors } from "../config/theme/colors";
import { AuthContext } from "../auth/AuthContextProvider";
import useStore from "../firestore/useStore";
import { StoreContext } from "../firestore/StoreContextProvider";
import { Loader } from "../styles/Loader";

const PostScreen = ({ route, navigation }) => {
  const { avatar } = useContext(AuthContext);
  const { isLoading } = useContext(StoreContext);
  const { addPost } = useStore();
  const inputTextRef = useRef(null);
  const [text, setText] = useState(null);
  const [image, setImage] = useState(null);
  const photoUri = route.params?.image;

  useFocusEffect(() => {
    photoUri && setImage(photoUri);
    inputTextRef.current.focus();
  });

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert(
          "We need permissions to use your camera roll if you'd like to include a photo."
        );
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      navigation.setParams({ image: null });
      setImage(result.uri);
    }
  };

  const handlePost = async () => {
    if (text || image) {
      await addPost(text.trim(), image);
      navigation.goBack();
      Alert.alert(
        "Post published!",
        "Your post has been published Successfully!"
      );
      setText(null);
      setImage(null);
    }
  };

  return (
    <SafeArea>
      {isLoading && <Loader />}
      <PostHeader>
        <TouchableOpacity>
          <Ionicons name="md-arrow-back" size={24} color={colors.lightGray} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePost}>
          <Text w6>Post</Text>
        </TouchableOpacity>
      </PostHeader>

      <InputContainer>
        <Avatar source={{ uri: avatar }} />
        <InputText
          ref={inputTextRef}
          placeholder="Want to share something?"
          onChangeText={(txt) => setText(txt)}
          value={text}
        />
      </InputContainer>

      <PostImgContainer>
        <PostImg source={{ uri: image }} />
      </PostImgContainer>

      <ActionButton buttonColor={colors.primary}>
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Take Photo"
          onPress={() => navigation.navigate("Camera")}
        >
          <ActionIcon name="camera-outline" />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#3498db"
          title="Choose Photo"
          onPress={pickImage}
        >
          <ActionIcon name="md-images-outline" />
        </ActionButton.Item>
      </ActionButton>
    </SafeArea>
  );
};

export default PostScreen;
