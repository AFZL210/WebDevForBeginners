import React from 'react'
import { Todo } from '../model'
import TodoCard from './TodoCard'

interface Props{
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className='todos'>
      {todos.map(todo => (
        <TodoCard todo={todo} todos={todos} setTodos={setTodos} key={todo.id}/>
      ))}
    </div>
  )
}

export default TodoList