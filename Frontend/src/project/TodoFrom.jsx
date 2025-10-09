import React , {useState} from "react";
import "./TodoFrom.css"
import { useNavigate } from "react-router-dom";

const TodoForm = () => {
  const navigation = useNavigate();
  const [Name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(""); // clear old errors

    if (Name.trim().length === 0) {
      setNameError("Please fill the meeting name");
      return;
    }

    if (Name.trim().length < 5) {
      setNameError("Enter your proper meeting name");
      return;
    }

    // ✅ If all validations pass:
    alert("Form saved successfully!");
  };
  return (
  
   <div className="todo-container">
      <div className="todo-content">
        <div className="todo-card">
          <h1 className="todo-title">Todo Form Office</h1>

        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Meating Title..." className="todo-input" 
            value={Name}
            onChange={(e) => setName(e.target.value)}/>
              {nameError && (
              <span style={{ color: "red", fontSize: "13px" }}>
                {nameError}
              </span>
              )}

          <form className="todo-form">
            <input type="text" placeholder="Enter  Email..." className="todo-input" />
          </form>

          <form className="todo-form">
            <input type="text" placeholder="Enter HR Name..." className="todo-input" />
          </form>

          <div className="date-time-wrapper">
            <input type="date" className="date-input" />
            <input type="time" className="time-input" />
          </div>

          <div className="btn-wrapper">
            <button className="save-btn" onClick={handleSubmit}>Save</button>
          </div>
             </form>
        </div>
     
      </div>
    </div>
  );
};
export default TodoForm;
