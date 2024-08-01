// App.tsx
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const Ejercicio1: React.FC = () => {
  
  const [pares, setPares] = useState<number[]>([]);
  const [impares, setImpares] = useState<number[]>([]);
  const [mostrarPares, setMostrarPares] = useState(false);
  const [mostrarImpares, setMostrarImpares] = useState(false);

  
  const clasificarNumeros = () => {
    const pares = numeros.filter(numero => numero % 2 === 0);
    const impares = numeros.filter(numero => numero % 2 !== 0);
    setPares(pares);
    setImpares(impares);
  };

  
  React.useEffect(() => {
    clasificarNumeros();
  }, []);

  return (
    <View style={styles.container}>
        <Text>BIENVENIDOS</Text>
      <Text style={styles.title}>Números:</Text>
      <Text>{numeros.join(', ')}</Text>
      <Button title="Mostrar pares" onPress={() => setMostrarPares(!mostrarPares)} />
      <Button title="Mostrar Impares" onPress={() => setMostrarImpares(!mostrarImpares)} />
      {mostrarPares && (
        <View>
          <Text style={styles.title}>Pares:</Text>
          <Text>{pares.join(', ')}</Text>
        </View>
      )}
      {mostrarImpares && (
        <View>
          <Text style={styles.title}>Impares:</Text>
          <Text>{impares.join(', ')}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});

export default Ejercicio1;


