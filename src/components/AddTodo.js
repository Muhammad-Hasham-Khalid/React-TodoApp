import { useState } from 'react';

export const AddTodo = ({ handleAdd }) => {
  const [text, setText] = useState('');

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    if (text !== '') {
      handleAdd(text);
      setText('');
    }
  };

  return (
    <div className="AddTodo">
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
};
