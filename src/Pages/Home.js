import React, {Fragment, useEffect, useContext} from 'react'
import Context from '../context'
import Modal from '../Modal/Modal'
import Loader from '../Components/Loader'
import {FirebaseContext} from '../Context/FireBase/firebaseContext'
import AddTodo from '../Todo/AddTodo'
import TodoList from '../Todo/TodoList'




export const Home = () => {

  const {loading, note, fetchNotes, removeNote} = useContext(FirebaseContext)


  useEffect(() => {
      fetchNotes()
      // eslint-disable-next-line
    }, [])

  return (
      <Fragment>
        <Context.Provider >
          <Modal />
          <AddTodo />
          <React.Suspense fallback={<p>Loading....</p>}>
          </React.Suspense>
          {loading && <Loader/>}
          <hr />
          <TodoList />
        </Context.Provider>
      </Fragment>
  )
}