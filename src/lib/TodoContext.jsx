import { createContext, useReducer, useContext } from "react";

// 1) Create a context to store and share state across multiple components
const TodoContext = createContext();

// 2) Define a provider component <TodoProvider> to wrap around child components
// This ensures that the state and functions related to todos are accessible in all nested components
// The child components ({children}) include Add, TodoList, and TodoItem
// This provider will be wrapped around the application in main.jsx

const TodoProvider = ({children}) => {

    // 3) Define the initial state containing an empty array for todos
    const initialState = {
        todos:[]
    };

     // 4) Define a reducer function to manage state changes based on dispatched actions
    // This function handles different actions that modify the state
    const todoReducer = (state,action) => {
        switch(action.type){

            case 'ADD_TODO':

             // Spread the existing state and update the todos array with the new item from action.payload
               
            return {
                ...state,
                // action.payload = { id, name }
                todos:[...state.todos, action.payload]
            }

            case 'REMOVE_TODO':
                // Filter out the todo item that matches the provided id in action.payload
                
            return {
                ... state, 
                todos: state.todos.filter(todo => todo.id != action.payload)

            }
            // For retrieving the current state (default case), return the existing state
          
            default:
            return state

        }
    }

      // 5) Use the useReducer hook to manage state and dispatch actions
    // This integrates the initial state and reducer function, making them available to all components within <TodoContext.Provider>
  
    const [state,dispatch] = useReducer(todoReducer,initialState);
    return (
        <TodoContext.Provider value={{state,dispatch}}>
            {children}
        </TodoContext.Provider>
    )

};

// 6) Create a custom hook useTodo to provide access to the context
// It ensures that the hook is only used within a component wrapped by <TodoProvider>

const useTodo = () => {
    const context = useContext(TodoContext);
    if (!context){
        throw new Error('useTodo needs to be used within a TodoContext Provider')
    }
    return context
}

export {TodoProvider, useTodo}