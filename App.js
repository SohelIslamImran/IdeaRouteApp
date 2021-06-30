import React from "react";
import { ThemeProvider } from "styled-components/native";

import AuthContextProvider from "./app/auth/AuthContextProvider";

import theme from "./app/config/theme";
import Navigation from "./app/navigation";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}
