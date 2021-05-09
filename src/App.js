import React, { useState } from 'react';
import './App.css';
import background from './Components/images/hexagonBackground.png';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);
  

  // CALLING FORM FUNCTION TO ADD INPUT TO LIST
  const taskInput = ( newTask ) => {
    setTasks( [...tasks, newTask] );
  }
  // REMOVE TASK FUNCTION
  const taskRemove = ( thisTask ) => {
    const newTasks = tasks.filter((task) => task !== thisTask);
    setTasks( [...newTasks])
  }

  return (
    <div className="appContainer" style={{ backgroundImage: `url(${background})`, width: '100%', height: '70rem'}}>
        <TodoForm onNewTask={ taskInput } />
        <TodoList onRemove={ taskRemove } tasks={ tasks } />
    </div>
  );
}

export default App;
