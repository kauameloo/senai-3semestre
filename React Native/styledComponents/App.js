import { Image, SafeAreaView, StatusBar } from 'react-native';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container } from './src/components/Container/Container';
import { Title, TitleBtnDecrement, TitleBtnIncrement } from './src/components/Title/Title';
import { BtnDecrement, BtnIncrement } from './src/components/Buttons/Button';
import { ImageCount } from './src/components/Images/Images';

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
    <Container>

      <ImageCount
        source={{
          uri: 'https://png.pngtree.com/png-clipart/20231018/original/pngtree-smart-accountant-transparent-background-png-image_13354545.png',
        }}
      />
      {/* Title */}
      <Title>Contador: {count}</Title>

      {/* BtnIncrement */}
      <BtnIncrement onPress={increment}>
        {/* TitleBtnIncrement */}
        <TitleBtnIncrement>Incrementar</TitleBtnIncrement>
      </BtnIncrement>

      {/* BtnDecrement */}
      <BtnDecrement onPress={decrement}>
        {/* TitleBtnDecrement */}
        <TitleBtnDecrement>Decrementar</TitleBtnDecrement>
      </BtnDecrement>
      <StatusBar style="auto" />
    </Container>
  );
}