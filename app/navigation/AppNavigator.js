import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../config/theme/colors";
import Spacer from "../styles/Spacer";
import HomeScreen from "../screens/HomeScreen";
import PostNavigator from "./PostNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";
import NotificationScreen from "../screens/NotificationScreen";

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
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Post" component={PostNavigator} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
