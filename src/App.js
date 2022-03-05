import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');

  return (
    <div>
      <h1>Vercel teste</h1>
      <form>
        <input placeholder='Name' type='text' onChange={e => setName(e.target.value)} />
      </form>

      <p>{name}</p>
    </div>
  );
}

export default App;
