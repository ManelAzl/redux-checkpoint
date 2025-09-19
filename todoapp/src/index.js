import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import taskReducer from './reducers/taskReducer';

// Create Redux store
const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);