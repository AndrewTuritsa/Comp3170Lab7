import { useState } from 'react';

function Task({ taskName, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div id='task' style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={toggleCompletion}
      />
      {taskName}
      <button onClick={onDelete} id='deleteButton'>Delete</button>
    </div>
  );
}

export default Task;
