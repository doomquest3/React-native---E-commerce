import {ThemeProvider} from "styled-components"
import {Login} from './src/screens/User/Login';

import theme from "./src/globals/styles/theme"
import { ItemPedido } from "./src/components/CardPedido";
import { Register } from "./src/screens/User/Register";
import { ProductsScreen } from "./src/screens/Product/ProductsScreen";

import { AppRoutes } from "./src/routes/routes";

import {NavigationContainer} from "@react-navigation/native";
import { View, StyleSheet, Text, SafeAreaView} from "react-native";
import { AuthProvider } from "./src/Context/auth";
import { StatusBar } from "expo-status-bar";


export default function App() {
  return ( 
  <SafeAreaView style={styles.safeArea}>
    <StatusBar barStyle="dark-content"/>
    <ThemeProvider theme={theme}>
      <NavigationContainer>
      <AuthProvider>

        <AppRoutes/>

      </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  </SafeAreaView>
  
  )
}

const styles = StyleSheet.create({
  container:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  safeArea:{
    flex: 1,
    overflow: "hidden"
  }
})