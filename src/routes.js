import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/pages/Home"
import Order from "./Order/pages/Order"
import Navbar from "./shared/pages/NavBar"
import P from './P/pages/P';


const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/order" component={Order} />
                <Route exact path="/p" component={P} />
            </Switch>
        </Router>
    );
}

export default Routes;