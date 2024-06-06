import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { supabase } from '../lib/supabase';

export default function AddPizza() {
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [prix, setPrix] = useState('');

  const handleAddPizza = async () => {
    if (!nom || !description || !prix) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('pizzas')
        .insert([{ nom, description, prix: parseFloat(prix) }]);

      if (error) {
        console.error('Supabase error:', error.message);
        Alert.alert('Erreur', 'Erreur lors de l\'ajout de la pizza');
        return;
      }

      Alert.alert('Succès', 'Pizza ajoutée avec succès');
      setNom('');
      setDescription('');
      setPrix('');
    } catch (error) {
      console.error('Error adding pizza:', error);
      Alert.alert('Erreur', 'Erreur lors de l\'ajout de la pizza');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter une nouvelle pizza</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={nom}
        onChangeText={setNom}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Prix"
        value={prix}
        onChangeText={setPrix}
        keyboardType="numeric"
      />
      <Button title="Ajouter" onPress={handleAddPizza} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
