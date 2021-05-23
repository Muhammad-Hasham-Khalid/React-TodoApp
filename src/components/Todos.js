import { Todo } from './Todo';

export const Todos = ({ todos, handleUpdate, handleDelete }) => {
  return (
    <>
      {todos.map(todo => (
        <Todo
          todo={todo}
          key={todo.id}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      ))}
    </>
  );
};

// optional
Todos.defaultProps = {
  todos: [],
};
