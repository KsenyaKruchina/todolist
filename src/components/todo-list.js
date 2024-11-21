import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {
  const elements = todos.map((item, index) => {
    return (
      <li>
        <TodoListItem {...item} 
        />
      </li>
    );
  });

  return (
    <ul>
      {elements}
    </ul>
  );
};

export default TodoList;
