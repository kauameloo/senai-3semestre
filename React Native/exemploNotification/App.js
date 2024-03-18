import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// importar recursos do expo-notification
import * as Notifications from "expo-notifications";

// solicita permissões de notificação ao iniciar o app
Notifications.requestPermissionsAsync();
Notifications.setNotificationHandler({
  // define como as notificações devem ser tratadas quando recebidas
  handleNotification: async () => ({
    shouldShowAlert: true, // Mostra um alerta no dispositivo quando a notificação for recebida
    shouldPlaySound: true, // Toca um som quando a notificação for recebida
    shouldSetBadge: false, // Define se deve ou não mostrar um badge na barra de tarefas com a quantidade de notificações pendentes
  }),
});

export default function App() {
  // função para lidar com uma chamada de notificação

  const handleCallNotification = async () => {
    // obtem o status da permissão
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== "granted") {
      alert("Você não deixou as notificações ativas");
      return;
    }

    //Agenda uma notificação
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bem vindo ao SENAI",
        body: "O seu novo contato está disponível",
        sound: "default",
        vibrate: [0, 250, 250, 250], // Adiciona uma vibração à notificação
      },
      trigger: null, // dispara imediatamente
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleCallNotification}>
        <Text style={styles.text}>Clique aqui!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },
});
