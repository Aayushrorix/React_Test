import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../state/features/todo/todoSlice'


function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <div>
      <div>Todos</div>
      <ol>
      {todos.map( (todo) => (
        <li key={todo.id}>
            {todo.text}
            <button onClick={ () => dispatch(removeTodo(todo.id))}>X</button>
        </li>
      )) }
      </ol>
    </div>
  )
}

export default Todos
