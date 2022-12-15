import React from "react";

import { View, Text, StyleSheet } from "react-native";

import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import { ProductsScreen } from "../screens/Product/ProductsScreen";

import { SellerScreen } from "../screens/User/Sellers/SellerScreen";
import { CategoryScreen } from "../screens/Category/CategoryScreen";



const {Navigator, Screen} = createMaterialTopTabNavigator();

export function AppRoutes() {
    return (
        <Navigator>
            <Screen name="Produto" component={ProductsScreen}/>
            <Screen name="Categoria" component={CategoryScreen}/>
            <Screen name="Vendedor" component={SellerScreen}/>
            
        </Navigator>
    );
}

const styles = StyleSheet.create({
    container:{
        
    }
});