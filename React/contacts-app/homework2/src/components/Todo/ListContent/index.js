import React from "react";
import ListItem from "../ListItem";

function ListContent({
  todos,
  addTodo,
  filterTodos,
  setFilterLength
}) {

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        <ListItem
          todos={todos}
          addTodo={addTodo}
          filterTodos={filterTodos}
          setFilterLength={setFilterLength}
        />
      </ul>
    </section>
  );
}

export default ListContent;
