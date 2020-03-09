import React from "react";
import Landing from "./landing";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

import { connect, Provider } from "react-redux";
import store from "./_stores/index";
import Router from "./router";
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router/>
      </ThemeProvider>
    </Provider>
  );
}


export default App;
