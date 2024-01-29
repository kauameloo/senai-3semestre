import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  // hook de state
  const [count, setCount] = useState(0);

  // função para incrementar
  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    console.warn(`Contador atualizado ${count}`)
  }, [count])
  return (
    <View style={styles.container}>
      <Text>Contador: {count}</Text>
      <TouchableOpacity style={styles.incrementButton} onPress={increment}>
        <Text style={styles.title}>Incrementar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.decrementButton} onPress={decrement}>
        <Text style={styles.title}>Decrementar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  incrementButton: {
    justifyContent:'center',
    alignItems: 'center',
    width: 90,
    height: 35,
    backgroundColor: '#66ff66',
    borderRadius: 5,
    marginTop: 20,
  },
  decrementButton: {
    justifyContent:'center',
    alignItems: 'center',
    width: 90,
    height: 35,
    backgroundColor: '#ff6666',
    borderRadius: 5,
    marginTop: 10,
  },
  title: {
    color: 'white'
  }
});
