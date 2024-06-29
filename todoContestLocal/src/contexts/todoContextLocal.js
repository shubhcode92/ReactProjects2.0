import { createContext, useContext } from "react";

export const TodoContextLocal = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContextLocal);
}

export const TodoProvider = TodoContextLocal.Provider;