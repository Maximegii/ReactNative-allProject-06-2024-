import { View, Text, StyleSheet, Image,  } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Bienvenue sur</Text>
      <Image 
      style={styles.img}
      source={require('./../../assets/splash.png')} />
      <Text>Bienvenue sur sauver des vies, l’association humanitaire qui œuvre pour un monde meilleur. Depuis notre création en 2009, nous rassemblons des bénévoles dévoués qui souhaitent donner de leur temps et de leur énergie pour aider les plus démunis. Nous croyons que les défis de notre société nécessitent une réflexion et une action concertées. C’est pourquoi nous encourageons chaque individu, homme ou femme, jeune ou moins jeune, à prendre en charge son destin et à contribuer à la construction d’un monde équilibré et solidaire. Car nous sommes convaincus que sauver une vie, c’est sauver l’humanité toute entière…</Text>

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
