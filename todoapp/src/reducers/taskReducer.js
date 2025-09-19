// Initial state
const initialState = {
  tasks: [
    { id: 1, description: "Learn React", isDone: true },
    { id: 2, description: "Learn Redux", isDone: false },
    { id: 3, description: "Build a project", isDone: false }
  ],
  filter: 'all'
};

// Action types
const ADD_TASK = 'ADD_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
const EDIT_TASK = 'EDIT_TASK';
const SET_FILTER = 'SET_FILTER';

// Action creators
export const addTask = (description) => ({
  type: ADD_TASK,
  payload: { id: Date.now(), description, isDone: false }
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id
});

export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: { id, description }
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter
});

// Reducer
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
      
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload 
            ? { ...task, isDone: !task.isDone } 
            : task
        )
      };
      
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.description }
            : task
        )
      };
      
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };
      
    default:
      return state;
  }
};

export default taskReducer;