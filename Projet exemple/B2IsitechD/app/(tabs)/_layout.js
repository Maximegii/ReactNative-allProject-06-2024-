import { Tabs } from "expo-router";
import { View, Text } from "react-native";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="Home" option={{title: "Home"}} />
            <Tabs.Screen name="Settings" option={{title: "Settings"}}/>
        </Tabs>
    )
}