import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppRoutes from "./Routing/AppRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
      {/* <h2>{process.env.pord.REACT_APP_BASE_URL}</h2> */}
    </div>
  );
}

export default App;
