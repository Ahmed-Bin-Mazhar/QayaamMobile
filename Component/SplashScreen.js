import React from "react";
import { ActivityIndicator, View } from "react-native";

const SplashScreen = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#06bcee" }}
    >
      <ActivityIndicator size="large" color="#000000" />
    </View>
  );
};

export default SplashScreen;
