import React, { useState } from 'react';
import axios from 'axios';

const Form = props => {
  const [username, setUsername] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    axios.get(`https://api.github.com/users/${username}`).then(response => {
      props.onSubmit(response.data);
      setUsername('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder='Github username'
        required
      />
      <button type='submit'>Add card</button>
    </form>
  );
};

export default Form;
