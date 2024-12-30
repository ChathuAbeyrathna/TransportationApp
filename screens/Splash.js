import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Splash({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Register'); // Navigate to Register after the set time
    }, 10000); // 10 seconds
    return () => clearTimeout(timer); // Clear timeout on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Effortless transportation solutions, guiding you to your destination with ease!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00274D',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 500, // Circular shape
    borderWidth: 2, // Optional: Border around the logo
    borderColor: '#FFFFFF', // Optional: Border color
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16, // Decreased font size
    textAlign: 'center', // Centered text
    paddingHorizontal: 20, // Optional: Padding to prevent text from touching the edges
    marginTop: 10, // Optional: Margin for spacing between logo and tagline
  },
});
