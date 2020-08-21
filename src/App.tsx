import React from "react";
import NavBar from "./components/nav/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Signin from "./components/auth/Signin";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/signin" component={() => <Signin />} />
          <Route
            path="/signup"
            component={() => (
              <div>
                <h1>signup</h1>
              </div>
            )}
          />
          <Route
            path="/stores/store"
            component={() => (
              <div>
                <h1>specific store</h1>
              </div>
            )}
          />
          <Route
            exact
            path="/stores"
            component={() => (
              <div>
                <h1>all nearby stores</h1>
              </div>
            )}
          />
          <Route
            path="/seller/store/add-product"
            component={() => (
              <div>
                <h1>seller dashboard</h1>
              </div>
            )}
          />
          <Route
            path="/seller/store/products/product"
            component={() => (
              <div>
                <h1>seller dashboard</h1>
              </div>
            )}
          />
          <Route
            path="/seller/store/products"
            component={() => (
              <div>
                <h1>seller dashboard</h1>
              </div>
            )}
          />
          <Route
            exact
            path="/seller/store"
            component={() => (
              <div>
                <h1>seller store dashboard</h1>
              </div>
            )}
          />
          <Route
            exact
            path="/seller"
            component={() => (
              <div>
                <h1>seller main dashboard</h1>
              </div>
            )}
          />
          <Route
            exact
            path="/"
            component={() => (
              <div>
                <h1>home</h1>
              </div>
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
