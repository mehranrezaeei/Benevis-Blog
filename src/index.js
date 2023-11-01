import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/fonts/fonts.css";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);
