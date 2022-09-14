import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Background } from './src/components/Background';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from "@expo-google-fonts/inter"

import {Home} from "./src/screens/Home"

export default function App() {
  const [fontsLoaded] = useFonts({
    useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
  })
  
  return (
    <Background>
      <StatusBar 
        barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      {fontsLoaded}
    </Background>
  );
}
