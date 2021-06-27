import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import * as Yup from "yup";

import {
  Container,
  ErrorContainer,
  ErrorMessage,
  FooterImage,
  GreetingText,
  HeaderImage,
  Label,
  LoginLogo,
  SubButton,
  SubText,
} from "../styles/AuthStyles";
import Spacer from "../styles/Spacer";
import Form from "../components/Form";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import { AuthContext } from "../auth/AuthContextProvider";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = () => {
  const { error } = useContext(AuthContext);
  const { register } = useAuth();

  return (
    <>
      <StatusBar style="light" />
      <Container>
        <HeaderImage />
        <LoginLogo />
        <GreetingText>Hello again. {"\n"} Welcome back.</GreetingText>

        <ErrorContainer>
          <ErrorMessage>{error}</ErrorMessage>
        </ErrorContainer>

        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={register}
          validationSchema={validationSchema}
        >
          <Spacer mr={30} mb={48} ml={30}>
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
          <SubmitButton title="Sign in" />
        </Form>

        <Spacer mt={32} />
        <SubButton>
          <SubText color="#414959">
            New to SocialApp? <SubText color="#e9446a">Sign up</SubText>
          </SubText>
        </SubButton>

        <FooterImage />
      </Container>
    </>
  );
};

export default LoginScreen;
