import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

const ButtonPad = ({ onNumberPress, onOperationPress, onClear, onCalculate }) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.row}>
        <Button mode="contained" style={styles.button} onPress={onClear}>C</Button>
        <Button mode="contained" style={styles.button} onPress={() => onOperationPress('/')}>/</Button>
        <Button mode="contained" style={styles.button} onPress={() => onOperationPress('*')}>×</Button>
      </View>
      <View style={styles.row}>
        <Button mode="contained" style={styles.button} onPress={() => onNumberPress('7')}>7</Button>
        <Button mode="contained" style={styles.button} onPress={() => onNumberPress('8')}>8</Button>
        <Button mode="contained" style={styles.button} onPress={() => onNumberPress('9')}>9</Button>
        <Button mode="contained" style={styles.button} onPress={() => onOperationPress('-')}>-</Button>
      </View>
      <View style={styles.row}>
        <Button mode="contained" style={styles.button} onPress={() => onNumberPress('4')}>4</Button>
        <Button mode="contained" style={styles.button} onPress={() => onNumberPress('5')}>5</Button>
        <Button mode="contained" style={styles.button} onPress={() => onNumberPress('6')}>6</Button>
        <Button mode="contained" style={styles.button} onPress={() => onOperationPress('+')}>+</Button>
      </View>
      <View style={styles.row}>
        <Button mode="contained" style={styles.button} onPress={() => onNumberPress('1')}>1</Button>
        <Button mode="contained" style={styles.button} onPress={() => onNumberPress('2')}>2</Button>
        <Button mode="contained" style={styles.button} onPress={() => onNumberPress('3')}>3</Button>
        <Button mode="contained" style={[styles.button, styles.equalButton]} onPress={onCalculate}>=</Button>
      </View>
      <View style={styles.row}>
        <Button mode="contained" style={[styles.button, styles.zeroButton]} onPress={() => onNumberPress('0')}>0</Button>
        <Button mode="contained" style={styles.button} onPress={() => onNumberPress('.')}>.</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: '#1976D2',
    paddingVertical: 8,
  },
  equalButton: {
    backgroundColor: '#2196F3',
  },
  zeroButton: {
    flex: 2,
  },
});

export default ButtonPad; 