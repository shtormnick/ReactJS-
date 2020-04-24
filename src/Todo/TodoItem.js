import React, {useContext} from 'react'
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

function TodoItem({todo, index, onChange}){
const {removeTodo} = useContext(Context)
const classes = []
if (todo.completed){
    classes.push('done')
}
return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input 
                type="checkbox" 
                checked = {todo.completed}
                style={styles.input} 
                onChange={() => onChange(todo.id)} 
                />
                <strong>{index + 1}</strong>
                &nbsp;
                <strong style={styles.strong}>{todo.title}</strong>
                <small>{new Date().toLocaleDateString()}</small>
            </span>
            <button className='btn btn-danger btn-sm' onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}

export default TodoItem