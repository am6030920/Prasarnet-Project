import React, { useState } from 'react';
import "./TodoList.css";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(["Learn HTML", "Learn CSS", "Learn React"]);

  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todoList-container">
      <div className="todoList-wrapper">
        <div className="todoList-card">
          <h2 className="todoList-title">My Todo List</h2>

          <div className="todoList-inputWrapper">
            <input
              type="text"
              placeholder="Add a new task"
              className="todoList-input"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />

            <div className="todoList-btnWrapper">
              <button className="todoList-addBtn" onClick={handleAddTask}>
                Add
              </button>
            </div>
          </div>

          <ul className="todoList-ul">
            {tasks.map((item, index) => (
              <li key={index} className="todoList-li">
                <span>{item}</span>
                <button
                  className="todoList-deleteBtn"
                  onClick={() => handleDeleteTask(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
