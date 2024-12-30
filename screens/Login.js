import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      alert('Both fields are required!');
      return;
    }
    navigation.navigate('Home', { username });
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo2.png')} style={styles.logo} />
      <Text style={styles.title}>Login To Your Account</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.signupLink}>
        <Text>Don't have an account? <Text style={styles.signupText}>Sign Up</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { borderBottomWidth: 1, marginBottom: 15, padding: 10 },
  button: {
    backgroundColor: '#001f3f',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  signupLink: { marginTop: 20, alignItems: 'center' },
  signupText: { fontWeight: 'bold' },
});

export default Login;
