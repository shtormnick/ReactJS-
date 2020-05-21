import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'


const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borederRadius: '5px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    },
    strong: {
        marginRight: '1rem'
    }
}

function TodoItem({ note, index, onChange }) {
    const { removeTodo } = useContext(Context)
    const classes = []
    if (note.completed) {
        classes.push('done')
    }
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input
                    type="checkbox"
                    checked={note.completed}
                    style={styles.input}
                    onChange={() => onChange(note.id)}
                />
                <strong>{index + 1}</strong>
                &nbsp;
                <strong style={styles.strong}>{note.title}</strong>
                <small>{new Date().toLocaleDateString()}</small>
            </span>
            <button className='btn btn-danger btn-sm' onClick={removeTodo.bind(null, note.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    note: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}

export default TodoItem