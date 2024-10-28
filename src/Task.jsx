import { useState } from 'react';

function Task({ taskName, isCompleted, onDelete, onToggle }) {
  return (
    <div id="task" style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onToggle} // Toggle task completion
      />
      {taskName}
      <button id="deleteButton" onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Task;
