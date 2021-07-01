import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

import SafeArea from "../styles/SafeArea";
import {
  CameraInsideContainer,
  CircleBorder,
  CircleButton,
} from "../styles/CameraStyles";

const flex = { flex: 1 };

const CameraScreen = ({ navigation }) => {
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      if (status !== "granted") {
        alert(
          "We need permissions to use your camera roll if you'd like to include a photo."
        );
      }
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync({ aspect: [4, 3] });
      navigation.navigate("AddPost", { image: photo.uri });
    }
  };

  const handleType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  return (
    <SafeArea>
      <Camera
        style={flex}
        type={type}
        ref={(ref) => {
          setCameraRef(ref);
        }}
      >
        <CameraInsideContainer>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={35} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={takePhoto}>
            <CircleBorder>
              <CircleButton />
            </CircleBorder>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleType}>
            <Ionicons name="camera-reverse-outline" size={35} color="white" />
          </TouchableOpacity>
        </CameraInsideContainer>
      </Camera>
    </SafeArea>
  );
};

export default CameraScreen;
