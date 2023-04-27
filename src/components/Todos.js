import React, { useState } from "react";

export default function Todos() {
  const [tasks, setTasks] = useState(["Do Laundry"]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = () => {
    if (inputValue.length > 0) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };
  const removeTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  return (
    <div className="widget-todos container">
      <h2>Todos</h2>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter a task"
        onChange={handleChange}
      />
      <button onClick={addTask}>Submit</button>
      {tasks.map((t, i) => {
        return (
          <div className="programmer" key={i}>
            {t} <button onClick={() => removeTask(t)}>X</button>
          </div>
        );
      })}
    </div>
  );
}
