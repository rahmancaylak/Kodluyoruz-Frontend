import { useState } from 'react'

function ListHeader({addTodo, todos}) {
  const initialFormValues = {todo: '', status: 'active', toggle: false};

  const [formTodo, setFormTodo] = useState(initialFormValues);
  const onChangeInput = (e) => {
    setFormTodo({...formTodo, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (formTodo.todo.trim() === '') {
      return false;
    }
    addTodo([...todos, formTodo]);
    setFormTodo(initialFormValues);
  }

  return (
    <>
        <form onSubmit={onSubmit}>
            <input className='new-todo' name="todo" value={formTodo.todo} onChange={onChangeInput} placeholder='What needs to be done?' autoFocus />
        </form>
    </>
  )
}

export default ListHeader