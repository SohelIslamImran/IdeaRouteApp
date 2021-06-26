import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import {
  AddIcon,
  AvatarPlaceholder,
  BackButton,
  BackIcon,
  Container,
  ErrorContainer,
  ErrorMessage,
  FooterImage,
  Form,
  GreetingContainer,
  Input,
  Label,
  RegisterGreeting,
  RegisterHeaderImg,
  SubButton,
  SubmitBtnText,
  SubmitButton,
  SubText,
} from "../styles/AuthStyles";
import Spacer from "../styles/Spacer";

const RegisterScreen = () => {
  return (
    <>
      <StatusBar style="light" />
      <Container>
        <RegisterHeaderImg />
        <BackButton>
          <BackIcon />
        </BackButton>

        <GreetingContainer>
          <RegisterGreeting>
            Hello! {"\n"} Sign up to get started.
          </RegisterGreeting>
          <AvatarPlaceholder>
            <View style={styles.avatar} />
            <AddIcon />
          </AvatarPlaceholder>
        </GreetingContainer>

        <ErrorContainer>
          <ErrorMessage mt={20}>errorMessage</ErrorMessage>
        </ErrorContainer>

        <Form>
          <Label>Full Name</Label>
          <Input />
          <Spacer mt={32} />
          <Label>Email Address</Label>
          <Input autoCapitalize="none" />
          <Spacer mt={32} />
          <Label>Password</Label>
          <Input secureTextEntry autoCapitalize="none" />
        </Form>

        <SubmitButton>
          <SubmitBtnText>Sign up</SubmitBtnText>
        </SubmitButton>

        <Spacer mt={32} />
        <SubButton>
          <SubText color="#414959">
            Already have an account? <SubText color="#e9446a">Sign in</SubText>
          </SubText>
        </SubButton>

        <FooterImage />
      </Container>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  avatar: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
