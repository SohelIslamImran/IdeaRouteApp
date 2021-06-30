import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import AppLoading from "expo-app-loading";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [isReady, setIsReady] = useState(false);
  let routeName;

  const initializeOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@already_launched");
      if (value === null) {
        AsyncStorage.setItem("@already_launched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch) {
    routeName = "Onboarding";
  } else {
    routeName = "Login";
  }

  if (!isReady) {
    return (
      <AppLoading
        startAsync={initializeOnboarding}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Stack.Navigator
      initialRouteName={routeName}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
