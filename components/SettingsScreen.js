import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  const settings = {
    theme: "Light Mode",
    notifications: "Disabled",
    language: "English",
    version: "App Version 43.0.0"
  };

  return (
    <View style={styles.container}>
      <Text>Theme: {settings.theme}</Text>
      <Text>Notifications: {settings.notifications}</Text>
      <Text>Language: {settings.language}</Text>
      <Text>{settings.version}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});