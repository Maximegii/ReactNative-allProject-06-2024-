import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import FetchPizzas from '../../components/Home'

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choisir votre plat</Text>
      <FetchPizzas/>
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
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
