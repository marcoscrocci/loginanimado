import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar />
                <Routes />
            </SafeAreaView>
        </NavigationContainer>
    );
}
