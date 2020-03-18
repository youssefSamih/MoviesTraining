import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { TopRatedScreen } from "./src/screens";

const LoadFonts = async () => {
  return await Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    'show_sf': require('./assets/fonts/sf-pro-display-bold.ttf'),
    ...Ionicons.font,
  });
}

const App = () => {
  const [isReady, setIsReady] = useState(true);

  if (isReady) {
    return (
      <AppLoading 
        startAsync={LoadFonts}
        onError={error => console.warn(error)}
        onFinish={setIsReady(false)}
      />
    );
  }
  return (
    <TopRatedScreen />
  );
}

export default App;