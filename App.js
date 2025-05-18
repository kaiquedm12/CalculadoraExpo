import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Calculator from './components/Calculator';

export default function App() {
  return (
    <PaperProvider>
      <StatusBar barStyle="light-content" />
      <Calculator />
    </PaperProvider>
  );
}
