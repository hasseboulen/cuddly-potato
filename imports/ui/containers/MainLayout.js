import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavigationBar } from '../components/common';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

const MainLayout = props => (
    <Router>
        <div>
            <NavigationBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path = '/about' component={About} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default MainLayout;
