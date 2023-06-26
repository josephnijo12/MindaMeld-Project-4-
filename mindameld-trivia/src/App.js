import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard.js";
import Home from "./components/Home.js";
import "./App.css";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
            />
          }
        />
        {loggedInUser && (
          <Route
            path="/dashboard"
            element={
              <Dashboard
                loggedInUser={loggedInUser}
                setLoggedInUser={setLoggedInUser}
              />
            }
          />
        )}
      </Routes>
    </div>
  );
}

export default App;
