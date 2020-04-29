import React, { useState, useContext} from 'react'
import PropTypes from 'prop-types'
import { AlertContext } from '../Context/Alert/alertContext'

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

    function submitHandler(event) {
        event.preventDefault()
        
        if (input.value().trim()) {
            alert.show(' Заметка была создана', 'success')
            onCreate(input.value())
             input.clear()
        } else {
            alert.show(' Введите название заметки', 'success')
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