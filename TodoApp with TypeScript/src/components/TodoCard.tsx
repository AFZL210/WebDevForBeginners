import React, { useState } from 'react'
import { Todo } from '../model'
import "../styles.css"
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

interface Props {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoCard: React.FC<Props> = ({ todo, setTodos, todos }) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleEdit = (e:React.FormEvent, id:number) => {
    e.preventDefault();

    setTodos(todos.map(todo => (
      todo.id===id?{...todo,todo:editTodo}:todo
    )))
    setEdit(!edit)
  }

  return (
    <form className='todos__single' onSubmit={(e) => handleEdit(e, todo.id)}>
      {
        edit ? (<input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />) : (

          todo.isDone ? (
            <s className='todos__single--text'>
              {todo.todo}
            </s>
          ) : (
            <span className='todos__single--text'>
              {todo.todo}
            </span>
          )

        )
      }

      <div>
        <span className='icon'
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit)
            }
          }

          }
        ><ModeEditIcon /></span>
        <span className="icon" onClick={() => handleDone(todo.id)}><DoneIcon /></span>
        <span className="icon" onClick={() => handleDelete(todo.id)}><DeleteIcon /></span>
      </div>
    </form>
  )
}

export default TodoCard