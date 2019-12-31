import React from "react";
import { ApolloProvider } from "react-apollo";
import { HashRouter as Router, Route } from "react-router-dom";
import client from "./apolloClient";
import Home from "./Home";
import Detail from "./Detail";
import "./globalStyles";
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <main>
          <Route exact={true} path={"/"} component={Home} />
          <Route path={"/details/:movieId"} component={Detail} />
        </main>
      </Router>
    </ApolloProvider>
  );
}

export default App;
