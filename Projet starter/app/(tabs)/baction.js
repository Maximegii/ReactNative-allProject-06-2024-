import { Text, View, StyleSheet } from "react-native";


export default function DonsScreen() {
  return (
    <View style={styles.container}>
      <Text>Faites un don à notre association pour soutenir toutes nos actions dans le monde</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
