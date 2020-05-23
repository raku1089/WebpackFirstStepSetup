import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Users from "./containers/Users";
import asyncComponent from "./hoc/asyncComponent";

const AsynPizza = asyncComponent(() => {
  return import("./containers/Pizza");
});

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">users</Link>
          <Link to="/pizza">Pizza</Link>
        </div>
        <div>
          <Route path="/" exact component={Users} />
          <Route path="/pizza" component={AsynPizza} />
        </div>
      </div>
    );
  }
}
export default App;
