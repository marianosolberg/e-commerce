import React, { useState } from "react";
import Home from "./components/Home";
import FormRegisterContainer from "./container/FormRegisterContainer";
import Shop from "./components/Shop";
import SingleCard from "./components/SingleCard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormLoginContainer from "./container/FormLoginContainer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { ThemeProvider } from "@material-ui/styles";

import { createMuiTheme, CssBaseline } from "@material-ui/core";

import useMediaQuery from "@material-ui/core/useMediaQuery";

function App() {
  const [modo, setModo] = useState("dark");
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${modo})`);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const changeMode = () => {
    modo === "dark" ? setModo("light") : setModo("dark");
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home changeMode={changeMode} />}
            />
            <Route exact path="/login" component={FormLoginContainer} />
            <Route exact path="/register" component={FormRegisterContainer} />
            <Route
              exact
              path="/shop"
              render={() => <Shop changeMode={changeMode} />}
            />
            <Route
              exact
              path="/singlecard/:id"
              render={({ match }) => (
                <SingleCard changeMode={changeMode} id={match.params.id} />
              )}
            />
          </Switch>
        </BrowserRouter>

        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
