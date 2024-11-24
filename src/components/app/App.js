import React, { Component } from 'react';
import TodoList from './components/todo-list';
import './App.css';

class App extends Component {
  state = {
    todoData: [
      { id: 1, label: 'Drink Coffee', important: false },
      { id: 2, label: 'Make Awesome App', important: true },
      { id: 3, label: 'Have a lunch', important: false },
    ],
  };

  onDeleted = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return { todoData: newArray };
    });
  };

  render() {
    const { todoData } = this.state;

    return (
      <div className="todo-app">
        <TodoList todos={todoData} onDeleted={this.onDeleted} />
      </div>
    );
  }
}

export default App;
