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
});

export default App;
