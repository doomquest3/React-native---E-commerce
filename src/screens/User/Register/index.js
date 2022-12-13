import React from "react";

import {View, Text, StyleSheet, TextInput} from "react-native";


const Register = (props)=>{
return (
    <View style={styles.container}>
        <Text style={styles.text} >Criar Conta / Editar dados</Text>
        <View>
            <Text>Nome</Text>
            <TextInput style={styles.input}></TextInput>
        </View>
    </View>
)
    
}
    const styles = StyleSheet.create({
        container:{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        },
        text:{
            fontSize: 20,
            fontWeight: "bold"
        },
        input:{
            borderWidth: 1.5,
            borderColor: 'black',
            borderRadius: 8,
            textAlign: "center"
        }
    }
)
export {Register};