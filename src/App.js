import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import '../src/assets/styles/base.css'
import Header from '../src/components/layouts/Header'
import Footer from '../src/components/layouts/Footer'
import Home from '../src/pages/Home'
import Product from '../src/pages/Product'
import Users from '../src/pages/Users'
import Login from './pages/Users/Login';
import { AuthProvider } from '../src/components/auth/Auth'
import PrivateRoute from '../src/components/auth/PrivateRoute'
import * as firebase from 'firebase'
import ProductDetail from './pages/ProductDetail';

const App = () => {

  return (
    <AuthProvider>
      <Header />
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
          <Route path="/products" component={Product} />
          <Route path="/:productId" component={ProductDetail} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </AuthProvider>
  );
}

export default App;
