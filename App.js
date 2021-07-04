import React from "react";
import { ThemeProvider } from "styled-components/native";

import theme from "./app/config/theme";
import AuthContextProvider from "./app/auth/AuthContextProvider";
import StoreContextProvider from "./app/firestore/StoreContextProvider";
import Navigation from "./app/navigation";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <StoreContextProvider>
            <Navigation />
          </StoreContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}
