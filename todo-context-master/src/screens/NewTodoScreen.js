import { useState, useContext } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from './../style/colorsheet/colors';
import { TodoContext } from './../contexts/TodoContext';

const NewTodoScreen = () => {

    console.log("NewTodo Screen")

    const [todo, setTodo] = useState("");
    const { addNewTodo } = useContext(TodoContext);
    
    return (
        <View style={{ flex: 1 }}>
            <View>
                <TextInput onChangeText={text => setTodo(text)} value={todo} placeholder="Enter a todo..." style={styles.textInput} />
                <TouchableOpacity onPress={() => addNewTodo(todo)} style={styles.button}>
                    <Text style={styles.buttonTitle}>Add Todo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NewTodoScreen

const styles = StyleSheet.create({
    textInput: {
        marginTop: 10,
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 10,
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: colors.main,
        width: 100,
        height: 40,
        alignSelf: "flex-end",
        margin: 10,
        borderRadius: 20,
        justifyContent: "center"
    },
    buttonTitle: {
        color: colors.light,
        fontSize: 16,
        textAlign: 'center'
    }
})