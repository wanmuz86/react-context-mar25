
import './App.css'
import Add from './components/Add'
import TodoList from './components/TodoList'
import { TodoProvider } from './lib/TodoContext'
function App() {

  return (
    <main>
    <TodoProvider>
    <Add/>
    <hr/>
    <TodoList/>
    </TodoProvider>
    </main>
  )
}

export default App
