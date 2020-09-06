import React from 'react';
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

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Switch>
          <Route path="/users/login" component={Login} />
          <Route path="/users" component={Users} />
          <Route path="/products" component={Product} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
