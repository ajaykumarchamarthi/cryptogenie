import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Signup from "./Components/Main Page/Signup/Signup";
import MainPage from "./Components/Main Page/MainPage";

import LandingPage from "./Components/Cover Page/Landing Page/LandingPage";

import CoverPage from "./Components/Cover Page/CoverPage";

const App = () => {
  // const [signinShow, setSigninShow] = useState(false);

  // const handleSigninClose = () => setSigninShow(!signinShow);

  // const handleSigninShow = () => setSigninShow(!signinShow);

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
