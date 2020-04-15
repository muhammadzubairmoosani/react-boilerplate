import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppRoutes from "./Routing/AppRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
