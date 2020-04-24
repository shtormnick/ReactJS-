import React, {useEffect} from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import Loader from './Loader'
import Modal from './Modal/Modal'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from './Pages/Home'
import {About} from './Pages/About'
import { Navbar } from './Components/Navbar'
import { Alert } from './Components/Alert'


const AddTodo = React.lazy(() => new Promise(resolve =>{
  setTimeout(() => {
    resolve(import('./Todo/AddTodo'))
  },300)
}))

function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() =>{
          setTodos(todos)
          setLoading(false)
        }, 2000)
      })
  }, [])


  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }


  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    )
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Context.Provider value={{removeTodo}}>
        <div className="container pt-4">
          <Alert />
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/about'} component={About} />
          </Switch>
          <div className="wrapper">
            <Modal />
            <React.Suspense fallback={<p>Loading....</p>}>
              <AddTodo  onCreate={addTodo} />
            </React.Suspense>
            {loading && <Loader/>}
            {todos.length ? (
              <TodoList todos={todos} onToggle={toggleTodo} /> 
            ) : loading ? null : (
              <p>No todos!</p>
            )}
          </div>
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
