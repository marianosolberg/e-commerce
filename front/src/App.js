import React from "react";
import Home from "./components/Home";
import FormRegisterContainer from "./container/FormRegisterContainer";
import Shop from "./components/Shop";
import SingleCard from "./components/SingleCard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormLoginContainer from "./container/FormLoginContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={FormLoginContainer} />
          <Route exact path="/register" component={FormRegisterContainer} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/singlecard/:id" component={SingleCard} />
        </Switch>
      </BrowserRouter>
<<<<<<< HEAD
      <footer>
        <Footer />
      </footer>
=======
      <Footer />
>>>>>>> b67c31aeb528027abe9ee76b69b147c4072e07ad
    </div>
  );
}

export default App;
