import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as Yup from "yup";
import * as ImagePicker from "expo-image-picker";

import {
  AddIcon,
  Avatar,
  AvatarPlaceholder,
  BackButton,
  BackIcon,
  Container,
  ErrorContainer,
  ErrorMessage,
  FooterImage,
  GreetingContainer,
  Label,
  RegisterGreeting,
  RegisterHeaderImg,
  SubButton,
  SubText,
} from "../styles/AuthStyles";
import Spacer from "../styles/Spacer";
import Form from "../components/Form";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import useAuth from "../auth/useAuth";
import { AuthContext } from "../auth/AuthContextProvider";
import { Loader } from "../styles/Loader";
import { ScrollView } from "react-native";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const RegisterScreen = ({ navigation }) => {
  const { error, isLoading, avatar, setAvatar } = useContext(AuthContext);
  const { register } = useAuth();

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert(
          "We need permissions to use your camera roll if you'd like to include a profile photo."
        );
      }
    })();
  }, []);

  const pickAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      setAvatar(result.uri);
    }
  };

  return (
    <>
      <StatusBar style="light" />
      {isLoading && <Loader />}
      <Container>
        <ScrollView>
          <RegisterHeaderImg />

          <BackButton onPress={() => navigation.goBack()}>
            <BackIcon />
          </BackButton>

          <GreetingContainer>
            <RegisterGreeting>
              Hello! {"\n"} Sign up to get started.
            </RegisterGreeting>
            <AvatarPlaceholder onPress={pickAvatar}>
              <Avatar source={{ uri: avatar }} />
              <AddIcon />
            </AvatarPlaceholder>
          </GreetingContainer>

          <ErrorContainer>
            <ErrorMessage mt={20}>{error}</ErrorMessage>
          </ErrorContainer>

          <Form
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={register}
            validationSchema={validationSchema}
          >
            <Spacer mr={30} mb={48} ml={30}>
              <Label>Full Name</Label>
              <Input autoCorrect={false} name="name" />
              <Spacer mt={32} />
              <Label>Email Address</Label>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                name="email"
                textContentType="emailAddress"
              />
              <Spacer mt={32} />
              <Label>Password</Label>
              <Input
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                name="password"
                textContentType="password"
              />
            </Spacer>
            <SubmitButton title="Sign up" />
          </Form>

          <Spacer mt={32} />
          <SubButton onPress={() => navigation.navigate("Login")}>
            <SubText color="#414959">
              Already have an account?{" "}
              <SubText color="#e9446a">Sign in</SubText>
            </SubText>
          </SubButton>
        </ScrollView>
        <FooterImage />
      </Container>
    </>
  );
};

export default RegisterScreen;
