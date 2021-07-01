import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PostScreen from "../screens/PostScreen";
import CameraScreen from "../screens/CameraScreen";

const Stack = createStackNavigator();

const PostNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AddPost"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AddPost" component={PostScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
};

export default PostNavigator;
