import React from 'react'
import {useTodo} from '../lib/TodoContext';

const TodoItem = ({item}) => {
    const {dispatch} = useTodo()

    const removeItem = () => {
        dispatch({
            type:'REMOVE_TODO',
            payload:item.id
        })
    }
   return (
    <div>
        <p>{item.name} <button onClick={removeItem}>Remove</button></p>
    </div>
  )
}

export default TodoItem