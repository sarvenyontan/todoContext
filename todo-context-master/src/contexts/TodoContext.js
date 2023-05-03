import { createContext, useState, useEffect } from "react";
import { clearAll, getAllKeys, getData, removeData, storeData } from "../library/helpers/asyncStorage";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

    const [todoList, setTodoList] = useState([]
        // [
        //     { todo: "ReactNative calis", id: 0 },
        //     { todo: "Kahve yap", id: 1 },
        //     { todo: "Alisverise cik", id: 2 },
        //     { todo: "Ramazan'i uyandir", id: 3 },
        //     { todo: "Utu yap", id: 4 }
        // ]
    )

    useEffect(() => {
        const getList = async () => {
            const _todoList = await getData("todoList");
            const keys = await getAllKeys();
            console.log(keys);
            setTodoList(_todoList)
        }

        getList();
    }, []);

    const addNewTodo = (todo) => {
        try {
            if (todoList) {
                storeData("todoList", [...todoList, { todo, id: Date.now() }])
                setTodoList([...todoList, { todo, id: Date.now() }])
            }
            else {
                storeData("todoList", [{ todo, id: Date.now() }])
                setTodoList([{ todo, id: Date.now() }])
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = (todoId) => {
        const filteredList = todoList.filter(todo => todo.id !== todoId)
        setTodoList(filteredList);
        storeData("todoList", filteredList);
    }

    const values = { todoList, addNewTodo, handleDelete }

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    )
}