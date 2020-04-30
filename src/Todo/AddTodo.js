import React, { useState, useContext} from 'react'
import PropTypes from 'prop-types'
import { AlertContext } from '../Context/Alert/alertContext'
import { FirebaseContext } from '../Context/FireBase/firebaseContext'
import TodoItem from './TodoItem'

function useInputValue (defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({onCreate}){
    const input = useInputValue('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    function submitHandler(event) {
        event.preventDefault()
        
        if (input.value().trim()) {
            firebase.addNote(value.trim).then(() =>{
                alert.show('Заметка была создана', 'success')
            }).catch(() => {
                alert.show('Что-то пошло не так', 'danger')
            })
            onCreate(input.value())
             input.clear()
        } else {
            alert.show('Введите название заметки', 'success')
        }     
    }

    return(
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input {...input.bind}
                type='text' 
                className='form-control' 
                placeholder='Введите название заметки' 
            />
            <button type='submit'>Add todos</button>
        </form>
    )
} 

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo