import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Yup from "yup";

import {
  AddIcon,
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

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const RegisterScreen = () => {
  const { error } = useContext(AuthContext);
  const { register } = useAuth();

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
