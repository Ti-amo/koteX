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
import UserInfo from '../src/pages/UserInfo'
import Users from '../src/pages/Users'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/products" component={Product} />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
