import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../reducers/taskReducer';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask(task.id, editedDescription));
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setEditedDescription(task.description);
    setIsEditing(false);
  };

  return (
    <div className={`task ${task.isDone ? 'task-done' : ''}`}>
      <div>
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={handleToggle}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
        ) : (
          <span>{task.description}</span>
        )}
      </div>
      <div className="task-actions">
        {isEditing ? (
          <>
            <button onClick={handleEdit}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default Task;