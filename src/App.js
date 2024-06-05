import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import UserInfo from "./components/UserInfo";
import UserDetails from "./components/UserDetails";
const App = () => {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <UserInfo />
        {<hr/>}
        <UserDetails/>
      </Router>
    </div>
  );
};

export default App;
