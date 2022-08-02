import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Signup from "./Components/Main Page/Signup/Signup";
import MainPage from "./Components/Main Page/MainPage";

import CoverPage from "./Components/Cover Page/CoverPage";

// Only Main Page
import Layout from "./Components/Main Page/Layout/Layout";
import Settings from "./Components/Main Page/Settings/Settings";
import Prediction from "./Components/Main Page/Prediction/Prediction";

import TrendPrediction from "./Components/Main Page/Trend Prediction/TrendPrediction";

const App = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log("USER INFO from App.js", user);

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <MainPage />
          </Layout>
        </Route>
        <Route path="/coverpage">
          <CoverPage />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/trendprediction">
          <Layout>
            <TrendPrediction />
          </Layout>
        </Route>
        <Route path="/prediction">
          <Layout>
            <Prediction />
          </Layout>
        </Route>

        {isAuthenticated ? (
          <Route path="/settings">
            <Layout>
              <Settings />
            </Layout>
          </Route>
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
    </>
  );
};

export default App;
