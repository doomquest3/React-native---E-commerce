import React from "react";
import { View, Text, StyleSheet } from "react-native";



export function SellerScreen(){
    
    return(
        <View style={styles.container}>
            <Text>Tela de vendas</Text>
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