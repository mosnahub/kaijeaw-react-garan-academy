import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/pages/Home"
import Order from "./Order/pages/Order"
import Navbar from "./shared/pages/NavBar"
import Mos from "./Mos/pages/Mos"
import Oat from "./Oat/pages/Oat"
import Jop from "./Jop/pages/Jop"
import Zee from "./Zee/pages/Zee"
import P from "./P/pages/P"
import Name from "./Name/pages/Name"
import Roger from "./Roger/pages/Roger"
import Tee from "./Tee/pages/Tee"
import Game from "./Game/pages/Game"
import turbo from "./turbo/pages/turbo"

const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/order" component={Order} />
                <Route exact path="/p" component={P} />
                <Route exact path="/mos" component={Mos} />
                <Route exact path="/oat" component={Oat} />
                <Route exact path="/jop" component={Jop} />
                <Route exact path="/zee" component={Zee} />
                <Route exact path="/p" component={P} />
                <Route exact path="/name" component={Name} />
                <Route exact path="/roger" component={Roger} />
                <Route exact path="/tee" component={Tee} />
                <Route exact path="/game" component={Game} />
                <Route exact path="/turbo" component={turbo} />
                {/* <Route exact path="/mcca" component={Mcca} /> */}

            </Switch>
        </Router>
    );
}

export default Routes;