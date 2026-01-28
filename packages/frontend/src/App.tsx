import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { type DemoData, DEV_BACKEND_PORT } from 'shared';

function App() {
  const [message, setMessage] = useState('');

  const fetchDemoData = async () => {
    const response = await fetch(
      `http://localhost:${DEV_BACKEND_PORT}/api/demo-data`,
    );
    const data = (await response.json()) as DemoData;
    setMessage(data.message);
  };

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Rspack + React + TypeScript</h1>
      <div className="card">
        <button type="button" onClick={fetchDemoData}>
          Call backend API
        </button>
        <div className="message-container">
          <p className="message-text">Message from backend: {message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
