import { FlatList, StyleSheet, View, Text } from 'react-native'
import { colors } from '../style/colorsheet/colors'
import { AntDesign } from '@expo/vector-icons';
import { useContext } from 'react'
import { TodoContext } from './../contexts/TodoContext';

const TodoList = () => {


    const { todoList, handleDelete } = useContext(TodoContext);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.todo}>
                <Text>{item.todo}</Text>
                <AntDesign onPress={() => handleDelete(item.id)} name="delete" size={16} color="darkred" style={{ padding: 5 }} />
            </View>
        )
    }


    return (
        <View>
            <FlatList
                data={todoList}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default TodoList

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        height: 40,
        borderColor: colors.main,
        borderWidth: 2,
        marginTop: 10,
        paddingLeft: 5,
        paddingRight: 8,
        borderRadius: 5,
        marginHorizontal: 5
    }
})