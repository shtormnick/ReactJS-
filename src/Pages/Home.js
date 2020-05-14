import React, {Fragment, useEffect, useContext} from 'react'
import Context from '../context'
import Modal from '../Modal/Modal'
import Loader from '../Components/Loader'
import {FirebaseContext} from '../Context/FireBase/firebaseContext'
import {Form} from '../Components/Form'
import {Notes} from '../Components/Notes'




export const Home = () => {

  const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

  useEffect(() => {
      fetchNotes()
      // eslint-disable-next-line
    }, [])

  return (
      <Fragment>
        <Context.Provider >
          <Modal />
          <Form />
          <React.Suspense fallback={<p>Loading....</p>}>
          </React.Suspense>
          {loading 
            ? <Loader/>
            : <Notes notes={notes} onRemove={removeNote} />
          }
          <hr />
        </Context.Provider>
      </Fragment>
  )
}