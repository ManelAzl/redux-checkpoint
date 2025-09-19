import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, toggleTask } from '../reducers/taskReducer';
import Task from './Task';

const ListTask = () => {
  const { tasks, filter } = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  // Filter tasks based on the current filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  return (
    <div className="task-list">
      <div className="filters">
        <button 
          className={filter === 'all' ? 'active' : ''}
          onClick={() => dispatch(setFilter('all'))}
        >
          All
        </button>
        <button 
          className={filter === 'done' ? 'active' : ''}
          onClick={() => dispatch(setFilter('done'))}
        >
          Done
        </button>
        <button 
          className={filter === 'notDone' ? 'active' : ''}
          onClick={() => dispatch(setFilter('notDone'))}
        >
          Not Done
        </button>
      </div>
      
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;