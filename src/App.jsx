import React, { useState } from 'react';
import Task from "./Task";
import TaskForm from "./TaskForm";

function App() {
  const [tasks, setTasks] = useState([{ id: 1, name: 'Task 1' }]);
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const addTask = (taskName) => {
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1 id='title'>Task List</h1>
      <div id='taskForm'>
        <TaskForm onAddTask={addTask} />
      </div>
      <div id='taskListArea'>
        {tasks.map((task) => (
          <Task
            key={task.id}
            taskName={task.name}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
        </div>
    </div>
  );
}

export default App;