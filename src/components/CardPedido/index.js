import React from "react";

import {View, TextInput, StyleSheet} from "react-native";
import Responsive from 'react-native-lightweight-responsive';

import theme from "../../globals/styles/theme";


const itemPedido = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <text>Pedido #1232132 | Data: dd/mm/aaaa</text>
                <text>Vendedor: Qualquer nome</text>
                <text>Valor: R$9,99</text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: flex,
        flexDirection: column
    },
    card:{
        display: flex,
        flexDirection: column,
        backgroundColor: "#42a5f5",
        color: "#FFFFFF",
        borderBottomColor: "##DEE2E6"
    }

    })

export{itemPedido}