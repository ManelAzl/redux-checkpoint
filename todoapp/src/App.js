import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="App">
      <h1>Redux ToDo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;