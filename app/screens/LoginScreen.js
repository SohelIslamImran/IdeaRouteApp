import React from "react";
import { StatusBar } from "expo-status-bar";

import {
  Container,
  ErrorContainer,
  ErrorMessage,
  FooterImage,
  Form,
  GreetingText,
  HeaderImage,
  Input,
  Label,
  LoginLogo,
  SubButton,
  SubmitBtnText,
  SubmitButton,
  SubText,
} from "../styles/AuthStyles";
import Spacer from "../styles/Spacer";

const LoginScreen = () => {
  return (
    <>
      <StatusBar style="light" />
      <Container>
        <HeaderImage />
        <LoginLogo />
        <GreetingText>Hello again. Welcome back.</GreetingText>

        <ErrorContainer>
          <ErrorMessage>errorMessage</ErrorMessage>
        </ErrorContainer>

        <Form>
          <Label>Email Address</Label>
          <Input autoCapitalize="none" />
          <Spacer mt={32} />
          <Label>Password</Label>
          <Input secureTextEntry autoCapitalize="none" />
        </Form>

        <SubmitButton>
          <SubmitBtnText>Sign in</SubmitBtnText>
        </SubmitButton>

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
