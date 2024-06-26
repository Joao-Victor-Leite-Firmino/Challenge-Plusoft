import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

interface LoginProps {
  onSubmit: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onSubmit(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem vindo de volta!</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontFamily: 'arial',
    fontSize: 30,
    marginTop: '50%',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  button: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});

export default Login;