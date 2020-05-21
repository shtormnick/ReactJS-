import React, { useContext, useState } from 'react'
import { AlertContext } from '../Context/Alert/alertContext'
import { FirebaseContext } from '../Context/FireBase/firebaseContext'

function useInputValue(defaultValue = '') {
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

export const Form = () => {
    const input = useInputValue()
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = event => {
        event.preventDefault()

        if (input.value().trim()) {
            firebase.addNote(input.value().trim()).then(() => {
                alert.show('Заметка была создана', 'success')
            }).catch(() => {
                alert.show('Что-то пошло не так', 'danger')
            })
            input.clear()
        } else {
            alert.show('Введите название заметки', 'success')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <input
                    {...input.bind}
                    type='text'
                    className='form-control'
                    placeholder='Введите название заметки'

                />
            </div>
        </form>
    )
}