import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import AuthNavigator from "./AuthNavigator";
import { AuthContext } from "../auth/AuthContextProvider";
import { auth } from "../auth/useAuth";
import AppNavigator from "./AppNavigator";
import useStore from "../firestore/useStore";

const Navigation = () => {
  const { user, setUser, setAvatar } = useContext(AuthContext);
  const [isReady, setIsReady] = useState(false);
  const { getAvatar } = useStore();

  const restoreUser = async () => {
    await auth.onAuthStateChanged((usr) => {
      if (usr) {
        setUser({
          isSignedIn: true,
          name: usr.displayName,
          email: usr.email,
          uid: usr.uid,
        });
      }
    });
  };

  useEffect(() => {
    if (user) {
      (async () => {
        const avt = await getAvatar();
        setAvatar(avt);
      })();
    }
  }, [user]);

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
