import React from "react";
import { ThemeProvider } from "styled-components/native";
import AuthContextProvider from "./app/auth/AuthContextProvider";

import theme from "./app/config/theme";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <RegisterScreen />
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}
