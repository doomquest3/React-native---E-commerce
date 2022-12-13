import {ThemeProvider} from "styled-components"
import {Login} from './src/screens/User/Login';

import theme from "./src/globals/styles/theme"
import { ItemPedido } from "./src/components/CardPedido";
import { Register } from "./src/screens/User/Register";
import { ProductsScreen } from "./src/screens/Product/ProductsScreen";

import { AppRoutes } from "./src/routes/routes";

import {NavigationContainer} from "@react-navigation/native";
import { View, StyleSheet } from "react-native";


export default function App() {
  return ( 
  <ThemeProvider theme={theme}>
    <NavigationContainer>
      <AppRoutes/>
    </NavigationContainer>
  </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
})