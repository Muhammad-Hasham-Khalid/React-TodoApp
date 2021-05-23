import { useState } from 'react';

export const Revise = () => {
  // let data = 'World';
  const [data, setData] = useState('World');

  const handleClick = () => {
    // data = 'Hasham';
    setData('Hasham');
  };

  return (
    <>
      <h1>Hello {data}</h1>
      <button onClick={handleClick}>Change</button>
    </>
  );
};
