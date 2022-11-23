import React, { useState } from "react"
import { View, Text, Button, ScrollView, StyleSheet, TextInput } from "react-native"
import { Tarefa } from "./Tarefa";
import { Tamanho } from "./Tamanho";
const ListadeTarefas = () => {
    const [titulo, setTitle] = useState("Minha lista de tarefas");
    const [text, setText] = useState();
    const [list, setList] = useState(["Olá, mundo"]);

    const addItem= () =>{
        const updateList = list;
        updateList.push(text);
        setList(updateList);
        setText("");
    }

    /*Deletar*/

    const handleDeleteItem = (index) =>{
        const updateList = list.filter((tarefas)=>tarefas!==index)
        setList(updateList)
    }

    return (
        <View style={{ width: "80%", marginBottom: 60 }}>
            <Text style={[styles.align, styles.font]}>{titulo}</Text>
            
            <ScrollView>

            {list.map((item, index) => (
                    <Tarefa key={index} item={item} index={index} delete={handleDeleteItem}  />
                ))}

            </ScrollView>
            <View>
                <TextInput style={styles.input}
                value={text} 
                onChangeText={(text) => setText(text)}/>

            </View>

            <Button title="Add Item" onPress={addItem}/>

            <Tamanho/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    align: {
        alignSelf: "center",
    },
    font: {
        fontSize: 20,
        fontWeight: "bold",
    },
    input: {
     
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 10,
        marginTop:10,
        padding: 10,
    },
});

export { ListadeTarefas }