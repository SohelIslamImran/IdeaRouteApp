import React from "react";
import { Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

import OnboardingButton from "../components/OnboardingButton";

const pages = [
  {
    backgroundColor: "#a6e4d0",
    image: <Image source={require("../assets/onboarding-img1.png")} />,
    title: "Connect to the World",
    subtitle: "A New Way To Connect With The World",
  },
  {
    backgroundColor: "#fdeb93",
    image: <Image source={require("../assets/onboarding-img2.png")} />,
    title: "Share Your Favorites",
    subtitle: "Share Your Thoughts With Similar Kind of People",
  },
  {
    backgroundColor: "#e9bcbe",
    image: <Image source={require("../assets/onboarding-img3.png")} />,
    title: "Become The Star",
    subtitle: "Let The Spot Light Capture You",
  },
];

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={OnboardingButton}
      NextButtonComponent={OnboardingButton}
      DoneButtonComponent={OnboardingButton}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={pages}
    />
  );
};

export default OnboardingScreen;
