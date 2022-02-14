/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

function ListFooter({ todos, addTodo, setFilterTodos, filterLength }) {
  const [activeCategory, setActiveCategory] = useState("All");

  function clearCompleted(){
    let activeTodos = todos.filter((item) => item.status === 'active')
    addTodo(activeTodos)
    let toggle = document.querySelectorAll('.toggle')
    toggle.forEach(element => {
      element.checked = false
    });
  }

  return (
    <>
      {todos.length > 0 && (
        <footer className="footer">
          <span className="todo-count">
            <strong>{filterLength}</strong> items left
          </span>

          <ul className="filters">
            <li>
              <a
                onClick={() => {
                  setFilterTodos("All");
                  setActiveCategory("All");
                }}
                className={activeCategory === "All" ? "selected" : null}
              >
                All
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setFilterTodos("active");
                  setActiveCategory("active");
                }}
                className={activeCategory === "active" ? "selected" : ""}
              >
                Active
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setFilterTodos("completed");
                  setActiveCategory("completed");
                }}
                className={activeCategory === "completed" ? "selected" : ""}
              >
                Completed
              </a>
            </li>
          </ul>

          <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
        </footer>
      )}
    </>
  );
}

export default ListFooter;
