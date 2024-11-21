import React from 'react';
import { createRoot } from 'react-dom/client';

const TodoList = () => {
  const items = ['Install React', 'Study React', 'Use React', 'Build React App'];

  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
      <li>{items[3]}</li>
    </ul>
  );
};

const SearchPanel = () => {
  const searchText = "Type here to search";
  const searchStyle = {
    fontSize: '20px'
  };

  return (
    <input
      style={searchStyle}
      placeholder={searchText}
      disabled={true}
    />
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const App = () => {
  const isLoggedIn = false;
  const loginBox = <span>Log in to the system</span>;
  const welcomeBox = <span>Welcome Back!</span>;

  return (
    <div>
      {isLoggedIn ? welcomeBox : loginBox}
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
