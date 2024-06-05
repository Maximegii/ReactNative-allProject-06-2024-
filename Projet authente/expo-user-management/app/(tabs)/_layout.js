import { Tabs } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="Home" options={{ title: "Menu",
        tabBarIcon: () => (
          <Image source={require('./../../assets/home.png')} style={{ width: 20, height: 20}} />
        )
       }}/>
       <Tabs.Screen name="panier" options={{ title: "Panier",
       tabBarIcon: () => (
          <Image source={require('./../../assets/panier.png')} style={{ width: 20, height: 20}} />
        )
       }} />
       
       
    </Tabs>
  );
}
