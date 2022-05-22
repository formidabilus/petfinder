import { useState, useEffect } from "react";
import { getAnimals } from "../src/api/getAnimals";
import { fetchAccessToken } from "./api/fetchToken";

import Homepage from "./pages/homepage";

import "./App.css";

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [animals, setAnimals] = useState(null);
  useEffect(() => {
    fetchAccessToken(setAccessToken);
    getAnimals(accessToken, setAnimals);
    console.log(accessToken);
  }, []);

  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
