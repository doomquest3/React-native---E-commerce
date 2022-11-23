import React from "react";

import { View,Text } from "react-native";

const Tamanho = () =>{
    return(
        <View style={{flex:1,alignItems:"center" ,justifyContent:"center", backgroundColor:"black"}}>
            
            
            <View style={{width:100,height:50, backgroundColor: "red"}}></View>
            <View style={{width:100,height:50, backgroundColor: "blue"}}></View>
            <View style={{width:100,height:50, backgroundColor: "purple"}}></View>

            
        </View>
    )
}

export {Tamanho}