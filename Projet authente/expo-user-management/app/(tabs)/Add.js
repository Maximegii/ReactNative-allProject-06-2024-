import { Text, ScrollView, StyleSheet } from "react-native";
import AddPizza from "../../components/AddPizzas";


export default function MentionsScreen() {
  return (
    <ScrollView style={styles.container}>
      
      <AddPizza/>
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "start",
    marginLeft: 5,
    // alignItems: "start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#900C3F",
  },
  title2: {
    fontSize: 21,
    fontWeight: "400",
    color: "#E05A90",
  }
});
