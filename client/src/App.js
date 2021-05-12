import React from "react";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Stats from "./pages/Stats";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Add from "./ManageItemForm/ManageForm"
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import NotFound from "./components/404Page/404";
import { useState } from "react";

function App() {
  const [userName, useUserName] = useState("");
  //const [isLogged, useIsloged] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header />
        <Wrapper>
          <Switch>
            <Route exact path="/">
              {<Welcome login={userName} />}
            </Route>
            <Route exact path="/home">
              <Home login={userName} />
            </Route>
            <Route exact path="/login">
              <Login setlogin={useUserName} />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/stats">
              <Stats />
            </Route>
            <Route exact path="/add">
              <Add />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
