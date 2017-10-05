import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
          <div>
              <Header />
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path = '/about' component={About} />
                  <Route component={NotFound} />
              </Switch>
          </div>
      </Router>
    );
  }
}
