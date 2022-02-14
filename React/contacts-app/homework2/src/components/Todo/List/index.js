import { useState } from 'react'
import ListHeader from '../ListHeader';
import ListContent from '../ListContent'
import ListFooter from '../ListFooter';

function List() {

  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState('All')
  const [filterLength, setFilterLength] = useState(0);

  return (
      <>
        <ListHeader 
        todos={todos} 
        addTodo={setTodos}
        />

        <ListContent 
        todos={todos} 
        addTodo={setTodos} 
        filterTodos={filterTodos}
        setFilterLength={setFilterLength}
        />

        <ListFooter 
        todos={todos} 
        addTodo={setTodos} 
        filterTodos={filterTodos} 
        setFilterTodos={setFilterTodos}
        filterLength={filterLength}
        />
      </>
  )
}

export default List