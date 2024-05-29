import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../state/features/todo/todoSlice'


function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <div>
      <h1 >Todos</h1>
      <hr color='red'/>
      <table style={{border:"1px solid",margin:'auto'}}>
        <thead></thead>
        <tbody>
      {todos.map( (todo) => (
        <tr>
        <td key={todo.id} style={{border:"1px solid"}}>
            {todo.text}
        </td>
        <td style={{border:"1px solid"}}>
        <button onClick={ () => dispatch(removeTodo(todo.id))}>X</button>
        </td>
        </tr>
      )) }
      </tbody>
      </table>
    </div>
  )
}

export default Todos
