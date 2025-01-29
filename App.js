import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setImc] = useState(null);

  const calculateIMC = () => {
    const weightNumber = parseFloat(weight);
    const heightNumber = parseFloat(height);

    if (isNaN(weightNumber) || isNaN(heightNumber) || heightNumber === 0) {
      Alert.alert('Erro', 'Por favor, insira valores válidos para peso e altura.');
      return;
    }

    const heightInMeters = heightNumber / 100; // Convertendo altura de cm para m
    const imcValue = (weightNumber / (heightInMeters * heightInMeters)).toFixed(2);
    setImc(imcValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      
      <Button title="Calcular IMC" onPress={calculateIMC} />
      
      {imc && (
        <Text style={styles.result}>
          Seu IMC é: {imc}
          {'\n'}
          {imc < 18.5
            ? 'Abaixo do peso'
            : imc < 24.9
            ? 'Peso normal'
            : imc < 29.9
            ? 'Sobrepeso'
            : 'Obesidade'}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});