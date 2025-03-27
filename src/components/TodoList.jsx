import React from 'react'
import TodoItem from './TodoItem'
import { useTodo } from '../lib/TodoContext'

const TodoList = () => {
  
  const {state}  = useTodo()

  return (
    <div>
        <h2>List To Do</h2>
        {
            state.todos.map(val=> 
                <TodoItem key={val.id} item={val}/>
            )
        }
    </div>
  )
}

export default TodoList