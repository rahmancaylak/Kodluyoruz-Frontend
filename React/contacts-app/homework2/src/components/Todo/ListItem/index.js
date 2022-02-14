import {useEffect} from "react";

function ListItem({
  todos,
  addTodo,
  filterTodos,
  setFilterLength
}) {
  const filtered = todos.filter((item) => {
    return filterTodos === "All" ? item : item.status === filterTodos;
  });

  useEffect(() => {
    setFilterLength(filtered.length); 
  })
  
  const updateTodo = (e) => {
    let upTodo = e.target.checked === true ? "completed" : "active";
    todos[e.currentTarget.value].status = upTodo;
    addTodo([...todos]);
  };

  function deleteTodo(e) {
    e.currentTarget.checked = false;
    todos.splice(e.currentTarget.value, 1);
    addTodo([...todos]);
  }

  return (
    <>
      {filtered.map((todo, i) => (
        <li key={i} className={todo.status}>
          <div className="view">
            <input
              className="toggle"
              value={i}
              type="checkbox"
              onChange={updateTodo}
            />
            <label>{todo.todo}</label>
            <button className="destroy" value={i} onClick={deleteTodo}></button>
          </div>
        </li>
      ))}
    </>
  );
}

export default ListItem;
