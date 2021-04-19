import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./nav";
import Home from "./Home";
import About from "./About";
import Catalog from "./Catalog";
import Automobile from "./Automobile";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";
import MyComponent from "./parallex";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Catalog" component={Catalog} />
        <Route path="/Automobile" component={Automobile} />
        <Route path="/Service" component={Service} />
        <Route path="/Contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
