import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState([{ id: 1, name: 'Task 1', completed: false }]);
  const [filter, setFilter] = useState('All');

  // Function to delete a task by its id
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Function to add a new task
  const addTask = (taskName) => {
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Function to toggle a task's completion status (only allows checking once)
  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId && !task.completed
          ? { ...task, completed: true }
          : task
      )
    );
  };

  // Function to set the filter type
  const setFilterType = (type) => {
    setFilter(type);
  };

  // Calculate the number of pending tasks
  const pendingTasksCount = tasks.filter((task) => !task.completed).length;

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return true; // For 'All'
  });

  return (
    <div>
      <h1>Task List</h1>

      {/* Display the pending tasks count */}
      <p id='taskCounter'>Pending Tasks: {pendingTasksCount}</p>

      {/* Filter Buttons */}
      <div>
        <button className='filterButton' onClick={() => setFilterType('All')}>All</button>
        <button className='filterButton' onClick={() => setFilterType('Completed')}>Completed</button>
        <button className='filterButton' onClick={() => setFilterType('Pending')}>Pending</button>
      </div>

      {/* Display filtered tasks */}
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          taskName={task.name}
          isCompleted={task.completed}
          onDelete={() => deleteTask(task.id)}
          onToggle={() => toggleTaskCompletion(task.id)}
        />
      ))}

      {/* Render TaskForm to create new tasks */}
      <TaskForm onAddTask={addTask} />
    </div>
  );
}

export default App;
