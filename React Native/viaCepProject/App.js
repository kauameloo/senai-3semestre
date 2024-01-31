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


export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ContainerApp>
        <StatusBar translucent backgroundColor='transparent'/>
        <Header />
      </ContainerApp>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTest: {
    fontFamily: 'Roboto_700Bold',
  }
});
