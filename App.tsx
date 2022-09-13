import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Background } from './src/components/Background';

export default function App() {
  return (
    <Background>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
