import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {
  useFonts,
  Roboto_900Black,
  Inter_900Black,
  // OpenSans_500Medium_Italic,
} from '@expo-google-fonts/dev';
import AppLoading from 'expo-app-loading';



export default function App() {
  const onPress = () => {
    alert("Enviado")
  }

  let [fontsLoaded] = useFonts({
    Roboto_900Black,
    Inter_900Black,
    OpenSans_500Medium_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
          }}
        />
        <Text style={styles.title} >Login</Text>

        <TextInput
          style={styles.input}
          placeholder='Email'
          placeholderTextColor="white"
        />

        <TextInput
          style={styles.input}
          placeholder='Senha'
          placeholderTextColor="white"
        />


        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        ><Text style={styles.titlebtn}>Entrar</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171836',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputlabel: {
    width: '100%',
    alignItems: 'center'
  },
  title: {
    color: "white",
    fontSize: 30,
    textTransform: 'uppercase',
    fontFamily: 'Roboto_900Black'
  },
  label: {
    color: 'white',
  },
  titlebtn: {
    color: "white",
    fontSize: 17,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginBottom: 30
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    borderColor: 'white',
    color: "white"
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#12184B',
    padding: 10,
    marginTop: 28,
    width: '90%',
    height: 40
  },
});
