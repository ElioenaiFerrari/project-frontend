import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import GlobalStyle from "./styles/global";
import Routes from "./routes";

import { Header } from "./components";

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}
