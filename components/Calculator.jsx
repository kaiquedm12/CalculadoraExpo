import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import Display from './Display';
import ButtonPad from './ButtonPad';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [firstNumber, setFirstNumber] = useState('');
  const [operation, setOperation] = useState(null);
  const [clearNext, setClearNext] = useState(false);

  const handleNumberPress = (num) => {
    if (clearNext) {
      setDisplay(num);
      setClearNext(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperationPress = (op) => {
    setFirstNumber(display);
    setOperation(op);
    setClearNext(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setFirstNumber('');
    setOperation(null);
    setClearNext(false);
  };

  const calculateResult = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(display);
    let result = 0;

    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setOperation(null);
    setClearNext(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator EXPO</Text>
      <View style={styles.displayContainer}>
        <Display value={display} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonPad
          onNumberPress={handleNumberPress}
          onOperationPress={handleOperationPress}
          onClear={handleClear}
          onCalculate={calculateResult}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1976D2',
    textAlign: 'center',
    marginVertical: 20,
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 4,
  },
});

export default Calculator; 