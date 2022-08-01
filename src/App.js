import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Signup from "./Components/Main Page/Signup/Signup";
import MainPage from "./Components/Main Page/MainPage";

import CoverPage from "./Components/Cover Page/CoverPage";

// Only Main Page
import Header from "./Components/Main Page/Header/Header";
import Footer from "./Components/Main Page/Footer/Footer";
import Settings from "./Components/Main Page/Settings/Settings";

import TrendPrediction from "./Components/Main Page/Trend Prediction/TrendPrediction";

const App = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log("USER INFO from App.js", user);

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/coverpage">
          <CoverPage />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/trendprediction">
          <TrendPrediction />
          <Footer />
        </Route>
        {isAuthenticated ? (
          <Route path="/settings">
            <Settings />
          </Route>
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
      {/* <CoverPage /> */}
    </>
  );
};

export default App;
