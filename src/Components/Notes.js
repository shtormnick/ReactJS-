import React, {useContext} from 'react'
import { AlertContext } from '../Context/Alert/alertContext'


export const Notes = ({notes, onRemove}) => {
    const alert = useContext(AlertContext)

    function buttonHandler(note) {
        onRemove(note)
        alert.show('Заметка была удалена', 'danger')
    }

    return(
        <ul className='list-group'>
            { notes.map(note => (
                <li 
                    className='list-group-item note'
                    key={note.id}
                >
                    <div>
                        <strong>{note.title}</strong>
                        <small>{new Date().toLocaleDateString()}</small>
                    </div>
                    <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => buttonHandler(note.id)}
                    >
                        &times;
                    </button>
                </li>
            ))}
        </ul>
    )
}