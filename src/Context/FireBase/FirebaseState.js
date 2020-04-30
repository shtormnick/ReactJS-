import React, {useReducer} from 'react'
import axios from 'axios'
import {FirebaseContext} from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'
import { SHOW_LOADER, REMOVE_NOTE } from '../types'

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({children}) => {
    const initialState ={
        todos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState)
    
    const showloader = () => dispatch({type: SHOW_LOADER})

    const fetchNotes = async () => {
        showloader()
        const res = await axios.get(`${url}/todos.json`)
        
        console.log('fetchNotes', res.data)
    }

    const addNote = async title => {
        const todos = {
            title, date: new Date().toJSON()
        }

        const res = await axios.post(`${url}/todos.json`, todos)
        console.log('addNote', res.date)
    }

    const removeNote = async id => {
        await axios.delete(`${url}/todos/${id}.json`)

        dispatch ({
            type: REMOVE_NOTE,
            payload: id 
        })
    }

    return (
        <FirebaseContext.Provider value={{
            showloader, addNote, removeNote, fetchNotes,
            loading: state. loading,
            todos: state.todos
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}