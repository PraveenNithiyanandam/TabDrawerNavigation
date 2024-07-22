import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  const user = {
    name: "Praveen",
    email: "praveen.nithiyanandam@gmail.com",
    bio: "techie",
  };

  return (
    <View style={styles.container}>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>{user.bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  avatar: {
    width: 100,
    height: 100,
  },
});