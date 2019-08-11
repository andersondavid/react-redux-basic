import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function ExampleDispatch() {

  const [newItem, setNewItem] = useState('');

  const dispatch = useDispatch();

  const sendText = () => {
    dispatch({
      type: 'ADD_TEXT',
      newItem: newItem
    })
  }

  return (
    <div>
      <input type="text" onChange={e => setNewItem(e.target.value)} />
      <button onClick={sendText} >Enviar Texto</button>
    </div>
  )
}

export default ExampleDispatch;
