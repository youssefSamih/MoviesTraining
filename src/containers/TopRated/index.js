import React from 'react';
// import {  } from "@expo/vector-icons";
import { Text, StyleSheet } from 'react-native';

import { BackgroundFilter } from "../../components";
import { Container } from 'native-base';

const TopRated = ({ source, children }) => {
  return (
    <BackgroundFilter source={source}>
      <Text style={styles.FontTitle}>Hello</Text>
      {/* <Container>

      </Container> */}
    </BackgroundFilter>
  );
}

const styles = StyleSheet.create({
  FontTitle: {
    fontFamily: 'show_sf'
  }
})

export default TopRated;
