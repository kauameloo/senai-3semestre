import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/Person';

export default function App() {
  return (
    <SafeAreaView>
      <Person name={'Kauã'} age={18}/>
      <Person name={'Carlos'} age={37}/>
      <Person name={'Edu'} age={38}/>
      <StatusBar style="auto" />
      
    </SafeAreaView>
  );
}
