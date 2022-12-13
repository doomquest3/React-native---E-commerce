import React from "react";
import { View, Text, StyleSheet } from "react-native";



export function ProductsScreen(){
    return(
        <View style={styles.container}>
            <Text>Tela de produtos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})