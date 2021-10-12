import React from 'react'

import Login from './components/forms/login';
import SignUp from './components/forms/Signup';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Welcome from './pages/welcome'
import Home from './pages/home'

const Routes = () => {
    return (
        <Router>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/signup" component={SignUp} />

                    {/*    New Routes */}
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/home" component={Home} />

                </Switch>
        </Router>
    )
}

export default Routes
