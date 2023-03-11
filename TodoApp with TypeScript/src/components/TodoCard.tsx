import React from 'react'
import { Todo } from '../model'

interface Props {
    todo: Todo
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoCard: React.FC<Props> = ({ todo, setTodos }) => {
  return (
    <div>{todo.todo}</div>
  )
}

export default TodoCard