import React from 'react'

export const Notes = ({notes, onRemove}) => {
    return(
        <ul className='list-group'>
            {notes && notes.map(note => (
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
                        onClick={() => onRemove(note.id)}
                    >
                        &times;
                    </button>
                </li>
            ))}
        </ul>
    )
}