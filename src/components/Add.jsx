import React,{useState} from 'react'
import { useTodo } from '../lib/TodoContext'

const Add = () => {
    const [todoItem, setTodoItem] = useState('')
    const {dispatch} = useTodo() // get dispatch from useTodo

    const addTodo = () =>{
        dispatch({type:'ADD_TODO',
        payload: {id:Date.now(), name:todoItem}})
        setTodoItem('')
    }
  return (
    <div>
        <h2>Add New Todo</h2>
        <input type="text" placeholder='Add item to add' 
        value={todoItem} onChange={(e)=> setTodoItem(e.target.value)}/>
        <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default Add