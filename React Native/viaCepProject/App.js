import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/dev';
import { Header } from './src/components/Header';
import { ContainerApp } from './style';
import { Home } from './screens/Home';


export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <ContainerApp>
        <StatusBar translucent backgroundColor='transparent' barStyle='light'/>
        <Header />
        <Home/>
      </ContainerApp>
    );
  }
}