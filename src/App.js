import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Signup from "./Components/Main Page/Signup/Signup";
import MainPage from "./Components/Main Page/MainPage";

import CoverPage from "./Components/Cover Page/CoverPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/coverpage">
          <CoverPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
