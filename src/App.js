import { React, useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
    console.log(" Token Url point : ", token);
  }, []);

  return (
    //BEM naming concept
    <div className="app">{!token ? <Login /> : <h2>Logged in</h2>}</div>
  );
}

export default App;
