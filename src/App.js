import { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

import { getAnimals } from "../src/api/getAnimals";
import { fetchAccessToken } from "./api/fetchToken";

function App() {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    getAnimals(accessToken);
    fetchAccessToken(setAccessToken);
    console.log(accessToken);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
