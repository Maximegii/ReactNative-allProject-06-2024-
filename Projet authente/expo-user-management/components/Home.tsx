import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { supabase } from './../lib/supabase';

export default function Pizzas() {
  const [pizzas, setPizzas] = useState([]);
  

  useEffect(() => {

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
    fetchPizzas();
}, []);

  return (
      <FlatList
        data={pizzas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text >{item.nom}</Text>
          </TouchableOpacity>
        )}
        />
        
      
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
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
