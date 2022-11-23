import React from "react";

import {StyleSheet, TextInput, View} from "react-native";
import Responsive from 'react-native-lightweight-responsive';

import theme from "../../globals/styles/theme";

import {itemPedido} from "/src/components/CardPedido/index";

import { FontAwesome5 } from '@expo/vector-icons'; 

const Pedidos = () =>{
    return(
        <View>
            <nav><FontAwesomeIcon icon="fas fa-caret-left" /></nav>
            <itemPedido></itemPedido>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: flex,
    }

    })

export{Pedidos}