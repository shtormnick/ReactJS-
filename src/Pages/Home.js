import React, {Fragment, useEffect} from 'react'
import AddTodo from '../Todo/AddTodo'
import TodoList from '../Todo/TodoList'
import Context from '../context'
import Modal from '../Modal/Modal'
import Loader from '../Loader'


export const Home = () => {
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
  
    function removeTodo(id){
      setTodos(todos.filter(todo => todo.id !== id))
    }

  return (
      <Fragment>
        <Context.Provider value={{removeTodo}}>
          <Modal />
          <React.Suspense fallback={<p>Loading....</p>}>
            <AddTodo  onCreate={addTodo} />
          </React.Suspense>
          {loading && <Loader/>}
          <hr />
          {todos.length ? (
            <TodoList todos={todos} onToggle={toggleTodo} /> 
          ) : loading ? null : (
            <p>No todos!</p>
          )}
        </Context.Provider>
      </Fragment>
  )
}