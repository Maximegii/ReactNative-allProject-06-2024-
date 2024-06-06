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
       <Tabs.Screen name="Add" options={{ title: "Ajouter",
       tabBarIcon: () => (
          <Image source={require('./../../assets/add.png')} style={{ width: 20, height: 20}} />
        )
       }} />
       
      
       
       
    </Tabs>
  );
}
