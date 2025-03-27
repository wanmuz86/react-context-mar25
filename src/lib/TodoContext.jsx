import { createContext, useReducer, useContext } from "react";

// 1) Is the group of components where the state/variable declared will be shared
const TodoContext = createContext();

// We will create a component wrapper <TodoProvider> that will group all the components
// The components = {children} = Add, TodoList, TodoItem
// We will wrap this component in main.jsx

const TodoProvider = ({children}) => {

    // 2) Add an initialized state of the sharabled components, todos
    const initialState = {
        todos:[]
    };

    // 3) Create reducer, and define all the actions happen on the State 
    // And the payload passed by the UI

    const todoReducer = (state,action) => {
        switch(action.type){

            case 'ADD_TODO':

            // object spread operator .. Update the value of state with the new todos
            return {
                ...state,
                // existing todos + new Item = action.payload = {id:, name:}
                todos:[...state.todos, action.payload]
            }

            case 'REMOVE_TODO':
                // object spread operator .. Update the value of state with updated todos
            return {
                ... state, 
                todos: todos.filter.todos.filter(todo => todo.id != action.payload)

            }
            // the others, eg: for List/Get -> We return the state/todos

            default:
            return state

        }
    }
    

    // Indentify the actions used from each of the components

};

export {TodoProvider}