import { Tabs } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Accueil",
        tabBarIcon: () => (
          <Image source={require('./../../assets/home.png')} style={{ width: 20, height: 20}} />
        )
       }}/>
      <Tabs.Screen name="dons" options={{ title: "Dons",
       tabBarIcon: () => (
          <Image source={require('./../../assets/dons.png')} style={{ width: 20, height: 20}} />
        )
       }} />
       <Tabs.Screen name="mentions" options={{ title: "Mentions L",
       tabBarIcon: () => (
          <Image source={require('./../../assets/justice.png')} style={{ width: 20, height: 20}} />
        )
       }} />
       <Tabs.Screen name="baction" options={{ title: "Bonne actions",
       tabBarIcon: () => (
          <Image source={require('./../../assets/justice.png')} style={{ width: 20, height: 20}} />
        )
       }} />
       
    </Tabs>
  );
}
