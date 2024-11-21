import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; 
import AppHeader from './components/header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
  const todoData = [
    { id: 1, label: 'Drink Coffee', important: false },
    { id: 2, label: 'Implement React Application', important: true },
    { id: 3, label: 'Make notes from your study', important: false },
    { id: 4, label: 'Do not drink alcohol', important: false },
  ];

  return (
    <div className="container mt-5">
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
