import React, {useContext} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import { AlertContext } from '../Context/Alert/alertContext'


export const Notes = ({notes, onRemove}) => {
    const alert = useContext(AlertContext)

    function buttonHandler(note) {
        onRemove(note)
        alert.show('Заметка была удалена', 'danger')
    }

    return(
        <TransitionGroup component='ul' className='list-group'>
            { notes.map(note => (
                <CSSTransition
                    key={note.id}
                    classNames={'note'}
                    timeout={800}
                >
                    <li className='list-group-item note'>
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
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}