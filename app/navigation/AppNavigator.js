import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import PostScreen from "../screens/PostScreen";
import { colors } from "../config/theme/colors";
import Spacer from "../styles/Spacer";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Feed: "home-outline",
  Messages: "chatbox-ellipses-outline",
  Post: "ios-add-circle",
  Notification: "notifications-outline",
  Profile: "person-outline",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  const isAddPost = route.name === "Post";
  return {
    tabBarIcon: ({ size, color }) => (
      <Spacer mb={isAddPost && 10}>
        <Ionicons
          name={iconName}
          size={isAddPost ? 48 : size}
          color={isAddPost ? colors.primary : color}
        />
      </Spacer>
    ),
  };
};

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: colors.primary,
        safeAreaInsets: { bottom: 5 },
      }}
    >
      <Tab.Screen name="Feed" component={HomeScreen} />
      <Tab.Screen name="Messages" component={HomeScreen} />
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Notification" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
