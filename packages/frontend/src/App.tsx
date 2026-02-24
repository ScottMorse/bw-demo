import { useState } from 'react';
import logo from './assets/bwunster.png';
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
        <img src={logo} className="logo" />
      </div>
      <h1>Rspack + React</h1>
      <div className="card">
        <button type="button" onClick={fetchDemoData}>
          Call backend API
        </button>
        <div className="message-container">
          <p className="message-text">
            Message from backend: <br />
            <br />
            <span className="message-text-value">{message}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
