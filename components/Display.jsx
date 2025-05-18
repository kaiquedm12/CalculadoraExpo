import React from 'react';
import { StyleSheet } from 'react-native';
import { Surface, Text } from 'react-native-paper';

const Display = ({ value }) => {
  return (
    <Surface style={styles.display}>
      <Text style={styles.displayText}>{value}</Text>
    </Surface>
  );
};

const styles = StyleSheet.create({
  display: {
    padding: 30,
    marginVertical: 20,
    elevation: 4,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#1976D2',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  displayText: {
    fontSize: 52,
    textAlign: 'right',
    color: '#1976D2',
    fontWeight: '600',
  },
});

export default Display; 