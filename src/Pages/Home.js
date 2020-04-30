import React, {Fragment, useEffect, useContext} from 'react'
import AddTodo from '../Todo/AddTodo'
import TodoList from '../Todo/TodoList'
import Context from '../context'
import Modal from '../Modal/Modal'
import Loader from '../Components/Loader'
import {FirebaseContext} from '../Context/FireBase/firebaseContext'


export const Home = () => {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [loading, todos, fetchNotes] = useContext(FirebaseContext)


  useEffect(() => {
      fetchNotes()
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