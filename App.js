import React from "react";
import { ThemeProvider } from "styled-components/native";

import theme from "./app/config/theme";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RegisterScreen />
      </ThemeProvider>
    </>
  );
}
