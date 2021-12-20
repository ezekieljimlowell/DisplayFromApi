import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import PopoverDisplay from './Popover';

function App() {
  const [data, setData] = useState([]);

  const URL = 'https://jsonplaceholder.typicode.com/todos?userId=2';

  useEffect(() => {
    fetch(URL).then(response => response.json()).then(todos => setData(todos));
  }, [])

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        {data.length > 0 && data.map((todo) => <tbody key={todo.id}>
          <tr>
            <td>{todo.id}</td>
            <td>{todo.userId}</td>
            <td>{todo.title}</td>
            <td>{todo.completed ? <p>Completed</p> : <p>Incomplete</p>}</td>
            <td>{todo.id === 25 && <OverlayTrigger placement='top' overlay={(props) => <Tooltip {...props}>{todo.title}</Tooltip>}>
              <Button>
                Disabled button
              </Button>
            </OverlayTrigger>}
            </td>
          </tr>
        </tbody>)}
      </table>
      <PopoverDisplay />
    </>
  );
}

export default App;
