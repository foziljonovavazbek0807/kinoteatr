import React from "react";
import Head from "./Head";
import Main from "./pages/Main"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Head />
      </div>
      <Routes>
        <Route exact path="/"component={<Head />} />
        <Route path="/main" component={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
