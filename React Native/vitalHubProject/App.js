import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  useFonts,
  Montserrat_700Bold,
  MontserratAlternates_700Bold,
  Quicksand_600SemiBold,
  Quicksand_500Medium,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium,
} from '@expo-google-fonts/dev';
import { Botao } from './src/components/Button/style';
import { TitleBtn, TitleBtnGoogle } from './src/components/Title/style';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Navegacao } from './screens/Navegacao';
import { Login } from './screens/Login';
import { ForgotPassword } from './screens/ForgotPassword';
import { VerifyEmail } from './screens/VerifyEmail';
import { ResetPassword } from './screens/ResetPassword';
import { CreateAccount } from './screens/CreateAccount';


const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Montserrat_700Bold,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    MontserratAlternates_700Bold,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (

      //Container - envolve toda as estrutura de navegação
      //Navigator - componente para a navegação
      //Telas - tela
      //name: nome da tela
      //component: componente que será chamado
      //options(title): título da tela
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Navegacao'
            component={Navegacao}
            options={{ title: 'Navegação' }}
          />
          <Stack.Screen
            name='Login'
            component={Login}
            options={{ title: 'Login' }}
          />
          <Stack.Screen
            name='ForgotPassword'
            component={ForgotPassword}
            options={{ title: 'ForgotPassword' }}
          />
          <Stack.Screen
            name='VerifyEmail'
            component={VerifyEmail}
            options={{ title: 'VerifyEmail' }}
          />
          <Stack.Screen
            name='ResetPassword'
            component={ResetPassword}
            options={{ title: 'ResetPassword' }}
          />
          <Stack.Screen
            name='CreateAccount'
            component={CreateAccount}
            options={{ title: 'CreateAccount' }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <BotaoGoogle>
      //     <TitleBtnGoogle>Entrar com google</TitleBtnGoogle>
      //   </BotaoGoogle>
      //   <StatusBar style="auto" />
      // </View>
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
});
