import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import UserInfo from "./components/UserInfo";
const App = () => {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <UserInfo />
      </Router>
    </div>
  );
};

export default App;
