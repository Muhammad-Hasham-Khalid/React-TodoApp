import { useState } from 'react';
import { Todos } from './components/Todos';
import { AddTodo } from './components/AddTodo';

export const App = () => {
  // Ctrl + space -> auto import
  const [todos, setTodos] = useState([]);

  // update
  const handleUpdate = id => {
    // logic
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          // update and return
          const updatedTodo = { ...todo };
          updatedTodo.completed = !updatedTodo.completed;
          return updatedTodo;
        } else {
          return todo;
        }
      })
    );
  };

  // delete
  const handleDelete = id => {
    // logic
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleAdd = title => {
    // id: auto
    // completed: false
    const newTodo = {
      id: new Date().getTime(),
      title: title,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
  };

  return (
    <div>
      <AddTodo handleAdd={handleAdd} />
      <Todos
        todos={todos}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </div>
  );
};

// props == Parent to child
