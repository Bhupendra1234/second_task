import React from 'react'
import TodoForm from '../todo-form/index'
const EditTodo = (props) => {
    return (
         <TodoForm  mode='EDIT' param={props.match.params}/>
    )
}

export default EditTodo
