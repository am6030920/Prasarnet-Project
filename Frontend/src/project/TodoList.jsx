import React from 'react'
import "./TodoList.css"

const TodoList = () => {
  return (
    <div className="todoList-container">
      <div className="todoList-wrapper">
        <div className="todoList-card">
          <h2 className="todoList-title">My Todo List</h2>
          <div className="todoList-inputWrapper">
            <input type="text" placeholder="Add a new task" className="todoList-input" />
            <div className="todoList-btnWrapper">
              <button className="todoList-addBtn">Add</button>
            </div>
          </div>

          <ul className="todoList-ul">
            <li className="todoList-li">Learn HTML</li>
            <li className="todoList-li">Learn CSS</li>
            <li className="todoList-li">Learn JavaScript</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;