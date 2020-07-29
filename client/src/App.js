import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Navigation from "./components/Navbar";
// import { GuardProvider, GuardedRout

import Index from "./pages/Index";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Individuals from "./pages/Individuals";
import Family from "./pages/Family";
import Search from "./pages/Search";
import Map from "./pages/Map";
import EditIndividual from "./pages/EditIndividual";
import store from "./store";
import InputIndividuals from "./pages/InputIndividuals";

function App() {
  // const requireLogin = (to, from, next) => {
  //   if (to.meta.auth) {
  //     if (getIsLoggedIn()) {
  //       next();
  //     }
  //     next.redirect("/login");
  //   } else {
  //     next();
  //   }
  // };
  return (
    <div>
      <Router>
        {/* <GuardProvider guards={[requireLogin]}> */}
        <Provider store={store}>
          <Navigation />
          <Switch>
            <Route path="/map">
              <Map />
            </Route>
            <Route path="/family/:id">
              <Family />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/individual/edit/:id">
              <EditIndividual />
            </Route>
            <Route path="/individual/form">
              <InputIndividuals />
            </Route>
            <Route path="/individuals/:id">
              <Individuals />
            </Route>
            <Route path="/dashboard">
              <Index />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Login />
            </Route>
          </Switch>
        </Provider>
        {/* </GuardProvider> */}
      </Router>
    </div>
  );
}

export default App;
