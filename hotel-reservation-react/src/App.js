import React, { useEffect } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'

import './App.css';

import Layout from './components/Layout/Layout'
import Auth from './pages/Auth/Auth';
import Bookings from './pages/Bookings/Bookings';
import Cart from './pages/Cart/Cart';
import AddRoom from './pages/Home/AddRoom/AddRoom';
import Home from './pages/Home/Home';

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const routes = (
    <Switch>
      <Route path="/login" component={ Auth } />
      <Route path="/add-room" component={ AddRoom } />
      <Route path="/cart" component={ Cart } />
      <Route path="/bookings" component={ Bookings } />
      <Route path="/" component={ Home } />
      <Redirect to="/" />
    </Switch>
  )
  return (
    <Layout>
      { routes }
    </Layout>
    
  );
}

export default App;
