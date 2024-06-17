import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);

  const addTask = () => {
    if (inputValue.trim() === '') {
      setErrorMessage('Task name cannot be empty.');
      setShowError(true); // Show the error message
      setTimeout(() => {
        setShowError(false); // Hide the error message after 3 seconds
        setErrorMessage(''); // Clear the error message
      }, 3000);
      return; // Exit early if input is empty
    }

    setTasks([...tasks, inputValue]);
    setInputValue(''); // Clear the input field after adding the task
    setShowError(false); // Clear any previous error message immediately
    setErrorMessage(''); // Clear any previous error message
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To Do App Demo Using React</h1>
      <div>
        <input
          type="text"
          placeholder="Enter task name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTask}>Add a task</button>
        {showError && <p className="error-message">{errorMessage}</p>}
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div className="task-item" key={index}>
            <input type="checkbox" alt="list of tasks" />
            <span>{task}</span>
            <button onClick={() => deleteTask(index)}>Delete task</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
