import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from './components/login';


const App: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <h1 style={styles.h1}>Bem vindo de volta!</h1>
      <Login onSubmit={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#030097',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    color: '#fff',
    fontFamily: 'arial',
    fontSize: 30,
    marginTop: '50%',
  },
});

export default App;
