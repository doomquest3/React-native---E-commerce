import React from "react";
import { View, Text, StyleSheet } from "react-native";



export function CategoryScreen(){
    return(
        <View style={styles.container}>
            <Text>Tela de categoria</Text>
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