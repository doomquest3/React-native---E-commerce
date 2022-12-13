import React from "react";

import {View, TextInput, StyleSheet,Text} from "react-native";
import Responsive from 'react-native-lightweight-responsive';

import Theme from "../../globals/styles/theme";


const ItemPedido = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.texto_estilo}>Pedido #1232132 | Data: dd/mm/aaaa</Text>
                <Text style={styles.texto}>Vendedor: Qualquer nome</Text>
                <Text style={styles.texto_estilo}>Valor: R$9,99</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        top: 25
    },
    card:{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#42a5f5",
        color: "#FFFFFF",
        borderBottomColor: "##DEE2E6",
        textAlign: "center"
    },
    texto_estilo:{
        fontSize: 16
    },
    texto:{
        marginTop: "5%",
        marginBottom: "5%",
        fontSize: 16
    }

    })

export{ItemPedido}