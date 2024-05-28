import React from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../state/features/todo/todoSlice'

export default function AddTodo() {
    const [input, setInput] = React.useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler}>
      <input type="text" placeholder='Enter a Todo' value={input} onChange={(e)=> setInput(e.target.value)}/>
      <button type="submit">Add Todo</button>
    </form>
  )
}
