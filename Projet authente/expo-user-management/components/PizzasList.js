import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button, Alert } from "react-native";
import { supabase } from '../lib/supabase';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

export default function Pizzas() {
  const [pizzas, setPizzas] = useState([]);
  const navigation = useNavigation();

  const fetchPizzas = async () => {
    const { data, error } = await supabase
      .from('pizzas')
      .select('*');

    if (error) {
      console.error('Supabase error:', error.message);
      throw error;
    }

    setPizzas(data);
  };

  const handleDeletePizza = async (id) => {
    try {
      const { error } = await supabase
        .from('pizzas')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Supabase error:', error.message);
        Alert.alert('Erreur', 'Erreur lors de la suppression de la pizza');
        return;
      }

      setPizzas((prevPizzas) => prevPizzas.filter(pizza => pizza.id !== id));
      Alert.alert('Succès', 'Pizza supprimée avec succès');
    } catch (error) {
      console.error('Error deleting pizza:', error);
      Alert.alert('Erreur', 'Erreur lors de la suppression de la pizza');
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchPizzas();
    }, [])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={pizzas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemContent}>
              <Text style={styles.title}>{item.nom}</Text>
              <Text>{item.description}</Text>
              <Text>{item.prix} €</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => navigation.navigate('Edit', { pizza: item })}
              >
                <Text style={styles.buttonText}>Modifier</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeletePizza(item.id)}
              >
                <Text style={styles.buttonText}>Supprimer</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemContent: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
