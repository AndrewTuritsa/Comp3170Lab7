import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [newTask, setNewTask] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button id='addTask' type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
