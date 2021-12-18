import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[data, setData] = useState([]);

  const URL = 'https://jsonplaceholder.typicode.com/todos';

  useEffect(() => {
    fetch(URL).then(response => response.json()).then(todos => setData(todos));
  })

  return (
    <>
      <table>
          <th>S.No</th>
          <th>User ID</th>
          <th>Title</th>
          <th>Status</th>
      {data.length > 0 && data.map((todo) => <>
        
          <tr>
            <td>{todo.id}</td>
            <td>{todo.userId}</td>
            <td>{todo.title}</td>
            <td>{todo.completed ? <p>Completed</p> : <p>Incomplete</p>}</td>
          </tr>
      </>)}
      </table>
    </>
  );
}

export default App;
