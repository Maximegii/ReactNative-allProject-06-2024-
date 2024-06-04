import { View, Text, StyleSheet, Image,  } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Bienvenue sur</Text>
      <Image 
      style={styles.img}
      source={require('./../../assets/splash.png')} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",

  },

  text: {
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  img: {
   width: 360,
   height: 100, 
   
  },
});
