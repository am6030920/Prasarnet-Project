import React from "react";
import "./TodoFrom.css"

const TodoForm = () => {
  return (
   <div className="todo-container">
      <div className="todo-content">
        <div className="todo-card">
          <h1 className="todo-title">Todo Form Office</h1>

          <form className="todo-form">
            <input type="text" placeholder="Enter Your Name..." className="todo-input" />
          </form>

          <form className="todo-form">
            <input type="text" placeholder="Enter Your Email..." className="todo-input" />
          </form>

          <form className="todo-form">
            <input type="text" placeholder="Enter Your Password..." className="todo-input" />
          </form>

          <div className="date-time-wrapper">
            <input type="date" className="date-input" />
            <input type="time" className="time-input" />
          </div>

          <div className="btn-wrapper">
            <button className="save-btn">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodoForm;
