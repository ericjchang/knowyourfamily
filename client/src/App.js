import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Index from "./pages/Index";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Individuals from "./pages/Individuals";
import Family from "./pages/Family";
import Search from "./pages/Search";

function App() {
  return (
    <div>
      <Router>
        {/* //<Navbar /> */}
        <Switch>
          <Route path="/family/:id">
            <Family />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/individuals/:id">
            <Individuals />
          </Route>
          <Route path="/dashboard">{/* <Dashboard /> */}</Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
