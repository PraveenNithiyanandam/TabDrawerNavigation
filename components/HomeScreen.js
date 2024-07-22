import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const homeInfo = {
    welcome: "Sample navigation Home Screen",
  };

  return (
    <View style={styles.container}>
      <Text>{homeInfo.welcome}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});