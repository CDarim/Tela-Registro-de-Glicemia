import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, Alert, Image } from 'react-native';
import styles from './RegistroGlicemiaStyles';

const Create = () => {
  const [glicemia, setGlicemia] = useState('');
  const [horario, setHorario] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSave = () => {
    // Lógica para salvar os dados de glicemia e horário
    Alert.alert('Registro Salvo', `Glicemia: ${glicemia}, Horário: ${horario}`);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://agecon.unl.edu/images/icons/natres-icon.png' }}
        style={styles.logo}
      />
      <Text style={styles.titulo}>Registro de Glicemia</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor da glicemia"
        onChangeText={setGlicemia}
        value={glicemia}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o horário"
        onChangeText={setHorario}
        value={horario}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Salvar Registro" onPress={handleSave} />
      )}
    </View>
  );
};


export default Create;
