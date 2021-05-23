export const Todo = ({ todo, handleUpdate, handleDelete }) => {
  return (
    <div className="Todo">
      <span onClick={() => handleUpdate(todo.id)}>
        {todo.completed ? (
          <i className="fas fa-check-circle"></i>
        ) : (
          <i className="far fa-circle"></i>
        )}
      </span>
      <span>{todo.title}</span>
      <button
        className="Todo__deleteButton"
        onClick={() => handleDelete(todo.id)}
      >
        DELETE
      </button>
    </div>
  );
};
