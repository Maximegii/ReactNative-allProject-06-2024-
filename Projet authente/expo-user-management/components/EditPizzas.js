import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { supabase } from '../lib/supabase';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function EditPizza() {
  const navigation = useNavigation();
  const route = useRoute();
  const { pizza } = route.params;

  const [nom, setNom] = useState(pizza.nom);
  const [description, setDescription] = useState(pizza.description);
  const [prix, setPrice] = useState(pizza.prix);

  const handleUpdatePizza = async () => {
    try {
      const { error } = await supabase
        .from('pizzas')
        .update({ nom, description, prix })
        .eq('id', pizza.id);

      if (error) {
        console.error('Supabase error:', error.message);
        Alert.alert('Erreur', 'Erreur lors de la mise à jour de la pizza');
        return;
      }

      Alert.alert('Succès', 'Pizza mise à jour avec succès');
      navigation.goBack();
    } catch (error) {
      console.error('Error updating pizza:', error);
      Alert.alert('Erreur', 'Erreur lors de la mise à jour de la pizza');
    }
  };

  return (
    <View style={styles.container}>
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
        value={prix.toString()}
        onChangeText={(text) => setPrice(Number(text))}
        keyboardType="numeric"
      />
      <Button title="Mettre à jour" onPress={handleUpdatePizza} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
