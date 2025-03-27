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

            return

            case 'REMOVE_TODO':
                
            return

            return state

        }
    }
    

    // Indentify the actions used from each of the components

};

export {TodoProvider}