import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HbaYyB5mPUMsmVTbAShRrYJzBrAAu49XgxyqpW6NsbsMME6dCvJvZKabU4pBSAxNkcgc3glrGglJxqh5hcKf63D0076z0gsMr"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //WILL ONLY RUN ONCE WHEN THE COMPONENT LOADS
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []); //SINCE THIS IS BLANK
  return (
    //Bem Naming Convention FIND OUT?
    <Router>
      <div className="app">
        {/* PUTTING A COMPONENT OUTSIDE THE SWITCH STATEMENTS ENSURES
         IT GETS DISPLAYED REGARDLESS OF THE PAGE BEING RENDERED */}

        {/* SWITCH STATEMENTS WITH ROUTES GIVE DIFFERENT PAGES TO BE RUN */}
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
