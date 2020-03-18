import React from 'react';
import { ImageBackground, StyleSheet, Dimensions } from "react-native";


const backgroundFilter = ({ children, source }) => {
  return (
    <ImageBackground source={source} style={styles.backgroundStyle} blurRadius={2} >
        {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    height: Dimensions.get("screen").height,
    justifyContent: "center",
    alignContent: "center",
  },
})

export default backgroundFilter;
