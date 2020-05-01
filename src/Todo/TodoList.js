import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const styles = {
    ul:{
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

const TodoList = ({props, notes}) => {
    return (
        <ul style={styles.ul}>
            { props.notes.map((note, index) => {
                return (
                    <TodoItem 
                    note={note} 
                    key={note.id} 
                    index={index} 
                    />
                )
            })
            }
        </ul>
    )
}

TodoList.propTypes = {
    note: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TodoList