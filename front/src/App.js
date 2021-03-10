import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import FormRegisterContainer from "./container/FormRegisterContainer";
import Shop from "./components/Shop";
import SingleCard from "./components/SingleCard";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={FormRegisterContainer} />
        <Route path="/shop" component={Shop} />
        <Route path="/singlecard" component={SingleCard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
