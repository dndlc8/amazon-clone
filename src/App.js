import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import Footer from "./Footer";
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";


const promise = loadStripe('pk_test_51HhJ01Iko0s0EsQfFwhHuz2yos7RrGfn2SMObRlkgVIqeSOEUZ4HQe1Wzpv9ObTGNV6gj6FDWXwFD0DhceXMZ5Ok00kp3jLxqt');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads because it is empty
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []
  );

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <NavBar />
            <Orders />
            <Footer />
            </Route>
          <Route path="/login">
            <Login />
            </Route>
          <Route path="/checkout">
            <Header />
            <NavBar />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <NavBar />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <NavBar />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
