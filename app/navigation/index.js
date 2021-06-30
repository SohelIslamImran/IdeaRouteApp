import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import AuthNavigator from "./AuthNavigator";
import { AuthContext } from "../auth/AuthContextProvider";
import { auth } from "../auth/useAuth";
import AppNavigator from "./AppNavigator";

const Navigation = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    await auth.onAuthStateChanged((usr) => {
      if (usr) {
        setUser({ isSignedIn: true, name: usr.displayName, email: usr.email });
      }
    });
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      {user?.isSignedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
